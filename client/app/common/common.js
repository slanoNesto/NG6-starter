import angular from 'angular';
import User from './user/user';
import HeatMapTable from './heatMapTable/heatMapTable';
import QueueModule from './queue/queue';

let commonModule = angular.module('app.common', [
	User,
	HeatMapTable,
	QueueModule
])
  
.name;

export default commonModule;
