/** 
* @edit:diony 
* @date:2020-08-06
* @description:手机端官网
*/
$(function(){
    $(window).scroll(function(){  //只要窗口滚动,就触发下面代码
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
        if(scrollt >200){  //判断滚动后高度超过200px,就显示
            $("#back_top").fadeIn(400); //淡入
        }
        else{
            $("#back_top").stop().fadeOut(400); //如果返回或者没有超过,就淡出.必须加上stop()停止之前动画,否则会出现闪动
        }

        var html = document.querySelector('html');
        window.onscroll = function (e){
            if(html.scrollTop>0){
                $('.header').addClass('header_shadow');
            }else{
                $('.header').removeClass('header_shadow');
            }
        }
    });

    // 回到顶部
    $("#back_top").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
        $("html,body").animate({scrollTop:"0px"}, 200);
    });
    // 菜单
    $(".header-right").click(function(){
        if($(".navbar").hasClass("open")){
            $('.navbar').removeClass('open');
            $('body').css('overflow','auto');
        }
        else{
            $("html,body").animate({scrollTop:"0px"}, 20);
            $('.navbar').addClass('open');
            $('.navbar').css('height',window.screen.height-54+'px');
            $('body').css('overflow','hidden');
        }
    });
});

$(function(){
    var $el = $('.dialog');
    $el.hDialog();

    //带标题的
    $('.openFreeuse').hDialog({title: '免费试用申请',height: 300});

    //提交并验证表单
    $('.submitBtn').click(function() {
        var PhoneReg=/^[1][0-9]{10}$/;//手机正则
        var ZhongWenReg=/^[\u4e00-\u9fa5]{0,}$/;//中文正则
        var $nickname = $('.nickname');
        var $phone = $('.phone');
        var $companyname = $('.companyname');
        if($nickname.val() == ''){
            $.tooltip('姓名不能为空'); $nickname.focus();
        }
        else if(!ZhongWenReg.test($nickname.val())){
            $.tooltip('姓名只能为中文'); $nickname.focus();
        }
        else if($phone.val() == ''){
            $.tooltip('手机不能为空'); $phone.focus();
        }
        else if(!PhoneReg.test($phone.val())){
            $.tooltip('手机格式不正确'); $phone.focus();
        }
        else if($companyname.val() == ''){
            $.tooltip('企业姓名不能为空'); $companyname.focus();
        }
        else if(!ZhongWenReg.test($companyname.val())){
            $.tooltip('企业姓名只能为中文'); $companyname.focus();
        }
        else{
            //$.tooltip('提交成功，2秒后自动关闭',2000,true);
            $el.hDialog('close',{box:'#HBox'});
            $("#pointoutbox").show();
            sendEmail($nickname.val(), $phone.val(), $companyname.val());
            $nickname.val('');
            $phone.val('');
            $companyname.val('');
            setTimeout(function(){
                $el.hDialog('close',{box:'#HBox'});
                $("#pointoutbox").hide();
            },2000);
        }
    });
    $('.submit_btn').click(function() {
        var PhoneReg=/^[1][0-9]{10}$/;//手机正则
        var ZhongWenReg=/^[\u4e00-\u9fa5]{0,}$/;//中文正则
        var $nickname = $('.nickname_from');
        var $phone = $('.phone_from');
        var $companyname = $('.companyname_from');
        if($nickname.val() == ''){
            $.tooltip('姓名不能为空'); $nickname.focus();
        }
        else if(!ZhongWenReg.test($nickname.val())){
            $.tooltip('姓名只能为中文1'); $nickname.focus();
        }
        else if($phone.val() == ''){
            $.tooltip('手机不能为空'); $phone.focus();
        }
        else if(!PhoneReg.test($phone.val())){
            $.tooltip('手机格式不正确'); $phone.focus();
        }
        else if($companyname.val() == ''){
            $.tooltip('企业姓名不能为空'); $companyname.focus();
        }
        else if(!ZhongWenReg.test($companyname.val())){
            $.tooltip('企业姓名只能为中文'); $companyname.focus();
        }
        else{
            //$.tooltip('提交成功，2秒后自动关闭',2000,true);
            $("#pointoutbox").show();
            sendEmail($nickname.val(), $phone.val(), $companyname.val());
            $nickname.val('');
            $phone.val('');
            $companyname.val('');
            setTimeout(function(){
                $("#pointoutbox").hide();
            },2000);
        }
    });
});

//关闭弹出层
function cloaepointoutbox(){
    $('#pointoutbox').hide();
}

//发送邮件
function sendEmail(nickname, phone, companyname) {
    var url = 'https://www.51mis.com/wx_follow/mob_send_email.php?mob_nickname=' + nickname + '&mob_phone=' + phone + '&mob_companyname=' + companyname;
    $.ajax({
        type: "get",
        dataType: "json",
        url: url,
        success: function(data) {
            if(data.code == 1){
                
            }else{
                
            }
        },
        timeout: 20000,
        error: function(XMLHttpRequest, textStatus, errorThrown){  
            
        }
    })
}

