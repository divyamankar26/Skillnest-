self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('skillnest-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './style.css',
      './script.js'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
