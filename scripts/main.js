var app = (function () {
var img_blocks = document.querySelector(".img_blocks"),
bee_map = document.getElementById("bee_map"),
get_user_position,
newLocation,
i = 0,

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
    


translate_func = function () {
	alert("this shit is working");
},

init = function () {
	google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
//img_blocks.addEventListener("click", translate_func);
}

 return {
	 init: init()
 }

}());

app.init