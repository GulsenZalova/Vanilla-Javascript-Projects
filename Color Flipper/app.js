let arr=["red","blue","green","yellow","pink","violet","orange","aqua", "black","white"]
let color=document.querySelector(".color");
let btn=document.querySelector(".btn");
let main=document.querySelector(".main")

btn.addEventListener("click",function(){
    let randomNumber=getRandomNumber()
    console.log(randomNumber)
    color.textContent=arr[randomNumber]
    main.style.backgroundColor=arr[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * arr.length)
}