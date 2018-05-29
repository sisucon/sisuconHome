/**
 * Created by sisucon on 2018/5/20.
 */
/**
 * Created by sisucon on 2017/11/19.
 */
var index = 1;
var sum = 36;
var count = 0;
var text = 0;
var searchArr;
showPic = function () {
    $("#img>img").attr('src',"./img/ss/"+index+".jpg");
}



leftPIC = function () {

}
rightPIC = function () {
    if(index==sum)
    {
        index=1;
    }
    else index++;
    showPic();
}
$(document).ready(function () {
    imglist =  $(".imglist");
    icon_l = $("#icon_left");
    icon_r = $("#icon_right");
    width = imglist.width();
    console.log(width.toString());
    text = 1;
    showT = function () {
        $(".imglist>li").css('top','-620px');
        changePic();
    }
    showB = function () {
        $(".imglist>li").css('top','-1940px');
        changePic();
    }
    changePic = function () {
        $($(".imglist li img")[0]).attr('src',"./img/ss/"+((sum*sum+index-3)%sum+1)+".jpg");
        $($(".imglist li img")[1]).attr('src',"./img/ss/"+((sum*sum+index-2)%sum+1)+".jpg");
        $($(".imglist li img")[2]).attr('src',"./img/ss/"+((sum*sum+index-1)%sum+1)+".jpg");
        $($(".imglist li img")[3]).attr('src',"./img/ss/"+((sum*sum+index)%sum+1)+".jpg");
        $($(".imglist li img")[4]).attr('src',"./img/ss/"+((sum*sum+index+1)%sum+1)+".jpg");
        height = $($(".imglist li img")[2]).height();
        console.log(height);
    }
    imglist.mouseup(function () {
        if($(".imglist>li").is(':animated'))
        {
            $(".imglist>li").stop(true,true);
        }
        if(action=='bottom')
        {
            index++;
            var now = parseInt($(".imglist>li").css('top'));
            $(".imglist>li").animate({top:'-1300px'},'slow',showT());
        }
        else
        {
            index--;
            var now = parseInt($(".imglist>li").css('top'));
            $(".imglist>li").animate({top:'-1300px'},'slow',showB());
        }
    })



    icon_r.mousemove(function () {
        icon_l.css('opacity','0.1');
        icon_r.css('opacity','1');
    })
    imglist.mousemove(function () {
        console.log(window.event.offsetX+" : "+window.event.offsetY+" width:"+width);
        if(window.event.offsetX<width/2)
        {
            action = 'top';
            icon_l.css('opacity','1');
            icon_r.css('opacity','0.1');
        }
        else
        {
            action = 'bottom';
            icon_l.css('opacity','0.1');
            icon_r.css('opacity','1');
        }
    })

    imglist.mouseout(function () {
        icon_l.css('opacity','0.1');
        icon_r.css('opacity','0.1');
    })


})


