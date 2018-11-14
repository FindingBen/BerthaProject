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
    gender: string;
    userId: number;
}
interface IEnvironment{
id:number;
oxygen:number;
nitrogen:number;
carbonDioxide:number;
methane:number;
userId:number;
}

let healthList:HTMLOListElement  = <HTMLOListElement>document.getElementById("HealthList");
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

                result += "<p>" + "User Id:" + health.userId + "<br>Blood pressure: " + health.bloodPressure + "<br>Gender:" + health.gender + "<br>Heart Beat: " + health.heartBeat + "<br>Weight: " + health.weight + "</p>";

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
     axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data);
            let result: string = "";
            result+="<p>" + "  Blood pressure:  " +response.data.bloodPressure+ "<br> Gender: " + response.data.gender+ "<br> Heart Beat: " + response.data.heartBeat + "<br> Weight: " + response.data.weight +  "</p>";
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

            console.log(response.data);
            let result: string = "";

            response.data.forEach((enviro: IEnvironment) => {

                result += "<p>" + "User Id:" + enviro.userId + "<br>Oxygen: " + enviro.oxygen + "<br>Nitrogen:" + enviro.nitrogen + "<br>Methane: " + enviro.methane + "<br>CarbonDioxide: " + enviro.carbonDioxide + "</p>";

            });
    
            EnviroList.innerHTML = result;
            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        })
}
