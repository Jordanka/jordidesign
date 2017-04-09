$(function() {
    var vh = $('.slide-1').height();
    var offsetTop = $('.phone').offset().top + 58 + vh*0.03;

    var onScrollHandler = function() {
        if ($(window).scrollTop() > offsetTop){
            var designTop = offsetTop - $(document).scrollTop();
        } else {
            designTop = 0;
        }

        if ($(window).scrollTop() > (offsetTop + vh) ) {
            var designTop2 = offsetTop - $(document).scrollTop()  +  vh;
        } else {
            designTop2 = 0;
        }

        if ($(window).scrollTop() > (offsetTop + 2*vh) ) {
            var designTop3 = offsetTop - $(document).scrollTop()  +  2*vh;
        } else {
            designTop3 = 0;
        }

        if ($(window).scrollTop() > (offsetTop + 3*vh) ) {
            var designTop4 = offsetTop - $(document).scrollTop()  +  3*vh;
        } else {
            designTop4 = 0;
        }

        if ($(window).scrollTop() > (offsetTop + 4*vh) ) {
            var designTop5 = offsetTop - $(document).scrollTop()  +  4*vh;
        } else {
            designTop5 = 0;
        }

        $(".design1").css({
            top: designTop + 'px',
        });

        $(".design2").css({
            top: designTop2 + 'px',
        });

        $(".design3").css({
            top: designTop3 + 'px',
        });

        $(".design4").css({
            top: designTop4 + 'px',
        });

        $(".design5").css({
            top: designTop5 + 'px',
        });

        if ($(window).scrollTop() > vh && $(window).scrollTop() < vh*4)  {
            $('.iso-logo').attr('src','assets/images/iso-logo-black.png');
        } else {
             $('.iso-logo').attr('src','assets/images/iso-logo.png');  
        }
    };

    $(window).on("scroll", onScrollHandler);

    retinajs();
});
