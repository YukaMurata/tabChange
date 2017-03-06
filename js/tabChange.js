$(function () {

	$('a[href^="#"]').click(function(){
		var href = $(this).attr('href');
		var content = $(href == "#" || href == "" ? 'href':href);

		$('.content').css('display', 'none');
				$(href).css('display', 'block');
});

});