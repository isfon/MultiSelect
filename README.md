# Multi Select Component
Angular Components makes it easy to quickly create a pair of searchable fields for selecting multiple options from a large set of values.


![alt tag](https://raw.githubusercontent.com/isfon/MultiSelect/master/demo/demo.PNG)

#Dependencies

AngularJS (angular.min.js) (tested with 1.5)
Bootstrap (at least the CSS)

###Demo
- https://isfon.github.io/MultiSelect/

###Usage

####Include the CSS and JS files. Make sure Angular and your app.js files are included first.
```html
<link rel="stylesheet" href="dist/css/style.css">
<script src="dist/js/multi-select.js"></script>
```

####Add the directive tag in your HTML.
```html
<multi-select options="$ctrl.options"><multi-select>
```

####Add/customize this set of options as an object in your controller.
```js
angular
	.module('app',['multiselectcomp'])
	.controller('demoController', demoController);
 
function demoController (){
	this.options = {
	    searchPlaceHolder: 'Typing to filter.',
	    labelAll: 'All Countries',
	    labelSelected: 'Selected Countries',
	    orderProperty: 'name',
	    items: [
			{"name": "Afghanistan", "code": "AF"},
			{"name": "Åland Islands", "code": "AX"},
			{"name": "Albania", "code": "AL"},
			{"name": "Algeria", "code": "DZ"},
			{"name": "Martinique", "code": "MQ"},
			{"name": "Mauritania", "code": "MR"},
			{"name": "Mauritius", "code": "MU"},
			{"name": "Mayotte", "code": "YT"},
			{"name": "Uzbekistan", "code": "UZ"},
			{"name": "Vanuatu", "code": "VU"},
			{"name": "Venezuela", "code": "VE"},
			{"name": "Viet Nam", "code": "VN"},
			{"name": "Virgin Islands, British", "code": "VG"},
			{"name": "Virgin Islands, U.S.", "code": "VI"},
			{"name": "Wallis and Futuna", "code": "WF"},
			{"name": "Western Sahara", "code": "EH"},
			{"name": "Yemen", "code": "YE"},
			{"name": "Zambia", "code": "ZM"},
			{"name": "Zimbabwe", "code": "ZW"}
		],
	    selectedItems: [] 
	};
}
```
