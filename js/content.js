/**
 * Created by Administrator on 2016/10/30.
 */
$(function(){
   /* $(".client_classify_list>li").hover(function(){
        $(this).find(".client_weixin_img").slideDown(500);
        $(this).find(".client_weixin_img").css('box-shadow','2px 2px 2px #9bcaef');

    },function(){  $(this).find(".client_weixin_img").stop().slideUp(500);});
*/

    var clientList=$(".client_classify>li");

    for(var i=0;i<clientList.length; i++)
    {
        clientList[i].index=i;
        clientList[i].onclick=function()
        {

            $(this).find('a').addClass('active');

            $(this).siblings('li').find('a').removeClass('active');
            $('.client_list_box').eq(this.index).fadeIn(500);
            $('.client_list_box').eq(this.index).siblings('.client_list_box').fadeOut(500);

        };
    }

    //帮助中心左边栏展开收缩

    $(".nav1_title_box").click(function() {
        if ($(this).next(".nav1_list").css('display') == 'none')
        {
            $(this).next(".nav1_list").slideDown(500);
            $(this).find('.nav1_title').css('background','url("images/help_icon2.png") no-repeat right center')
        }
        else {
            $(this).next(".nav1_list").slideUp(500);
            $(this).find('.nav1_title').css('background','url("images/help_icon1.png") no-repeat right center')
        }
    });

    /*//内页banner上面的子的居中显示代码
    var windowWdith=$(window).width();
    var windowHeight=$(window).height();
    var textWidth=$('.banner_text').width();
    var textLeft=(windowWdith-textWidth)/2;
    $('.banner_text').css('left',textLeft+'px')*/




});
