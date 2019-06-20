---
title: react-hook
date: 2019-04-22 10:37:24
tags: react
---
React新特性要出来了,今天我们来学习 学习react-hook

要介绍这个hook特性之前,首先要弄清楚为什么会出现hook。

我从官网中截取到的这几句话

It’s hard to reuse stateful logic between components -- 很难复用一个组件当它具有自己本地的state,还有内部写满了逻辑.

Complex components become hard to understand -- 当你用传统的class写法声明组件的时候,比如写一个复杂的功能,要用到本地state和生命周期,这时候内部就多出很多代码,当你再去看这些代码的时候就会很难维护.

Classes confuse both people and machines -- class语法声明,容易迷惑人和机器.

以上这三句话为重点,表示我们为什么要使用hook的原因.

下面则为使用hook的一些好处

Gradual Adoption Strategy

react-hook 真正的函数式编程

减少组件嵌套层次的数量

函数组件有内部的状态,而且官方的意思是以后不要再写class组件了,就写hook组件吧。

我们来首先介绍一下它的API

首先它的最主要的一个API

import  { useState , useEffect } from 'react'

它的最主要的2个API 为 useState 和 useEffect

```
function App() {
  const [ count , setCount ] = useState(0)
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
```
比如上面一个组件, 它是一个纯函数组件, hook没有出来之前,纯函数组件是没有本地state的值的,同时也没有生命周期,
但是hook出来过后,函数组件就有内部的状态了,它可以从useState中引入状态和改变状态的方法.
然后渲染到页面上.

然后还有useEffect的方法,纯函数组件内部是没有生命周期的,但是引入了useEffect后,相当于纯函数组件内部有componentDidMount和componentWillUnMount的生命
周期了.

Hooks 是什么东西 ？ 
	是让函数组件具有类组件的功能。

# State Hooks

	2个API 
```
	useState
```
```
	useReducer
```
关于useState一些重点讲解
```
function MyCountFunc() {
	const [count,setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1)
    },1000)
    return () => clearInterval(interval)
  },[])

  return <span>{count}</span>
}
```
用上面的函数来举例子
setCount() 这个方法可以接受2种形式的参数
```
setCount(value)
```
```
setCount((value) => {}) 接受一个函数 value都是最新的值
```
2种的传参数最主要的区别是
第一种 不基于最新的count的值
第二种 基于最新的count的值

useReducer
升级版的useState 等下我来讲下为什么要使用useReducer 和 useReducer 如何使用. 为什么说它是useState的升级版.

问题一: 为什么要使用useReducer
```
const [count,setCount] = useState(0)
你可以通过setCount来改变count的值
但是如果count是一个对象怎么办,你如果改变这个对象并返回新的对象的给它,这时候你就需要useReducer了。
```
useReducer的用法就和redux一样
```
function countReducer(state,action) {
  switch(action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}
```
```
const [count,dispathCount] = useReducer(countReducer,0)
userReducer 接受2个参数 第一个参数就是reducer 函数，第二个就是初始值 初始值会传到reducer中第一个参数去.
你可以通过dispatch这个方法来改变state的值. 
dispatch({type: 'minus' })
```

# Effect Hooks
## useEffect的执行顺序
```
useEffect(() => {
  console.log('effect invoked')
  return () => console.log('effect deteched')
})
```
第一次渲染组件 - 
```
componentDidMount() {
  console.log('effect invoked')
}
```
更新组件 -
```
'effect deteched'
'effect invoked'
```
先执行return的内容 挂载的内容 然后再执行 回调 

## useLayoutEffect - useEffect 区别

useLayoutEffect 会比 useEffect 先执行

useLayoutEffect的执行时间是当 组件开始渲染的时候,但是还没有挂载在页面上,
useLayoutEffect 执行
挂载在页面上过后, useEffect开始执行.

## 为什么不推荐使用useLayoutEffect 

因为 useLayoutEffect 是在页面加载之前渲染, 你如果在这个方法里面写一些耗时长的代码,那么就会让页面渲染的很慢,会出现比较长的白屏时间, 看你业务需求,谨慎使用这个方法。

## useEffect的第二个参数有什么作用！
```
useEffect(() => {
  console.log('effect invoked')
  return () => console.log('effect deteched')
},[])
第二个参数为[]，相等于以下代码
componentDidMount() {
  console.log('effect invoked')
}
componentWillUnMount() {
  console.log('effect deteched')
}
当第二个参数[count],给特定state来进行effect. 
```

## 官方推荐useEffect的用法
如果在useEffect中用到本地state的值,你必须要把第二个参数把这个参数传进去.
这是官方推荐的最佳实践.

# Content Hook
## Content的使用方式
```
import React from 'react'
export default React.createContext('')

import MyContext from '{path}'

<MyContext.Provider value="test">
  <Component />
</MyContext.Provider>
```
上面是建立一个全局的react-context组件,然后用这个全局的context把他们包起来。
最后你需要在子组件取到这些值.
```
import React , { useContext } from 'react'
import MyContext from '{path}'

const component = () => {
  const context = useContext(MyContext)
  return (
    <div>
      {context}
    </div>
  )
}
```

# Ref Hook
```
const ref = useRef()
<input ref={ref}></input>
console.log(ref)
```

# 闭包陷阱
```
class = alert(this.state.count) function= alert(count)
```

# hooks性能优化
```
import React, {memo,use} from 'react'
memo - shouldComponentUpdate
```
## shouldComponentUpdate 需要return 
因为funciton没有自己的状态,所以memo只不要判定传进来的属性,可以自动判断return false 或者 true

## useMemo - useCallback有什么用

useMemo 和 useCallback 和 useState一样 ，你可以用它来做性能优化.
