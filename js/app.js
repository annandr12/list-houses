'use strict';

/* App Module */

var houses = angular.module('houses', [
	'housesControllers',
	'ngDialog',
    'housesDirectives',
    'housesServices'
	]);
houses.config(['ngDialogProvider', function (ngDialogProvider) {
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: true,
                closeByDocument: true,
                closeByEscape: true,
                appendTo: false,
                preCloseCallback: function () {
                    console.log('default pre-close callback');
                }
            });
        }]);
