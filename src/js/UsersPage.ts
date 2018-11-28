import axios,{
    AxiosError,
    AxiosResponse
} 
from "../../node_modules/axios/index";

import * as $ from "../../node_modules/jquery/dist/jquery";


interface Ihealth {

    id: number;
    bloodPressure: number;
    heartBeat: number;
    age: number;
    weight: number;
    gender: string;
    userId: number;
}

let LoggedInUserID:any;



var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);

//let healthButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getAllButton");
//healthButton.addEventListener("click",getHealth);

let healthElement:HTMLDivElement=<HTMLDivElement>document.getElementById("UserHealth");
//let myFrame:HTMLFrameElement=<HTMLFrameElement>document.getElementById("framOF");

let myHealthData:any = [];

let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/Health/"+LoggedInUserID;
axios.get(uri)
    .then(function(response) {
      // Works when compiled
      response.data.forEach((element:any) => {
        myHealthData.push(element.heartRate);
      });
      healthElement.innerHTML = response.data.myHealthData;
    })

/*function getHealth():void{
    var regex=/[?&]([^=#]+)=([^&#]*)/g,
    url=window.location.href;
    var params: any={},
    match;
    while(match=regex.exec(url)){
        params[match[1]]=match[2];

        let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/"+params.id;
        myFrame.src=uri;
    }
}*/


// $(document).ready({
    
//})


/* axios.get<Ihealth[]>(uri)
        .then(function (response: AxiosResponse<Ihealth[]>): void {

            console.log(response.data);
            let result: string = "";

            response.data.forEach((health: Ihealth) => {

                result += "<p>" + "User Id:" + health.userId + "<br>Blood pressure: " + health.bloodPressure + "<br>Gender:" + health.gender + "<br>Heart Beat: " + health.heartBeat + "<br>Weight: " + health.weight + "</p>";

            });

            healthElement.innerHTML = result;
            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        })*/