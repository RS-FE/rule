/*
 * @Description: {公用脚本}
 * @Author: zhuoyan
 * @Date: 2019-10-10 09:15:56
 */
$(function () {
  // 页面初始化
  $('.layout-container').addClass('loading-success');
});

// 图表
function getSize(v) {
  var fz = $('html').css('fontSize').replace(/px/, '');
  return v * fz;
}

// 获取url参数
function getQueryString(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  var result = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
