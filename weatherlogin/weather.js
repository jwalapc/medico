$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button click */
    $('.loginBtn').css({'border-bottom' : '2px solid #ff4141'});
    /* remove border after click */
    $('.signUpBtn').css({'border-style' : 'none'});
  });
   
   
  /* Show sign Up form on button click */
   
  $('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpBtn').css({'border-bottom' : '2px solid #ff4141'});
     /* remove border after click */
     $('.loginBtn').css({'border-style' : 'none'});
  });