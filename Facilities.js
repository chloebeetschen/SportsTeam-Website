$(document).ready(function(){
  $("#toTopBtn").click(function(){
    $(window).scrollTop(0);
  });

  $("#weetwoodlink").click(function(){
    window.open('https://sport.leeds.ac.uk/facilities/weetwood/#facilities', '_blank').focus();
  });
  $("#bodlink").click(function(){
    window.open('https://sport.leeds.ac.uk/facilities/bodington-playing-fields/#gallery', '_blank').focus();
  });

  $("#weetwoodgoogle").click(function(){
    window.open('https://www.google.com/maps/dir//weetwood+sports+park/data=!4m6!4m5!1m1!4e2!1m2!1m', '_blank').focus();
  });
  $("#bodgoogle").click(function(){
    window.open('https://www.google.com/maps/dir//Bodington+Playing+Fields+-+University+of+Leeds,+Bodington+Ave,+Adel,+Leeds+LS16+8NA/@53.8431788,-1.5896606,15z/data=!4m16!1m6!3m5!1s0x0:0x944efece54a5ddf8!2sBodington+Playing+Fields+-+University+of+Leeds!8m2!3d53.8431788!4d-1.5896606!4m8!1m0!1m5!1m1!1s0x48795911156e3745:0x944efece54a5ddf8!2m2!1d-1.5896606!2d53.8431788!3e2', '_blank').focus();
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
