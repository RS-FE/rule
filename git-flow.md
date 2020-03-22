# git 工作流

### 目的

1. 统一团队Git Commit标准，便于后续代码review、版本发布、自动化生成change log；
2. 可以提供更多更有效的历史信息，方便快速预览以及配合cherry-pick快速合并代码；
3. 团队其他成员进行类git blame时可以快速明白代码用意；

### 版本规范

1.分支

* master: 主分支(保护分支)，不能直接在master上进行修改代码和提交；  
* develop: 测试分支，所以开发完成需要提交测试的功能合并到该分支；
* feature-*: 新功能开发分支，根据不同需求创建独立的功能分支，开发完成后合并到develop分支；
* hotfix-*: bug修复分支，根据实际情况对已发布的版本进行漏洞修复；
* release-*: 预发布分支。

2.Tag

采用三段式，v版本.里程碑.序号，如v1.2.3
* 架构升级或架构重大调整，修改第1位
* 新功能上线或者模块大的调整，修改第2位
* bug修复上线，修改第3位

3.changelog

版本正式发布后，需要生产changelog文档，便于后续问题追溯。

### 提交规范

#### Git commit日志基本规范

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。
1<type>(<scope>): <subject>
2// 空一行
3<body>
4// 空一行
5<footer>
注意冒号后面有空格。
其中，Header 是必需的，Body 和 Footer 可以省略。

#### Header：

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

**type**

代表某次提交的类型，比如是修复一个bug还是增加一个新的feature。
所有的type类型如下：
* feat： 新增feature
* fix: 修复bug
* docs: 仅仅修改了文档，比如README, CHANGELOG等等
* style: 仅仅修改了空格、格式缩进等等，不改变代码逻辑
* refactor: 代码重构，没有加新功能或者修复bug
* perf: 优化相关，比如提升性能、体验
* test: 测试用例，包括单元测试、集成测试等
* revert: 回滚到上一个版本
* build: 影响构建系统或外部依赖项的更改
* ci: 主要目的是修改项目继续集成流程
* chore: 不属于以上类型的其他类型

**scope**

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

**subject**

subject是 commit 目的的简短描述，不超过50个字符。
其他注意事项：
1. 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
2. 第一个字母小写
3. 结尾不加句号（.）

#### Body：

Body 部分是对本次 commit 的详细描述，可以分成多行。
需要描述的信息包括:
* 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
* 他如何解决这个问题? 具体描述解决问题的步骤
* 是否存在副作用、风险?
有两个注意点:
* 使用第一人称现在时，比如使用change而不是changed或changes。
* 永远别忘了第2行是空行

#### Footer：

如果需要的话可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。


### 项目配置

**创建并切换到新分支**

git branch develop
git branch feature-rules
git checkout feature-rules

**合并分支并提交到远程库**

git checkout develop
git merge feature-rules
git checkout master
git merge develop
git push