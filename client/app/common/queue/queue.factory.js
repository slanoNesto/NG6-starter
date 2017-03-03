import rows from './data.js';

function Queue($q, $http) {
	'ngInject';
	return function(passedConfig) {

		passedConfig = passedConfig || {};

		const DEFAULT_MAX_CALLS = 6;

		const queue = {
				Queue: {
					queueConfig: {
					queue: [],
					hasMore: true,
					pendingCount: 0,
					maxCalls: passedConfig.maxCalls || DEFAULT_MAX_CALLS,
					doneCallback: passedConfig.doneCallback || angular.noop,
					callNext: function() {
						let conf = this.getNextFromQueue();
						if (conf) {
							return conf.call();
						} else {
							this.hasMore = false;
						}
					},
					getNextFromQueue: function() {
						return _.find(this.queue, {status: 0}) || null;
					},
					havePending: function() {
						return _.find(this.queue, {status: 1}) || null;
					},
					done: function() {
						this.queue = [];
						this.doneCallback();
					}
				},
				getData: function getData(url, params) {
					if (!url) throw new Error('queue.getData - You must pass an url');

					this.queueConfig.hasMore = true;

					let request = {
						url: url || '',
						params: params || {},
						call: call.bind(this),
						status: 0,
						method: 'GET',
						defer: $q.defer()
					}

					this.queueConfig.queue.push(request);

					if (this.queueConfig.pendingCount < this.queueConfig.maxCalls) {
						return request.call();
					} else {
						return request.defer.promise;
					}

					function call() {
						request.status = 1;
						this.queueConfig.pendingCount++;

						let delay = (Math.random() * (5 - 2)).toFixed(3) * 1000;

						$http({
							method: request.method,
							url: request.url,
							data: request.params
						}).then(() => {
							let index = Math.floor(Math.random() * 73) + 1;
							let response = rows[index];
					        request.defer.resolve(response);
						}, (error) => {
							request.defer.reject(error);
						}).finally(() => {
							request.status = 2;
							this.queueConfig.pendingCount--;

							if (this.queueConfig.hasMore) {
								this.queueConfig.callNext();
					        }

					        if (!this.queueConfig.havePending()) {
				        		this.queueConfig.done();
				        	}
						});

						return request.defer.promise;
					}
				}
			}
		};

		return queue;
	}
}

export default Queue;
