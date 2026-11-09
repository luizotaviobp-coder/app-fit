const CACHE='itaca-shell-v8';
const FILES=['./','./index.html','./styles.css','./app.js','./data.js','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('itaca-shell-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response&&response.ok){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone()).catch(()=>{});
      }
      return response;
    }catch(error){
      const cached=await caches.match(event.request);
      if(cached) return cached;
      if(event.request.mode==='navigate') return caches.match('./index.html');
      throw error;
    }
  })());
});