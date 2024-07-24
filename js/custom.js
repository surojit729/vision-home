+ function ($) {
    $(document).ready(function () {
        // Shrink_header
        $(window).scroll(function () {
            if ($(document).scrollTop() > $(".hdr_top_outer, .hm_nav_inr").outerHeight()) {
                $('.header_outer, .hm_hdr_outer').addClass('shrink');
            } else {
                $('.header_outer, .hm_hdr_outer').removeClass('shrink');
            }
        });


        // Responsive_navigation
        $(".menu_btn").click(function () {
            $("body").toggleClass("addPnnl");
            $(".overlay").click(function () {
                $("body").removeClass("addPnnl");
            })
        });
        // Sub_menu
        $(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='fas fa-chevron-down'></i></div>");
        $(".sub_menu_opener").click(function () {
            $('.mega_menu_outer').slideUp();
            $("body").removeClass("sub_menu_active");
            if ($(this).parent().find(".mega_menu_outer").css('display') == 'none') {
                $(this).parent().find(".mega_menu_outer").slideDown();
                $("body").addClass("sub_menu_active");
            } else {
                $(this).parent().find(".mega_menu_outer").slideUp();
                $("body").removeClass("sub_menu_active");
            }
        });

        $(".sub_menu_opener").click(function () {
            if ($(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
                $(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
            } else {
                $('.hdr_menu ul > li').removeClass("sub_menu_open");
                $(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
            }
        });

        // Scroll_top_top
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery(".scrollup").addClass("active");
            } else {
                jQuery(".scrollup").removeClass("active");
            }
        });

        jQuery(".scrollup").on("click", function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // scroll_to_target_div
        $(".cntct_btn a, .bnr_btn a, .hdr_btn a, .get_quote_btn a").click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".bnr_form_outer").offset().top - 200
            }, 1000);
        });
        // banner_slider
        if (jQuery.fn.owlCarousel) {
            $('.bnr_slider.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                dots: true,
                nav: false,
                mouseDrag: false,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 500,
                // animateOut: 'fadeIn',
                //animateIn: 'fadeInDown',

            });
        }
        /*banner_slider*/
        // $('.bnr_slider').slick({
        //     infinite: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     speed: 2000,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //     autoplay: true,
        //     arrows: false,
        //     dots: true,
        //     fade: true,
        // }).slickAnimation();
        /*review_slider*/
        $('.rvw_slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 2000,
            autoplay: true,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
            ]
        });
        // service_gallery_slider
        $('.srvc_slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.srvc_thumb_slider'
        });
        $('.srvc_thumb_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.srvc_slider',
            dots: false,
            arrows: false,
            autoplay: true,
            focusOnSelect: true
        });

        $('.srvc_glry_slider').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.srvc_glry_thumb_slider'
        });
        $('.srvc_glry_thumb_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.srvc_glry_slider',
            dots: false,
            arrows: false,
            autoplay: true,
            focusOnSelect: true
        });
        // project_single_slider
        $('.prjct_single_sider').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.prjct_thumb_sider'
        });
        $('.prjct_thumb_sider').slick({
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.prjct_single_sider',
            centerMode: false,
            focusOnSelect: true,
            arrows: false,
        });
        // review_counter
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
        // AOS
        $(function () {
            AOS.init({
                disable: function () {
                    var maxWidth = 1768;
                    return window.innerWidth < maxWidth;
                }
            });
        });
    });


    // modal
    // $("#start_prjct_modal").modal({
    // })


    //filter
    jQuery('.filters ul li').click(function () {
        jQuery('.filters ul li').removeClass('activefilter');
        jQuery(this).addClass('activefilter');

        var data = jQuery(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = jQuery(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })

}(jQuery);