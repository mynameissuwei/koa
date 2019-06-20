---
title: hexo next主题如何在首页摘要里显示文章图片？
date: 2019-04-07 15:29:25
tags:
---
![你想输入的替代文字](pic/8.jpg)

前言:最近在别人的博客上面看见在首页摘要的时候显示图片和部分摘要很好看,今天我就来教大家如何做。
<!-- more -->
## 1: 开启阅读更多的功能
```
auto_excerpt:true
```
## 2.图片引用方式

### 本地引用

#### 绝对路径

  当Hexo项目中只用到少量图片时，可以将图片统一放在source/images文件夹中，通过markdown语法访问它们。
  ```
  source/images/image.jpg

  1.![](/images/image.jpg)
  ```
  图片既可以在首页内容中访问到，也可以在文章正文中访问到。

#### 相对路径

图片除了可以放在统一的images文件夹中，还可以放在文章自己的目录中。文章的目录可以通过配置_config.yml来生成。

```
_config.yml

1.post_asset_folder: true
yarn add hexo-asset-image --save

```
将_config.yml文件中的配置项post_asset_folder设为true后，执行命令$ hexo new post_name，在source/_posts中会生成文章post_name.md和同名文件夹post_name。将图片资源放在post_name中，文章就可以使用相对路径引用图片资源了

```
![你想输入的替代文字](pic/8.jpg)
```
这时候图片只能在点击文章中才能看见.你如果像在首页中看见需要加上
```
  <!-- more -->
```
 more 上面的内容就是显示在主页的摘要，把图片放在 more 上面就可以了。

#### CDN引用

除了在本地存储图片，还可以将图片上传到一些免费的CDN服务中。比如Cloudinary提供的图片CDN服务，在Cloudinary中上传图片后，会生成对应的url地址，将地址直接拿来引用即可。