"use strict";var precacheConfig=[["/Portfolio/index.html","ac96bca54a23358d00d83ffa429c1f43"],["/Portfolio/static/css/main.8c8a0fa7.css","4bd88852b5d80acd541cc119a188fad5"],["/Portfolio/static/js/main.3c6e2314.js","2bc6176dae995034961eed5eac2dc0f2"],["/Portfolio/static/media/almenyload.ab3c5dfa.png","ab3c5dfacf9a898aa54f74cb57dcad85"],["/Portfolio/static/media/arcade.1ba3dc57.png","1ba3dc57875b7c31e8144f775bbbc4b8"],["/Portfolio/static/media/back2.ea216dfa.svg","ea216dfa0358da3652e9e8b31e492e61"],["/Portfolio/static/media/calm.a4c72394.png","a4c7239405aa91bd1bd57b8ab0544baf"],["/Portfolio/static/media/faceBack.af18c1d8.png","af18c1d831dc1f6553bab8978d20cbf7"],["/Portfolio/static/media/faceFront.f724784f.png","f724784ff61ceccdeb762e6cc72bf33b"],["/Portfolio/static/media/map.02b62bf6.png","02b62bf6c0105dbee9426a22f3f2f1f8"],["/Portfolio/static/media/memory.4d7ba050.png","4d7ba05001c273f4cebd6711ac7be167"],["/Portfolio/static/media/myreads.c5b1e975.png","c5b1e975cbef84e776942f31d0ae5efc"],["/Portfolio/static/media/reader.24bedf4d.png","24bedf4d13540bf77a24b8b7491f65b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});