$('document').ready(function () {
  var trigger = $('#hamburger');
  var navMenu = $('#navMenu');
  var persistentNav = $('#persistent-nav');
  var bodyclick= $('#mainContent');
      isClosed = false;

  trigger.click(function () {
    burgerTime();
  });

  bodyclick.click(function () {
    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      navMenu.removeClass('nav-open');
      navMenu.addClass('nav-closed');
      persistentNav.removeClass('nav-open');
      persistentNav.addClass('nav-closed');
      isClosed = false;
    }
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      navMenu.removeClass('nav-open');
      navMenu.addClass('nav-closed');
      persistentNav.removeClass('nav-open');
      persistentNav.addClass('nav-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      navMenu.removeClass('nav-closed');
      navMenu.addClass('nav-open');
      persistentNav.removeClass('nav-closed');
      persistentNav.addClass('nav-open');
      isClosed = true;
    }
  }

});
