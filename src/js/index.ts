import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IUsers{

    id:number;
    name:string;
    email:string;
    password:string;

}

let user: HTMLInputElement = <HTMLInputElement>document.getElementById("Username");
let pas: HTMLInputElement = <HTMLInputElement>document.getElementById("password");


let log:HTMLButtonElement=<HTMLButtonElement>document.getElementById("Logs");
log.addEventListener("click",Login);
let UserID:number;
localStorage.setItem("key", UserID.toString());
function Login():void{

    let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/user/login/"+user.value+"/"+pas.value;
    axios.get(uri)
    .then(function(response:AxiosResponse):void{
        console.log(response.data);
        if(response.data !==null)
        {
            UserID =  response.data.id;
            localStorage.setItem("key", UserID.toString());
            if(response.data.isAdmin==true)
            window.location.href='MainPage.htm';
            // passId('http://localhost:3000/MainPage.htm',response.data.UserID)
            else if(response.data.isAdmin==false)
            window.location.href='Consumer.html';
            // passId('http://localhost:3000/Consumer.html',response.data.UserID)
            else
            alert("Wrong credentials!");
            console.log(UserID);
        }
        if(response.data===null)
        alert("Wrong credentials!");
    })
    
}



// function passId(url:string,id:number):void{
//     window.location.href=url+"?id="+id;
// }






















/*/Here is the list of users we have in database,by this list we are calling users from database
let userList:Array<IUsers>=[];
let log:HTMLButtonElement=<HTMLButtonElement>document.getElementById("Logs");
log.addEventListener("click",Login);

let user: HTMLInputElement = <HTMLInputElement>document.getElementById("Username");
let pas: HTMLInputElement = <HTMLInputElement>document.getElementById("password");
//As it says when you hoover with your mouse over it,when window loads (something) that is the first thing user sees

window.onload=()=>{
    let uri:string="https://birthawebservice20181031094923.azurewebsites.net/api/user";
    axios.get<IUsers[]>(uri)
        .then(function (response: AxiosResponse<IUsers[]>): void {
            response.data.forEach((user: IUsers) => {
                if (user != null) {
                    userList.push(user);
                }
            })
            console.log(userList);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        });
}

//Logic behind Login
function Login(): void {
    //I will work on our push id method so that when user logs in
    //based on ID only his health data will show up
    let UserId:number=Number(user.id);
    let inputUsername: string = user.value;
    let inputPassword: string = pas.value;
    
    userList.forEach(element => {
        if (inputUsername == element.name && inputPassword == element.password) {
            window.open('MainPage.htm');
        }
        else {
            alert("Wrong credentials!");
        }
    });

    

}
 */