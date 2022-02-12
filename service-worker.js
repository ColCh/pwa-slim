
self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});


