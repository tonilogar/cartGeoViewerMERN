import React from 'react'
import './Projects.css'

const Projects = () => {
  const click = () => {
    function readTextFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
        }
      }
      rawFile.send(null);
    }

    readTextFile("../json/projects.json", function (text) {
      const data = JSON.parse(text);
      const ul = document.createElement("ul");
      ul.setAttribute("class", "projects");
      ul.setAttribute("id", "projects");
      for (const i in data) {
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
      document.body.appendChild(ul);
    })
    
  }
  return (
    <svg
      className="projects"
      id="projects"
      viewBox="0 0 650 650"
      onClick={click}>
      <g transform="matrix(5.1976 0 0 4.8555 26.444 26.635)">
        <path class="st0" d="m105.4 76.3 3.8 3.8c1 1 1 2.6 0 3.6l-3.1 3.1c0.8 1.6 1.5 3.3 1.9 5.1h4c1.4 0 2.6 1.2 2.6 2.6v5.4c0 1.4-1.2 2.6-2.6 2.6h-4.3c-0.5 1.7-1.3 3.4-2.2 4.9l2.8 2.8c1 1 1 2.6 0 3.6l-3.8 3.8c-1 1-2.6 1-3.6 0l-3.1-3.1c-1.6 0.8-3.3 1.5-5.1 1.9v4c0 1.4-1.2 2.6-2.6 2.6h-5.4c-1.4 0-2.6-1.2-2.6-2.6v-4.4c-1.7-0.5-3.4-1.3-4.9-2.2l-2.8 2.8c-1 1-2.6 1-3.6 0l-3.8-3.8c-1-1-1-2.6 0-3.6l3.1-3.1c-0.8-1.6-1.5-3.3-1.9-5.1h-4c-1.4 0-2.6-1.2-2.6-2.6v-5.4c0-1.4 1.2-2.6 2.6-2.6h4.3c0.5-1.7 1.3-3.4 2.2-4.9l-2.7-2.7c-1-1-1-2.6 0-3.6l3.8-3.8c1-1 2.6-1 3.6 0l3.1 3.1c1.6-0.8 3.3-1.5 5.1-1.9v-4c0-1.4 1.2-2.6 2.6-2.6h5.4c1.4 0 2.6 1.2 2.6 2.6v4.3c1.7 0.5 3.4 1.3 4.9 2.2l2.8-2.8c0.8-1 2.5-1 3.5 0zm-64 5.9c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h12.4c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm3.7 30.1c1.7 0 3 1.4 3 3 0 1.7-1.4 3-3 3h-38c-1.9 0-3.7-0.8-5-2.1s-2.1-3-2.1-5v-104.1c0-2 0.8-3.7 2.1-5s3-2.1 5-2.1h86.7c1.9 0 3.7 0.8 5 2.1s2.1 3 2.1 5v48.3c0 1.7-1.4 3-3 3-1.7 0-3-1.4-3-3v-48.3c0-0.3-0.1-0.5-0.3-0.7s-0.4-0.3-0.7-0.3h-86.8c-0.3 0-0.5 0.1-0.7 0.3-0.2 0.1-0.3 0.4-0.3 0.7v104.3c0 0.3 0.1 0.5 0.3 0.7s0.4 0.3 0.7 0.3h38zm-26.3-38.2h10.7c0.6 0 1 0.4 1 1v9.2c0 0.6-0.4 1-1 1h-10.7c-0.6 0-1-0.4-1-1v-9.2c0-0.6 0.4-1 1-1zm0-52.9h10.7c0.6 0 1 0.4 1 1v9.2c0 0.6-0.4 1-1 1h-10.7c-0.6 0-1-0.4-1-1v-9.2c0-0.6 0.4-1 1-1zm22.6 8.1c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h34.7c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm-19.5 28.1c-0.7 0.5-1.6 0.4-2.3-0.3l-0.2-0.2-3.2-3.3c-0.7-0.7-0.5-1.8 0.3-2.6 0.9-0.7 2.1-0.8 2.8-0.1l1.7 1.8 5.6-4.5c0.7-0.6 1.9-0.3 2.5 0.6 0.7 0.9 0.6 2.2-0.2 2.8zm17.8-2.6c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h34.7c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm48.4 31.1c5.8 0 10.6 4.7 10.6 10.6 0 5.8-4.7 10.6-10.6 10.6-5.8 0-10.6-4.7-10.6-10.6s4.8-10.6 10.6-10.6z" />
      </g>
      <circle cx="485.42" cy="493.71" r="50.149" fill="#fff" stroke-width="1.2262" />
    </svg>
  )
}

export { Projects }