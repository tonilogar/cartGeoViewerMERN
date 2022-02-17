import React from "react";
import "./ListProjects.css";
import dataJson from "./projects.json";


const ListProjects = () => {

  const listItems = dataJson.map((item) =>
    <li className= 'listProjectsLi'>
      <label className= 'listProjectsLabel'>
        {item.project}
        <input list={item.project} name={item.project} />
      </label>
      <datalist id={item.project} >
      
      {/* <option className={item.project} value={item.dataProject}/> */}
      {item.dataProject.map((item) =>
      <option className={item.project} value={item}/>)}
      </datalist>
    </li>
  )

  return (
    <div className="listProjects" >
      <ul className="listProjectsUl">{listItems}</ul>
    </div>
  );
};

export { ListProjects };
