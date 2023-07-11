$(".exam-uslider").owlCarousel({
    margin: 16,
    items: 3,
	 autoplay: !0,
    autoplayTimeout: 5e3,
    loop: !0,
    dots: !1,
    nav: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2.2,
        nav: !1
      },
      992: {
        items: 2.2,
        nav: !1
      },
      1025: {
        items: 3,
        nav: !1
      }
    }
  });
  $('.exam-source-feature .btn-prev').click(function () {
    $(".exam-uslider").trigger('prev.owl.carousel');
    $(".exam-uslider").trigger('prev.owl.carousel');
  });
  $('.exam-source-feature .btn-next').click(function () {
    $(".exam-uslider").trigger('next.owl.carousel');
    $(".exam-uslider").trigger('next.owl.carousel');
  });