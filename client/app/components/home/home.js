import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HomeService from './home.service';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.service('HomeService', HomeService)
  
.name;

export default homeModule;
