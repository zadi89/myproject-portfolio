	
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
