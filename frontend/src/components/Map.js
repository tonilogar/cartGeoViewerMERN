import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

const Map = () => {
  
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [1.380, 41.5],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: 7.9
    });
    
    
    
    // Add dem sky
    map.on('load', function () {
      map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      // Dem
      // Sky
      map.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
          }
        });
        // Sky
    });
    // Add dem sky
    //Style cursor over de map
    map.getCanvas().style.cursor = 'default';
    map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer'
    }) 
    
    // Add navigation control (the +/- zoom buttons)
    const nav = new mapboxgl.NavigationControl();

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    ); 

  	map.addControl(nav);
    // Add navigation control (the +/- zoom buttons)
    // Geolocate ////////////////////////////////////
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    })); 

    map.addControl(new mapboxgl.ScaleControl({
      width: 80, 
      unit: 'metric'
      }));

     
    
    


      

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

//Coordinates


  return (
    <div className='map-container' ref={mapContainerRef}></div>
    );
};


export default Map;
