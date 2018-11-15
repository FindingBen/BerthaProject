//implement Post for users reg
import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IUsers {

    name: string;
    email: string;
    password: number;
    location:string;
    isAdmin:boolean ;

}


let addUserButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("createAccount");
addUserButton.addEventListener("click",addUser);
function addUser():void{
    let addEmail:HTMLInputElement=<HTMLInputElement>document.getElementById("inputEmail");
    let addName:HTMLInputElement=<HTMLInputElement>document.getElementById("inputName");
    let addPass:HTMLInputElement=<HTMLInputElement>document.getElementById("inputPassword");
    let addAdmin:HTMLInputElement=<HTMLInputElement>document.getElementById("inputCheck");
    let addLocation:HTMLInputElement=<HTMLInputElement>document.getElementById("inputLocation");



    let MyEmail:string=addEmail.value;
    let MyName:string=addName.value;
    let MyPass:number=Number(addPass.value);
    let MyAdmin:boolean=Boolean(addAdmin.checked);
    let MyLocation:string=addLocation.value;


    let URI:string="https://birthawebservice20181031094923.azurewebsites.net/api/user";

  
    axios.post<IUsers>(URI,{name:MyName,email:MyEmail,password:MyPass, isAdmin:MyAdmin,location:MyLocation})
    .then(function(response:AxiosResponse):void{
        console.log(response.status+" "+response.statusText);

    })
    .catch((error:AxiosError)=>{
        console.log(error)
       
    });
}