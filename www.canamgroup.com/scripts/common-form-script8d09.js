

        google.maps.event.addDomListener(window, 'load', initialize);

  

        function initialize() {

            var input = document.getElementById('city');
			var inputcity = document.getElementById('footer-modal-popup-form-city');
			//err_counseling_mode
			
			$('.pac-container').addClass('laggayi');
			setTimeout(function(){ 
				$( ".pac-container" ).each(function( index ) {
					$( this ).addClass('pac-container_'+index)
				  //console.log( index + ": " + $( this ).text() );
				});
            }, 300);
			
			var options = {
			  //types: ['(cities)'],
			  componentRestrictions: {country: "in"}
			};
			
			/* */
			var autocomplete2 = new google.maps.places.Autocomplete(inputcity,options);
				autocomplete2.addListener('place_changed', function () {
				var place = autocomplete2.getPlace();
				var statename = null;
				for (var i = 0; i < place.address_components.length; i++) { 
				  place.address_components[i].short_name;	
				  if (place.address_components[i].short_name === "PB") { 
					statename = place.address_components[i].short_name;
					break;
				  } 
				}
				/* Ajax */
				
				$.ajaxSetup({
					headers: {
					'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
					}
				});
				$('.loaderon-allmodal').show();	
				var fmpfcheckval = $('#fmpfcheckval').val();	
				$.ajax({
					url: "/getpopuplocationcity",
					type: "POST",
					data: {lat:place.geometry['location'].lat(),lng:place.geometry['location'].lng(),state:statename,csmode:fmpfcheckval},
					success: function( response ) {
						var data=response;
						var res = data.split('~||~');
						//console.log('test2');
						$('#footer-modal-popup-form-location').html('');	
						$('#footer-modal-popup-form-location').html(res[1]);	
						$('#footer-modal-popup-form-location').selectpicker('refresh');	
						$('.loaderon-allmodal').hide();
					}
				});
			});
			/* */
			
            var autocomplete = new google.maps.places.Autocomplete(input,options);
            autocomplete.addListener('place_changed', function () {
			var place = autocomplete.getPlace();
			// console.log(place);
			//console.log(place.address_components);
			//console.log('test');
			var statename = null;
			for (var i = 0; i < place.address_components.length; i++) { 
			  place.address_components[i].short_name;	
			  if (place.address_components[i].short_name === "PB") { 
				statename = place.address_components[i].short_name;
				break;
			  } 
			}

		



				

				

				// $('#latitude').val(place.geometry['location'].lat());
                // $('#longitude').val(place.geometry['location'].lng());
				//alert(place.geometry['location'].lat()+"lat"+place.geometry['location'].lng());
				var cnsmode = $('#counseling_mode').val();
				$.ajaxSetup({
					headers: {
					'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
					}
				});
				$('.newModeCheck').css('display','block');
				$('.in_office_div').css('display','none');
				$('.schedule_div').css('display','none');
				$('#counseling_mode').attr("disabled",false);
				$('#counseling_mode').selectpicker('val', ['']);
				//$('#counseling_mode').selectpicker('refresh');	
				
				$('#counseling_mode_type').selectpicker('val', ['']);
				//$('#counseling_mode_type').selectpicker('refresh');
				$('.loaderon-loagingcity').show();				
				$.ajax({
					url: "/getlocationcity",
					type: "POST",
					data: {lat:place.geometry['location'].lat(),lng:place.geometry['location'].lng(),csmode:cnsmode,state:statename},
					success: function( response ) {
						var data=response;
						var res = data.split('~||~');
						$('#nearestlocation').html('');	
						/* if(res[0] == 1)
						{
							$('#counseling_mode option:selected').val('1');	
						} */
						$('#nearestlocation').html(res[1]);	
						$('#nearestlocation').selectpicker('refresh');	
						
						if($('#nearestlocation').val() == "iApply"){
							$('#counseling_mode').val(1);
							$('#counseling_mode').attr("disabled",true);
							$('#counseling_mode').selectpicker('refresh');
							$('.newModeCheck').css('display','none');
							modechange();
						}
						$('.loaderon-loagingcity').hide();
					}
				});

            });

        }
		function selectmode(branchname)
		{
			$("#counseling_mode option:contains('In Office')").prop('disabled', false);
			$('#counseling_mode option[value=1]').prop("selected", false);
			if(branchname.trim() == 'iApply')
			{
				$("#counseling_mode option:contains('In Office')").prop('disabled', true);
				$('#counseling_mode option[value=1]').prop("selected", true);
			}
			$('#counseling_mode').selectpicker('refresh');			
		}
		function modechange()
		{
			var counseling_mode =$("#counseling_mode").val();
			if(counseling_mode != '' && counseling_mode != 'undefined' && counseling_mode != undefined ){
				if(counseling_mode == 1 ){
					$('.in_office_div').css('display','block');
				}else{
					$('.in_office_div').css('display','none');
					$('.schedule_div').css('display','none');
				}
			}
		}
		
 
  	


$(document).ready(function () {
$("#newenquiryForm").validate({
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
			counseling_mode: "required",
			agree: "required"
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
					required : 'Please select Preferred Country'
				},
				pref_intake : {
					required : 'Please select Intake'
				},
				counseling_mode : {
					required : 'Please select Mode of Counseling'
				},
				agree : {
					required : 'You must agree before submitting.'
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
			} else if($(element[0]).attr('id') == 'invalidCheck') { 
				$('#err_invalidCheck').append(error);
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
			$('#step1 .loaderon-loagingcity').show();
			$('#step1commonerror').html('');
			$('#step1commonerror').css('display','none');
			$.ajax({
				url: "/new-enquire-form",
				type: "POST",
				data: $('#newenquiryForm').serialize(),
				success: function( response ) {
					$('.fsmt-loder1').css('display','none;');
					if(response == 1)
					{

						var mobile = $('#newenquiryForm #mobile').val();
						var page_name = $('#newenquiryForm #page_name').val();
						var email = $('#newenquiryForm #email').val();
						var mobile_masking = mobile.replace(mobile.substring(1,5),"****");
						var email_masking = email.replace(email.substring(1,3),"***");
						$('.enqOtpmsg').html('');
						$('.enqOtpmsg').html('Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span>');
						$('#newenquiryForm #step1').removeClass('active');
						$('#enquiryForm_otp #step2').addClass('active');
						$('#newenquiryForm').css('display','none');
						$('#enquiryForm_otp').css('display','block');
					}	
					else
					{
						$('#step1commonerror').html('There is error for submit form');
						$('#step1commonerror').css('display','block');
					}	
					$('#step1 .loaderon-loagingcity').hide();
				}
			}); 
		}    
	});
});
/* Final Form Submit */
function secondFormSubmit(){
	var newotpsub0 = $('#newotpsub0').val();
	var newotpsub1 = $('#newotpsub1').val();
	var newotpsub2 = $('#newotpsub2').val();
	var newotpsub3 = $('#newotpsub3').val();
	$('.newenqerrors').html('');
	var k=0;
	if(newotpsub0.trim() == '' || newotpsub1.trim() == '' || newotpsub2.trim() == '' || newotpsub3.trim() == ''  ){
		$('#otpsenderro').html('Please enter otp');
		k++;
	}
	if(k > 0){
		return false;
	}else{
		// alert('dsf');
		$('#step2 .loaderon-loagingcity').show();
		$('#step2commonerror').html('');			
		$('#step2commonerror').css('display','none');
		$.ajaxSetup({
			headers: {
			'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
			}
		});
		$.ajax({
			url: "/final-enquire-form-submit",
			type: "POST",
			data: $('#enquiryForm_otp').serialize(),
			success: function( response ) {
				if(response == 1)
				{
					$('#newenquiryForm #step1').removeClass('active');
					$('#enquiryForm_otp #step2').removeClass('active');
					$('#enquiryForm_final_submit #step3').removeClass('active');
					$('#newenquiryForm').css('display','none');
					$('#enquiryForm_otp').css('display','none');
					$('#enquiryForm_final_submit').css('display','block');
				}
				else if(response == 2)
				{
					$('#step2commonerror').html('');
					$('#step2commonerror').html('Otp not matched');
					$('#step2commonerror').css('display','block');
				}	
				else
				{
					$('#step2commonerror').html('');
					$('#step2commonerror').html('There is issue for submit otp.');
					$('#step2commonerror').css('display','block');
				}	 
				$('#step2 .loaderon-loagingcity').hide();
			}
		});
	}	
}
function FinalFormSubmit(){
	$('.newenqerrors').html('');
	var k=0;
	var city = $('#city').val();
	var nearestlocation = $('#nearestlocation').val();
	var counseling_mode = $('#counseling_mode').val();
	var counseling_mode_type = $('#counseling_mode_type').val();
	var app_date = $('#app_date').val();
	var schedule_time = $('#schedule_time').val();
	if(city.trim() == ''){
		$('#err_city').html('Please enter city');
		k++;
	}
	if(nearestlocation.trim() == '')
	{
		$('#err_location').html('Please select canam office');
		k++;
		if(counseling_mode.trim() == '')
		{
			$('#err_counseling_mode').html('Please select counseling mode');
			k++;
		}
		
	}
	if(nearestlocation.trim() != '')
	{
		//console.log(nearestlocation);
		if(nearestlocation != 'iApply')
		{
			if(counseling_mode.trim() == '')
			{
				$('#err_counseling_mode').html('Please select counseling mode');
				k++;
			}		
		}
	}
	if(counseling_mode.trim() == 1 ||  counseling_mode.trim() == '1'){
		if(counseling_mode_type.trim() == '')
		{
			$('#err_counseling_mode_type').html('Please select connect mode');
			k++;
		}
	}
	
	if(counseling_mode_type.trim() != '')
	{
		if(counseling_mode_type.trim() == 'schedule')
		{
			if(app_date == '')
			{
				$('#err_app_date').html('Please select date');
				k++;
			}
			if(schedule_time == '')
			{
				$('#err_app_time').html('Please select time');
				k++;
			}
		}	
	}	
	if(k > 0) {
		return false;
	}else {
		$('#step3 .loaderon-loagingcity').show();
		$.ajax({
			url: "/enquire-form-submit",
			type: "POST",
			data: $('#enquiryForm_final_submit').serialize(),
			success: function( response ) {
				var data=response;
				var res = data.split('~||~');
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
							/* $('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Request for Virtual Counseling<br/> saved Successfully</p>  <p class="zoomlink"><a href="'+res[1]+'">'+res[1]+'</a></p><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us Toll Free:-<a href="tel:18008901775" target="_blank">1800 890 1775</a>, WhatsApp:-<a href="https://api.whatsapp.com/send?phone=918598000333&text=Hello, I want to talk to your counsellors to start with the study abroad process." target="_blank">8598000333</a> </p>'); */
							
							
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Request for Virtual Counseling saved Successfully</p>'+txtmsg+'<p class="text--light text--regular delete--modal--desc mb5"><a href="'+res[1]+'">'+res[1]+'</a></p><p class="text--light text--regular delete--modal--desc"><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span></p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18008901775" target="_blank">1800 890 1775</a></p><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo"> WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918598000333&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918598000333</a></p></div></div>');
							
							
						}
						else {
							/* $('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Request for Virtual Counseling<br/> saved Successfully</p>  <p class="zoomlink"><a href="'+res[1]+'">'+res[1]+'</a></p><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us Toll Free:-<a href="tel:18001378055" target="_blank">1800 137 8055</a>, WhatsApp:-<a href="https://api.whatsapp.com/send?phone=918968300000&text=Hello, I want to talk to your counsellors to start with the study abroad process." target="_blank">918968300000</a> </p>'); */
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Request for Virtual Counseling saved Successfully</p>'+txtmsg+'<p class="text--light text--regular delete--modal--desc mb5"><a target ="_blank" href="'+res[1]+'">'+res[1]+'</a></p><p class="text--light text--regular delete--modal--desc"><span class="joinnowbtn"><a href="'+res[1]+'" class="button-rounded button-rounded__dark header_menu">Join Now!</a></span></p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18001378055" target="_blank">1800 137 8055</a></p><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo"> WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918968300000&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918968300000</a></p></div></div>');
						}	
					}
					else{
						if(nearestlocation.trim() == 'iApply'){
						/* 	$('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p>  <p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us Toll Free:-<a href="tel:18008901775" target="_blank">1800 890 1775</a>, WhatsApp:-<a href="https://api.whatsapp.com/send?phone=918598000333&text=Hello, I want to talk to your counsellors to start with the study abroad process." target="_blank">918598000333</a> </p>'); */
							
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18008901775" target="_blank">1800 890 1775</a></p><p class="text--light text--regular delete--modal--desc"> <img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918598000333&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918598000333</a></p></div></div>');
						}
						else{
							/* $('#requestSendModal .modal-body').html('<img src="/assets/images/success-alert.svg" alt="success icon"> <p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p>  <p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us Toll Free:-<a href="tel:18001378055" target="_blank">1800 137 8055</a>, WhatsApp:-<a href="https://api.whatsapp.com/send?phone=918968300000&text=Hello, I want to talk to your counsellors to start with the study abroad process." target="_blank">918968300000</a> </p>');	 */
							
							$('#requestSendModal .modal-body').html('<div class="queryform-requestSendModal"><div class="mescucf"><img src="/assets/images/success-alert.svg" alt="success icon"><p class="text--dark delete--modal--meassage">Your information have been submitted successfully</p><p class="text--light text--regular delete--modal--desc">We will connect with you shortly</p></div><div class="faiumcutext"><p class="text--light text--regular delete--modal--desc">For any additional information, you may contact us</p></div><div class="contactinfrm"><p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/tollfreecallicon.svg" alt="tollfreeicon">Toll Free:- <a href="tel:18001378055" target="_blank">1800 137 8055</a></p> <p class="text--light text--regular delete--modal--desc"><img class="img-fluid" src="/assets/images/whatsappcallicon.svg" alt="Canam logo">WhatsApp:- <a href="https://api.whatsapp.com/send?phone=918968300000&amp;text=Hello,%20I%20want%20to%20talk%20to%20your%20counsellors%20to%20start%20with%20the%20study%20abroad%20process." target="_blank">918968300000</a></p></div></div>');
						}
					}
					$('#newenquiryForm')[0].reset();	
					$('#enquiryForm_otp')[0].reset();	
					$('#enquiryForm_final_submit')[0].reset();	
					$('#requestSendModal').modal('show');
				}
				else
				{
					$('#step3commonerror').html('');
					$('#step3commonerror').html('There is issue for submit otp.');
					$('#step3commonerror').css('display','block');
				}	 
				$('#step3 .loaderon-loagingcity').hide();
			}
		});
	}	
}
	/* Final Form Submit */
function changeEnquiryNum()
{
	if ($('.newphonenumber').css('display') == 'none')
    {
       $('.newphonenumber').css('display','block');
    }
	else{
		$('.newphonenumber').css('display','none');
	}
}
$("#enquiryForm_otp .form .btn-prev").click(function () {
    $('.stepper--content').removeClass('active');
    $(this).closest('.stepper--content').prev().addClass('active');
	$('#newenquiryForm').css('display','block');
	$('#enquiryForm_otp').css('display','none');
    
});
$(document).on('keypress input', '.otp-input', function(e) { 
	if($(this).val() != '' && $(this).val() != 'undefined' && $(this).val() != undefined){
		$(this).next().trigger('focus')
	}	
});
function NewcommonResend()
{
	$.ajaxSetup({
		headers: {
		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
		}
	});
	$.ajax({
		url: "/new-common-resend",
		type: "POST",
		data: {page_name:$("#page_name").val()},
		success: function( response ) {
			$('#otpsenderro').html('');
			if(response == 1)
			{
				$('#otpsenderro').html('Otp has been send successfully');
				$('#otpsenderro').removeClass('text--red');
				$('#otpsenderro').addClass('text--green');
				$('#otpsenderro').removeClass('hidden');
			}
			else
			{
				$('#otpsenderro').css('color','red');
				$('#otpsenderro').html('Invalid OTP');
				$('#otpsenderro').removeClass('hidden');
			}	 
	
		}
	});
}

$("#enq_newphonenumber").on("blur", function(){
        var mobNum = $(this).val();
        var filter = /^\d*(?:\.\d{1,2})?$/;
        if (filter.test(mobNum)) {
            if(mobNum.length==10){
                  
			} else {
                $('#phone_updterror').html('Please put 10  digit mobile number');
			    $('#phone_updterror').css('display','block');
                return false;
              }
        }
            else {
   
			  $('#phone_updterror').html('Not a valid number');
			  $('#phone_updterror').css('display','block');
              return false;
           }
    
  });

function updateChangeNum(){
	var newnum = $("#enq_newphonenumber").val();
	$('#phone_updterror').html('');
	$('#phone_updterror').css('display','none');
	$('#phone_numberupdtscs').css('display','none');
	if(newnum.trim() == '')
	{
		$('#phone_updterror').html('Please enter phone number');
		$('#phone_updterror').css('display','block');
		return false;
	}	
	$.ajax({
		url: "/update-phone-number",
		type: "POST",
		data: {page_name:$("#page_name").val(),newnum:$("#enq_newphonenumber").val()},
		success: function( response ) {
			$('#otpsenderro').html('');
			if(response == 1)
			{
				var email = $('#newenquiryForm #email').val();
				var mobile_masking = newnum.replace(newnum.substring(1,5),"****");
				var email_masking = email.replace(email.substring(1,3),"***");
				$('.enqOtpmsg').html('');
				$('.enqOtpmsg').html('Please enter the verification code send to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span>');
				$('#phone_numberupdtscs').html('Otp has been send successfully');
				$('#phone_numberupdtscs').css('display','block');
			}
			else
			{
				$('#phone_updterror').html('There is issue for sending otp');
				$('#phone_updterror').css('display','block');
			}	 
	
		}
	});
}


// $(document).on('click', "#enquiryForm_otp .form .arrow--button__nextBtn", function () {
		// var curStep = $(this).closest(".stepper--content"),
		// curStepBtn = curStep.attr("id");
		// if(curStepBtn == "step2") {
			// $('#enquiryForm #step1').removeClass('active');
			// $('#enquiryForm_otp #step2').addClass('active');

			// $('#enquiryForm').css('display','none');
			// $('#enquiryForm_otp').css('display','block');

			
		// }
// });
   // $("#enquiryForm #counseling_mode").change(function () {
			// alert('hi');
			// var counseling_mode =$('#counseling_mode_type').val();
			// if(counseling_mode != '' && counseling_mode != 'undefined' && counseling_mode != undefined ){
				// if(counseling_mode == 0 ){
					// $('.in_office_div').css('display','block');
				// }else{
					// $('.in_office_div').css('display','none');
				// }
			// }
	// });
    function show_virtual_option(){
		var counseling_mode =$('#counseling_mode_type').val();
		if(counseling_mode != '' && counseling_mode != 'undefined' && counseling_mode != undefined ){
			if(counseling_mode == 'schedule' ){
				$('.schedule_div').css('display','block');
			}else{
				$('.schedule_div').css('display','none');
			}
		}
		/* if($("#counseling_mode_type").is(':checked')){
			$('.schedule_div').css('display','block');
		}else{
			$('.schedule_div').css('display','none');
		} */
	}
   // $(document).on('click', "#enquiryForm #schedule", function () {
			
	// });
