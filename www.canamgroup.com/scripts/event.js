    // JQuery File for all Event-Pages
    
    $(document).on('click','#event_reg', function(event){
        $("#event_reg_form").validate({
    		rules: {
    			name: "required",
    			email: "required",
    			phone: {
    				required: true,
    				mobileValidation: $("#phone").val(),
    			}
    		},
    		messages :{
    				name : {
    					required : 'Please enter Full name'
    				},
    				email : {
    					required : 'Please enter valid Email'
    				},
    				phone : {
    					required : 'Please enter Phone'
    				}
    			},
    		errorPlacement: function(error, element) {
    			var placement = $(element).data('error');
    			//console.log($(element[0]).attr('id'));
    			if ($(element[0]).attr('id') == 'name') {
    				$('#err_name').append(error);
    			} else if($(element[0]).attr('id') == 'email') { 
    				$('#err_email').append(error);
    			} else if($(element[0]).attr('id') == 'phone') { 
    				$('#err_phone').append(error);
    			} 
    		},
    		submitHandler : function(form) {
    			//if (confirm("Are you sure want to update information ?")) {
    				$.ajaxSetup({
    					headers: {
    					'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
    					}
    				});
    				$.ajax({
    					url: "/event-reg",
    					type: "POST",
    					data: $('#event_reg_form').serialize(),
    					success: function( response ) {
    						 console.log(response);
    						if(response == 1)
    						{
    							var mobile = $('#phone').val();
    							//var page_name = $('#page_name').val();
    							var email = $('#email').val();
    							var mobile_masking = mobile.replace(mobile.substring(1,5),"****");
    							var email_masking = email.replace(email.substring(1,3),"***");
    							$('#otpContentContainer').html('');
    							$('#otpContentContainer').html('<div class="stepper--content otp" id="step2"><form method="post" id="eventcommonotpsubmit"><div class="form--header"><h1 class="text--semi text--dark">Enter OTP</h1></div><p class="otp--header text--regular text--light" >Please enter the verification code shared to <span class="text--dark text--medium">'+mobile_masking+' </span> & <span class="text--dark text--medium">'+email_masking+'</span></p><div class="form--group"><div class="otp-wrapper"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="0" name="otpsub0" id="otpsub0"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="1" name="otpsub1" id="otpsub1"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="2" name="otpsub2" id="otpsub2"><input class="otp-input otp-verify" type="tel" maxlength="1" data-index="3" name="otpsub3" id="otpsub3"></div><p class="text--red text--regular invalid-message hidden mt-10" id="eventotpsenderro"></p></div><div class="already resend"><p class="text--regular text--dark">Still not recieved OTP? <a href="javascript:void(0);" onclick="eventOtpResend()" class="text--red text--medium">Resend OTP</a></p></div><div class="submit"><input type="hidden" name="otp_mobile_number" id="otp_mobile_number" value="'+mobile+'" /><a href="javascript:void(0);" onclick="eventtOtpSubmit();" class="d-block text--medium button-rounded button-rounded__dark"  id="sendRequest">Submit</a></div></form></div>');
    							
    							$('#requestModal').modal('show');
    						}	
    					}
    				});
    			//}
    		}    
    	});
    });


         
    
    function eventtOtpSubmit()
    {
    	 console.log('hello');
    	$('#eventotpsenderro').html('');
    	var otpsub0 = $("#otpsub0").val();
    	var otpsub1 = $("#otpsub1").val();
    	var otpsub2 = $("#otpsub2").val();
    	var otpsub3 = $("#otpsub3").val();
    	if(otpsub0.trim() == '' || otpsub1.trim() == '' || otpsub2.trim() == '' || otpsub3.trim() == '')
    	{
    		$('#eventotpsenderro').html('Please enter required field');
    		$('#eventotpsenderro').removeClass('hidden');
    		return false;
    	}	
    	$.ajaxSetup({
    		headers: {
    		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
    		}
    	});
    	$.ajax({
    		url: "/event-otp-form-submit",
    		type: "POST",
    		data: $('#eventcommonotpsubmit').serialize(),
    		success: function( response ) {
    			
    			if(response == 1)
    			{
    				$('#requestModal').modal('hide');
    				$('#event_reg_form')[0].reset();
    				window.location="/event-thank-you";
    				//$('#requestSendModal').modal('show');
    			}
    			else if(response == 2) { 
    				$('#eventotpsenderro').html('Invalid http request');
    				$('#eventotpsenderro').removeClass('hidden');
    			}
    			else
    			{
    				$('#eventotpsenderro').html('Invalid OTP');
    				$('#eventotpsenderro').removeClass('hidden');
    			}		
    	
    		}
    	});
    		
    }
    
    function eventOtpResend()
    {
    	$.ajaxSetup({
    		headers: {
    		'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
    		}
    	});
    	$.ajax({
    		url: "/event-otp-resend",
    		type: "POST",
    		data: {mobile:$('#otp_mobile_number').val(),page_name:$("#contact_otp_page_name").val()},
    		success: function( response ) {
    			$('#eventotpsenderro').html('');
    			if(response == 1)
    			{
    				$('#eventotpsenderro').html('Otp has been send successfully');
    				$('#eventotpsenderro').removeClass('text--red');
    				$('#eventotpsenderro').addClass('text--green');
    				$('#eventotpsenderro').removeClass('hidden');
    			}
    			else
    			{
    				$('#eventotpsenderro').html('Invalid OTP');
    				$('#eventotpsenderro').removeClass('hidden');
    			}	 
    	
    		}
    	});
    }
    
    /*$('input[type="radio"]').click(function () {
        console.log('hi');
        var id= $(this).attr('id');
        console.log(id);
        if ($(this).attr('id') == 'vet') {
            console.log('hello123');
           $('#branch_location').prop("disabled", true);
           $("#branch_location").selectpicker("refresh");
        }
        if ($(this).attr('id') == 'pet') {
            console.log('hello555');
            $('#branch_location').prop("disabled", false);
            $("#branch_location").selectpicker("refresh");
        }
    });*/
    
    
    $(".university-picker").on("change", function () {
        console.log('hi2');
        var $self = $(this);
        var prev_value = $self.data("previous_value");
        var cur_value = $self.val();

        $(".university-picker").not($self).find("option").filter(function () {
            return $(this).val() == prev_value;
        }).prop("disabled", false);

        if (cur_value !== "") {
            $(".university-picker").not($self).find("option").filter(function () {
                return $(this).val() == cur_value;
            }).prop("disabled", true);

            $self.data("previous_value", cur_value);
        }
        $('.university-picker').selectpicker("refresh");
    });
    
    $(".discipline-picker").on("change", function () {
        console.log('hi2');
        var $self = $(this);
        var prev_value = $self.data("previous_value");
        var cur_value = $self.val();

        $(".discipline-picker").not($self).find("option").filter(function () {
            return $(this).val() == prev_value;
        }).prop("disabled", false);

        if (cur_value !== "") {
            $(".discipline-picker").not($self).find("option").filter(function () {
                return $(this).val() == cur_value;
            }).prop("disabled", true);

            $self.data("previous_value", cur_value);
        }
        $('.discipline-picker').selectpicker("refresh");
    });
    
    $(".search-event-filter").on("change", function (event) {
        
        event.preventDefault();
        event.stopImmediatePropagation();
        
        $p_id = $(this).closest('.hero').parents('div').attr('id');
		$type = (($p_id == 'virtual') ? 1 : ($p_id == 'person' ? 2 : ($p_id == 'hybrid' ? 3 : 0 )));
		$data = $('#'+$p_id).find('.search-event').serialize();
        $.ajax({
			url: "/events-search/"+$type,
			type: "POST",
			data: $data,
			success: function( response ) {
				if(response)
				{
				    $('#'+$p_id).find('.row').html(response);
				}	
			}
		});
    });
    
    
        