$(document).ready(function(){
  $("#toTopBtn").click(function(){
    $(window).scrollTop(0);
  });

  //form validation
  $("#formSubmit").click(function(){
    let count = 0;
    let x = document.forms["contactForm"]["name"].value;
    if(x == ""){
      document.getElementById("nameInv").innerHTML = "Input a name please";
      count++;
    }
    let y = document.forms["contactForm"]["email"].value;
    if(y == ""){
      document.getElementById("emailInv").innerHTML = "Input an email please";
      count++;
    }else if(!y.includes('@')){
      document.getElementById("emailInv").innerHTML = "Invalid email";
      count++;
    }
    let z = document.forms["contactForm"]["message"].value;
    if(z == ""){
      document.getElementById("messageInv").innerHTML = "Input a message please";
      count++;
    }

    if(count > 0){
      return false;
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


  $("#fb").click(function(){
    window.open('https://www.facebook.com/luuwafc/', '_blank').focus();
  });
  $("#twitter").click(function(){
    window.open('https://twitter.com/luuwafc', '_blank').focus();
  });
  $("#insta").click(function(){
    window.open('https://www.instagram.com/luuwafc/?hl=en', '_blank').focus();
  });
  $("#luu").click(function(){
    window.open('https://engage.luu.org.uk/groups/99X/association-football-w', '_blank').focus();
  });
  $("#mail").click(function(){
    window.open('mailto:luuwafc1@gmail.com', '_blank').focus();
  });

});
