// Author: Shivam Bhalla
// Email: shivambh28@gmail.com
// Author URL: http://devncode.com
// License: OpenSource, Permission for modificatin Granted, KEEP AUTHOR INFORMATION INTACT 

(function($) {
	$.fn.ezToggle = function(options) {
		var defaults = {
				selector : '.yourSelector',
				speed :  300,
				openedClassName : 'opened',
				closedClassName : 'closed',
			}, 
		options = $.extend(defaults, options);

			return this.each(function() {
					
				var originalHeight = $(this).outerHeight(true);

				options.minHeight = options.minHeight || $(this).find(defaults.selector).outerHeight(true);

				if (!$(this).hasClass(defaults.openedClassName)) {
					$(this).addClass(defaults.closedClassName).height(options.minHeight);
				} 		

				$(this).children(defaults.selector).on('click', function(e) {
					e.preventDefault();

					var $parent = $(this).parent();
					
					if ( $parent.hasClass(defaults.closedClassName) ) {

						$('.'+defaults.openedClassName)
							.removeClass(defaults.openedClassName)
							.addClass(defaults.closedClassName)
							.animate( {
								height : options.minHeight
							}, defaults.speed );

						$parent.removeClass(defaults.closedClassName)
							   .addClass(defaults.openedClassName)
							   .animate({
							       height : originalHeight
							   }, defaults.speed);

					} else if ( $parent.hasClass(defaults.openedClassName) ) {

						$parent.removeClass(defaults.openedClassName)
							   .addClass(defaults.closedClassName)
							   .animate({
							       height : options.minHeight
							   }, defaults.speed);

					}
				});

			});

	};
}) (jQuery);




