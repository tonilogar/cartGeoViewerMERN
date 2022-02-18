import React from "react";
import "./ListProjects.css";
import dataJson from "./projects.json";


const ListProjects = () => {
  const [stateSelectedProject, setStateSelectedProject] = React.useState('')
  const listItems = dataJson.map((item) =>
    <li className='listProjectsLi'>
      <label className='listProjectsLabel'>
        {item.project}
        <input list={item.project} name={item.project.toString() + "pepe"} />
      </label>
      <datalist id={item.project} >
        {item.dataProject.map((item) =>
          console.log(item + ' selected project'),
          <option className={item.project} value={item} />)}
      </datalist>
    </li>
  )
  const sendSelectedProject = () => {
    return stateSelectedProject;
  }
  //When user sekelct project send a signal with the select project
  return (
    <div className="listProjects" >
      <ul className="listProjectsUl">{listItems}</ul>
      {/* <div>{stateSelectedProject}</div> */}
    </div>

  );
};

export { ListProjects };
