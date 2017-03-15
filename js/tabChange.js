$(function () {
	var isAnimation =true;
	
	$('a[href^="#"]').click(function(){

		var target = $(this.hash);
		var tab = $(this).children();

		tabColorChange(tab);
		contentChange(target);
	isAnimation = true;
	

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