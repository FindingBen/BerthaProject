import { Chart} from "chart.js";
    
    let myChart1 = document.getElementById('myChart1')
    let myChart2 = document.getElementById('myChart2')
    let myChart3 = document.getElementById('myChart3')
    let myChart4 = document.getElementById('myChart4')

    


   
//array for chart
    let HeartData:any = [];

    let massPopChart1 = new Chart(myChart1, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Nitrogen', 'Oxygen', 'Hyrogen', 'Carbon', 'Phosphorus', 'Sulphur'],
        datasets:[{
          label:'Environment',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'My first Chart',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
  



    let massPopChart2 = new Chart(myChart2, {
        type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Nitrogen', 'Oxygen', 'Hyrogen', 'Carbon', 'Phosphorus', 'Sulphur'],
          datasets:[{
            label:'Environment',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'My first Chart',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });
  
      


      let massPopChart3 = new Chart(myChart3, {
        type:'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Nitrogen', 'Oxygen', 'Hyrogen', 'Carbon', 'Phosphorus', 'Sulphur'],
          datasets:[{
            label:'Environment',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'My first Chart',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });
  
      


      let massPopChart4 = new Chart(myChart4, {
        type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
          labels:['Nitrogen', 'Oxygen', 'Hyrogen', 'Carbon', 'Phosphorus', 'Sulphur'],
          datasets:[{
            label:'Environment',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'My first Chart',
            fontSize:25
          },
          legend:{
            display:true,
            position:'right',
            labels:{
              fontColor:'#000'
            }
          },
          layout:{
            padding:{
              left:50,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });