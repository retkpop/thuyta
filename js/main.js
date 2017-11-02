$("div#Main-slide").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    autoPlay: 4000,
    paginationSpeed: 400,
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [1199, 1],
    itemsTablet: [991, 1],
    itemsTabletSmall: [767, 1],
    itemsMobile: [480, 1],
    touchDrag: false,
    pagination: false,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
});
$(".btn-menu").click(function(){
    $(".navabar_HD #menu").toggleClass("show");
});
$(document).ready(function () {
    if($(window).width() < 543) {
        $('.navabar_HD #menu').slideAndSwipe();
    }
    $(".soluong .btnTang").on("click", function(){
        var numbSL = $(this).parent().find(".numbSL").text();
        var max = $(this).parent().find(".numbSL").attr("max");
        if(numbSL < max) {
            $(this).parent().find(".numbSL").html(parseInt(numbSL)+1);
        }
    });
    $(".soluong .btnGiam").on("click", function(){
        var numbSL = $(this).parent().find(".numbSL").text();
        if(numbSL>0) {
            $(this).parent().find(".numbSL").html(parseInt(numbSL)-1);
        }
        if($(this).closest(".listPr").find(".selectProduct").hasClass("selected") == true) {
            var numbSL = $(this).parent().find(".numbSL").text();
            if(numbSL == 0) {
                $(this).parent().find(".numbSL").html("1");
            }
        }
    });
    $(".selectProduct").on("click", function(){
        $(this).toggleClass("selected");
        var numbSL = $(this).closest(".listPr").find(".soluong .numbSL").text();
        if(numbSL == 0 && $(this).hasClass("selected") == true) {
            $(this).closest(".listPr").find(".soluong .numbSL").html("1");
        }
    });
})