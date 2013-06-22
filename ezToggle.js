(function($){
	$.fn.ezToggle = function(options) {
		var defaults = {
			selector: '.selector',
			minHeight : sHei,
			speed : 200
		},  options =  $.extend(defaults, options),
			uSel = $(defaults.selector),
			sHei = Math.floor($(defaults.selector).outerHeight(true)),
			spd  = defaults.speed;
		return this.each(function() {
			var o    = options,
				yDiv = $(this),
				oHei = $(yDiv).height();
			$(yDiv).not('.opened').addClass('closed');
			$('.closed').height(sHei);
			$('.opened').height(oHei);
			uSel.click(function() {
				if ($(this).closest(yDiv).hasClass('closed') ) {
					$('.opened').removeClass('opened').addClass('closed').animate({height:sHei}, spd);
					$(this).closest(yDiv).removeClass('closed').addClass('opened').animate({height:oHei}, spd);
				} else if ( $('.opened').length == 1 ) {
					$(this).closest(yDiv).removeClass('opened').addClass('closed').animate({height:sHei}, spd);
				}
			});
		});
	};
})(jQuery);




