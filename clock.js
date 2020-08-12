window.addEventListener('load', function clock(){
    let date = new Date();
    let hour = date.getHours();;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if ( hour > 12 ){
        hour = hour - 12;
        document.querySelector('.amOrpm').innerHTML = "PM";
    }
    else{
        document.querySelector('.amOrpm').innerHTML = "AM";
    }
    if( hour < 10 ){
        hour = "0" + hour;
    }
    if( min < 10 ){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    digites(".hour", hour);
    digites(".min", min);
    digites(".sec", sec);
    setTimeout(clock, 1000);
})
function digites(format, input){
    document.querySelector(format).innerText = input;
}