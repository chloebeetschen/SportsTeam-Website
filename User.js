$(document).ready(function(){
  $("#toTopBtn").click(function(){
     $(window).scrollTop(0);
  });


  $(".like").click( function() {

    $(this).toggleClass('clicked');
    event.preventDefault();
  });

  $(".btn span").click(function(){
     var btnStorage = $(this).attr("id");

      if($(this).hasClass("clicked")) {
          localStorage.setItem(btnStorage, 'true');
      } else {
          localStorage.removeItem(btnStorage, 'true');
      }
  });


  $( ".btn span" ).each(function() {
    var mainlocalStorage = $(this).attr("id");

    if(localStorage.getItem(mainlocalStorage) == 'true') {
      $(this).addClass("clicked");
    } else {
      $(this).removeClass("clicked");
    }
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


  $("#char1").click(function(){
    window.open('https://www.facebook.com/The-James-Burke-Foundation-2106818716265320/', '_blank').focus();
  });
  $("#char2").click(function(){
    window.open('https://uk.movember.com/?home', '_blank').focus();
  });
  $("#char3").click(function(){
    window.open('https://www.stonewall.org.uk/our-work/campaigns/rainbow-laces?fbclid=IwAR2YPnMvPtxH6Q5pMT1H2RF9ecRsANGsV-fpS9vGRSfdV4SsyTm8T5pXeH0', '_blank').focus();
  });
  $("#char4").click(function(){
    window.open('https://www.facebook.com/The-James-Burke-Foundation-2106818716265320/', '_blank').focus();
  });
});
