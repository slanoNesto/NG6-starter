import angular from 'angular';
import heatMapTableDirective from './heatMapTable.directive';
import './heatMapTable.scss';

let heatMapTable = angular.module('heatMapTable', [])

    .directive('heatMapTable', heatMapTableDirective);

export default heatMapTable.name;
