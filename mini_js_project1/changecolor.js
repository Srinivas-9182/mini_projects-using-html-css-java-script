const button=document.getElementById("btn");
const body=document.querySelector("body");
const inner_body=document.getElementById("box");
let color=['red','blue','green','black','orange','yellow','olive','indianred','coral'];

inner_body.style.backgroundColor="red";
body.style.backgroundColor="violet";
button.addEventListener('click',()=>{
    let colorindex=parseInt(Math.random()*color.length);
    let colorindex1=parseInt(Math.random()*color.length);
    
    inner_body.style.backgroundColor=color[colorindex1];
    body.style.backgroundColor=color[colorindex];
})