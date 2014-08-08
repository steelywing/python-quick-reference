// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(function () {
    /*
     * affix side nav
     */
    var $side_nav = $('.side-nav'),
        resize_side_nav = function (e) {
            $('.affix').each(function () {
                $(this)
                    .removeClass('affix')
                    .width('auto')
                    .width( $(this).width() )
                    .addClass('affix');
            });
        };
    
    $side_nav.affix({
        offset: {
            top: $side_nav.offset().top - 20,
            bottom: function () {
                return $('footer').outerHeight(true);
            }
        }
    })
    .on('affixed.bs.affix', function (e) {
        resize_side_nav(e);
        // fix BS affix leave `relative` property issue #13999
        $(this).css('position', '');
    })
    .on('affixed-top.bs.affix affixed-bottom.bs.affix', function (e) {
        $(this).width('auto');
    });
    
    $(window).on('resize', resize_side_nav);
    
    // if window reload, bootstrap will not fire `affix.bs.affix` event
    // although .side-nav affixed
    resize_side_nav();
    
    /*
     * create side nav items
     */
    $('#content').find('h2, h3, h4').each(function () {
        var $nav = $side_nav.find('.nav'),
            $a = $('<a>', {
                text: $(this).text(),
                href: '#' + this.id
            });
        $nav.append($('<li>').append($a));
    });
});
