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
		},  options =  $.extend(defaults, options),
			uSel = $(defaults.selector),
			spd  = defaults.speed;
		return this.each(function() {
			var o    = options,
				yDiv = $(this),
				oHei = $(yDiv).height();
			$(yDiv).not('.opened').addClass('closed');
			$('.closed').height(defaults.minHeight);
			$('.opened').height(oHei);
			uSel.click(function() {
				if ($(this).closest(yDiv).hasClass('closed') ) {
					$('.opened').removeClass('opened').addClass('closed').animate({height:defaults.minHeight}, spd);
					$(this).closest(yDiv).removeClass('closed').addClass('opened').animate({height:oHei}, spd);
				} else if ( $('.opened').length == 1 ) {
					$(this).closest(yDiv).removeClass('opened').addClass('closed').animate({height:defaults.minHeight}, spd);
				}
			});
		});
	};
})(jQuery);




