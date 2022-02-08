import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { CoorZoomDegree } from "../CoorZoomDegree/CoorZoomDegree"

mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

  const mapContainerRef = useRef(null);

  const [lng, setLng] = React.useState(1.3800);
  const [lat, setLat] = React.useState(41.5000);
  const [zoom, setZoom] = React.useState(7.9);
  const [degree, setDegree] = React.useState(0);
  const [stateShowHide, setStateShowHide] = React.useState(true);
  const [stateSwitch, setStateSwitch] = React.useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lng, lat],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: zoom,
    });
    // Add dem sky
    map.on("load", function () {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      // Dem
      // Sky
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 0.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
      // Sky
      // Add dem sky
      //Style cursor over de map
      map.getCanvas().style.cursor = "default";
      map.on("mouseenter", "clusters", () => {
        map.getCanvas().style.cursor = "pointer";
      });
    });
    if (stateSwitch) {
      console.log("map.setPitch(70)");
      map.setPitch(70);
    } else {
      console.log("map.setPitch(0)");
      map.setPitch(0);
    }
    //Catch de values lat lng
    map.on("mousemove", (e) => {
      setLng(e.lngLat.lng.toFixed(4));
      setLat(e.lngLat.lat.toFixed(4));
    });

    //Catch de values zoom and degree
    map.on("move", () => {
      setZoom(map.getZoom().toFixed(2));
      setDegree(map.getPitch().toFixed(0));
      console.log(typeof degree + degree + " typt value");

      const valueDegree = map.getPitch().toFixed(0);
      console.log(valueDegree + " value");

      if (valueDegree == 0) {
        document.getElementById("view_3D").style.display = "block";
        document.getElementById("view_2D").style.display = "none";
        setStateShowHide(true);
        console.log(valueDegree + " same 0");
      } else {
        document.getElementById("view_3D").style.display = "none";
        document.getElementById("view_2D").style.display = "block";
        setStateShowHide(false);
        console.log(valueDegree + " diferent 0");
      }
    });
    console.log(new mapboxgl.ScaleControl() + 'scale control');
    map.addControl(
      new mapboxgl.ScaleControl({
        unit: "metric",
      })
    );
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: "toponym or Lat, long",
      })
    );

    // Geolocate ////////////////////////////////////
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }));

    map.on('dblclick', function (e) {
      let lat = e.lngLat.lat;
      let lng = e.lngLat.lng;
      document.getElementById('copiedCoordinates').innerHTML = `Lat: ${lat.toFixed(4)} | Long: ${lng.toFixed(4)}`;
    });


    return () => map.remove();
  }, []);
  const switchDegree = () => {
    console.log(degree + " degreehh");
    if (stateShowHide) {
      console.log(" pepe");
      document.getElementById("view_3D").style.display = "none";
      document.getElementById("view_2D").style.display = "block";
      setStateShowHide(false);
      setStateSwitch(false);
    } else {
      document.getElementById("view_3D").style.display = "block";
      document.getElementById("view_2D").style.display = "none";
      setStateShowHide(true);
      setStateSwitch(true);
    }
  };


  //Coordinates


  return (
    <div>
      <div className="map-container" ref={mapContainerRef}></div>
      <div className="copiedCoordinates" id="copiedCoordinates">Double click get coordinates</div>
      <CoorZoomDegree lat={lat} lng={lng}  zoom={zoom} degree={degree} />
    </div>
  );
};


export { Map };
