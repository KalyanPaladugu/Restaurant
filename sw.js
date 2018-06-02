self.addEventListener('install', function (event) {
 console.log('serviceWorker Installed');
 event.waitUntil(
   caches.open('static')
     .then(function (cache) {

       cache.addAll([
         '/',
         '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/css/styles.css',
        '/index.html',
        '/restaurant.html'
        // '/js/dbhelper.js',
        // '/js/main.js'.
        // '/data/restaurants.json'

       ]);
     })
 );
});

self.addEventListener('activate', function () {
 console.log('serviceWorker Activated');
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request)
     .then(function(response) {
       if (response) {
         return response
         return fetch(event.request);
       }
     })
 );
});
