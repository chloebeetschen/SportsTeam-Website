$(document).ready(function(){
  $("#toTopBtn").click(function(){
    $(window).scrollTop(0);
  });


  //form validation
  $("#submit").click(function(){
    let count = 0;
    let x = document.forms["teamform"]["name"].value;
    if(x == ""){
      document.getElementById("nameInv").innerHTML = "Input a name please";
      count++;
    }
    let y = document.forms["teamform"]["email"].value;
    if(y == ""){
      document.getElementById("emailInv").innerHTML = "Input an email please";
      count++;
    }else if(!y.includes('@')){
      document.getElementById("emailInv").innerHTML = "Invalid email";
      count++;
    }
    let z = document.forms["teamform"]["message"].value;
    if(z == ""){
      document.getElementById("messageInv").innerHTML = "Please fill this box";
      count++;
    }
    let w = document.forms["teamform"]["message2"].value;
    if(w == ""){
      document.getElementById("messageInv2").innerHTML = "Please fill this box";
      count++;
    }

    if(count > 0){
      return false;
    }
  });

  $("#toFormBtn").click(function(){
    $("#formtop").get(0).scrollIntoView();
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
