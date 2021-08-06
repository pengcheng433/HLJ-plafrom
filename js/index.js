/**
 * Created by Administrator on 2016/10/27.
 */
$(function() {

    $('.return_top').click(function() {
        $("html ,body").animate({ scrollTop: 0 }, 1500);
    });


    $(".client_classify_list>li").hover(function() {
        $(this).find(".client_weixin_img").slideDown(500);
        $(this).find(".client_weixin_img").css('box-shadow', '2px 2px 2px #9bcaef');

    }, function() { $(this).find(".client_weixin_img").stop().slideUp(500); });

    var newList = $(".new_list_container>li");

    var index = 0;
    $(".btnPre").click(function() {

        if (index == 0) {
            index = 2;
            $(newList[index]).fadeIn(1000);
            $(newList[index]).siblings('li').hide();
        } else {
            index--;
            $(newList[index]).fadeIn(1000);
            $(newList[index]).siblings('li').hide();
        }

    });

    $(".btnNext").click(function() {

        if (index == 2) {
            index = 0;

            $(newList[index]).fadeIn(1000);
            $(newList[index]).siblings('li').hide();
        } else {
            index++;
            $(newList[index]).fadeIn(1000);
            $(newList[index]).siblings('li').hide();
        }
    });


    var clientList = $(".client_classify>li");

    for (var i = 0; i < clientList.length; i++) {
        clientList[i].index = i;
        clientList[i].onclick = function() {

            $(this).find('a').addClass('active');

            $(this).siblings('li').find('a').removeClass('active');
            $('.client_classify_list').eq(this.index).fadeIn(500);
            $('.client_classify_list').eq(this.index).siblings('.client_classify_list').fadeOut(500);

        };
    }


    var $navs = $(".ant-anchor div"),
        $sections = $(".see-title"),
        $window = $(window),
        navLength = $navs.length - 2;

    $window.on("scroll",function () {
        // debugger
        var scrollTop = $window.scrollTop()+180
        len = navLength;

        for(;len>-1;len--){
            var that = $sections.eq(len);
            if(scrollTop >= that.offset().top){
                $navs.removeClass("ant-anchor-link-active").eq(len+1).addClass("ant-anchor-link-active");
                break
            }
        }
    })

    $("a.ant-anchor-link-title").click(function (event) {
        var thisObj = event.target.parentNode;
        var tags = $('.ant-anchor-link');
        for (var i = 1; i < tags.length; i++) {
            $(tags[i]).removeClass('ant-anchor-link-active')
        }
        $(thisObj).addClass('ant-anchor-link-active');
        $(thisObj).siblings().removeClass('ant-anchor-link-active');
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 113 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
})