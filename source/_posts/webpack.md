---
title: webpack
date: 2019-04-17 15:41:32
tags: webpack
---
最近找工作面试,经常被问到关于webpack的问题,这篇文章就记录一下被问到webpack问题的总结.
<--more-->
## webpack安装
- 安装本地的webpack
- webpack webpack-cli -D
## webpack 可以进行零配置
- 打包工具 -> 输出后的结果(js模块)

## 手动配置webpack
- 默认配置文件的名字 webpack.config.js
静态服务器 - webpack-dev-server
html模板 - html-webpack-plugin 
热更新 - 
	NameModulesPlugin - 打印更新的模块路径
	HotModuleReplacementPlugin - 热更新插件
webpack 是node写出来的
loader:
	loader默认是从右向左执行 从下到上执行
	css-loader 
	style-loader
	postcss-loader
	babel-loader //ES6转ES5 ES7转ES5
	@babel/core
	@babel/preset-env 
图片:
	url-loader
ESlint
	eslint
	eslint-loader
include:
exclude:

Plugin:
	htmlwebpackplugin 
	mini-css-extract-plugin
	autoprefixer

npx webpack 的流程 
- 去找webpack.config.js 从而到config配置文件中找到你要的配置项

如何修改配置名

```
npx webpack --config webpackconfig.js
```

package.json 
```
"script": {
	"build":"webpack"
}
```
npm run build 先到node_modules下找webpack,如果在node_modules下如果找不到,就去全局下找webpack

webpack-cli 的作用是让你在命令行中使用webpack这个命令

webpack有默认配置文件,但是在做工程打包的时候,根据配置的需求 自己也需要做定制化的webpck的配置项.

webpack 
	entry:{

	} 
	output:{

	}

```
entry:{
	main:'index.js'
}

entry:'index.js'
```

默认模式是production

mode:production 压缩的代码
mode:development 不是压缩的代码

webpack.config.js

## webpack的Tree Shaking
	

