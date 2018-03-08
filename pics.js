$(document).ready(function() {
    var timeToDisplay = 6000;

    var slideshow = $('#imgBanner');
    var name = $('.name');
    var color_option = $('.color-option');
    var urls = [
       'nature2.png',
       'nature_dark_1.png',
    ];
    var colors = [
      '#A40406',
      '#8E490D'
    ]

    var index = 0;
    var transition = function() {
        var url = urls[index];

        slideshow.css('background-image', 'url(' + url + ')');
        name.css('z-index', 40)
        name.css('color', colors[index]);
        color_option.css('color', colors[index]);
        // console.log("after ")

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
