/*Hamburger function*/
function navHamToggle() {
    'use strict';
    var menu = $('.nav-list'), social = $('.social');
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    /*For width of screen less then 1000px and mre than 500px*/
    function forTablet() {
      if (window.innerWidth < 900 && window.innerWidth > 500) {

          menu.css({'right': '2%'});

          if (toggle.classList.contains('is-active') === true) {

            $('.social li').css('display', 'inline');
            menu.css({'bottom': '0%', 'opacity': '0'});
            social.css({'margin-left': '70%', 'opacity': '0'});

            menu.show().animate({
                bottom: '12%',
                opacity: '1'
            }, 400);

            social.css('width', '35%').show().animate({
                marginLeft: '55%',
                opacity: '1'
            }, 400);

        } else {
            menu.animate({bottom: '0%', opacity: '0'}, 400).hide(450);
            social.animate({marginLeft: '70%', opacity: '0'}, 400).hide(450);
        }
      }

    }

    /*For width of screen less then 500px and more than 390px*/

    function forMobileLarge() {
        if (window.innerWidth < 499 && window.innerWidth > 390) {

            menu.css({'right': '12%'});

            if (toggle.classList.contains('is-active') === true) {

                $('.social li').css('display', 'inline');
                menu.css({'bottom': '0%', 'opacity': '0'});
                social.css({'margin-left': '60%', 'opacity': '0'});

                menu.show().animate({
                    bottom: '12%',
                    opacity: '1'
                }, 400);

                social.css('width', '62%').show().animate({
                    marginLeft: '20%',
                    opacity: '1'
                }, 400);

            } else {
                menu.animate({bottom: '0%', opacity: '0'}, 400).hide(450);
                social.animate({marginLeft: '60%', opacity: '0'}, 400).hide(450);
            }
        }

    }

    /*For width of screen less then 370px and more than 320px*/

    function forMobileMiddle() {
        if (window.innerWidth < 389 && window.innerWidth > 321) {

            menu.css({'right': '15%'});
            
            if (toggle.classList.contains('is-active') === true) {

                $('.social li').css('display', 'inline');
                menu.css({'bottom': '0%', 'opacity': '0'});
                social.css({'margin-left': '60%', 'opacity': '0'});

                menu.show().animate({
                    bottom: '12%',
                    opacity: '1'
                }, 400);

                social.css('width', '75%').show().animate({
                    marginLeft: '10%',
                    opacity: '1'
                }, 400);

            } else {
                menu.animate({bottom: '0%', opacity: '0'}, 400).hide(450);
                social.animate({marginLeft: '60%', opacity: '0'}, 400).hide(450);
            }
        }

    }

    /*For width of screen less then 320px and more than 250px*/

    function forMobileSmall() {
        if (window.innerWidth <= 320 && window.innerWidth > 250) {

            menu.css({'right': '17%'});

            if (toggle.classList.contains('is-active') === true) {

                $('.social li').css('display', 'inline');
                menu.css({'bottom': '0%', 'opacity': '0'});
                social.css({'margin-left': '60%', 'opacity': '0'});

                menu.show().animate({
                    bottom: '12%',
                    opacity: '1'
                }, 400);

                social.css('width', '80%').show().animate({
                    marginLeft: '0%',
                    opacity: '1'
                }, 400);

            } else {
                menu.animate({bottom: '0%', opacity: '0'}, 400).hide(450);
                social.animate({marginLeft: '60%', opacity: '0'}, 400).hide(450);
            }
        }

    }

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            forTablet();
            forMobileLarge();
            forMobileMiddle();
            forMobileSmall();
        });
    }

}
/*Bubbles animations for Laptops*/
function thinkingAnimationsForLaptop() {
    'use strict';
    var thirdBubble = $('#third-bubble');
    var secondBubble = $('#second-bubble');
    var firstBubble = $('#first-bubble');

    function animateThoughtsThinking(){

        secondBubble.css('display', 'none');
        firstBubble.css('display', 'none');
        thirdBubble.css('display', 'none');

        setTimeout(function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim 0.6s 1', 'margin-left' : '180px', 'top': '155px'});

            setTimeout(function(){

                secondBubble.css({'display': 'block', 'animation': 'secondBubbleAnim 0.6s 1', 'top': '115px', 'margin-left': '140px'});

                setTimeout(function () {

                    firstBubble.css({'display': 'block', 'animation': 'firstBubbleAnim 0.6s 1', 'top': '10px', 'margin-left' : '0px'});

                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Думаем...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 1500);
    }

    function animateThoughtsSurprise() {
        'use strict';
        setTimeout( function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim2 0.6s 1', 'margin-left': '400px'});

            setTimeout(function () {
                secondBubble.css({
                    'position': 'absolute',
                    'width': '40px',
                    'height': '40px',
                    'background-color': 'white',
                    'border-radius': '50%',
                    'margin-left': '420px',
                    'top': '115px',
                    'animation': 'secondBubbleAnim2 0.6s 1',
                    'display' : 'block'
                });
                setTimeout(function () {
                    firstBubble.css({
                        'position': 'absolute',
                        'top': '10px',
                        'width': '200px',
                        'height': '100px',
                        'background-color': 'white',
                        'border-radius': '50%',
                        'text-align': 'center',
                        'line-height': '50px',
                        'display': 'block',
                        'animation': 'firstBubbleAnim2 0.6s 1',
                        'margin-left': '430px'
                    });
                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Удивляемся...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 9000);
    }

    function animateThoughtsPleased() {
        'use strict';
        setTimeout( function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim3 0.6s 1', 'margin-left': '130px', 'top': '155px'});

            setTimeout(function () {
                secondBubble.css({
                    'position': 'absolute',
                    'width': '40px',
                    'height': '40px',
                    'background-color': 'white',
                    'border-radius': '50%',
                    'top': '160px',
                    'margin-left': '70px',
                    'animation': 'secondBubbleAnim3 0.6s 1',
                    'display' : 'block'
                });
                setTimeout(function () {
                    firstBubble.css({
                        'position': 'absolute',
                        'top': '210px',
                        'width': '200px',
                        'height': '100px',
                        'margin-left': '-80px',
                        'background-color': 'white',
                        'border-radius': '50%',
                        'text-align': 'center',
                        'line-height': '50px',
                        'display': 'block',
                        'animation': 'firstBubbleAnim3 0.6s 1'
                    });
                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Довольны работой...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 17000);
    }

    function animateDisappearThoughts(){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 5000);
    }

    function animateDisappearThoughts2 (){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear2 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear2 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear2 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 15000);
    }

    function animateDisappearThoughts3 (){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear3 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear3 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear3 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 22000);
    }

    animateThoughtsThinking();
    animateDisappearThoughts();
    animateThoughtsSurprise();
    animateDisappearThoughts2();
    animateThoughtsPleased();
    animateDisappearThoughts3();

}

/*Bubbles animations for Laptops*/
function thinkingAnimationsForLaptop() {
    'use strict';
    var thirdBubble = $('#third-bubble');
    var secondBubble = $('#second-bubble');
    var firstBubble = $('#first-bubble');

    function animateThoughtsThinking(){

        secondBubble.css('display', 'none');
        firstBubble.css('display', 'none');
        thirdBubble.css('display', 'none');

        setTimeout(function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim 0.6s 1', 'margin-left' : '180px', 'top': '155px'});

            setTimeout(function(){

                secondBubble.css({'display': 'block', 'animation': 'secondBubbleAnim 0.6s 1', 'top': '115px', 'margin-left': '140px'});

                setTimeout(function () {

                    firstBubble.css({'display': 'block', 'animation': 'firstBubbleAnim 0.6s 1', 'top': '10px', 'margin-left' : '0px'});

                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Думаем...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 1500);
    }

    function animateThoughtsSurprise() {
        'use strict';
        setTimeout( function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim2 0.6s 1', 'margin-left': '400px'});

            setTimeout(function () {
                secondBubble.css({
                    'position': 'absolute',
                    'width': '40px',
                    'height': '40px',
                    'background-color': 'white',
                    'border-radius': '50%',
                    'margin-left': '420px',
                    'top': '115px',
                    'animation': 'secondBubbleAnim2 0.6s 1',
                    'display' : 'block'
                });
                setTimeout(function () {
                    firstBubble.css({
                        'position': 'absolute',
                        'top': '10px',
                        'width': '200px',
                        'height': '100px',
                        'background-color': 'white',
                        'border-radius': '50%',
                        'text-align': 'center',
                        'line-height': '50px',
                        'display': 'block',
                        'animation': 'firstBubbleAnim2 0.6s 1',
                        'margin-left': '430px'
                    });
                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Удивляемся...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 9000);
    }

    function animateThoughtsPleased() {
        'use strict';
        setTimeout( function () {

            thirdBubble.css({'display': 'block', 'animation': 'thirdBubbleAnim3 0.6s 1', 'margin-left': '130px', 'top': '155px'});

            setTimeout(function () {
                secondBubble.css({
                    'position': 'absolute',
                    'width': '40px',
                    'height': '40px',
                    'background-color': 'white',
                    'border-radius': '50%',
                    'top': '160px',
                    'margin-left': '70px',
                    'animation': 'secondBubbleAnim3 0.6s 1',
                    'display' : 'block'
                });
                setTimeout(function () {
                    firstBubble.css({
                        'position': 'absolute',
                        'top': '210px',
                        'width': '200px',
                        'height': '100px',
                        'margin-left': '-80px',
                        'background-color': 'white',
                        'border-radius': '50%',
                        'text-align': 'center',
                        'line-height': '50px',
                        'display': 'block',
                        'animation': 'firstBubbleAnim3 0.6s 1'
                    });
                    setTimeout(function() {
                        firstBubble.html('<p id="hi">Довольны работой...</p>');
                    }, 600);
                }, 600);
            }, 600);
        }, 17000);
    }

    function animateDisappearThoughts(){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 5000);
    }

    function animateDisappearThoughts2 (){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear2 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear2 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear2 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 15000);
    }

    function animateDisappearThoughts3 (){
        setTimeout(function(){
            firstBubble.html('').fadeOut('fast');
            firstBubble.css({'animation' : 'firstBubbleDisappear3 0.6s 1'});
            setTimeout(function () {
                firstBubble.css('display', 'none');
                secondBubble.css('animation', 'secondBubbleDisappear3 0.6s 1');
                setTimeout(function () {
                    secondBubble.css('display', 'none');
                    thirdBubble.css('animation', 'thirdBubbleDisappear3 0.6s 1');
                    setTimeout(function () {
                        thirdBubble.css('display', 'none');
                    }, 600);
                } ,600);
            } ,600);
        }, 22000);
    }

    animateThoughtsThinking();
    animateDisappearThoughts();
    animateThoughtsSurprise();
    animateDisappearThoughts2();
    animateThoughtsPleased();
    animateDisappearThoughts3();

}


/*Timer for infinite looping the bubble animation*/

function loopTimerForBackgroundImages() {
    var startTimeMS = 0;
    var timerId;
    var timerStep = 24000;
    
    function startTimer(){
        startTimeMS = (new Date()).getTime();
        timerId = setTimeout(eventRaised,timerStep);
        thinkingAnimationsForLaptop();
    }
    function eventRaised(){
        clearTimeout(timerId);
        startTimer();
    }
   startTimer();
}

/*Change flask animations with primary logo*/

function changeFlask(image1, image2, image3, id) {
    'use strict';
    var idEl = id;
    var images = [{
            url: image1,
            timeout: 1000
        }, {
            url: image2,
            timeout: 1000
        },{
            url: image3,
            timeout: 1000
        }],
        i = 0,
        timeout;

    function changeImages() {
        clearTimeout(timeout);
        $(idEl).attr('src', function() {
            if (i >= images.length)
                i = 0;

            timeout = setTimeout(changeImages, images[i].timeout);

            return images[i++].url ;
        });

    }
    changeImages();
}

$(window).on('load', function () {
    'use strict';

    var container = $('.container'), bubbles = $('#bubbles');
    container.hide();
    var circle = $('.circle');
    var flask = $('#flask');
    flask.hide();
    var wave = $('.wave');
    wave.hide();
    circle.css({
        'animation' : 'circleAnimationIn',
        'animation-duration' : '1s',
        'animation-iteration-count' : '1',
        'width' : '50px',
        'height' : '50px',
        'top': '45%',
        'border-radius' : '25px',
        'cursor' : 'pointer'
    });

    setTimeout(function () {
          circle.css('margin-left', 'calc(50% - 25px)');
       }, 1000);
    setTimeout(function () {
           flask.fadeIn('slow');
           circle.hover(function () {
               wave.show();
               wave.css({
                  'animation' : 'waves',
                  'animation-duration' : '500ms',
                  'animation-iteration-count' : '1'
              });
           },
           function () {
               wave.hide();
               wave.css('animation', 'none');
           }
           );
       }, 1000);
    changeFlask('img/colba1.png', 'img/colba2.png', 'img/colba3.png', '#flask');
});

$(document).ready( function() {
    'use strict';
    var home = $('#home'), contact = $('#contact'), portfolio = $('#portfolio'), menu = $('.nav-list');
    var header = $('.header'), social = $('.social'), bubbles = $('#bubbles');
    var flask = $('#flask');
    var circle = $('.circle');
    var container = $('.container');
    var wave = $('.wave');
    var content = $('.content'), footer = $('.footer');
    var backgroundImages = ['think.jpg', 'surprise.jpg', 'smile.jpg'];
    var i = 0;
    var windowWidth = $(window).width();
    $('div.backgroundFade').hide();

    menu.on('click', function (event) {
       event.stopPropagation();
    });
    bubbles.click(function (event) {
       event.stopPropagation();
    });

    content.click(function (event) {
        event.stopPropagation();
    });
    header.click(function (event) {
        event.stopPropagation();
    });
    social.click(function (event) {
        event.stopPropagation();
    });
    home.click(function (event) {
        event.preventDefault();
        window.location.href = '#home';
    });

    contact.click(function (event) {
        event.stopPropagation();
        window.location.href = '#contact';
    });
    portfolio.click(function (event) {
        event.stopPropagation();
        window.location.href = '#portfolio';
    });


    function animateBackground() {

        $("#wrap div.backgroundFade").first().appendTo('#wrap').fadeOut(1500);
        if(windowWidth >= 1000) {
            $("#wrap div").first().css({
                'background': 'url(img/my_photoes/' + backgroundImages[i++] + ') no-repeat  fixed',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover'
            }).fadeIn(1500);
        }else if(windowWidth < 1000){
            $("#wrap div").first().css({
                'background': 'url(img/my_photoes/' + backgroundImages[i++] + ') no-repeat  center',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover'
            }).fadeIn(1500);
        }
        if (i === backgroundImages.length) {
            i = 0;
        }

        setTimeout(animateBackground, 8000);
    }

   circle.click(function (event) {
       event.preventDefault();
       flask.fadeOut('slow');
       setTimeout( function () {
       circle.css({
          'animation' : 'circleAnimationOut',
           'animation-duration' : '1s',
           'animation-iteration-count' : '1',
           'width' : '100%',
           'height' : '100%',
           'margin-left' : '0',
           'top': '0',
           'border-radius' : '0',
           'cursor' : 'default'
       });
       wave.hide();
       }, 500);
       setTimeout(function () {

           if(windowWidth < 1000){
               circle.css({'overflow-y': 'scroll'});
           }

       }, 2000);
       setTimeout( function () {
           container.fadeIn('slow').css('position', 'absolute');
           changeFlask('img/flaskLogo1.png', 'img/flaskLogo2.png', 'img/flaskLogo.png', '#flaskLogo');
           animateBackground();

           if (windowWidth >= 1000) {

           loopTimerForBackgroundImages();

           } else {
               $('#bubbles').hide();
           }
           if (windowWidth < 800) {
               menu.hide();
               social.hide();
               footer.append('<button class="c-hamburger c-hamburger--htx"> <span>toggle menu</span> </button>');
               navHamToggle();

           }

       }, 1500);
   });

});

$(window).resize(function(){
    'use strict';
    window.location.reload();
});
