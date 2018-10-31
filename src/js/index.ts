
let log:HTMLButtonElement=<HTMLButtonElement>document.getElementById("Logs");
log.addEventListener("click",Login);

let user:HTMLInputElement=<HTMLInputElement>document.getElementById("Username");
let pas:HTMLInputElement=<HTMLInputElement>document.getElementById("password");

//Here I made simple code just to see if i can connect the login with main page after entering certain credentials,
//ofc this will be replaced hopefully with our database info for users :) 
function Login(){
     if(user.value=="Ben"&&pas.value=="123"){
        open("MainPage.htm");

     }
     else{
         alert("Invalid input!")
     }
    

}