$( document ).ready(function(){
  $('.sidenav').sidenav();
  $('.sidenav-close').on( "click", function() {
	  $('.sidenav-trigger').sideNav('hide');
	});
  
  $('.modal').modal();
  
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


	var images = [
		"./img/animation/imagen1_1.svg",
		"./img/animation/imagen1_2.svg",
		"./img/animation/imagen1_3.svg",
		"./img/animation/imagen1_4.svg",
		"./img/animation/imagen2.svg",
	];
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 1 time
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#image1").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
  	triggerElement: "#trigger", duration: 400})
			.setTween(tween)
			.addTo(controller);
	
})


