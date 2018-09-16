	
   $('#ov-box a').fancybox();

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
		});s
	});




/*지도  (회사소개 )*/
        function starbucksPosition() {
            myMap = new naver.maps.Map(document.getElementById('map-box'), {
                center: new naver.maps.LatLng(37.4851459, 127.11931619999996),
                zoom: 12
            });
            new naver.maps.Marker({
                position: new naver.maps.LatLng(37.4851459, 127.11931619999996),
                map: myMap
            });
        }
        window.onload = starbucksPosition;
        
        
