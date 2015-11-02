$(document).on('ready', function() {

  $('.menu__button').on('click', function() {
    $('.menu').fadeToggle(125);
    $('.menu__button__icon').toggle();
    $('.menu__button__icon--close').toggle();
  });

  var target = $('.hero__img');
  var targetHeight = target.height();
  var containerHeight = $('body').outerHeight();

  var maxScroll = containerHeight - targetHeight;
  var scrollRange = maxScroll/(target.length-1);

  $(document).scroll(function(e){

    var scrollY = $(window).scrollTop();
    var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
    var divIndex = Math.floor(scrollY/scrollRange);

    target.has(':lt(' + divIndex + ')').css('opacity', 0);
    target.eq(divIndex).css('opacity', scrollPercent);
    target.has(':gt(' + divIndex + ')').css('opacity', 1);

  });

  $('.main').waypoint(function() {
    
    var header = $('.header');

    header.toggle();
    header.toggleClass('bounceInDown');

  })

});