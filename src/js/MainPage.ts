import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface Ihealth {

    id: number;
    bloodPressure: number;
    heartBeat: number;
    age: number;
    weight: number;
    dateTime: Date;
    userId: number;
}
interface IEnvironment{
id:number;
userId:number;
humidity:number;
temperatur:number;
dateTime: Date;
location: string;

}

let healthList:HTMLUListElement  = <HTMLUListElement>document.getElementById("HealthList");
//getData
let GetById: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
GetById.addEventListener("click", getAll);

function getAll(): void {
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/health";
    axios.get<Ihealth[]>(uri)
        .then(function (response: AxiosResponse<Ihealth[]>): void {

            console.log(response.data);
            let result: string = "";

            response.data.forEach((health: Ihealth) => {

                result += "<li class=\"list-inline-item listItem\" >" + "<span class=\"category\">UserID:&nbsp;</span>" + health.userId + "<br/><span class=\"category\">Blood Pressure:&nbsp;</span>" + health.bloodPressure + "<br/><span class=\"category\">Age:&nbsp;</span>" + health.age + "<br/><span class=\"category\">Heart Beat:&nbsp;</span>" + health.heartBeat + "<br/><span class=\"category\">Weight:&nbsp;</span>" + health.weight + "</li>";

            });

            healthList.innerHTML = result;
            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        })
}

let healthById:HTMLOListElement=<HTMLOListElement>document.getElementById("ShowHealthById");
let getByIdButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getDataById");
getByIdButton.addEventListener("click",getById);

function getById():void{
    let IdInputElement:HTMLInputElement=<HTMLInputElement>document.getElementById("idInput");
    let idElement:string=IdInputElement.value;
    
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/health/" + idElement;
     axios.get<Ihealth[]>(uri)
        .then(function (response: AxiosResponse<Ihealth[]>): void {
            console.log(response);
            let result: string = "";
            response.data.forEach((health: Ihealth) => {

                result += "<li class=\"list-inline-item listItem\" id=\"dataID\"" + "<span class=\"category\">Blood Pressure:&nbsp;</span>" + health.bloodPressure + "<br/><span class=\"category\">Age:&nbsp;</span>" + health.age + "<br/><span class=\"category\">Heart Beat:&nbsp;</span>" + health.heartBeat + "<br/><span class=\"category\">Weight:&nbsp;</span>" + health.weight + "<br/><span class=\"category\">Date and time:&nbsp;</span>"+ health.dateTime + "</li>";

            });
            healthById.innerHTML=result;
            console.log(result);
        })
        .catch((error:AxiosError)=>{
            console.log(error);
        
        })


}


let EnviroList:HTMLOListElement  = <HTMLOListElement>document.getElementById("EnviroList");
//getData
let GetEnviro: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getEnviroData");
GetEnviro.addEventListener("click", getAllEnviro);

function getAllEnviro(): void {
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/environment";
    axios.get<IEnvironment[]>(uri)
        .then(function (response: AxiosResponse<IEnvironment[]>): void {

            console.log(response);
            let result: string = "";

            response.data.forEach((enviro: IEnvironment) => {

                result += "<li class=\"list-inline-item listItem e\" id=\"enviro\"" + "<span class=\"category\">User ID:&nbsp;</span>" + enviro.userId + "<br/><span class=\"category\">Humidity:&nbsp;</span>" + enviro.humidity + "<br/><span class=\"category\">Temperature:&nbsp;</span>" + enviro.temperatur + "<br/><span class=\"category\">Date and time:&nbsp;</span>" + enviro.dateTime + "<br/><span class=\"category\">Location:&nbsp;</span>" + enviro.location + "</p>";

            });
    
            EnviroList.innerHTML = result;
            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        })
}