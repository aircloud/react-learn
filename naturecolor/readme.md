###在这里记下开发这个app

####本web-app的功能：

等待补充

####开发日志

* 0916

自己之前有过一点react的学习经历，但是比较零散，今天先是总结了一下react

之后是学习了一下redux和react-redux,react-router，参考的资料主要有http://redux.js.org/docs/recipes/MigratingToRedux.html和https://hulufei.gitbooks.io/react-tutorial/content/forms.html

另外有个前辈的博客也总结了如何用es6开发react，传送门：http://wwsun.github.io/posts/react-with-es6-part-1.html


* 0918

今天开始初步总结学习的react，打算先试一试基础的props传递、路由等等，但是，还没有开始就遇到一个问题！渲染组件的时候有时候能渲染出来有时候不能渲染出来......自己尝试了半天终于发现要**首字母大写**，之后发现命名规则不是驼峰式！而是**大驼峰式**，大驼峰式相对于小驼峰式，第一个首字母也大写了。

自己之后又查找了相关资料，这里记录一下：

JSX编码规范：https://github.com/minwe/style-guide/blob/master/React.js.md
匈牙利、小驼峰、大驼峰命名法：
http://blog.csdn.net/liaoxiaoli99/article/details/6372557

还有一个坑自己虽然之前在博客里面有记录，但是由于比较常见，自己在这里再说一下，es6写react的话要进行初始化，也不能用getinitstate方法直接初始化state，具体做法应该是这样：

```
  constructor(props) {
        super(props);
        this.state = {/* your state*/};
    }
```
把这段代码添加到模块里面。

* 0919 继续总结react全家桶

react中调用组件方法方法要记得重新绑定this的指向，具体可以参考http://wwsun.github.io/posts/react-with-es6-part-3.html

