/*
 * @Description: {rem适配} 
 * @Author: zhuoyan 
 * @Date: 2019-10-10 09:15:35 
 */
! function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 1920,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 1920;
            n > 1920 && (n = 1920);
            t.style.fontSize = n / d + "px";
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);