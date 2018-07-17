/* Preloader */
$(window).on("load", function () {
    $("#stats").fadeOut();
    $("#preloader").delay(500).fadeOut();
});
// Team section
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        // responsive: {
        //     // breakpoint from 0 up
        //     0: {
        //         items: 1
        //     },
        //     // breakpoint from 480 up
        //     480: {
        //         items: 2
        //     }
        // }
    });
});

// =====Progress bars=======
$(function () {
    $("#skill-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});