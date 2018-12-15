import {Chart} from "../../node_modules/chart.js/dist/Chart";

import axios,{
    AxiosError,
    AxiosResponse
} 
from "../../node_modules/axios/index";

import * as $ from "../../node_modules/jquery/dist/jquery";

interface IHelath{
bloodPressure:number;
age:number;
heartBeat:number;
userId:number;
weight:number;
dateTime:Date;

}

interface IUsers{

    id:number;
    name:string;
    email:string;
    password:string;
    location:string;

}

let LoggedInUserID:any;



var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);

// let healthButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getYourHealth");
// healthButton.addEventListener("click",getHealth);
//  let userButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getYourUser");
//  userButton.addEventListener("click",getUserData);

let healthElement:HTMLUListElement=<HTMLUListElement>document.getElementById("healthList");
let healthUser:HTMLUListElement=<HTMLUListElement>document.getElementById("userList");
let showName:HTMLSpanElement=<HTMLSpanElement>document.getElementById("spanName");
let heartBtn:HTMLButtonElement=<HTMLButtonElement>document.getElementById("heart");
let bpressureBtn:HTMLButtonElement=<HTMLButtonElement>document.getElementById("blood");
let weightBtn:HTMLButtonElement=<HTMLButtonElement>document.getElementById("weight");
// let adminPanel:HTMLButtonElement=<HTMLButtonElement>document.getElementById("accessPanel");
// adminPanel.addEventListener("click",authorizeUser);

window.onload=()=>{
    getUserData();
    getHealth();
    getUsersName();
    // authorizeUser();
}

function getHealth():void{
let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/"+LoggedInUserID;
axios.get<IHelath[]>(uri)
.then(function (response: AxiosResponse<IHelath[]>): void {
    console.log(response);
    let result: string = "";
    response.data.forEach((health:IHelath)=>{
         result+="<ul>" +
        //   "  Blood pressure:  " +health.bloodPressure+
        //  "<br> Age: " + health.age+
        //  "<br> Heart Beat: " + health.heartBeat +
        //  "<br> UserID: " + health.userId + 
        //  "<br> Weight: " + health.weight + 
        // "<br> Date: " + health.dateTime +  
        "</ul>";
    })
    healthElement.innerHTML=result;
    console.log(result);
})
.catch((error:AxiosError)=>{
    console.log(error);

})

}
let UserID:number;
// function authorizeUser():void{

// let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/user/"+LoggedInUserID;
// axios.get(uri)
// .then(function(response:AxiosResponse):void{
//     console.log(response.data);
//     if(response.data !==null){
//         // UserID =  response.data.id;
//         //     localStorage.setItem("key", UserID.toString());
//             if(response.data.isAdmin==true){
//                window.location.href='MainPage.htm';
//             }
//             else{
//                 alert("You need special permission to access this panel!");
//             }
//     }

// })
// }

function getUsersName():void{
let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/user/specific/"+LoggedInUserID;
axios.get<IUsers[]>(uri)
.then(function (response: AxiosResponse<IUsers[]>): void {
    console.log(response);
    let result: string = "";
    response.data.forEach((health:IUsers)=>{
        result+="<p>"+health.name+"</p>";
    })
    showName.innerHTML=result;
    console.log(result);
})
.catch((error:AxiosError)=>{
    console.log(error);

})

}


function getUserData():void{
    let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/user/specific/"+LoggedInUserID;
axios.get<IUsers[]>(uri)
.then(function (response: AxiosResponse<IUsers[]>): void {
    console.log(response);
    let result: string = "";
    response.data.forEach((health:IUsers)=>{
        result+="<ul>" + "Username: " +health.name+
        "<br> Email: " + health.email+ 
         "<br> Location: " + health.location +  "</ul>";
    })
    healthUser.innerHTML=result;
    console.log(result);
})
.catch((error:AxiosError)=>{
    console.log(error);

})

}
var canvas = <HTMLCanvasElement> document.getElementById("myChart1");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Choose your chart ➝", 10, 70);
    
$(document).ready(function(){

let HeartData:any = [];
let BloodPressureData:any = [];
let WeightData:any=[];

 //Button that activates chart for Heart beat data.
    heartBtn.addEventListener("click", function(){
    document.getElementById("myChart1").style.display = "block";

    let uri = "https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/" + LoggedInUserID;
    axios.get(uri)
    .then(function(response) {
      
      response.data.forEach((element:any) => {
        HeartData.push(element.heartBeat);
      });

    var canvasChart = document.getElementById("myChart1");

    new Chart(canvasChart, {
      type: 'line',
      data: {
        labels: [15,22,35,45,55,65,75,85,95,100,200,300,400],
        datasets: [{ 
            data: HeartData,
            label: "HeartBeat",
            borderColor: "#FF0000",
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Your Heart Data'
        }
      }
    });

})
    })

//Button that activates chart for blood pressure data.
    bpressureBtn.addEventListener("click", function(){
        document.getElementById("myChart1").style.display = "block";

        let uri = "https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/" + LoggedInUserID;
        axios.get(uri)
        .then(function(response) {
          
          response.data.forEach((element:any) => {
            BloodPressureData.push(element.bloodPressure);
          });
    
        var canvasChart = document.getElementById("myChart1");
    
        new Chart(canvasChart, {
          type: 'line',
          data: {
            labels: [15,22,35,45,55,65,75,85,95,100,200,300,400],
            datasets: [{ 
                data: BloodPressureData,
                label: "Blood pressure",
                borderColor: "#CCCC00",
                fill: true
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Your Blood pressure'
            }
          }
        });
    
    })





    })

    weightBtn.addEventListener("click", function(){
        document.getElementById("myChart1").style.display = "block";

        let uri = "https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/" + LoggedInUserID;
        axios.get(uri)
        .then(function(response) {
          
          response.data.forEach((element:any) => {
            WeightData.push(element.weight);
          });
    
        var canvasChart = document.getElementById("myChart1");
    
        new Chart(canvasChart, {
          type: 'line',
          data: {
            labels: [15,22,35,45,55,65,75,85,95,100,200,300,400],
            datasets: [{ 
                data: WeightData,
                label: "Weight",
                borderColor: "#006400",
                fill: true
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Your Weight progress'
            }
          }
        });
    
    })





    })


})
