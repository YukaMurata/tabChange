$(function () {
	var isAnimation =true;
	
	$('a[href^="#"]').click(function(){
		if(isAnimation = true){
			isAnimation = false;
		var target = $(this.hash);
		var tab = $(this).parent();

		tabColorChange(tab);
		contentChange(target);
	}
	isAnimation = true;

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