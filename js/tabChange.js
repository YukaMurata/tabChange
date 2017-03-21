$(function () {
	
	$('a[href^="#"]').click(function(){
		var target = location.hash;
		// var target = $(this.hash);
		var tab = $(this).children();

		tabColorChange(tab);
		contentChange(target);

	});

	function tabColorChange(tab){
		var tabs = $('.button');
		tabs.removeClass('on');
		tab.addClass('on');
	}

	function contentChange(target){
		$('.content').hide();
		$(target).show();
	}

});