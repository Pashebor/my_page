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
    var container = $('.container');
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
    var home = $('#home'), contact = $('#contact'), info = $('#info'), portfolio = $('#portfolio');
    var header = $('.header'), social = $('.social');
    var flask = $('#flask');
    var circle = $('.circle');
    var container = $('.container');
    var wave = $('.wave');
    var content = $('.content');
    var backgroundImages = ['think.jpg', 'surprise.jpg', 'smile.jpg'];
    var i = 0;
    var windowWidth = $(window).width();
    var thirdBubble = $('#third-bubble');
    var secondBubble = $('#second-bubble');
    var firstBubble = $('#first-bubble');

    $('div.backgroundFade').hide();

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
        window.location.href = 'https://vk.com';
    });

    contact.click(function (event) {
        event.stopPropagation();
        window.location.href = '#';
    });
    portfolio.click(function (event) {
        event.stopPropagation();
        window.location.href = '#';
    });
    info.click(function (event) {
        event.stopPropagation();
    });
    function thinkingAnimations() {

        var animateThoughtsThinking = function(){
            'use strict';
            secondBubble.css('display', 'none');
            firstBubble.css('display', 'none');
            thirdBubble.css('display', 'none');

            setTimeout(function () {
                thirdBubble.css({
                    'display': 'block',
                    'animation': 'thirdBubbleAnim 0.6s 1'
                });
                setTimeout(function(){
                    secondBubble.css({
                        'display': 'block',
                        'animation': 'secondBubbleAnim 0.6s 1'
                    });
                    setTimeout(function () {
                        firstBubble.css({
                            'display': 'block',
                            'animation': 'firstBubbleAnim 0.6s 1'
                        });

                        setTimeout(function() {
                            firstBubble.html('<p id="hi">Думаем...</p>');
                        }, 600);
                    }, 600);
                }, 600);
            }, 1000);
        };

        var animateThoughtsSurprise = function() {
            'use strict';
            setTimeout( function () {
                thirdBubble.css({
                    'display': 'block',
                    'animation': 'thirdBubbleAnim 0.6s 1'
                });
                setTimeout(function () {
                    secondBubble.css({
                        'position': 'absolute',
                        'width': '40px',
                        'height': '40px',
                        'background-color': 'white',
                        'border-radius': '50%',
                        'margin-left': '120px',
                        'top': '175px',
                        'animation': 'secondBubbleAnim2 0.6s 1',
                        'display' : 'block'
                    });
                    setTimeout(function () {
                        firstBubble.css({
                            'position': 'absolute',
                            'top': '210px',
                            'width': '200px',
                            'height': '100px',
                            'background-color': 'white',
                            'border-radius': '50%',
                            'text-align': 'center',
                            'line-height': '50px',
                            'display': 'block',
                            'animation': 'firstBubbleAnim2 0.6s 1',
                            'margin-left': '-70px'
                        });
                        setTimeout(function() {
                            firstBubble.html('<p id="hi">Удивляемся...</p>');
                        }, 600);
                    }, 600);
                }, 600);
            }, 9000);
        };

        var animateDisappearThoughts = function(){
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
        };

        return{
           anim1: animateThoughtsThinking(),
           anim2: animateDisappearThoughts(),
           anim3: animateThoughtsSurprise()
        };
    }




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
       setTimeout( function () {
           container.fadeIn('slow').css('position', 'absolute');
           changeFlask('img/flaskLogo1.png', 'img/flaskLogo2.png', 'img/flaskLogo.png', '#flaskLogo');
           animateBackground();
           for(var j = 0; j < 2; j++){

               switch (j){
                   case 0:
                       thinkingAnimations().anim1;
                       continue;
                   case 1:
                       thinkingAnimations().anim2;
                       continue;
                   case 2:
                       thinkingAnimations().anim3;
                       continue;
               }
           }

       }, 1500);
   });

});

$(window).resize(function(){
    'use strict';
    window.location.href=window.location.href;
});
