$(function() {

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            //loop:true,
            margin:10,
            nav:true,
            dots: false,
            navText:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });


        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });


    });

    $('.policy-popup .btn').on("click", function () {
        event.preventDefault();

        let magnificPopup = $.magnificPopup.instance; // save instance in magnificPopup variable


        magnificPopup.close(); // Close popup that is currently opened
    });

});
