$(document).on('click', '.nav li', function(){
	if($('.nav li').hasClass('active')){
		$('.nav li').removeClass('active');
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	}else{
		$(this).addClass('active');
	}

	if($('.sub-menu').hasClass('opened')){
		$(this).addClass('active');
		$('.sub-menu').removeClass('opened');
		$(this).find('.sub-menu').addClass('opened');
	}else{
		$(this).find('.sub-menu').addClass('opened');
	}
});

$(document).on('click', '.res-icon', function(){
	$(this).find('.fa').toggleClass('fa-bars');
	$(this).find('.fa').toggleClass('fa-close');
	$('.grp').toggleClass('open');
	$('.sub-menu').removeClass('opened');
	$('.nav li').removeClass('active');
})

$(document).on('click', '.nav li.active', function(){
	$(this).removeClass('active');
	$(this).find('.sub-menu').removeClass('opened');

})

$(document).ready(function(){
	$('.left-wall, .right-wall').addClass('loaded');
})

if($('.faq').length){
	$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700);
});
}



$('.scrolltop').click(function(){
    $('body,html').animate({scrollTop:0}, 900);
  });
  $(document).scroll(function(){
    if($(this).scrollTop() > 1000){
      $('.scrolltop').addClass('arrow');
    }
    else{
      $('.scrolltop').removeClass('arrow');
    }
  });