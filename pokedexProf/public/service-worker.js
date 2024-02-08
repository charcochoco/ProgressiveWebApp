const PRECACHE_NAME = 'app-shell';

self.addEventListener('install', function(event){
    console.log("Installation...");

    caches.open(PRECACHE_NAME).then(function(cache){
        cache.addAll('/');
    })
});

self.addEventListener('activate', function(event){
    console.log("Activation!!!");
});

self.addEventListener('fetch', function(event){
    event.preventDefault();
    
    console.log("fetched", event.request.url);

    event.respondWith(
        caches.match(event.request.url).then(
            function(response){
                if(response){
                    return response
                }else{
                    return fetch(event.request)
                }
            }
        )
    )
});