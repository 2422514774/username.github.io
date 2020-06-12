/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d59c83630561abcf93b20371ccad961e"
  },
  {
    "url": "about/index.html",
    "revision": "693e328936de0139675dffc8d5307881"
  },
  {
    "url": "assets/css/0.styles.439f6926.css",
    "revision": "09be242336196ab54426a56f5937dc96"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/js/1.d25ff78d.js",
    "revision": "2c552c581b662cb83a8eb0992654a4ba"
  },
  {
    "url": "assets/js/10.2a9e0f6f.js",
    "revision": "198421e0c45a98cfbaa15bd2788f7845"
  },
  {
    "url": "assets/js/11.e0232174.js",
    "revision": "65b11efee26b97e150305a65e912378a"
  },
  {
    "url": "assets/js/12.db54a196.js",
    "revision": "2ad2283325640d8c133dbfb0555fb8ea"
  },
  {
    "url": "assets/js/13.ee2007a0.js",
    "revision": "66949e5713e56bc409fd615592e11189"
  },
  {
    "url": "assets/js/14.41146c3e.js",
    "revision": "0e897f22844107f536aa26af93d1b434"
  },
  {
    "url": "assets/js/15.a009e84b.js",
    "revision": "c8e217b7d51b8bbb5ab2e8f6083ee459"
  },
  {
    "url": "assets/js/16.40323a06.js",
    "revision": "666a7c7248f25554138c96dfb6c8e95d"
  },
  {
    "url": "assets/js/17.dc463b1f.js",
    "revision": "46e6770ad36713eab82631bbcdef95de"
  },
  {
    "url": "assets/js/18.d2d04221.js",
    "revision": "b24f64a1ef4fff391ab21fbe4be9d098"
  },
  {
    "url": "assets/js/19.ffbf0937.js",
    "revision": "879398bf1f7bc2673380348e622f5c1d"
  },
  {
    "url": "assets/js/20.5eb72529.js",
    "revision": "84023b52d72e876856f6c25d40d27461"
  },
  {
    "url": "assets/js/21.f9e02d0d.js",
    "revision": "921b3502da105f33a251e6bfddc1b3f1"
  },
  {
    "url": "assets/js/22.e0ee3b6c.js",
    "revision": "4d712daf74d108a4102e022c71d786ad"
  },
  {
    "url": "assets/js/23.d9c0720e.js",
    "revision": "3eaf8e844041a50f4914e7a0ee46fdd6"
  },
  {
    "url": "assets/js/24.2b3ebebf.js",
    "revision": "7713f6c3c044a5a22aa840cee03d8f85"
  },
  {
    "url": "assets/js/25.fc1c7f49.js",
    "revision": "c566ba36c47d874f9b4279d71ace43fb"
  },
  {
    "url": "assets/js/26.b51452f5.js",
    "revision": "17badd16c70932b9b602ed59a334124b"
  },
  {
    "url": "assets/js/27.4165caa2.js",
    "revision": "c4c06b8f29dc16c6148110f450e3e16f"
  },
  {
    "url": "assets/js/28.f2f7e878.js",
    "revision": "e03b907a8ff9c906c4e46cd56104670d"
  },
  {
    "url": "assets/js/29.b8e1833b.js",
    "revision": "2025d6d80c5bdb7cbd8217c3bbb93a9b"
  },
  {
    "url": "assets/js/3.73e37eb7.js",
    "revision": "ae9b24003b6e2d5c8bbc1bd1fbc3dd24"
  },
  {
    "url": "assets/js/30.1488699a.js",
    "revision": "eb33ccc496dc35e6d7ebf51bc86154ae"
  },
  {
    "url": "assets/js/31.4e6e4a13.js",
    "revision": "f20ace6447f00057df42d6266d86cd90"
  },
  {
    "url": "assets/js/32.6e7a11d5.js",
    "revision": "487dc20ff20063cd56ff7fa9b5c4b7af"
  },
  {
    "url": "assets/js/33.0e02425b.js",
    "revision": "ca2e49aca001210f32cd1358eb7af4bc"
  },
  {
    "url": "assets/js/34.05eacfe9.js",
    "revision": "521627420d9cd623f02c82e39a406833"
  },
  {
    "url": "assets/js/35.e4a19309.js",
    "revision": "3137c5b7138c42e95cb9c5d513aa2069"
  },
  {
    "url": "assets/js/36.3ef95ece.js",
    "revision": "24e3ff70cb51a8e06354adc1c132fc6c"
  },
  {
    "url": "assets/js/37.e4433bc6.js",
    "revision": "60a62a4250560e4ee3685d1e533839eb"
  },
  {
    "url": "assets/js/38.c8b42595.js",
    "revision": "d615158c49de40b889161f8cc307f293"
  },
  {
    "url": "assets/js/39.af0d615a.js",
    "revision": "64c17402bd15bd70eb4dc7689298914a"
  },
  {
    "url": "assets/js/4.f113f71e.js",
    "revision": "0f79f17b6d28fc34e52dd0c2dc7ab0e4"
  },
  {
    "url": "assets/js/5.08ebc695.js",
    "revision": "18aacebc3b661d642978ffdd1200d0ce"
  },
  {
    "url": "assets/js/6.235fb56f.js",
    "revision": "175798d4726b99305ece8e18d30a7003"
  },
  {
    "url": "assets/js/7.8797de0b.js",
    "revision": "5f93630a290261ab1cb60e879db88131"
  },
  {
    "url": "assets/js/8.760667a1.js",
    "revision": "72bbec5b639537606e05ede675d2e921"
  },
  {
    "url": "assets/js/9.68478792.js",
    "revision": "fd5b31749ed83ba1b6588a9c0f1adf04"
  },
  {
    "url": "assets/js/app.fa120c00.js",
    "revision": "b4d7f299fa4aa1357a03a01d2f0862df"
  },
  {
    "url": "categories/index.html",
    "revision": "2fe218ec976cac4edbe5714e6a2b3743"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5463af265436826b9642468f88d6725a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "153a36d16bf848daf558208d0d3a320a"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "e8fca03b211e09332344bdbddb3ab766"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "86b20097d0c3d4e117b01c96c4280750"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "e211f6e7c5a93203f56d84e8e5211a63"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "0f94634550b1e8a710b2081181350272"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "ec9380aaccc3ef15b7150505a7c5f524"
  },
  {
    "url": "index.html",
    "revision": "35ce9348660b26812fee16a6fd5b3748"
  },
  {
    "url": "nadouzi.png",
    "revision": "7b69e4ce1e7efd75c55a62c964b548fc"
  },
  {
    "url": "note/css/css3Flip.html",
    "revision": "e1befea0ef41b11e6d022f4ac895c274"
  },
  {
    "url": "note/css/css3新特性.html",
    "revision": "087142f7a9822250acda6e7a8e6ae340"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "bb9000d996a86ab13676b82ba3ef9711"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "127e3ee12b21c8900fe3b5c3681a2364"
  },
  {
    "url": "note/fe-unit-test/vueTestUtils.html",
    "revision": "48abd3d73a0001cf8b795b40131088da"
  },
  {
    "url": "note/html5/Canvas.html",
    "revision": "e056e9661667d156934ba5912ececc2b"
  },
  {
    "url": "note/html5/HTML5中的API.html",
    "revision": "e6832b39c60baff52e05c02a3991d70b"
  },
  {
    "url": "note/html5/HTML5多媒体标签.html",
    "revision": "c9383fa46e2fa916672a74abaeb62b80"
  },
  {
    "url": "note/html5/HTML5的语义元素.html",
    "revision": "9f9aea3e9bb4998b751b3114a0ef4d32"
  },
  {
    "url": "note/html5/HTML5表单元素.html",
    "revision": "5691952219a88f71c96c9ca3de381495"
  },
  {
    "url": "note/index.html",
    "revision": "9688c4b3a039d4ece24e14057ae2df01"
  },
  {
    "url": "note/js/js函数的四种调用方式.html",
    "revision": "107c0d8395b7b2581366736502c746ec"
  },
  {
    "url": "note/js/js原型链、闭包.html",
    "revision": "b2f57d0a26178dbe3c42d10f14cf20ce"
  },
  {
    "url": "note/js/js对象.html",
    "revision": "c2227ae81af38d91aca795d9f77e3834"
  },
  {
    "url": "note/js/js数据类型.html",
    "revision": "1523317a0d4ce8602468bd893f363692"
  },
  {
    "url": "note/js/js继承.html",
    "revision": "2e1f76ce66f8c5f81bbda093d5983792"
  },
  {
    "url": "note/Vue/Vue基础笔记.html",
    "revision": "809d4f9b1302590a74f757a18a183a15"
  },
  {
    "url": "note/Vue/Vue组件.html",
    "revision": "315838bb24d89556176c0a9b6c0429a4"
  },
  {
    "url": "note/wechat-mini-program/初识微信小程序.html",
    "revision": "cb816a462a8a972aff604cc25b4f5da5"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "pg45.png",
    "revision": "252416998b8d431e83709523edcca02b"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "37d5d21799b28df792cc2e35b652efc6"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "4e045aeecc70528ddbe74603a83df5d6"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "eaaa2a3e6f8031285d2f2aee5e644609"
  },
  {
    "url": "tag/index.html",
    "revision": "8c4418a9ba9dad5f88543c5cfcce580c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e070631215bf7f0ab68decab67098fd4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ed772c20a0f408db625412cb0c62cb7f"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "bdb812ca56e1c9d5968113035d9bf82d"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "a92dbbc7f939501c458751cd009c7084"
  },
  {
    "url": "tag/后端单元测试/index.html",
    "revision": "36fa06024d685e324d10078d10b4b986"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "43c528396f14f987898e114d6a64b156"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "09947f2283090290d4b418ada78152a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "8965fc1c96c950cbdd1db9ba1572d3ef"
  },
  {
    "url": "views/前端/2019/Vue-cli3中单元测试环境的搭建.html",
    "revision": "b72423f22179d2941d29b4482612ebd5"
  },
  {
    "url": "views/前端/2020/localStorage变动监听.html",
    "revision": "6b71cff978bdb842b683b62ce768d0a6"
  },
  {
    "url": "views/后端/2020/Vue-cli3中单元测试环境的搭建.html",
    "revision": "140ca749a77afc8915b390aed55ea6a8"
  },
  {
    "url": "views/摘记/我亦飘零久.html",
    "revision": "33bf9c51ca8711cdc0e1a8b2e0cb119e"
  },
  {
    "url": "views/随笔/2019/没有理想的人不伤心.html",
    "revision": "61303197379802201ecd233e71d576ff"
  },
  {
    "url": "views/随笔/2019/足球和摇滚乐.html",
    "revision": "93d0ead6034c7336ff78ea522420c25c"
  },
  {
    "url": "views/随笔/2020/记我的大学.html",
    "revision": "8baac16e37e38a85e9ad44d3f5ca90b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
