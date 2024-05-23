var MyLatLng = new google.maps.LatLng(39.915556, 116.390833);
var Options = {
  zoom: 15,
  center: MyLatLng,
  mapTypeId: "roadmap",
};
var map = new google.maps.Map(document.getElementById("map"), Options);
