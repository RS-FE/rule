/*
 * @Description: {公用脚本}
 * @Author: zhuoyan
 * @Date: 2019-08-22 09:09:54
 */
window.onload = function() {
  // ios10+ 禁止缩放
  // 阻止双击放大
  var lastTouchEnd = 0;
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener(
    "touchend",
    function(event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
  // 阻止双指放大
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
  //ios长按禁止a标题路径显示
  document.documentElement.style.webkitTouchCallout = "none";
};
