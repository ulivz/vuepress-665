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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2fbd9802c5bb976da2394968f0718a7"
  },
  {
    "url": "assets/css/0.styles.7248ba99.css",
    "revision": "32b881784a1a891bbc6ba96e112d556a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e47e50a0.js",
    "revision": "40824653fe4a49aec9690c0b341e9718"
  },
  {
    "url": "assets/js/3.1d94fe2d.js",
    "revision": "4f2cddf068d2b009b8eea461b780e6eb"
  },
  {
    "url": "assets/js/4.e0152df5.js",
    "revision": "b349fe52178996929eaa8a9b5394f451"
  },
  {
    "url": "assets/js/5.a04a5945.js",
    "revision": "b9da0e7afc6ab54c5312b4afae4705f1"
  },
  {
    "url": "assets/js/6.6953a3b8.js",
    "revision": "68c790d7ec6bd840974e3dd421d41d23"
  },
  {
    "url": "assets/js/app.e678c410.js",
    "revision": "784ad4447ac29c1277b3df26539aba35"
  },
  {
    "url": "double-meta-description/index.html",
    "revision": "5ced9cc1f6cb8f2262b86fcd983b877e"
  },
  {
    "url": "index.html",
    "revision": "05b660bdcac4951a5ca135b100cac54b"
  },
  {
    "url": "single-meta-description/index.html",
    "revision": "226a7cb373b6bbedf96f1bfe153cbe64"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
