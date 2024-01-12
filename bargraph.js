google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(drawStacked);
  
  function drawStacked() {
    var data = google.visualization.arrayToDataTable([
      ['City', 'Employer', 'Employee', 'Total interest'],
      [20, 20, 20 , 30],
      [25, 28, 28, 40],
      [30, 34, 34, 55],
      [35, 39, 38, 62],
      [40, 46, 46, 70],
      [45, 53, 53, 82],
      [50, 60, 60, 98],
      [55, 65, 65, 118],
      [60, 70, 70, 135],
      [65, 75, 75, 150]
    ]);
  
    var options = {
      chartArea: {
        width: '50%',
        height: '80%'
      },
      isStacked: true,
      hAxis: {
        minValue: '$'+0,
        maxValue: '$'+300
      }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }