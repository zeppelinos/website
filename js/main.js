  var show = false;
function myFunction(x) {

    x.classList.toggle("change");
    if (show) {
        $(".mobile-nav").css('opacity', 1)
                          .slideUp(200)
                          .animate(
                            { opacity: 0 },
                            { queue: false, duration: 100 }
                          );
        show = false;
    } else {
        $(".mobile-nav").css('opacity', 0)
                          .slideDown(200)
                          .animate(
                            { opacity: 1 },
                            { queue: false, duration: 400 }
                          );
        show = true;
    }

}
