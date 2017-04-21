var app = (function () {
const applicationServerPublicKey = 'AAAAgvNVA3Y:APA91bH6Bd1pZWYOVmGkVBWdESubz20V_A4yzyj4SKshinAUWwxDuAe-YBCLy9IWJD0iw_DZuySeTZaBV-CLUHyW-aTZhBXbdQfVLkcRzBt6_i_ez6tGW-jz8HwtfVzuR434c8fsi2-q';

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}		

var 
img_blocks = document.querySelector(".img_blocks"),
bee_map = document.getElementById("bee_map"),
get_user_position,
newLocation,
i = 0,

initiate_sw =function () {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
	   console.log("service worker and push is supported!");
  navigator.serviceWorker.register('service_w.js').then(function (reg) {
	 console.log('service worker is registered', reg); 
	swreg = reg;
  }).catch(function(error) {  
    console.log('Registration failed with ' + error);
   }); 
 } else {
	 console.warn('Push messaging is not supported');
 }
},

initialize_geo = function (callback) {
    mapOptions = {
      center : new google.maps.LatLng(51.5074, 0.1278),
      zoom : 8
    };
    beeyond_map = new google.maps.Map(bee_map, mapOptions);
	callback();
	
 },
 
 hon_img =  "Assets/imgs/small_chrys.png",
 chrys_img = "Assets/imgs/small_hon.png",
 

 get_user_position = function () {
	 shops_location = [[51.5499798,-0.13069319999999607], [51.5492767,-0.07497520000003988], [51.5612228,-0.07357619999993403], [51.5462962,-0.10122030000002269], [51.5567162,-0.056051600000046164]], 
    
    shop_names = ["BUMBLE BEE", "HARVEST E8", "HARVEST N16", "MOTHER EARTH", "ORGANIC & NATURAL CAFE"];
    shopMarkerTitle = ["BUMBLE BEE", "HARVEST E8", "HARVEST N16", "MOTHER EARTH", "ORGANIC & NATURAL CAFE"];

    for (i; i < (shops_location.length || shopMarkerTitle.length); i++) {
         shops_LatLng = new google.maps.LatLng(shops_location[i][0], shops_location[i][1]);     
          shop_markers = new google.maps.Marker({position : shops_LatLng, map : beeyond_map,  icon : hon_img, title: shopMarkerTitle[i], animation : google.maps.Animation.BOUNCE});
        }
	 
	 
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError, positionOptions);
}
    var positionOptions = {
      enableHighAccuracy : true,
      maximumAge : 1000000,
      timeout : 6000000
    },

    positionSuccess = function (position) { 
    newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 
  
    marker = new google.maps.Marker({
      position : newLocation,
      map : beeyond_map,
      draggable : true,
      label : "",
      //icon : "<img src=' + window.localStorage.getItem(user_image) + '>",
      title : "you are here"
      //animation : google.maps.Animation.BOUNCE  
     });
    beeyond_map.setZoom(12);
    beeyond_map.setCenter(newLocation);
	
	newinfowindow = new google.maps.InfoWindow(); 
    newinfowindow.setContent("You Are Here");
    newinfowindow.open(beeyond_map, marker); 
    }, 

    positionError = function () {
      console.log("sorry your postion cannot be found at this time");
    },
	
	// request user permission
	initialize_ui = function() {
	swreg.pushManager.getSubscription().then(function(sub) {
		isSubscribed = !(sub === null);
		if (isSubscribed) {
		var sub_button = bad_button_form.getElementsByTagName("BUTTON")[0],
		    unsub_button = bad_button_form.getElementsByTagName("BUTTON")[1];
			sub_button.disabled = true;
			unsub_button.disabled = false;
            unsub_button.title = "disable push messages";
			
			unsub_button.addEventListener("click", unsubscribe);
			//swreg.pushManager.unSubscribe();
			
		} else {
			// enable subscription button
			var 
			push_not = documennt.querySelector(".push_not_div"),
			sub_button = push_not.getElementsByTagName("BUTTON")[0],
		    unsub_button = push_not.getElementsByTagName("BUTTON")[1];
			sub_button.disabled = false;
			unsub_button.disabled = true;
            sub_button.title = "Enable push messages";
	        console.log('user is not subscribed');
			
			sub_button.addEventListener("click", subscribeUser);
		}
	})
},
	
	// subscribe user to push Notification
	
subscribeUser = function() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swreg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed: this is the new addition', subscription);
    event.preventDefault();
    console.log('User is subscribed:', subscription);
    //thank_you();
   
    //updateSubscriptionOnServer(subscription);

    isSubscribed = true;

   
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    
  });
},

unsubscribe = function () {
	swreg.pushManager.getSubscription().then(function(pushSubscription) {
		pushSubscription.unsubscribe();
	}).catch(function (e) {
		window.Demo.debug.log("unsubscription error: ", e);
	})
},

    

init = function () {
	//google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
	initiate_sw();
	initialize_ui();
};

 return {
	 init: init
 }

}());

app.init();