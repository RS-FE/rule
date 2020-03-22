# 代码风格

## HTML

- DOCTYPE 声明

```html
<!DOCTYPE html>
```

- lang 属性一般为 zh-cn

```html
<html lang="zh-cn"></html>
```

- ie 兼容模式

```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
```

- utf-8 编码 <meta charset="UTF-8">

```html
<meta charset="UTF-8">
```

- viewport 视窗

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- 省略 link 标签和 script 标签的 type 属性

```html
<link rel="stylesheet" href="index.js">
<script src="index.js"></script>
```

- 属性顺序

  - class
  - id
  - 其他

```html
<button class="btn-primary" id="submit" title="提交">提交</button>
```

- 布尔型属性在声明时不需要赋值

```html
<input type="checkbox" checked>
```

- 使用两个空格作为缩进，嵌套元素应当缩进一次。

- 使用双引号对属性的定义。

- 注释

``` html
<!-- 头部 -->
<div class="header"></div>
<!-- 头部 -->
```

## CSS

- 每条声明都独占一行且以分号结尾。

- 小数前面的 0 不可省略。

- 十六进制值必须为小写。

- 避免为 0 值指定单位。

- 声明顺序
  - Positioning
  - Box model
  - Typography
  - Visual
  - other

```css
.declaration-order {
  /* positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* box-model */
  display: block;
  float: right;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100px;

  /* typography */
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* misc */
  opacity: 1;
}

```

- 注释

``` css
/* 普通注释 */

/* body {
  background: #000;
} */
```

- class 名称中只能出现小写字母和破折号。

- 使用两个空格作为缩进。

- 使用双引号对外部资源的引用。

```CSS
.page-container {
  background-image: url("page.png");
}
```

## js

- 使用两个空格作为缩进。

- 字符串使用双引号包裹。

- 语句结尾的分号不要省略。

- 注释

```js
// 单行注释的前面必须有一个空格

/**
 * 多行注释的前面必须有一个空格
 * vscode 中输入 /** 会自动生成
 */


/**
 * 方法注释的签名必须有一个空格
 * vscode 中在方法前一行输入 /** 会自动生成 doc 注释
 * @param {姓名} name
 * @param {*年龄} age
 */
function(name, age) {

}

/*
 * @Description: {文件头注释 在商店搜索 vscode-fileheader 扩展}
 * @Author: zhuoyan
 * @Date: 2020-03-04 02:34:09
 */
```

## 其他说明

- 本规范作为视觉设计部基本开发规范，实际项目中应优先考虑该项目或使用的框架的相关规范。

- 推荐使用 vscode 作为默认编辑器，通过 vscode 扩展 Prettier - Code formatter 作为代码格式化默认程序；

``` setting.json
{
  "editor.tabSize": 2,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.jsxBracketSameLine": true,
  "prettier.printWidth": 800,
  "prettier.resolveGlobalModules": true,
  "prettier.singleQuote": true
}
```

- 更多规范可参考[Bootstrap 编码规范](https://codeguide.bootcss.com/)，但须永远遵循同一套编码规范；
