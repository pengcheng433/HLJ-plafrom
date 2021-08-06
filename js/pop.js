//弹窗
$(function () {
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var popWidth = $('.popup_box').width();
    var popHeight = $('.popup_box').height();
    var left_p = parseInt((winWidth - popWidth) / 2);
    var top_p = parseInt((winHeight - popHeight) / 2);
    $('.popup_box').css({

        'left': left_p,
        top: top_p,
    });

    $('.close').click(function () {
        $('.pop_mask').css('display', 'none');

    })
    $('#close2').click(function () {
        $('.pop_mask2').css('display', 'none');

    })
    $('#link-text1').click(function () {
        $('.pop_mask').css('display', 'block');
    })
    $('#link-text2').click(function () {
        $('.pop_mask2').css('display', 'block');
    })
    $('#join').click(function () {
        $('.pop_mask').css('display', 'none');

    })
});

//提交联系方式
$(".join").click(function () {
    var url = "http://203.195.202.167:8080/biaoshi/cgFormBuildController.do?saveOrUpdate"
    var name = $(".name").val()
    var tel = $(".tel").val()
    var company = $(".company").val()
    var email = $(".email").val()

    if(name == ""){
        alert("请输入联系人姓名!");
        return false;
    }

    if(tel == ""){
        alert("请输入联系方式!");
        return false;
    }

    reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
     if(!reg.test(email)){ //正则验证不通过，格式不对
        alert("请输入正确的邮箱!");
        return false;
    }

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "tableName": "t_hlj_submmit",
            "app_name": name,
            "app_tel": tel,
            "app_company": company,
            "app_email": email
        },
        // ContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (data) {
            alert("提交成功")
        },
        error:function (data) {
            alert("提交成功")
        }
    });
})

//资产管理立即体验1
$("#join2").click(function () {
    var url = "http://203.195.202.167:8080/biaoshi/cgFormBuildController.do?saveOrUpdate"
    var name = $("#name2").val()
    var tel = $("#tel2").val()
    var company = $("#company2").val()
    var email = $("#email2").val()
    var typegl = $("#gltype2").val()

    if(name == ""){
        alert("请输入联系人姓名!");
        return false;
    }

    if(tel == ""){
        alert("请输入联系方式!");
        return false;
    }

    reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    if(!reg.test(email)){ //正则验证不通过，格式不对
        alert("请输入正确的邮箱!");
        return false;
    }

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "tableName": "t_hlj_submmit",
            "app_name": name,
            "app_tel": tel,
            "app_company": company,
            "app_email": email
        },
        // ContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        // ContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (data) {
            switch (typegl){
                case "sbzc2":
                    alert("提交成功,测试账号：admin 测试密码：88888888A")
                    window.location.href = "http://203.195.202.167:8080/dt/console"
                    break;
                case "gylg2":
                    alert("提交成功,测试账号：oyrq 测试密码：123456")
                    window.location.href = "http://203.195.202.167:8088/hssrm"
                    break;
                default:
                    break;
            }

        },
        error:function (data) {
            switch (typegl){
                case "sbzc2":
                    alert("提交成功,测试账号：admin 测试密码：88888888A")
                    window.location.href = "http://203.195.202.167:8080/dt/console"
                    break;
                case "gylg2":
                    alert("提交成功,测试账号：oyrq 测试密码：123456")
                    window.location.href = "http://203.195.202.167:8088/hssrm"
                    break;
                default:
                    break;

            }
        }
    });
})

$(".try").click(function () {
    var url = "http://203.195.202.167:8080/biaoshi/cgFormBuildController.do?saveOrUpdate"
    var name = $(".name").val()
    var tel = $(".tel").val()
    var company = $(".company").val()
    var email = $(".email").val()
    var typegl = $("#gltype").val()

    if(name == ""){
        alert("请输入联系人姓名!");
        return false;
    }

    if(tel == ""){
        alert("请输入联系方式!");
        return false;
    }

    reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    if(!reg.test(email) && email != ""){ //正则验证不通过，格式不对
        alert("请输入正确的邮箱!");
        return false;
    }

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "tableName": "t_hlj_submmit",
            "app_name": name,
            "app_tel": tel,
            "app_company": company,
            "app_email": email
        },
        // ContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (data) {
            switch (typegl){
                case "ywym":
                    alert("提交成功,测试账号：zjc@80058645 测试密码：88888888A88")
                    break;
                case "szyx":
                    alert("提交成功,测试账号：cj@80058645 测试密码：88888888A88")
                    break;
                case "szbx":
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
                case "smzq":
                    alert("提交成功,测试账号：hq@80058645 测试密码：88888888A88")
                    break;
                case "shfw":
                    alert("提交成功,测试账号：zpb@80058645 测试密码：88888888A88")
                    break;
                case "sbzc":
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
                case "khsz":
                    alert("提交成功,测试账号：lix@80058645 测试密码：88888888A88")
                    break;
                case "gylg":
                    alert("提交成功,测试账号：hwl@80058645 测试密码：88888888A88")
                    break;
                case "fwsy":
                    alert("提交成功,测试账号：lf@80058645 测试密码：88888888A88")
                    break;
                default:
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
            }
            window.location.href = "https://mdcloud.maidiyun.com/#!/comp/details"
        },
        error:function (data) {
            switch (typegl){
                case "ywym":
                    alert("提交成功,测试账号：zjc@80058645 测试密码：88888888A88")
                    break;
                case "szyx":
                    alert("提交成功,测试账号：cj@80058645 测试密码：88888888A88")
                    break;
                case "szbx":
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
                case "smzq":
                    alert("提交成功,测试账号：hq@80058645 测试密码：88888888A88")
                    break;
                case "shfw":
                    alert("提交成功,测试账号：zpb@80058645 测试密码：88888888A88")
                    break;
                case "sbzc":
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
                case "khsz":
                    alert("提交成功,测试账号：lix@80058645 测试密码：88888888A88")
                    break;
                case "gylg":
                    alert("提交成功,测试账号：hwl@80058645 测试密码：88888888A88")
                    break;
                case "fwsy":
                    alert("提交成功,测试账号：lf@80058645 测试密码：88888888A88")
                    break;
                default:
                    alert("提交成功,测试账号：wc@80058645 测试密码：88888888A88")
                    break;
            }
            window.location.href = "https://mdcloud.maidiyun.com/#!/comp/details"
        }
    });
})