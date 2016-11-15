/**
 * Created by Allison on 2016/11/14.
 */
//用一个算法将span标签找出来,通过对象给状态
function gspan(cobj) {
    while (true) {
        if (cobj.nextSibling.nodeName != "SPAN") {
            cobj = cobj.nextSibling;
        } else {
            return cobj.nextSibling;
        }
    }
}
/*----------------------------------------------------
通过检查方法
第一个参数：obj,用来检查的对象
第二个参数：info,用来检查提示信息
第三个参数：fun是一个回调函数，用来检查值是否按条件输入
第四个参数：click只是个状态；分清是单击提交还是失去焦点
 ---------------------------------------------------------*/

function check(obj, info, fun,click) {

    var sp = gspan(obj);
    obj.onfocus = function () {

        sp.innerHTML = info;
        sp.className = "stats2";
    }

    obj.onblur = function () {

        if (this.value) {
            sp.innerHTML = "输入正确";
            sp.className = "stats4";
        } else {
            sp.innerHTML = info;
            sp.className = "stats3";
        }
    }
    if(click == "click"){
        obj.onblur();
    }
}
//页面加载完自动调用
onload = regs;
//可以通过onload调用，也可以用onsubmit调用
    function regs(click) {
        var stat =true;
    var username = document.getElementsByName("username")[0];
    var password = document.getElementsByName("password")[0];
    var repass = document.getElementsByName("repass")[0];
    var email = document.getElementsByName("email")[0];
    var other = document.getElementsByName("other")[0];


    check(username, "用户名长度在3-20之间", function (val) {
        if (val.match(/^\s+$/) && val.length >= 3 && val.length <= 20) {
            return true;
        } else {
            stat = false;
            return false;
        }
    },click);

    check(password, "密码必须在6-20位之间", function (val) {
        if (val.match(/^\s+$/) && val.length >= 6 && val.length <= 20) {
            return true;
        } else {
            stat = false;
            return false;
        }
    },click);

    check(repass, "确认密码同上一致，规则也要相同", function (val) {
        if (val.match(/^\s+$/) && val.length >= 6 && val.length <= 20 && val == password.value) {
            return true;
        } else {
            stat = false;
            return false;
        }
    },click);

    check(email, "请按照邮箱的规则填写", function (val) {
        if (val.match(/\w+@\w+\.\w/)) {
            return true;
        } else {
            stat = false;
            return false;
        }
    },click);

        return stat;

}