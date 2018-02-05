// the trace 

trace = {
    x: speedOfLight,
    type: 'histogram'
};

data = [trace];

layout = {
    title: 'The Speed of Light Tests',
    bargap: 0.05,
}

Plotly.newPlot('plot', data, layout)