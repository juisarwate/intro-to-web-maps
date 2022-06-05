mapboxgl.accessToken = 'pk.eyJ1IjoianNhcndhdGUiLCJhIjoiY2t4NnI5ZjJyMDRucjJwcnl5NDh1Zml5cSJ9.qmI6QbbKDZ98r06dRnkSzQ';
var ukrainemap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jsarwate/cl41tbewp000c14o6f8hsgpd9',
    zoom: 6.5,
    center: [-85.5, 37.7]
});

ukrainemap.on("load", function () {
    ukrainemap.addLayer({
      id: "ukraine",
      type: "fill",
      source: {
        type: "geojson",
        data: "ukr_border_crossings.geojson",
      },
      paint: {
        "fill-color": "#cccccc",
        "fill-outline-color": "#000000",
      },
    });
  });