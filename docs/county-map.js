mapboxgl.accessToken = 'pk.eyJ1IjoianNhcndhdGUiLCJhIjoiY2t4NnI5ZjJyMDRucjJwcnl5NDh1Zml5cSJ9.qmI6QbbKDZ98r06dRnkSzQ';
var countymap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jsarwate/cl41tbewp000c14o6f8hsgpd9',
    zoom: 6.5,
    center: [-85.5, 37.7]
});

countymap.on("load", function () {
    countymap.addLayer({
      id: "county_types",
      type: "fill",
      source: {
        type: "geojson",
        data: "types.geojson",
      },
      paint: {
        "fill-color": "#cccccc",
        "fill-outline-color": "#000000",
      },
    });
  });
  countymap.addLayer({
    id: "county_codes",
    type: "fill",
    source: {
      type: "geojson",
      data: "types.geojson",
    },
    paint: {
      "fill-color": [
        "match",
        ["get", "Low_Education_2015_Update"],
        "0", "#cf635d",
        "1", "#6193c7",
        "#1098f7",
      ],
      "fill-outline-color": "#1098f7",
    },
  });