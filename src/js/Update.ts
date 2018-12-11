//implement Post for users reg
import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IUsers {
    id:number;
    name: string;
    email: string;
    password: number;
    location:string;
    gender:string;
}

let LoggedInUserID:any;



var getStoredUserID = localStorage.getItem("key");
 LoggedInUserID = parseInt(getStoredUserID);




let addUserButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("createAccount");
addUserButton.addEventListener("click",addUser);

function addUser():void{
    let addEmail:HTMLInputElement=<HTMLInputElement>document.getElementById("inputEmail");
    let addName:HTMLInputElement=<HTMLInputElement>document.getElementById("inputName");
    let addPass:HTMLInputElement=<HTMLInputElement>document.getElementById("inputPassword");
    let addLocation:HTMLInputElement=<HTMLInputElement>document.getElementById("inputLocation");
    let addGender:HTMLInputElement=<HTMLInputElement>document.getElementById("inputGender");



    let MyEmail:string=addEmail.value;
    let MyName:string=addName.value;
    let MyPass:number=Number(addPass.value);
    let MyLocation:string=addLocation.value;
    let MyGender:string=addGender.value;
    let MyId:number=Number(LoggedInUserID);


    let URI:string="https://birthawebservice20181031094923.azurewebsites.net/api/user/"+LoggedInUserID;

  
    axios.put<IUsers>(URI,{id:MyId,name:MyName,email:MyEmail,password:MyPass,location:MyLocation,gender:MyGender})
    .then(function(response:AxiosResponse):void{
        console.log(response.status+" "+response.statusText);

    })
    .catch((error:AxiosError)=>{
        console.log(error)
       
    });
}