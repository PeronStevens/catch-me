let mymap = L.map('mapid').setView([51.505, -0.09], 13),
    popup = L.popup(),
    latitude = document.getElementsByClassName("latitude"),
    longitude = document.getElementsByClassName("longitude");

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidW5peGxpa2UiLCJhIjoiY2syYzduMWNwMXZlMzNjbzZwdjZiYWRsYSJ9.VKSZ_mzZuzQlJMnxbsk2kA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
        
        console.log(e.latlng);

        // latitude.innerText = 'ffsdd';
        
}

mymap.on('click', onMapClick);
