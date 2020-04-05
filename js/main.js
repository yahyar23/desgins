jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pouseOnHover:true

        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }

    });

    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondary');
        }
        else if ($("header").hasClass('secondary')){
            $("header").removeClass('secondary');

        }

    });

    

});


$(document).ready(function()
{
    $('.post-warpper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 789,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }


              
                  
              


            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
      });

});