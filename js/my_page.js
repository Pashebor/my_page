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
    var circle = $('.circle');
    var flask = $('#flask');
    var wave = $('.wave');
    flask.hide();
    circle.css({
        'animation' : 'circleAnimationIn',
        'animation-duration' : '1s',
        'animation-iteration-count' : '1',
        'width' : '50px',
        'height' : '50px',
        'top': '40%',
        'border-radius' : '25px',
        'cursor' : 'pointer'
    });
       setTimeout(function () {
          circle.css('margin-left', 'calc(50% - 25px)');
       }, 1000);
       setTimeout(function () {
           flask.fadeIn('slow');
           circle.hover(function () {
              wave.css({
                  'animation' : 'waves',
                  'animation-duration' : '500ms',
                  'animation-iteration-count' : '1'
              });
           },
           function () {
               wave.css('animation', 'none');
           }
           );
       }, 1000);
    container.hide();
    changeFlask('img/colba1.png', 'img/colba2.png', 'img/colba3.png', '#flask');
});

$(document).ready( function() {
    'use strict';
    var flask = $('#flask');
    var circle = $('.circle');
    var container = $('.container');
    var wave = $('.wave');
    var content = $('.content');
    var backgroundImages = ['smile.jpg', 'thinking.jpg', 'surprise_blur.png'];
    var i = 0;
    content.click(function (event) {
        event.stopPropagation();
    });
    function changeBackground() {
       setInterval(function () {
          content.fadeTo('slow', 0.4, function () {
              $(this).css({
                 'background': 'url(img/my_photoes/'+ backgroundImages[i++] +') no-repeat center',
                 '-webkit-background-size': 'cover',
                 '-moz-background-size': 'cover',
                 '-o-background-size': 'cover',
                 'background-size': 'cover'
             });
             $(this).fadeTo('slow', 1);
          });
          if (i === backgroundImages.length) {
              i = 0;
          }
       }, 7000);
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
           changeBackground();
       }, 1500);
   });

});
