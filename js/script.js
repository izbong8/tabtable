$(function(){
    $("h2").on("click",function(){
        $(this).addClass("on")
        .siblings("h2").removeClass("on");
    });
});