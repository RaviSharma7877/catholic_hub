/* Header Menu Color and Scroll Top */
function bindOnScrollEvent() {
  $(document).off("scroll").on("scroll", function () {
    window.innerWidth > 991 && (
      addOrRemoveFillBg(),
      $(window).scrollTop() > 200 ? $(".scroll-top-wrapper").addClass("show") : $(".scroll-top-wrapper").removeClass("show")
    )
  })
}
function addOrRemoveFillBg() {
  $(window).scrollTop() > 0 ? (
    $(".navbar.fixed-top").removeClass("bg-transparent").addClass("bground-white")
  ) : (
    $(".navbar.fixed-top").removeClass("bground-white").addClass("bg-transparent")
  )
}
function fillbgForSmallScreens() {
  window.innerWidth < 991 && ($(".navbar.fixed-top").addClass("bground-white").removeClass("bg-transparent"))
}
function scrollToTop() {
  verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0,
    element = $("body"),
    offset = element.offset(),
    offsetTop = offset.top,
    $("html,body").animate({ scrollTop: offsetTop }, 500, "linear")
}
bindOnScrollEvent(),
  fillbgForSmallScreens(),
  $(window).resize(function () {
    bindOnScrollEvent(),
      fillbgForSmallScreens(),
      window.innerWidth > 991 && addOrRemoveFillBg()
  });


/* Hamburgers JQuery */
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length;l > e;e++)o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}



$('.country-picker').selectpicker();
$('.position--heading__drop').selectpicker();
$('.pop--select').selectpicker();


//home our advisors slider
$(document).ready(function () {
  var sliderContent = $(".why--carousel");
  var studentSlider = $(".student--slider");
  var stories = $(".stories--slider");
  var blog = $(".blog--body");
  var university = $(".university-carousel");
  var scholarship = $(".scholarship--slider");
  var allProgram = $(".all-programs");
  var DashboardProgram = $(".dashboard-program--slider");
  var shortlistRecom = $(".shortlist-program--slider");
  var DashboardUniversity = $(".dashboard-uslider");
  var advisorStudent = $(".advisor--student--slider");

  $(".btn-next").click(function () {
    sliderContent.trigger('next.owl.carousel');
    studentSlider.trigger('next.owl.carousel');
    blog.trigger('next.owl.carousel');
    stories.trigger('next.owl.carousel');
    university.trigger('next.owl.carousel');
    scholarship.trigger('next.owl.carousel');
    allProgram.trigger('next.owl.carousel');
    DashboardProgram.trigger('next.owl.carousel');
    shortlistRecom.trigger('next.owl.carousel');
    DashboardUniversity.trigger('next.owl.carousel');
    advisorStudent.trigger('next.owl.carousel');
  })
  $(".btn-prev").click(function () {
    sliderContent.trigger('prev.owl.carousel');
    studentSlider.trigger('prev.owl.carousel');
    blog.trigger('prev.owl.carousel');
    stories.trigger('prev.owl.carousel');
    university.trigger('prev.owl.carousel');
    scholarship.trigger('prev.owl.carousel');
    allProgram.trigger('prev.owl.carousel');
    DashboardProgram.trigger('prev.owl.carousel');
    shortlistRecom.trigger('prev.owl.carousel');
    DashboardUniversity.trigger('prev.owl.carousel');
    advisorStudent.trigger('prev.owl.carousel');
  })
  $('.card--video__slider').owlCarousel({
    margin: 40,
    items: 3,
	loop: false,
    nav: false,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false
      },
    }
  });
  $('.udHero').owlCarousel({
    margin: 8,
    items: 3,
    loop: true,
    center: true,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 12,
      },
      600: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false
      },
    }
  });
  $('.student--slider').owlCarousel({
    margin: 40,
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    // center: true,
    stagePadding: 124,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 3,
        nav: false
      },
    }
  });
  $('.advisor--student--slider').owlCarousel({
    margin: 24,
    items: 2.4,
    loop: true,
    // autoplay: true,
    autoplayTimeout: 2000,
    // center: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2,
        nav: false,
      },
      992: {
        items: 2.4,
        nav: false
      },
    }
  });
  $('.scholarship--slider').owlCarousel({
    margin: 40,
    items: 4.2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // center: true,
    stagePadding: 100,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 4.2,
        nav: false
      },
    }
  });
  $('.award').owlCarousel({
    margin: 20,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 124,
    responsive: {
      0: {
        items: 2.5,
        nav: false,
        stagePadding: 20,
      },
      600: {
        items: 6.5,
        nav: false
      },
    }
  });
  $('.why--carousel').owlCarousel({
    // autoplay: true,
    // autoplayTimeout: 2000,
    items: 1,
    nav: false,
    loop: true,
    animateOut: 'fadeOut',
    dots: false,
  });
  $('.cexploreSlider').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 124,
    // center: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        stagePadding: 20,
        margin: 16,
      },
      600: {
        items: 2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 5,
        // stagePadding: 170,
      }
    }
  });
  $('.dexploreSlider').owlCarousel({
    margin: 20,
    loop: false,
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 124,
    // center: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        stagePadding: 20,
        margin: 16,
      },
      600: {
        items: 2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 5,
        // stagePadding: 170,
      }
    }
  });
  $('.programSlider').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 124,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        stagePadding: 20,
        margin: 16,
      },
      600: {
        items: 2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 3.9,
        // stagePadding: 170,
      }
    }
  });
  $('.blog--body').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    // center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        //stagePadding: 20,
      },
      600: {
        items: 1,
        nav: false,
        //stagePadding: 35,
      },
      992: {
        items: 3,
        //stagePadding: 170,
      }
    }
  });
  $('.hero--slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 12000,
    items: 1,
    animateOut: 'animate__animated animate__fadeOut',
    animateIn: 'animate__animated animate__fadeIn',
    dots: false,
    // autoHeight: true,
  });
  $('.stories--slider').owlCarousel({
    margin: 40,
    items: 1.2,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // center: true,
    stagePadding: 124,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 1.2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 1.2,
        nav: false
      },
    }
  });
  $('.university-carousel').owlCarousel({
    margin: 40,
    items: 3,
    loop: false,
    autoplay: true,
    autoplayTimeout: 2000,
    // center: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 20,
      },
      600: {
        items: 1,
        nav: false,
      },
      992: {
        items: 3,
        nav: false
      },
    }
  });
  $('.program--slider').owlCarousel({
    margin: 40,
    items: 3,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2.2,
        nav: false,
      },
      992: {
        items: 2.2,
        nav: false
      },
      1025: {
        items: 3,
        nav: false
      }
    }
  });
  $('.dashboard-program--slider').owlCarousel({
    margin: 16,
    items: 3,
    loop: true,
    // autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2.2,
        nav: false,
      },
      992: {
        items: 2.2,
        nav: false
      },
      1025: {
        items: 2.5,
        nav: false
      }
    }
  });
  $('.shortlist-program--slider').owlCarousel({
    margin: 16,
    items: 3,
    loop: true,
    // autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2.2,
        nav: false,
      },
      992: {
        items: 2.2,
        nav: false
      },
      1025: {
        items: 4,
        nav: false
      }
    }
  });
  $('.dashboard-uslider').owlCarousel({
    margin: 16,
    items: 3,
    loop: true,
    // autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
      },
      600: {
        items: 2.2,
        nav: false,
      },
      992: {
        items: 2.2,
        nav: false
      },
      1025: {
        items: 2.5,
        nav: false
      }
    }
  });
  $('.all-programs').owlCarousel({
    margin: 40,
    items: 3,
    dots: false,
    nav: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1.2,
        nav: false,
        margin: 20,
        stagePadding: 20,
      },
      600: {
        items: 2.2,
        nav: false,
        stagePadding: 35,
      },
      992: {
        items: 2.2,
        nav: false
      },
      1025: {
        items: 4.2,
        nav: false
      }
    }
  });
});

//open image on click of accordion
$(document).ready(function () {
  // Hide all panels
  let panels = $("#services__accordion > .accordion .accordion__body").hide()

  // Hide all accordion images
  let images = $("#accordion__img > img").hide();

  // Show first panel at start
  panels.first().show();

  // Show first accordion image at start
  images.first().show();

  // On click of a panel title

  $("#services__accordion .accordion").click(function () {
    // The panel is not the H3, but its parent.
    let panel = $(this),
      // The panel has an attribute that will tell me which image
      //  I want to manipulate. This is because I've given the
      //  images ID's to match. Kind of brittle, but it will work.
      tabName = panel.attr("tab-name"),
      image = $("#" + tabName + "-img");

    // Slide Up all other panels
    panels.slideUp();
    $("#services__accordion .accordion").removeClass("active");
    panel.addClass("active");
    images.slideUp();

    // Slide Down target panel, and target image.
    panel.find(".accordion__body").slideDown();
    image.slideDown();

    return false;
  });
});

//counter
$(document).ready(function () {
  const counters = document.querySelectorAll('.counter');
  const speed = 10;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

/* function logo() {
  var $img = $(".reach--logos__item");
  var $current = $img.find('.active');
  if (!$current.length) {
    var $next = $img.find('img:first');
  } else {
    var $next = $current.next();
    $current.removeClass('active');
  }
  if (!$next.length) {
    $next = $img.find('img:first');
  }

  $next.addClass('active');
} */

function logo() {
	var $img = $(".reach--logos__item");
	var $current = $img.find('.active');
	if (!$current.length) {
		var $next = $img.find('a:first');
	} else {
		var $next = $current.next();
		$current.removeClass('active');
	}
	if (!$next.length) {
		$next = $img.find('a:first');
	}

	$next.addClass('active');
}
$(function () {
  setInterval(function () { logo(); }, 5000);
});

//close thankyou
$(".close").click(function () {
  $("#thank").removeClass('show');
});
$("#submit").click(function () {
  $("#thank").addClass('show');
});

$(document).on('click', '.leadModal', function () {
  
	$('#search_eligible')[0].reset();
	$('#univer_id').val('');
	$('#progrm_id').val('');
	$('#cnt_id').val('');
	$('#requestSendModal').modal('hide');
	$('#form_type').val('search_eligible');
	$('#search-eligibility #country_app').val('');
	$('#search-eligibility #country_app').attr('disabled',true);
	$('#search-eligibility #country_app').selectpicker('refresh');
	$("#search-eligibility").removeClass('show');
	$("#search-eligibility .wizard li").removeClass('completed');
	$("#search-eligibility #step4").remove();
	$("#search-eligibility").modal('hide');
	$("#leadModal").addClass('show');
	//$(".explore").remove();
	$("body").removeClass('overflow');
});
// whatappsuccess
$(".social-submit").click(function () {
  if (this.id == 'whatsapp') {
	  $('form .with-errors').html('');
    $('#whatAppSuccessModal').toggle();
    $('#whatAppSuccessModal').addClass('show');
    $('#whatsAppmodal').removeClass('show');
	
  }
  if (this.id == 'callback') {
	  $('form .with-errors').html('');
    $('#callSuccessModal').toggle();
    $('#callSuccessModal').addClass('show');
    $('#phoneModal').removeClass('show');
  }
  if (this.id == 'zoomRequest') {
   
	$('form .with-errors').html('');
	var branchId = $('#zoomRequest').attr('bh-id');
	//$('#zoomRequestModal').modal('show');
	$('#zoomModal').modal('hide');
	$('#zoomRequestModal').modal('show');
    $('#cnt_zoom_branch_id').val(branchId);
  }
  if (this.id == 'ZoomsendRequest') {
    /* $('#ZoomSuccessModal').toggle();
    $('#ZoomSuccessModal').addClass('show');
    $('#zoomScheduleModal').removeClass('show'); */
	
  }
  if (this.id == 'zoomSchedule') {
	  
	var branchId = $('#zoomRequest').attr('bh-id');
	$('form .with-errors').html('');
	$('#appointment_form #time').val('');
    $('#zoomScheduleModal #appointment_form')[0].reset();
	$('#zoomModal').modal('hide');
    $('#zoomScheduleModal').modal('show');
	$('#cnt_schd_branch_id').val(branchId);
  }
  $('#navbar_explore').css('padding-right','0px');
  $('body').css('padding-right','0px');
});

// success close
$(".success-close").click(function () {
  $('form .with-errors').html('');
  $('.modal').hide();
  $('.modal').removeClass('show');
  $("body").removeClass('modal-open');
  $('body').css('padding-right','0px');
  $('.modal-backdrop').remove();
});


//mega menu
$("#explore").click(function () {
	
	if($("#menu_explore_container").length > 0 )
	{
		$("#menu_explore_container").remove();
		$("body").removeClass('overflow');
	} else {
	jQuery.ajax({
		url: "/programsexplore",
		method: 'get',
		success: function(result){
		// console.log(result);
		 $('#navbar_explore').after(result);
		 $(".explore").addClass('show');
		 $("body").addClass('overflow');
		 $('.country-picker').selectpicker();
		 $('#menucsrftoken').val($('meta[name="_token"]').attr('content'));
		 topcountry('','explorer');	
		}
	});
	}
});
// $('#close_explore').click(function() {
	// alert('hi');
// });
$(document).on('click', '.close_explore', function () {
    //console.log('clicked!');
	//$(".explore").removeClass('show');
	$("#menu_explore_container").remove(); 
	//$(".explore").remove();
	$("body").removeClass('overflow');
});
$(".backdrop").click(function () {
  $(".explore").removeClass('show');
  //$(".explore").remove();
  $("body").removeClass('overflow');
});
$(".mega--close").click(function () {
	
  $(".explore").removeClass('show');
  //$(".explore").remove();
  $("body").removeClass('overflow');
});

var megaChar = (".mega--character a");
$(document).on('click', megaChar, function () {
  $(megaChar).removeClass('active');
  $(this).addClass('active');
})

// mobile filter sidebar
// $('#mobileFilter').click(function () {
  // $(".filter--mobile").addClass('show');
  // $("body").addClass('overflow');
// });
function mobileFilter(){
  $(".filter--mobile").addClass('show');
  $("body").addClass('overflow');
}
$(".filter--mobile .mega--close").click(function () {
  $(".filter--mobile").removeClass('show');
  $("body").removeClass('overflow');
});

//filter sidebar student shortlist
$('.dashboard--filter-btn').click(function () {
  $(".dashboard--filter").addClass('show');
  $("body").addClass('overflow');
});
$("#cancel").click(function () {
  $(".dashboard--filter").removeClass('show');
  $("body").removeClass('overflow');
});

//check eligibility

$("input").change(function () {
  if ($(this).val() == "ilets") {
    $("#ilets").show();
  } else {
    $("#ilets").hide();
  }
  if ($(this).val() == "toefl") {
    $("#toefl").show();
  } else {
    $("#toefl").hide();
  }
  if ($(this).val() == "pte") {
    $("#pte").show();
  } else {
    $("#pte").hide();
  }
  if ($(this).val() == "duolingo") {
    $("#duolingo").show();
  } else {
    $("#duolingo").hide();
  }
  if ($(this).val() == "gmat") {
    $("#gmat").show();
  } else {
    $("#gmat").hide();
  }
  if ($(this).val() == "gre") {
    $("#gre").show();
  } else {
    $("#gre").hide();
  }
  if ($(this).val() == "sat") {
    $("#sat").show();
  } else {
    $("#sat").hide();
  }
});

/* 13032023 Code Added */
$(document).ready(function () {
  var wizard = (".wizard li");
  var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
  var wizardActive = (".wizard li.active");
  $(".singupscreen .form .arrow--button__nextBtn").click(function () {
    
	var curStep = $(this).closest(".stepper--content"),
		curStepBtn = curStep.attr("id"),
		curInputs = curStep.find("input[type='text'],input[type='url'],select"),
		isValid = true;
		$(".custom--input").removeClass("is-invalid");
		console.log(curStepBtn);
		if(curStepBtn == "step1") {
			curInputs = curStep.find("input[required='required'],select");
			
			var errors = "Please Fill in:";
			for(var i=0; i<curInputs.length; i++){
				var inputId = $(curInputs[i]).attr('id');
				var inputiddiv="#"+inputId;
				var errorMsg1="";
				$(inputiddiv).parent().parent().find('.invalid-message').remove();
								
				if(inputId == 'signup_phone'){
					var mobile = $('#signup_phone').val();
					var regp = /^\d*$/;
					if(mobile != '' && mobile != undefined && mobile != 'undefined'){
						if(mobile.trim() != '' && mobile.trim() == '0000000000' ){
							
							var errorMsg1 = 'Please enter valid mobile number.';						
						}
						if(mobile.trim() != '' && mobile.length < 10 || mobile.trim() != '' && mobile.length > 10 ){
							
							var errorMsg1 = 'Please enter 10 digit phone number.';						
						}
						if(mobile.trim() != '' && !regp.test(mobile) ){
							
							var errorMsg1 = 'Please enter only number.';						
						}
					}else{
						var errorMsg1 = 'Please enter Mobile number.';						
					}
					
				}
				
				if(inputId == 'signup_email'){
					var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
					var email = $('#signup_email').val();
					if(email != '' && email != undefined && email != 'undefined'){
						if (!testEmail.test(email)){			
							var errorMsg1 = 'Please enter valid email address.';						
						}
					}else{
						var errorMsg1 = 'Please enter Email.';						
					}
				}
				
				if(inputId == 'n_pass'){
					var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
					var pass = $('#n_pass').val();
					
					if(pass != '' && pass != undefined && pass != 'undefined'){
						if(!pattern.test(pass)) 
						{
							var errorMsg1 = 'Please enter valid password.';	
						}
					}else{
						var errorMsg1 = 'Please enter password.';						
					}
				}
				
				if(inputId == 'c_pass'){
					var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
					var cpass = $('#c_pass').val();
					var pass = $('#n_pass').val();
					
					if(cpass != '' && cpass != undefined && cpass != 'undefined'){
						if(pass != '' && pass != undefined && pass != 'undefined'){
							if(!pattern.test(pass)) 
							{
								var errorMsg1 = 'Please enter valid password.';	
							}
							
							if(cpass !== pass){
								var errorMsg1 = 'Please enter same as create password.';
							}
						}else{
							var errorMsg1 = 'Please enter create password .';	
						}
							
					}else{
						var errorMsg1 = 'Please enter confirm password.';						
					}
					
				}
				
				
				
				if(errorMsg1 != undefined && errorMsg1 != '' && errorMsg1 != 'undefined' )
				{
					isValid = false;
					$(curInputs[i]).closest(".custom--input").addClass("is-invalid");
					$(inputiddiv).parent().parent().append('<p class="text--regular text--red invalid-message">'+errorMsg1+'</p>');
				}
			}
			
			if(isValid == true) {
				
				var formData = $('#signup-form').serialize();
				$('.signuperror').remove();
					$.ajaxSetup({
						headers: {
						'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
						}
					});
					$.ajax({
						type: "POST",
						url: '/signup',
						data:  formData,
						async: false,
						success: function(html){
							var res = html.split('~~!!~~');
							if(res[0] == 1 || res[0] == '1'){
								
								var semail = $('#signup-form #signup_email').val();
								var phone = $('#signup-form #signup_phone').val();
								
								$('#signupotp #otpmobile').val(phone);
								$('#signupotp #otpemail').val(semail);
								
								var mobile_masking = phone.replace(phone.substring(1,5),"****");
								var email_masking = semail.replace(semail.substring(1,6),"***");
								$('#signupotp .otpnum').html(mobile_masking);
								$('#signupotp .otpemail').html(email_masking);
								$('.sign #step1').removeClass('active');
								$('.sign #step2').addClass('active');

								$(wizardActive).next().addClass('active');
								$(wizardActive).prev().removeClass('active');
								$(wizardActive).prev().addClass('completed');

								$(userWizard).next().addClass('active');
								$(userWizard).prev().removeClass('active');
								
							}else if(res[0] == 2 || res[0] == '2'){
								$(".submit").append('<p class="text--regular text--red invalid-message signuperror">Email/Mobile already exist.Please try again with different credentials.</p>');
							}else if(res[0] == 3 || res[0] == '3'){
								if(res[1] != '')
								{
									var semail = $('#signup-form #signup_email').val();
									var phone = $('#signup-form #signup_phone').val();
									var mobile_masking = phone.replace(phone.substring(1,5),"****");
									var email_masking = '';
									if(res[1] == 'email'){										
										var email_masking = semail.replace(semail.substring(1,6),"***");
										$(".submit").append('<p class="text--regular text--red invalid-message signuperror">'+email_masking+' already exist.Please change according.</p>');
									}
									if(res[1] == 'telephone'){										
										var mobile_masking = phone.replace(phone.substring(1,5),"****");
										$(".submit").append('<p class="text--regular text--red invalid-message signuperror">'+mobile_masking+' already exist.Please change according.</p>'); 
									}
								}	
								
							}else{
								$(".submit").append('<p class="text--regular text--red invalid-message signuperror">Sorry, Something went wrong.Please try again after sometime.</p>');
							}				
						}
					});
					
			}
			
		}
		
		if(curStepBtn == "step2") {
			
			$('#signupotp #otpsenderro').html('');
			
			curInputs = $('#step2').find(".otp-input");
			console.log(curInputs.length);
			for(var i=0; i<curInputs.length; i++){
				if (!curInputs[i].validity.valid){
					  isValid = false;
					  $(curInputs[i]).closest(".custom--input").addClass("is-invalid");
					  $('#signupotp #otpsenderro').html('Please enter required field');
					  $('#signupotp #otpsenderro').removeClass('hidden');
				}
			}
			
	
			if(isValid == true) {
				
				var formData = $('#signupotp').serialize();
				
				$.ajaxSetup({
					headers: {
					'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
					}
				});
				$.ajax({
					url: "/signup-otp-form",
					type: "POST",
					data: formData,
					async: false,
					success: function( response ) {
						
						if(response == 1)
						{
							window.location = "/student/dashboard";
						}
						else if(response == 2) { 
							$('#signupotp #otpsenderro').html('Invalid http request');
							$('#signupotp #otpsenderro').removeClass('hidden');
						}
						else
						{
							$('#signupotp #otpsenderro').html('Invalid OTP');
							$('#signupotp #otpsenderro').removeClass('hidden');
						}		
				
					}
				});
					
			}
			
		}
		

  });
  $(".singupscreen .form .btn-prev").click(function () {
    $('.stepper--content').removeClass('active');
    $(this).closest('.stepper--content').prev().addClass('active');

    $(wizardActive).prev().addClass('active');
    $(wizardActive).prev().addClass('completed');
    $(wizardActive).removeClass('completed');
    $(wizardActive).next().removeClass('active');

    $(userWizard).prev().addClass('active');
    $(userWizard).next().removeClass('active');
  });
  
  $("#loginscreen .form .btn-prev").click(function () {
    $('.stepper--content').removeClass('active');
    $(this).closest('.stepper--content').prev().addClass('active');

    $(wizardActive).prev().addClass('active');
    $(wizardActive).prev().addClass('completed');
    $(wizardActive).removeClass('completed');
    $(wizardActive).next().removeClass('active');

    $(userWizard).prev().addClass('active');
    $(userWizard).next().removeClass('active');
  });
});

$('#signup_email,#login_email').on("keyup keypress blur",function(){
	$(this).closest(".custom--input").removeClass("is-invalid");
	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	var email = $(this).val();
	if(email != '' && email != undefined && email != 'undefined'){
		if (!testEmail.test(email)){			
			var errorMsg1 = 'Please enter valid email address.';						
		}
	}else{
		var errorMsg1 = 'Please enter Email.';						
	}
	
	$(this).parent().parent().find('.invalid-message').remove();
	if(errorMsg1 != undefined && errorMsg1 != '' && errorMsg1 != 'undefined' ){
		
		$(this).closest(".custom--input").addClass("is-invalid");
		$(this).parent().parent().append('<p class="text--regular text--red invalid-message">'+errorMsg1+'</p>');
	}

});
$('#signup_phone,#gen_phone').on("keyup keypress blur",function(){
	$(this).closest(".custom--input").removeClass("is-invalid");
	var mobile = $(this).val();
	var regp = /^\d*$/;
	if(mobile != '' && mobile != undefined && mobile != 'undefined'){
		if(mobile.trim() != '' && mobile.trim() == '0000000000' ){
			
			var errorMsg1 = 'Please enter valid mobile number.';						
		}
		if(mobile.trim() != '' && mobile.length < 10 || mobile.trim() != '' && mobile.length > 10 ){
			
			var errorMsg1 = 'Please enter 10 digit phone number.';						
		}
		if(mobile.trim() != '' && !regp.test(mobile) ){
			
			var errorMsg1 = 'Please enter only number.';						
		}
	}else{
		var errorMsg1 = 'Please enter Mobile number.';	
	}
	$(this).parent().parent().find('.invalid-message').remove();
	
	if(errorMsg1 != undefined && errorMsg1 != '' && errorMsg1 != 'undefined' ){
		
		$(this).closest(".custom--input").addClass("is-invalid");
		$(this).parent().parent().append('<p class="text--regular text--red invalid-message">'+errorMsg1+'</p>');
	}

});

$('#n_pass,#c_pass').on("keyup keypress blur",function(){
	
	$(this).closest(".custom--input").removeClass("is-invalid");
	var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
	if($(this).attr('id') == 'n_pass'){
		var pass = $(this).val();
		
		if(pass != '' && pass != undefined && pass != 'undefined'){
			if(!pattern.test(pass)) 
			{
				var errorMsg1 = 'Please enter valid password.';	
			}
		}else{
			var errorMsg1 = 'Please enter password.';						
		}
	}
	
	if($(this).attr('id') == 'c_pass'){
		var cpass = $('#c_pass').val();
		var pass = $('#n_pass').val();
		
		if(cpass != '' && cpass != undefined && cpass != 'undefined'){
			if(pass != '' && pass != undefined && pass != 'undefined'){
				if(!pattern.test(pass)) 
				{
					var errorMsg1 = 'Please enter valid password.';	
				}
				
				if(cpass !== pass){
					var errorMsg1 = 'Please enter same as create password.';
				}
			}else{
				var errorMsg1 = 'Please enter create password .';	
			}
				
		}else{
			var errorMsg1 = 'Please enter confirm password.';						
		}
	}
	
	$(this).parent().parent().find('.invalid-message').remove();
	
	if(errorMsg1 != undefined && errorMsg1 != '' && errorMsg1 != 'undefined' ){
		
		$(this).closest(".custom--input").addClass("is-invalid");
		$(this).parent().parent().append('<p class="text--regular text--red invalid-message">'+errorMsg1+'</p>');
	}

});
$('#signup-form .togglePassword').on("click focus",function(){
	
    // toggle the type attribute
	const type = $(this).closest(".custom--input").children('input').attr("type") === "password" ? "text" : "password";
	$(this).closest(".custom--input").children('input').attr("type", type);
	
	// toggle the icon
	if(type === "password" ){
		$(this).attr("src", "/assets/images/eye-show-icon.svg");
	}else{
		$(this).attr("src", "/assets/images/eye-hide-icon.svg");
	}
	//this.classList.toggle("bi-eye");
       

});





/* 13032023 Code Added */





$("#explore").click(function () {
  $(".hamburger").removeClass("is-active");
  $(".navbar-collapse").removeClass("show");
});

//mega accordion
/*$(document).ready(function () {
  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 992) {
      var allPanels = $('.mega--list').hide();

      $('.mega--title').click(function () {
        $(this).next().slideToggle();
        // return false;
      });
      $('.mega--card--header .mega--title').click(function () {
        $(this).parent().next().slideToggle();
        $(this).parent().toggleClass('active');
        // return false;
      });
    }
  }
});*/

//circular progressbar
;
(function ($) {
  $.fn.loading = function () {
    var DEFAULTS = {
      backgroundColor: '#EFF1F2',
      progressColor: '#1DBD68',
      percent: 0,
      price: '',
      duration: 2000,
    };

    $(this).each(function () {
      var $target = $(this);

      var opts = {
        backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
        progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
        percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
        price: $target.data('price') ? $target.data('price') : DEFAULTS.price,
        duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration,
      };
      // console.log(opts.number);

      $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class="rotate-only"><span></span></div>');
      $target.find('.background').css('background-color', opts.backgroundColor);
      $target.find('.left').css('background-color', opts.backgroundColor);
      $target.find('.rotate').css('background-color', opts.progressColor);
      $target.find('.right').css('background-color', opts.progressColor);

      var $rotate = $target.find('.rotate');
      var $rotateOnly = $target.find('.rotate-only');
      setTimeout(function () {
        $rotate.css({
          'transition': 'transform ' + opts.duration + 'ms linear',
          'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
        });
        $rotateOnly.css({
          'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
        });
      }, 1);
      if (opts.percent === 100) {
        $(this).parent().addClass('completed');
        $target.find('.right').css({
          display: 'none'
        });
        $target.find('.left').css({
          display: 'none'
        });
        $target.find('.rotate').css({
          display: 'none'
        });
      }
      if (opts.percent > 50) {
        var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
        var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
        $target.find('.right').css({
          animation: animationRight,
          opacity: 1
        });
        $target.find('.left').css({
          animation: animationLeft,
          opacity: 0
        });
      }
    });
  }
})(jQuery);

//profile popup

$('#sendRequest').click(function () {
  $('#requestSendModal').toggle();
  $('#requestSendModal').addClass('show');
  $('#requestModal').removeClass('show');
});

$("#requestSendClose").click(function () {
  $('#requestSendModal').toggle();
  $('#requestSendModal').removeClass('show');
  $("body").removeClass('modal-open');
  $(".modal-backdrop").removeClass('show');
  
  location.reload();
});

$(document).on('click', '.leadapplyModal', function () {
   
	$("#requestSendModal").modal('hide');
	$("#requestapplySendModal").addClass('show');
	$("body").removeClass('overflow');
	
});

$(".requestapplySendClose").click(function () {
  $('#requestapplySendModal').toggle();
  $('#requestapplySendModal').removeClass('show');
  $("body").removeClass('modal-open');
  $(".modal-backdrop").removeClass('show');
  
  location.reload();
});


//program searchbar
$(".searchBtn").click(function () {
  $(".position--heading__right").hide();
  $(".searchAction").show();
});
$(".searchClose").click(function () {
  $(".position--heading__right").show();
  $(".searchAction").hide();
});


function cntry_change(c_id)
{
	if(c_id == 6){
		getNzfLevel1(c_id);
	}
	cntry_load_uni(c_id);
	cntry_load_prov(c_id);
	cntry_load_tution(c_id);
	cntry_level_filter(c_id);  
}
function uni_cntry_change(c_id)
{
	if(c_id == 6){
		getNzfLevel1(c_id);
	}
	cntry_load_uni(c_id);
	cntry_load_prov(c_id);
	cntry_load_tution(c_id);
	uni_cntry_level_filter(c_id);  
}

function cntry_load_uni(cid) 
{	
	$.ajax({
		type: "POST",
		url: '/countriesuniversity',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cid},
		async: false,
		success: function(html){
			$("#university_filter").html(html);
			$("#university_filter").multiselect('rebuild');
			$("#university_filtermobile").html(html); 
			$("#university_filtermobile").multiselect('rebuild');
		}
	});
}
function cntry_load_prov(cid)
{
	$.ajax({
		type: "POST",
		url: '/countriesprovince',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cid},
		async: false,
		success: function(html){
			$("#province_filter").html(html);
			$("#province_filter").multiselect('rebuild');
			$("#province_filtermobile").html(html);
			$("#province_filtermobile").multiselect('rebuild');
		}
	});
}
function cntry_load_tution(cid)
{
	$.ajax({
		type: "POST",
		url: '/countriestutionfee',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cid},
		async: false,
		success: function(html){
			//$("#tuition_fee_filter").html(html);
			//$("#tuition_fee_filter").multiselect('rebuild');
			//$("#tuition_fee_filtermobile").html(html);
			//$("#tuition_fee_filtermobile").multiselect('rebuild');
			$("#tf_pg_filter").html(html);
			$("#tf_pg_filter").multiselect('rebuild');
			$("#tf_ug_filter").html(html);
			$("#tf_ug_filter").multiselect('rebuild');
			$("#tf_pg_filtermobile").html(html);
			$("#tf_pg_filtermobile").multiselect('rebuild');
			$("#tf_ug_filtermobile").html(html);
			$("#tf_ug_filtermobile").multiselect('rebuild');
		}
	});
}
function cntry_level_filter(cid)
{
	$.ajax({
		type: "POST",
		url: '/countrieslevel',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cid},
		async: false,
		success: function(html){
			$("#level_filter").html(html);
			$("#level_filter").multiselect('rebuild');
			$("#level_filtermobile").html(html);
			$("#level_filtermobile").multiselect('rebuild');
		}
	});
}
function uni_cntry_level_filter(cid)
{
	$.ajax({
		type: "POST",
		url: '/countrieslevel',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cid},
		async: false,
		success: function(html){
			$("#level_filter").html('<option value="">Select Level</option>'+html);
			$("#level_filter").multiselect('rebuild');
			$("#level_filtermobile").html('<option value="">Select Level</option>'+html);
			$("#level_filtermobile").multiselect('rebuild');
		}
	});
}

function getNzfLevel1(c_id)
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/nzflevels",
		type: "POST",
		data: {c_id:c_id},
		success: function( response ) {
			console.log(response);
			if(response != '' && response != 'undefined' && response != undefined){
				$('.nzf_level_filter').css('display','block');
				$("#nzf_level_filter").html(response);
				$("#nzf_level_filtermobile").html(response); 
				/* <?php 
				if(isset($_REQUEST['nzf_level']) && !empty($_REQUEST['nzf_level']))
				{
					echo "$('#nzf_level_filter').val(".$_REQUEST['nzf_level'].");";
					echo "$('#nzf_level_filtermobile').val(".$_REQUEST['nzf_level'].");";
				}
				
				?> */
				$("#nzf_level_filter").multiselect('rebuild');
				$("#nzf_level_filtermobile").multiselect('rebuild');
				
			}else{
				$('.nzf_level_filter').css('display','none');
				$('.nzf_level_filter').val('');
			}
		}
	});
}

function ajax_load_subject() 
{
	var favorite7 = [];
    $.each($("#discipline_filter option:selected"), function(){            
    	favorite7.push($(this).val());
    });
	var disc_list = favorite7.join(",");
	$.ajax({
		type: "POST",
		url: '/loadsubjects',
		data: {"_token": $('meta[name="_token"]').attr('content'),'disc': disc_list},
		async: false,
		success: function(html){
			$("#subject_filter").html(html);
			$("#subject_filter").multiselect('rebuild');
		}
	});
}

function ajax_load_province_university() 
{
	var c_id = $('#country_filter').val(); 
	var favorite7 = [];
    $.each($("#province_filter option:selected"), function(){            
    	favorite7.push($(this).val());
    });
	var prov_list = favorite7.join(",");
	$.ajax({
		type: "POST",
		url: '/loadprovuniversity',
		data: {"_token": $('meta[name="_token"]').attr('content'),'province': prov_list,'c_id':c_id},
		async: false,
		success: function(html){
			$("#university_filter").html(html);
			$("#university_filter").multiselect('rebuild');
		}
	});
}
$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
$(document).on('click', '.check-eligibility', function () {
	$('#search_eligible')[0].reset();
	$('#search-eligibility #country_app').attr('disabled',false);
	$('#search-eligibility .pop--select').selectpicker('refresh');
	$('#search-eligibility #show_grade_average_container').html(''); 
	
	$('#search-eligibility .stepper #preference_step').css('display','block');
	$('#search-eligibility form #step2').css('display','');
	
	var prgm_id=$(this).attr('data-prgm_id');
	var u_id=$(this).attr('data-u_id');
	var c_id=$(this).attr('data-c_id');
	$('#searchcsrftoken').val($('meta[name="_token"]').attr('content'));
	
	if(prgm_id !='' && prgm_id != undefined && u_id !='' && u_id != undefined){
		$('#univer_id').val(u_id);
		$('#progrm_id').val(prgm_id);
		$('#cnt_id').val(c_id);
		if($(this).attr('data-page') != '' && $(this).attr('data-page') != 'undefined' && $(this).attr('data-page') != undefined ){
			if($(this).attr('data-page') == 'program-detail'){
				setTimeout(function () {
					$('#search-eligibility .pop .stepper .wizard li:nth-child(1)').addClass('fullwidth');
				}, 1500);
				$('#form_type').val('search_program_detail_eleigible');
				$('#search-eligibility .stepper #preference_step').css('display','none');
				$('#search-eligibility .stepper #final_step .number').html('2');
				$('#search-eligibility form #step2').css('display','none');
			}else if($(this).attr('data-page') == 'other-program-detail'){
				setTimeout(function () {
					$('#search-eligibility .pop .stepper .wizard li:nth-child(1)').addClass('fullwidth');
				}, 1500);
				$('#form_type').val('search_other_program_detail_eleigible');
				$('#search-eligibility .stepper #preference_step').css('display','none');
				$('#search-eligibility .stepper #final_step .number').html('2');
				$('#search-eligibility form #step2').css('display','none');
			}else if($(this).attr('data-page') == 'institute-program-detail'){
				setTimeout(function () {
					$('#search-eligibility .pop .stepper .wizard li:nth-child(1)').addClass('fullwidth');
				}, 1500);
				$('#form_type').val('search_institute_program_detail_eleigible');
				$('#search-eligibility .stepper #preference_step').css('display','none');
				$('#search-eligibility .stepper #final_step .number').html('2');
				$('#search-eligibility form #step2').css('display','none');
			}
		}else{
			setTimeout(function () {
					$('#search-eligibility .pop .stepper .wizard li:nth-child(1)').addClass('fullwidth');
				}, 1500);
				$('#form_type').val('search_program_detail_eleigible');
				$('#search-eligibility .stepper #preference_step').css('display','none');
				$('#search-eligibility .stepper #final_step .number').html('2');
				$('#search-eligibility form #step2').css('display','none');
		}
		
		
	}else if(prgm_id !='' && prgm_id != 'undefined'){
		
		$('#progrm_id').val(prgm_id);
	}else if(u_id !='' && u_id != 'undefined'){
		$('#univer_id').val(u_id);
	}

	$('#search-eligibility').modal('show');
	$.ajax({
		type: "POST",
		url: '/geteducountry',
		async: false,
		success: function(html){
			$("#search-eligibility #country_edu").html('');
			$("#search-eligibility #country_edu").html('<option value="">Select Country of Education</option>');
			$("#search-eligibility #country_edu").append(html);
			$('#search-eligibility #country_edu').selectpicker('refresh');
			
		}
	});
	$.ajax({
		type: "POST",
		url: '/getqualificationlevel',
		async: false,
		success: function(html){
			$("#search-eligibility #highestqual").html('');
			$("#search-eligibility #highestqual").html('<option value="">Select Qualification</option>');
			$("#search-eligibility #highestqual").append(html);
			$('#search-eligibility #highestqual').selectpicker('refresh');
			
		}
	});  
	var min_edu_id = $('#search-eligibility #highestqual').val();
	var highest_qual_name = $('#highestqual option:selected').text();
	$('#highest_qual_name').val(highest_qual_name);
	var edu_country_id = $('#search-eligibility #country_edu').val();
	
	if(min_edu_id !='undefined' && min_edu_id != undefined && edu_country_id !='undefined' && edu_country_id != undefined && edu_country_id !='' && min_edu_id != ''){
		var html1 = load_grade_scheme(edu_country_id,min_edu_id);
		if(html1 !='' && html1 != undefined){
			$("#search-eligibility #grade_scheme").html('<option value="">Select Grade Scheme</option>');
			$("#search-eligibility #grade_scheme").append(html1);
			$('#search-eligibility #grade_scheme').selectpicker('refresh'); 
		}
	}
	
	var grade_scheme = $('#search-eligibility #grade_scheme').val();
	if(grade_scheme !='undefined' && grade_scheme != undefined && grade_scheme != ''){
		var html1 = load_grade_scale_div(grade_scheme);
		if(html1 !='' && html1 != undefined){
			$("#search-eligibility #grade_scale_div").html('');
			$("#search-eligibility #grade_scale_div").append(html1);
			if(html1.indexOf('<select') != -1){
				$('#grade_scale_div #grading_score').selectpicker('refresh'); 
				load_grade_equivalent();
			}
			/* var gscore = $('#grading_score').val();
			if(grade_scheme == 181 && grade_scheme == '181'){
				var average_grade = gscore/10;
				$('#grading_score').val(average_grade);
			}
			if(gscore != '' && gscore != 'undefined' && gscore != undefined ){
				$("#search-eligibility #average_grade").val(gscore);
			} */
			
			var gscore = $('#grading_score').val();
			console.log(gscore+'gscore');
			console.log(grade_scheme);
			$("#search-eligibility #average_grade").val(gscore);
			if(grade_scheme == 181 && grade_scheme == '181'){
				var average_grade = gscore/10;
				$('#grading_score').val(average_grade);
				if(gscore != '' && gscore != 'undefined' && gscore != undefined ){
					$("#search-eligibility #average_grade").val(gscore);
				}
			}
			
			if(grade_scheme == 10 || grade_scheme == '10') {
				var av =$("#search-eligibility #average_grade").val();
				var gs =$("#grading_score option:selected").text();
				$("#search-eligibility #other_scale").css('display', 'block');
				$("#search-eligibility #other_grade_input").attr('required', 'required');
				var sc ='';
				if(gs != '' && gs != undefined && gs != 'undefined' && av != '' && av != undefined && av != 'undefined'){
					
					var sc = (av*gs)/100;
					if(sc < 10){
						sc = Math.round(sc);
					}
					console.log(sc);
					$("#search-eligibility #other_grade_input").val(sc);
				}
			} 
			
		}
	}
	
	$.ajax({
		type: "POST",
		url: '/loadactivecountries',
		async: false,
		success: function(html){
			$("#search-eligibility #country_app").html('');
			$("#search-eligibility #country_app").html('<option value="">Select Country</option>');
			$("#search-eligibility #country_app").append(html);
			var cntry_app=$('#search-eligibility #country_app').val();
			if(cntry_app!=undefined && cntry_app !='undefined' && cntry_app !=''){
				$('#search-eligibility #cnt_id').val(cntry_app);
				cntry_apply_change(cntry_app);
			}
			if(c_id != '' && c_id != 'undefined' && c_id != undefined){
				$('#search-eligibility #cnt_id').val(c_id);				
				$('#search-eligibility #country_app').val(c_id);
				$('#search-eligibility #country_app').attr('disabled',true);
				cntry_apply_change(c_id);
			}
			$('#search-eligibility #country_app').selectpicker('refresh');
		}
	});  
	
}); 

$(document).on('change', '#highestqual', function () {
	var min_edu_id = $(this).val();
	var highest_qual_name = $('#highestqual option:selected').text();
	$('#highest_qual_name').val(highest_qual_name);
	var edu_country_id = $('#search-eligibility #country_edu').val();
	
	if(min_edu_id !='undefined' && min_edu_id != undefined && edu_country_id !='undefined' && edu_country_id != undefined && edu_country_id !='' && min_edu_id != ''){
		var html1 = load_grade_scheme(edu_country_id,min_edu_id);
		if(html1 !='' && html1 != undefined){
			$("#search-eligibility #grade_scheme").html('<option value="">Select Grade Scheme</option>');
			$("#search-eligibility #grade_scheme").append(html1);
			$('#search-eligibility #grade_scheme').selectpicker('refresh'); 
		}
	}
});

function load_grade_scheme(edu_country_id,min_edu_id){
	var html="";
	$.ajax({
		type: "POST",
		url: '/loadgradescheme',
		data: {'c_id':edu_country_id,'min_edu_id':min_edu_id},
		async: false,
		success: function(html){
			html1= html;
		}
	});
	return html1;
}
function load_grade_scale_div(grade_scheme){
	
	load_other_grade_input();
	var html1 = '';
	if(grade_scheme !='undefined' && grade_scheme != undefined  && grade_scheme != ''){
		$.ajax({
			type: "POST",
			url: '/loadgradeaverage',
			data: {'grade_scheme':grade_scheme},
			async: false,
			success: function(html){
				html1 =html;				
			}
		});
	}
	return html1;
}
$(document).on('change', '#grade_scheme', function () {
	var grade_scheme = $(this).val();
	load_other_grade_input();
	
	if(grade_scheme !='undefined' && grade_scheme != undefined  && grade_scheme != ''){
		$.ajax({
			type: "POST",
			url: '/loadgradeaverage',
			data: {'grade_scheme':grade_scheme},
			async: false,
			success: function(html){
				$("#search-eligibility #grade_scale_div").html('');
				$("#search-eligibility #grade_scale_div").append(html);
				if(html.indexOf('<select') != -1){
					//$("#grade_scale_div #grading_score").attr('onchange', 'load_grade_equivalent()');
					$('#grade_scale_div #grading_score').selectpicker('refresh'); 
					load_grade_equivalent();
				}			
				
			}
		});
	}
});


$(document).on('change', '.grading_score', function () {
	if($('#search-eligibility #other_scale').css('display') == 'block'){
		$('#search-eligibility #other_grade_input').val('');
	}
	load_grade_equivalent();
	$('#step1_error').remove();
});
$(document).on('input', '#grading_score', function () {
	
	var grade_scale = $("#search-eligibility #grading_score").val();			
	var grade_range_upper = $("#search-eligibility #grading_score").attr("data-range-upper");
	var range = $("#search-eligibility #grading_score").attr("data-rule-range");
	var errors ="Please Fill in:"
	var errorMsg='';
	var range_arr = range.split(',');
	
	$('#search_eligible #step1_error').remove();
	$('.eligibility-errors').remove();
	
	if(grade_scale == 0 || grade_scale == '' || grade_scale == undefined || grade_scale == 'undefined' || grade_scale == ' ' ) {
		errorMsg = "Only numeric.";	
	}else{
	    console.log(grade_scale);
		if(!$.isNumeric(grade_scale)){
			errorMsg = "Only numeric.";						
		}
		if(range_arr){
			$('#search_eligible #grading_score').parent().parent().find('.eligibility-errors').remove(); 
			if(grade_scale <= parseInt(range_arr[0]) ||  grade_scale > parseInt(range_arr[1])) {	
				errorMsg = "Grade Obtained between "+range_arr[0]+" and "+range_arr[1];
			}
			
			
		}
		
		if(grade_range_upper != 100) {
			var grade_range = Math.round((parseFloat(grade_scale)/parseInt(grade_range_upper))*100);
			$('#search-eligibility #average_grade').val(grade_range);
		} else {
			$('#search-eligibility #average_grade').val(grade_scale);
		}
	}
	if(errorMsg != ''){
				$('#search_eligible #grading_score').after("<input type='hidden' name='step1_error' id='step1_error' value='1'>");
				$('#search_eligible #grading_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
			}
	
});

$(document).on('input', '#other_grade_input', function () {
	var errorMsg ='';
	$('#search_eligible #other_grade_input').parent().parent().find('.eligibility-errors').remove(); 
	var grade_scheme = $("#search-eligibility #grade_scheme").val();
	var grade_scale = $('#search-eligibility #grading_score').val();
	var other_grade_input = $(this).val();
	$('#show_grade_average_container').html('');
	$('#show_grade_average_container').hide();
	$('#step1_error').remove();
	if(other_grade_input == undefined || other_grade_input == 'undefined' || other_grade_input == '' ){
		other_grade_input =0;
	}else{
		if(!$.isNumeric(other_grade_input)){
			errorMsg = "Only numeric.";						
		}
		var grade_scl = $('#grading_score option:selected').text();
		
		if(grade_scale == 55 || grade_scale == 56 || grade_scale == 57 || grade_scale == '55' || grade_scale == '56' || grade_scale == '57' ){
			if(parseFloat(other_grade_input) > parseFloat(grade_scl)){
				errorMsg = "Grade Obtained between 1 and "+grade_scl;
			}
		}else{
			if(parseFloat(other_grade_input) > parseFloat(grade_scl)){
				errorMsg = "Grade Obtained between 1 and "+grade_scl;
			}
		}
		if(errorMsg != ''){
			$('#search_eligible #other_grade_input').after("<input type='hidden' name='step1_error' id='step1_error' value='1'>");
			$('#search_eligible #other_grade_input').parent().parent().append('<span class="eligibility-errors text-danger 1">Please Fill in: '+errorMsg+'</span>');
			return false;
		}
	}
	
		$.ajax({
		type: "POST",
		url: '/loadgradeequivalent',
		data: {'grade_scheme':grade_scheme,'grade_scale':grade_scale,'grade_avg':other_grade_input},
		async: false,
		success: function(html){
			if(html != '' && html != 0  && html !='INF' && html !='NAN')
			{	
				if( grade_scheme != 181 && grade_scheme != 182 )
				{
					$("#show_grade_average_container").html('Your Calculated CGPA is: '+html+'%');  
					$("#show_grade_average_container").show();
				}	
			}
			$("#search-eligibility #average_grade").val(html);
		}
	});
});
function load_grade_equivalent(){
	var errorMsg ='';
	$('#search_eligible #other_grade_input').parent().parent().find('.eligibility-errors').remove(); 
	var grade_scheme = $("#search-eligibility #grade_scheme").val();
	var grade_scale = $('#search-eligibility #grading_score').val();
	var other_grade_input = $("#prgm_eligibility_form #other_grade_input").val();
	$('#show_grade_average_container').html('');
	$('#show_grade_average_container').hide();
	$('#search_eligible #step1_error').remove();
	
	if(other_grade_input == undefined || other_grade_input == 'undefined' || other_grade_input == '' ){
		other_grade_input =0;
	}else{
		
		if(!$.isNumeric(other_grade_input)){
			errorMsg = "Only numeric.";						
		}
		var grade_scl = $('#grading_score option:selected').text();
		console.log(grade_scl);
		if(grade_scale == 55 || grade_scale == 56 || grade_scale == 57 || grade_scale == '55' || grade_scale == '56' || grade_scale == '57' ){
			if(parseFloat(other_grade_input) > parseFloat(grade_scl)){
				errorMsg = "Grade Obtained between 1 and "+grade_scl;
			}
		}else{
			if(other_grade_input > grade_scl && other_grade_input > parseFloat(grade_scl).toFixed(1)){
				errorMsg = "Grade Obtained between 1 and "+grade_scl;
			}
		}
		
		if(errorMsg != ''){
			$('#search_eligible #other_grade_input').after("<input type='hidden' name='step1_error' id='step1_error' value='1'>");
			$('#search_eligible #other_grade_input').parent().parent().append('<span class="eligibility-errors text-danger 1">Please Fill in: '+errorMsg+'</span>');
			return false;
		}
			
	}
	
		$.ajax({
		type: "POST",
		url: '/loadgradeequivalent',
		data: {'grade_scheme':grade_scheme,'grade_scale':grade_scale,'grade_avg':other_grade_input},
		async: false,
		success: function(html){
			if(html != '' && html != 0  && html !='INF' && html !='NAN')
			{	
				if( grade_scheme != 181 && grade_scheme != 182 )
				{
					$("#show_grade_average_container").html('Your Calculated CGPA is: '+html+'%');  
					$("#show_grade_average_container").show();
				}	
			}
			$("#search-eligibility #average_grade").val(html);
		}
	});
}
function load_other_grade_input() {
	var grade_scheme = $("#search-eligibility #grade_scheme").val();
	if(grade_scheme == 10) {
		$("#search-eligibility #other_scale").css('display', 'block');
		$("#search-eligibility #other_grade_input").attr('required', 'required');
	} else {
		$("#search-eligibility #other_scale").css('display', 'none');
	}
}

$(document).on('change', '#country_app', function () {
	var cnt_id = $(this).val();
	cntry_apply_change(cnt_id);
});
function cntry_apply_change(cnt_id){
	$.ajax({
		type: "POST",
		url: '/countrieslevel',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cnt_id},
		async: false,
		success: function(html){
			$("#search-eligibility #level_filter_elig").html('<option value="">Select Level</option>');
			$("#search-eligibility #level_filter_elig").append(html);
			$("#search-eligibility #level_filter_elig").selectpicker('refresh'); 
		}
	});
	$.ajax({
		type: "POST",
		url: '/loadcountriesdisc',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cnt_id},
		async: false,
		success: function(html){
			$("#search-eligibility #cnt_disc").html('<option value="">Select Discipline</option>');
			$("#search-eligibility #cnt_disc").append(html);
			$("#search-eligibility #cnt_disc").selectpicker('refresh'); 
		}
	});
	
	$.ajax({
		type: "POST",
		url: '/loadcountriestest',
		data: {"_token": $('meta[name="_token"]').attr('content'),'c_id': cnt_id},
		async: false,
		success: function(html){
			var res=html.split('~~!!~~');
			$("#search-eligibility #cnt_test").val('');
			$("#search-eligibility #overall_test_score").val('');
			$("#search-eligibility #cnt_test").selectpicker('refresh'); 
			$('#search-eligibility #standard_exam').css('display','none');

			if(cnt_id == 2 || cnt_id == '2'){
				$('#search-eligibility #standard_exam').css('display','block');
				if(res[1] != '' && res[1] !=undefined && res[1] !='undefined'){
					$("#search-eligibility #cnt_test").html('<option value="">Select Standardized test</option>');
					$("#search-eligibility #cnt_test").append(res[1]);
					$("#search-eligibility #cnt_test").selectpicker('refresh'); 
				}
			}
			//$('#search-eligibility .english_exam').attr('required','required');
			$("#search-eligibility #cnt_exam").html('<option value="">Select Proficiency test</option>');
			$("#search-eligibility #cnt_exam").append(res[0]);
			$("#search-eligibility #cnt_exam").selectpicker('refresh'); 
		}
	});
	
	var test = $("#search-eligibility #cnt_exam").val();
	var cnt_test=''
	if(cnt_id == 2){
		var cnt_test = $("#search-eligibility #cnt_test").val();
	}
	if(test != 'undefined' && test != undefined && test != '' ){
	
		$.ajax({
			type: "POST",
			url: '/loadcountriestestscore',
			data: {"_token": $('meta[name="_token"]').attr('content'),'test': test,'cnt_test': cnt_test},
			async: false,
			success: function(html){
				var res=html.split('~~!!~~');
								
				if(res[1] != '' && res[1] != undefined && res[1] !='undefined'){
					$("#search-eligibility #overall_test_score").val(res[1]);
				}
				
				$("#search-eligibility #overall_score").val(res[0]);
				
			}
		});
	}
}

$(document).ready(function () {

	var allWells=$('#search-eligibility .stepper--content'),
		allNextBtn = $('#search-eligibility .stepper--content .arrow--button__nextBtn'),
		allBackBtn=$('#search-eligibility .stepper--content .btn-prev');
		allendBtn=$('#search-eligibility .stepper--content .arrow--button__endBtn');
	var wizard = (".wizard li");
	var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
	var wizardActive = (".wizard li.active");
	var obj = {};
	var prgm_id='';
	var uni_id='';
	var cnt_id='';
	allNextBtn.click(function(){

	var curStep = $(this).closest(".stepper--content"),
		curStepBtn = curStep.attr("id"),
		curInputs = curStep.find("input[type='text'],input[type='url'],select"),
		isValid = true;
	var prgm_id = curStep.find("#progrm_id");	
	var uni_id = curStep.find("#univer_id");	
		$(".form-row").removeClass("has-error");
		console.log(curStepBtn);
		if(curStepBtn == "step1") {
			curInputs = curStep.find("input[required='required'],select");
			
			var errors = "Please Fill in:";
			for(var i=0; i<curInputs.length; i++){
				var inputId = $(curInputs[i]).attr('id');
				var inputiddiv="#"+inputId;
		
				if(inputiddiv == '#grading_score' || inputiddiv == '#other_grade_input' ){
					$(inputiddiv).parent().parent().find('.eligibility-errors').remove(); 
				}else{
					$(inputiddiv).parent().find('.eligibility-errors').remove(); 
				}
				if (!curInputs[i].validity.valid){
					  isValid = false;
					  $(curInputs[i]).closest(".form-row").addClass("has-error");
					  var errorMsg = $(curInputs[i]).attr('data-errors');
					  
					 if(errorMsg == undefined){
						var errorMsg = $(curInputs[i]).attr('data-msg-required');
					  }
					  if(errorMsg != undefined){
						if(inputiddiv == '#grading_score' || inputiddiv == '#other_grade_input' ){
							$(inputiddiv).parent().parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
						}else{
							$(inputiddiv).parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
						}
					  }
				}
			}
			if($('#step1_error').length > 0){
				isValid = false;
				if($("#grading_score").prop("tagName").toLowerCase() != 'select'){
					var range = $("#search-eligibility #grading_score").attr("data-rule-range");
					var errorMsg1='';
					var range_arr = range.split(',');
					$('#step1_error').remove();
					if(range_arr){
						$('#search_eligible #grading_score').parent().parent().find('.eligibility-errors').remove(); 
						errorMsg1 = "Grade Obtained between "+range_arr[0]+" and "+range_arr[1];
						
						if(errorMsg1 != ''){
							$('#search_eligible #grading_score').after("<input type='hidden' name='step1_error' id='step1_error' value='1'>"); 
							$('#search_eligible #grading_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg1+'</span>');
						}
					}
				}else{
					var errorMsg3 ='';
					if($('#other_scale').css('display') == 'block'){
						var grd_val1 = $('#other_grade_input').val();
						
						var grade_scl1 = $('#grading_score option:selected').text();
						var grade_scale1 = $('#grading_score option:selected').val();
						if(grd_val1 != "undefined" && grd_val1 != "" && grd_val1 != undefined){
							
							if(!$.isNumeric(grd_val1)){
								isValid = false;
								errorMsg3 = "Only numeric.";
															
							}else{
								
								if(grd_val1 > 0){
									if(grade_scale1 == 55 || grade_scale1 == 56 || grade_scale1 == 57 || grade_scale1 == '55' || grade_scale1 == '56' || grade_scale1 == '57' ){
										if(parseFloat(grd_val1) > parseFloat(grade_scl1)){
											errorMsg3 = "Grade Obtained between 1 and "+grade_scl1;
										}
									}else{
								
										if(Number(grd_val1) > Number(grade_scl1) || parseFloat(grd_val1).toFixed(1) > parseFloat(grade_scl1).toFixed(1)){
											errorMsg3 = "Grade Obtained between 1 and "+grade_scl1;
										}
									}
									
								}else{
									isValid = false;
									errorMsg3 = "Grade Obtained between 1 and "+grade_scl1;
								}
								
							}
						}else{
							isValid = false;
							errorMsg3 = "Grade Obtained between 1 and "+grade_scl1;
						}
						
					}
					if(errorMsg3 != '' && errorMsg3 != 'undefined' && errorMsg3 != undefined){
						$('#other_grade_input').parent().parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg3+'</span>');
						return false; 
					}
				}
			}
			
			if(isValid == true) {
				
				$('#search-eligibility .stepper--content').removeClass('active');
				
				var form_type = $('#form_type').val();
				if(form_type == 'search_program_detail_eleigible' || form_type == 'search_other_program_detail_eleigible' || form_type == 'search_institute_program_detail_eleigible'){
					$(this).closest('#search-eligibility .stepper--content').next().next().addClass('active');
					$(wizardActive).next().next().addClass('active');
					$(wizardActive).prev().prev().removeClass('active');
					$(wizardActive).prev().prev().addClass('completed');
					
					
					$(userWizard).next().addClass('active');
					$(userWizard).prev().removeClass('active');
					$(userWizard).next().next().addClass('active');
					$(userWizard).prev().prev().removeClass('active');
					$('#country_app').val($('#cnt_id').val());
				}else{
					$(this).closest('#search-eligibility .stepper--content').next().addClass('active');
					$(wizardActive).next().addClass('active');
					$(wizardActive).prev().removeClass('active');
					$(wizardActive).prev().addClass('completed');

					$(userWizard).next().addClass('active');
					$(userWizard).prev().removeClass('active');
				}
				var cnt_id =$('#cnt_id').val();
			}
			
		}
		
		if(curStepBtn == "step2") 
		{
			curInputs = curStep.find("input[required='required'],select");
			
			var errors = "Please Fill in:";
			for(var i=0; i<curInputs.length; i++){
				var inputId = $(curInputs[i]).attr('id');
				var inputiddiv="#"+inputId;
				$(inputiddiv).parent().find('.eligibility-errors').remove(); 
				if (!curInputs[i].validity.valid){
					  isValid = false;
					  $(curInputs[i]).closest(".form-row").addClass("has-error");
					  var errorMsg = $(curInputs[i]).attr('data-errors');
					  
					 if(errorMsg == undefined){
						var errorMsg = $(curInputs[i]).attr('data-msg-required');
					  }
					  if(errorMsg != undefined){
						$(inputiddiv).parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
					  }
				}
			}
			
			if(isValid == true) {
				var obj = {};						
				$('#search-eligibility .stepper--content').removeClass('active');
				$(this).closest('#search-eligibility .stepper--content').next().addClass('active');

				$(wizardActive).next().addClass('active');
				$(wizardActive).prev().removeClass('active');
				$(wizardActive).prev().addClass('completed');

				$(userWizard).next().addClass('active');
				$(userWizard).prev().removeClass('active');
				
			}					
		}						
	});

	allendBtn.click(function(event){
		event.preventDefault();
		var curStep = $(this).closest(".stepper--content"),
		curStepBtn = curStep.attr("id"),
		curInputs = curStep.find("input[type='text'],input[type='url'],select"),
		isValid = true;
		
		$(".form-row").removeClass("has-error");
		if(curStepBtn == "step3") {
			curInputs = curStep.find("input[required='required'],select");
			var errors = "Please Fill in:";
			for(var i=0; i<curInputs.length; i++){
				var inputId = $(curInputs[i]).attr('id');
				var inputiddiv="#"+inputId;
				if(inputiddiv == '#overall_score' || inputiddiv == '#overall_test_score'){
					$(inputiddiv).parent().parent().find('.eligibility-errors').remove(); 
				}else{
					$(inputiddiv).parent().find('.eligibility-errors').remove(); 
				} 
				
				if (!curInputs[i].validity.valid){
					  isValid = false;
					  $(curInputs[i]).closest(".form-row").addClass("has-error");
					  var errorMsg = $(curInputs[i]).attr('data-errors');
					  
					 if(errorMsg == undefined){
						var errorMsg = $(curInputs[i]).attr('data-msg-required');
					  }
					  if(errorMsg != undefined){
						if(inputiddiv == '#overall_score' || inputiddiv == '#overall_test_score'){
							$(inputiddiv).parent().parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
						}else{
							$(inputiddiv).parent().append('<span class="eligibility-errors text-danger 1">'+errors+' '+errorMsg+'</span>');
						}
					  }
				}
			}
			if(curStep.find('#cnt_exam').val() == '' || curStep.find('#cnt_exam').val() == 'undefined' || curStep.find('#cnt_exam').val() == undefined){
				$('#cnt_exam').parent().find('.eligibility-errors').remove();
				$('#cnt_exam').parent().append('<span class="eligibility-errors text-danger 1">'+errors+' proficiency test</span>');
			}
			var ihtml ='';
			var ihtml1 ='';
			if($('#step3_error').length > 0 ){
				isValid = false;
				var ihtml = $("#search-eligibility #step3_error").val();
				var errorMsg1='';
				$('#step3_error').remove();
				if(ihtml != '' && ihtml != 'undefined' && ihtml != undefined ){
					$('#search_eligible #overall_score').parent().parent().find('.eligibility-errors').remove(); 
					
					$('#search_eligible #overall_score').after('<input type="hidden" name="step3_error" id="step3_error" value="'+ihtml+'"/>'); 
					$('#search_eligible #overall_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+ihtml+'</span>');
					
				}
			}
			if($('#step4_error').length > 0 ){
				isValid = false;
				var ihtml1 = $("#search-eligibility #step4_error").val();
				var errorMsg1='';
				$('#step4_error').remove();
				if(ihtml1 != '' && ihtml1 != 'undefined' && ihtml1 != undefined ){
					$('#search_eligible #overall_test_score').parent().parent().find('.eligibility-errors').remove(); 
					
					$('#search_eligible #overall_test_score').after("<input type='hidden' name='step4_error' id='step4_error' value='"+ihtml1+"'>"); 
					$('#search_eligible #overall_test_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+ihtml1+'</span>');
					
				}
			}
			if(isValid == true) {
				var obj = {};
				var formData = $('#search_eligible').serialize();
				var form_type = $('#form_type').val();
				if(form_type == 'search_program_eleigible' || form_type == 'search_program_detail_eleigible' || form_type == 'search_other_program_detail_eleigible' || form_type == 'search_institute_program_detail_eleigible'){
					var form_type_url ='/programeligibilty';
				
					$.ajaxSetup({
						headers: {
						'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
						}
					});
					$.ajax({
						type: "POST",
						url: form_type_url,
						data:  formData,
						async: false,
						success: function(html){
							
							$('#form_type').val('search_eligible');
							
							$('#search-eligibility .stepper .wizard li').removeClass('completed');
							$('#search-eligibility .stepper .wizard li').removeClass('active');
							$('#search-eligibility .stepper--content').removeClass('active');
							$('#search-eligibility .stepper .wizard li:first-child').addClass('active');
							$('#search-eligibility #step1').addClass('active');
							$("#search-eligibility").modal('hide');
							$('#requestSendModal .modal-body').html('');
							$('#requestSendModal .modal-body').html(html);
							$('#requestSendModal').modal('show');
							/* var stephtml='<div class="stepper--content" id="step4">'+html+'</div>';
							console.log(html);
							$('#search_eligible').append(stephtml);
							$('#search-eligibility .stepper--content').removeClass('active');
							$(this).closest('#search-eligibility .stepper--content').next().addClass('active');
							//$(wizardActive).next().addClass('active');
							$(wizardActive).removeClass('active');
							$("#final_step").addClass('completed');
							$("#step4").css('display','block');	 */							
						}
					});
				}else{
				
					$('#search-eligibility .stepper--content').removeClass('active');
					$(this).closest('#search-eligibility .stepper--content').next().addClass('active');

					$(wizardActive).next().addClass('active');
					$(wizardActive).prev().removeClass('active');
					$(wizardActive).prev().addClass('completed');
					$('#search_eligible').submit();

					$(userWizard).next().addClass('active');
					$(userWizard).prev().removeClass('active');
				}
			}
			
		}
	});
	$("#search-eligibility .btn-prev").click(function () {
		$('#search-eligibility .stepper--content').removeClass('active');
		var form_type = $('#form_type').val();
		if(form_type == 'search_program_detail_eleigible' || form_type == 'search_other_program_detail_eleigible' || form_type == 'search_institute_program_detail_eleigible'){
			$(this).closest('#search-eligibility .stepper--content').prev().prev().addClass('active');

			$(wizardActive).prev().prev().addClass('active');
			$(wizardActive).prev().prev().addClass('completed');
			$(wizardActive).removeClass('completed');
			$(wizardActive).next().removeClass('active');

			$(userWizard).prev().addClass('active');
			$(userWizard).next().removeClass('active');
		}else{
			$(this).closest('#search-eligibility .stepper--content').prev().addClass('active');

			$(wizardActive).prev().addClass('active');
			$(wizardActive).prev().addClass('completed');
			$(wizardActive).removeClass('completed');
			$(wizardActive).next().removeClass('active');

			$(userWizard).prev().addClass('active');
			$(userWizard).next().removeClass('active');
		}
	});	
	jQuery.validator.addMethod(
		"mobileValidation",
		function(value, element) {
			return !/^\d{10}$|^\d{10}$/.test(value) ? false : true;
		},
		"Mobile number invalid"
	);	
	$("#enquiryForm").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				validate_email:true,
			},
			mobile: {
				required: true,
				mobileValidation: $("#mobile").val(),
			},
			nearestlocation: "required",
			prefference: "required",
			pref_intake: "required",
			counseling_mode: "required"
		},
		messages :{
				name : {
					required : 'Please enter Full name'
				},
				email : {
					required : 'Please enter valid Email'
				},
				mobile : {
					required : 'Please enter Mobile'
				},
				nearestlocation : {
					required : 'Please select Nearest office'
				},
				prefference : {
					required : 'Please select Country preference'
				},
				pref_intake : {
					required : 'Please select Intake'
				},
				counseling_mode : {
					required : 'Please select Counseling mode'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
		
			if ($(element[0]).attr('id') == 'name') {
				$('#err_name').append(error)
			} else if($(element[0]).attr('id') == 'email') { 
				$('#err_email').append(error);
			} else if($(element[0]).attr('id') == 'mobile') { 
				$('#err_mobile').append(error);
			} else if($(element[0]).attr('id') == 'nearestlocation') { 
				$('#err_location').append(error);
			} else if($(element[0]).attr('id') == 'prefference') { 
				$('#err_prefference').append(error);
			} else if($(element[0]).attr('id') == 'pref_intake') { 
				$('#err_pref_intake').append(error);
			} else if($(element[0]).attr('id') == 'counseling_mode') { 
				$('#err_counseling_mode').append(error);
			} else {
				error.insertAfter(element);
			} 
		},
		submitHandler : function(form) {
			
			$.ajaxSetup({
				headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$.ajax({
				url: "/store-data",
				type: "POST",
				data: $('#enquiryForm').serialize(),
				success: function( response ) {
					if(response == 1)
					{
						var mobile = $('#mobile').val();
						var page_name = $('#page_name').val();
						var email = $('#email').val();
						var mobile_masking = mobile.replace(mobile.substring(1,5),"****");
						var email_masking = email.replace(email.substring(1,3),"***");
						$('#otpContentContainer').html('');
						$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="commonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="otpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="commonResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="otp_page_name" value="'+page_name+'" /><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile+'" /><a href="javascript:void(0);" onclick="commonOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
						$('#requestModal').modal('show');
					}	
				}
			});
		}    
	});
	
	/* apply Request */
	$("#apply_lead_form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				validate_email:true,
			},
			mobile: {
				required: true,
				mobileValidation: $("#mobile").val(),
			}
		},
		messages :{
				name : {
					required : 'Please enter Full name'
				},
				email : {
					required : 'Please enter valid Email'
				},
				mobile : {
					required : 'Please enter Phone'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'name') {
				$('#err_f_name').append(error);
			} else if($(element[0]).attr('id') == 'email') { 
				$('#err_f_email').append(error);
			} else if($(element[0]).attr('id') == 'mobile') { 
				$('#err_f_mobile').append(error);
			} 
		},
		submitHandler : function(form) {
			$('#apply_lead_form #page_name').val('apply_lead');
			$.ajaxSetup({
				headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$.ajax({
				url: "/store-data",
				type: "POST",
				data: $('#apply_lead_form').serialize(),
				success: function( response ) {
					
					if(response == 1)
					{
						var mobile = $('#apply_lead_form #mobile').val();
						var page_name = $('#apply_lead_form #page_name').val();
						var email = $('#apply_lead_form #email').val();
						var mobile_masking = mobile.replace(mobile.substring(1,5),"****");
						var email_masking = email.replace(email.substring(1,3),"***");
						$('#otpContentContainer').html('');
						$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="commonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="otpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="commonResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="otp_page_name" value="'+page_name+'" /><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile+'" /><a href="javascript:void(0);" onclick="commonOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
						$('#leadModal').modal('hide');
						$('#requestModal').modal('show');
					}	
				}
			});
		}    
	});
	
	/* apply Request */
	/* Phone call back Request */
	$("#request_lead_form").validate({
		rules: {
			name: "required",
			mobile: {
				required: true,
				mobileValidation: $("#mobile").val(),
			}
		},
		messages :{
				name : {
					required : 'Please enter Full name'
				},
				mobile : {
					required : 'Please enter Phone'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'name') {
				$('#err_r_name').append(error);
			} else if($(element[0]).attr('id') == 'mobile') { 
				$('#err_r_mobile').append(error);
			} 
		},
		submitHandler : function(form) {
			$('#request_lead_form #page_name').val('request_lead');
			$.ajaxSetup({
				headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$.ajax({
				url: "/store-data",
				type: "POST",
				data: $('#request_lead_form').serialize(),
				success: function( response ) {
					
					if(response == 1)
					{
						var mobile1 = $('#request_lead_form #mobile').val();
						var page_name = $('#request_lead_form #page_name').val();
						
						var mobile_masking = mobile1.replace(mobile1.substring(1,5),"****");
						
						$('#otpContentContainer').html('');
						$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="commonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> </p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="otpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="commonResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="otp_page_name" value="'+page_name+'" /><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile1+'" /><a href="javascript:void(0);" onclick="commonOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
						$('#phoneModal').modal('hide');
						$('#requestModal').modal('show');
					}	
				}
			});
		}    
	});
	
	/* Phone call back Request */
	/* Zoom Request */
	$("#zoom_lead_form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				validate_email:true,
			},
			mobile: {
				required: true,
				mobileValidation: $("#mobile").val(),
			}
		},
		messages :{
				name : {
					required : 'Please enter Full name'
				},
				email : {
					required : 'Please enter Email'
				},
				mobile : {
					required : 'Please enter Phone'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'name') {
				$('#err_z_name').append(error);
			} else if($(element[0]).attr('id') == 'email') { 
				$('#err_z_email').append(error);
			} else if($(element[0]).attr('id') == 'mobile') { 
				$('#err_z_mobile').append(error);
			} 
		},
		submitHandler : function(form) {
			
			$.ajaxSetup({
				headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$('#zoom_lead_form #page_name').val('zoom_lead');
			$.ajax({
				url: "/store-data",
				type: "POST",
				data: $('#zoom_lead_form').serialize(),
				success: function( response ) {
					if(response == 1)
					{
						var mobile1 = $('#zoom_lead_form #mobile').val();
						var email1 = $('#zoom_lead_form #email').val();
						var page_name = $('#zoom_lead_form #page_name').val();
						
						var mobile_masking = mobile1.replace(mobile1.substring(1,5),"****");
						var email_masking = email1.replace(email1.substring(1,3),"***");
						
						$('#otpContentContainer').html('');
						$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="commonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="otpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="commonResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="otp_page_name" value="'+page_name+'" /><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile1+'" /><a href="javascript:void(0);" onclick="commonOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
						$('#zoomRequestModal').modal('hide');
						$('#requestModal').modal('show');
					}	
				}
			});
		}    
	});
	/* Zoom Request */
	
	/* schedule appointment */
	$("#appointment_form").validate({
		ignore: "",
		rules: {
			dob: "required",
			time: "required",
		},
		messages :{
				dob : {
					required : 'Please select Date'
				},
				time : {
					required : 'Please select Time'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'dob') {
				$('#err_f_date').append(error);
			} else if($(element[0]).attr('id') == 'time') { 
				$('#err_f_time').append(error);
			} 
		},
		submitHandler : function(form) {
			 var date = $('#zoomScheduleModal #dob').val();
			 var brchID = $('#zoomScheduleModal #cnt_schd_branch_id').val();
			 const dt = new Date($('#zoomScheduleModal #dob').val());
			 var day = dt.toLocaleString('default', { weekday: 'short' });
			 var d = dt.getDate();
			 var year = dt.getFullYear();
			 var m =dt.toLocaleString('default', { month: 'short' });
			 var t=day +','+d+' '+m+' '+year; 
			 
			 var time = $('#zoomScheduleModal #time').val();
			 
			 $('#appointleadModal #ccnt_sschd_branch_id').val(brchID);
			 $('#appointleadModal #appdate').val(date);
			 $('#appointleadModal #apptime').val(time);
			 
			 var html = "Confirm Meeting "+time+","+t;
			 $('#appointleadModal .pop--heading').html(html);
			 $('#appointleadModal #appointment_lead_form')[0].reset();
			 $('#appointleadModal').modal('show');
			 $('#zoomScheduleModal').modal('hide');
		}
	});

	$("#appointment_lead_form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				validate_email:true,
			},
			mobile: {
				required: true,
				mobileValidation: $("#mobile").val(),
			}
		},
		messages :{
				name : {
					required : 'Please enter Full name'
				},
				email : {
					required : 'Please enter Email'
				},
				mobile : {
					required : 'Please enter Phone'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'name') {
				$('#err_a_name').append(error);
			} else if($(element[0]).attr('id') == 'email') { 
				$('#err_a_email').append(error);
			} else if($(element[0]).attr('id') == 'mobile') { 
				$('#err_a_mobile').append(error);
			} 
		},
		submitHandler : function(form) {
			$('#appointment_lead_form #page_name').val('appointment_lead');
			$.ajaxSetup({
				headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$.ajax({
				url: "/store-data",
				type: "POST",
				data: $('#appointment_lead_form').serialize(),
				success: function( response ) {
					
					if(response == 1)
					{
						var mobile1 = $('#appointment_lead_form #mobile').val();
						var email1 = $('#appointment_lead_form #email').val();
						var page_name = $('#appointment_lead_form #page_name').val();
						
						var mobile_masking = mobile1.replace(mobile1.substring(1,5),"****");
						var email_masking = email1.replace(email1.substring(1,3),"***");
						
						$('#otpContentContainer').html('');
						$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="commonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="otpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="commonResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="otp_page_name" value="'+page_name+'" /><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile1+'" /><a href="javascript:void(0);" onclick="commonOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
						$('#appointleadModal').modal('hide');
						$('#requestModal').modal('show');
					}	
				}
			});
		}    
	});
	/* schedule appointment */
	/* whatsapp lead */
	
	$("#request_whatsapp_form").validate({
		rules: {
			f_name: "required",
			phone: {
				required: true,
				mobileValidation: $("#phone").val(),
			}
		},
		messages :{
				f_name : {
					required : 'Please enter Full name'
				},
				phone : {
					required : 'Please enter Whatsapp no.'
				}
			},
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if ($(element[0]).attr('id') == 'f_name') {
				$('#err_w_name').append(error);
			} else if($(element[0]).attr('id') == 'phone') { 
				$('#err_w_phone').append(error);
			} 
		},
		submitHandler : function(form) {
			var name =$('#request_whatsapp_form #f_name').val();
			var phone =$('#request_whatsapp_form #phone').val();
			var msgtext ='Hello, I want to talk to your counsellors to start with the study abroad process.';
			$('#whatsAppmodal').modal('hide');
			//var loc ="https://api.whatsapp.com/send?phone=919803052240&text="+msgtext;
			var loc ="https://api.whatsapp.com/send?phone=918968300000&text="+msgtext;
			window.open(loc, '_blank'); 
		}    
	});
	/* whatsapp lead */
     
});


$("#search-eligibility .mega--close").click(function () {
	$('#search_eligible')[0].reset();
	$('#univer_id').val('');
	$('#progrm_id').val('');
	$('#cnt_id').val('');
	$('#form_type').val('search_eligible');
	$('#search-eligibility #country_app').val('');
	$('#search-eligibility #country_app').attr('disabled',false);
	$('#search-eligibility #country_app').selectpicker('refresh');
	$('#search-eligibility .stepper .wizard li').removeClass('completed');
	$('#search-eligibility .stepper .wizard li').removeClass('active');
	$('#search-eligibility .stepper--content').removeClass('active');
	$('#search-eligibility .stepper .wizard li:first-child').addClass('active');
	$('#search-eligibility #step1').addClass('active');
	$("#search-eligibility").modal('hide');
	
});

function commonOtpSubmit()
{
	$('#otpsenderro').html('');
	var otpsub0 = $("#otpsub0").val();
	var otpsub1 = $("#otpsub1").val();
	var otpsub2 = $("#otpsub2").val();
	var otpsub3 = $("#otpsub3").val();
	var otp_page_name = $("#otp_page_name").val();
	if(otpsub0.trim() == '' || otpsub1.trim() == '' || otpsub2.trim() == '' || otpsub3.trim() == '')
	{
		$('#commonotpsubmit #otpsenderro').html('Please enter required field');
		$('#commonotpsubmit #otpsenderro').removeClass('hidden');
		return false;
	}
	if(!$.isNumeric(otpsub0.trim()) || !$.isNumeric(otpsub1.trim()) || !$.isNumeric(otpsub2.trim()) || !$.isNumeric(otpsub3.trim()))
	{
		$('#commonotpsubmit #otpsenderro').html('Please enter valid number');
		$('#commonotpsubmit #otpsenderro').removeClass('hidden');
		return false;
	}	
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/commone-otp-form-submit",
		type: "POST",
		data: $('#commonotpsubmit').serialize(),
		success: function( response ) {
			
			if(otp_page_name == 'zoom_lead' || otp_page_name == 'appointment_lead'){
				var data=response;
				var res = data.split('~||~');
				//console.log(res);
				if(res[0] == 1)
				{	
					if(otp_page_name == 'zoom_lead')
					{
						var zoom_link = res[1];
						var chkbrnklink = res[2];
						var disphoneno = '918968300000';
						var distollfreeno = '1800 137 8055';
						
						if(chkbrnklink.trim() !='' && chkbrnklink.trim() == 'iApply'){
							var disphoneno = '918598000333';
							var distollfreeno = '1800 890 1775';
						}
						
						$('#zoomModal').modal('hide');
						$('#requestModal').modal('hide');
						$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Request for zoom session successful!</p><p class="text--light text--regular delete--modal--desc mb5"><a href="'+zoom_link+'">'+zoom_link+'</a></p><p class="text--light text--regular delete--modal--desc"><span class="joinnowbtn"><a href="'+zoom_link+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span></p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:'+distollfreeno.replaceAll(' ', '')+'" target="_blank">'+distollfreeno+'</a></p><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo"> WhatsApp:- <a href="https://api.whatsapp.com/send?phone='+disphoneno+'&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">'+disphoneno+'</a></p></div></div>');
						$('#zoom_lead_form')[0].reset();
						$('#requestSendModal').modal('show');
					}
					if(otp_page_name == 'appointment_lead'){
						$('#requestSendModal .modal-body').html('');
						/* $('#requestSendModal .modal-body').html('<p class="text--dark delete--modal--meassage">Request for Scheduling Appointment is successful!</p> <p class="text--light text--regular delete--modal--desc">Someone from our team will get back to you within 24 hours.</p>'); */
						
						var chkbrnklink = res[2];
						var disphoneno = '918968300000';
						var distollfreeno = '1800 137 8055';
						
						if(chkbrnklink.trim() !='' && chkbrnklink.trim() == 'iApply'){
							var disphoneno = '918598000333';
							var distollfreeno = '1800 890 1775';
						}
						
						
						$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:'+distollfreeno.replaceAll(' ', '')+'" target="_blank">'+distollfreeno+'</a></p> <p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone='+disphoneno+'&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">'+disphoneno+'</a></p></div></div>');
						$('#zoomModal').modal('hide');
						$('#requestModal').modal('hide');
						$('#zoom_lead_form')[0].reset();
						$('#requestSendModal').modal('show');
					}	
				}
				else if(res[0]== 2) { 
					$('#commonotpsubmit #otpsenderro').html('Invalid http request');
					$('#commonotpsubmit #otpsenderro').removeClass('hidden');
				}
				else
				{
					$('#commonotpsubmit #otpsenderro').html('Invalid OTP');
					$('#commonotpsubmit #otpsenderro').removeClass('hidden');
				}	
				
			}	
			else
			{ 
		
				var data=response;
				var restxt = data.split('~||~');
				if(restxt[0]== 5) { 
					$('#requestModal').modal('hide');
					$('#commonotpsubmit')[0].reset();
					if(restxt[1].trim() == 'iApply'){
						$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18008901775" target="_blank">1800 890 1775</a></p><p class="text--light text--regular delete--modal--desc"> <img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918598000333&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918598000333</a></p></div></div>');
					}else{
						$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18001378055" target="_blank">1800 137 8055</a></p> <p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918968300000&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918968300000</a></p></div></div>');
					}
					
					$('#requestSendModal').modal('show');
					
				}
				if(response == 1)
				{
					$('#requestModal').modal('hide');
					if(otp_page_name == 'apply_lead'){
						$('#apply_lead_form')[0].reset();
						$('#requestSendModal .modal-body').html('');
						$('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Information saved successfully</p>  <p class="text--light text--regular delete--modal--desc">Someone from our team will get back to you within 24 hours.</p>');
					}else if(otp_page_name == 'request_lead'){
						$('#request_lead_form')[0].reset();
						$('#requestSendModal .modal-body').html('');
						$('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Request for call back successful</p>  <p class="text--light text--regular delete--modal--desc">Someone from our team will get back to you within 24 hours.</p>');
					}else{
						$("#nearestlocation").val('');
						$("#nearestlocation").selectpicker("refresh");
						$("#prefference").val('');
						$("#prefference").selectpicker("refresh");
						$("#pref_intake").val('');
						$("#pref_intake").selectpicker("refresh");
						$("#counseling_mode").val('');
						$("#counseling_mode").selectpicker("refresh");
						$('#enquiryForm')[0].reset();
						$('#requestSendModal .modal-body').html('');
						$('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Request for call back successful</p>  <p class="text--light text--regular delete--modal--desc">Someone from our team will get back to you within 24 hours.</p>');
					}
					$('#requestSendModal').modal('show');
				}
				else if(response == 2) { 
					$('#commonotpsubmit #otpsenderro').html('Invalid http request');
					$('#commonotpsubmit #otpsenderro').removeClass('hidden');
				}
				else
				{
					$('#commonotpsubmit #otpsenderro').html('Invalid OTP');
					$('#commonotpsubmit #otpsenderro').removeClass('hidden');
				}
			}		
		}
	});
		
}
function commonResend()
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/commone-resend",
		type: "POST",
		data: {mobile:$('#otp_mobile_number').val(),page_name:$("#otp_page_name").val()},
		success: function( response ) {
			$('#requestModal #otpsenderro').html('');
			if(response == 1)
			{
				$('#requestModal #otpsenderro').html('Otp has been send successfully');
				$('#requestModal #otpsenderro').removeClass('text--red');
				$('#requestModal #otpsenderro').addClass('text--green');
				$('#requestModal #otpsenderro').removeClass('hidden');
			}
			else
			{
				$('#requestModal #otpsenderro').html('Invalid OTP');
				$('#requestModal #otpsenderro').removeClass('hidden');
			}	 
	
		}
	});
}

function commonSignupResend()
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/signup-resend",
		type: "POST",
		data: {mobile:$('#otpmobile').val(),email:$("#otpemail").val(),page_name:$("#signupotp #page_name").val()},
		success: function( response ) {
			$('#signupotp #otpsenderro').html('');
			if(response == 1)
			{
				$('#signupotp #otpsenderro').html('Otp has been send successfully');
				$('#signupotp #otpsenderro').removeClass('text--red');
				$('#signupotp #otpsenderro').addClass('text--green');
				$('#signupotp #otpsenderro').removeClass('hidden');
			}
			else
			{
				$('#signupotp #otpsenderro').html('Invalid OTP');
				$('#signupotp #otpsenderro').removeClass('hidden');
			}	 
	
		}
	});
}

$(document).on('click', '.show_all_eligible', function () {
	var pathname = window.location.pathname;
	
	if($(this).attr('data-page') != '' && $(this).attr('data-page') != 'undefined' && $(this).attr('data-page') != undefined ){
		var action='';
		if($(this).attr('data-page') == 'institute-program-detail' || $(this).attr('data-page') == 'other-program-detail' || $(this).attr('data-page') == 'program-detail'){
			$('#progrm_id').val('');
		}
		$('#search_eligible').attr('action','');
		$('#search_eligible').attr('action','/programs');
		$('#search_eligible').submit();		
	}else{
	
		//$('#univer_id').val('');
		$('#progrm_id').val('');
		//$('#search_eligible').attr('action',pathname);
		$('#search_eligible').submit();
	}
});



$('#search_eligible #cnt_exam').on("change",function(){
	$('#search_eligible #overall_score').val('');
	$('#search_eligible #overall_score').parent().parent().find('.eligibility-errors').remove();
});
$('#search_eligible #overall_score').on("keyup keypress blur",function(){
	$('#search_eligible #overall_score').parent().parent().find('.eligibility-errors').remove();
	var overall_score =$('#search_eligible #overall_score').val();
	var errors = "Please Fill in:";
	var errorMsg = "";
	var english_exam = $("#search_eligible #cnt_exam").val();

	if(english_exam != '' && english_exam != 'undefined' && english_exam != undefined && overall_score != 'undefined' && overall_score != undefined && overall_score != '')
	{
		if(!$.isNumeric(overall_score)){
			errorMsg = "Only numeric.";
										
		}else{
			if(english_exam == "1" || english_exam == 1){
				if(overall_score < 1 ||  overall_score > 9) {
					errorMsg = "Overall Score between 1 and 9";
				}
			}else if(english_exam == "2" || english_exam == 2) {
				if(overall_score < 1 ||  overall_score > 120){
					errorMsg = "Overall Score between 1 and 120";
				}
				
			} else if(english_exam == "6" || english_exam == 6) {
				if(overall_score < 1 ||  overall_score > 90){
					errorMsg = "Overall Score between 1 and 90";
				}
				
			} else if(english_exam == "3" || english_exam == 3) {
				if(overall_score < 1 ||  overall_score > 340){
					errorMsg = "Overall Score between 1 and 340";
				}
				
			} else if(english_exam == "4" || english_exam == 4) {
				if(overall_score < 1 ||  overall_score > 800){
					errorMsg = "Overall Score between 1 and 800";
				}
				
			} else if(english_exam == "5" || english_exam == 5) {
				if(overall_score < 1 ||  overall_score > 1600){
					errorMsg = "Overall Score between 1 and 1600";
				}
				
			}
		}
		
	}
	
	if(errorMsg != ''){
		$('#step3_error').remove();
		$('#search_eligible #overall_score').parent().parent().find('.eligibility-errors').remove();
		var ihtml = errors+" "+errorMsg ;
		$('#search_eligible #overall_score').after("<input type='hidden' name='step3_error' id='step3_error' value='"+ihtml+"'>");
		$('#search_eligible #overall_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+ihtml+'</span>');
	}else{
		$('#step3_error').remove();
	}

});

$('#search_eligible #cnt_test').on("change",function(){
	var english_exam = $(this).val();
	$('#search_eligible #overall_test_score').attr('required',false);
	if(english_exam != '' && english_exam != 'undefined' && english_exam != undefined ){
		$('#search_eligible #overall_test_score').attr('required',true);
	}
	$('#search_eligible #overall_test_score').val('');
	$('#search_eligible #overall_test_score').parent().parent().find('.eligibility-errors').remove();
});
$('#search_eligible #overall_test_score').on("keyup keypress blur",function(){
	
	$('#search_eligible #overall_test_score').parent().parent().find('.eligibility-errors').remove();
	var overall_score =$('#search_eligible #overall_test_score').val();
	var errors = "Please Fill in:";
	var errorMsg = "";
	var english_exam = $("#search_eligible #cnt_test").val();

	if(english_exam != '' && english_exam != 'undefined' && english_exam != undefined && overall_score != 'undefined' && overall_score != undefined && overall_score != '')
	{
		if(!$.isNumeric(overall_score)){
			errorMsg = "Only numeric.";										
		}else{
			if(english_exam == "3" || english_exam == 3) {
				if(overall_score < 1 ||  overall_score > 340){
					errorMsg = "Overall Score between 1 and 340";
				}
				
			} else if(english_exam == "4" || english_exam == 4) {
				if(overall_score < 1 ||  overall_score > 800){
					errorMsg = "Overall Score between 1 and 800";
				}
				
			} else if(english_exam == "5" || english_exam == 5) {
				if(overall_score < 1 ||  overall_score > 1600){
					errorMsg = "Overall Score between 1 and 1600";
				}
				
			}
		}
		
	}
	
	if(errorMsg != ''){
		$('#step4_error').remove();
		$('#search_eligible #overall_test_score').parent().parent().find('.eligibility-errors').remove();
		var ihtml = errors+" "+errorMsg ;
		$('#search_eligible #overall_test_score').after("<input type='hidden' name='step4_error' id='step4_error' value='"+ihtml+"'>");
		$('#search_eligible #overall_test_score').parent().parent().append('<span class="eligibility-errors text-danger 1">'+ihtml+'</span>');
	}else{
		$('#step4_error').remove();
	}

});
//}
$(document).on('keypress input', 'input.otp-verify', function(e) { 
	if($(this).val() != '' && $(this).val() != 'undefined' && $(this).val() != undefined){
		$(this).next().trigger('focus')
	}	
});

/* //otp input js
const $inp = $(".otp-input");

$inp.on({
  paste(ev) { // Handle Pasting

    const clip = ev.originalEvent.clipboardData.getData('text').trim();
    // Allow numbers only
    if (!/\d{6}/.test(clip)) return ev.preventDefault(); // Invalid. Exit here
    // Split string to Array or characters
    const s = [...clip];
    // Populate inputs. Focus last input.
    $inp.val(i => s[i]).eq(5).focus();
  },
  input(ev) { // Handle typing

    const i = $inp.index(this);
    if (this.value) $inp.eq(i + 1).focus();
  },
  keydown(ev) { // Handle Deleting

    const i = $inp.index(this);
    if (!this.value && ev.key === "Backspace" && i) $inp.eq(i - 1).focus();
  }

}); */

//$('input.otp-verify').on('keypress', function(e) { $(this).next().trigger('focus') });


//enable tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
//dashboard chat popup
$('.chat__header').click(function () {
  $('.chat').toggleClass('open');
})

//chatpopup date drodown show
$('.chip-name').click(function () {
  $(this).parent().toggleClass('show');
})

//chatpopup date dropmenu selection
$('.date-dropmenu > span').click(function () {
  $('span.selected').removeClass('selected');
  $(this).addClass('selected');
  // $('.date').removeClass('show')
})

//chat autoscroll to the latest
if ($('.chat__body')[0]) {
  $('.chat__body') && $('.chat__body').scrollTop($('.chat__body')[0].scrollHeight);
}


function setAppdateTime(time){
	$('#zoomScheduleModal #time').val(time);
}

$(document).on('click', '.floating-icons__link', function(e) { $('form input').val(''); $('form .with-errors').html('');  });

window.addEventListener("load", function () {
	var pathname = window.location.pathname;
	
	if(pathname.includes("/program/")){
	  setTimeout(
		function open(event) {
		  $("#ExpressAdmissionModal").modal('show');
		},
		30000
	  )
	}
});


function prgmShortlist(prgid,uni_id,screen)
{
	
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/prgm-shortlist",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id},
		success: function( response ) {
			var id = '#program--card--'+prgid;
			console.log(response);
			if(response == 1){
				var id = '#program--card--'+prgid;
				var idc = '#program--column--'+prgid;
			
				$(id+' .desktopshortlist span').addClass("checked");
				$(id+' .desktopshortlist p').html("Shortlisted");
				$(id+' .mobileshortlist span').addClass("checked");
				//console.log($(idc).length);
				if($(idc).length > 0){
					//console.log('yes');
					$(idc+' .desktopshortlist span').addClass("checked");
					$(idc+' .mobileshortlist span').addClass("checked");
				}
				
			}else if(response == 2){
				var id = '#program--card--'+prgid;
				var idc = '#program--column--'+prgid;
				$(id+' .desktopshortlist span').removeClass("checked");
				$(id+' .desktopshortlist p').html("Shortlist");
				$(id+' .mobileshortlist span').removeClass("checked");
				if($(idc).length > 0){
					$(idc+' .desktopshortlist span').removeClass("checked");
					$(idc+' .mobileshortlist span').removeClass("checked");
				}
			} 
		}
	});
}
function prgmShortlistm(prgid,uni_id,screen)
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/prgm-shortlist",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id},
		success: function( response ) {
			
			if(response == 1){
				var id = '#program--card--'+prgid;
				$(id+' .desktopshortlist span').addClass("checked");
				$(id+' .desktopshortlist p').html("Shortlisted");
				$(id+' .mobileshortlist span').addClass("checked");
			}else if(response == 2){
				var id = '#program--card--'+prgid;
				$(id+' .desktopshortlist span').removeClass("checked");
				$(id+' .desktopshortlist p').html("Shortlist");
				$(id+' .mobileshortlist span').removeClass("checked");
			} 
		}
	});
}

function prgmdetailShortlist(prgid,uni_id,screen)
{
	
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/prgm-shortlist",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id},
		success: function( response ) {
			var id = '#program--card--'+prgid;
			console.log(response);
			if(response == 1){
				var id = '#program--card--'+prgid;
			
				$('.instituteDetail--container .program--card--header .desktopshortlist span').addClass("checked");
				$(id+' .mobileshortlist span').addClass("checked");
			}else if(response == 2){				
				$('.instituteDetail--container .program--card--header .desktopshortlist span').removeClass("checked");
				$(id+' .mobileshortlist span').removeClass("checked");
			} 
		}
	});
}
function prgmdetailShortlistm(prgid,uni_id,screen)
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/prgm-shortlist",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id},
		success: function( response ) {
			
			if(response == 1){
				$('.instituteDetail--container .program--card--header .desktopshortlist span').addClass("checked");
				
				$('#mobileshortlist span').addClass("checked");
			}else if(response == 2){
				
				$('.instituteDetail--container .program--card--header .desktopshortlist span').removeClass("checked");
				$('#mobileshortlist span').removeClass("checked");
			} 
		}
	});
}
$(document).on('click', '.mega--title', function(e) {
	if($(".nav-right .mobile").css('display') == 'block'){
		//console.log($(this).text());
		if($(this).text() == 'Explore by Institutes'){
			if($(this).parent().parent().find(".mega--list").hasClass('dfade')){
				
				$(this).parent().parent().find(".mega--list").removeClass("dfade");
			}else{
				
				$(this).parent().parent().find(".mega--list").addClass("dfade");
			}
		}else{
			if($(this).parent().find(".mega--list").hasClass('dfade')){
				
				$(this).parent().find(".mega--list").removeClass("dfade");
			}else{
				
				$(this).parent().find(".mega--list").addClass("dfade");
			}
		}
	}
});

function ApplyApp(prgid,uni_id,userid)
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/apply-app",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id,userid:userid},
		success: function( response ) {
			/* console.log(response);
			return false; */
			var html="";
			var html1="";
			$('#applyModal1 .applyModal--uni').removeClass('success');
			if(response == 1){
				html ='<span class="text--light text--semi">Application applied successfully and moved to Draft.</span>';
				html1 ='Applied';
				var divid = '#program--card--'+prgid;
				var id = '#app--prg--'+prgid;
				//var lid = '#li-'+uni_id+'-'+prgid;
				console.log(divid);
				if($(divid).length > 0){

					if($(divid).find('.mobileshortlist').length > 0 ){
						var mhtml ='<label class="custom--checkbox bookmark  mobileshortlist" onclick="prgmShortlistm('+prgid+','+uni_id+',mobile);return false;">				  <input type="checkbox"> <span class="custom--checkbox__bookmark checked"></span>					</label>';
						$(divid).find('.mobileshortlist').remove();
						$(divid).find('.program--card--header').append(mhtml);
						
					}
					$(divid).find(id).remove();
					$(divid).find('.desktopshortlist').remove();
					$(divid).find('.program--card--footer').prepend('<label class="custom--checkbox bookmark desktopshortlist" onclick="prgmShortlist('+prgid+','+uni_id+',);return false;">							<input type="checkbox">							<span class="custom--checkbox__bookmark checked"></span>							<p class="text--regular text--primary custom--checkbox__label ">Shortlisted</p>						  </label><a href="javascript:void(0);"  id="app--prg--'+prgid+'" class="button-rounded text--medium button-rounded__dark">Applied</a>');
				}
				if($(divid).length == 0 && $(id).length > 0){
					//$(id).find('.leadModal').remove();
					$(id).parent().prepend('<a href="javascript:void(0);"  class="button-rounded text--medium button-rounded__white">Applied</a>');
					var mhtml ='<label class="custom--checkbox bookmark  " onclick="prgmShortlistm('+prgid+','+uni_id+',mobile);return false;">				  <input type="checkbox"> <span class="custom--checkbox__bookmark checked"></span>					</label>';
					$(id).parent().parent().find('.leadModal').remove();
					$(id).parent().parent().find('.program--card--header').append(mhtml);
					$(id).remove();
					
				}
				/* if($(lid).length > 0){
					
					$(lid).find('.leadModal').remove();
					$(lid).find('.delete').before('<a href="javascript:void(0)" class="button-rounded button-rounded__dark draftapplied-btnrounded"><div class="icons8-donehover"></div><span class="icons8-done"></span>In Draft</a>');
				} */
				if($(divid).length == 0 && $('.checkshortelig').length > 0 && $('.checkshortelig').find(id).length == 1){
					$('.checkshortelig').html('');
					var phtml ='<label class="custom--checkbox bookmark desktopshortlist" onclick="prgmShortlist('+prgid+','+uni_id+',);return false;"><input type="checkbox"><span class="custom--checkbox__bookmark checked"></span></label><a href="javascript:void(0);"  id="app--prg--'+prgid+'" class="button-rounded text--medium button-rounded__dark">Applied</a>';
					$('.checkshortelig').html(phtml);
				}
				$('#applyModal1 .applyModal--uni').addClass('success');
			}else if(response == 2){
				html1 ='Error!!';
				html ='<span class="text--light text--semi">Student Not Found.</span>';
			}else if(response == 3){
				html1 ='Reached limit!!';
				html ='<span class="text--light text--semi">Error! You have reached the maximum limit (20 applications/per applicant)</span>';
			}else if(response == 4){
				html1 ='Intakes Closed!!';
				html ='<span class="text--light text--semi">All intakes are now closed for this course.</span>';
			}else if(response == 5){
				html1 ='Already Applied!!';
				html ='<span class="text--light text--semi">You have already applied to this course.</span>';
			}else{
				html1 ='Error!!';
				html ='<span class="text--light text--semi">Data not found.</span>';
			}
			
			$('#applyModal1 .applyModal--uni').html('');
			$('#applyModal1 .applyModal--uni').html(html);
			$('#applyModal1 .delete--modal--message').html('');
			$('#applyModal1 .delete--modal--message').html(html1);
			$("#applyModal1").toggle();
			$("#applyModal1").addClass("show");
			$("#applyModal1").addClass("fade");
			$("body").addClass("modal-open");
			$("body").append('<div class="modal-backdrop show fade"></div>');
		}
	});
}

$('#applyModal1 .closeModal').on('click' , function(){
	$("#applyModal1").toggle();
	$("#applyModal1").removeClass("show");
	$("body").removeClass("modal-open");
	$(".modal-backdrop").removeClass("show");
	$(".modal-backdrop").remove();
});

function prgmApplyShortlist(prgid,uni_id)
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/prgm-apply-shortlist",
		type: "POST",
		data: {prgm_id:prgid,uni_id:uni_id},
		success: function( response ) {
			
			if(response == 1){
				window.location = "/signup";
				
			}
		}
	});
}


function uniShortlist(uni_id,screen)
{
	
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/uni-shortlist",
		type: "POST",
		data: {uni_id:uni_id},
		success: function( response ) {
			console.log(response);
			if(response == 1){
				$('.program--row .program--card--header .udesktopshortlist span').addClass("checked");
				
				$('.umobileshortlist span').addClass("checked");
				$("#ExpressAdmissionModal").modal('show');
			}else if(response == 2){
				
				$('.program--row .program--card--header .udesktopshortlist span').removeClass("checked");
				$('.umobileshortlist span').removeClass("checked");
			} 
		}
	});
}

