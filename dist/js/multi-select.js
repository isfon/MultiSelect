/**
*  MultiSelect Module
*
* Description
*Dual multiselect componet made on angularjs
*By: Israel Fonseca
*https://github.com/isfon
*/

angular
	.module('multiselectcomp',[])
	.component('multiSelect', {
		bindings: {
			options: '=',
		},
		controller: function (){
			this.change = function(from, to, index) {
		        if (index >= 0) {
		          to.push(from[index]);
		          from.splice(index, 1);
		        } else {
		          for (var i = 0; i < from.length; i++) {
		            to.push(from[i]);
		         }
		          from.length = 0;
	               }
	        }
		},
		template: `
			<div class="multiSelect">
		       <div class="row">
		        <div class="col-lg-5 col-md-5 col-sm-5">
		          <input class="form-control" placeholder="{{$ctrl.options.searchPlaceHolder}}" ng-model="$ctrl.searchItem">
		        </div>
		       </div>
		       <div class="row">
		        <div class="col-lg-6 col-md-6 col-sm-6">
		          <label>{{$ctrl.options.labelAll}}</label>
		          <button type="button" class="btn btn-warning btn-xs" ng-click="$ctrl.change($ctrl.options.items, $ctrl.options.selectedItems, -1)">Select All</button>
		          <div class="pool">
		            <ul>
		              <li ng-repeat="item in $ctrl.options.items | filter: $ctrl.searchItem | orderBy: $ctrl.options.orderProperty">
		                <a href="" ng-click="$ctrl.change($ctrl.options.items, $ctrl.options.selectedItems, $ctrl.options.items.indexOf(item))">{{item[$ctrl.options.labelShow]}}</a>
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div class="col-lg-6 col-md-6 col-sm-6">
		          <label>{{$ctrl.options.labelSelected}}</label>
		          <button type="button" class="btn btn-warning btn-xs" ng-click="$ctrl.change($ctrl.options.selectedItems, $ctrl.options.items, -1)">Deselect All</button>
		          <div class="pool">
		            <ul>
		              <li ng-repeat="item in $ctrl.options.selectedItems | orderBy: $ctrl.options.orderProperty">
		                <a href="" ng-click="$ctrl.change($ctrl.options.selectedItems, $ctrl.options.items, $ctrl.options.selectedItems.indexOf(item))">{{item[$ctrl.options.labelShow]}}</a>
		              </li>
		            </ul>
		          </div>
		        </div>
		       </div>
		    </div>
		`
	});
