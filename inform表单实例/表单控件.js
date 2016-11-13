/**
 * Created by Allison on 2016/11/13.
 */

//获取下一个span,可以通过这个对象给状态
function gspan(cobj) {
    while (true) {
        if (cobj.nextSibling.nodeName != "SPAN") {
            cobj = cobj.nextSibling;
        } else {
            return cobj.nextSibling;
        }
    }
}
//页面加载完自动调用
onload = regs;
//一个函数，可以使用nosubmit调用，也可以用onload调用；
function regs(click) {
    var stat = true;


    function regs() {//页面加载完找到表单元素
        var username = document.getElementsByName("username")[0];
        var password = document.getElementsByName("password")[0];
        var repass = document.getElementsByName("repass")[0];
        var email = document.getElementsByName("email")[0];
        var other = document.getElementsByName("other")[0];


        /*----------------------------------------
         通用检测方法
         第一个参数是obj,用来检查对象
         第二个参数info，用来检查提示信息
         第三个参数fun,是个回调函数，用来检查值是否按条件输入
         第四个参数：click只是个状态，分清是单击提交还是失去焦点
         ----------------------------------------*/
        function
        check(obj, info, fun) {
            var sp = gspan(obj);
            //鼠标驶入表单时
            obj.onfocus = function () {
                sp.innerHTML = info;
                sp.className = "stats2";
            };

            //判断用户输入值的格式
            obj.onblur = function () {
                if (fun(this.value)) {
                    sp.innerHTML = "输入正确";
                    sp.className = "stats4";
                } else {
                    sp.innerHTML = info;
                    sp.className = "stats3";
                }
            }
        }

        //验证用户名栏
        check(username, "用户名的长度在3-20之间", function (val) {
            if (val.match(/^\s+$/) && val.length >= 3 &&
                val.length <= 20) {
                return true;
            } else {
                stat = false;
                return false;
            }
        });
        //验证密码栏
        check(password, "密码必须在6-28位之间", function (val) {
                if (val.match(/^\s+$/) && val.length >= 6 &&
                    val.length <= 28) {
                    return true;
                } else {
                    stat = false;
                    return false;
                }
            }
        );
        //确认密码栏
        check(repass, "确认密码同上一致，规则也要相同", function (val) {
            if (val.match(/^\s+$/) && val.length >= 6 &&
                val.length <= 28 && val == password.value) {
                return true;
            } else {
                stat = false;
                return false;
            }
        });
        //验证邮箱栏
        check(email, "要按邮箱规则输入", function (val) {
            if (val.match(/\w +@\w.\w/)) {
                return true;
            } else {
                stat = false;
                return false;
            }
        })
    }

    return stat;
}
