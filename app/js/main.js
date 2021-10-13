$(function () {
  
  $('.top-slider__inner').slick({
    
  });

   $('.brands__list').slick({
     infinite: true,
     dots: false,
     arrows: false,
     slidesToShow: 6,
     slidesToScroll: 1
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);
})