/*---- Home ------*/
if($('body').is('.home')){
  var swiper = new Swiper('.main-slider', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
  });

  var galleryTop = new Swiper('.gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same     
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      centeredSlides: true,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true
  });

  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;

  var swiper = new Swiper('.taller-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      parallax: true,
      speed: 600,
  });

  $(document).ready(function(){
    $('a[data-rel^=lightcase]').lightcase();
  });
}

/*---- List ------*/
if($('body').is('.list')){

 //Filters menu
  var filterCont = $('.filters');
  var mainCont = $('.main-content');
  var filterInner = $('.filter-cont');

  filterCont.css('height', mainCont.height());

  $('.filter-btn').on('click', function(e) {
    e.preventDefault();
    if (filterCont.hasClass('collapsed')) {
      filterCont.removeClass('collapsed');
      $(this).find('i').attr('class', 'icon-close');
      $(this).find('i').css('font-size', '2.8em');
      filterCont.animate({ width: '300' }, 200, function() {
      mainCont.css('margin-left', '300');
      calculateH();

      filterCont.css('height', mainCont.height());
      setTimeout(function(){
          filterInner.show();          
        },500);
      });
    } else {
      filterInner.hide();
      filterCont.addClass('collapsed');
      $(this).find('i').attr('class', 'icon-filter');
      $(this).find('i').css('font-size', '1.8em');
      filterCont.animate({ width: '0' }, 200, function() {
        mainCont.css('margin-left', '0');
        calculateH();
        filterCont.css('height', mainCont.height());
      });
    }
    hashAnimation(this);
  });

  //Switch list/thumbs
  $('.list-format').on('click', function(e) {
    e.preventDefault();
    if ( !$(this).hasClass('active')) {
      $('.list-format').removeClass('active');
      $(this).addClass('active');

      if ($(this).find('i').hasClass('icon-list')) {
        $('.resultados-thumbs').hide();
        $('.resultados-list').show();
        filterCont.css('height', mainCont.height());
      } else {
        $('.resultados-thumbs').show();
        $('.resultados-list').hide();
        filterCont.css('height', mainCont.height());
      }
    }
  });

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if(scroll > 250){
        $('.filter-btn').show();
    } else {
      $('.filter-btn').hide();
    }
    previousScroll = scroll;
  });

  $(document).ready(function(){
    filterCont.css('height', mainCont.height());
  });

  $( window ).resize(function() {
    filterCont.css('height', mainCont.height());
  });
} 

/*---- Resultados ------*/
if($('main').is('#list-basic')){
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

      if(scroll > 1){
        $('.filter-btn').show();
      } else {
        $('.filter-btn').hide();
      }
      previousScroll = scroll;
  });
}

/*---- Tienda ------*/
if($('body').is('.store')){

  $(".star-rating").starRating({
    initialRating: 4,
    activeColor: '#01ecc0',
    useGradient: false,
    strokeWidth: 0,
    starSize: 20,
    readOnly: true,
  });

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

      if(scroll > 500){
        $('.filter-btn').show();
      } else {
        $('.filter-btn').hide();
      }
      previousScroll = scroll;
  });
}

/*---- Hacedores ------*/
if($('body').is('.hacedores')) {

    var galleryHac = new Swiper('#gallery-hacedor', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10,
      loop:true,
      loopedSlides: 4, //looped slides should be the same 
      autoplay: true    
  });

  var galleryHacThumbs = new Swiper('#gallery-hac-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      centeredSlides: true,
      loop:true,
      loopedSlides: 4, //looped slides should be the same
      slideToClickedSlide: true
  });

  galleryHac.params.control = galleryHacThumbs;
  galleryHacThumbs.params.control = galleryHac;

  $(document).ready(function(){
      $('a[data-rel^=lightcase]').lightcase({
        onFinish : {
          baz: function() {
            var cont = $(this).closest('.thumb').find('.hacedores-cont').html();
            $('.lightcase-inlineWrap').html(cont);
          }
        },
      });
    });
}

/*---- Taller ------*/
if($('main').is('#taller')) {
  $(document).ready(function(){    $('a[data-rel^=lightcase]').lightcase();
  });
}

/*---- Details ------*/
if($('body').is('.details')){

  /*pass the images to Fancybox
  $("#zoom").bind("click", function(e) {  
    var ez =   $('#zoom').data('elevateZoom'); 
    $.fancybox(ez.getGalleryList());
    return false;
  });*/
  
  if($(window).width()>991){
    $('#zoom').click(function(){
        $(this).elevateZoom({
            zoomWindowPosition:1,
            zoomWindowOffetx: 5,
            zoomWindowWidth:$(this).width(), 
            zoomWindowHeight:$(this).height(),
            gallery:'gal1', 
            cursor: 'pointer', 
            galleryActiveClass: 'active', 
            imageCrossfade: false, 
          loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
        }); 
    });
  } else {
      $('#zoom').elevateZoom({
          gallery:'gal1', 
          zoomType: "inner",
          cursor: "crosshair", 
          galleryActiveClass: 'active', 
          imageCrossfade: false, 
          loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
      }); 
  }

  //star rating
  $(".star-rating").starRating({
    initialRating: 4,
    activeColor: '#01ecc0',
    useGradient: false,
    strokeWidth: 0,
    starSize: 20,
    readOnly: true,
  });

  $(".calif-star-01").starRating({
    initialRating: 4,
    activeColor: '#01ecc0',
    useGradient: false,
    strokeWidth: 0,
    starSize: 15,
    readOnly: true,
  });

  $(".calif-star-02").starRating({
    initialRating: 5,
    activeColor: '#01ecc0',
    useGradient: false,
    strokeWidth: 0,
    starSize: 15,
    readOnly: true,
  });

  $(".calif-star-03").starRating({
    initialRating: 3,
    activeColor: '#01ecc0',
    useGradient: false,
    strokeWidth: 0,
    starSize: 15,
    readOnly: true,
  });

  //description tabs
  $('.calif-btn').on('click', function(e){
      e.preventDefault();
      if (!$(this).find('button').hasClass('active')) {
        $('.calif-btn').find('button').addClass('active');
        $('.desc-btn').find('button').removeClass('active');
        $('.calif-tab').show();
        $('.desc-tab').hide();
      }
  });

  $('.desc-btn').on('click', function(e){
      e.preventDefault();
      if (!$(this).find('button').hasClass('active')) {
        $('.desc-btn').find('button').addClass('active');
        $('.calif-btn').find('button').removeClass('active');
        $('.desc-tab').show();
        $('.calif-tab').hide();
      }
  });

  $('.comment-link').click(function(e) {
    e.preventDefault();
    hashAnimation(this);
  });

  $('#preguntar').click(function(e) {
    hashAnimation(this);
  });

  $(function() {
      var saveComment = function(data) {

        // Convert pings to human readable format
        $(data.pings).each(function(index, id) {
          var user = usersArray.filter(function(user){return user.id == id})[0];
          data.content = data.content.replace('@' + id, '@' + user.fullname);
        });

        return data;
      }

      $('#comments-cont').comments({
        profilePictureURL: 'assets/usuarios/user-icon-01.png',
        currentUserId: 1,
        roundProfilePictures: true,
        textareaRows: 1,
        enableAttachments: false,
        enableHashtags: true,
        enablePinging: true,
        highlightColor: '#01ecc0',
        deleteButtonColor: 'red',
        //upvoteIconURL: '/img/upvote-icon.png',
        //replyIconURL: '/img/reply-icon.png',

        getUsers: function(success, error) {
          setTimeout(function() {
            success(usersArray);
          }, 500);
        },
        getComments: function(success, error) {
          setTimeout(function() {
            success(commentsArray);
          }, 500);
        },
        postComment: function(data, success, error) {
          setTimeout(function() {
            success(saveComment(data));
          }, 500);
        },
        putComment: function(data, success, error) {
          setTimeout(function() {
            success(saveComment(data));
          }, 500);
        },
        deleteComment: function(data, success, error) {
          setTimeout(function() {
            success();
          }, 500);
        },
        upvoteComment: function(data, success, error) {
          setTimeout(function() {
            success(data);
          }, 500);
        },
        uploadAttachments: function(dataArray, success, error) {
          setTimeout(function() {
            success(dataArray);
          }, 500);
        },
      });
    });
} 

/*---- Form Compra ------*/
if($('body').is('.form')) {
  $('.01').on('click', function(e){
    e.preventDefault();
    $('.login-cont').hide();
    $('.login-01').show();
  });

  $('.02').on('click', function(e){
    e.preventDefault();
    $('.login-cont').hide();
    $('.login-02').show();
  });

  $('.03').on('click', function(e){
    e.preventDefault();
    $('.login-cont').hide();
    $('.login-03').show();
  });
  $(document).ready(function(){    
  });

  var wizardMenu = function(that){
    if(!that.closest('li').hasClass('disable')){
      $('.wizard li').each(function(){
        $(this).removeClass('active');
      });
      that.closest('li').removeClass('disable');
      that.closest('li').addClass('active'); 
      $('.form-tab').hide();     
    }
  }

  $('#usuario-wz').on('click', function(e){
    e.preventDefault();
    wizardMenu($(this));
    if(!$(this).closest('li').hasClass('disable')){
      $('.form-tab-01').show();
    }
  });

  $('#envio-wz').on('click', function(e){
    e.preventDefault();
    wizardMenu($(this));
    if(!$(this).closest('li').hasClass('disable')){
      $('.form-tab-02').show();
    }
  });

  $('#pago-wz').on('click', function(e){
    e.preventDefault();
    wizardMenu($(this));
    if(!$(this).closest('li').hasClass('disable')){
      $('.form-tab-03').show();
    }
  });

  $('#confirmar-wz').on('click', function(e){
    e.preventDefault();
    wizardMenu($(this));
    if(!$(this).closest('li').hasClass('disable')){
       $('.form-tab-04').show();
    }
  });

  $('#userlogin-wz').on('click', function(e){
    e.preventDefault();
    $('#envio-wz').closest('li').removeClass('disable');
    $('#envio-wz').click();
    hashAnimation(this);
  }); 

  $('#userreg-wz').on('click', function(e){
    e.preventDefault();
    $('#envio-wz').closest('li').removeClass('disable');
    $('#envio-wz').click();
    hashAnimation(this);
  }); 

  $('#userlogged-wz').on('click', function(e){
    e.preventDefault();
    $('#envio-wz').closest('li').removeClass('disable');
    $('#envio-wz').click();
    hashAnimation(this);
  }); 

  $('#dataenvio-wz').on('click', function(e){
    e.preventDefault();
    $('#pago-wz').closest('li').removeClass('disable');
    $('#pago-wz').click();
    hashAnimation(this);
  }); 

  $('#datapago-wz').on('click', function(e){
    e.preventDefault();
    $('#confirmar-wz').closest('li').removeClass('disable');
    $('#confirmar-wz').click();
    hashAnimation(this);
  }); 

  $('.back-wz').each( function(){
      $(this).on('click', function(e){
        e.preventDefault();
        $('li.active').prev().find('a').click();
        hashAnimation(this);
      });
  });

  $('.form-tab input').on('click', function() {
    $(this).closest('.form-tab').find('.big-btn').removeClass('disable');
  });
}

 /*---- Header ------*/
$(function() {
  // Responsive top menu 
  $('.top-menu-icon a').on('click', function(e) {
    e.preventDefault();
    var x = document.getElementById("anchors");
    if (x.className === "anchors") {
      x.className += " responsive";
    } else {
      x.className = "anchors";
    }
  });
 
  //Responsive search box 
  $('.search-btn .responsive').on('click', function(e) {
    e.preventDefault();
    if($('.main-header input.responsive').css('display')=='none'){
      $('.main-header input.responsive').show();
      $('.main-header .search').addClass('search-resp');
    } else {
      $('.main-header input.responsive').hide();
      $('.main-header .search').removeClass('search-resp');
    }
  });

 //Cta Buttons 
  $('.login').on('click', function(e){
    e.preventDefault();
    $('.loggued').css('display','inline-block');
    $('.visitor').hide();
  });

  $('.profile-name').on('click', function(e){
    e.preventDefault();
      if ($('.profile-menu').css('display') == 'none' ){
        $('.profile-menu').css('display','block');
      } else {
        $('.profile-menu').css('display', 'none');
      }
  });

  $('.profile img').on('click', function(e){
    e.preventDefault();
      if ($('.profile-menu').css('display') == 'none' ){
        $('.profile-menu').css('display','block');
      } else {
        $('.profile-menu').css('display', 'none');
      }
  });

  $('.profile .profile-angle').on('click', function(e){
    e.preventDefault();
      if ($('.profile-menu').css('display') == 'none' ){
        $('.profile-menu').css('display','block');
      } else {
        $('.profile-menu').css('display', 'none');
      }
  });

  $('.pm-cerrar').on('click', function(e){
    e.preventDefault();
    $('.profile-menu').css('display', 'none');
  });

  //Buscadores  
  $('#q').keypress(function (e) {
    if (e.which == 13) {
      var search = $('#q').val();
      $('form#search-bar').attr('action','//www.ofelia.com.ar/buscar/' + search + '/i-listing');
      $('form#search-bar').submit();
    }
  });

  $('#qr').keypress(function (e) {
      if (e.which == 13) {
        var search = $('#qr').val();
        $('form#search-bar').attr('action','//www.ofelia.com.ar/buscar/' + search + '/i-listing');
        $('form#search-bar').submit();
      }
  });

  // Megamenu
  var megamenu = $('.megamenu');

  var loadMegamenu = function(megamenu, catCont) {
    megamenu.show();    
    megamenu.find('.cont').each( function(){
      $(this).hide();
      $(this).next('.popular-tags').hide();
    });
    megamenu.find(catCont).show();
    megamenu.find(catCont).next('.popular-tags').show();

    offset = 150;

    if($('body').is('.home')){
      offset = 150;
      if ($('header').hasClass('sticky')) {
        offset = 135;
      }
    }

    if (megamenu.height() + offset > $(window).height() ) {
      megamenu.css('height', $(window).height()  - offset + 'px');
      megamenu.addClass('allow-scroll');
    }
  };

  $('.mm-cerrar').on('click', function(e){
    e.preventDefault();
    megamenu.hide();
    megamenu.css('height', 'auto');
    megamenu.removeClass('allow-scroll');
  });

  $(document).mouseup(function (e) {
      if (!megamenu.is(e.target) // if the target of the click isn't the container...
          && megamenu.has(e.target).length === 0) // ... nor a descendant of the container
      {
          megamenu.hide();
          megamenu.css('height', 'auto');
          megamenu.removeClass('allow-scroll');
      }

      if (!$('.profile-menu').is(e.target) // if the target of the click isn't the container...
          && $('.profile-menu').has(e.target).length === 0) // ... nor a descendant of the container
      {
          $('.profile-menu').hide();
      }
  });

  // Main menu
  $('.main-nav #hogar a').on('click', function(e){
    e.preventDefault();
    loadMegamenu(megamenu,'.hogar-cont');
    return false; 
  });

  $('.main-nav #arte a').on('click', function(e){
    e.preventDefault();
   loadMegamenu(megamenu,'.arte-cont');
   return false; 
  });

  $('.main-nav #accesorios a').on('click', function(e){
    e.preventDefault();
    loadMegamenu(megamenu,'.accesorios-cont');
    return false; 
  });

  $('.main-nav #indumentaria a').on('click', function(e){
    e.preventDefault();
    loadMegamenu(megamenu,'.indumentaria-cont');
    return false; 
  });

  $('.main-nav #infantiles a').on('click', function(e){
    e.preventDefault();
    loadMegamenu(megamenu,'.infantiles-cont');
    return false; 
  });

  $('.main-nav #eventos a').on('click', function(e){
    e.preventDefault();
    loadMegamenu(megamenu,'.eventos-cont');
    return false; 
  });

  // Sticky header
  var previousScroll = 0;

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if (scroll > 1){  
        $('header').addClass("sticky");
        if (scroll > previousScroll){
            $('.main-nav').addClass('fadeout');
            megamenu.addClass('sticky-menu');
            $('header .backtotop-btn').hide();
         } else {
            $('.main-nav').removeClass('fadeout');
            megamenu.removeClass('sticky-menu');
            $('header .backtotop-btn').show();
         }
      }
      else{
        $('header').removeClass("sticky");
        $('header .backtotop-btn').hide();
      }
      previousScroll = scroll;
  });

  // Anchors
  $('.anchors a').click(function() {
      hashAnimation(this);
      $('.anchors a').removeClass('active');
      $(this).addClass('active');
  });

  $('.logo-ofelia a').click(function() {
    hashAnimation(this);
  });

  $('.backtotop-btn a').click(function(e) {
    e.preventDefault();
    hashAnimation(this);
  });

  $('.section-title a').click(function(e) {
    e.preventDefault();
    hashAnimation(this);
  });

  /*---- Thumbs ------*/
  // Share button
  $('.social-btn').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    if($this.hasClass('active')){
      $this.removeClass('active');
      $(this).closest('.img-hover').find('.social-share').hide();
    }else {
      $('.thumb-img .social-btn').each(function() {
        $(this).removeClass('active');
      });
      $this.addClass('active');
      $this.closest('.img-hover').find('.social-share').show();
    }
  });

  // Favourite button
  $('.like-btn').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      if($(this).hasClass('active')){
          $(this).removeClass('active');
      }else {
        $(this).addClass('active');
      }
    });
  });

  $( window ).resize(function() {
    calculateH();
  });
});

  //Hash Animation
  var hashAnimation = function(that){
    if (location.pathname.replace(/^\//,'') == that.pathname.replace(/^\//,'') && location.hostname == that.hostname) {
      var target = $(that.hash);
      target = target.length ? target : $('[name=' + that.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 90
        }, 1000);
        return false;
      }
    }
  };

  // Calculate auto height
  var calculateH = function() {
    var imgSM = $('.img-sm').css('width');
    var imgLG = $('.img-lg').css('width');
    var imgR = $('.img-r').css('width');
    
    $('.img-sm').css('height', imgSM);
    $('.img-lg').css('height', imgLG);
    $('.img-r').css('height', imgR);
  }

  calculateH();

  if ($(window).width() <= 991){  
    $('.filter-btn').click();
    $('.filters').addClass('absolute');
  } else {
    $('.filters').removeClass('absolute');
  }

