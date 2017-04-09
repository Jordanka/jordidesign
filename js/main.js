(function($, Hbars) {
    //_________Urls__________
    var baseURL = '/library/';
    var listURL = baseURL + "api.php?action=list";
    var contentsURL = 'js/contents.json';

    //_________Queries__________

    //Menu
    var $menuBtn = $('.menu-btn');
    var $backBtn = $('.icon-angle-double-left');
    var $menuCont = $('#menu-container');
    var $menuBg = $('.menu-bg');

    //Slider
    var $sliderLeft = $('#slider .icon-arrow:first-child');
    var $sliderRight = $('#slider .icon-arrow:last-child');
    var $sliderImg = $('#slider');
    var $sliderH1 = $('#slider-h1');
    var $sliderH11 = $('#slider-h1:first-child');
    var $sliderP = $('#slider-p');
    var $sliderA = $('#slider-a');
    var $aboutP = $('#about p');

    //Sections
    var $webSec = $('#web-apps');
    var $graphicSec = $('#graphic');
    var $industrialSec = $('#industrial');
    var $cronologiaSec = $('#cronologia');
    var $dwP = $webSec.find('.sechead p');
    var $dgP = $graphicSec.find('.sechead p');
    var $diP = $industrialSec.find('.sechead p');

    //View More
    var $dwaMoreBtn = $webSec.find('.small-view-more');
    var $dufMoreBtn = $graphicSec.find('.small-view-more');
    var $dgiMoreBtn = $industrialSec.find('.small-view-more');
    var $dwaMore = $('#dw-more');
    var $dufMore = $('#dg-more');
    var $dgiMore = $('#di-more');

    //Mixit Containers
    var $webCont = $('#WebApps');
    var $graphicCont = $('#Graphic');
    var $industrialCont = $('#Industrial');
    var $cronologiaCont = $('#Cronologia');
    var $homeCont = $('#Container');
    var $processCont = $('#process .cont-12');

    //Techs
    var $uxdevDiv = $('#uxdev-tech');
    var $graphicDiv = $('#graphic-tech');
    var $industrialDiv = $('#industrial-tech');
    var $detailsDiv = $('#techgraphs .experience');

    var category = [];
    var hash = '';

    //_________Load Contents__________

    var loadMenu = function() {
        $.get('menu.html')
            .success(function(data) {
                $menuCont.html(data);
            });
    }

    var listContents = function() {
        $.ajax(contentsURL, {
            type: 'GET',
            dataType: 'json',
        }).done(function(res) {
            if (!res.error) {
                secciones = res.contenidos.secciones;
                works = res.works;
                console.log(window.location.pathname);
                switch (window.location.pathname) {
                    case '/':
                    case '/jordidesign/index.html':
                        $sliderP.text(res.contenidos.webapps);
                        $aboutP.text(res.contenidos.about);
                        sliderEvents(res.contenidos);
                        $.each(res.contenidos.steps, function(key, step) {
                            processIndex(step);
                        });

                        $.each(works, function(index, work) {
                            work.min = "";
                            work.large = "";
                            for (var i = 1; i <= work.imagenes; i++) {
                                work.min = work.min + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min.jpg" name="' + i + '"/>';
                                work.large = work.large + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large.jpg" name="' + i + '"/>';
                            }
                            work.miniatura = work.subseccion + '/' + work.miniatura + '.jpg';
                            homeWork(work);
                        });
                        mixit($homeCont, 8, 'desc');
                        thumbsEvents();
                        animateImages();
                        break;
                    case '/jordidesign/about.html':
                        $.each(res.tecnologias.uxdev, function(index, tecnologia) {
                            techAbout(tecnologia, $uxdevDiv);
                        });

                        $.each(res.tecnologias.graphic, function(index, tecnologia) {
                            techAbout(tecnologia, $graphicDiv);
                        });

                        $.each(res.tecnologias.industrial, function(index, tecnologia) {
                            techAbout(tecnologia, $industrialDiv);
                        });

                        techHover($uxdevDiv, $detailsDiv);
                        techHover($graphicDiv, $detailsDiv);
                        techHover($industrialDiv, $detailsDiv);

                        $.each(works, function(index, work) {
                            work.min = "";
                            work.large = "";
                            for (var i = 1; i <= work.imagenes; i++) {
                                work.min = work.min + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min.jpg" name="' + i + '"/>';
                                work.large = work.large + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large.jpg" name="' + i + '"/>';
                            }
                            work.miniatura = work.subseccion + '/' + work.miniatura + '.jpg';

                            $.each(secciones.Cronología, function(index, seccion) {
                                switch (work.proveedor) {
                                    case 'Aracnia':
                                        work.cronologia = 'aracnia';
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
                                    case 'Global Construcciones':
                                        work.cronologia = 'global';
                                        break;
                                }
                            });
                            cronologiaAbout(work);
                        });

                        mixit($cronologiaCont, 6, 'asc');
                        thumbsEvents();
                        filterBtns();
                        chronoFix();
                        animateImages();
                        $('#cronologia').find('.allss').click();
                        break;
                    case '/jordidesign/works.html':
                        $dwP.text(res.contenidos.webapps);
                        $dgP.text(res.contenidos.graphics);
                        $diP.text(res.contenidos.industrial);

                        $.each(works, function(index, work) {
                            work.min = "";
                            work.large = "";
                            for (var i = 1; i <= work.imagenes; i++) {
                                work.min = work.min + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_min.jpg" name="' + i + '"/>';
                                work.large = work.large + '<img src="assets/works/' + work.subseccion + '/' + work.miniatura + '0' + i + '_large.jpg" name="' + i + '"/>';
                            }
                            work.miniatura = work.subseccion + '/' + work.miniatura + '.jpg';
                            portfolioWork(work);
                        });
                        mixit($webCont, 4, 'asc');
                        mixit($graphicCont, 4, 'asc');
                        mixit($industrialCont, 4, 'asc');
                        thumbsEvents();
                        filterBtns();
                        animateImages();
                        break;
                }
            } else {
                alert("No se pudo ontener la lista de tecnologias");
            }
        });
    }

    //___________Templates HandleBars____________

    var processIndex = function(steps) {
        var source = $("#process-template").html();
        var template = Hbars.compile(source);
        var div = template(steps);
        $processCont.append(div);
    }

    var portfolioWork = function(work) {
        var source = $("#works-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        switch (work.seccion) {
            case 'Diseño Web/Apps':
                $webCont.append(div);
                break;
            case 'UX/UI & Frontend':
                $graphicCont.append(div);
                break;
            case 'Gráfico & Industrial':
                $industrialCont.append(div);
                break;
        }
    };

    var homeWork = function(work) {
        var source = $("#thumbs-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        $homeCont.append(div);
    };

    var cronologiaAbout = function(work) {
        var source = $("#cronologia-template").html();
        var template = Hbars.compile(source);
        var div = template(work);
        $cronologiaCont.append(div);
    };

    var techAbout = function(tecnologias, appendDiv) {
        var source = $("#tech-template").html();
        var template = Hbars.compile(source);
        var div = template(tecnologias);
        appendDiv.append(div);
    };

    //_________Controllers__________

    //Hash Animation
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
    $menuBtn.on('click', function(e) {
        e.preventDefault();
        $menuCont.toggleClass("open");

        bgWidth = $(window).width() + 'px';
        bgHeight = $(window).height() + 'px';
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

        $('.sub-menu-btn').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();

                $('.sub-menu-container').each(function() {
                    $(this).removeClass('click');
                });

                var $subMenuContClick = $(this).next('.sub-menu-container').addClass('click');

                // close all open class but clicked
                $('.sub-menu-container').each(function() {
                    if (!($(this).hasClass('click')) && $(this).hasClass('open')) {
                        $(this).removeClass('open');
                        $(this).animate({
                            left: -$(this).width(),
                        }, 250, function() {
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
                        left: -$subMenuContClick.width(),
                    }, 250, function() {
                        $subMenuContClick.toggleClass("hide");
                    });
                }

                $('.sub-menu-container').find('a').each(function() {
                    $(this).on('click', function(e) {
                        e.preventDefault();
                        var cont = $(this);
                        $menuCont.animate({
                            left: -$menuCont.width()
                        }, 250, "linear", function() {
                            $menuCont.toggleClass("open");
                            $menuBg.toggleClass("hide");
                            window.location.href = cont.attr("href");
                        });
                    });
                });
            });
        });
    });

    $menuBg.on('click', function() {
        $menuBtn.click();
    });

    //Index Accordion	
    $('.category').each(function() {
        category.push(this);
    });

    var cleanSubcat = function(li1, li2) {
        if ($(li1).find('ul').hasClass('subcat') == true) {
            $(li1).find('ul').removeClass(' subcat');
        }

        if ($(li2).find('ul').hasClass('subcat') == true) {
            $(li2).find('ul').removeClass(' subcat');
        }
    }

    $('.category').on("click", function() {
        if (category[0] == this) {
            cleanSubcat(category[1], category[2]);

            $(category[0]).find('ul').toggleClass('subcat');
            $(category[1]).toggleClass('accordion');
            $(category[2]).removeClass(" accordion");


        } else if (category[1] == this) {
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
                sort: 'myorder:asc',
            },
            pagination: {
                limit: num,
                prevButtonHTML: "",
                nextButtonHTML: ""
            },
            callbacks: {
                onMixFail: function() {
                    alert('No items were found matching the selected filters.');
                }
            }
        });
    }

    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return results[1] || 0;
        }
    }
    var filterUrl = $.urlParam('filter');

    //MIXITUP Filtros
    var loopFilter = function(secCont, mixCont, sec) {
        secCont.find('.allss').on("click", function(e) {
            e.preventDefault();
            mixCont.mixItUp('filter', 'all');
            secCont.find('button').removeClass('click');
            $(this).addClass('click');
        });

        secCont.find('.allss').text('Todos');

        $.each(sec, function(index, ss) {
            if (ss == filterUrl) {
                mixCont.mixItUp('filter', '.' + ss);
                secCont.find('.' + index).addClass('click');
            };

            secCont.find('.' + index).on("click", function(e) {
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
                    secCont.find('.' + index).text(ss.toUpperCase())
                    break;
                case 'grafico':
                    secCont.find('.' + index).text('Gráfico')
                    break;
                default:
                    secCont.find('.' + index).text(ss.charAt(0).toUpperCase() + ss.slice(1));
            }
        });
    }

    var filterBtns = function() {
        $.each(secciones, function(indexSec, sec) {
            switch (indexSec) {
                case 'Diseño Web/Apps':
                    loopFilter($webSec, $webCont, sec);
                    break;

                case 'UX/UI & Frontend':
                    loopFilter($graphicSec, $graphicCont, sec);
                    break;

                case 'Gráfico & Industrial':
                    loopFilter($industrialSec, $industrialCont, sec);
                    break;

                case 'Cronología':
                    loopFilter($cronologiaSec, $cronologiaCont, sec);
                    break;
            }
        });
    }

    //Detail Images Animation
    var animateImages = function() {
        $('.project_min img').each(function() {
            $(this).on('click', function() {
                var name = $(this).attr('name');
                $(this).closest('.mix').find('.project_img img').each(function() {
                    if ($(this).attr('name') == name) {
                        $('html, body').animate({
                            scrollTop: $(this).offset().top - 80
                        }, 800);
                    }
                });
            });
        });
    }

    //About Chrono
    var chronoFix = function() {
        $('#Cronologia .mix').each(function() {
            var date = $(this).find('.chrono h3').text();
        });
    };

    //About Techs
    var techHover = function(container, detailsDiv) {
        container.find('li').hover(function(e) {
            var divTitle = $(this).find('h5').text();
            var divText = $(this).find('p').text();
            var divImages = $(this).find('span').text();
            var images = divImages.split('-');
            $('.images').empty();
            $.each(images, function(key, image) {
                var src = '<img src="assets/tech/' + image + '@2x.jpg">';
                $('.images').append(src);
            });
            $('#techgraphs .experience h4').text(divTitle);
            $('#techgraphs .experience p').text(divText);
        });
    }

    //_________Events__________

    //Slider
    //Index Slider
    var cleanSlide = function() {
        $sliderImg.removeClass('slider');
        $sliderH1.removeClass('slider');
        $sliderP.removeClass('slider');
        $sliderA.removeClass('slider');
        $sliderP.empty();
    }

    var displaySlide = function(slide, nextSlide, oldName, name, name2, text, url) {
        $sliderImg.removeClass(slide);

        $sliderImg.addClass(nextSlide);
        $sliderImg.addClass('slider');

        setTimeout(function() {
            $sliderH1.text(name);
            $sliderH1.append('<span>' + name2 + '</span');
            $sliderH1.addClass('slider');

            setTimeout(function() {
                $sliderP.text(text);
                $sliderP.addClass('slider');

                setTimeout(function() {
                    $sliderA.attr("href", url);
                    $sliderA.addClass('slider');
                }, 100);
            }, 100);
        }, 200);
    }

    var sliderEvents = function(text) {
        $sliderRight.on('click', function() {
            cleanSlide();

            if ($sliderImg.hasClass("slider-1")) {
                displaySlide('slider-1', 'slider-2', 'Web/Apps', 'UX/UI & ', 'Frontend', text.graphics, 'works.html#graphichash');

            } else if ($sliderImg.hasClass("slider-2")) {
                displaySlide('slider-2', 'slider-3', 'Gráfico', 'Gráfico & ', 'Industrial', text.industrial, 'works.html#industrialhash');

            } else if ($sliderImg.hasClass("slider-3")) {
                displaySlide('slider-3', 'slider-1', 'Industrial', 'Diseño ', 'Web/Apps', text.webapps, 'works.html#webhash');
            }
        });

        $sliderLeft.on('click', function() {
            cleanSlide();

            if ($sliderImg.hasClass("slider-1")) {
                displaySlide('slider-1', 'slider-3', 'Web/Apps', 'Gráfico & ', 'Industrial', text.industrial, 'works.html#industrialhash');

            } else if ($sliderImg.hasClass("slider-2")) {
                displaySlide('slider-2', 'slider-1', 'Gráfico', 'Diseño ', 'Web/Apps', text.webapps, 'works.html#webhash');

            } else if ($sliderImg.hasClass("slider-3")) {
                displaySlide('slider-3', 'slider-2', 'Industrial', 'UX/UI & ', 'Gráfico', text.graphics, 'works.html#graphichash');
            }
        });
    };

    //Works View more
    $dwaMoreBtn.on("click", function(e) {
        if ($dwaMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dwaMore.toggleClass('hide');
    });

    $dufMoreBtn.on("click", function(e) {
        if ($dufMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dufMore.toggleClass('hide');
    });

    $dgiMoreBtn.on("click", function(e) {
        if ($dgiMore.hasClass('hide')) {
            $(this).text("[-] Ver menos");
        } else {
            $(this).text("[+] Ver más");
        }
        $dgiMore.toggleClass('hide');
    });

    //MIXITUP Thumbs
    var thumbsEvents = function() {
        $('.container .min').each(function() {
            $(this).on("mouseover", function() {
                var $thumb = $(this).closest('.mix').find('.thumb-hover');
                $thumb.removeClass('hide');
            });

            $(this).on("mouseout", function() {
                var $thumb = $(this).closest('.mix').find('.thumb-hover');
                $thumb.addClass('hide');
            });

            $(this).on("click", function() {
                var $lightbox = $(this).closest('.mix').find('.project_cont');
                $lightbox.css({ height: $(document).height() });
                $lightbox.css({ top: 0 });
                $(document).scrollTop(0);

                var skillsArray = $lightbox.find('.project_skills').text().split(',');
                $.each(skillsArray, function(key, skill) {
                    var src = '<img src="assets/tech/' + skill + '.jpg"/>';
                    $lightbox.find('.project_skills_cont').append(src);
                });

                $lightbox.removeClass('hide');
                hash = $(this).closest('section').find('.hash').attr('id');
                window.location.hash = "";
            });
        });

        $('.project_cont').each(function() {
            var $lightbox = $(this);
            var $catThumbs = $lightbox.closest('.container');

            if ($lightbox.find('.project_url a').attr('href') != '') {
                $(this).find('.project_url').show();
            };

            $lightbox.find('.icon-close').on('click', function() {
                $lightbox.addClass('hide');
                $lightbox.find('.project_skills').text('');
                $lightbox.find('.project_skills_cont').empty();
                if($('body').is('.home')){
                    $('html,body').animate({
                        scrollTop: $('#portfoliohash').offset().top
                    }, 1);
                } else if ($('body').is('.works')){
                    $('html,body').animate({
                        scrollTop: $('#' + hash).offset().top
                    }, 1);
                } else if ($('body').is('.about')){
                    $('html,body').animate({
                        scrollTop: $('#cronologiahash').offset().top
                    }, 1);
                }
            });

            $lightbox.find('.icon-arrow').on('click', function() {
                var $thisThumb = $(this).closest('.mix');
                var $nextThumb = $(this).closest('.mix').next();

                $lightbox.addClass('hide');
                $lightbox.find('.project_skills_cont').empty();

                var nextPageOverlay = function() {
                    $nextThumb.find('.min').click();
                }

                var lastPageOverlay = function() {
                    $catThumbs.find('.mix').first().find('.min').click();
                }

                if ($catThumbs.prev().find('.pager-list').hasClass('no-pagers')) {
                    if ($nextThumb.css('display') != 'none' && $nextThumb.hasClass('mix')) {
                        nextPageOverlay();
                    } else {
                        $thumbClass = $thisThumb.attr('class');
                        var first = true;
                        $catThumbs.find('.mix').each(function() {
                            if ($(this).attr('class') == $thumbClass && first == true) {
                                $(this).find('.min').click();
                                first = false
                            };
                        });
                    }
                } else {
                    if ($nextThumb.css('display') != 'none' && $nextThumb.hasClass('mix')) {
                        nextPageOverlay();
                    } else if ($nextThumb.css('display') == 'none' && $nextThumb.hasClass('mix')) {
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

            $lightbox.find('.icon-arrow-right').on('click', function() {
                var $thisThumb = $(this).closest('.mix');
                var $prevThumb = $(this).closest('.mix').prev();

                $lightbox.addClass('hide');
                $lightbox.find('.project_skills_cont').empty();

                var prevPageOverlay = function() {
                    $prevThumb.find('.min').click();
                }

                var firstPageOverlay = function() {
                    $catThumbs.find('.mix').last().find('.min').click();
                }

                if ($catThumbs.prev().find('.pager-list').hasClass('no-pagers')) {
                    if ($prevThumb.css('display') != 'none' && $prevThumb.hasClass('mix')) {
                        prevPageOverlay();
                    } else {
                        $thumbClass = $thisThumb.attr('class');
                        var hasClass = false;

                        $catThumbs.find('.mix').each(function() {
                            if ($(this).attr('class') == $thumbClass && hasClass == false) {
                                hasClass = true;
                            } else if ($(this).attr('class') != $thumbClass && hasClass == true) {
                                $(this).prev().find('.min').click();
                                hasClass = false;
                            }
                        });

                        if (hasClass == true) {
                            firstPageOverlay();
                        }
                        hasClass = false;
                    }
                } else {
                    if ($prevThumb.css('display') != 'none' && $prevThumb.hasClass('mix')) {
                        $lightbox.find('.project_skills_cont').empty();
                        prevPageOverlay();
                    } else if ($prevThumb.css('display') == 'none' && $prevThumb.hasClass('mix')) {
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
    }

    //On Load	
    listContents();
    loadMenu();

})(jQuery, Handlebars);
