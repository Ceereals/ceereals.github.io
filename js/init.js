(function ($) {
    $(function () {
        var $animation_elements = $('.scale-transition');
        function onOpen(){setTimeout($('.tap-target').tapTarget('close'),3000)}
        function check_if_in_view() {
            console.log('funge');
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.removeClass('scale-out');
                    $element.addClass('scale-in');
                } else {
                    $element.removeClass('scale-in');
                    $element.addClass('scale-out');
                }

            });
            if(window_height + $window.scrollTop()
                == $(document).height()){
                $('.tap-target').tapTarget('open')
            } else $('.tap-target').tapTarget('close');
        }

        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        $('.sidenav').sidenav();
        //var i = $('.tap-target').tapTarget();
        var instances = M.TapTarget.init(document.querySelectorAll('.tap-target'), {onOpen: onOpen});
        //console.log(i)

        //$('.tap-target').tapTarget('onOpen', setTimeout($('.tap-target').tapTarget('close'),2000));
        $('.modal').modal();
        $('.materialize-textarea').characterCounter();
        var $window = $(window);
        $window.on('scroll resize', check_if_in_view);
    });
    // end of document ready
})(jQuery); // end of jQuery name space
