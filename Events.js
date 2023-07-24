$(document).ready(function(){
  $("#toTopBtn").click(function(){
     $(window).scrollTop(0);
  });

  //counters:
  var countDownDate1 = new Date("May 4, 2024 12:00:00").getTime();
  var countDownDate2 = new Date("May 5, 2026 15:00:00").getTime();
  var countDownDate3 = new Date("June 4, 2028 20:00:00").getTime();

  var x = setInterval(
    function getTime() {
      var timeNow = new Date().getTime();
      var timeToGo = countDownDate1 - timeNow;

      var days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

      document.getElementById("counter1").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (timeToGo < 0) {
        clearInterval(x);
        document.getElementById("counter1").innerHTML = "Time: NOW!!!";
      }
    }, 1000);
  var y = setInterval(
    function getTime() {
      var timeNow = new Date().getTime();
      var timeToGo = countDownDate2 - timeNow;

      var days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

      document.getElementById("counter2").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (timeToGo < 0) {
        clearInterval(x);
        document.getElementById("counter2").innerHTML = "Time: NOW!!!";
      }
    }, 1000);
    var z = setInterval(
      function getTime() {
        var timeNow = new Date().getTime();
        var timeToGo = countDownDate3 - timeNow;

        var days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

        document.getElementById("counter3").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (timeToGo < 0) {
          clearInterval(z);
          document.getElementById("counter3").innerHTML = "Time: NOW!!!";
        }
      }, 1000);

  $("#fblink").click(function(){
    window.open('https://www.facebook.com/luuwafc/', '_blank').focus();
  });
  $("#twitterlink").click(function(){
    window.open('https://twitter.com/luuwafc', '_blank').focus();
  });
  $("#instalink").click(function(){
    window.open('https://www.instagram.com/luuwafc/?hl=en', '_blank').focus();
  });

  $("#fb2").click(function(){
    window.open('https://www.facebook.com/groups/186350006882710', '_blank').focus();
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
