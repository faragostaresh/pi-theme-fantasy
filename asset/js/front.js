(function($) {
  /* New stroy for all category */
  $('#block-7').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-7 .news-item-block-horizontal img').addClass('animated flipInX');
      $('#block-7 .news-item-block-horizontal .caption').addClass('animated flipInY');
    }
  });

  /* New stroy by category */
  $('#block-40').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-40 .news-item-block-vertical .media img').addClass('animated zoomInRight');
      $('#block-40 .news-item-block-vertical .media-body').addClass('animated zoomInLeft');
      $('#block-40 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('#block-41').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-41 .news-item-block-vertical .media img').addClass('animated zoomInRight');
      $('#block-41 .news-item-block-vertical .media-body').addClass('animated zoomInLeft');
      $('#block-41 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('#block-42').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-42 .news-item-block-vertical .media img').addClass('animated zoomInRight');
      $('#block-42 .news-item-block-vertical .media-body').addClass('animated zoomInLeft');
      $('#block-42 .panel-title').addClass('animated bounceInLeft');
    }
  });

  /* Side new */
  $('#block-43').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-43 .news-item-block-vertical .media img').addClass('animated zoomInRight');
      $('#block-43 .news-item-block-vertical .media-body').addClass('animated zoomInLeft');
      $('#block-43 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('#block-44').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-44 .news-item-block-vertical .media img').addClass('animated zoomInRight');
      $('#block-44 .news-item-block-vertical .media-body').addClass('animated zoomInLeft');
      $('#block-44 .panel-title').addClass('animated bounceInLeft');
    }
  });

  /* Side spotlight */
  $('#block-10').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-10 .news-spotlight-block img').addClass('animated zoomInRight');
      $('#block-10 .news-spotlight-block a').addClass('animated zoomInRight');
      $('#block-10 .news-spotlight-block h3').addClass('animated zoomInLeft');
      $('#block-10 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('#block-45').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-45 .news-spotlight-block img').addClass('animated zoomInRight');
      $('#block-45 .news-spotlight-block a').addClass('animated zoomInRight');
      $('#block-45 .news-spotlight-block h3').addClass('animated zoomInLeft');
      $('#block-45 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('#block-11').bind('inview', function(event, visible) {
    if (visible) {
      $('#block-11 .news-topic-block img').addClass('animated flipInX');
      $('#block-11 .panel-title').addClass('animated bounceInLeft');
    }
  });

  $('.pi-header').bind('inview', function(event, visible) {
    if (visible) {
      $('.navbar-nav').addClass('animated bounceInLeft');
      $('.pi-header-search').addClass('animated bounceInLeft');
      $('.pi-header-logo').addClass('animated bounceInRight');
      $('.pi-header-title').addClass('animated bounceInRight');
      $('.pi-social').addClass('animated bounceInRight');
    }
  });

  $(document).ready(function ($) {
    $('.news-item-block .owl-carousel').owlCarousel({
      //loop:true,
      //lazyLoad:true,
      margin: 3,
      nav: true,
      rtl: true,
      autoplay: true,
      dots: false,
      autoplayTimeout: 12000,
      autoplayHoverPause: true,
      navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
      responsive: {
        0: {items: 2},
        600: {items: 3},
        1000: {items: 3}
      }
    })
  });

  $(document).ready(function ($) {
    $('.news-topic-block .owl-carousel').owlCarousel({
      //loop:true,
      //lazyLoad:true,
      margin: 3,
      nav: true,
      rtl: true,
      autoplay: true,
      dots: false,
      autoplayTimeout: 12000,
      autoplayHoverPause: true,
      navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
      responsive: {
        0: {items: 2},
        600: {items: 4},
        1000: {items: 6}
      }
    })
  });

/* From : http://alijafarian.com/jquery-image-hover-captions/ */
$(document).ready(function () {
    $('.hover-captions').hover(
        function () {
            $(this).find('.hover-caption').slideDown(250);
        },
        function () {
            $(this).find('.hover-caption').slideUp(250);
        }
    );
});

})(jQuery)