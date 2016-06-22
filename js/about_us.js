
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content');

    btnAbout.click(function () {

        $('#wrap, #bubbles').fadeOut('slow');

        $('.circle').hover(function () {
           $('.wave').hide();
        });

        content.append('<div id="about-us"><h1>О Нас</h1><p>&#047;думаем &#092;&#047; удивляемся &#047;&#092; довольны работой&#092;</p></div>').fadeIn('slow');
    });

    btnHome.click( function () {
       $('#wrap, #bubbles').fadeIn('slow');
       $('#about-us').remove();
    });
});