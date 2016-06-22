
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content');

    function toggleFlag(flag) {

        if (flag === false) {
            content.append('<div id="about-us"><h1>О Нас</h1><p>&#047;думаем &#092;&#047; удивляемся &#047;&#092; довольны работой&#092;</p></div>').fadeIn('slow');
            content.append('<br><br><div id="photoRow"><div>1</div><br><br><div>2</div></div>');
        } else {
            $('#about-us').remove();
            $('#photoRow').remove();
        }
    }

    btnAbout.click(function () {

        $('#wrap, #bubbles').fadeOut('fast');

        toggleFlag(false);
        $('.circle').hover(function () {
           $('.wave').hide();
        });

    });

    btnHome.click( function () {

        toggleFlag(true);
        $('#wrap, #bubbles').fadeIn('slow');

    });


});