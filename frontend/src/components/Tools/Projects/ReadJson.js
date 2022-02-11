import React from 'react'
import './ReadJson.css'
import data from './projects.json'

const ReadJson = () => {
  // create React element <li>'s
var rElmLi1 = React.createElement('li', {id:'li1'}, 'one');
var rElmLi2 = React.createElement('li', {id:'li2'}, 'two');
var rElmLi3 = React.createElement('li', {id:'li3'}, 'three');

//create <ul> React element and add child React <li> elements to it
var reactElementUl = React.createElement('ul', {className:'myList'}, rElmLi1,rElmLi2,rElmLi3);
  const click = () => {
 /*  const ulReact = React.createElement("ul",{className: 'projects'}); */
  
  // Obteniendo todas las claves del JSON
 /*  for (var i in data) {
    console.log(i + " projects");
    //create li
    const li = document.createElement("li");
    //Li's text
    const liProject = document.createTextNode(i);
    li.appendChild(liProject);
    li.setAttribute("id", "liProjects");
    ul.appendChild(li);
    const div = document.createElement("div");
    div.setAttribute("id", "divProjects");
    const input = document.createElement("input");
    //Add property list
    input.setAttribute("list", i);
    const dataList = document.createElement("datalist");
    //Add property id
    dataList.setAttribute("id", i);
    div.appendChild(input);
    div.appendChild(dataList);


    ul.appendChild(div);
    for (var f = 0; f < data[i].length; f++) {
      const option = document.createElement("option");
      option.textContent = data[i][f];
      option.setAttribute("id", "option");
      console.log(data[i][f] + " projects");
      dataList.appendChild(option);
    }
  }
  document.body.appendChild(ul); */
}
  return (
    <div className='readJson' onClick={click}>
     { reactElementUl}

    </div>
  )
}

export { ReadJson }