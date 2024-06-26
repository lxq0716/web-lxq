$(function(){
	doTab("#Tab1");
});
function doTab(tab){
	var u1 = tab + " .tabTitle>li";
	var div = tab +" .tabDiv";
	$(u1).mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var indexNO = $(this).index();
		$(div).eq(indexNO).stop().fadeIn(300).siblings().stop().fadeOut(300);
		
	});
}