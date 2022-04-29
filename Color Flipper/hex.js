"use strict";
let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn=document.querySelector(".btn");
let main=document.querySelector(".main");
let color=document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexcolor="#"
    for(let i=0; i<6; i++){
       hexcolor+=arr[getRandomNumber()]
    }
    color.textContent=hexcolor
    main.style.backgroundColor=hexcolor
})

function getRandomNumber(){
    return Math.floor(Math.random() * arr.length)
}