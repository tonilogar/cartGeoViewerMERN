import React from "react";
import "./Li.css";


const Li = (props) => {
  // Obteniendo todas las claves del JSON
  
  
  return (
    <li className={props.project}>
      {props.project}
    </li>
  );
};

export { Li };
