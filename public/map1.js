// const MyLatLng = new google.maps.LatLng(39.915556, 116.390833);
const position = { lat: 39.915556, lng: 116.390833 };
var Options = {
  zoom: 15,
  center: position,
  mapTypeId: "roadmap",
};
const map = new google.maps.Map(document.getElementById("map"), Options);
const Marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position:position,
    title:"Great Palace".
});
