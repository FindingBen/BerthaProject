import axios,{
    AxiosError,
    AxiosResponse
} 
from "../../node_modules/axios/index";


interface IUsers{

    id:number;
    name:string;
    email:string;
    password:string;
    location:string;

}

let LoggedInUserID:any;

let showName:HTMLSpanElement=<HTMLSpanElement>document.getElementById("spanName");

var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);

 window.onload=()=>{
    getUsersName();
}


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
