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