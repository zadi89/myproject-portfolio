   var swiper = new Swiper('.swiper-container', {

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


/* map 지도 */

    function starbucksPosition(){
      myMap=new naver.maps.Map(document.getElementById('mapA'),{
        center:new naver.maps.LatLng(37.4851459, 127.11931619999996),
        zoom:12
      });
      new naver.maps.Marker({
        position:new naver.maps.LatLng(37.4851459,127.11931619999996),
        map:myMap
      });
    }
    window.onload=starbucksPosition;