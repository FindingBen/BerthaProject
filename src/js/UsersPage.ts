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
Date:Date;

}

let LoggedInUserID:any;



var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);

let healthButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getYourHealth");
healthButton.addEventListener("click",getHealth);

let healthElement:HTMLOListElement=<HTMLOListElement>document.getElementById("HealthData");
//let myFrame:HTMLFrameElement=<HTMLFrameElement>document.getElementById("framOF");

let myHealthData:any = [];
function getHealth():void{
let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/Health/UsersDataWithSpecificId/"+LoggedInUserID;
axios.get<IHelath[]>(uri)
.then(function (response: AxiosResponse<IHelath[]>): void {
    console.log(response);
    let result: string = "";
    response.data.forEach((health:IHelath)=>{
        result+="<p>" + "  Blood pressure:  " +health.bloodPressure+
        "<br> Age: " + health.age+ "<br> Heart Beat: " + health.heartBeat +
         "<br> UserID: " + health.userId +  "<br> Weight: " + health.weight + 
         "<br> Date of uploading: " + health.Date +  "</p>";
    })
    healthElement.innerHTML=result;
    console.log(result);
})
.catch((error:AxiosError)=>{
    console.log(error);

})


}
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