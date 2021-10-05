
class Chart {
  #valuesDataPointDisplacenet
  #horizontalValuesGraph
  #code
  #vel
  #autoCorr
  #stDev
  #idChart
  constructor(valuesDataPointDisplacenet, horizontalValuesGraph, code, vel, autoCorr, stDev, idChart ) {
      this.#valuesDataPointDisplacenet = valuesDataPointDisplacenet
      this.#horizontalValuesGraph = horizontalValuesGraph
      this.#code = code
      this.#vel = vel
      this.#autoCorr = autoCorr
      this.#stDev = stDev
      this.#idChart = idChart
  }

  functionPepe() {
    console.log("functionPepe")
  }
  //getters setters
  getValuesDataPointDisplacenet() {
    return  this.#valuesDataPointDisplacenet
  }

  setValuesDataPointDisplacenet(valuesDataPointDisplacenet) {
    this.#valuesDataPointDisplacenet = valuesDataPointDisplacenet
  }

  getHorizontalValuesGraph() {
    return  this.#horizontalValuesGraph
  }
  setHorizontalValuesGraph(horizontalValuesGraph) {
    this.#horizontalValuesGraph = horizontalValuesGraph
  }

  getCode() {
    return  this.#code
  }
  setCode(code) {
    this.#code = code
  }

  getVel() {
    return  this.#vel
  }
  setVel(vel) {
    this.#vel = vel
  }

  getAutoCorr() {
    return  this.#autoCorr
  }
  setAutoCorr(autoCorr) {
    this.#autoCorr = autoCorr
  }

  getStDev() {
    return  this.#stDev
  }
  setStDev(stDev) {
    this.#stDev = stDev
  }

  getIdChart() {
    return  this.#idChart
  }
  setIdChart(idChart) {
    this.#idChart = idChart
  }
  //getters setters

  closeChart(idChart){
    document.getElementById(idChart).style.display="none";
    }
  dragChart(idChart) {
    document.getElementById(idChart).style.draggable;
  }

  

  drawChart () {
    // Create the data table.
    
    let data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');
    data.addColumn('number', 'Dis');   
    data.addRows(this.#valuesDataPointDisplacenet);

    const espacio ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";

    this.#horizontalValuesGraph = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
    // Set chart options
    let options = {'title': "id: " + this.#code +espacio+ "vel: " + this.#vel +espacio+   "autoCorr: " + this.#autoCorr +espacio+   "stDev: " + this.#stDev,
    /* 'width':1500,
    'height':600,   */  
    lineWidth: 0, 
    pointSize: 4,
    pointShape: 'square',
    legend: 'none',
    vAxis: {
        title: 'Displacement [mm]',
             ticks: this.#horizontalValuesGraph
           },
    /* hAxis: {
        title: 'from 2016 to 2019',			   
        titleFontSize: 15 
    }   */
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.LineChart(document.getElementById(this.#idChart));
    chart.draw(data, options);
    //Create array empty
    valuesDataPointDisplacenet=[];
  }
  startChart () {
    google.charts.load('current', {'packages':['corechart']});
    document.getElementById(this.#idChart).style.display="block";    
    google.charts.setOnLoadCallback(drawChart);
    }

}


export default Chart

