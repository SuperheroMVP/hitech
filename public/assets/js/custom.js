

$(document).ready(function(){

    $(window).on("load", function () {
      $(".loader").fadeOut("slow");
      $("#preloder").delay(200).fadeOut("slow");
    });
    $('.menu-trigger').click(function(){
        $('.menu-trigger').toggleClass('active');
        $('.header-area .nav').slideToggle(300);
    });

    $('.submenu').click(function(){
       
        $('.submenu ul').removeClass('active');
        $(this).find("ul").toggleClass('active');
    });
    // setInterval(function(){
    //     $('#preloader').css("visibility", "visble");;
    // },2000); });


    // function _0xaa2dx7() {
    //     var _0xaa2dx6 = _0xaa2dx1(window)['width']();
    //     _0xaa2dx1('.submenu')['on']('click', function() {
    //         if (_0xaa2dx6 < 992) {
    //             _0xaa2dx1('.submenu ul')['removeClass']('active');
    //             _0xaa2dx1(this)['find']('ul')['toggleClass']('active')
    //         }
    //     })
    // }
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter:selector
        });
        return  false;
     });
      $('.slide_team').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows:true,
          autoplay:true,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
      });

      $(window).scroll(function(event) {
        console.log('Chay den vi tri:');
        console.log($('html,body').scrollTop());
        var vitri=$('html,body').scrollTop();

        if(vitri>=30){
         $('.header-area').addClass('header-sticky'); 
       }  

       if(vitri<30){
         $('.header-area').removeClass('header-sticky'); 
       } 
        if(vitri>=850){
         $('.arrow-up').addClass('visible-arrowup'); 
       }  

       if(vitri<850){
         $('.arrow-up').removeClass('visible-arrowup'); 
       } 
     });

    $('.arrow-up').on('click', function(event) {
     event.preventDefault();
    // $('html,body').animate({scrollTop: $('header').offset().top}, 100);

      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });


});

(function(_0xaa2dx1) {
    // var _0xaa2dx2 = window['location']['hostname'];
    // var _0xaa2dx3 = 'demo.tempload.com';
    // if (_0xaa2dx2 != _0xaa2dx3) {
    //     _0xaa2dx1['ajax']({
    //         type: 'POST',
    //         url: 'http://tempload.com/crackalert.php',
    //         data: {
    //             '\x64\x6F\x6D\x61\x69\x6E': _0xaa2dx2
    //         },
    //         success: function(_0xaa2dx4) {}
    //     });
    //     alert('Why are you stealing? Help me do better things by buying!');
    //     window['location'] = 'https://themeforest.net/user/tempload'
    // };

    'use strict';
    // _0xaa2dx8();
    // _0xaa2dx7();
    // window['sr'] = new scrollReveal();
    // if (_0xaa2dx1('.menu-trigger')['length']) {
    //     _0xaa2dx1('.menu-trigger')['on']('click', function() {
    //         _0xaa2dx1(this)['toggleClass']('active');
    //         _0xaa2dx1('.header-area .nav')['slideToggle'](200)
    //     })
    // };
    // _0xaa2dx1('a[href*=\#]:not([href=\#])')['on']('click', function() {
    //     if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') && location['hostname'] == this['hostname']) {
    //         var _0xaa2dx5 = _0xaa2dx1(this['hash']);
    //         _0xaa2dx5 = _0xaa2dx5['length'] ? _0xaa2dx5 : _0xaa2dx1('[name=' + this['hash']['slice'](1) + ']');
    //         if (_0xaa2dx5['length']) {
    //             var _0xaa2dx6 = _0xaa2dx1(window)['width']();
    //             if (_0xaa2dx6 < 991) {
    //                 _0xaa2dx1('.menu-trigger')['removeClass']('active');
    //                 _0xaa2dx1('.header-area .nav')['slideUp'](200)
    //             };
    //             _0xaa2dx1('html,body')['animate']({
    //                 scrollTop: (_0xaa2dx5['offset']()['top']) - 30
    //             }, 700);
    //             return false
    //         }
    //     }
    // });
    if (_0xaa2dx1('.count-item')['length']) {
        _0xaa2dx1('.count-item strong')['counterUp']({
            delay: 10,
            time: 1000
        })
    };
    if (_0xaa2dx1('.blog-post-thumb')['length']) {
        _0xaa2dx1('.blog-post-thumb .img')['imgfix']()
    };
    if (_0xaa2dx1('.about-image')['length']) {
        _0xaa2dx1('.about-image')['imgfix']({
            scale: 1.1
        })
    };
    if (_0xaa2dx1('.sidebar .box')['length']) {
        _0xaa2dx1('.sidebar .box')['imgfix']()
    };
    if (_0xaa2dx1('.home-img')['length']) {
        _0xaa2dx1('.home-img')['imgfix']({
            scale: 1.1
        })
    };
    if (_0xaa2dx1('.page-gallery')['length'] && _0xaa2dx1('.page-gallery-wrapper')['length']) {
        _0xaa2dx1('.page-gallery')['imgfix']({
            scale: 1.1
        });
        _0xaa2dx1('.page-gallery')['magnificPopup']({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        })
    };
    // _0xaa2dx1(window)['on']('load', function() {
    //     if (_0xaa2dx1('.cover')['length']) {
    //         _0xaa2dx1('.cover')['parallax']({
    //             imageSrc: _0xaa2dx1('.cover')['data']('image'),
    //             zIndex: '1'
    //         })
    //     };
    //     _0xaa2dx1('#preloader')['animate']({
    //         '\x6F\x70\x61\x63\x69\x74\x79': '0'
    //     }, 600, function() {
    //         setTimeout(function() {
    //             if (_0xaa2dx1('#parallax-text')['length']) {
    //                 _0xaa2dx1('#parallax-text')['parallax']({
    //                     imageSrc: 'assets/images/photos/parallax.jpg',
    //                     zIndex: '1'
    //                 })
    //             };
    //             if (_0xaa2dx1('#counter')['length']) {
    //                 _0xaa2dx1('#counter')['parallax']({
    //                     imageSrc: 'assets/images/photos/parallax.jpg',
    //                     zIndex: '1'
    //                 })
    //             };
    //             _0xaa2dx1('#preloader')['css']('visibility', 'hidden')['fadeOut']()
    //         }, 300)
    //     })
    // });
    // _0xaa2dx1(window)['on']('scroll', function() {
    //     _0xaa2dx8()
    // });
    // _0xaa2dx1(window)['on']('resize', function() {
    //     _0xaa2dx7()
    // });

    // function _0xaa2dx7() {
    //     var _0xaa2dx6 = _0xaa2dx1(window)['width']();
    //     _0xaa2dx1('.submenu')['on']('click', function() {
    //         if (_0xaa2dx6 < 992) {
    //             _0xaa2dx1('.submenu ul')['removeClass']('active');
    //             _0xaa2dx1(this)['find']('ul')['toggleClass']('active')
    //         }
    //     })
    // }

    // function _0xaa2dx8() {
    //     var _0xaa2dx6 = _0xaa2dx1(window)['width']();
    //     if (_0xaa2dx6 > 991) {
    //         var _0xaa2dx9 = _0xaa2dx1(window)['scrollTop']();
    //         if (_0xaa2dx9 >= 30) {
    //             _0xaa2dx1('.header-area')['addClass']('header-sticky')
    //         } else {
    //             _0xaa2dx1('.header-area')['removeClass']('header-sticky')
    //         }
    //     }
    // }
})(window['jQuery']);