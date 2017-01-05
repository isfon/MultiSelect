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
		templateUrl: 'dist/view/multiSelect.html'
	});
