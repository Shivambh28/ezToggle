/*  Author: Shivam Bhalla
	Email: shivambh28@gmail.com
	Author URL: http://devncode.com
	License: OpenSource, Permission for modificatin Granted, KEEP AUTHOR INFORMATION INTACT 
*/
(function($){
	$.fn.ezToggle = function(options) {
		var defaults = {
			selector: '.selector',
			minHeight : $('.selector').outerHeight(true),
			speed : 200
		},  options =  $.extend(defaults, options);
		return this.each(function() {
			var o    = options,
				yDiv = $(this),
				oHei = $(yDiv).height();
			$(yDiv).not('.opened').addClass('closed');
			$('.closed').height(defaults.minHeight);
			$('.opened').height(oHei);
			$(defaults.selector).click(function() {
				if ($(this).closest(yDiv).hasClass('closed') ) {
					$('.opened').removeClass('opened').addClass('closed').animate({height:defaults.minHeight}, defaults.speed);
					$(this).closest(yDiv).removeClass('closed').addClass('opened').animate({height:oHei}, defaults.speed);
				} else if ( $('.opened').length == 1 ) {
					$(this).closest(yDiv).removeClass('opened').addClass('closed').animate({height:defaults.minHeight}, defaults.speed);
				}
			});
		});
	};
})(jQuery);




