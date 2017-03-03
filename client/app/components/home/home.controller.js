class HomeController {
	constructor(HomeService) {
		'ngInject';

		this.HomeService = HomeService;
		this.rowsNum = 0;
		this.data = [];

		this.init();
	}

	init() {
		this.rowsNum = 20;

		for (let i = 0; i < this.rowsNum; i++) {
			this.HomeService.Queue.getData('http://www.json-generator.com/api/json/get/cwnxYwTdDS?indent=2', {id: 1}).then((response) => {
				this.data.push(response);
			});
		}
	}
}

export default HomeController;
