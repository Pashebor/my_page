
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content');
    var clickCount = 0;
    function toggleFlag(flag) {

        if (flag === false) {
            content.append('<div id="about-us"><h1>О Нас</h1><p>&#047;думаем &#092;&#047; удивляемся &#047;&#092; довольны работой&#092;</p>' +
                '<p>Создаем сайты, которые опережают время. формируем стратегии ОНЛАЙН-ПРИСУТСТВИЯ. Повышаем ваши продажи в интернете.</p></div>').fadeIn('slow');
            content.append('<div id="photoRow"><div>1</div><div>2</div></div>');
        } else {
            $('#about-us').remove();
            $('#photoRow').remove();
        }
    }

    btnAbout.click(function (event) {
        event.stopPropagation();
        window.location.href = '#about_us';

        clickCount += 1;
        if (clickCount === 1) {
          $('#wrap, #bubbles').fadeOut('fast');

          toggleFlag(false);
          $('.circle').hover(function () {
             $('.wave').hide();
          });
        }
    });

    btnHome.click( function () {
        clickCount = 0;
        if(window.innerWidth >= 1000) {
           toggleFlag(true);
           $('#wrap, #bubbles').fadeIn('slow');
       } else {
           toggleFlag(true);
           $('#wrap').fadeIn('slow');
       }
    });


});