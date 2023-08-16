var start=document.getElementById("start")
var stop=document.getElementById("stop")
var reset=document.getElementById("reset")
var time= document.getElementById('time')
var ch1= document.getElementById("ch1")
var hr=0;
var min =0;
var sec=0;
var stoptime = true;


start.addEventListener('click' , ()=>{

    if(stoptime == true){
        stoptime=false;
        timerCycle();
    }
    start.style.backgroundColor=`cadetblue`
    stop.style.backgroundColor=``
    reset.style.backgroundColor=``
})
function timerCycle(){
    if(stoptime == false){

        sec= parseInt(sec);
        min= parseInt(min);
        hr= parseInt(hr);


        sec= sec + 1;
        if(sec == 60) {
            min = min + 1;
            sec=0;
        }
        if(min == 60) {
            hr = hr + 1;
            min=0;
            sec=0;
        }
        if( sec < 10) {
            sec = "0" + sec;
        }
        if( min < 10) {
            min = "0" + min;
        }
        if( hr < 10) {
            hr = "0" + hr;
        }

        time.innerText = hr + ":" + min + ":" + sec;
        setTimeout("timerCycle()",1000)
    }
}

stop.addEventListener('click' , ()=>{

    if(stoptime== false){
        stoptime=true;
    }
    stop.style.backgroundColor=`cadetblue`
    start.style.backgroundColor=``
    reset.style.backgroundColor=``
})

reset.addEventListener('click' , ()=>{

    time.innerText="00:00:00"
    stoptime=true;
    hr=0;
    min =0;
    sec=0;

    reset.style.backgroundColor=`cadetblue`
    stop.style.backgroundColor=``
    start.style.backgroundColor=``  
})

setInterval(()=>{
    ch1.style.fontSize=`25px`
    ch1.style.paddingTop=`20px`
},1000)
setInterval(()=>{
    ch1.style.fontSize=`35px`
    ch1.style.paddingTop=`15px`
},2000)