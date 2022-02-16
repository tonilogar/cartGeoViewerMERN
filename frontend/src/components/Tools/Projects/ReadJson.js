import React from "react";
import "./ReadJson.css";
import data from "./projects.json";
import { Li } from "./Li";

const ReadJson = () => {
  // create React element <li>'s
  /* const one = 'one'
  const two = 'two'
  const three = 'three' */
  //const rElmLi1 = React.createElement('li', { id: 'li1' }, 'one');
  //const rElmLi2 = React.createElement('li', { id: 'li2' }, 'two');
  //const rElmLi3 = React.createElement('li', { id: 'li3' }, 'three');
  
  // create React element <ul>
  //const reactElementUl = React.createElement('ul', { className: 'myList' }, rElmLi1, rElmLi2, rElmLi3);
 

  
  
    
  
 
  const click = () => {
   
  };

  
    const typeProjects=[]
    const subProjects=[]
    let optionsData;
    for (let i in data) {
      typeProjects.push(i);
      
      for (let f = 0; f < data[i].length; f++) {
        subProjects.push(data[i][f]);
        optionsData = subProjects.map((options) => 
      <datalist>
        <option value={options} />
      </datalist>)
      }
    }
    console.log(typeProjects + ' projects')
    console.log(subProjects + ' subProjects')

    /* const optionsData = subProjects.map((options) => 
      <datalist>
        <option value={options} />
      </datalist>) */
      for (let i in data) {
        console.log(i + ' in data')
        
      }
    
    const listItems = typeProjects.map((typeProject) =>
      <li className={typeProject.toString() + 'pepe'}>
        <label>
          {typeProject}
          <input list={typeProject} name={typeProject} />
          </label>
          <datalist id= {typeProject} >{optionsData}</datalist>
        </li>
    )
    const elements = ['one', 'two', 'three'];
    const items = []
    
    
    for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
    } 

  return (
    <div className="readJson" onClick={click}>
      {/* {reactElementUl} */}
      {/* {reactElementUl01} */}

      {/* {list()} */}
      <ul>{listItems}</ul>
    </div>
  );
};

export { ReadJson };
 /* const reactElementUl =
    <ul>
      <li>
        <label>
          Subsidences:
          <input list="subsidences" name="subsidences" />
        </label>
        <datalist id="subsidences">
          <option value="CAT S1 LOS ASC 201601-201612" />
          <option value="CAT S1 LOS DESC 201601-201612" />
          <option value="CAT S1 UD 201601-201612" />
          <option value="CAT S1 EW 201601-201612" />
          <option value="pepe" />
        </datalist>
      </li>
      <li>
        <label>
          Farmstart:
          <input list="farmstart" name="farmstart" />
        </label>
        <datalist id="farmstart">
          <option value="2016" />
          <option value="2017" />
          <option value="2018" />
          <option value="2019" />
          <option value="2020" />
          <option value="2021" />
        </datalist>
      </li>
      <li>
        <label>
          NDVI:
          <input list="ndvi" name="ndvi" />
        </label>
        <datalist id="ndvi">
          <option value="2016" />
          <option value="2017" />
          <option value="2018" />
          <option value="2019" />
          <option value="2020" />
          <option value="2021" />
        </datalist>
      </li>
    </ul>; */