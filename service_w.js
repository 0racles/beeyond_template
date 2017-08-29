this.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open('v2').then(function (cache) {
         return cache.addAll([
          'index.html',
		  'find_us.html',
		  'n_info.html',
		  'our_journey.html',
          'manifest.json',
          'scripts/app.js',
          'scripts/main.js',
          'scripts/controller/MainController.js',
          'scripts/libs/angular.js',
          'css/adaptive.css',
          'css/main.css',
          'Assets/imgs/b_w_logo.png', 
          'Assets/imgs/bee_family.jpg', 
          'Assets/imgs/brick_lane.jpg', 
          'Assets/imgs/chrysanthemum.jpg',
          'Assets/imgs/cin_chrys_pak.jpeg',
          'Assets/imgs/cinnamon.jpg',
          'Assets/imgs/cranberries.jpg',
          'Assets/imgs/farm.jpg',
          'Assets/imgs/girl_drink.jpg',
          'Assets/imgs/girl_jump.jpg',
          'Assets/imgs/girl_run.jpg',
          'Assets/imgs/hon_cran_pak.jpeg',
          'Assets/imgs/honey.jpg',
          'Assets/imgs/leaves.jpg',
          'Assets/imgs/milton_keynes.jpg',
		  'Assets/imgs/new_beeyond_logo.jpg',
		  'Assets/imgs/new_family.jpg',
		  'Assets/imgs/whole_family.jpg',
		  'Assets/imgs/water.jpg',
		  'Assets/imgs/small_chrys.jpeg',
          	  'Assets/imgs/ife.png',
          	  'Assets/imgs/pin.png',
          	  'Assets/imgs/small_chrys.png',
          	  'Assets/imgs/small_honey.png',
          	  'Assets/imgs/shelf.png',
          	  'Assets/imgs/site_logo.png',
		  'Assets/icons/mellsa.png',
		  'Assets/icons/b_w_logo.png',
		  'Assets/icons/facebook.png',
		  'Assets/icons/googleplus.png',
		  'Assets/icons/linkedin.png',
		  'Assets/icons/not_bell.png',
		  'Assets/icons/twitter.png'
		
		 
          ]);
        })
        );
    });

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});


this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })

    );
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Beeyond Water Update';
  const options = {
    body: 'Claim your Free Water Saving Device.',
   icon: 'Assets/imgs/mellsa.png',
    badge: 'Assets/imgs/hon_cran_pak.jpeg'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});



