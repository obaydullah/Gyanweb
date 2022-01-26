$(function(){
    //banner-slider
    $('.main-ban').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        pauseOnHover:false,
        infinite:true,
      });

    //about-slider-3d
    var rev = $('.main-about-slider');
    rev.on('init', function(event, slick, currentSlide) {
      var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');  
      prev2.addClass('slick-sprev2');
      next2.addClass('slick-snext2');  
      cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      console.log('beforeChange');
      var
        cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      slick.$prev.prev().removeClass('slick-sprev2');
      slick.$next.next().removeClass('slick-snext2');
      next = cur.next(),  
      prev = cur.prev();
      //prev2.prev().prev();
      //next2.next().next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      prev.prev().addClass('slick-sprev2');
      next.next().addClass('slick-snext2');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
    });
    
    rev.slick({
      speed: 2000,
      arrows: false,
      dots: true,
      autoplay:true,
      focusOnSelect: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover:false,
      infinite:true,
    });

      //counterup

      $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //card-slider
    $('.main-card-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnhover:true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow:'.course-l',
      nextArrow:'.course-r',
      infinite:true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    //event-slider
    $('.event-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      vertical:true,
      infinite:true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });


   //calander


    $('body').on('DOMSubtreeModified', '.row',function(){
      $('.green').parents('.col').css({'background': '#3D7E34', 'color': 'white'});
    
    });
    $('body').on('DOMSubtreeModified', '.row',function(){
      $('.red').parents('.col').css({'background': '#FF3232', 'color': 'white'});
    
    });
    $(function(){
      $('.red').parents('.col').css({'background': '#FF3232', 'color': 'white'});
      $('.green').parents('.col').css({'background': '#3D7E34', 'color': 'white'});
    });
    var current_yyyymm_ = moment().format("YYYYMM");

      $("#pb-calendar").pb_calendar({
        schedule_list : function(callback_, yyyymm_){
          var temp_schedule_list_ = {};

          temp_schedule_list_[current_yyyymm_+"03"] = [
            {'ID' : 1, style : "red"}
          ];

          temp_schedule_list_[current_yyyymm_+"10"] = [
            {'ID' : 2, style : "red"},
          ];

          temp_schedule_list_[current_yyyymm_+"20"] = [
            {'ID' : 6, style : "green"},
          ];
          callback_(temp_schedule_list_);
        },
        schedule_dot_item_render : function(dot_item_el_, schedule_data_){
          dot_item_el_.addClass(schedule_data_['style'], true);
          return dot_item_el_;
        }
      });


      //testimonial-slider
      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'.t-r',
        nextArrow:'.t-l',
        autoplay:true,
        fade: true,
        speed:1500,
        asNavFor: '.testimonial-cont-slider'
      });
      $('.testimonial-cont-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        asNavFor: '.testimonial-slider',
        arrows: true,
        prevArrow:'.t-r',
        nextArrow:'.t-l',
        fade:true,
        speed:1500,
      });
        
      //teachers-slider
      $('.main-teacher-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });


      //footer-slider
      $('.main-footer-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        infinite:true,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
  
      //back-to-top

      $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000);
      });

    //sticky menu
    $(window).scroll(function(){
    var btt = $(this).scrollTop();
    if(btt>300){
      $('.navbar').addClass('sticky-menu');
    }
    else{
      $('.navbar').removeClass('sticky-menu');
    }
    if(btt>200){
      $('.back-to-top').fadeIn(300);
    }
    else{
      $('.back-to-top').fadeOut(300);
    }
  });


  //preloader
  $(window).on('load',function(){
    $('.preloader').delay(500).fadeOut(500);
  });

  //venobox

  $(document).ready(function(){
    $('.venobox').venobox(); 
  });

  //animation scroll js
      var html_body = $('html, body');
      $('nav a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 80
                  }, 1500,);
                  return false;
              }
          }
      });

      //scroll-spy
      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset: 0,
      })

});

