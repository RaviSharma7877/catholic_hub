$("#loginform .check_remember").click(function (e) {
    var chkval = $('#check_remember').val();
    if(chkval == 0){
        $('.loginscreen #check_remember').val(1);
    }else{
        $('.loginscreen #check_remember').val(0);
    }
});

$("#loginform .arrow--button__nextBtn_new").click(function (e) {
  
  e.preventDefault();
  var curStep = $(this).closest(".stepper--content"),
      curStepBtn = curStep.attr("id"),
      curInputs = curStep.find("input[type='text'],input[type='url'],select"),
      isValid = true;
      $(".custom--input").removeClass("is-invalid");
      //console.log(curStepBtn);
      if(curStepBtn == "step1") {
          curInputs = curStep.find("input[required='required'],select");
          //console.log(curInputs.length);
          for(var i=0; i<curInputs.length; i++){
              var inputId = $(curInputs[i]).attr('id');
              var inputiddiv="#"+inputId;
              var errorMsg1="";
              $(inputiddiv).parent().parent().find('.invalid-message').remove();
              
              if(inputId == 'login_email'){
                  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                  var email = $('#login_email').val();
                  if(email != '' || email != undefined || email != 'undefined'){
                      if (!testEmail.test(email)){			
                          var errorMsg1 = 'Please enter valid email address.';						
                      }
                  }else{
                      var errorMsg1 = 'Please enter Email.';						
                  }
              }
              if(inputId == 'login_pass'){
                  //var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
                  var pass = $('#login_pass').val();
              
                  if(pass == '' || pass == undefined || pass == 'undefined'){
                      
                      var errorMsg1 = 'Please enter password.';						
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
              
              $('#loginform').submit();
                  
          }
          
      }		

});
  $("#loginform #step1").removeClass("active");
  $("#gen_loginotpform #step2").addClass("active");
$("#loginform .arrow--button__otpBtn").click(function () {	
  $('#loginform')[0].reset();
  $('#gen_loginotpform')[0].reset();
  $("#loginform .invalid-message").remove();
  $("#gen_loginotpform .invalid-message").remove();
  $("#loginform .is-invalid").removeClass("active");
  $("#gen_loginotpform .is-invalid").removeClass("active");
  $("#loginform #step1").removeClass("active");
  $("#gen_loginotpform #step2").addClass("active");
  
  
});
$("#gen_loginotpform .arrow--button__emailBtn").click(function () {  
  $('#loginform')[0].reset();
  $('#gen_loginotpform')[0].reset();
  $("#loginform .invalid-message").remove();
  $("#gen_loginotpform .invalid-message").remove();
  $("#loginform .is-invalid").removeClass("active");
  $("#gen_loginotpform .is-invalid").removeClass("active");
  $("#gen_loginotpform #step2").removeClass("active");
  $("#loginform #step1").addClass("active");
  
  
});

$("#gen_loginotpform #step2 .btn-prev").click(function () {

  $('#loginform')[0].reset();
  $('#gen_loginotpform')[0].reset();
  $("#loginform .invalid-message").remove();
  $("#gen_loginotpform .invalid-message").remove();
  $("#loginform .is-invalid").removeClass("active");
  $("#gen_loginotpform .is-invalid").removeClass("active");
  //$("#gen_loginotpform #step2").removeClass("active");
  //debugger;
  //console.log($("#step1"));
  $("#step1").removeClass("stepper--content").addClass("active");
   //console.log($("#step1"));
  //alert($("#loginform #step1").attr("class"));
  // debugger;
});
$("#loginotpform #step3 .btn-prev").click(function () {
  $("#gen_loginotpform .invalid-message").remove();
  $("#gen_loginotpform .is-invalid").removeClass("active");
  $("#loginotpform #step3").removeClass("active");
  $("#gen_loginotpform #step2").addClass("active");
});
//$(document).ready(function () {
// var wizard = (".wizard li");
// var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
// var wizardActive = (".wizard li.active");
$("#gen_loginotpform #step2 .arrow--button__nextBtn_new").click(function () {
  
  var wizard = (".wizard li");
  var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
  var wizardActive = (".wizard li.active");
  var curStep = $(this).closest(".stepper--content"),
      curStepBtn = curStep.attr("id"),
      curInputs = curStep.find("input[type='text'],input[type='url'],select"),
      isValid = true;
      $(".custom--input").removeClass("is-invalid");
      console.log(curStepBtn);
      if(curStepBtn == "step2") {
          curInputs = curStep.find("input[required='required'],select");
          
          var errors = "Please Fill in:";
          for(var i=0; i<curInputs.length; i++){
              var inputId = $(curInputs[i]).attr('id');
              var inputiddiv="#"+inputId;
              var errorMsg1="";
              $(inputiddiv).parent().parent().find('.invalid-message').remove();
                              
              if(inputId == 'gen_phone'){
                  var mobile = $('#gen_phone').val();
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
              
              if(errorMsg1 != undefined && errorMsg1 != '' && errorMsg1 != 'undefined' )
              {
                  isValid = false;
                  $(curInputs[i]).closest(".custom--input").addClass("is-invalid");
                  $(inputiddiv).parent().parent().append('<p class="text--regular text--red invalid-message">'+errorMsg1+'</p>');
              }
          }
          
          if(isValid == true) {
              
              var formData = $('#gen_loginotpform').serialize();
              
              $.ajaxSetup({
                  headers: {
                  'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                  }
              });
              $.ajax({
                  type: "POST",
                  url: '/testprep/genLoginOtp',
                  data:  formData,
                  async: false,
                  success: function(html){
                      if(html == 1 || html == '1'){
                          $('.loginerror').remove();
                          var phone = $('#gen_loginotpform #gen_phone').val();
                          
                          $('#loginotpform #otpmobile').val(phone);
                          
                          var mobile_masking = phone.replace(phone.substring(1,5),"****");
                          $('#loginotpform .otpnum').html(mobile_masking);
                          $("#gen_loginotpform #step2").removeClass("active");
                          $("#loginotpform #step3").addClass("active");

                          $(wizardActive).next().addClass('active');
                          $(wizardActive).prev().removeClass('active');
                          $(wizardActive).prev().addClass('completed');

                          $(userWizard).next().addClass('active');
                          $(userWizard).prev().removeClass('active');
                          
                      }else if(html == 2 || html == '2'){
                          $(".submit").append('<p class="text--regular text--red invalid-message loginerror">No record found.Please try again with different credentials.</p>');
                      }else{
                          $(".submit").append('<p class="text--regular text--red invalid-message loginerror">Sorry, Something went wrong.Please try again after sometime.</p>');
                      }				
                  }
              }); 
                  
          }
          
      }
      
  });
  
  $("#loginotpform #step3 .arrow--button__nextBtn_new").click(function () {
  
  var wizard = (".wizard li");
  var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
  var wizardActive = (".wizard li.active");
  var curStep = $(this).closest(".stepper--content"),
      curStepBtn = curStep.attr("id"),
      curInputs = curStep.find("input[type='text'],input[type='url'],select"),
      isValid = true;
      $(".custom--input").removeClass("is-invalid");
      console.log(curStepBtn);
          
      $('#loginotpform #otpsenderro').html('');
      
      curInputs = $('#step3').find(".otp-input");
     // console.log(curInputs.length);
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".custom--input").addClass("is-invalid");
                $('#loginotpform #otpsenderro').html('Please enter required field');
                $('#loginotpform #otpsenderro').removeClass('hidden');
          }
      }
      

      if(isValid == true) {
          
          var formData = $('#loginotpform').serialize();
          
          $.ajaxSetup({
              headers: {
              'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
              }
          });
          $.ajax({
              url: "/testprep/otplogin",
              type: "POST",
              data: formData,
              async: false,
              success: function( response ) {
                  response =  $.parseJSON(response);
                 
                  if(response.html == 1)
                  {
                      window.location = response.intended;
                      
                  }
                  else if(response.html == 2) { 
                      $('#loginotpform #otpsenderro').html('Invalid http request');
                      $('#loginotpform #otpsenderro').removeClass('hidden');
                  }
                  else
                  {
                      $('#loginotpform #otpsenderro').html('Invalid OTP');
                      $('#loginotpform #otpsenderro').removeClass('hidden');
                  }		
          
              }
          });
              
      }
      
  });
//});



function commonSignupResend()
{
  $.ajaxSetup({
    headers: {
    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
    }
  });
  $.ajax({
    url: "/testprep/signup-resend",
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

function commonLoginResend()
{
  $.ajaxSetup({
      headers: {
      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
      }
  });
  $.ajax({
      url: "/testprep/login-resend",
      type: "POST",
      data: {mobile:$('#loginotpform #otpmobile').val(),page_name:$("#loginotpform #page_name").val()},
      success: function( response ) {
          $('#loginotpform #otpsenderro').html('');
          if(response == 1)
          {
              $('#loginotpform #otpsenderro').html('Otp has been send successfully');
              $('#loginotpform #otpsenderro').removeClass('text--red');
              $('#loginotpform #otpsenderro').addClass('text--green');
              $('#loginotpform #otpsenderro').removeClass('hidden');
          }
          else
          {
              $('#loginotpform #otpsenderro').html('Invalid OTP');
              $('#loginotpform #otpsenderro').removeClass('hidden');
          }	 
  
      }
  });
}

$("#forgot_pass_form #step1 .arrow--button__nextBtn_new").click(function () {
  
  var wizard = (".wizard li");
  var userWizard = ('#userInitialWizard .stepper--wizard--item.active');
  var wizardActive = (".wizard li.active");
  var curStep = $(this).closest(".stepper--content"),
      curStepBtn = curStep.attr("id"),
      curInputs = curStep.find("input[type='text'],input[type='url'],select"),
  isValid = true;
  $(".custom--input").removeClass("is-invalid");
  console.log(curStepBtn);
  //if(curStepBtn == "step2") {
  curInputs = curStep.find("input[required='required'],select");
  
  var errors = "Please Fill in:";
  for(var i=0; i<curInputs.length; i++){
      var inputId = $(curInputs[i]).attr('id');
      var inputiddiv="#"+inputId;
      var errorMsg1="";
      $('.loginerror').remove();
                      
      
      if(inputId == 'email'){
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var email = $('#forgot_pass_form #email').val();
          if(email != '' || email != undefined || email != 'undefined'){
              if (!testEmail.test(email)){			
                  var errorMsg1 = 'Please enter valid email address.';						
              }
          }else{
              var errorMsg1 = 'Please enter Email.';						
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
      
      var formData = $('#forgot_pass_form').serialize();
      
      $.ajaxSetup({
          headers: {
          'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
          }
      });
      $.ajax({
          type: "POST",
          url: '/testprep/genresetpassLink',
          data:  formData,
          async: false,
          success: function(html){
              if(html == 1 || html == '1'){
                  $('.loginerror').remove();
                  $(".submit").append('<p class="text--regular text--green invalid-message loginerror">Password reset link has sent successfully on mail...</p>');
                  $('#forgot_pass_form')[0].reset();
              }else if(html == 2 || html == '2'){
                  $(".submit").append('<p class="text--regular text--red invalid-message loginerror">No record found.Please try again with different credentials.</p>');
              }else{
                  $(".submit").append('<p class="text--regular text--red invalid-message loginerror">Sorry, Something went wrong.Please try again after sometime.</p>');
              }				
          }
      }); 
          
  }
      
  //}
  
});

$("#reset_pass_form .button-rounded__dark").click(function () {
  
  var curStep = $(this).closest(".stepper--content"),
      curStepBtn = curStep.attr("id"),
      curInputs = curStep.find("input[type='text'],input[type='url'],select"),
  isValid = true;
  $(".custom--input").removeClass("is-invalid");
  console.log(curStepBtn);
  //if(curStepBtn == "step2") {
  curInputs = curStep.find("input[required='required'],select");
  
  var errors = "Please Fill in:";
  for(var i=0; i<curInputs.length; i++){
      var inputId = $(curInputs[i]).attr('id');
      var inputiddiv="#"+inputId;
      var errorMsg1="";
      $('.loginerror').remove();
                      
      if(inputId == 'n_password'){
          var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
          var pass = $('#reset_pass_form #n_password').val();
          
          if(pass != '' && pass != undefined && pass != 'undefined'){
              if(!pattern.test(pass)) 
              {
                  var errorMsg1 = 'Please enter valid password.';	
              }
          }else{
              var errorMsg1 = 'Please enter password.';						
          }
      }
      
      if(inputId == 'c_password'){
          var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
          var cpass = $('#reset_pass_form #c_password').val();
          var pass = $('#reset_pass_form #n_password').val();
          
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
      
      $('#reset_pass_form').submit(); 
          
  }
      
  //}
  
});

$('#n_password,#c_password').on("keyup keypress blur",function(){
  
  $(this).closest(".custom--input").removeClass("is-invalid");
  var pattern = /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
  if($(this).attr('id') == 'n_password'){
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
  
  if($(this).attr('id') == 'c_password'){
      var cpass = $('#c_password').val();
      var pass = $('#n_password').val();
      
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

//   $('#signup-form .togglePassword').on("click focus",function(){
//   alert('here');
//   const type = $(this).closest(".custom--input").children('input').attr("type") === "password" ? "text" : "password";
//   $(this).closest(".custom--input").children('input').attr("type", type);
//   console.log($(this).closest(".custom--input").children('input').attr("type", type));
//   // toggle the icon
//   if(type === "password" ){
//     $(this).attr("src", "/assets/images/eye-show-icon.svg");
//   }else{
//     $(this).attr("src", "/assets/images/eye-hide-icon.svg");
//   }
//   //this.classList.toggle("bi-eye");
       

// });    // toggle the type attribute
