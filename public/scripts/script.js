/* Preloader */
$(window).on("load", function() {
    $("#stats").fadeOut();
    $("#preloader").delay(500).fadeOut();
    consoleText(['Hi-Im Open Labs a College Chatbot', 'And Im Coming Soon'], 'home-heading-2',['','#08b2bf']);
});

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop()> 800)
});



function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 45)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

// Team section
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 300,
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
$(function() {
    $("#skill-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
            offset: 'bottom-in-view'
        });
});

document.getElementById('sign_u').addEventListener("click", function() {
    document.querySelector('#bg-modal').style.display = "flex";
    window.location.hash = "home";
    document.querySelector("body").classList.add("overflow");
});

document.querySelector('#close').addEventListener("click", function() {
    document.querySelector('#bg-modal').style.display = "none";
    window.location.hash = "";
    document.querySelector("body").classList.remove("overflow");
});

document.getElementById('login').addEventListener("click", function() {
    document.querySelector('#modal-form').style.display = "flex";
    window.location.hash = "home";
    document.querySelector("body").classList.add("overflow");
});

document.querySelector('#close1').addEventListener("click", function() {
    document.querySelector('#modal-form').style.display = "none";
    window.location.hash = "";
    document.querySelector("body").classList.remove("overflow");
});



