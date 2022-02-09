import React from "react";
import "./MapBackground.css"

const MapBackground = () => {



  return (
    <svg className="mapBackground" id="mapBackground" viewBox="0 0 650 650">
        <g fill="#010002">
          <path
            d="M289.44 79.226L153.66 18.679a12.68 12.68 0 00-10.356 0L7.524 79.226a12.716 12.716 0 00-.81 22.822l135.78 72.405a12.624 12.624 0 005.983 1.496c2.061 0 4.112-.495 5.994-1.496l135.78-72.405c4.281-2.284 6.886-6.81 6.712-11.661s-3.095-9.186-7.522-11.161zm-140.96 69.61L41.63 91.856 148.48 44.21l106.86 47.646z"
            transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
          </path>
          <path
            d="M278.28 133.4l-129.79 69.228L18.7 133.4c-6.217-3.318-13.908-.968-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.421a12.729 12.729 0 0011.977 0l135.78-72.421c6.195-3.301 8.528-10.998 5.227-17.198s-10.998-8.544-17.204-5.232z"
            transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
          </path>
          <path
            d="M278.28 183.06l-129.79 69.218L18.7 183.06c-6.217-3.318-13.908-.957-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.416a12.729 12.729 0 0011.977 0l135.78-72.416c6.195-3.301 8.528-10.998 5.227-17.198-3.307-6.19-10.987-8.55-17.204-5.232z"
            transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
          </path>
        </g>
      </svg>
  )
}

export { MapBackground }
