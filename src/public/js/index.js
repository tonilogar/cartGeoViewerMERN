

import Perspective_3d_2D from "./classes/classPerspective_3d_2D.js";
import DisplacementPointValues from "./classes/classDisplacementPointValues.js";
import OpenCloseMenu from "./classes/classOpenCloseMenu.js";
import ShowHideList from "./classes/classShowHideList.js"; 
/* Create map and make style */

//Show chart
map.on('click', function (clickLeftButton) {
  const displacementPointValues = new DisplacementPointValues(clickLeftButton);
  document.getElementById('chart__Div').style.display="block"; 
  google.charts.load('current', {'packages':['corechart']}); 
  //Callback call function    
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {       
    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');
    data.addColumn('number', 'Dis');   
    data.addRows(displacementPointValues.getValuesDataPointDisplacenet());

    
    // Set chart options
    let options = {'title': "id: " + displacementPointValues.getCode() + 
                   "        vel: " + displacementPointValues.getVel() +   
                   "        autoCorr: " + displacementPointValues.getAutoCorr() +   
                   "        stDev: " + displacementPointValues.getStDev(),
    lineWidth: 0, 
    pointSize: 4,
    pointShape: 'square',
    legend: 'none',
    vAxis: {
        title: 'Displacement [mm]',
             ticks: displacementPointValues.getVerticalValuesGraph()
           },
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.LineChart(document.getElementById('chart__Div__View'));
    chart.draw(data, options);
  }

});


//When click left button over point
/* map.on('click', function (clickLeftButton) {
  
  const displacementPointValues = new DisplacementPointValues(clickLeftButton);
  console.log("  vel  " + displacementPointValues.getAutoCorr())
  const chart = new Chart(displacementPointValues.getValuesDataPointDisplacenet(),
                          displacementPointValues.getHorizontalValuesGraph(),
                          displacementPointValues.getCode(),
                          displacementPointValues.getVel(),
                          displacementPointValues.getAutoCorr(),
                          displacementPointValues.getStDev(),
                          "#chart__Div"
    );
    chart.startChart();
    console.log("  getCode function chart  " + chart.getIdChart());
}); */
$( function() {
  $( "#chart__Div" ).draggable();
} );  



//Actions Perspective_3d_2D //////////////////////////////////////////
const perspective_3d_2D = new Perspective_3d_2D("section__Widgets--view_2d_3d--2d", "section__Widgets--view_2d_3d--3d", map.getPitch())
perspective_3d_2D.disableEnableIdButton_2d()
perspective_3d_2D.disableEnableIdButton_3d()

const idButton_2D_3D = map.on('mouseup', function (event) {
  perspective_3d_2D.setValuePitch(map.getPitch())  
  let _valuePitch = perspective_3d_2D.getValuePitch()
  let checValuePitch = perspective_3d_2D.checkValuePitch(_valuePitch)
  perspective_3d_2D.showIdButton_2D_3D(checValuePitch)
})
//Actions Perspective_3d_2D //////////////////////////////////////////


//Actions OpenCloseMenu //////////////////////////////////////////
const openCloseMenu = new OpenCloseMenu("section__Tools--MenuOpen", "section__Tools--MenuClose", "section__Tools__Container")
openCloseMenu.disableEnableIdButtonOpen()
openCloseMenu.disableEnableIdButtonClose() 
//Actions OpenCloseMenu //////////////////////////////////////////


const menuProjects1 = new ShowHideList("section__Tools__Projects", "projects")
menuProjects1.pressButtonShowHideList()

//Actions ShowHideList menu projects //////////////////////////////////////////
