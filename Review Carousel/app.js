
const reviews=[
    {
        id: 1,
        name:"Susan Smith",
        job:"WEB DEVELOPER",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },


    {
        id:2,
        name:"Anna Johnson",
        job:"WEV designerDESİGNER",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"

    },

    {
        id:3,
        name:"Peter Jones",
        job:"İNTERN",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"

    },

    {
        id:4,
        name:"Bill Anderson",
        job:"THE BOSS",
        text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"

    }

]

const left=document.getElementById("arrow-left");
const right=document.getElementById("arrow-right");
let header=document.querySelector(".review-main-info-header");
let parag=document.querySelector(".review-main-info-parag");
let job=document.querySelector(".review-main-info-job");
let img=document.querySelector(".review-main-image");
let btn=document.querySelector(".btn");
let index=0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})

function showPerson(){
    const item = reviews[index];
    img.src=item.img;
    header.textContent=item.name;
    parag.textContent=item.text;
    job.textContent=item.job
}

left.addEventListener("click",function(){
     index--
     if(index<0){
         index=reviews.length-1
     }
    showPerson()
})

right.addEventListener("click",function(){
    index++
    if(index > reviews.length-1){
        index==0
    }
    showPerson()
})

btn.addEventListener("click",function(){
    let say=Math.floor(Math.random() * reviews.length);
    index=say;
    showPerson()
})

console.log(reviews.length-1)
