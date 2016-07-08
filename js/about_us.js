
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content'), circle = $('.circle');
    var clickCount = 0;
    function toggleFlag(flag) {

        if (flag === false) {

            content.append('<div id="about-us"><h1>О Нас</h1><p>думаем&nbsp;&nbsp;&nbsp;удивляемся&nbsp;&nbsp;&nbsp;довольны работой</p>' +
                '<p>Создаем сайты, которые опережают время.<br> Формируем стратегии онлайн-присутствия.<br> Повышаем ваши продажи в интернете.<br> Работаем с комплексными интерактивными проектами.<br>' +
                ' Сопровождение компаний и брендов на длинных дистанциях.</p></div>').fadeIn('slow');
            content.append('<div id="photoRow"><div class="dashed"><div id="pavel"><img alt=""><p>Павел Демьянов</p><p>Programming</p></div><div class="desc"><p>Мы разрабатываем web-приложения.</p><br><p>Кликни, и произойдет чудо.</p></div></div>' +
                '<div class="dashed"><div id="alex"><img alt=""><p>Алексей Игнатов</p><p>Design & photo</p></div><div class="desc"><p>Мы занимаемся обработкой фото и графики.</p><br><p>Наведи камеру и снимай.</p></div></div></div>');

            var alexName = $('#photoRow .dashed:last-child #alex p'), alexImg = $('#photoRow .dashed:last-child #alex img'),
                alexPhotoShootSign = $('#photoRow .dashed:last-child .desc p:nth-child(3)'), alexDesc = $('#photoRow .dashed:last-child .desc p:nth-child(1)'),
                alexIdBlock = $('#photoRow .dashed:last-child #alex'), alexDescBlock = $('#photoRow .dashed:last-child .desc'), alexBlock = $('#photoRow .dashed:last-child'),
                pavelBlock = $('#photoRow .dashed:first-child'), pavelIdBlock = $('#photoRow .dashed:first-child #pavel'),
                pavelDescBlock = $('#photoRow .dashed:first-child .desc'), pavelClickSign = $('#photoRow .dashed:first-child .desc p:nth-child(3)'),
                pavelDesc = $('#photoRow .dashed:first-child .desc p:nth-child(1)'), pavelName = $('#photoRow .dashed:first-child #pavel p'),
                pavelImg = $('#photoRow .dashed:first-child #pavel img');

            alexDesc.hover(function (event) {
               event.stopPropagation();
               event.preventDefault();
               pavelName.animate({opacity: 0, display: 'none'}, 500);
               pavelImg.animate({width: '0', height: '0', opacity: 0, display: 'none'}, 500);
               pavelClickSign.animate({marginLeft: '80px', opacity: 0, display: 'none'}, 500);
               pavelDesc.animate({opacity: 0, display: 'none'}, 500);

               setTimeout(function () {

                   pavelIdBlock.hide();
                   pavelDescBlock.hide();
                   pavelBlock.animate({width: '0'},400);
                   alexBlock.animate({width: '70%'}, 400);
                   alexIdBlock.animate({width: '17.5%'}, 400);
                   alexDescBlock.animate({width: '82.5%'}, 400);
                   alexPhotoShootSign.fadeOut('slow');
                   alexDesc.html('');

                   setTimeout(function() {
                       alexDesc.css({'animation': 'none', 'height': 'auto'});
                       alexDesc.html("Разработка key visual от идеи до реализации. Одна из самых сильных сторон Pashebor's laba — тандем из креативного агентства и собственного cgi-департамента, создающего 3D-визуализации, ретушь, фотореалистичные иллюстрации и рекламные фотосессии.");
                   }, 400);
               }, 400);

            }, function (event) {

                event.stopPropagation();
                event.preventDefault();
                pavelIdBlock.show();
                pavelDescBlock.show();

                alexIdBlock.animate({width: '40%'}, 400);
                alexDescBlock.animate({width: '60%'}, 400);

                pavelBlock.fadeIn('fast');
                alexPhotoShootSign.fadeIn('slow');
                alexDesc.html('');
                alexDesc.css({'animation': 'floatingAnimation 2s infinite', 'height': '50px'});


                setTimeout(function(){
                    alexDesc.html('Мы занимаемся обработкой фото и графики.');
                }, 400);

                alexBlock.animate({width: '35%'},400);

                pavelBlock.animate({width: '35%'}, 400);

                pavelName.animate({opacity: 1, display: 'block'}, 500);
                pavelImg.animate({opacity: 1, display: 'block', width: '80px', height: '80px'}, 500);
                pavelClickSign.animate({marginLeft: '0', opacity: 1, display: 'block'}, 500);
                pavelDesc.animate({ opacity: 1, display: 'block'}, 500);
            });


            pavelDesc.hover(function(event){
                event.stopPropagation();
                event.preventDefault();

                alexName.animate({opacity: 0, display: 'none'}, 500);

                alexImg.animate({width: '0', height: '0', opacity: 0, display: 'none'}, 500);

                alexPhotoShootSign.animate({marginLeft: '80px', opacity: 0, display: 'none'}, 500);

                alexDesc.animate({opacity: 0, display: 'none'}, 500);

                setTimeout(function () {

                    alexIdBlock.hide();
                    alexDescBlock.hide();
                    alexBlock.animate({width: '0'},400);
                    pavelBlock.animate({width: '70%'}, 400);
                    pavelIdBlock.animate({width: '17.5%'}, 400);
                    pavelDescBlock.animate({width: '82.5%'}, 400);
                    pavelClickSign.fadeOut('slow');
                    pavelDesc.html('');

                    setTimeout(function() {
                        pavelDesc.css({'animation': 'none', 'height': 'auto'});
                        pavelDesc.html('Выполнение полного цикла работ по созданию проектов различного уровня сложности.<br> Разработка промо-сайтов, корпоративных сайтов и интернет-магазинов.<br>' +
                            'Дизайн сайиов и интерфейсов. Работа с визуальным позиционированием, разработка интерактивных стилей.');
                    }, 400);
                }, 400);

            }, function(event){
                event.stopPropagation();
                event.preventDefault();

                alexIdBlock.show();
                alexDescBlock.show();

                pavelIdBlock.animate({width: '40%'}, 400);
                pavelDescBlock.animate({width: '60%'}, 400);

                alexBlock.fadeIn('fast');
                pavelClickSign.fadeIn('slow');
                pavelDesc.html('');
                pavelDesc.css({'animation': 'floatingAnimation 2s infinite', 'height': '50px'});

                setTimeout(function(){
                    pavelDesc.html('Мы разрабатываем web-приложения.');
                }, 400);

                alexBlock.animate({width: '35%'},400);
                pavelBlock.animate({width: '35%'}, 400);

                alexName.animate({opacity: 1, display: 'block'}, 500);

                alexImg.animate({opacity: 1, display: 'block', width: '80px', height: '80px'}, 500);

                alexPhotoShootSign.animate({marginLeft: '0', opacity: 1, display: 'block'}, 500);

                alexDesc.animate({ opacity: 1, display: 'block'}, 500);
            });

        } else {
            $('#about-us').remove();
            $('#photoRow').remove();
        }
    }

    btnAbout.click(function (event) {
        event.stopPropagation();
        console.log('first ' + content.innerHeight());
        console.log('second ' + window.innerHeight);
        console.log('third ' + circle.innerHeight());
        console.log('fourth ' + $('#body').innerHeight());
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