// Change Images
var widthBr = $(window).width();
if (widthBr < 768) {
    $('img').each(function() {
        $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
    });
}

window.onload = function() {
    // Fade title main
    setTimeout(function() {
        $('.title_main').css("opacity", "1");
    }, 800);

    // Reload brower on resize
    if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {} else {
        $(function() {
            var timer = false;
            $(window).resize(function() {
                if (timer !== false) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    location.reload();
                }, 200);
            });
        });
    }

    // Focus fade-in
    var heightBr = $(window).height();
    $(window).scroll(function() {
        var elemPos2 = $('#local_02').offset().top;
        if ($(this).scrollTop() >= (elemPos2 - heightBr + 500)) {
            $('#local_02 .fading-focus_delay').addClass('active');
        } else {
            $('#local_02 .fading-focus_delay').removeClass('active');
        }

        var imgAvatarPos = $('.imgAvatar').offset().top;
        if ($(this).scrollTop() >= (imgAvatarPos - heightBr + 300)) {
            $('.imgAvatar .fading-focus_delay').addClass('active');
        } else {
            $('.imgAvatar .fading-focus_delay').removeClass('active');
        }

        var local03_Pos = $('#local_03').offset().top;
        // console.log(local03_Pos);
        if ($(this).scrollTop() >= local03_Pos - 400) {
            $('#local_03 .fading-focus_delay').addClass('active');
        } else {
            $('#local_03 .fading-focus_delay').removeClass('active');
        }
    }).trigger("scroll");
};
