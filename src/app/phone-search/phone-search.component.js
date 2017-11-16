'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneSearch')
  .component('phoneSearch', {
    bindings: {
      selectedOrder: '@',
      onSearchChange: '&',
      onSelectChange: '&',
    },
    controller: PhoneSearchController,
    controllerAs: 'phoneSearchVm',
    templateUrl: 'phone-search.component.html',
  });


PhoneSearchController.$inject = [
  '$element',
];

function PhoneSearchController($element) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {}

  function postLink() {}

}
