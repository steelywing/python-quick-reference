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
