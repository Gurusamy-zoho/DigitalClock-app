let ampm = document.getElementById("DayNight");

function displayTime(){

    let time = new Date();

    let hour = time.getHours();
    let mins = addZero(time.getMinutes());
    let secs = addZero(time.getSeconds());

    if(hour>12){
        hour = hour - 12;
        ampm.innerHTML = "PM";
     }
    
    document.getElementById("hours").innerHTML = addZero(hour);
    document.getElementById("mins").innerHTML= mins;
    document.getElementById("secs").innerHTML = secs;
     
}


function addZero(num){
    return num<10?"0"+num:num;
}

setInterval(displayTime,100);