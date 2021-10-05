class DisplacementPointValues {
  #verticalValuesGraph
  #horizontalValuesGraph
  #valuesDataPointDisplacenet
  #code 
  #vel
  #autoCorr
  #stDev
  constructor(clickMouse) {
    //Array to catch metadata points salect
    this.verticalValuesGraph = [];
    //Redefine this variable
    this.horizontalValuesGraph = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
    //Redefine this variable
    this.valuesDataPointDisplacenet = [];
    let propertiesPointsCatch = [];
    propertiesPointsCatch = map.queryRenderedFeatures(clickMouse.point);

    if (propertiesPointsCatch.length === 0) //If mouse don touch any point
      {
        console.log("There isn't point");
        return false;
      }
      /* else{
        console.log("There's point");
      } */

    //only work with first element [0]
    this.code = propertiesPointsCatch[0].properties.CODE;
    this.vel = propertiesPointsCatch[0].properties.VEL;
    this.autoCorr = propertiesPointsCatch[0].properties.AUTOCORR; 
    this.stDev = propertiesPointsCatch[0].properties.TS_STDEV; 
    /* console.log("  vel  " + this.vel + "  code  " + this.code + "  autoCorr  " + this.autoCorr + "  stDev  " + this.stDev) */
    
    //Create array with keys first object
    let timeDisplacementKeys = Object.keys(propertiesPointsCatch[0].properties);
      
    //Create array with values first object
    let timeDisplacementValues = Object.values(propertiesPointsCatch[0].properties);
    
    //Delete the first 7 element
    timeDisplacementKeys.splice(0,6);
    timeDisplacementValues.splice(0,6);
    
    //Convert arry of strings to numbers
    const graphicValuesV=timeDisplacementValues.map((i) => Number(i)); 
      
    //change string data to number data
    for (var i = 0; i < graphicValuesV.length; i++) {
      this.verticalValuesGraph.push(parseInt(graphicValuesV[i]));
      /* console.log(this.verticalValuesGraph + "int"); */
    }

    for (var i = 0; i <  timeDisplacementKeys.length; i++) {
      var year = timeDisplacementKeys[i].substr(1,[4]);
      var month = timeDisplacementKeys[i].substr(5,[2]);
      var day = timeDisplacementKeys[i].substr(7,[2]);
      //Create array with horizontal values
      this.valuesDataPointDisplacenet.push([new Date(year, month, day), timeDisplacementValues[i]]);
    }

    //Delete repeating values
    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }

    this.verticalValuesGraph = this.verticalValuesGraph.filter( onlyUnique );
    console.log(this.verticalValuesGraph + " elelements array");
    //Order from smallest to lasgest
    this.verticalValuesGraph.sort((a,b)=>a-b); 
    console.log(this.verticalValuesGraph + " order array ")
    
    let firstElementArray = this.verticalValuesGraph[0];
    console.log(firstElementArray + " first element");

    const positionEndElement = this.verticalValuesGraph.length - 1;
    /* console.log(positionEndElement + " positionEndElement"); */

    let endElementArray = this.verticalValuesGraph[positionEndElement];
    console.log(endElementArray + " end element");
    

    //Default array
    if (firstElementArray >= -20 && endElementArray <= 20){
      this.verticalValuesGraph = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
      /* console.log(this.verticalValuesGraph + " igual o mayor a -20 igual o menor a 20"); */
    }
    
    /* this.verticalValuesGraph.push(parseInt(graphicValuesV[i])); */
    if (firstElementArray <= -20){
      this.verticalValuesGraph.splice(0, this.verticalValuesGraph.length);
      /* console.log(this.verticalValuesGraph + " array borrado"); */
      let part = firstElementArray/4;
      /* console.log(part + " part" ); */
      part = Math.trunc(part);
      //console.log(part + " part" );
      this.verticalValuesGraph[0] = firstElementArray;
      this.verticalValuesGraph[1] = firstElementArray - part;
      this.verticalValuesGraph[2] = firstElementArray - 2 * part;
      this.verticalValuesGraph[3] = firstElementArray - 3 * part; 
      this.verticalValuesGraph[4] = 0;
      /* console.log(this.verticalValuesGraph[0] + " firstElementArray" + this.verticalValuesGraph[3]);
      console.log(this.verticalValuesGraph + " pepe"); */
    }
    
    else {
      this.verticalValuesGraph[0] = -20;
      this.verticalValuesGraph[1] = -15;
      this.verticalValuesGraph[2] = -10;
      this.verticalValuesGraph[3] = -5; 
      this.verticalValuesGraph[4] = 0;
      /* console.log(firstElementArray + " mayor a -20"); */
    }
    if (endElementArray >= 20) {
      this.verticalValuesGraph.splice(0, this.verticalValuesGraph.length);
      let part1 = endElementArray/4;
      //console.log(part1 + " part1" );
      part1 = Math.trunc(part1);
      //console.log(part1 + " part1" );
      this.verticalValuesGraph[5] = endElementArray;
      this.verticalValuesGraph[6] = endElementArray + part1;
      this.verticalValuesGraph[7] = endElementArray + 2 * part1;
      this.verticalValuesGraph[8] = endElementArray + 3 * part1; 
      /* console.log(this.verticalValuesGraph + " pepe");
      console.log(endElementArray + " igual o mayor a 20"); */
    }
    else {
      this.verticalValuesGraph[4] = 0;
      this.verticalValuesGraph[5] = 5;
      this.verticalValuesGraph[6] = 10;
      this.verticalValuesGraph[7] = 15;
      this.verticalValuesGraph[8] = 20; 
      //console.log(endElementArray + " menorr a 20");
    }
    console.log(this.verticalValuesGraph + " elelements finish array");
  } 

  //Getters
  getCode() {
    return this.code
  }
  getVel() {
    return this.vel
  } 
  getAutoCorr() {
    return this.autoCorr
  } 
  getStDev() {
    return this.stDev
  } 
  getVerticalValuesGraph() {
    return this.verticalValuesGraph
  } 
  getHorizontalValuesGraph() {
    return this.horizontalValuesGraph
  } 
  getValuesDataPointDisplacenet() {
    return this.valuesDataPointDisplacenet
  } 

  //Setters
  setCode(code) {
    this.code = code
  }
  setVel(vel) {
    this.vel = vel
  } 
  setAutoCorr(autoCorr) {
    this.autoCorr = autoCorr
  } 
  setStDev(stDev) {
    this.stDev = stDev
  } 
  setVerticalValuesGraph(verticalValuesGraph) {
    this.verticalValuesGraph = verticalValuesGraph
  } 
  setHorizontalValuesGraph(horizontalValuesGraph) {
    this.horizontalValuesGraph = horizontalValuesGraph
  } 
  setValuesDataPointDisplacenet(valuesDataPointDisplacenet) {
    this.valuesDataPointDisplacenet = valuesDataPointDisplacenet
  } 

}

export default DisplacementPointValues