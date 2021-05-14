// Slider configuration
var config = {
    speed: 3000,
    auto: true, // true or false
    arrows: true, // true or false
    nav: true, // true or false
    navStyle: 'default' // square,rectangle, default
  };
  
  // Slider core
  var slides = $('.slide');
  var totalSlides = slides.length;
  var currentIndex = 0;
  
  function setSlides() {
    var currentSlide = slides.eq(currentIndex);
    slides.hide();
    currentSlide.fadeIn(1500);
  };
  setSlides();
  
  // autoplay
  if (config.auto) {
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > totalSlides - 1) {
        currentIndex = 0;
      }
      setSlides();
      navigation();
    }, config.speed);
  };
  
  // navigation arrows
  if (config.arrows) {
    $('.arrow').addClass('active');
    $('.prev').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      }
      navigation();
      setSlides();
    });
    $('.next').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > totalSlides - 1) {
        currentIndex = 0;
      }
      navigation();
      setSlides();
    });
  };
  
  // navigation
  if (config.nav) {
      for (i = 0; i < slides.length; i+=1) {
        $('<li/>').attr( {'class': 'holder','id': i}).appendTo('.slide-nav');
      };
    $('.holder').first().addClass('item-active');
    switch(config.navStyle) { // navigation style
      case 'square':
          $('.holder').addClass('square');
          break;
      case 'rectangle':
          $('.holder').addClass('rectangle');
          break;
      default:
          $('.holder').addClass('dot');
    };
    function navigation() {
      $('.holder').removeClass('item-active');
      $('.holder').eq(currentIndex).addClass('item-active');
    };
      $('.holder').click(function() {
        clearInterval(autoSlide);
        var navNumb =  $(this).attr('id');
        currentIndex = navNumb;
        navigation();
        setSlides();
    });
  };
  