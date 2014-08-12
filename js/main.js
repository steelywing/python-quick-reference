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
     * create sidebar nav items
     */
    $('#content').find('h1, h2, h3, h4').each(function () {
        var $nav = $('.bs-docs-sidenav .active .nav'),
            $a = $('<a>', {
                'text': $(this).text(),
                'href': '#' + this.id
            });
        $nav.append(
            $('<li>').append($a)
        );
    });
});
