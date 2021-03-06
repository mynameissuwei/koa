/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/04/06/Github搭建博客/hexo.jpg","c3b5748b3e1dd5a483af30753a8f1620"],["/2019/04/06/Github搭建博客/index.html","e6170c9bfb467a4bb1d7f4cbb946cace"],["/2019/04/06/主题音乐播放器/index.html","317ff7f6cc0514d64b584d5bee0de84e"],["/2019/04/06/加快页面加载速度/index.html","c468a8cf64846c170ddc938d2681710c"],["/2019/04/06/我的第一篇博客/index.html","a08ea879449ecf846b60f7ac0fe86bb4"],["/2019/04/07/pic/8.jpg","2c82c6e2e970e8c77b903492bc7b3bf4"],["/2019/04/07/pic/index.html","a28e2fa2678e3f139fc5ddd7838542ce"],["/2019/04/07/创建自己的微信公众号/index.html","cc3a328effaa61b796321d3168deb521"],["/2019/04/07/功能完善/index.html","b11209c6f3de13c11116a35f4ca7020b"],["/2019/04/08/添加菜单分类页面/index.html","60f1f609ea16ad52579bbe2f58aee33a"],["/2019/04/09/umi搭建教程/index.html","fb7e4c59c17d694e4dbb52f6edf66e2c"],["/2019/04/12/ES6知识归纳/index.html","57abcc44fd3bd03d99c104886dc93d4e"],["/2019/04/13/pm2start/index.html","159a8255572e91626987dda20883dd3b"],["/2019/04/13/pm2start/pm2.png","db343923f76dd2f2a75ff2270929bcd6"],["/2019/04/17/webpack/index.html","fcbbce34bc741e0d3298bee986c70a24"],["/2019/04/22/react-hook/index.html","db154ed7191fa68f79ed9b953391c477"],["/2019/04/22/如何和hr谈薪资/index.html","058d24b3f7d7db8d93225fe27c1b3914"],["/2019/04/22/如何和hr谈薪资/p.jpg","54b0d80253acd02f30d13d6d474c156e"],["/2019/04/22/如何和hr谈薪资/pay.png","a6b4ce3e8eb61a0560c32a1a705c63d6"],["/2019/04/23/时间处理函数/index.html","57ac9d02ca974783f8bc2c3bd27d7d08"],["/2019/04/25/mac-Linux日常入门命令行使用/6900dac312be4fa891844f2c13e48c46_th.jpg","aaa36125f9642bd581f7a2c12cc32db2"],["/2019/04/25/mac-Linux日常入门命令行使用/index.html","f5f217dce8d0b8e8acb4041c3674b2d1"],["/2019/04/25/mac上如何安装git/index.html","7cb692551b160c4c455ae7b04f7a127e"],["/2019/04/25/mac上如何安装git/mac.jpg","99888184e7a1a93bc3a65abfae465b4a"],["/2019/04/25/mac上如何安装git/微信图片_20190425100828.png","87f2f7d584b4f0ea1b4acb2ee1da4df6"],["/2019/04/25/mac上如何安装git/微信图片_20190425100932.png","a7d71d4d2bf6e9b0a1f3bb17d4a92ac0"],["/2019/04/25/mac上如何安装git/微信图片_20190425101032.png","b2cc4fa3104d158d57d22705edfa58c3"],["/2019/04/25/mac上如何安装git/微信图片_20190425114016.png","cbd280f91ceed39d2a3d2d4e1d81859b"],["/2019/04/25/带大家了解sigmaJs/index.html","37e162146e7dbaec76654c8999dbbc32"],["/2019/04/25/带大家了解sigmaJs/sigma.png","a6854d00af3318d995add21857c7b6e0"],["/2019/04/25/带大家了解sigmaJs/微信图片_20190425171205.png","6e4f0e5e6bd6be863ae30241140e040c"],["/2019/04/27/ES6知识点总结/index.html","b3fd9fffc33ec7f0e8d82d7f5bc50ce8"],["/2019/05/02/typescript基本数据类型/index.html","3c243bc9ffbc864d847a3e913ef78735"],["/2019/05/03/redis的安装和使用/download.png","58e0f78af9cf3ea5caba4aa1be395978"],["/2019/05/03/redis的安装和使用/index.html","21fd104fe82d01584e1524bea3a23604"],["/2019/05/03/redis的安装和使用/install.png","eb3a9a34de1f8f7de44b585d9c081498"],["/2019/05/03/redis的安装和使用/keys.png","bce0da310dd34d5858a511a3c8aa0fad"],["/2019/05/03/redis的安装和使用/next.png","4f30173effb21b5c989f7c791072a48b"],["/2019/05/03/redis的安装和使用/redis.png","2b8e7418d31ad7726ddc45e6865b0c11"],["/2019/05/03/redis的安装和使用/session.png","79b608d83b667b9d59facf985acb628d"],["/2019/05/03/redis的安装和使用/set.png","b2587eb83b57015ad5b8074236203ccb"],["/2019/05/03/redis的安装和使用/setex.png","576a9e755f6196d852458f4f57bf0cdf"],["/2019/05/04/next-js/1.png","0711066bd5072abd7c802451f957b89d"],["/2019/05/04/next-js/2.png","6e06fee5820a26e00604a7d79320f12f"],["/2019/05/04/next-js/3.png","e6a19b95c6180e7feaf7ff0e04456380"],["/2019/05/04/next-js/index.html","e992fc4eadd82447e33d5a63f36e0b9e"],["/2019/05/04/next-js/next.png","4f30173effb21b5c989f7c791072a48b"],["/2019/05/20/git工作命令/index.html","64da4963a77f2805ddcc8e270e913b23"],["/2019/06/28/前端架构师知识分享/index.html","642588953490768f1da53a5b8db27589"],["/2019/06/28/前端架构师知识分享/leader.png","5ea7faee73e544007c6df2aae8724fc0"],["/about/index.html","cfbb3b434d465d9a08e963ebb413e072"],["/archives/2019/04/index.html","6f00a27704b56e5ebf963b116c1462fc"],["/archives/2019/04/page/2/index.html","fca6721a3ebec1baf001ed5491f732f8"],["/archives/2019/05/index.html","7bce917ef668b77a205979e55a76eee8"],["/archives/2019/06/index.html","f805a51945d26d98a4634ab7b22e27f6"],["/archives/2019/index.html","4c16ab92204598c73c23340020571750"],["/archives/2019/page/2/index.html","2703915027c7e913a1f2730cbae34b96"],["/archives/2019/page/3/index.html","5c068065fc394727d761aa8d0b3656e4"],["/archives/index.html","2a7e42735b64364c901ebca7bb3c52a2"],["/archives/page/2/index.html","6881cf0eca702749e2e2dbf1202520c0"],["/archives/page/3/index.html","8331745c56ee4b61f041a677338ddd01"],["/bundle.js","1ea6cd63198468df5478d926c17eb25e"],["/css/main.css","b2880b09ab10a308d28c9bb5c9e65387"],["/google27ad80c63e8d3543.html","f6c52f32d0b47a8a3c1c44cdffb721dc"],["/images/1.jpg","11bb0f8216279bacec35279541febbc7"],["/images/2.jpg","b7f4c278a033641f5edc32024ba315fa"],["/images/5.jpg","af8f964e0424218f5bd9dc59808de9ce"],["/images/6.jpg","1eb365ca0e3d07cdc2fb091432efa8b2"],["/images/7.png","46b1c698dcb0242f1a76d3e0d3156e69"],["/images/9.jpg","5c83a9e6862414a13eef1b367e0e69f6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","d7339fc1b994be6b0064ea4e5a7578f4"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/man.jpg","e70542e335b5c6491dbfeb2083abf844"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","1e05a611ead4cbc32c8fae662f8bf39c"],["/js/161dba201c0a6499.png","a45b09258ac6eda671a2d1ce353bfad0"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/my_avatar.png","fd5a7cabc8a6685fc3051a05fa892120"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fe3a239b4e1c997a0e6ea7868c5f3426"],["/page/3/index.html","b3ef71c424acc8335f0f937970ac0af2"],["/style.css","52e0947497241863100f97ca49093350"],["/sw-register.js","49d33d8e4046504ae12a67a8d7e63cb2"],["/tags/ES6/index.html","17242b0b738ff83fbae2649bf64055b1"],["/tags/HR/index.html","086f68e05e4c90b4a219fd80b42e10dd"],["/tags/PM2/index.html","0bd2b224b0a0744ad985a4db0bb6999e"],["/tags/git/index.html","0210d8934b9ac86b6b989dc61e0fd1cf"],["/tags/mac/index.html","1a86c6c6a026fcdd78e65a9663b044a4"],["/tags/next-js/index.html","7a3451fb167de479742917abcd4a884e"],["/tags/react/index.html","12e11bf104b48840f919012070aa31cf"],["/tags/redis/index.html","586e5294f78d1aef8bc6b3767e3311de"],["/tags/sigma/index.html","ea06d96296b228a9785f28f6b6ede339"],["/tags/typescript/index.html","7ce04895ecf98bd9915855a37842990a"],["/tags/umi/index.html","2dad301e704aa874f9c6665b2ddff007"],["/tags/webpack/index.html","b7b27ab292a3afdc1d78859c6074501a"],["/tags/前端架构/index.html","f6f045746d9e83bb076fc916cf2bca06"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
