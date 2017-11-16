'use strict';

import angular from 'angular';

angular.module('phoneSearchApp')
  .component('phoneSearchApp', {
    controller: PhoneSearchAppController,
    controllerAs: 'phoneSearchAppVm',
    templateUrl: 'app.component.html',
  });


PhoneSearchAppController.$inject = [
  '$element',
];

function PhoneSearchAppController($element) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    vm.onPhoneSearchChange = onPhoneSearchChange;
    vm.onPhoneSelectChange = onPhoneSelectChange;
  }

  function postLink() {}

  function onPhoneSearchChange(search) {
    console.log(search); // eslint-disable-line no-console
  }

  function onPhoneSelectChange(sort) {
    console.log(sort); // eslint-disable-line no-console
  }

}
