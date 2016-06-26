
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content');
    var clickCount = 0;
    function toggleFlag(flag) {

        if (flag === false) {

            content.append('<div id="about-us"><h1>О Нас</h1><p>думаем&nbsp;&nbsp;&nbsp;удивляемся&nbsp;&nbsp;&nbsp;довольны работой</p>' +
                '<p>Создаем сайты, которые опережают время.<br> Формируем стратегии онлайн-присутствия.<br> Повышаем ваши продажи в интернете.<br> Работаем с комплексными интерактивными проектами.<br>' +
                ' Сопровождение компаний и брендов на длинных дистанциях.</p></div>').fadeIn('slow');
            content.append('<div id="photoRow"><div class="dashed"><div id="pavel"><img alt=""><p>Павел Демьянов</p><p>Programming</p></div><div class="desc"><p>Мы разрабатываем web-приложения.</p><br><p>Кликни, и произойдет чудо.</p></div></div>' +
                '<div class="dashed"><div id="alex"><img alt=""><p>Алексей Игнатов</p><p>Design & photo</p></div><div class="desc"><p>Мы занимаемся обработкой фото и графики.</p><br><p>Наведи камеру и снимай.</p></div></div></div>');
            $('#photoRow .dashed:first-child').hover(function(){
               $('#photoRow .dashed:last-child').empty();
            }, function(){
                $('#photoRow .dashed:last-child').append('<div id="alex"><img alt=""><p>Алексей Игнатов</p><p>Design & photo</p></div><div class="desc"><p>Мы занимаемся обработкой фото и графики.</p><br><p>Наведи камеру и снимай.</p></div>');
            });
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

    /*speechCloudPavel.hover(function(){
        speechCloudAlex.hide();
    }, function(){
        speechCloudAlex.show();
    });*/

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