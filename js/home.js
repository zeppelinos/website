$( document ).ready(function(){
  $('.sidenav').sidenav();
  $('.sidenav-close').on( "click", function() {
	  $('.sidenav-trigger').sideNav('hide');
	});
  
  $('.modal').modal();

  setTimeout(function () {
	  $('#imgHero1').removeClass('hidden');
	}, 500);
	setTimeout(function () {
	  $('#imgHero2').removeClass('hidden');
	}, 1200);
	setTimeout(function () {
	  $('#imgHero3').removeClass('hidden');
	}, 1500);
	setTimeout(function () {
	  $('#imgHero4').removeClass('hidden');
	}, 1600);
  
  $(window).scroll(function() {
	  var features = $('.features').offset().top;
	  var projects = $('.projects-title').offset().top;

	  if ($(window).scrollTop() >= (features - 400)){
	    $('.feature1').addClass('animated fadeInDown');
	    $('.feature1').removeClass('hidden');
	    setTimeout(function () {
	      $('.feature2').addClass('animated fadeInDown');
	      $('.feature2').removeClass('hidden');
	    }, 300);
	    setTimeout(function () {
        $('.feature3').addClass('animated fadeInDown');
        $('.feature3').removeClass('hidden');
      }, 700);
	  }
	  if ($(window).scrollTop() >= (projects - 400)){
	    $('.project-img1').removeClass('hidden');
	    setTimeout(function () {
	     $('.project-img2').removeClass('hidden');
	    }, 200);
	    setTimeout(function () {
	     $('.project-img3').removeClass('hidden');
	    }, 400);
	    setTimeout(function () {
	     $('.project-img4').removeClass('hidden');
	    }, 600);
	    setTimeout(function () {
	     $('.project-img5').removeClass('hidden');
	    }, 800);
	  }
	});

})


