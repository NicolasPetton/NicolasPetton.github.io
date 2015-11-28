 // Copyright (C) 2015 Free Software Foundation, Inc.

 // Author: Nicolas Petton <nicolas@petton.fr>

 // This file is free software: you can redistribute it and/or modify
 // it under the terms of the GNU General Public License as published by
 // the Free Software Foundation, either version 3 of the License, or
 // (at your option) any later version.

 // This file is distributed in the hope that it will be useful,
 // but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 // GNU General Public License for more details.

(function() {
	function scrollTo(top, complete) {
		var body = $("html, body");
		body.stop().animate({scrollTop: top}, 400, 'swing', complete);
	}

	function scrollAfterHeader() {
		var top = $('.header').height();
		scrollTo(top);
	}

	function scrollToAnchor(name, complete) {
		var target = $(name);
		var top = target.offset().top;
		scrollTo(top, complete);
	}

	function setupAnchors() {
		$('a').click(function(evt) {
			var anchor = $(evt.target);
			var href = anchor.attr('href');
			if(href[0] === '#') {
				scrollToAnchor(href, function() {
					window.location = href;
				});
				evt.preventDefault();
			}
		});
	}

	$(function() {
		$('.header .learn-more').click(scrollAfterHeader);
		setupAnchors();
	});
})();
