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

let LoggedInUserID:any;
var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);
window.onload=()=>{
    getAll();
    getAllHealth();
}

let healthList:HTMLUListElement  = <HTMLUListElement>document.getElementById("HealthList");
let envirList:HTMLUListElement  = <HTMLUListElement>document.getElementById("EnviroList");

function getAll(): void {
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/environment/"+LoggedInUserID;
    axios.get<IEnvironment[]>(uri)
        .then(function (response: AxiosResponse<IEnvironment[]>): void {

            console.log(response.data);
            let result: string = "";

            response.data.forEach((health: IEnvironment) => {

                result += "<li class=\"list-inline-item listItem\" >" + "<br/><span class=\"category\">Humidity:&nbsp;</span>" + health.humidity + "<br/><span class=\"category\">Temperature:&nbsp;</span>" + health.temperatur + "<br/><span class=\"category\">Date of upload:&nbsp;</span>" + health.dateTime + "</li>";

            });

            envirList.innerHTML = result;
            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        })
}

function getAllHealth(): void {
    let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/health"+LoggedInUserID;
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
