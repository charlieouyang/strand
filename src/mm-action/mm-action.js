/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function (scope) {

	scope.Action = Polymer({
		is: "mm-action",

		behaviors: [
			StrandTraits.Resolvable,
			StrandTraits.Stylable
		],

		properties: {
			href: {
				type: String,
				value: false,
				reflectToAttribute: true
			},
			underline: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			target: {
				type: String,
				value: "_self",
				reflectToAttribute: true
			},
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			}
		},

		updateClass: function(underline) {
			var o = {};
			o.action = true;
			o.underline = underline;
			return this.classBlock(o);
		}

	});
	
})(window.Strand = window.Strand || {});