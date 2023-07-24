$(document).ready(function(){
  $("#toTopBtn").click(function(){
    $(window).scrollTop(0);
  });
  
  $("#fblink").click(function(){
    window.open('https://www.facebook.com/luuwafc/', '_blank').focus();
  });
  $("#twitterlink").click(function(){
    window.open('https://twitter.com/luuwafc', '_blank').focus();
  });
  $("#instalink").click(function(){
    window.open('https://www.instagram.com/luuwafc/?hl=en', '_blank').focus();
  });
});
