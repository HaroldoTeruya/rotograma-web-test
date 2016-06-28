//################MAP VARS###############

//# marker list for google map
var marker_list = [];

// # info window list
var info_list = [];

// # map var
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: new google.maps.LatLng(-16.22530860899995,-42.35276618599993),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var no_data = [{name:"Não possui dados"}];


var polygon_kml_to_maps = (function(polygon_kml){
    var polygon_maps = [];
    for(var i=0; i<polygon_kml.length-1; i+=2){
        var lat_lng = {};
        lat_lng['lng'] = polygon_kml[i];
        lat_lng['lat'] = polygon_kml[i+1];
        polygon_maps.push(lat_lng);
    }
    return polygon_maps;
});
[
    {
        'lat': -1233.123123,
        'lng': -12.4123
    } 
]


var create_polygon_on_map = (function(polygon_array, map){
	var polygon = new google.maps.Polygon({
		paths: polygon_array,
		strokeColor: '#FF0000',
		strokeOpacity: 0.8,
		strokeWeight: 0.5,
		fillColor: '#FF0000',
		fillOpacity: 0.35
	});
	polygon.setMap(map);
});


var useKmlFile = (function(file_address, map){
    var kml_layer = new google.maps.KmlLayer({
		url: file_address,
		map: map
  	});
    return kml_layer;
});


$(document).ready(function()
{
    //polygon_converted = polygon_kml_to_maps(kml_polygon);
	//create_polygon_on_map(polygon_converted, map);
    var kml_layer = useKmlFile('https://raw.githubusercontent.com/HaroldoTeruya/rotograma-web-test/master/KML_Poligono.kml', map);
    console.log(kml_layer);
});

