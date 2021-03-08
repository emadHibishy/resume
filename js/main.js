
$(function(){
    // scroll to element
    function scrlToEl(element){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top +40
        }, 1500);
    }
    // adding class
    function addActive(element){
        $(element).addClass('active').children('a').children('span').css({color:'rgb(67 , 61 , 154)'});
        $(element).children('a').children('i').css({color:'rgb(67 , 61 , 154)'});
    }
    // remove active
    function removeActive(){
        $('.aside ul li').removeClass('active').children('a').children('span').css({color:'#fff'});
        $('.aside ul li').children('a').children('i').css({color:'#fff'});
    }

    // aside active and showing it's target div
    $('.aside ul li').on('click',function(){
        const target        = $(this).children('a').data('target');
        removeActive();
        addActive(this);
        scrlToEl(target);
    });

    // add active class to portfolio projects headers and showing it's target div
    $('#portfolio ul li').on('click',function(){
        const target = $(this).data('target');
        $(this).addClass('active').siblings().removeClass('active');
        if(target === 'all'){
            $('#portfolio .project').fadeIn(400);
        }else{
            $('#portfolio .project').fadeOut(400);
            $(target).fadeIn(300);
        }
    });

    // add active class to aside element when scroll to its target div
    let mains = $('.main');
    $(window).scroll(function(){
        let scrlVal = $(window).scrollTop() ;
        for(i = 0; i < mains.length; i++){
            let target = $(mains[i]).attr('id');
            if (i === 4){
                if(scrlVal >= $(mains[4]).offset().top){
                    removeActive();
                    addActive('#aside-'+target);
                }
                continue;
            }
            else{
                if(scrlVal >= $(mains[i]).offset().top && scrlVal < $(mains[i+1]).offset().top ){
                    removeActive();
                    addActive('#aside-'+target);
                }
            }
        }
    });
});

window.addEventListener('load',function(){
    $('body').css("overflow","auto");
    $('.loading').fadeOut(1000);
});