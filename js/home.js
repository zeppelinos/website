$( document ).ready(function(){
  $('.sidenav').sidenav();
  $('.sidenav-close').on( "click", function() {
	  $('.sidenav-trigger').sideNav('hide');
	});
  
  $('.modal').modal();
  setTimeout(function () {
	  $('.hero-img').removeClass('hidden');
	}, 500);
  
  $(window).scroll(function() {
	  var features = $('.features').offset().top;
	  var projects = $('.projects-title').offset().top;

	  if ($(window).scrollTop() >= (features - 400)){
	    $('.feature1').addClass('animated fadeInDown');
	    $('.feature1').removeClass('hidden');
	    setTimeout(function () {
	      $('.feature2').addClass('animated fadeInDown');
	      $('.feature2').removeClass('hidden');
	    }, 500);
	    setTimeout(function () {
        $('.feature3').addClass('animated fadeInDown');
        $('.feature3').removeClass('hidden');
      }, 1000);
	  }
	  if ($(window).scrollTop() >= (projects - 400)){
	    $('.project-img').removeClass('hidden');
	  }
	});

})


