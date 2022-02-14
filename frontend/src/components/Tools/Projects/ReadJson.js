import React from 'react'
import './ReadJson.css'
import jsonFile from './projects.json'

const ReadJson = () => {
  // create React element <li>'s
  //const rElmLi1 = React.createElement('li', { id: 'li1' }, 'one');
  //const rElmLi2 = React.createElement('li', { id: 'li2' }, 'two');
  //const rElmLi3 = React.createElement('li', { id: 'li3' }, 'three');
  // create React element <ul>
  //const reactElementUl = React.createElement('ul', { className: 'myList' }, rElmLi1, rElmLi2, rElmLi3);

  const click = () => {
    console.log('into function click');

  }
  const list = () => {
    for (var i in jsonFile) {
      console.log(i + " projectsUL");
      
  
     
      for (var f = 0; f < jsonFile[i].length; f++) {
        
        console.log(jsonFile[i][f] + " projectsLi");
        
      }
    }
    
  }

  const reactElementUl =
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
    </ul>;




  return (
    <div className='readJson' onClick={click} >
      {/* {reactElementUl} */}
      {/* {reactElementUl01} */}
      
        {list}
      

    </div>
  )
}

export { ReadJson }