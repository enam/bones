var go = function(){
	var map = new L.Map('map', {
		center: new L.LatLng(45.518, -122.68),
		zoom: 6,
		layers: [toner],
		attributionControl: false
	});

	/*//The following mutes toner-lite even more when appropriate
	var bounds = [[-90, -180], [90, 180]];
	L.rectangle(bounds, {color: "#fff", stroke:false, fillOpacity:0.7}).addTo(map);
	*/

	//add attribution
	L.control.attribution({position: 'bottomright', prefix: '<a href="http://leafletjs.com/">Leaflet</a>, <a href="http://stamen.com">Stamen</a>, <a href="http://openstreetmap.org">OSM</a>'}).addTo(map);
	
	//add the header from js include and set title
	$("body").prepend(headerHTML);
	$(".demotitle").text(title);
}
//set vars
var title = "Bones"
,tonerUrl = 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
,toner = new L.TileLayer(tonerUrl, {maxZoom: 18, attribution: '', subdomains: ['a1', 'a2', 'a3']})
,baseMaps = {
	"Toner": toner
};

//ready...set...
$( document ).ready(go());