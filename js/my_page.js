function changeFlask() {
    var images = [{
            url: "img/colba1.png", // Картинка
            timeout: 1000 // Задержка для картинки
        }, {
            url: "img/colba2.png",
            timeout: 1000
        },{
            url: "img/colba3.png",
            timeout: 1000
        }],
        i = 0,
        timeout;


    function changeImages() {
        clearTimeout(timeout);
        $('#flask').attr('src', function() {
            if (i >= images.length)
                i = 0;

            timeout = setTimeout(changeImages, images[i].timeout);

            return images[i++].url ;
        });

    }
    changeImages();
}

$(window).on('load', function () {
    var container = $('.container');
    var circle = $('.circle');
    var flask = $('#flask');
    flask.hide();
    circle.css({
        'animation' : 'circleAnimationIn',
        'animation-duration' : '1s',
        'animation-iteration-count' : '1',
        'width' : '50px',
        'height' : '50px',
        'margin-left' : 'calc(50% - 25px)',
        'top': '40%',
        'border-radius' : '25px',
        'cursor' : 'pointer'
    });

       setTimeout(function () {
           flask.fadeIn('slow')
       }, 1000);
    container.hide();
    changeFlask();
});

$(document).ready( function() {
 var flask = $('#flask');
 var circle = $('.circle');
 var container = $('.container');
   circle.click(function () {
       flask.fadeOut('slow');
       setTimeout( function () {
       circle.css({
          'animation' : 'circleAnimationOut',
           'animation-duration' : '2s',
           'animation-iteration-count' : '1',
           'width' : '100%',
           'height' : '100%',
           'margin-left' : '0',
           'top': '0',
           'border-radius' : '0'
       });
       container.fadeIn('slow').css({
           'position': 'absolute'
       });
       }, 500);
   });
});
