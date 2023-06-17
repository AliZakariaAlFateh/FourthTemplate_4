$(function(){
    'use strict';
    //The height of all window you see
    var WindowHeight=$(window).height()
    // console.log(WindowHeight)
    //The height the upper bar
    var UpperHeight=$(".upper-bar").innerHeight()
    console.log(UpperHeight)
    //The height the upper bar
    var NavBar=$(".navbar").innerHeight()
    console.log(NavBar)
    // .carousel-item
    $(".slider,.carousel-item").height(WindowHeight-(UpperHeight+NavBar))

    $(".featured-work ul li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active")
    //    console.log($(this).data('list'))
        if($(this).data('list')==="All"){
            // $(".Shuffle-images .col-sm").show()
            $(".Shuffle-images .col-sm").css('opacity',1)
        }else{
            // $(".Shuffle-images .col-sm").hide()
            $(".Shuffle-images .col-sm").css('opacity','0.05')
            //Note I'm using the Parent() because i want to the (col-sm)
            //else move the class from (image) to (col-sm)
            // $($(this).data('list')).parent().show()
            //here i say the item it's class is : $(this).data('list') ,or it's parent, make it's opacity 1
            $($(this).data('list')).parent().css('opacity',1)
        }
    })
     // toggle between active or no active in arrow link 
     var ClicedLength=$(".testimonials .clicked").length;
     $(".testimonials a").on("click", function () {
        // if($(this).hasClass("nonactiveArrow"))
        // console.log($(this).data('ancor'))
        if($(this).data('ancor')==="one"){
            $(".testimonials .ancor1 > .clicked").removeClass("nonactiveArrow").addClass("activeArrow")
            $(".testimonials .ancor2 > .clicked").removeClass("activeArrow").addClass("nonactiveArrow")
        }else{
            $(".testimonials .ancor2 > .clicked").removeClass("nonactiveArrow").addClass("activeArrow")
            $(".testimonials .ancor1 > .clicked").removeClass("activeArrow").addClass("nonactiveArrow")
        }
        // $("link[href*='Them']").attr("href",$(this).attr("Data-Value"))
        // $(this).addClass("activeArrow").siblings().removeClass("activeArrow")
        // $(this).("span").eq(0).addClass("activeArrow")

     })
      /*
     $(".testimonials a").on("click", function () {
        // if($(this).hasClass("nonactiveArrow"))
        // console.log($(this).next())
        // $(this).next().removeClass("nonactiveArrow")
        if($(this).children().first().hasClass("nonactiveArrow")){
            $(this).children().first().removeClass("nonactiveArrow")
            $(this).children().first().addClass("activeArrow")
            $("a").not($(this).children().first()).children().first().removeClass("activeArrow")
            $("a").not($(this).children().first()).children().first().addClass("nonactiveArrow")
            // $("a").not($(this).children().first()).removeClass("activeArrow")
            // $("a").not($(this).children().first()).addClass("nonactiveArrow")
        }else{
            $(this).children().first().removeClass("activeArrow")
            $(this).children().first().addClass("nonactiveArrow")
            $("a").not($(this).children().first()).children().first().removeClass("activeArrow")
            $("a").not($(this).children().first()).children().first().addClass("nonactiveArrow")
        }
     })*/



});