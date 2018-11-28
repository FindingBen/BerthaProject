import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IEnvironment {

    oxygen: number;
    nitrogen: number;
    carbonDioxide: number;
    methane:number;
    humidity:number ;
    temperature:number;
    userID:number;

}


let addHealthButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("createEnviroData");
addHealthButton.addEventListener("click",addEnviro);
function addEnviro():void{
    let addOxygen:HTMLInputElement=<HTMLInputElement>document.getElementById("inputOxygen");
    let addNitrogen:HTMLInputElement=<HTMLInputElement>document.getElementById("inputNitrogen");
    let addCarbonDioxide:HTMLInputElement=<HTMLInputElement>document.getElementById("inputCarbonDioxide");
    let addMethanet:HTMLInputElement=<HTMLInputElement>document.getElementById("inputMethane");
    let addHumidity:HTMLInputElement=<HTMLInputElement>document.getElementById("inputHumidity");
    let addTemperature:HTMLInputElement=<HTMLInputElement>document.getElementById("inputTemperatur");
    let addUserID:HTMLInputElement=<HTMLInputElement>document.getElementById("inputUserId");



    let MyOxygen:number=Number(addOxygen.value);
    let MyNitrogen:number=Number(addNitrogen.value);
    let MyCarbonDioxide:number=Number(addCarbonDioxide.value);
    let MyMethan:number=Number(addMethanet.value);
    let MyHumidity:number=Number(addHumidity.value);
    let MyTemperature:number=Number(addTemperature.value);
    let MyUserId:number=Number(addUserID.value);


    let URI:string="https://birthawebservice20181031094923.azurewebsites.net/api/Environment";

  
    axios.post<IEnvironment>(URI,{oxygen:MyOxygen,nitrogen:MyNitrogen,carbonDioxide:MyCarbonDioxide, methane:MyMethan,humidity:MyHumidity,temperature:MyTemperature, userId:MyUserId})
    .then(function(response:AxiosResponse):void{
        console.log(response.status+" "+response.statusText);

    })
    .catch((error:AxiosError)=>{
        console.log(error)
       
    });
}