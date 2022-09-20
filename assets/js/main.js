/**
 * Script custom for theme
 *
 * TABLE OF CONTENT
 *
 */

 (function($) {
    'use strict';

    $(document).ready(function() { 
        thim_startertheme.ready();
    });

    $(window).load(function() {
        thim_startertheme.load();
    });

    var thim_startertheme = {

        ready: function() {
            this.header_menu_mobile();
        },

        load: function() { 
            console.log(window.devicePixelRatio);
        },

        header_menu_mobile: function() {
            let $main_menu = $('#primaryMenu');

            $(document).on('click', '.menu-mobile-effect', function(e) {
                e.stopPropagation();
                $('.responsive #wrapper-container').
                toggleClass('mobile-menu-open');
            });

            $(document).on('click', '.mobile-menu-open', function() { console.log('hello');
                $('.responsive #wrapper-container.mobile-menu-open').
                removeClass('mobile-menu-open');
            });

            $('.responsive .mobile-menu-container .navbar-nav>li.menu-item-has-children >a');
            $('.mobile-menu-container .widget_nav_menu .menu-useful-links-container .menu>li.menu-item-has-children >a');

            $('.responsive .mobile-menu-container .navbar-nav>li.menu-item-has-children .icon-toggle, .mobile-menu-container .widget_nav_menu .menu-useful-links-container .menu>li.menu-item-has-children .icon-toggle').
            on('click', function() {
                if ($(this).next('ul.sub-menu').is(':hidden')) {
                    $(this).next('ul.sub-menu').slideDown(200, 'linear');
                    $(this).html('<i class="fa fa-angle-up"></i>');
                } else {
                    $(this).next('ul.sub-menu').slideUp(200, 'linear');
                    $(this).html('<i class="fa fa-angle-down"></i>');
                }
            });

            $('.mobile-menu-container').on('click', function(e) {
                e.stopPropagation();
            })
        },
         
        
    };

})(jQuery);