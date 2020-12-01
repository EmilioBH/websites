$(document).ready(function(){

    $(window).scroll(function(){
        var windowwidth = $(window).width();

        if( windowwidth >= 800 ){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acercade article').css({
                'transform': 'translate(0px, -' + scroll / 6 + '%)'
            });
        }
    });

});