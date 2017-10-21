function changeViewport() {
	// UI-width ：WebApp布局宽度
	// device-width ：屏幕分辨率宽度
	// target-densitydpi = UI-width / device-width * window.devicePixelRatio * 160;
	var uiWidth = 750,
		deviceWidth = (window.orientation == 90 || window.orientation == -90) ? window.screen.height : window.screen.width;
	devicePixelRatio = window.devicePixelRatio || 1;

	var myScale = deviceWidth / uiWidth;
	var targetDensitydpi = uiWidth / deviceWidth * devicePixelRatio * 160;
	//alert(uiWidth+","+deviceWidth+","+devicePixelRatio+","+myScale+","+targetDensitydpi);
	var viewportContent = "initial-scale=" + myScale + ", maximum-scale=" + myScale + ", minimum-scale=" + myScale + ',target-densitydpi=' + targetDensitydpi + ', width=device-width, user-scalable=no';
	//var viewportContent = "initial-scale=" + myScale + ", maximum-scale=" + myScale + ", minimum-scale=" + myScale + ', width=device-width, user-scalable=no';	
	document.querySelector('meta[name=viewport]').attributes['content'].value = viewportContent;
}

window.addEventListener('orientationchange', function () {
	// Announce the new orientation number 
	changeViewport()
}, false)
changeViewport()
