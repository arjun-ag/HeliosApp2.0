if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let f={};const d=e=>i(e,s),o={module:{uri:s},exports:f,require:d};a[s]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-88575b92"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_expo/static/js/web/entry-55c403b7d33f808b7c97b156d1a70ba9.js",revision:"6d6b4fb81525152bfafa8376cc27eaf3"},{url:"_sitemap.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"(tabs)/index.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"(tabs)/third.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"+not-found.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"assets/assets/fonts/SpaceMono-Regular.49a79d66bdea2debf1832bf4d7aca127.ttf",revision:"49a79d66bdea2debf1832bf4d7aca127"},{url:"assets/assets/images/heliosLogo.ccda6e03197c788ee6d6ae4cad121092.png",revision:"ccda6e03197c788ee6d6ae4cad121092"},{url:"autumn.html",revision:"b0e1bf0573b912abf1f078367bb1dd5f"},{url:"dream.html",revision:"c0966635776fcf36b117075aa4b0898e"},{url:"editorial.html",revision:"063cbe13e2c4c9f077955bdc57751aa5"},{url:"favicon.ico",revision:"50b1bd72d8b0c569ffcad83d622ec176"},{url:"heliosIcon.png",revision:"9736ccb9d25ca87ea01756141e1ce321"},{url:"heliosLogo.png",revision:"ccda6e03197c788ee6d6ae4cad121092"},{url:"honk.html",revision:"72279491de87a62d7e5d530924cc7b26"},{url:"index.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"lost.html",revision:"c7f95d0518c3739df861cf020bbe097e"},{url:"manifest.json",revision:"02935b3eaa7e60d2545669d0035b760a"},{url:"modal.html",revision:"052b39a008eac52eae14afc89d0f3ff4"},{url:"onward.html",revision:"b4e00f4dc4d0a78e4f11cee325239daa"},{url:"third.html",revision:"052b39a008eac52eae14afc89d0f3ff4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map