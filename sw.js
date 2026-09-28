self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pharmisense-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './250k med.db'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});