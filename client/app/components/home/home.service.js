/*import data from './data.js';
import _ from 'lodash';

let HomeService = function ($q, $timeout) {
	'ngInject';

	const rows = data;

	const maxCalls = 6;

	var queueConfig = {
		queue: [],
		hasMore: true,
		pending: 0,
		getNext: function() {
			let config = _.find(this.queue, {status: 0}) || null;
			if (config) {
				console.log(this.pending);
				return config.call();
			} else {
				this.hasMore = false;
				queueConfig.queue = [];
			}
		}
	};

	const service = {
		getData
	};

	return service;

	function getData(params) {
		queueConfig.hasMore = true;

		let config = {
			call: call,
			status: 0,
			params: params,
			defer: $q.defer()
		}

		queueConfig.queue.push(config);

		if (queueConfig.pending < maxCalls) {
			return config.call(params);
		} else {
			return config.defer.promise;
		}

		function call() {
			this.status = 1;
			queueConfig.pending++;

			let delay = 1 * 1000;
			//let delay = (Math.random() * (5 - 2)).toFixed(3) * 1000;
			//console.log(delay);
			$timeout(() => {
				this.status = 2;
				queueConfig.pending--;
				let index = Math.floor(Math.random() * 73) + 1;
		        this.defer.resolve(rows[index]);
		        if (queueConfig.hasMore) {
					queueConfig.getNext();
		        }
		    }, delay);

			return this.defer.promise;
		}
	}

};

export default HomeService;*/

import _ from 'lodash';

let HomeService = function ($q, $timeout, Queue) {
	'ngInject';

	let service = {
		
	};
	
	_.extend(service, new Queue({
		maxCalls: 8,
		doneCallback: () => {
			console.log('done from service');
		}
	}));

	return service;

};

export default HomeService;