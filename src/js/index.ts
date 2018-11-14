import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

interface IUsers {

    name: string;
    email: string;
    password: string;


}
//Here is the list of users we have in database,by this list we are calling users from database
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

    let inputUsername: string = user.value;
    let inputPassword: string = pas.value;
    
    userList.forEach(element => {
        if (inputUsername == element.name && inputPassword == element.password) {
            window.open('MainPage.htm');
        }
        else {
            alert("Wrong credentials!")
        }
    });

    

}

