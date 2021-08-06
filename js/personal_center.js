/**
 * Created by Administrator on 2016/10/25.
 */
$(function()
{
    /*个人中心的头部登录用户名展开收缩*/

    var  userWidth=$(".head_user").width();
    $(".user_list").css('width',userWidth+31+'px');
  $(".head_user").hover(function() {

      $(".user_list").slideDown(300);
      $(this).css('box-shadow','2px 2px 3px #dfdede');


  },function(){
      {
          $(".user_list").stop().slideUp(300);
          $(this).css('box-shadow','none')
      }
  });

    /*$("#count_title").click(function(){
        if( $("#count_box").css('display')=='none')
        {
            $("#count_box").slideDown();
        }
        else
        {
            $("#count_box").slideUp();
        }

    });


    $("#institute_title").click(function(){
        if( $("#institute_box").css('display')=='none')
        {
            $("#institute_box").slideDown();
        }
        else
        {
            $("#institute_box").slideUp();
        }

    });
*/

    /*个人中心-账户安全弹窗效果*/
    var winWidth=$(window).width();
    var winHeight=$(window).height();
    var popWidth=$('.popup_box').width();
    var popHeight=$('.popup_box').height();
    var popWidth2=$('.popup_box2').width();
    var popHeight2=$('.popup_box2').height();
    var left_p=parseInt((winWidth-popWidth)/2);
    var top_p=parseInt((winHeight-popHeight)/4);
    var left_p2=parseInt((winWidth-popWidth2)/2);
    var top_p2=parseInt((winHeight-popHeight2)/2);
    $('.popup_box').css({
        'left':left_p,
        top:top_p
    });
    $('.popup_box2').css({
        'left':left_p2,
        top:top_p2
    });


    $("#cancel_btn1").click(function(){

        $(this).parents('#mask_pop_a').fadeOut(500);
    });

    $("#sure_btn1").click(function(){

        $(this).parents('#mask_pop_a').fadeOut(500);
    });

    $("#set_code").click(function(){
        $('#mask_pop_a').fadeIn(500);

    });

    $("#cancel_btn2").click(function(){

        $(this).parents('#mask_pop_b').fadeOut(500);
    });

    $("#sure_btn2").click(function(){

        $(this).parents('#mask_pop_b').fadeOut(500);
    });

    $("#contact_phone").click(function(){
        $('#mask_pop_b').fadeIn(500);

    });

    $("#cancel_code").click(function(){
        $('#mask_pop_c').fadeIn(500);

    });

    /*登录页面-机构设置*/

    $(".institute_list1>li").hover(function(){
        $(this).find('.edu_admit1').fadeIn(500);

    },function(){
        $(this).find('.edu_admit1').fadeOut(500);
    });

});
