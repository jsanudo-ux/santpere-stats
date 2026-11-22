const V='__VERSION__';
const SCOPE=new URL(self.registration.scope);
const C='sp|'+SCOPE.pathname+'|'+V;
const FILES=['./','index.html','app.js','manifest.webmanifest','logo.jpg','fonts/fonts.css','fonts/barlow-condensed-latin-500-normal.woff2','fonts/barlow-condensed-latin-600-normal.woff2','fonts/barlow-condensed-latin-700-normal.woff2','fonts/barlow-condensed-latin-800-normal.woff2','vendor/html2canvas.min.js','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
const URLS=FILES.map(f=>new URL(f,SCOPE).href);
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES.map(f=>new Request(new URL(f,SCOPE),{cache:'reload'})))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('sp|'+SCOPE.pathname+'|')&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);u.search='';u.hash='';
let key=u.href;if(r.mode==='navigate'){if(u.href!==SCOPE.href&&u.href!==new URL('index.html',SCOPE).href)return;key=new URL('index.html',SCOPE).href}
if(!URLS.includes(key))return;
e.respondWith(caches.open(C).then(c=>c.match(key).then(m=>m||fetch(r).then(res=>{if(res.ok)c.put(key,res.clone());return res}))))});
