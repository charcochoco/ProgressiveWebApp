const APP_SHELL_CACHE = 'app-shell';
const POST_DATA_CACHE = 'post-cache';
//const BLOG_SPRITE_CACHE = 'poke-sprite';

const ROOT_URL = 'http://localhost:3000';//'http://10.25.131.220:3000';

const APP_SHELL_FILES = [
    '/',
    '/?',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
    '/static/css/main.f855e6bc.css',
    '/static/js/main.21b9e057.js',
    '/static/css/main.f855e6bc.css.map',
    '/static/js/main.21b9e057.js.map',
    "/static/css/main.f855e6bc.css",
    "/static/js/main.21b9e057.js",
    '/favicon.ico',
    '/manifest.json',
    '/icons/logo_X.png'
]

self.addEventListener('install', function(event){
    console.log("Installation...");

    event.waitUntil(
        caches.open(APP_SHELL_CACHE).then(function(cache){
            cache.addAll(APP_SHELL_FILES);
        })
    );   
});

self.addEventListener('activate', function(event){
    console.log("Activation!!!");
});

function getFromCache(cacheName, request){
    return caches.open(cacheName).then(function(cache){
        return cache.match(request).then(function(cachedResult){
            if(cachedResult){
                return cachedResult;
            }else{
                console.error("Couldn't fetch " + request.url);              
            }
        })
    })
}

function getFromCacheOrNetwork(cacheName, request){
    return caches.open(cacheName).then(function(cache){
        return cache.match(request).then(function(cachedResult){
            if(cachedResult){
                return cachedResult;
            }else{
                return fetch(request).then(function(networkResult){
                    cache.put(request.url, networkResult.clone());

                    return networkResult;
                });
            }
        })
    })

    // return fetch(request).then(response => {
    //     return caches.open(cacheName).then(function(cache){
    //         cache.put(request.url, response.clone());

    //         return cache;
    //     })
    // }).catch(function(error){
    //     console.log("Error fetching " + request.url, error);
        
    //     return caches.open(cacheName).then(function(cache){
    //         return cache.match(request).then(function(cachedResult){
    //             if(cachedResult){
    //                 return cachedResult;
    //             }
    //         })
    //     })
    // });
}

self.addEventListener('fetch', function(event){
    if(APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL, ''))){
        event.respondWith(getFromCache(APP_SHELL_CACHE, event.request));
    }
    else if(event.request.url.startsWith('http://localhost:8081/api/')){
        event.respondWith(getFromCacheOrNetwork(POST_DATA_CACHE, event.request));
    }
    else{
        event.respondWith(fetch(event.request));
    }
});