$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['home','cathome'],
        slidesNavigation:true,
        slidesNavPosition: 'bottom',
        anchors: ['home', 'cathome'],
        onLeave: function (index, nextIndex, direction) {
            console.log(index + ',' + nextIndex);
            doAnimate(nextIndex);
            $($('.navbar-nav > li')[index - 1]).removeClass('active');
            $($('.navbar-nav > li')[nextIndex - 1]).addClass('active');
        }
    });
   GetTime = function () {
       var myDate = new Date();
       var year = myDate.getFullYear();
       var month = myDate.getMonth();
       var date = myDate.getDate();
       var h = myDate.getHours();
       var m = myDate.getMinutes();
       var s = myDate.getSeconds();
       return {
           'year':year,
           'month':month,
           'date':date,
           'h':h,
           'm':m,
           's':s
       }
   }
   doAnimate = function (nextPage) {
       if(nextPage==2)
       {
           console.log("now page = 2");
           $('#m1').css('visibility','hidden');
           $('#m1').removeClass('animated bounceInRight bounceInLeft bounceInDown bounceInUp bounceIn');
           setTimeout(function () {
               $('#m1').css('visibility', 'visible');
               $('#m1').addClass('bounceInDown animated');
           },100)
       }
   }
    $("#m1").onclick(function () {
        
    })
   GetBirthDay = function () {
    var nowDate = new Date();
    var myBirthDay = new Date();
    myBirthDay.setFullYear(1998);
    myBirthDay.setDate(8);
    myBirthDay.setMonth(8);
    myBirthDay.setSeconds(0);
    myBirthDay.setHours(0);
    myBirthDay.setMinutes(0);
    var newDate = new Date(nowDate.getTime()-myBirthDay.getTime());
    $("#AGE").text("AGE: "+ (newDate.getFullYear()-1970).toString());
    $("#birthDay").text((newDate.getFullYear()-1970).toString()+" years "+newDate.getMonth().toString()+" months "+newDate.getDate().toString()+" days "+newDate.getHours().toString()+" hours "+newDate.getMinutes().toString()+" minutes "
           +newDate.getSeconds().toString()+" seconds");
       setTimeout(GetBirthDay,100);
   }
    $('.linkblock').hover(function (event) {
        $('#' + event.target.id).removeClass('animated bounceInRight bounceInLeft bounceInDown bounceInUp bounceIn');
        $('#' + event.target.id).addClass('pulse animated');
    }, function (event) {
        $('#' + event.target.id).removeClass('pulse animated');
    });
   GetBirthDay();
});