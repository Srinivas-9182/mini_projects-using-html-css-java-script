const btn1=document.querySelector(".prev");
const btn2=document.querySelector(".next");
const btns=document.querySelectorAll(".btns");
let box1=document.querySelector(".box");
let count=0;
btn1.addEventListener('click',()=>{
    count--;
    document.getElementById('count').innerHTML=count;
})
btn2.addEventListener('click',()=>{
    count++;
    document.getElementById('count').innerHTML=count;
})

btns[0].addEventListener('click',changecolor);
btns[1].addEventListener('click',changecolor);
function changecolor(){

if(count<0){
    document.getElementById('count').style.color="red";
   
    
}else if(count>0){
document.getElementById('count').style.color="green";

}else{
document.getElementById('count').style.color="black";

    
}
} 