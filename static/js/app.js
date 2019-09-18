
var Manhattan = d3.select(".Manhattan");
var Bronx = d3.select(".Bronx");
var Queens = d3.select(".Queens");
var Brooklyn = d3.select(".Brooklyn");
var SI = d3.select(".SI");







 d3.csv("../data/Manhattan_911.csv", function(error, Mdata) {
  if (error) throw error;

  console.log(Mdata)

     var parseTime = d3.timeParse("%b-%Y");

     // Format the data
     Mdata.forEach(function (data) {
         data.IncidentsNo = +data.IncidentsNo;
         data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
     });

     var Month =  Mdata.map(data => data.Month);
     console.log("Month", Month);
     var IncidentsNo =  Mdata.map(data => data.IncidentsNo);
     console.log("IncentsNo", IncidentsNo);
     var AvgResponseTimesMinutes =  Mdata.map(data => data.AvgResponseTimesMinutes);
     console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
     
     var trace1 = {
      x: Month,
      y: IncidentsNo,
      name: 'No. of Incidents',
      type: 'bar',
      opacity: .5,
      
    };
    
    var trace2 = {
      x: Month,
      y: AvgResponseTimesMinutes,
      name: 'Avg. Response Times In Minutes',
      yaxis: 'y2',
      mode: 'lines+markers',
      line: {
          color: 'rgb(55, 128, 191)',
          width: 3,
          shape: 'spline',
        }
    };
    
    var data = [trace1, trace2];

    var layout = {
      title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
      yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
      yaxis2: {
        title: 'Avg. Response Time (Minutes)',
        titlefont: {color: 'rgb(148, 103, 189)'},
        tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right',
      
      } , 
      legend: {x:0, y:5, "orientation": "h"}     
    };

    Plotly.newPlot('plot', data, layout);
});



























Manhattan.on("click", function() {
    // Select the current count
   console.log("Manhattan");


   d3.csv("../data/Manhattan_911.csv", function(error, Mdata) {
    if (error) throw error;

    console.log(Mdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       Mdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  Mdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  Mdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  Mdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'No. of Incidents',
        type: 'bar',
        opacity: .5,
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Avg. Response Times In Minutes',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color: 'rgb(55, 128, 191)',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      Plotly.newPlot('plot', data, layout);
  });
  
  
 
  });






  Queens.on("click", function() {
    // Select the current count
   console.log("Queens");


   d3.csv("../data/Queens_911.csv", function(error, Qdata) {
    if (error) throw error;

    console.log(Qdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       Qdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  Qdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  Qdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  Qdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'No. of Incidents',
        type: 'bar',
        opacity: .5,
        marker:{
            color: 'rgb(0,133,66)',
          },
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Avg. Response Times In Minutes',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color: 'rgb(0,133,66)',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7, 10],
        } , 
        legend: {x:0, y:5, "orientation": "h"}  
                    };

      //Plotly.animate('plot', data, layout);

      Plotly.animate('plot', {
       data: data,
        //traces: [0],
        layout: layout
      }, {
        transition: {
          duration: 10000000,
          easing: 'cubic-in-out'
        },
        frame: {
          duration: 500
        }
      })



  });
 
  });





  Bronx.on("click", function() {
    // Select the current count
   console.log("Bronx");


   d3.csv("../data/Bronx_911.csv", function(error, BXdata) {
    if (error) throw error;

    console.log(BXdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       BXdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  BXdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  BXdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  BXdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'No. of Incidents',
        type: 'bar',
        opacity: .5,
        marker:{
            color: 'rgb(57,179,215)',
          },
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Avg. Response Times In Minutes',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color: 'rgb(57,179,215)',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      Plotly.newPlot('plot', data, layout);
  });
 
  });



  Brooklyn.on("click", function() {
    // Select the current count
   console.log("Brooklyn");


   d3.csv("../data/Brooklyn_911.csv", function(error, BKdata) {
    if (error) throw error;

    console.log(BKdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       BKdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  BKdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  BKdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  BKdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'No. of Incidents',
        type: 'bar',
        opacity: .5,
        marker:{
            color: 'rgb(237,156,40)',
          },
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Avg. Response Times In Minutes',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color: 'rgb(237,156,40)',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      Plotly.newPlot('plot', data, layout);
  });
 
  });
  

SI.on("click", function() {
    // Select the current count
   console.log("SI");


   d3.csv("../data/SI_911.csv", function(error, SIdata) {
    if (error) throw error;

    console.log(SIdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       SIdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  SIdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  SIdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  SIdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'No. of Incidents',
        type: 'bar',
        opacity: .5,
        marker:{
            color: 'rgb(210,50,45))',
          },
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Avg. Response Times In Minutes',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color: 'rgb(210,50,45))',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies'},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      Plotly.newPlot('plot', data, layout);
  });
 
  });
  
  