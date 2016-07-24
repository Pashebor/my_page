
$(document).ready(function () {
    'use strict';
    var btnAbout = $('#info'), btnHome = $('#home'), content = $('.content'), circle = $('.circle'), header = $('.header');
    var clickCount = 0 , circle = $('.circle');
    var headerWidth = header.innerWidth();

    function centerHeaderLogo() {
        return ((window.innerWidth / 2) - (headerWidth / 6.5))  + 'px';
    }

    /*Animates liquid in the flask*/

    function animateLiquid() {
        var flaskBottom = $('#flask_bottom'),
            waveWidth = 10,
            waveCount = Math.round(flaskBottom.innerWidth()/waveWidth),
            docFrag = document.createDocumentFragment(), i = 0;

        for ( i; i < waveCount; i += 1) {
            var wave = document.createElement('div');
            wave.className += ' inner-liquid';
            docFrag.appendChild(wave);
            wave.style.left = i * waveWidth + "px";
            wave.style.webkitAnimationDelay = (i/100) + "s";
        }
        return flaskBottom.append(docFrag);
    }
   /********/

    /*Change color of nav and social icons*/

    function changeIconsColor() {

        $('.circle').scroll(function () {
            var scrolled_val = $(this).scrollTop(), fullHeightScreen = window.innerHeight + scrolled_val;

            if(fullHeightScreen >= 1000) {
                $('#home').removeClass('home').addClass('home-of-bottom');
                $('#info').removeClass('info').addClass('info-of-bottom');
                $('#contact').removeClass('contact').addClass('contact-of-bottom');
                $('#portfolio').removeClass('portfolio').addClass('portfolio-of-bottom');
                $('#vk').removeClass('vk').addClass('vk-of-bottom');
                $('#whatsApp').removeClass('whatsApp').addClass('whatsApp-of-bottom');
                $('#github').removeClass('github').addClass('github-of-bottom');
                $('#facebook').removeClass('facebook').addClass('facebook-of-bottom');
                $('#toggle-menu').removeClass('original').addClass('ham-of-bottom');
            } else {
                $('#home').removeClass('home-of-bottom').addClass('home');
                $('#info').removeClass('info-of-bottom').addClass('info');
                $('#contact').removeClass('contact-of-bottom').addClass('contact');
                $('#portfolio').removeClass('portfolio-of-bottom').addClass('portfolio');
                $('#vk').removeClass('vk-of-bottom').addClass('vk');
                $('#whatsApp').removeClass('whatsApp-of-bottom').addClass('whatsApp');
                $('#github').removeClass('github-of-bottom').addClass('github');
                $('#facebook').removeClass('facebook-of-bottom').addClass('facebook');
                $('#toggle-menu').removeClass('ham-of-bottom').addClass('original');
            }
        });

    }
    /********/
    
    function toggleFlag(flag) {

        if (flag === false) {

            changeIconsColor();
            circle.css({'overflow-y': 'scroll'});

            content.append('<div id="about-us"><h1>О Нас</h1><p>думаем&nbsp;&nbsp;&nbsp;удивляемся&nbsp;&nbsp;&nbsp;довольны работой</p>' +
                '<p>Создаем сайты, которые опережают время.<br> Формируем стратегии онлайн-присутствия.<br> Повышаем ваши продажи в интернете.<br> Работаем с комплексными интерактивными проектами.<br>' +
                ' Сопровождение компаний и брендов на длинных дистанциях.</p></div>').fadeIn('slow');
            if (window.innerWidth > 1000){
                content.append('<div id="photoRow"><div class="dashed"><div id="pavel"><img alt=""><p>Павел Демьянов</p><p>Programming</p></div><div class="desc"><p>Мы разрабатываем web-приложения.</p><br><p>Кликни, и произойдет чудо.</p></div></div>' +
                '<div class="dashed"><div id="alex"><img alt=""><p>Алексей Игнатов</p><p>Design & photo</p></div><div class="desc"><p>Мы занимаемся обработкой фото и графики.</p><br><p>Наведи камеру и снимай.</p></div></div></div>');
            } else if ( window.innerWidth > 250 && window.innerWidth < 425) {
                content.append('<div class="adaptive-photo-row">' +
                    '<div class="pavel-row">' +
                       '<div class="image"><img alt=""></div>' +
                       '<div class="who-is"><p>Павел Демьянов</p><p>Programming</p></div>' +
                    '</div>' +
                    '<div class="pavel-desc"><p>Мы разрабатываем web-приложения.</p></div>' +
                    '</div>' +
                    '<div class="adaptive-photo-row">' +
                    '<div class="alex-row">' +
                    '<div class="image"><img alt=""></div>' +
                    '<div class="who-is"><p>Алексей Игнатов</p><p>Design & photo</p></div>' +
                    '</div>' +
                    '<div class="alex-desc"><p>Мы занимаемся обработкой фото и графики.</p></div>' +
                    '</div>');
            }
            content.append('<div class="flask"><div class="circle-flask small_circle">{</div> <div class="circle-flask middle_circle">@</div> <div class="circle-flask little_circle little_circle_white"></div> ' +
                '<div class="circle-flask little_circle little_circle_purpure"></div> <div class="circle-flask little_circle little_circle_blue"></div><div class="flask_throat">' +
                '<div class="flask_throat_one"></div> <div class="flask_throat_two"></div> <div class="flask_throat_three"></div> <div class="flask_throat_four"></div></div> <div class="flask_bottom"> <div class="big_triangle">' +
                '<div id="flask_bottom"></div> </div> </div> </div>');

            animateLiquid();

            /*For adaptive speech*/
            /*Pavel*/
            var pavelDescAdaptive = $('.pavel-desc'), pavelDescTextAdptive = $('.pavel-desc p'), alexAdaptiveRow = $('.adaptive-photo-row:nth-child(4)'),
                countPavelAdaptiveSpeech = 0;
            //
            /*Alex*/
            var alexDescAdaptive = $('.alex-desc'), alexDescTextAdptive = $('.alex-desc p'), pavelAdaptiveRow = $('.adaptive-photo-row:nth-child(3)'),
                countAlexAdaptiveSpeech = 0;
            //
            pavelDescAdaptive.on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                
                countPavelAdaptiveSpeech += 1;
                
                if (countPavelAdaptiveSpeech === 1) {
                    
                    alexAdaptiveRow.fadeOut('fast');
                    setTimeout(function () {
                        pavelDescTextAdptive.animate({'height': '210px', 'line-height': '15px'}, 400);
                        pavelDescTextAdptive.css('text-align', 'left');
                        pavelDescTextAdptive.html('');

                        setTimeout(function () {
                            pavelDescTextAdptive.html('<ul>' +
                                '<li>Выполнение полного цикла работ по созданию проектов различно- го уровня сложности.</li>' +
                                '<li> Разработка промо-сайтов, кор-<br>поративных сайтов и интернет-<br>магазинов.</li>' +
                                '<li>Дизайн сайиов и интерфейсов. <br>Работа с визуальным позициони-рованием, разработка интера-<br>ктивных стилей.</li></ul>');
                        }, 400);
                    }, 400);
                }else {
                    countPavelAdaptiveSpeech = 0;
                    pavelDescTextAdptive.animate({'height': '40px', 'line-height': '40px'}, 400);
                    pavelDescTextAdptive.css('text-align', 'center');
                    pavelDescTextAdptive.html('');

                    setTimeout(function () {
                        pavelDescTextAdptive.html('<span>Мы разрабатываем web-приложения.</span>');
                        setTimeout(function () {
                            alexAdaptiveRow.fadeIn('fast');
                        }, 400)
                    }, 600);
                }
                
            });
            /******/
            alexDescAdaptive.on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();

                countAlexAdaptiveSpeech += 1;

                if (countAlexAdaptiveSpeech === 1) {
                    
                        alexDescTextAdptive.animate({'height': '135px', 'line-height': '15px'}, 400);
                        alexDescTextAdptive.css('text-align', 'left');
                        alexDescTextAdptive.html('');

                        setTimeout(function () {
                            alexDescTextAdptive.html("<ul>" +
                                "<li>Разработка key visual от идеи до реализации.</li>" +
                                "<li>Создаем 3D-визуализации, ретушь, фотореалистичные иллюстрации и рекламные фотосессии.</li></span>");
                        }, 400);
                    
                }else {
                    countAlexAdaptiveSpeech = 0;
                    alexDescTextAdptive.animate({'height': '40px', 'line-height': '20px'}, 400);
                    alexDescTextAdptive.css('text-align', 'center');
                    alexDescTextAdptive.html('');

                    setTimeout(function () {
                        alexDescTextAdptive.html('<span>Мы занимаемся обработкой фото и графики.</span>');
                    }, 600);
                }

            });
            /******/


            var alexName = $('#photoRow .dashed:last-child #alex p'), alexImg = $('#photoRow .dashed:last-child #alex img'),
                alexPhotoShootSign = $('#photoRow .dashed:last-child .desc p:nth-child(3)'), alexDesc = $('#photoRow .dashed:last-child .desc p:nth-child(1)'),
                alexIdBlock = $('#photoRow .dashed:last-child #alex'), alexDescBlock = $('#photoRow .dashed:last-child .desc'), alexBlock = $('#photoRow .dashed:last-child'),
                pavelBlock = $('#photoRow .dashed:first-child'), pavelIdBlock = $('#photoRow .dashed:first-child #pavel'),
                pavelDescBlock = $('#photoRow .dashed:first-child .desc'), pavelClickSign = $('#photoRow .dashed:first-child .desc p:nth-child(3)'),
                pavelDesc = $('#photoRow .dashed:first-child .desc p:nth-child(1)'), pavelName = $('#photoRow .dashed:first-child #pavel p'),
                pavelImg = $('#photoRow .dashed:first-child #pavel img'), countAlexClick = 0, countPavelClick = 0;


            alexDesc.on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                countAlexClick += 1;

                if(countAlexClick === 1){
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
                   alexDescBlock.animate({width: '82.5%', 'margin-top': '-10px'}, 400);
                   alexPhotoShootSign.fadeOut('slow');
                   alexDesc.html('');

                   setTimeout(function() {
                       alexDesc.css({'animation': 'none', 'height': 'auto'});
                       alexDesc.html("Разработка key visual от идеи до реализации. Одна из самых сильных сторон Pashebor's laba — тандем из креативного агентства и собственного cgi-департамента, создающего 3D-визуализации, ретушь, фотореалистичные иллюстрации и рекламные фотосессии.");
                   }, 400);
               }, 400);

             } else if(countAlexClick > 1) {
                    countAlexClick = 0;

                    pavelIdBlock.show();
                    pavelDescBlock.show();

                    alexIdBlock.animate({width: '40%'}, 400);
                    alexDescBlock.animate({width: '60%', 'margin-top': '0'}, 400);

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
                }
            });


            pavelDesc.on('click', function(event){
                event.stopPropagation();
                event.preventDefault();
                countPavelClick += 1;

                if (countPavelClick === 1) {

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
                    pavelDescBlock.animate({width: '82.5%', 'margin-top': '-25px'}, 400);
                    pavelClickSign.fadeOut('slow');
                    pavelDesc.html('');

                    setTimeout(function() {
                        pavelDesc.css({'animation': 'none', 'height': 'auto'});
                        pavelDesc.html('Выполнение полного цикла работ по созданию проектов различного уровня сложности.<br> Разработка промо-сайтов, корпоративных сайтов и интернет-магазинов.<br>' +
                            'Дизайн сайиов и интерфейсов. Работа с визуальным позиционированием, разработка интерактивных стилей.');
                    }, 400);
                }, 400);

                } else if(countPavelClick > 1) {
                    countPavelClick = 0;

                    alexIdBlock.show();
                    alexDescBlock.show();

                    pavelIdBlock.animate({width: '40%'}, 400);
                    pavelDescBlock.animate({width: '60%', 'margin-top': '0'}, 400);

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
                }

            });

        } else {
            $('#about-us').remove();
            $('#photoRow').remove();
            $('.flask').remove();
            $('.adaptive-photo-row:nth-child(2), .adaptive-photo-row:nth-child(3)').remove();
            circle.css({'overflow-y': 'hidden'});
        }
    }

    btnAbout.click(function (event) {
        event.stopPropagation();
        window.location.href = '#about_us';
        clickCount += 1;

        if (clickCount === 1) {
            header.animate({marginLeft: ''+ centerHeaderLogo() +''}, 600);

            $('#wrap, #bubbles').fadeOut('fast');
            toggleFlag(false);

            $('.circle').hover(function () {

                $('.wave').hide();

          });
        }
    });
    
    btnHome.click( function () {
        clickCount = 0;
        toggleFlag(true);
           $('#wrap, #bubbles').fadeIn('slow');
        header.animate({marginLeft: '0'}, 600);
    });


});