(function ($, Hbars) {
    //_________Urls__________
    var contentsURL;
    var lang;
    switch (window.location.pathname) {
        case '/':
        case '/index.html':
        case '/about.html':
        case '/works.html':
            contentsURL = 'js/contents.json';
            lang = '';
            break;
        case '/en/':
        case '/en/index.html':
        case '/en/about.html':
        case '/en/works.html':
            contentsURL = '../js/contents.json';
            lang = '../';
            break;
    }

    //_________Queries__________
    var $body = $('body');
    var $quickLinks = $('#quick-links');

    //Menu
    var $menuBtn = $('.menu-btn');
    var $menuCont = $('#menu-container');
    var $menuBg = $('.menu-bg');

    //Slider
    var $sliderP = $('#slider-p');
    var $sliderA = $('#slider-a');
    var $aboutP = $('#about').find('p');

    //Accordion
    var $category = $('.category');

    //Sections
    var $visualSec = $('#visual-sec');
    var $uxuiSec = $('#uxui-sec');
    var $frontendSec = $('#frontend-sec');
    var $cronologiaSec = $('#cronologia-sec');
    var $dwP = $visualSec.find('.sechead p');
    var $dgP = $uxuiSec.find('.sechead p');
    var $diP = $frontendSec.find('.sechead p');
    var $processCont = $('#process').find('.process-cont');

    //View More
    var $dwaMoreBtn = $visualSec.find('.small-view-more');
    var $dufMoreBtn = $uxuiSec.find('.small-view-more');
    var $dgiMoreBtn = $frontendSec.find('.small-view-more');
    var $dwaMore = $('#dw-more');
    var $dufMore = $('#dg-more');
    var $dgiMore = $('#di-more');

    //Mixit Containers
    var $visualCont = $('#visualMix');
    var $uxuiCont = $('#uxuiMix');
    var $frontendCont = $('#frontendMix');
    var $cronologiaCont = $('#cronologiaMix');
    var $homeCont = $('#Container');

    //Techs
    var $visualDiv = $('#visual-tech');
    var $frontendDiv = $('#frontend-tech');
    var $othersDiv = $('#others-tech');
    var $detailsDiv = $('#techgraphs').find('.experience');

    var category = [];
    var hash = '';

    //_________Load Contents__________
    var loadMenu = function () {
        $.get('menu.html')
            .success(function (data) {
                $menuCont.html(data);
            });
    };

    var listContents = function () {
        $.ajax(contentsURL, {
            type: 'GET',
            dataType: 'json'
        }).done(function (res) {
            if (!res.error) {
                switch (window.location.pathname) {
                    case '/':
                    case '/index.html':
                        indexView(res.es);
                        break;
                    case '/en/':
                    case '/en/index.html':
                        indexView(res.en);
                        break;
                    case '/about.html':
                        aboutView(res.es);
                        break;
                    case '/en/about.html':
                        aboutView(res.en);
                        break;
                    case '/works.html':
                        workView(res.es);
                        break;
                    case '/en/works.html':
                        workView(res.en);
                        break;
                }
            } else {
                alert("No se pudo obtener la lista de contenidos");
            }
        });
    };

    //___________Views____________

    var indexView = function(res){
        secciones = res.contenidos.secciones;
        works = res.works;
        $sliderP.text(res.contenidos.visual);

        var mainSlider = new Swiper('.main-slider', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            loopedSlides: 5 //looped slides should be the same
        });

        $aboutP.text(res.contenidos.about);
        $.each(res.contenidos.steps, function (key, step) {
            processIndex(step);
        });


        $.each(works, function (index, work) {
            work.min = "";
            work.large = "";
            for (var i = 1; i <= work.imagenes; i++) {
                work.min = work.min + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min@2x.jpg" name="' + i + '"/>';
                work.large = work.large + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large@2x.jpg" name="' + i + '"/>';
            }
            work.miniatura = work.subseccion + '/' + work.miniatura + '@2x.jpg';
            homeWork(work);
        });
        mixit($homeCont, 8, 'desc');
        thumbsEvents();
        animateImages();
    };

    var aboutView = function(res){
        secciones = res.contenidos.secciones;
        works = res.works;
        $.each(res.tecnologias.visual, function (index, tecnologia) {
            techAbout(tecnologia, $visualDiv);
        });

        $.each(res.tecnologias.frontend, function (index, tecnologia) {
            techAbout(tecnologia, $frontendDiv);
        });

        $.each(res.tecnologias.others, function (index, tecnologia) {
            techAbout(tecnologia, $othersDiv);
        });

        techHover($visualDiv, $detailsDiv);
        techHover($frontendDiv, $detailsDiv);
        techHover($othersDiv, $detailsDiv);

        $.each(works, function (index, work) {
            work.min = "";
            work.large = "";
            for (var i = 1; i <= work.imagenes; i++) {
                work.min = work.min + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min@2x.jpg" name="' + i + '"/>';
                work.large = work.large + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large@2x.jpg" name="' + i + '"/>';
            }
            work.miniatura = work.subseccion + '/' + work.miniatura + '@2x.jpg';

            $.each(secciones.Cronologia, function() {
                switch (work.proveedor) {
                    case 'Jordi':
                        work.cronologia = 'jordi';
                        break;
                    case 'Omatic':
                        work.cronologia = 'omatic';
                        break;
                    case 'W3 Américas':
                        work.cronologia = 'w3americas';
                        break;
                    case 'Cirkuit Planet':
                        work.cronologia = 'cirkuitplanet';
                        break;
                }
            });
            cronologiaAbout(work);
        });

        mixit($cronologiaCont, 6, 'asc');
        thumbsEvents();
        filterBtns();
        //chronoFix();
        animateImages();
        $cronologiaSec.find('.allss').click();
    };

    var workView = function(res) {
        secciones = res.contenidos.secciones;
        works = res.works;
        $dwP.text(res.contenidos.visual);
        $dgP.text(res.contenidos.uxui);
        $diP.text(res.contenidos.frontend);

        $.each(works, function (index, work) {
            work.min = "";
            work.large = "";
            for (var i = 1; i <= work.imagenes; i++) {
                work.min = work.min + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min@2x.jpg" name="' + i + '" data-rjs="2"/>';
                work.large = work.large + '<img src="'+ lang + 'assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large@2x.jpg" name="' + i + '" data-rjs="2"/>';
            }
            work.miniatura = work.subseccion + '/' + work.miniatura + '@2x.jpg';
            portfolioWork(work);
        });
        mixit($visualCont, 4, 'asc');
        mixit($uxuiCont, 4, 'asc');
        mixit($frontendCont, 4, 'asc');
        thumbsEvents();
        filterBtns();
        animateImages();
    };

    //___________Templates HandleBars____________

    var processIndex = function (steps) {
        var source = $("#process-template").html();
        var template = Hbars.compile(source);
        var div = template(steps);
        $processCont.append(div);
    };

    var portfolioWork = function (work) {
        var source = $("#works-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        switch (work.seccion) {
            case 'Diseño Visual':
                $visualCont.append(div);
                break;
            case 'UX/UI':
                $uxuiCont.append(div);
                break;
            case 'Frontend':
                $frontendCont.append(div);
                break;
        }
    };

    var homeWork = function (work) {
        var source = $("#thumbs-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        $homeCont.append(div);
    };

    var cronologiaAbout = function (work) {
        var source = $("#cronologia-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        $cronologiaCont.append(div);
    };

    var techAbout = function (tecnologias, appendDiv) {
        var source = $("#tech-template").html();
        var template = Hbars.compile(source);
        var div = template(tecnologias);
        appendDiv.append(div);
    };

    //_________Controllers__________

    //Hash Animation
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //Side Menu
    $menuBtn.on('click', function (e) {
        e.preventDefault();
        $menuCont.toggleClass("open");

        var $subMenuBtn = $('.sub-menu-btn');
        var $subMenuCont = $('.sub-menu-container');
        var bgWidth = $(window).width() + 'px';
        var bgHeight = $(window).height() + 'px';

        $menuBg.width(bgWidth);
        $menuBg.height(bgHeight);
        $menuBg.toggleClass("hide");

        // slide menu
        if ($menuCont.hasClass("open")) {
            $menuCont.animate({
                left: "0px"
            });
        } else {
            $menuCont.animate({
                left: -$menuCont.width()
            }, 250);
        }

        $subMenuBtn.each(function () {
            console.log('hola');
            $(this).on('click', function (e) {
                e.preventDefault();


                $subMenuCont.each(function () {
                    $(this).removeClass('click');
                });

                var $subMenuContClick = $(this).next('.sub-menu-container').addClass('click');

                // close all open class but clicked
                $subMenuCont.each(function () {
                    if (!($(this).hasClass('click')) && $(this).hasClass('open')) {
                        $(this).removeClass('open');
                        $(this).animate({
                            left: -$(this).width()
                        }, 250, function () {
                            $(this).toggleClass("hide");
                        });
                    }
                });

                $subMenuContClick.toggleClass("open");

                if ($subMenuContClick.hasClass("open")) {
                    $subMenuContClick.toggleClass("hide");
                    $subMenuContClick.delay(250).animate({
                        left: "0px"
                    });
                } else {
                    $subMenuContClick.animate({
                        left: -$subMenuContClick.width()
                    }, 250, function () {
                        $subMenuContClick.toggleClass("hide");
                    });
                }

                $('.sub-menu-container').find('a').each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        var cont = $(this);
                        $menuCont.animate({
                            left: -$menuCont.width()
                        }, 250, "linear", function () {
                            $menuCont.toggleClass("open");
                            $menuBg.toggleClass("hide");
                            window.location.href = cont.attr("href");
                        });
                    });
                });
            });
        });
    });

    $menuBg.on('click', function () {
        $menuBtn.click();
    });

    //Index Accordion
    $category.each(function () {
        category.push(this);
    });

    var cleanSubcat = function (li1, li2) {
        if ($(li1).find('ul').hasClass('subcat') === true) {
            $(li1).find('ul').removeClass(' subcat');
        }

        if ($(li2).find('ul').hasClass('subcat') === true) {
            $(li2).find('ul').removeClass(' subcat');
        }
    };

    $category.on("click", function () {
        if (category[0] === this) {
            cleanSubcat(category[1], category[2]);

            $(category[0]).find('ul').toggleClass('subcat');
            $(category[1]).toggleClass('accordion');
            $(category[2]).removeClass(" accordion");


        } else if (category[1] === this) {
            cleanSubcat(category[0], category[2]);

            $(category[1]).find('ul').toggleClass('subcat');
            $(category[2]).toggleClass('accordion');
            $(category[1]).removeClass(' accordion');

        } else {
            cleanSubcat(category[0], category[1]);

            $(category[2]).find('ul').toggleClass('subcat');
            $(category[2]).removeClass(' accordion');
            $(category[1]).removeClass(' accordion');
        }
    });

    //MIXITUP Setup
    var mixit = function(cont, num, sort) {
        cont.mixItUp({
            load: {
                filter: 'all',
                sort: sort
            },
            pagination: {
                limit: num,
                prevButtonHTML: "",
                nextButtonHTML: ""
            }
        });
    };

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results === null) {
            return null;
        } else {
            return results[1] || 0;
        }
    };
    var filterUrl = $.urlParam('filter');

    //MIXITUP Filtros
    var loopFilter = function (secCont, mixCont, sec) {
        secCont.find('.allss').on("click", function (e) {
            e.preventDefault();
            mixCont.mixItUp('filter', 'all');
            secCont.find('button').removeClass('click');
            $(this).addClass('click');
        });

        secCont.find('.allss').text('Todos');

        $.each(sec, function (index, ss) {
            if (ss === filterUrl) {
                mixCont.mixItUp('filter', '.' + ss);
                secCont.find('.' + index).addClass('click');
            }

            secCont.find('.' + index).on("click", function (e) {
                e.preventDefault();
                mixCont.mixItUp('filter', '.' + ss);
                secCont.find('button').removeClass('click');
                $(this).addClass('click');
            });

            switch (ss) {
                case 'ux':
                    secCont.find('.' + index).text(ss.toUpperCase());
                    break;
                case 'cms':
                    secCont.find('.' + index).text(ss.toUpperCase());
                    break;
                case 'generacion':
                    secCont.find('.' + index).text('Generación');
                    break;
                default:
                    secCont.find('.' + index).text(ss.charAt(0).toUpperCase() + ss.slice(1));
            }
        });
    };

    var filterBtns = function () {
        $.each(secciones, function (indexSec, sec) {
            switch (indexSec) {
                case 'Diseño Visual':
                    loopFilter($visualSec, $visualCont, sec);
                    break;

                case 'UX/UI':
                    loopFilter($uxuiSec, $uxuiCont, sec);
                    break;

                case 'Frontend':
                    loopFilter($frontendSec, $frontendCont, sec);
                    break;

                case 'Cronologia':
                    loopFilter($cronologiaSec, $cronologiaCont, sec);
                    break;
            }
        });
    };

    //Detail Images Animation
    var animateImages = function () {
        $('.project_min img').each(function () {
            $(this).on('click', function () {
                var name = $(this).attr('name');
                $(this).closest('.mix').find('.project_img img').each(function () {
                    if ($(this).attr('name') === name) {
                        $('html, body').animate({
                            scrollTop: $(this).offset().top - 80
                        }, 800);
                    }
                });
            });
        });
    };

    //About Chrono
    /*var chronoFix = function () {
        $('#cronologiaMix').find('.mix').each(function () {
            var date = $(this).find('.chrono h3').text();
        });
    };*/

    //About Techs
    var techHover = function (container) {
        container.find('li').hover(function() {
            var divTitle = $(this).find('h5').text();
            var divText = $(this).find('p').text();
            var divImages = $(this).find('span').text();
            var images = divImages.split('-');
            $('.images').empty();
            $.each(images, function (key, image) {
                var src = '<img src="'+ lang + 'assets/tech/' + image + '@2x.jpg">';
                $('.images').append(src);
            });
            $detailsDiv.find('h4').text(divTitle);
            console.log(divText);
            $detailsDiv.find('p').text(divText);
        });
    };

    //_________Events__________

    //Works View more
    $dwaMoreBtn.on("click", function () {
        if ($dwaMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dwaMore.toggleClass('hide');
    });

    $dufMoreBtn.on("click", function () {
        if ($dufMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dufMore.toggleClass('hide');
    });

    $dgiMoreBtn.on("click", function () {
        if ($dgiMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dgiMore.toggleClass('hide');
    });

    //MIXITUP Thumbs
    var thumbsEvents = function () {
        $('.container .min').each(function () {
            $(this).on("mouseover", function () {
                var $thumb = $(this).closest('.mix').find('.thumb-hover');
                $thumb.removeClass('hide');
            });

            $(this).on("mouseout", function () {
                var $thumb = $(this).closest('.mix').find('.thumb-hover');
                $thumb.addClass('hide');
            });

            $(this).on("click", function () {
                var $lightbox = $(this).closest('.mix').find('.project_cont');
                $lightbox.css({height: $(document).height()});
                $lightbox.css({top: 0});
                $(document).scrollTop(0);

                var skillsArray = $lightbox.find('.project_skills').text().split(',');
                $.each(skillsArray, function (key, skill) {
                    var src = '<img src="' + lang + 'assets/tech/' + skill + '.jpg"  data-rjs="2"/>';
                    $lightbox.find('.project_skills_cont').append(src);
                });

                $lightbox.removeClass('hide');
                hash = $(this).closest('section').find('.hash').attr('id');
                window.location.hash = "";
            });
        });

        $('.project_cont').each(function () {
            var $lightbox = $(this);
            var $catThumbs = $lightbox.closest('.container');

            if ($lightbox.find('.project_url a').attr('href') !== '') {
                $(this).find('.project_url').show();
            }

            $lightbox.find('.icon-close').on('click', function () {
                $lightbox.addClass('hide');
                $lightbox.find('.project_skills').text('');
                $lightbox.find('.project_skills_cont').empty();
                if ($body.is('.home')) {
                    $('html,body').animate({
                        scrollTop: $('#portfoliohash').offset().top
                    }, 1);
                } else if ($body.is('.works')) {
                    $('html,body').animate({
                        scrollTop: $('#' + hash).offset().top
                    }, 1);
                } else if ($body.is('.about')) {
                    $('html,body').animate({
                        scrollTop: $('#cronologiahash').offset().top
                    }, 1);
                }
            });

            $lightbox.find('.icon-arrow').on('click', function () {
                var $thisThumb = $(this).closest('.mix');
                var $nextThumb = $(this).closest('.mix').next();

                $lightbox.addClass('hide');
                $lightbox.find('.project_skills_cont').empty();

                var nextPageOverlay = function () {
                    $nextThumb.find('.min').click();
                };

                var lastPageOverlay = function () {
                    $catThumbs.find('.mix').first().find('.min').click();
                };

                if ($catThumbs.prev().find('.pager-list').hasClass('no-pagers')) {
                    if ($nextThumb.css('display') !== 'none' && $nextThumb.hasClass('mix')) {
                        nextPageOverlay();
                    } else {
                        var $thumbClass = $thisThumb.attr('class');
                        var first = true;
                        $catThumbs.find('.mix').each(function () {
                            if ($(this).attr('class') === $thumbClass && first === true) {
                                $(this).find('.min').click();
                                first = false
                            }
                        });
                    }
                } else {
                    if ($nextThumb.css('display') !== 'none' && $nextThumb.hasClass('mix')) {
                        nextPageOverlay();
                    } else if ($nextThumb.css('display') === 'none' && $nextThumb.hasClass('mix')) {
                        $('html,body').animate({
                            scrollTop: $('#' + hash).offset().top
                        }, 1);
                        $catThumbs.prev().find('.page-next').click();
                        setTimeout(nextPageOverlay, 1000);
                    } else if (!$nextThumb.hasClass('mix')) {
                        $('html,body').animate({
                            scrollTop: $('#' + hash).offset().top
                        }, 1);
                        $catThumbs.closest('.container').prev().find('.page-prev').click();
                        $catThumbs.closest('.container').prev().find('.page-prev').click();
                        setTimeout(lastPageOverlay, 2000);
                    }
                }
            });

            $lightbox.find('.icon-arrow-right').on('click', function () {
                var $thisThumb = $(this).closest('.mix');
                var $prevThumb = $(this).closest('.mix').prev();

                $lightbox.addClass('hide');
                $lightbox.find('.project_skills_cont').empty();

                var prevPageOverlay = function () {
                    $prevThumb.find('.min').click();
                };

                var firstPageOverlay = function () {
                    $catThumbs.find('.mix').last().find('.min').click();
                };

                if ($catThumbs.prev().find('.pager-list').hasClass('no-pagers')) {
                    if ($prevThumb.css('display') !== 'none' && $prevThumb.hasClass('mix')) {
                        prevPageOverlay();
                    } else {
                        var $thumbClass = $thisThumb.attr('class');
                        var hasClass = false;

                        $catThumbs.find('.mix').each(function () {
                            if ($(this).attr('class') === $thumbClass && hasClass === false) {
                                hasClass = true;
                            } else if ($(this).attr('class') !== $thumbClass && hasClass === true) {
                                $(this).prev().find('.min').click();
                                hasClass = false;
                            }
                        });

                        if (hasClass === true) {
                            firstPageOverlay();
                        }
                        hasClass = false;
                    }
                } else {
                    if ($prevThumb.css('display') !== 'none' && $prevThumb.hasClass('mix')) {
                        $lightbox.find('.project_skills_cont').empty();
                        prevPageOverlay();
                    } else if ($prevThumb.css('display') === 'none' && $prevThumb.hasClass('mix')) {
                        $('html,body').animate({
                            scrollTop: $('#' + hash).offset().top
                        }, 1);
                        $catThumbs.prev().find('.page-prev').click();
                        setTimeout(prevPageOverlay, 1000);
                    } else if (!$prevThumb.hasClass('mix')) {
                        $('html,body').animate({
                            scrollTop: $('#' + hash).offset().top
                        }, 1);
                        $catThumbs.closest('.container').prev().find('.page-next').click();
                        $catThumbs.closest('.container').prev().find('.page-next').click();
                        setTimeout(firstPageOverlay, 2000);
                    }
                }
            });
        });
    };

    //On Load	
    listContents();
    loadMenu();

})(jQuery, Handlebars);
