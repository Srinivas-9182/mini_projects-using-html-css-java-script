var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=flase; 
function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
    
}
function reset(){
    timer=false;
     hr=0;
     min=0;
    sec=0;
    count=0;
  document.getElementById("hrs").innerHTML="00";
  document.getElementById("mins").innerHTML="00";
  document.getElementById("secs").innerHTML="00";
  document.getElementById("counting").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        count++;
    if(count==99){
        sec++;
        count=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
    }
    if (hr<10) {
        document.getElementById("hrs").innerHTML="0"+hr;
    } else {
        document.getElementById("hrs").innerHTML=hr; 
    }
    if (sec<10) {
        document.getElementById("secs").innerHTML="0"+sec;
    } else {
        document.getElementById("secs").innerHTML=sec;
    }
        
    if (min<10) {
        document.getElementById("mins").innerHTML="0"+min;
    } else {
        document.getElementById("mins").innerHTML=min;
    }
    if (count<10) {
        document.getElementById("counting").innerHTML="0"+count;
    } else {
        document.getElementById("counting").innerHTML=count;
    }   
    setTimeout(stopwatch, 10);
    }
}