//asignar un nombre y versión al cache
const CACHE_NAME = 'offline',
  	  urlsToCache = [
  		  '/icons/favicon.png'
  	  ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => { return cache.addAll(urlsToCache).then(() => self.skipWaiting())})
    .catch(err => console.log('install: Falló registro de cache', err))
  )
})

//Cuando el navegador recupera una url
self.addEventListener('fetch', (e) => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  console.log('fetch: ',e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});