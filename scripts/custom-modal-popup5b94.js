/*24022023*/

function popupcommonotpsubmit()
{
	$('#otpsenderro').html('');
	var otpsub0 = $("#otpsub0").val();
	var otpsub1 = $("#otpsub1").val();
	var otpsub2 = $("#otpsub2").val();
	var otpsub3 = $("#otpsub3").val();
	var otp_page_name = $("#otp_page_name").val();
	var nearestlocation = $("#otp_nearest_location").val();
	if(otpsub0.trim() == '' || otpsub1.trim() == '' || otpsub2.trim() == '' || otpsub3.trim() == '')
	{
		$('#otpsenderro').html('Please enter required field');
		$('#otpsenderro').removeClass('hidden');
		return false;
	}	
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/popup-otp-form-submit",
		type: "POST",
		data: $('#popupcommonotpsubmit').serialize(),
		success: function( response ) {
			var data=response;
			var res = data.split('~||~');
			// if(res[0] == 1)
			// {
				
				//$('#requestSendModal').modal('show');
				/* CustomPopupCode */
				var day = new Date();
				var d = new Date(),
					s = "05.30 PM",
					parts = s.match(/(\d+)\.(\d+) (\w+)/),
					hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
					minutes = parseInt(parts[2], 10);
				d.setHours(hours);
				d.setMinutes(minutes);		
				var txtmsg='';	
				if(d.getTime() <= day.getTime()){
					txtmsg = '<p class="text--light text--regular delete--modal--desc ">Virtual counseling is conducted between 10:00 AM - 5:30 PM. Connect with us tomorrow using the same link or wait for us to call you back.</p>';
				}
				if(res[0] == 1)
				{
					$('#requestSendModal .modal-body').html('');
					if(res[1] !='' ){
						if(nearestlocation.trim() == 'iApply'){
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Request for Virtual Counseling saved Successfully</p>'+txtmsg+'<p class="text--light text--regular delete--modal--desc mb5"><a href="'+res[1]+'">'+res[1]+'</a></p><p class="text--light text--regular delete--modal--desc"><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span></p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18008901775" target="_blank">1800 890 1775</a></p><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo"> WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918598000333&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918598000333</a></p></div></div>');
							
							
						}
						else {
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Request for Virtual Counseling saved Successfully</p>'+txtmsg+'<p class="text--light text--regular delete--modal--desc mb5"><a target ="_blank" href="'+res[1]+'">'+res[1]+'</a></p><p class="text--light text--regular delete--modal--desc"><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span></p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18001378055" target="_blank">1800 137 8055</a></p><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo"> WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918968300000&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918968300000</a></p></div></div>');
						}	
					}
					else{
						if(nearestlocation.trim() == 'iApply'){
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18008901775" target="_blank">1800 890 1775</a></p><p class="text--light text--regular delete--modal--desc"> <img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918598000333&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918598000333</a></p></div></div>');
						}
						else{
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18001378055" target="_blank">1800 137 8055</a></p> <p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918968300000&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918968300000</a></p></div></div>');
						}
					}
					$('#requestModal').modal('hide');
					$("#footer-modal-popup-form-location").val('');
					$("#footer-modal-popup-form-location").selectpicker("refresh");
					$('#footer-modal-popup-form')[0].reset();
					$('#requestSendModal').modal('show');
				/* CustomPopupCode */
				
			}
			else if(response == 2) { 
				$('#contactotpsenderro').html('Invalid http request');
				$('#contactotpsenderro').removeClass('hidden');
			}
			else
			{
				$('#contactotpsenderro').html('Invalid OTP');
				$('#contactotpsenderro').removeClass('hidden');
			}		
	
	//	}
		}
	});
		
}
$(".social-submit-modal").click(function () {
  if(this.id == 'zoomRequestLink') {
	$('form .with-errors').html('');
	$('.footerModalText').html('');
	$('.footerModalText').html('<p class="text--semi text--dark virtmodaltitlealll">Schedule a Zoom Counselling Session</p><p class="otp--header text--regular text--light">Please provide the following details to help us  arrange a Zoom Counselling Session</p>');
	$('#footer-modal-popup-schedule-section').css('display','none');
	$('#fmpfcheckval').val(0);
	$('#fmpfpagename').val('zoomformenq');
	$('#SchdZoomVirtualMeetModal').removeClass('show');
	$('#SchdZoomVirtualMeetModal').css('display','none');
	$('.modal-backdrop').remove();
	$('#zoomScheduleFooterModal').modal('show'); 
  }
  if(this.id == 'zoomScheduleLink') {
	$('form .with-errors').html('');
	$('.footerModalText').html('');
	$('.footerModalText').html('<p class="text--semi text--dark virtmodaltitlealll">Schedule an Online Appointment</p><p class="otp--header text--regular text--light">Please provide the date and time that works best for you.</p>');
	$('#footer-modal-popup-schedule-section').css('display','flex');
	$('#fmpfcheckval').val(1);
	$('#fmpfpagename').val('scheduleformenq');
	$('#SchdZoomVirtualMeetModal').removeClass('show');
	$('#SchdZoomVirtualMeetModal').css('display','none');
	$('.modal-backdrop').remove();
	$('#zoomScheduleFooterModal').modal('show');
  }
})
$(document).ready(function () {
	jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
	
}, "Please enter letters only");
jQuery.validator.addMethod("validate_email", function(value, element) {

    if (/(.+)@(.+)\.(.+)/i.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please enter a valid Email.");
}) 
$('#footer-modal-popup-form').validate({
		rules: {
			fmpfname: {
				required: true,
				lettersonly: true
			},
			fmpfemail: {
				required: true,
				validate_email:true
			},
			fmpfmobile: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 10
			},
			fmpfcity: {
				required: true,
			},
			fmpflocation: {
				required: true,
			}
		},
		messages : {
			fmpfname : {
				required : 'Please enter full name'
			},
			fmpfemail : {
				required : 'Please enter email'
			},
			fmpfmobile : {
				required : 'Please enter phone',
				maxlength: 'Please enter 10 digits only'
			},
			fmpfcity : {
				required : 'Please enter city'
			},
			fmpflocation : {
				required : 'Please select canam office'
			}
		},
		highlight: function(element, errorClass) {
			$(element).removeClass(errorClass); //prevent class to be added to selects
		}, 
		errorPlacement: function(error, element) {
			switch(element.attr("name")){
				case 'fmpfname': 
					error.appendTo('#err_fmpf_name');
					break;
				case 'fmpfmobile': 				 
					error.appendTo('#err_fmpf_mobile');
					break; 
				case 'fmpfemail': 
					error.appendTo('#err_fmpf_email');
					break;
				case 'fmpfcity': 
					error.appendTo('#err_fmpf_city');
					break;
				case 'fmpflocation': 
					error.appendTo('#err_fmpf_location');
					break;								
			}
		}
});
$('#footer-modal-popup-form').on('submit', function(e){
   e.preventDefault();
   $('.with-errors').html('');
   var k=1;
   if($('#footer-modal-popup-form').valid()){
	k=0;
   }
   var chkpagename = $("#fmpfpagename").val();
   if(chkpagename.trim() == 'scheduleformenq' ){
       var modaldob =  $('#footer-modal-popup-form-dob').val();
       var modaltime = $('#footer-modal-popup-form-time').val();
       if(modaldob == ''){
          $('#err_fmpf_date').html('<label class="error">Please select preferred date</label>');    
          k++;       
       }
       if(modaltime == ''){
          $('#err_fmpf_time').html('<label class="error">Please select preferred time</label>');    
          k++;       
       }
       
   }
   
   
   if(k > 0) {
		return false;
	}
  else 
	{
		var mobile = $("#footer-modal-popup-form-mobile").val();
		var email = $("#footer-modal-popup-form-email").val();
		var email_star = email.replace(/(\w{1})(.*)(\w{1})@(.*)/, '$1***$3@$4');
		var mobile_star =  mobile.replace(/(\d{2})(.*)(\d{4})/, '$1****$3');
		var fmpfpagename = $("#fmpfpagename").val();
		var nearestlocation = $("#footer-modal-popup-form-location").val();
		$.ajax({
			url: "/modal-popup-form-submit", 
			type: "POST",             
			data: $('#footer-modal-popup-form').serialize(),
			cache: false,             
			processData: false,  
			beforeSend: function() {		
				$('.loaderon-allmodal').show();
			},						
			success: function(result) {
				if(result  == 1){
					$('#otpContentContainer').html('');
					$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="popupcommonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code send to <span class="text--dark text--medium">'+mobile_star+' </span> & <span class="text--dark text--medium">'+email_star+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="contactotpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="fpopupResendSubmit()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_page_name" id="contact_otp_page_name" value="'+fmpfpagename+'" /><input type="hidden" name="otp_mobile_number" id="contact_otp_mobile_number" value="'+mobile+'" /><input type="hidden" name="otp_nearest_location" id="otp_nearest_location" value="'+nearestlocation+'" /><a href="javascript:void(0);" onclick="popupcommonotpsubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="popupsendRequest">Submit</a></div></form></div>');
					$('.loaderon-allmodal').hide();
					$('#zoomScheduleFooterModal').modal('hide');
					$('#requestModal').modal('show');
						
				}
			}
		})		
	}	
})
function fpopupResendSubmit()
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/popup-otp-resend",
		type: "POST",
		data: {mobile:$('#contact_otp_mobile_number').val(),page_name:$("#contact_otp_page_name").val()},
		success: function( response ) {
			$('#contactotpsenderro').html('');
			if(response == 1)
			{
				$('#contactotpsenderro').html('Otp has been send successfully');
				$('#contactotpsenderro').removeClass('text--red');
				$('#contactotpsenderro').addClass('text--green');
				$('#contactotpsenderro').removeClass('hidden');
			}
			else
			{
				$('#contactotpsenderro').html('Invalid OTP');
				$('#contactotpsenderro').removeClass('hidden');
			}	 
	
		}
	});
}

/*24022023*/