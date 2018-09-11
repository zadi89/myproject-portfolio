   let swiper = new Swiper('.swiper-container', {

      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
     pagination: {
        el: '.swiper-pagination',
      },
 
      navigation: {
        prevEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });





  AOS.init();






/*INDEX 스크롤  */

    function fnMove(seq){   
        let offset = $("#scroll-con0" + seq).offset();
        
        
        $('html, body').animate({scrollTop : offset.top}, 1000);
    }  


/*fancybox */
  $('#ov-box a').fancybox();




/* 스크룰 맨위로 올리기*/
//
//$(document).ready(function($) {
//
//
//            $(".go_top").click(function(event){
//                    $( 'html, body' ).stop().animate( { scrollTop : 0 },500 );
//            });
//
// });


/* 특정부분 안보이기*/
$(window).scroll(function() {

    if ($(this).scrollTop()>1500)
     {
         $('.go_top').fadeIn(1500,function(){

        });
     }
    else
     {
        $('.go_top').fadeOut();

     }
 });





/* map 지도  회사소개*/  
//        function starbucksPosition() {
//            myMap = new naver.maps.Map(document.getElementById('map-box'), {
//                center: new naver.maps.LatLng(37.4851459, 127.11931619999996),
//                zoom: 12
//            });
//            new naver.maps.Marker({
//                position: new naver.maps.LatLng(37.4851459, 127.11931619999996),
//                map: myMap
//            });
//        }
//        window.onload = starbucksPosition;
//        
//        
//        
//        $('#ov-box a').fancybox();