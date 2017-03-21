$(function () {
	
	$('a[href^="#"]').click(function(){

		var target = $(this.hash);
		var tab = $(this).children();
		var newTab = target.attr("id");
		var openTab = $('.content:visible').attr("id");

		if(newTab == openTab){

		}else{
			tabColorChange(tab);
			contentChange(target);	
		}

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