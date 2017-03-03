import template from './heatMapTable.html';

let heatMapTableDirective = function () {
    'ngInject';
    return {
        restrict: 'E',
        scope: {
			data: '=heatMapData'
		},
        template,
        link: function (scope, element) {
			
			console.log(scope.data);

        }
    };
};

export default heatMapTableDirective;
