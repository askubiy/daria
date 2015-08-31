$("#contact li").each(function(i) {
	tabwidth = $(this).width() - 40;
	$(this).css({'left' : '-'+tabwidth+'px'});
	$(this).mouseenter(function() {
		$(this).animate({'left' : 0});
	})
}).mouseleave(function() {
	tabwidth = $(this).width() - 40;
	$(this).animate({'left' : '-'+tabwidth+'px'});
});
$("#contact").mouseenter(function() {
	$(this).css('z-index', '6');
}).mouseleave(function() {
	$(this).css('z-index', '1');
});