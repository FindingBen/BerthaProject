import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IHealth {

    bloodPressure: string;
    heartBeat: string;
    age: number;
    weight:string;
    gender:string ;
    userId:number;

}


let addHealthButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("createHealthData");
addHealthButton.addEventListener("click",addHealth);
function addHealth():void{
    let addBloodPressure:HTMLInputElement=<HTMLInputElement>document.getElementById("inputBloodPressure");
    let addHeartBeat:HTMLInputElement=<HTMLInputElement>document.getElementById("inputHeartBeat");
    let addAge:HTMLInputElement=<HTMLInputElement>document.getElementById("inputAge");
    let addWeight:HTMLInputElement=<HTMLInputElement>document.getElementById("inputWeight");
    let addGender:HTMLInputElement=<HTMLInputElement>document.getElementById("inputGender");
    let addUserId:HTMLInputElement=<HTMLInputElement>document.getElementById("inputUserId");



    let MyBloodPressure:string=addBloodPressure.value;
    let MyHeartBeat:string=addHeartBeat.value;
    let MyAge:number=Number(addAge.value);
    let MyWeight:string=addWeight.value;
    let MyGender:string=addGender.value;
    let MyUserId:number=Number(addUserId.value);


    let URI:string="https://birthawebservice20181031094923.azurewebsites.net/api/Health";

  
    axios.post<IHealth>(URI,{bloodPressure:MyBloodPressure,heartBeat:MyHeartBeat,age:MyAge, weight:MyWeight,gender:MyGender, userId:MyUserId})
    .then(function(response:AxiosResponse):void{
        console.log(response.status+" "+response.statusText);

    })
    .catch((error:AxiosError)=>{
        console.log(error)
       
    });
}