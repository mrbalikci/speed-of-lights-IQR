
// Make a function to filter the outliers and determine interquartile range 

function filterOutliers(someArray){

    // copy values 
    var values = someArray.concat();

    // sort it 
    values.sort(function(x,y){
        return x-y;
    });

    // Find the quertiles and interquartile range (IQR)
    var q1 = values[Math.floor((values.length / 4))];
    var q3 = values[Math.floor((values.length * (3/4)))];

    // IQR 
    var iqr = q3 - q1;

    var maxValue = q3 + iqr * 1.5;
    var minValue = q1 - iqr * 1.5;

    var filteredValues = values.filter(function(x){
        return (x < maxValue) && (x > minValue);
    });

    return filteredValues;
};


// Filter the outliers 

var filteredData = filterOutliers(speedOfLight);

// Calculate the Min and Max values to set the bin boundaries
var min = Math.min.apply(null, filteredData);
var max = Math.max.apply(null, filteredData);

console.log(min, max);

// Set up PlotLy parameters to Plot the filtered data 

var trace = {
    x: filteredData,
    type: "histogram",
    xbins: {
      start: min,
      end: max,
      size: 4
    }
  };
  
  var data = [trace];
  
  // adjust the bar gap for readability
  var layout = {
    bargap: 0.05
  };
  
  Plotly.newPlot("plot2", data, layout);
  