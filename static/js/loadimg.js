// function loadimg(){
// 	var _img = document.getElementById('photo');
// 	var newImg = new Image;
// 	newImg.onload = function() {
//     	_img.src = this.src;
// 	}
// 	newImg.src = "static/xiang.jpg";
// }
var image = document.images[0];
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "/static/xiang.jpg";