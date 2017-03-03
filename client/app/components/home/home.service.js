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

	console.log(service);
	return service;

};

export default HomeService;
