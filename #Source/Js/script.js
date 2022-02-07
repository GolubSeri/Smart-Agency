function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

function amh(){
	$(".amh").each(function () {
	  	var mh = 0, block_class = this.classList.item(0), lim = this.classList.item(2);
	  	if ($(window).width() >= Number(lim))
	  	{
			$("." + block_class).each(function () {
				$("." + block_class).css('min-height', 'auto');
				var h_block = $(this).height();
			  	if(h_block > mh) {
			     	mh = h_block;
			    };
			});
			$("." + block_class).css('min-height', mh + 'px');
	  	} else {
	  		$("." + block_class).each(function () {
				$("." + block_class).css('min-height', 'auto');
			});
	  	}
	});
}

amh();
jQuery(window).resize(function() { 
	amh();
 });
