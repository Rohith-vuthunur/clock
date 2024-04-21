// let t = document.getElementById("time");
let c=0;
function changetime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let t1 = document.getElementById("time");
    let period="";
    if (parseInt(hour)>12){
        hour = parseInt(hour)%12;
        period="PM";

    }
    else{
        period="AM";
    }
    if(parseInt(min)>=60){
        min = parseInt(min)%60;

    }
    if(parseInt(sec)>=60){
        sec = parseInt(sec)%60;

    }
    
    t1.innerHTML=hour+":"+min+":"+sec+" "+period;
        
    
    



}
setInterval(changetime,1000)
