// * Fondateur: Keany Vy KHUN
// * Co-Fondateurs: Gary KA, Charlotte ORTET
// * Projet: KidsNetwork


   /* search
    * ------------------------------------------------------ */
    var ssSearch = function() {

        var searchWrap = $('.header__search'),
            searchField = searchWrap.find('.search-field'),
            closeSearch = searchWrap.find('.header__search-close'),
            searchTrigger = $('.header__search-trigger'),
            siteBody = $('body');


        searchTrigger.on('click', function(e) {

            e.preventDefault();
            e.stopPropagation();

            var $this = $(this);

            siteBody.addClass('search-is-visible');
            setTimeout(function(){
                searchWrap.find('.search-field').focus();
            }, 100);

        });

        closeSearch.on('click', function(e) {

            var $this = $(this);

            e.stopPropagation();

            if(siteBody.hasClass('search-is-visible')){
                siteBody.removeClass('search-is-visible');
                setTimeout(function(){
                    searchWrap.find('.search-field').blur();
                }, 100);
            }
        });

        searchWrap.on('click',  function(e) {
            if( !$(e.target).is('.search-field') ) {
                closeSearch.trigger('click');
            }
        });

        searchField.on('click', function(e){
            e.stopPropagation();
        });

        searchField.attr({placeholder: '', autocomplete: 'off'});

    };
   /* Initialize
    * ------------------------------------------------------ */
    ssSearch();
