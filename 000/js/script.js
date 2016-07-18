$(function(){
	var tag = false;
	$('.snd-nav').parent().each(function(){
			$(this).mouseover(function(){
				$(this).children('.snd-nav').css('display','block');
			});
			$(this).mouseout(function(){
				$(this).children('.snd-nav').css('display','none');
			});
	});
	$('#sricon').click(function(){
		if (!tag) {
			$('#search-input').show();
			tag = true;
		}else {
			$('#search-input').hide();
			tag = false;
		}
	});
		
});