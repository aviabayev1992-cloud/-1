// Minimal service worker: makes the site installable. It does not cache anything, so updates always arrive immediately.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
