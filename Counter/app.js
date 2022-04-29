"use strict";
const counter=document.querySelector('.counter-count');
const btns=document.querySelectorAll(".btn");
console.log(btns);
let count=0;

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles=e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("btn-1")){
            count--
        }
        else if(styles.contains("btn-3")){
            count++
        }
        else{
            count=0
        }

        if(count<0){
            counter.style.color='red';
        }
        if(count>0){
            counter.style.color='blue';
        }
        if(count===0)
        {
            counter.style.color="white";
        }
        counter.textContent=count
    })
})

