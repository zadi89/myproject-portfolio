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




	/*모바일 버전*/

function openNav() {
    document.getElementById("mysidenav-mobile").style.width = "230px";
}

function closeNav() {
    document.getElementById("mysidenav-mobile").style.width = "0";
}
	
	
		$(document).ready(function(){
		$("#mysidenav-mobile ul.side-menu-sub").hide();
		$("#mysidenav-mobile ul.side-munu li").click(function(){
			$("ul",this).slideToggle("fast");
		});
	});







