import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import '../assets/styles/components/Map.css'

mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w"

const Map = () => {
  const mapContainerRef = useRef(null)
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [1.380, 41.66],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: 7.7
    });
    
    // Add navigation control (the +/- zoom buttons)
    /* map.addControl(new mapboxgl.NavigationControl(), 'top-right'); */
    // DEM
    map.on('load', function () {
      map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      
      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
          }
      });
    });
    },)

  return (
  <div className='map-container' ref={mapContainerRef}></div>
   )
};

export default Map;
