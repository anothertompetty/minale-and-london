$(document).on('ready', function() {

  var contactButton = $('.button--contact');
  var contactForm = $('.contact-form');
  var contactContent = $('.contact-form__content');
  var contactClose = $('.contact-form__close');

  contactButton.on('click', function() {
    contactForm.fadeToggle(125, function() {
      contactContent.fadeIn();
      contactContent.addClass('fadeInUp');
    });
  });

  contactClose.on('click', function() {
    contactForm.fadeToggle(125)
  });

  var hero = $('.hero');
  var main = $('.main');
  var range = hero.outerHeight();

  $(window).on('scroll', function () {
    
      var scrollTop = main.scrollTop();
      var offset = hero.offset().top;
      var height = hero.outerHeight();
      offset = offset + height;
      var calc = 1 - (scrollTop - offset + range * 2) / range;
    
      hero.css({ 'opacity': calc });
      console.log(calc);
    
      if (calc > '1') {
      hero.css({'opacity': 1});
    } else if (calc < '0') {
      hero.css({'opacity': 0});
    }
    
  });

  $('.main').waypoint(function() {
    
    var header = $('.header');

    header.toggle();
    header.toggleClass('bounceInDown');

  })

});