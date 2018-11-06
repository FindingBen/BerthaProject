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
    let healthList: HTMLOListElement = <HTMLOListElement>document.getElementById("HealthList");
    //getData
    let GetById: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    GetById.addEventListener("click", getAll);

    function getAll(): void {
        let uri: string = "https://birthawebservice20181031094923.azurewebsites.net/api/user";
        axios.get<Ihealth[]>(uri)
            .then(function (response: AxiosResponse<Ihealth[]>): void {
    
                console.log(response.data);
                let result: string = "";
    
                response.data.forEach((health: Ihealth) => {
    
                    result += "<p>" + " " + health.bloodPressure + " " + health.gender + " " + health.heartBeat+" "+health.weight+" "+health.userId+ "</p>";
    
                });
                healthList.innerHTML = result;
                console.log(result);
            })
            .catch(function (error: AxiosError) {
                console.log(error);
            })
    }