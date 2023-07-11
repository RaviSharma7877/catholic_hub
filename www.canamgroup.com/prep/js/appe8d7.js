"use strict";

function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
  throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0
  }
}

function _iterableToArray(t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
}

function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t)
}

function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i];
  return s
}

function bindOnScrollEvent() {
  $(document).off("scroll").on("scroll", function () {
    window.innerWidth > 991 && (addOrRemoveFillBg(), $(window).scrollTop() > 200 ? $(".scroll-top-wrapper").addClass("show") : $(".scroll-top-wrapper").removeClass("show"))
  })
}

function addOrRemoveFillBg() {
  $(window).scrollTop() > 0 ? $(".navbar.fixed-top").removeClass("bg-transparent").addClass("bground-white") : $(".navbar.fixed-top").removeClass("bground-white").addClass("bg-transparent")
}

function fillbgForSmallScreens() {
  window.innerWidth < 991 && $(".navbar.fixed-top").addClass("bground-white").removeClass("bg-transparent")
}

function scrollToTop() {
  verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0, offsetTop = (offset = (element = $("body")).offset()).top, $("html,body").animate({
    scrollTop: offsetTop
  }, 500, "linear")
}

function logo() {
  var t = $(".reach--logos__item"),
    e = t.find(".active");
  if (e.length) {
    var i = e.next();
    e.removeClass("active")
  } else var i = t.find("img:first");
  i.length || (i = t.find("img:first")), i.addClass("active")
}

function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}
bindOnScrollEvent(), fillbgForSmallScreens(), $(window).resize(function () {
  bindOnScrollEvent(), fillbgForSmallScreens(), window.innerWidth > 991 && addOrRemoveFillBg()
});
var forEach = function (t, e, i) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(i, t[s], s, t);
    else
      for (var o = 0, n = t.length; n > o; o++) e.call(i, t[o], o, t)
  },
  hamburgers = document.querySelectorAll(".hamburger");
hamburgers.length > 0 && forEach(hamburgers, function (t) {
  t.addEventListener("click", function () {
    this.classList.toggle("is-active")
  }, !1)
}), $(".sideDrop").selectpicker(), $(".country-picker").selectpicker(), $(".position--heading__drop").selectpicker(), $(".pop--select").selectpicker(), $(document).ready(function () {
  var t = $(".why--carousel"),
    e = $(".student--slider"),
    i = $(".stories--slider"),
    s = $(".blog--body"),
    o = $(".university-carousel"),
    n = $(".scholarship--slider"),
    r = $(".all-programs"),
    a = $(".dashboard-program--slider"),
    l = $(".shortlist-program--slider"),
    h = $(".dashboard-uslider"),
    c = $(".advisor--student--slider"),
    d = $(".super--coach"),
	z = $(".acing--student"),
	g = $(".new--prep--slider"),
    k = $(".card--video__slider"),
    j = $(".exam-uslider"),
	t = $(".course--cp")
  ;
  $(".btn-next").click(function () {
    t.trigger("next.owl.carousel"), e.trigger("next.owl.carousel"), s.trigger("next.owl.carousel"), i.trigger("next.owl.carousel"), o.trigger("next.owl.carousel"), n.trigger("next.owl.carousel"), r.trigger("next.owl.carousel"), a.trigger("next.owl.carousel"), l.trigger("next.owl.carousel"), h.trigger("next.owl.carousel"), c.trigger("next.owl.carousel"), r.trigger("next.owl.carousel"), d.trigger("next.owl.carousel"), z.trigger("next.owl.carousel"), g.trigger("next.owl.carousel"), k.trigger("next.owl.carousel"),j.trigger("next.owl.carousel"), t.trigger("next.owl.carousel")
  }), $(".btn-prev").click(function () {
    t.trigger("prev.owl.carousel"), e.trigger("prev.owl.carousel"), s.trigger("prev.owl.carousel"), i.trigger("prev.owl.carousel"), o.trigger("prev.owl.carousel"), n.trigger("prev.owl.carousel"), r.trigger("prev.owl.carousel"), a.trigger("prev.owl.carousel"), l.trigger("prev.owl.carousel"), h.trigger("prev.owl.carousel"), c.trigger("prev.owl.carousel"),r.trigger("next.owl.carousel"), d.trigger("prev.owl.carousel"), z.trigger("prev.owl.carousel"), g.trigger("prev.owl.carousel"), k.trigger("prev.owl.carousel"),j.trigger("prev.owl.carousel"), t.trigger("prev.owl.carousel")
  }), $(".card--video__slider").owlCarousel({
    margin: 20,
    items: 3,
    mouseDrag: !1,
     loop: !1,
    autoplay: !1,
    autoplayTimeout: 2e3,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 3,
        nav: !1
      }
    }
  }), $(".udHero").owlCarousel({
    margin: 8,
    items: 3,
    loop: !0,
    center: !0,
    nav: !1,
    dots: !1,
    autoplay: !0,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 12
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 3,
        nav: !1
      }
    }
  }), $(".student--slider").owlCarousel({
    margin: 40,
    items: 3,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 2e3,
    stagePadding: 124,
    nav: !1,
    dots: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20,
        stagePadding: 20
      },
      600: {
        items: 2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 3,
        nav: !1
      }
    }
  }), $(".advisor--student--slider").owlCarousel({
    margin: 24,
    items: 2.4,
    loop: !0,
    autoplayTimeout: 2e3,
    nav: !1,
    dots: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 2.4,
        nav: !1
      }
    }
  }), $(".scholarship--slider").owlCarousel({
    margin: 40,
    items: 4.2,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 2e3,
    stagePadding: 100,
    nav: !1,
    dots: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20,
        stagePadding: 20
      },
      600: {
        items: 2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 4.2,
        nav: !1
      }
    }
  }), $(".award").owlCarousel({
    margin: 20,
    loop: !0,
    center: !0,
    autoplay: !0,
    autoplayTimeout: 2e3,
    stagePadding: 124,
    responsive: {
      0: {
        items: 2.5,
        nav: !1,
        stagePadding: 20
      },
      600: {
        items: 6.5,
        nav: !1
      }
    }
  }), $(".why--carousel").owlCarousel({
    items: 1,
    nav: !1,
    loop: !0,
    animateOut: "fadeOut",
    dots: !1
  }), $(".exploreSlider").owlCarousel({
    margin: 20,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    stagePadding: 20,
    responsive: {
      0: {
        items: 2,
        nav: !1,
        stagePadding: 20,
        margin: 16
      },
      600: {
        items: 2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 5
      }
    }
  }), $(".programSlider").owlCarousel({
    margin: 20,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    stagePadding: 124,
    dots: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        stagePadding: 20,
        margin: 16
      },
      600: {
        items: 2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 3.9
      }
    }
  }), $(".blog--body").owlCarousel({
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    responsive: {
      0: {
        items: 1,
        nav: !1,

      },
      600: {
        items: 1,
        nav: !1,
           },
      992: {
        items: 3,
      }
    }
  }), $(".hero--slider").owlCarousel({
    loop: !0,
    autoplay: !0,
  autoplayTimeout: 12000,
    items: 1,
    animateOut: "animate__animated animate__fadeOut",
    animateIn: "animate__animated animate__fadeIn",
    dots: !1
  }), $(".stories--slider").owlCarousel({
    margin: 40,
    items: 1.2,
    loop: !0,
    stagePadding: 124,
    dots: !1,
    responsive: {
      0: {
        items: 1,
        nav: !1,
        margin: 20,
        stagePadding: 20
      },
      600: {
        items: 1.2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 1.2,
        nav: !1
      }
    }
  }), $(".university-carousel").owlCarousel({
    margin: 40,
    items: 3,
    loop: !0,
    dots: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 1.2,
        nav: !1
      },
      992: {
        items: 3,
        nav: !1
      }
    }
  }), $(".program--slider").owlCarousel({
    margin: 40,
    items: 3,
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
  }), $(".dashboard-program--slider").owlCarousel({
    margin: 16,
    items: 3,
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
        items: 2.5,
        nav: !1
      }
    }
  }), $(".shortlist-program--slider").owlCarousel({
    margin: 16,
    items: 3,
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
        items: 4,
        nav: !1
      }
    }
  }), $(".exam-uslider").owlCarousel({
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
  }),  
	  
	  $(".dashboard-uslider").owlCarousel({
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
        items:3,
        nav: !1
      }
    }
  }), $(".all-programs").owlCarousel({
    margin: 40,
    items: 3,
    dots: !1,
    nav: !1,
    autoplay: !0,
    loop: !0,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20,
        stagePadding: 20
      },
      600: {
        items: 2.2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 2.2,
        nav: !1
      },
      1025: {
        items: 4.2,
        nav: !1
      }
    }
  }), $(".super--coach").owlCarousel({
    margin: 40,
    items: 4.2,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 2e3,
    stagePadding: 100,
    nav: !1,
    dots: !1,
    responsive: {
      0: {
        items: 2,
        nav: !1,
        margin: 10,
        stagePadding: 20
      },
      600: {
        items: 2,
        nav: !1,
        stagePadding: 35
      },
      992: {
        items: 4.2,
        nav: !1
      }
    }
  }),$(".acing--student").owlCarousel({
    margin: 60,
    items: 5.2,
    dots: !1,
    nav: !1,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 4e3,
    responsive: {
      0: {
        items: 2.2,
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
        items: 5.2,
        nav: !1
      }
    }
  }),  $(".study--material").owlCarousel({
    margin: 40,
    items: 5,
    mouseDrag: !1,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 5,
        nav: !1
      }
    }
  })
}), $(".new--prep--slider").owlCarousel({
    margin: 40,
    items: 3,
    mouseDrag: !1,
    loop: !0,
    autoplay: !0,
    responsive: {
      0: {
        items: 1.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 2,
        nav: !1
      }
    }
  }),$(".study--material").owlCarousel({
    margin: 20,
    items: 3,
    mouseDrag: !1,
        responsive: {
      0: {
        items: 2.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 5,
        nav: !1
      }
    }
  }),
	
	$(".course--cp").owlCarousel({
    margin: 20,
    items: 3,
    mouseDrag: !1,
        responsive: {
      0: {
        items: 2.2,
        nav: !1,
        margin: 20
      },
      600: {
        items: 2,
        nav: !1
      },
      992: {
        items: 6,
        nav: !1
      }
    }
  }),
	
	
	$(document).ready(function () {
  var t = $("#services__accordion > .accordion .accordion__body").hide(),
    e = $("#accordion__img > img").hide();
  t.first().show(), e.first().show(), $("#services__accordion .accordion").click(function () {
    var i = $(this),
      s = $("#" + i.attr("tab-name") + "-img");
    return t.slideUp(), $("#services__accordion .accordion").removeClass("active"), i.addClass("active"), e.slideUp(), i.find(".accordion__body").slideDown(), s.slideDown(), !1
  })
}), $(document).ready(function () {
  document.querySelectorAll(".counter").forEach(function (t) {
    ! function e() {
      var i = parseInt(t.getAttribute("data-target")),
        s = parseInt(t.innerText);
      s < i ? (t.innerText = s + Math.trunc(i / 200), setTimeout(e, 1)) : t.innerText = i
    }()
  })
}), $(function () {
  setInterval(function () {
    logo()
  }, 5e3)
}), $(".close").click(function () {
  $("#thank").removeClass("show")
}), $("#submit").click(function () {
  $("#thank").addClass("show")
}), $("#explore").click(function () {
  $(".explore").addClass("show"), $("body").addClass("overflow")
}), $(".backdrop").click(function () {
  $(".explore").removeClass("show"), $("body").removeClass("overflow")
}), $(".mega--close").click(function () {
  $(".explore").removeClass("show"), $("body").removeClass("overflow")
});
var megaChar = ".mega--character a";
$(megaChar).click(function () {
    $(".mega--character a").removeClass("active"), $(this).addClass("active")
  }), $("#mobileFilter").click(function () {
    $(".filter--mobile").addClass("show"), $("body").addClass("overflow")
  }), $(".filter--mobile .mega--close").click(function () {
    $(".filter--mobile").removeClass("show"), $("body").removeClass("overflow")
  }), $(".dashboard--filter-btn").click(function () {
    $(".dashboard--filter").addClass("show"), $("body").addClass("overflow")
  }), $("#cancel").click(function () {
    $(".dashboard--filter").removeClass("show"), $("body").removeClass("overflow")
  }), $(".backdrop").click(function () {
    $(".dashboard--filter").removeClass("show"), $("body").removeClass("overflow")
  }), $("input").change(function () {
    "ilets" == $(this).val() ? $("#ilets").show() : $("#ilets").hide(), "toefl" == $(this).val() ? $("#toefl").show() : $("#toefl").hide(), "pte" == $(this).val() ? $("#pte").show() : $("#pte").hide(), "duolingo" == $(this).val() ? $("#duolingo").show() : $("#duolingo").hide(), "gmat" == $(this).val() ? $("#gmat").show() : $("#gmat").hide(), "gre" == $(this).val() ? $("#gre").show() : $("#gre").hide(), "sat" == $(this).val() ? $("#sat").show() : $("#sat").hide()
  }), $(document).ready(function () {
    var t = "#userInitialWizard .stepper--wizard--item.active",
      e = ".wizard li.active";
    $(".arrow--button__nextBtn").click(function () {
      $(".stepper--content").removeClass("active"), $(this).closest(".stepper--content").next().addClass("active"), $(e).next().addClass("active"), $(e).prev().removeClass("active"), $(e).prev().addClass("completed"), $(t).next().addClass("active"), $(t).prev().removeClass("active")
    }), $(".btn-prev").click(function () {
      $(".stepper--content").removeClass("active"), $(this).closest(".stepper--content").prev().addClass("active"), $(e).prev().addClass("active"), $(e).prev().addClass("completed"), $(e).removeClass("completed"), $(e).next().removeClass("active"), $(t).prev().addClass("active"), $(t).next().removeClass("active")
    })
  }), window.addEventListener("load", function () {
    setTimeout(function (t) {
      $("#exampleModal").modal("show")
    }, 1e3)
  }), $("#explore").click(function () {
    $(".hamburger").removeClass("is-active"), $(".navbar-collapse").removeClass("show")
  }), $(document).ready(function () {
    function t() {
      992 > $(window).width() && ($(".mega--list").hide(), $(".mega--title").click(function () {
        $(this).next().slideToggle()
      }), $(".mega--card--header .mega--title").click(function () {
        $(this).parent().next().slideToggle(), $(this).parent().toggleClass("active")
      }))
    }
    $(window).on("resize", function (e) {
      t()
    }), t()
  }),
  function (t) {
    t.fn.loading = function () {
      var e = {
        backgroundColor: "#EFF1F2",
        progressColor: "#1DBD68",
        percent: 0,
        price: "",
        duration: 2e3
      };
      t(this).each(function () {
        var i = t(this),
          s = {
            backgroundColor: i.data("color") ? i.data("color").split(",")[0] : e.backgroundColor,
            progressColor: i.data("color") ? i.data("color").split(",")[1] : e.progressColor,
            percent: i.data("percent") ? i.data("percent") : e.percent,
            price: i.data("price") ? i.data("price") : e.price,
            duration: i.data("duration") ? i.data("duration") : e.duration
          };
        i.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class="rotate-only"><span></span></div>'), i.find(".background").css("background-color", s.backgroundColor), i.find(".left").css("background-color", s.backgroundColor), i.find(".rotate").css("background-color", s.progressColor), i.find(".right").css("background-color", s.progressColor);
        var o = i.find(".rotate"),
          n = i.find(".rotate-only");
        if (setTimeout(function () {
            o.css({
              transition: "transform " + s.duration + "ms linear",
              transform: "rotate(" + 3.6 * s.percent + "deg)"
            }), n.css({
              transform: "rotate(" + 3.6 * s.percent + "deg)"
            })
          }, 1), 100 === s.percent && (t(this).parent().addClass("completed"), i.find(".right").css({
            display: "none"
          }), i.find(".left").css({
            display: "none"
          }), i.find(".rotate").css({
            display: "none"
          })), s.percent > 50) {
          var r = "toggle " + s.duration / s.percent * 50 + "ms step-end",
            a = "toggle " + s.duration / s.percent * 50 + "ms step-start";
          i.find(".right").css({
            animation: r,
            opacity: 1
          }), i.find(".left").css({
            animation: a,
            opacity: 0
          })
        }
      })
    }
  }(jQuery), $("#sendRequest").click(function () {
    $("#requestSendModal").toggle(), $("#requestSendModal").addClass("show"), $("#requestModal").removeClass("show")
  }), $("#requestSendClose").click(function () {
    $("#requestSendModal").toggle(), $("#requestSendModal").removeClass("show"), $("body").removeClass("modal-open"), $(".modal-backdrop").removeClass("show")
  }), $(".social-submit").click(function () {
    "whatsapp" == this.id && ($("#whatAppSuccessModal").toggle(), $("#whatAppSuccessModal").addClass("show"), $("#whatsAppmodal").removeClass("show")), "callback" == this.id && ($("#callSuccessModal").toggle(), $("#callSuccessModal").addClass("show"), $("#phoneModal").removeClass("show")), "zoomRequest" == this.id && ($("#zoomRequestModal").toggle(), $("#zoomRequestModal").addClass("show"), $("#zoomModal").removeClass("show")), "ZoomsendRequest" == this.id && ($("#ZoomSuccessModal").toggle(), $("#ZoomSuccessModal").addClass("show"), $("#zoomRequestModal").removeClass("show"), $("#zoomScheduleModal").removeClass("show")), "zoomSchedule" == this.id && ($("#zoomScheduleModal").toggle(), $("#zoomScheduleModal").addClass("show"), $("#zoomModal").removeClass("show"))
  }), $(".success-close").click(function () {
    $(".modal").hide(), $(".modal").removeClass("show"), $("body").removeClass("modal-open"), $(".modal-backdrop").remove()
  }), $(".searchBtn").click(function () {
    $(".position--heading__right").hide(), $(".searchAction").show()
  }), $(".searchClose").click(function () {
    $(".position--heading__right").show(), $(".searchAction").hide()
  }), $(".drop").click(function (t) {
    $(".navbar--drop--header").removeClass("toggle"), $(this).siblings().toggleClass("toggle"), t.stopPropagation()
  }), $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  }), $(".chat__header").click(function () {
    $(".chat").toggleClass("open")
  }), $(".chip-name").click(function () {
    $(this).parent().toggleClass("show")
  }), $(".date-dropmenu > span").click(function () {
    $("span.selected").removeClass("selected"), $(this).addClass("selected")
  }), $(".chat__body")[0] && $(".chat__body") && $(".chat__body").scrollTop($(".chat__body")[0].scrollHeight), $(".custom__calendar")[0] && $(".custom__calendar").datepicker({
    autoclose: !0,
    orientation: "bottom left"
  });
var $inp = $(".otp-input");
$inp.on({
    paste: function (t) {
      var e = t.originalEvent.clipboardData.getData("text").trim();
      if (!/\d{6}/.test(e)) return t.preventDefault();
      var i = _toConsumableArray(e);
      $inp.val(function (t) {
        return i[t]
      }).eq(5).focus()
    },
    input: function (t) {
      var e = $inp.index(this);
      this.value && $inp.eq(e + 1).focus()
    },
    keydown: function (t) {
      var e = $inp.index(this);
      !this.value && "Backspace" === t.key && e && $inp.eq(e - 1).focus()
    }
  }),
  function (t, e, i, s) {
    function o(e, i) {
      this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null
      }, this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"]
        }
      }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
        this._handlers[i] = t.proxy(this[i], this)
      }, this)), t.each(o.Plugins, t.proxy(function (t, e) {
        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
      }, this)), t.each(o.Workers, t.proxy(function (e, i) {
        this._pipe.push({
          filter: i.filter,
          run: t.proxy(i.run, this)
        })
      }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }, o.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
    }, o.Type = {
      Event: "event",
      State: "state"
    }, o.Plugins = {}, o.Workers = [{
      filter: ["width", "settings"],
      run: function () {
        this._width = this.$element.width()
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        t.current = this._items && this._items[this.relative(this._current)]
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        this.$stage.children(".cloned").remove()
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = this.settings.margin || "",
          i = !this.settings.autoWidth,
          s = this.settings.rtl,
          o = {
            width: "auto",
            "margin-left": s ? e : "",
            "margin-right": s ? "" : e
          };
        i || this.$stage.children().css(o), t.css = o
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          i = null,
          s = this._items.length,
          o = !this.settings.autoWidth,
          n = [];
        for (t.items = {
            merge: !1,
            width: e
          }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, n[s] = o ? e * i : this._items[s].width();
        this._widths = n
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        var e = [],
          i = this._items,
          s = this.settings,
          o = Math.max(2 * s.items, 4),
          n = 2 * Math.ceil(i.length / 2),
          r = s.loop && i.length ? s.rewind ? o : Math.max(o, n) : 0,
          a = "",
          l = "";
        for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
        this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, o = 0, n = []; ++i < e;) n.push((s = n[i - 1] || 0) + (o = this._widths[this.relative(i)] + this.settings.margin) * t);
        this._coordinates = n
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        var t = this.settings.stagePadding,
          e = this._coordinates,
          i = {
            width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
            "padding-left": t || "",
            "padding-right": t || ""
          };
        this.$stage.css(i)
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        var e = this._coordinates.length,
          i = !this.settings.autoWidth,
          s = this.$stage.children();
        if (i && t.items.merge)
          for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
        else i && (t.css.width = t.items.width, s.css(t.css))
      }
    }, {
      filter: ["items"],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr("style")
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (t) {
        t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
      }
    }, {
      filter: ["position"],
      run: function () {
        this.animate(this.coordinates(this._current))
      }
    }, {
      filter: ["width", "position", "items", "settings"],
      run: function () {
        var t, e, i, s, o = this.settings.rtl ? 1 : -1,
          n = 2 * this.settings.stagePadding,
          r = this.coordinates(this.current()) + n,
          a = r + this.width() * o,
          l = [];
        for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + n * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
      }
    }, ], o.prototype.initializeStage = function () {
      this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
        class: this.settings.stageClass
      }).wrap(t("<div/>", {
        class: this.settings.stageOuterClass
      })), this.$element.append(this.$stage.parent()))
    }, o.prototype.initializeItems = function () {
      var e = this.$element.find(".owl-item");
      if (e.length) return this._items = e.get().map(function (e) {
        return t(e)
      }), this._mergers = this._items.map(function () {
        return 1
      }), void this.refresh();
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, o.prototype.initialize = function () {
      if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
        var t, e, i;
        t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)
      }
      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible")
    }, o.prototype.setup = function () {
      var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        o = null;
      i ? (t.each(i, function (t) {
        t <= e && t > s && (s = Number(t))
      }), "function" == typeof (o = t.extend({}, this.options, i[s])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : o = t.extend({}, this.options), this.trigger("change", {
        property: {
          name: "settings",
          value: o
        }
      }), this._breakpoint = s, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
        property: {
          name: "settings",
          value: this.settings
        }
      })
    }, o.prototype.optionsLogic = function () {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (e) {
      var i = this.trigger("prepare", {
        content: e
      });
      return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
        content: i.data
      }), i.data
    }, o.prototype.update = function () {
      for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
          return this[t]
        }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(o), e++;
      this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, o.prototype.width = function (t) {
      switch (t = t || o.Width.Default) {
        case o.Width.Inner:
        case o.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
    }, o.prototype.refresh = function () {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function () {
      e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
      return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function () {
      t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
        return !1
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function (e) {
      var s = null;
      3 !== e.which && (t.support.transform ? s = {
        x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
        y: s[16 === s.length ? 13 : 5]
      } : (s = this.$stage.position(), s = {
        x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
        y: s.top
      }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
        var s = this.difference(this._drag.pointer, this.pointer(e));
        t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
      }, this)))
    }, o.prototype.onDragMove = function (t) {
      var e = null,
        i = null,
        s = null,
        o = this.difference(this._drag.pointer, this.pointer(t)),
        n = this.difference(this._drag.stage.start, o);
      this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, n.x = ((n.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * o.x / 5 : 0, n.x = Math.max(Math.min(n.x, e + s), i + s)), this._drag.stage.current = n, this.animate(n.x))
    }, o.prototype.onDragEnd = function (e) {
      var s = this.difference(this._drag.pointer, this.pointer(e)),
        o = this._drag.stage.current,
        n = s.x > 0 ^ this.settings.rtl ? "left" : "right";
      t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== s.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
        return !1
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function (e, i) {
      var o = -1,
        n = this.width(),
        r = this.coordinates();
      return this.settings.freeDrag || t.each(r, t.proxy(function (t, a) {
        return "left" === i && e > a - 30 && e < a + 30 ? o = t : "right" === i && e > a - n - 30 && e < a - n + 30 ? o = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] !== s ? r[t + 1] : a - n) && (o = "left" === i ? t + 1 : t), -1 === o
      }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? o = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (o = e = this.maximum())), o
    }, o.prototype.animate = function (e) {
      var i = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
        transform: "translate3d(" + e + "px,0px,0px)",
        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
      }) : i ? this.$stage.animate({
        left: e + "px"
      }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
        left: e + "px"
      })
    }, o.prototype.is = function (t) {
      return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function (t) {
      if (t === s) return this._current;
      if (0 === this._items.length) return s;
      if (t = this.normalize(t), this._current !== t) {
        var e = this.trigger("change", {
          property: {
            name: "position",
            value: t
          }
        });
        e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
          property: {
            name: "position",
            value: this._current
          }
        })
      }
      return this._current
    }, o.prototype.invalidate = function (e) {
      return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
        return e
      })
    }, o.prototype.reset = function (t) {
      (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (t, e) {
      var i = this._items.length,
        o = e ? 0 : this._clones.length;
      return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function (t) {
      return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function (t) {
      var e, i, s, o = this.settings,
        n = this._coordinates.length;
      if (o.loop) n = this._clones.length / 2 + this._items.length - 1;
      else if (o.autoWidth || o.merge) {
        if (e = this._items.length)
          for (i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
        n = e + 1
      } else n = o.center ? this._items.length - 1 : this._items.length - o.items;
      return t && (n -= this._clones.length / 2), Math.max(n, 0)
    }, o.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function (t) {
      return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function (t) {
      return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function (e) {
      var i = this._clones.length / 2,
        o = i + this._items.length,
        n = function (t) {
          return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
        };
      return e === s ? t.map(this._clones, function (t, e) {
        return n(e)
      }) : t.map(this._clones, function (t, i) {
        return t === e ? n(i) : null
      })
    }, o.prototype.speed = function (t) {
      return t !== s && (this._speed = t), this._speed
    }, o.prototype.coordinates = function (e) {
      var i, o = 1,
        n = e - 1;
      return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
        return this.coordinates(e)
      }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, n = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[n] || 0)) / 2 * o) : i = this._coordinates[n] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function (t, e, i) {
      return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function (t, e) {
      var i = this.current(),
        s = null,
        o = t - this.relative(i),
        n = (o > 0) - (o < 0),
        r = this._items.length,
        a = this.minimum(),
        l = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * n * r), (s = (((t = i + o) - a) % r + r) % r + a) !== t && s - o <= l && s - o > 0 && (i = s - o, t = s, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, o.prototype.next = function (t) {
      t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function (t) {
      t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function (t) {
      if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function () {
      var s;
      return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
    }, o.prototype.replace = function (e) {
      this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
        return 1 === this.nodeType
      }).each(t.proxy(function (t, e) {
        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (e, i) {
      var o = this.relative(this._current);
      i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
        content: e,
        position: i
      }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
        content: e,
        position: i
      })
    }, o.prototype.remove = function (t) {
      (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
        content: this._items[t],
        position: t
      }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: t
      }))
    }, o.prototype.preloadAutoWidthImages = function (e) {
      e.each(t.proxy(function (e, i) {
        this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
          i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
        }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
      }, this))
    }, o.prototype.destroy = function () {
      for (var s in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[s].destroy();
      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? t > i : t < i;
        case ">":
          return s ? t < i : t > i;
        case ">=":
          return s ? t <= i : t >= i;
        case "<=":
          return s ? t >= i : t <= i
      }
    }, o.prototype.on = function (t, e, i, s) {
      t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function (t, e, i, s) {
      t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function (e, i, s, n, r) {
      var a = {
          item: {
            count: this._items.length,
            index: this.current()
          }
        },
        l = t.camelCase(t.grep(["on", e, s], function (t) {
          return t
        }).join("-").toLowerCase()),
        h = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
          relatedTarget: this
        }, a, i));
      return this._supress[e] || (t.each(this._plugins, function (t, e) {
        e.onTrigger && e.onTrigger(h)
      }), this.register({
        type: o.Type.Event,
        name: e
      }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
    }, o.prototype.enter = function (e) {
      t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
        this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
      }, this))
    }, o.prototype.leave = function (e) {
      t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
        this._states.current[e]--
      }, this))
    }, o.prototype.register = function (e) {
      if (e.type === o.Type.Event) {
        if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
          var i = t.event.special[e.name]._default;
          t.event.special[e.name]._default = function (t) {
            return i && i.apply && (!t.namespace || -1 === t.namespace.indexOf("owl")) ? i.apply(this, arguments) : t.namespace && t.namespace.indexOf("owl") > -1
          }, t.event.special[e.name].owl = !0
        }
      } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, s) {
        return t.inArray(i, this._states.tags[e.name]) === s
      }, this)))
    }, o.prototype.suppress = function (e) {
      t.each(e, t.proxy(function (t, e) {
        this._supress[e] = !0
      }, this))
    }, o.prototype.release = function (e) {
      t.each(e, t.proxy(function (t, e) {
        delete this._supress[e]
      }, this))
    }, o.prototype.pointer = function (t) {
      var i = {
        x: null,
        y: null
      };
      return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t))
    }, o.prototype.difference = function (t, e) {
      return {
        x: t.x - e.x,
        y: t.y - e.y
      }
    }, t.fn.owlCarousel = function (e) {
      var i = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var s = t(this),
          n = s.data("owl.carousel");
        n || (n = new o(this, "object" == _typeof(e) && e), s.data("owl.carousel", n), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
          n.register({
            type: o.Type.Event,
            name: i
          }), n.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
            t.namespace && t.relatedTarget !== this && (this.suppress([i]), n[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
          }, n))
        })), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
      })
    }, t.fn.owlCarousel.Constructor = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this._core = i, this._interval = null, this._visible = null, this._handlers = {
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoRefresh && this.watch()
        }, this)
      }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
    }, o.prototype.watch = function () {
      this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function () {
      this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function () {
      var t, i;
      for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this._core = i, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
          if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
            var i = this._core.settings,
              s = i.center && Math.ceil(i.items / 2) || i.items,
              o = i.center && -1 * s || 0,
              n = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o,
              r = this._core.clones().length,
              a = t.proxy(function (t, e) {
                this.load(e)
              }, this);
            for (i.lazyLoadEager > 0 && (s += i.lazyLoadEager, i.loop && (n -= i.lazyLoadEager, s++)); o++ < s;) this.load(r / 2 + this._core.relative(n)), r && t.each(this._core.clones(this._core.relative(n)), a), n++
          }
        }, this)
      }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
    }, o.prototype.load = function (i) {
      var s = this._core.$stage.children().eq(i),
        o = s && s.find(".owl-lazy");
      !o || t.inArray(s.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, s) {
        var o, n = t(s),
          r = e.devicePixelRatio > 1 && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
        this._core.trigger("load", {
          element: n,
          url: r
        }, "lazy"), n.is("img") ? n.one("load.owl.lazy", t.proxy(function () {
          n.css("opacity", 1), this._core.trigger("loaded", {
            element: n,
            url: r
          }, "lazy")
        }, this)).attr("src", r) : n.is("source") ? n.one("load.owl.lazy", t.proxy(function () {
          this._core.trigger("loaded", {
            element: n,
            url: r
          }, "lazy")
        }, this)).attr("srcset", r) : ((o = new Image).onload = t.proxy(function () {
          n.css({
            "background-image": 'url("' + r + '")',
            opacity: "1"
          }), this._core.trigger("loaded", {
            element: n,
            url: r
          }, "lazy")
        }, this), o.src = r)
      }, this)), this._loaded.push(s.get(0)))
    }, o.prototype.destroy = function () {
      var t, e;
      for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function i(s) {
      this._core = s, this._previousHeight = null, this._handlers = {
        "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && this.update()
        }, this),
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
        }, this),
        "loaded.owl.lazy": t.proxy(function (t) {
          t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
        }, this)
      }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
      var o = this;
      t(e).on("load", function () {
        o._core.settings.autoHeight && o.update()
      }), t(e).resize(function () {
        o._core.settings.autoHeight && (null != o._intervalId && clearTimeout(o._intervalId), o._intervalId = setTimeout(function () {
          o.update()
        }, 250))
      })
    };
    o.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
    }, o.prototype.update = function () {
      var e = this._core._current,
        i = e + this._core.settings.items,
        s = this._core.settings.lazyLoad,
        o = this._core.$stage.children().toArray().slice(e, i),
        n = [],
        r = 0;
      t.each(o, function (e, i) {
        n.push(t(i).height())
      }), (r = Math.max.apply(null, n)) <= 1 && s && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function () {
      var t, e;
      for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this._core = i, this._videos = {}, this._playing = null, this._handlers = {
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.register({
            type: "state",
            name: "playing",
            tags: ["interacting"]
          })
        }, this),
        "resize.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
        }, this),
        "refreshed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
        }, this),
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && "position" === t.property.name && this._playing && this.stop()
        }, this),
        "prepared.owl.carousel": t.proxy(function (e) {
          if (e.namespace) {
            var i = t(e.content).find(".owl-video");
            i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
          }
        }, this)
      }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
        this.play(t)
      }, this))
    };
    o.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
    }, o.prototype.fetch = function (t, e) {
      var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
        o = t.attr("data-width") || this._core.settings.videoWidth,
        n = t.attr("data-height") || this._core.settings.videoHeight,
        r = t.attr("href");
      if (!r) throw Error("Missing video URL.");
      if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
      else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
      else {
        if (!(s[3].indexOf("vzaar") > -1)) throw Error("Video URL not supported.");
        i = "vzaar"
      }
      s = s[6], this._videos[r] = {
        type: i,
        id: s,
        width: o,
        height: n
      }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, o.prototype.thumbnail = function (e, i) {
      var s, o, n, r = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
        a = e.find("img"),
        l = "src",
        h = "",
        c = this._core.settings,
        d = function (i) {
          o = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? t("<div/>", {
            class: "owl-video-tn " + h,
            srcType: i
          }) : t("<div/>", {
            class: "owl-video-tn",
            style: "opacity:1;background-image:url(" + i + ")"
          }), e.after(s), e.after(o)
        };
      if (e.wrap(t("<div/>", {
          class: "owl-video-wrapper",
          style: r
        })), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length) return d(a.attr(l)), a.remove(), !1;
      "youtube" === i.type ? d(n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg") : "vimeo" === i.type ? t.ajax({
        type: "GET",
        url: "//vimeo.com/api/v2/video/" + i.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function (t) {
          d(n = t[0].thumbnail_large)
        }
      }) : "vzaar" === i.type && t.ajax({
        type: "GET",
        url: "//vzaar.com/api/videos/" + i.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function (t) {
          d(n = t.framegrab_url)
        }
      })
    }, o.prototype.stop = function () {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function (e) {
      var i, s = t(e.target).closest("." + this._core.settings.itemClass),
        o = this._videos[s.attr("data-video")],
        n = o.width || "100%",
        r = o.height || this._core.$stage.height();
      this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), i.attr("width", n), "youtube" === o.type ? i.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id) : "vimeo" === o.type ? i.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1") : "vzaar" === o.type && i.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function () {
      var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
      return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function () {
      var t, e;
      for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this.core = i, this.core.options = t.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
        "change.owl.carousel": t.proxy(function (t) {
          t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
          t.namespace && (this.swapping = "translated" == t.type)
        }, this),
        "translate.owl.carousel": t.proxy(function (t) {
          t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
        }, this)
      }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, o.prototype.swap = function () {
      if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
        this.core.speed(0);
        var e, i = t.proxy(this.clear, this),
          s = this.core.$stage.children().eq(this.previous),
          o = this.core.$stage.children().eq(this.next),
          n = this.core.settings.animateIn,
          r = this.core.settings.animateOut;
        this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
          left: e + "px"
        }).addClass("animated owl-animated-out").addClass(r)), n && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(n))
      }
    }, o.prototype.clear = function (e) {
      t(e.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function () {
      var t, e;
      for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this._core = i, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
        }, this),
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.autoplay && this.play()
        }, this),
        "play.owl.autoplay": t.proxy(function (t, e, i) {
          t.namespace && this.play(e, i)
        }, this),
        "stop.owl.autoplay": t.proxy(function (t) {
          t.namespace && this.stop()
        }, this),
        "mouseover.owl.autoplay": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "mouseleave.owl.autoplay": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
        }, this),
        "touchstart.owl.core": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "touchend.owl.core": t.proxy(function () {
          this._core.settings.autoplayHoverPause && this.play()
        }, this)
      }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, e.Defaults, this._core.options)
    };
    o.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }, o.prototype._next = function (s) {
      this._call = e.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
    }, o.prototype.read = function () {
      return new Date().getTime() - this._time
    }, o.prototype.play = function (i, s) {
      var o;
      this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - o, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, s), i - o)
    }, o.prototype.stop = function () {
      this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, o.prototype.pause = function () {
      this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, o.prototype.destroy = function () {
      var t, e;
      for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
      for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function e(i) {
      this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      }, this._handlers = {
        "prepared.owl.carousel": t.proxy(function (e) {
          e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
        }, this),
        "added.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
        }, this),
        "remove.owl.carousel": t.proxy(function (t) {
          t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
        }, this),
        "changed.owl.carousel": t.proxy(function (t) {
          t.namespace && "position" == t.property.name && this.draw()
        }, this),
        "initialized.owl.carousel": t.proxy(function (t) {
          t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
        }, this),
        "refreshed.owl.carousel": t.proxy(function (t) {
          t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
        }, this)
      }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }, o.prototype.initialize = function () {
      var e, i = this._core.settings;
      for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
          this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
          var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
          e.preventDefault(), this.to(s, i.dotsSpeed)
        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function () {
      var t, e, i, s, o;
      for (t in o = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
      for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
      for (s in this.overides) this._core[s] = this._overrides[s];
      for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function () {
      var t, e, i, s = this._core.clones().length / 2,
        o = s + this._core.items().length,
        n = this._core.maximum(!0),
        r = this._core.settings,
        a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
      if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
        for (this._pages = [], t = s, e = 0, i = 0; t < o; t++) {
          if (e >= a || 0 === e) {
            if (this._pages.push({
                start: Math.min(n, t - s),
                end: t - s + a - 1
              }), Math.min(n, t - s) === n) break;
            e = 0, ++i
          }
          e += this._core.mergers(this._core.relative(t))
        }
    }, o.prototype.draw = function () {
      var e, i = this._core.settings,
        s = this._core.items().length <= i.items,
        o = this._core.relative(this._core.current()),
        n = i.loop || i.rewind;
      this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !n && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function (e) {
      var i = this._core.settings;
      e.page = {
        index: t.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
      }
    }, o.prototype.current = function () {
      var e = this._core.relative(this._core.current());
      return t.grep(this._pages, t.proxy(function (t, i) {
        return t.start <= e && t.end >= e
      }, this)).pop()
    }, o.prototype.getPosition = function (e) {
      var i, s, o = this._core.settings;
      return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function (e) {
      t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function (e) {
      t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function (e, i, s) {
      var o;
      !s && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    var o = function i(s) {
      this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": t.proxy(function (i) {
          i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
        }, this),
        "prepared.owl.carousel": t.proxy(function (e) {
          if (e.namespace) {
            var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
            i && (this._hashes[i] = e.content)
          }
        }, this),
        "changed.owl.carousel": t.proxy(function (i) {
          if (i.namespace && "position" === i.property.name) {
            var s = this._core.items(this._core.relative(this._core.current())),
              o = t.map(this._hashes, function (t, e) {
                return t === s ? e : null
              }).join();
            o && e.location.hash.slice(1) !== o && (e.location.hash = o)
          }
        }, this)
      }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
        var i = e.location.hash.substring(1),
          s = this._core.$stage.children(),
          o = this._hashes[i] && s.index(this._hashes[i]);
        void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
      }, this))
    };
    o.Defaults = {
      URLhashListener: !1
    }, o.prototype.destroy = function () {
      var i, s;
      for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
      for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
  }(window.Zepto || window.jQuery, window, document),
  function (t, e, i, s) {
    function o(e, i) {
      var s = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
        if (void 0 !== r[e]) return s = !i || e, !1
      }), s
    }

    function n(t) {
      return o(t, !0)
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      },
      h = {
        csstransforms: function () {
          return !!o("transform")
        },
        csstransforms3d: function () {
          return !!o("perspective")
        },
        csstransitions: function () {
          return !!o("transition")
        },
        cssanimations: function () {
          return !!o("animation")
        }
      };
    h.csstransitions() && (t.support.transition = new String(n("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h.cssanimations() && (t.support.animation = new String(n("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h.csstransforms() && (t.support.transform = new String(n("transform")), t.support.transform3d = h.csstransforms3d())
  }(window.Zepto || window.jQuery, window, document);
