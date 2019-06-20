---
layout: pm2
title: start
date: 2019-04-13 22:19:58
tags: PM2
---
![pm2](pm2start/pm2.png)
pm2如何run npm run start
<!-- more -->
大家都知道 PM2 是守护进程 
属于Linux中的命令
那这个命令对前端会不会有没有帮助呢
今天就教大家用pm2 start npm run start
```
pm2 start npm --name 名字 -- run dev
```
name 可选项 为PM2进程名字

用这个命令,大家就可以把自己的网站在自己的远程Linux上永久跑起来了.

然后在配置一下nginx 就可以了,

就可以看见自己的网站在对应的域名下跑起来了。

惊不惊喜,开不开心?


