// Wachirathan Waterfall - Service Worker
// Strategy: stale-while-revalidate for static assets; network-first for HTML.

const CACHE = 'wachirathan-v1';
const PRECACHE = [
  '/',
  '/th/',
  '/en/',
  '/zh/',
  '/manifest.webmanifest',
  '/gallery/wachirathan-waterfall-1.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Skip Google Analytics, Maps embed, fonts (they're third-party)
  if (
    url.host.includes('googletagmanager.com') ||
    url.host.includes('googleapis.com') ||
    url.host.includes('gstatic.com') ||
    url.host.includes('google.com') ||
    url.host.includes('open-meteo.com')
  ) {
    return;
  }

  // HTML → network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('/th/')))
    );
    return;
  }

  // Static → stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});