$(function () {

	$('a[href^="#"]').click(function(){
		var target = $(this.hash);
		var tab = $(this).parent();

		tabColorChange(tab);
		contentChange(target);

	});

	function tabColorChange(tab){
		var tabs = $('.button p');
		tabs.removeClass('on');
		tab.addClass('on');
	}

	function contentChange(target){
		$('.content').hide();
		$(target).show();
	}

});