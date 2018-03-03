// var picPaths = ['nature2.png','nature_dark_1.png'];
//
// var curPic = -1;
// //preload the images for smooth animation
// var imgO = new Array();
// for(i=0; i < picPaths.length; i++) {
//     imgO[i] = new Image();
//     imgO[i].src = picPaths[i];
// }
//
// function swapImage() {
//     curPic = (++curPic > picPaths.length-1)? 0 : curPic;
//     imgCont.src = imgO[curPic].src;
//     setTimeout(swapImage,6000);
// }
//
// window.onload=function() {
//     imgCont = document.getElementById('imgBanner');
//     swapImage();
// }

$(document).ready(function() {
    var timeToDisplay = 6000;

    var slideshow = $('#imgBanner');
    var urls = [
       'nature2.png',
       'nature_dark_1.png',
    ];

    var index = 0;
    var transition = function() {
        var url = urls[index];

        slideshow.css('background-image', 'url(' + url + ')');

        index = index + 1;
        if (index > urls.length - 1) {
            index = 0;
        }
    };

    var run = function() {
        transition();
        slideshow.fadeIn('slow', function() {
            setTimeout(function() {
                slideshow.fadeOut('slow', run);
            }, timeToDisplay);
        });
    }

    run();
});
