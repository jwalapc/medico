if ($(".text-slider").length == 1) {
              
    var typed_strings = 
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: ['<span>For you </span>', '<span>For your loved ones</span>'],
        smartBackspace: true,
        typeSpeed: 30,
        backSpeed: 25,
        backDelay: 1000,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
    });
}
