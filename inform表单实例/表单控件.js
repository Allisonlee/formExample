/**
 * Created by Allison on 2016/11/13.
 */

//��ȡ��һ��span,����ͨ����������״̬
function gspan(cobj) {
    while (true) {
        if (cobj.nextSibling.nodeName != "SPAN") {
            cobj = cobj.nextSibling;
        } else {
            return cobj.nextSibling;
        }
    }
}
//ҳ��������Զ�����
onload = regs;
//һ������������ʹ��nosubmit���ã�Ҳ������onload���ã�
function regs(click) {
    var stat = true;


    function regs() {//ҳ��������ҵ���Ԫ��
        var username = document.getElementsByName("username")[0];
        var password = document.getElementsByName("password")[0];
        var repass = document.getElementsByName("repass")[0];
        var email = document.getElementsByName("email")[0];
        var other = document.getElementsByName("other")[0];


        /*----------------------------------------
         ͨ�ü�ⷽ��
         ��һ��������obj,����������
         �ڶ�������info�����������ʾ��Ϣ
         ����������fun,�Ǹ��ص��������������ֵ�Ƿ���������
         ���ĸ�������clickֻ�Ǹ�״̬�������ǵ����ύ����ʧȥ����
         ----------------------------------------*/
        function
        check(obj, info, fun) {
            var sp = gspan(obj);
            //���ʻ���ʱ
            obj.onfocus = function () {
                sp.innerHTML = info;
                sp.className = "stats2";
            };

            //�ж��û�����ֵ�ĸ�ʽ
            obj.onblur = function () {
                if (fun(this.value)) {
                    sp.innerHTML = "������ȷ";
                    sp.className = "stats4";
                } else {
                    sp.innerHTML = info;
                    sp.className = "stats3";
                }
            }
        }

        //��֤�û�����
        check(username, "�û����ĳ�����3-20֮��", function (val) {
            if (val.match(/^\s+$/) && val.length >= 3 &&
                val.length <= 20) {
                return true;
            } else {
                stat = false;
                return false;
            }
        });
        //��֤������
        check(password, "���������6-28λ֮��", function (val) {
                if (val.match(/^\s+$/) && val.length >= 6 &&
                    val.length <= 28) {
                    return true;
                } else {
                    stat = false;
                    return false;
                }
            }
        );
        //ȷ��������
        check(repass, "ȷ������ͬ��һ�£�����ҲҪ��ͬ", function (val) {
            if (val.match(/^\s+$/) && val.length >= 6 &&
                val.length <= 28 && val == password.value) {
                return true;
            } else {
                stat = false;
                return false;
            }
        });
        //��֤������
        check(email, "Ҫ�������������", function (val) {
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
