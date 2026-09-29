self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pharmisense-v2').then((cache) => {  // <-- Updated version here
      return cache.addAll([
        './index.html',
        './manifest.json',
        './268k med.db'
      ]);
    })
  );
});
