import Queue from './queue.factory';
import _ from 'lodash';

let queueModule = angular.module('app.queue', [])

.factory('Queue', Queue)
  
.name;

export default queueModule;
