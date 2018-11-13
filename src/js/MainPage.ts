import axios, {
    AxiosResponse,
    AxiosError
}
    from "../../node_modules/axios/index";

    interface Ihealth
    {

        id:number;
        bloodPressure:number;
        heartBeat:number;
        age:number;
        weight:number;
        gender:string;
        userId:number;
    }
    let healthList: HTMLDivElement = <HTMLDivElement>document.getElementById("HealthList");
    //getData
    let GetById: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    GetById.addEventListener("click", getAll);

    function getAll(): void {
        let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/user";
        axios.get<Ihealth[]>(uri)
            .then(function (response: AxiosResponse<Ihealth[]>): void {
    
                console.log(response.data);
                let result: string = "<ol>";
    
                response.data.forEach((health: Ihealth) => {
    
                    result += "<li>" + " " + health.bloodPressure + " " + health.gender + " " + health.heartBeat+" "+health.weight+" "+health.userId+ "</li>";
    
                });
                //Issa I made bellow 2 lines,u can delete them if you want,i followed anders code and he have
                //this so I hoped this will fix the "undefined" issue
                result+="</ol>";
                healthList.innerHTML = result;
                console.log(result);
            })
            .catch(function (error: AxiosError) {
                console.log(error);
            })
    }