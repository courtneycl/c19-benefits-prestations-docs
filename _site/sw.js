importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/contact/','/contributing/','/for-developers/','/home/','/accueil/','/aperc%CC%A7u-technique/','/contribution-et-source-ouverte/','/coordonne%CC%81es/','/menu/menu.html',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
