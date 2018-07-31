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
    "url": "assets/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "assets/css/main.css",
    "revision": "cb5d415be2558ff14ca33661349db91c"
  },
  {
    "url": "assets/css/noscript.css",
    "revision": "d50fdec12b8c4ed178e2f59b0b30b706"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/js/breakpoints.min.js",
    "revision": "81a479eb099e3b187613943b085923b8"
  },
  {
    "url": "assets/js/browser.min.js",
    "revision": "c07298dd19048a8a69ad97e754dfe8d0"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "assets/js/jquery.scrollex.min.js",
    "revision": "f89065e3d988006af9791b44561d7c90"
  },
  {
    "url": "assets/js/jquery.scrolly.min.js",
    "revision": "1ed5a78bde1476875a40f6b9ff44fc14"
  },
  {
    "url": "assets/js/main.js",
    "revision": "27a5e488b821e4924c43d6fefbb28260"
  },
  {
    "url": "assets/js/util.js",
    "revision": "fd2716a7b68ce7748c9676787b61db43"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "3aa3902e29cc794f546a071c201f2f74"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b5def29de3952ff56cf89ac871330de6"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "6136c4b6dc6110b24ebe175127f1e916"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4bbddc7a91964f84801e2f4647665101"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9e82bf0ab08c5d361655325bb673f73a"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "14b3b83d7a169a5b3acc970ea0ad6249"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "799ee0c3969846d51a30035e0ee14e22"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "91ca778793d2a76149802ea8da6adb13"
  },
  {
    "url": "images/bg.jpg",
    "revision": "e46e364f8f95d98560a7434e6ff23ed8"
  },
  {
    "url": "images/overlay.png",
    "revision": "aff0992faef6ad79b50ec21e2225a881"
  },
  {
    "url": "images/pic01.jpg",
    "revision": "ec909cae6214212d339e6a0c04010069"
  },
  {
    "url": "images/pic02.jpg",
    "revision": "242cf1e7d1b3f42011be367a82c66a04"
  },
  {
    "url": "images/pic03.jpg",
    "revision": "c2e220dfa740f6276f38d399e04412f3"
  },
  {
    "url": "images/pic04.jpg",
    "revision": "e10311ef40687375699d8c4e7d8fd6d7"
  },
  {
    "url": "images/pic05.jpg",
    "revision": "93d7ec122763508b17571e26c68dfa03"
  },
  {
    "url": "images/pic06.jpg",
    "revision": "07c319c3e390b03e05af6973a9270c40"
  },
  {
    "url": "images/pic07.jpg",
    "revision": "7acb94e1692f901244a6e24d76e621bf"
  },
  {
    "url": "images/pic08.jpg",
    "revision": "9b409893e34f5366b78b7798cfa33bce"
  },
  {
    "url": "images/pic09.jpg",
    "revision": "23f64e91a11119a9c4580cb9b939b3cd"
  },
  {
    "url": "workbox-config.js",
    "revision": "4ac7970f11c858784b8f775f0c410672"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


workbox.routing.registerRoute(
  new RegExp('/images/'),
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20, 
        maxAgeSeconds: 24 * 60 * 60 //24 horas
      })
    ],
  })
);

workbox.routing(
  /(\/post\/)post_([0-9])/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'post-cache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxEntries: 20, 
        maxAgeSeconds: 24 * 60 * 60 //24 horas
      })
    ],
  })
);