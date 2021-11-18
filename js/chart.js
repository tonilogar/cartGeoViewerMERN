let code="";  
let vel="";
let coherence="";
let valuesDataPointDisplacenet=[];
var graphicValuesV=[];
var verticalValuesGraph=[];
var pepe=[]; 
// Show metadata points //////////  
map.on('click', function (e) {
    //Array to catch metadata points salect
    pepe = propertiesPointsCatch;
    let propertiesPointsCatch = [];
    propertiesPointsCatch = map.queryRenderedFeatures(e.point);
    pepe = propertiesPointsCatch;
    if (propertiesPointsCatch.length === 0) //If mouse don touch any point
    {
        console.log("There isn't point");
        return false;
    }
    else{
        console.log("There's point");
    }

    //only work with first element [0]
    code = propertiesPointsCatch[0].properties.CODE;
    vel = propertiesPointsCatch[0].properties.VEL;
    coherence = propertiesPointsCatch[0].properties.AUTOCORR; 
    console.log("There's point");
    //Create array with keys first object
    let timeDisplacementKeys = Object.keys(propertiesPointsCatch[0].properties);
     
    //Create array with values first object
    let timeDisplacementValues = Object.values(propertiesPointsCatch[0].properties);
    
    //Delete the first 7 element
    timeDisplacementKeys.splice(0,6);
    timeDisplacementValues.splice(0,6);
    
    //Convert arry of strings to numbers
    graphicValuesV=timeDisplacementValues.map((i) => Number(i));
    //change string data to number data
    for (var i = 0; i < graphicValuesV.length; i++) {
        verticalValuesGraph.push(parseInt(graphicValuesV[i]));
    }
    //Format data
    for (var i = 0; i <  timeDisplacementKeys.length; i++) {
        var year = timeDisplacementKeys[i].substr(1,[4]);
        var month = timeDisplacementKeys[i].substr(5,[2]);
        var day = timeDisplacementKeys[i].substr(7,[2]);
        //Create array with horizontal values
        valuesDataPointDisplacenet.push([new Date(year, month, day), timeDisplacementValues[i]]);
    }
    //change float data to integer data
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    verticalValuesGraph = verticalValuesGraph.filter( onlyUnique ); 
    console.log(verticalValuesGraph + "verticalValuesGraph")
    //change float data to integer data
    // Call googleCghart ////////
        document.getElementById('chart__Div').style.display="block";      
        google.charts.setOnLoadCallback(drawChart);
});

// Show metadata points ////////// 
// Close graphic window ////////// 
function closeX(){
    document.getElementById('chart__Div').style.display="none";
    }
    // Close graphic window ////////// 
    
    function dragWindow() {
        document.getElementById('chart__Div').style.draggable;
      }
    
    // Add google chart  //////////
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {       
        // Create the data table.
        let data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'Dis');   
        data.addRows(valuesDataPointDisplacenet);

        const espacio ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        const espacioData ="\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
    
        /*  verticalValuesGraph = [-20, -15, -10, -5, 0, 5, 10, 15, 20]; */
        // Set chart options
        let options = {'title': "id: " + code +espacio+ "vel: " + vel +espacio+   "coherence: " + coherence ,
        /* 'width':1500,
        'height':600,   */  
        lineWidth: 1,
        pointSize: 4,
        pointShape: 'square',
        legend: 'none',
        vAxis: {
            title: 'Displacement [mm]',
                 ticks:verticalValuesGraph /* verticalValuesGraph */
               },
        hAxis: {
            title: 'from 2016 to 2019',			   
            titleFontSize: 15 
        }  
        };
    
        // Instantiate and draw our chart, passing in some options.
        let chart = new google.visualization.LineChart(document.getElementById('chart__Div__View'));
        chart.draw(data, options);
        //Create array empty
        valuesDataPointDisplacenet=[];
        verticalValuesGraph=[];
        graphicValuesV=[];
    }
    // Add google chart  //////////
    
    $( function() {
        $( "#chart__Div" ).draggable();
      } );
      
       

/* 
      valores grafica SVGPathSegLinetoVerticalAbs
      //Convert arry of strings to numbers
    graphicValuesV=disValues.map((i) => Number(i));
    
    //change string data to number data
   for (var i = 0; i < graphicValuesV.length; i++) {
       verticalValuesGraph.push(parseInt(graphicValuesV[i]));
   } */