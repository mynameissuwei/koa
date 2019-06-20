---
title: umi搭建教程
date: 2019-04-09 19:18:45
tags: umi
---

### 深入浅出umi

	由于公司新项目的需要,框架换成umi,以前只听说过umi的鼎鼎大名,今天终于也要接触到了。
	想想就觉得很开心.今天就来带大家看看umi是什么。

	1. 首先使用yarn执行以下命令,来安装umi
	```
		yarn global add umi
	```
	然后通过umi -v 来检测umi 是否安装成功
	```
		umi -v
	```
	然后通过 umi g 创建一些页面,
	```
		umi g page users
	```
	然后可以看见在myapp中可以看见pages这个文件夹下有了
	users.js
	users.css

	然后pages下多了一个.umi的目录.

	这是啥？这是 umi 的临时目录，可以在这里做一些验证，但请不要直接在这里修改代码，umi 重启或者 pages 下的文件修改都会重新生成这个文件夹下的文件。

	然后你以为脚手架创建成功了么？

	其实并没有

	我们现在创建的脚手架只是轻量级的,你如果还需要更复杂的功能,
	仅仅有这些还是不够的.

	所以接下来我们来介绍下 create-umi 由蚂蚁金服大佬封装的umi项目级脚手架.
	```
	mkdir myapp && cd myapp
	yarn create umi
	```
	你通过yarn create umi 来创建这个脚手架项目.

	接下来会让你选择一些配置信息 

	这些配置信息我来更详细的解释 解释 有些到底是什么

	```
		dva 蚂蚁金服封装的基于react redux redux-soga的存储状态的工具.
		antd 蚂蚁金服封装的基于react 和 angular的一个UI框架.
		codeSplitting  代码分离 此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
		DLLPlugin DLLPlugin 和 DLLReferencePlugin 用某种方法实现了拆分 bundles，同时还大大提升了构建的速度。 把你本地代码和nodeModule里面的代码拆分打包.
		internationalization 国际化 使你的项目 具有英文版本.
	```

	然后一个个确定配置后,会根据你的选择自动创建好目录和文件，

	```
		   create package.json
		   create .gitignore
		   create .editorconfig
		   create .env
		   create .eslintrc
		   create .prettierignore
		   create .prettierrc
		   create .umirc.js
		   create mock/.gitkeep
		   create src/app.js
		   create src/assets/yay.jpg
		   create src/global.css
		   create src/layouts/index.css
		   create src/layouts/index.js
		   create src/models/.gitkeep
		   create src/pages/index.css
		   create src/pages/index.js
		   create webpack.config.js
			 File Generate Done
			 Done in 161.20s.
	```

	然后安装依赖，

	```
		yarn
	```

	最后通过 yarn start 启动本地开发，

	```
		yarn start
	```


	umi中的目录结构
		