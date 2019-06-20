---
title: 面试知识归纳
date: 2019-04-12 13:39:29
tags: ES6
---
	最近离职了,又开始前端找工作的路程.
	在这里就记录一下复习js基础和面试题的心路吧.

	ES6三种声明变量的方式
		var - 具有变量提升的性质.这种
		let
		const 
	扩展运算符
		var a = [1,2,3]
		如Math.max(...a)
	ES6名称属性
	箭头函数

	对象
		属性初始化器的速记法
		方法简写
		可计算的属性名
		```
			var lastName = "last name";
			var person = { "first name": "Nicholas", [lastName]: "Zakas"
			}; console.log(person["first name"]);
			console.log(person[lastName]);
		```
		新的方法

	解构
	```
		let node = { type: "Identifier", name: "foo"
		};
		let { type, name, value = true } = node; console.log(type);
		console.log(name); console.log(value);
	```
	```
		let node = { type: "Identifier", name: "foo"};
		let { type: localType, name: localName } = node; console.log(localType);
		console.log(localName);
	```
	嵌套的对象解构
	```
		let node = { type: "Identifier", name: "foo", loc: { start: { line: 1, column: 1
		}, end: { line: 1, column: 4
		} } };
		let { loc: { start }} = node; console.log(start.line);
		console.log(start.column);
	```	
	数组解构
	```
		let colors = [ "red", "green", "blue" ]; 
		let [ firstColor, secondColor ] = colors; 
		console.log(firstColor);
	```
	```
		let colors = [ "red", "green", "blue" ]; let [ , , thirdColor ] = colors; console.log(thirdColor);
	```
	```
		let a = 1, b = 2;
		[ a, b ] = [ b, a ]; console.log(a);
		console.log(b);
	```
	```
		let colors = [ "red", [ "green", "lightgreen" ], "blue" ]; 
		let [ firstColor, [ secondColor ] ] = colors;
		console.log(firstColor);
		console.log(secondColor);
	```

	Set与Map
		set和map
		set我用的不多,大部分都是一行代码去重
		map的话,通常用来建立映射。

	迭代器与生成器
	
	js类

	增强的数组功能

	Promise与异步编程
		JS引擎是建立在单线程的基础上,jobque 就是任务队列等待,事件循环就是用来监控队列任务执行,
		为什么会出现promise,出现这个东西是用来解决问题的。
		如果用node callback的写法.
		可能会出现回调地狱,同时你如果需要2个异步操作同时给你返回结果,会很麻烦。
		所以promise就出现了。
		promise生命周期
			pending state - unsettled
			fulfilled rejected - settled

		promise.then(resolved,rejectd)
			resolved 成功的时候执行的函数
			rejectd 失败的时候执行的函数
		promise.catch() = promise.then(null,rejectd)

	react 生命周期
	创建时
		constructor
		getDerivedStateFromProps
		render
		componentDidMount
	更新时
		getDerivedStateFromProps
		shouldComponentUpdate
		render
		getSnapshotBeforeUpdate
		componentDidUpdate
	卸载时
		componentWillUnmount

	React创建组件的方式
		使用函数式创建
		使用React.createClass方式创建
		使用React.Component创建
		而这种JSX语法最终会被转换为React.createClass的方式被调用

	组件性能优化
		不需要内部状态,尽量用纯函数写.
		shuouldComponentUpdate
		没有导致state的值发生变化的setState是否会导致重渲染
		于是这里react生命周期中的shouldComponentUpdate函数就派上用场了！shouldComponentUpdate函数是重渲染时render()函数调用前被调用的函数，它接受两个参数：nextProps和nextState，分别表示下一个props和下一个state的值。并且，当函数返回false时候，阻止接下来的render()函数的调用，阻止组件重渲染，而返回true时，组件照常重渲染。
		key
		不可变数据

	如何设计一个好组件
		高内聚 低耦合的性质

	哪里进行网络请求？为什么
		componentDidmount 是在组件完全挂载后才会执行，在此方法中调用setState 会触发重新渲染，最重要的是，这是官方推荐的！
		其他组件并没有完全挂载,此时在里面请求数据也是没用的。

	调用setState之后发生了什么
		当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为和解（reconciliation）的过程。和解（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。

	React refs 是什么

	react16新特性
		render 支持返回数组和字符串
		Fragment
		componentWillMount(nextProps, nextState)

	容器组件和展示组件
		有时候你写一个业务的时候,比如一个组件,你从后端请求数据 然后把数据给展示出来.
		你如果都写在里面的话
	
	路由实现原理
		hash的原理
		改变url的hash值是不会刷新页面的。
		当hash值改变时，输出一个HashChangeEvent。
		BrowserRouter - basename  forceRefresh:true
		HashRouter  hash	

	Route
		path
		exact

	Link history，location，match
	这3个对象传递给Route所对应的组件的props中
	
	<BrowserRouter>
		basename: string 这个属性，是为当前的url再增加名为basename的值的子目录。
		forceRefresh
	Route
		pathname:
		exact:
		strict: 严格线
		---
		component
		render
		children 和render作用大致相同, 但是无论pathname router会不会匹配到,都会渲染。
		---
		组件里面会有location，match以及history这三个参数

	<Link>
		 <Link to={{pathname:'/home',search:'?sort=name',hash:'#edit',state:{a:1}}}>Home</Link>

	history 
	locaion
	match

	在上个例子中，to为一个对象，点击Link标签跳转后，改变后的url为：'/home?sort=name#edit'。 但是在与相应的Route匹配时，只匹配path为'/home'的组件，'/home?sort=name#edit'。在'/home'后所带的参数不作为匹配标准，仅仅是做为参数传递到所匹配到的组件中，此外，state={a:1}也同样做为参数传递到新渲染的组件中。

	<Link to={{pathname:'/home',search:'?sort=name',hash:'#edit',state:{a:1}}}>Home</Link>

	action属性很有用，比如我们在做翻页动画的时候，前进的动画是SlideIn，后退的动画是SlideOut，我们可以根据组件中的action来判断采用何种动画：

	在新组件的location属性中，就记录了从就组件中传递过来的参数，从上面的例子中，我们看到此时的location的值为：

	react的setState同步还是异步？
		将setState()认为是一次请求而不是一次立即执行更新组件的命令。为了更为可观的性能，React可能会推迟它，稍后会一次性更新这些组件。React不会保证在setState之后，能够立刻拿到改变的结果。

	
	Redux，react-redux等原理
		redux三大原则
		单一数据源
			整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

		State 是只读的
			唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

		使用纯函数来执行修改

	
css 盒模型
 标准盒模型
 	元素占据的空间是由width设置的
 怪异盒模型
 	ie 盒子模型的 content 部分包含了 border 和 pading
 要让网页按标准盒模型去解析，则需要加上 doctype声明，否则不同的浏览器会按照自己的标准去解析。

box-sizing
	border-box
	content-box
用box-sizing控制2种盒模型的切换


e.target 指向触发事件监听的对象。
e.currentTarget 指向添加监听事件的对象。
也就是说，currentTarget始终是监听事件者，而target是事件的真正发出者。

一般来说，当一个请求url的协议、域名、端口三者之间任意一个与当前页面地址不同即为跨域。
之所以会跨域，是因为受到了同源策略的限制，同源策略要求源相同才能正常进行通信，即协议、域名、端口号都完全一致。
因为浏览器同时还规定，提交表单不受同源政策的限制。

jsonp
jsonp的跨域原理是利用script标签不受跨域限制而形成的一种方案。
jsonp ok了
postMessage
websocket
简单请求
只要同时满足以下两大条件，就属于简单请求

1：使用下列方法之一：GET、HEAD、POST
2：Content-Type 的值仅限于下列三者之一：text/plain、multipart/form-data、application/x-www-form-urlencoded

凡是不同时满足上面两个条件，就属于复杂请求。

复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

我们用PUT向后台请求时，属于复杂请求

JSON.stringify和JSON.parse的实现，以及这种实现的缺点，主要就是非标准JSOn格式无法拷贝以及兼容性问题

事件委托是根据事件冒泡机制来算定的
事件冒泡是什么呢


捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件；
目标阶段：目标阶段就是指事件响应到触发事件的最底层元素上；
冒泡阶段：冒泡阶段就是事件的触发响应会从最底层目标一层层地向外到最外层（根节点），事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层；### 事件


请解释 JavaScript 中 this 是如何工作的

webpack代码分割是什么,如何配置webpack代码分割.
	此特性就是把代码分离到不同的bundle,然后按需加载这些bundle,如果使用合理,能极大的提升和影响加载时间.
	
	常用的代码分割的几种方式.
		在entry配置2个入口文件。
		然后打包出2个出口文件。

		缺点:如果有重复的引入文件有重复的模块,那么这些重复的模块都会被引入到bundle种
		这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来
		但是有一个插件可以解决这些问题，就是通过使用 SplitChunksPlugin 插件来移除重复模块。

webpack
	就是模块打包机，就是把入口文件转换成js,css这种静态文件。
	代码转换 - less,jsx是不能在浏览器中跑的,webpack就可以直接转换一下.
	模块合并
	自动刷新
	代码校验
	自动发布
			


