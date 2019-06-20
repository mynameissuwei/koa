---
title: Github搭建博客
date: 2019-04-06 21:26:37
tags:
---
![](/hexo.jpg)
前言:最近在别人的博客上面看见在首页摘要的时候显示图片和部分摘要很好看,今天我就来教大家如何做。
搭建这个博客走了许多弯路。在这里分享总结之后的思路和简化步骤。
<!-- more -->
Github Pages 
Hexo 博客框架 
部署  
Next 主题 
Github Pages

Github Pages 其实本身就是 Github 提供的博客服务。 我们在 Github 中创建一个特定格式的 Repository，Github Pages 就会将里面的信息生成一个网页，展示出来。

操作如下：

注册 Github 账号，然后在 Github 中创建一个以 .http://github.io 结尾的 Repository。
Repository name: http://ericamin.github.io 
勾选 Initialize this repository with a README 
Create repository 
2. 简单地编辑一下 README.md 这个文档。 比如添加：I am trying to create my own blog.. 保存(Commit changes)。

打开网页：http://ericamin.github.io 这里就可以看到 README.md 里的内容了。
如果没有太多的要求，其实直接用 README.md 来写博客也是不错的。这个生成好的 Repository 就是用来存放博客内容的地方，也只有这个仓库里的内容，才会被 http://ericamin.github.io 这个网页显示出来。

Hexo

Hexo 是一个博客框架。它把本地文件里的信息生成一个网页。如果不需要放在网上给别人看，就没 Github Pages 什么事了。

使用 Hexo 之前，需要先安装 Node.js 和 Git。

操作如下：

安装 Node.js
前往 https://nodejs.org/en/ 
点击 8.9.1 LTS 下载 
安装 
打开 Command Prompt， 输入 node -v 
得到：v8.9.1 
安装成功

安装 Git
前往 https://git-scm.com/ 
点击 Downloads 
点击 Windows 
一般情况，下载会自动开始。如果没有，就点击 click here to download manually 
安装 
打开 Command Prompt， 输入 git –version 
得到：git version 2.15.0.windows.1 
安装成功

额外说明：如果 Git –version 指令不管用，可能需要到 Environment Variable 那里添加 Path。

安装 Hexo
打开 Command Prompt 
输入 npm install -g hexo-cli 
回车开始安装 
输入 hexo -v 
得到 hexo-cli: 1.0.4 等一串数据 
安装成功

创建本地博客
在D盘下创建文件夹 blog 
鼠标右键 blog，选择 Git Bash Here。 如果没有安装 Git，就不会有这个选项。 
Git Bash 打开之后，所在的位置就是 blog 这个文件夹的位置。（/d/blog） 
输入 hexo init 将 blog 文件夹初始化成一个博客文件夹。 
输入 npm install 安装依赖包。 
输入 hexo g 生成（generate）网页。 由于我们还没创建任何博客，生成的网页会展示 Hexo 里面自带了一个 Hello World 的博客。 
输入 hexo s 将生成的网页放在了本地服务器（server）。 
浏览器里输入 http://localhost:4000/ 。 就可以看到刚才的成果了。 
回到 Git Bash，按 Ctrl+C 结束。 
此时再看 http://localhost:4000/ 就是无法访问了。

发布一篇博客
继续在 Git Bash 里，所在路径还是 /d/blog。输入 hexo new “My First Post” 
在 D:\blog\source_posts 路径下，会有一个 My-First-Post.md 的文件。 编辑这个文件，然后保存。 
回到 Git Bash，输入 hexo g 
输入 hexo s 
前往 http://localhost:4000/ 查看成果。 
回到 Git Bash，按 Ctrl+C 结束。

将本地 Hexo 博客部署在 Github 上

前面两个部分，我们已经有了本地博客，和一个能托管这些资料的线上仓库。只要把本地博客部署（deploy）在我们的 Github 对应的 Repository 就可以了。

获取 Github 对应的 Repository 的链接。
登陆 Github，进入到 http://ericamin.github.io 
点击 Clone or download 
复制 URL 待用 
我的是https://github.com/Ericamin/Ericamin.github.io.git

修改博客的配置文件
打开配置文件 /d/blog/_config.yml （使用 bash 里的 vi 或者 notepad++） 
找到 #Deployment，填入以下内容： 
deploy: 
type: git 
repository: https://github.com/Ericamin/Ericamin.github.io.git 
branch: master

保存退出

部署
回到 Git Bash 
输入 npm install hexo-deployer-git –save 安装 hexo-deployer-git 此步骤只需要做一次。 
输入 hexo d 
得到 INFO Deploy done: git 即为部署成功 
之前我们创建的 ReadMe.md 会被自动覆盖掉。

查看成果
前往 http://ericamin.github.io 即可。

使用 Next 主题

更多 Hexo 的主题看这里

这里以 Next 为例。 大概思路就是把整个主题的文件克隆到我们的主题文件夹中。在配置文件中注明使用该主题。

操作如下：

还是回到 Git Bash。 输入 git clone https://github.com/iissnan/hexo-theme-next themes/next
这样，该主题的文件就全部克隆到 D:\blog\themes\next 下面。

修改博客配置文件
打开 D:\blog_config.yml 
找到 theme: 
把 Hexo 默认的 lanscape 修改成 next。 即 theme: next 
找到 # Site，添加博客名称，作者名字等。 
在 language 后面填入 en 或者 zh-Hans，选择英文或者中文。 
找到 # URL, 填入 url。比如 url: https://ericamin.github.io 
填入名字后会有很风骚的 © 2017 Ryan Luo Xu 的字样出现在博客底部。

重新生成部署即可
回到 Git Bash。输入 hexo g -d就可以了。 
先把修改的内容生成网页，再部署。

查看成果
前往 http://ericamin.github.io 即可。

上传博客 图片
首先确认_config.yml中有：

post_asset_folder: true 
1 
然后在blog-dev/下执行

npm install https://github.com/CodeFalling/hexo-asset-image –save 
1 
确保在blog-dev/source/_posts下创建和md文件同名的目录，在里面放该md需要的图片，然后在md中插入

![](目录名/文件名.png)
1
1 
即可在hexo generate时正确生成插入图片。比如：

_posts 
|- post1.md 
|_ post1 
|- pic1.png 
1 
2 
3 
4 
在md文件中插入图片时只需写

![](post1/pic1.png)
1
1 
即可。首次配置完了需要执行一次清除操作，再生成页面：

$ hexo clean
$ hexo generate
$ hexo server 
--------------------- 