// NAVIGATION
    const burger =document.querySelector('.burger');
    const nav =document.querySelector('.nav-links');
    const closebtn =document.querySelector('.fa-times');
    const dropdown =document.querySelector('.fa-angle-down');
    const mobileShow =document.querySelector('.mobile-show');



burger.addEventListener('click', ()=>{
    if (nav.style.display==="none"){
        nav.style.display="flex";
        closebtn.style.display="block";
        burger.style.display="none";
    }
    else{
        nav.style.display="none";
    }
});

closebtn.addEventListener('click', ()=>{
    if(closebtn.style.display==="block"){
        nav.style.display="none";
        closebtn.style.display="none";
        burger.style.display="block";
    }
});

// DROPDOWN
dropdown.addEventListener('click', ()=>{
    if(mobileShow.style.display==="none"){
        mobileShow.style.display="block";
    }
    else{
        mobileShow.style.display="none";
    }
});


// CAROUSEL
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let index=0;

prev.addEventListener('click', function(){
    prevSlide();
    resetTimer();
});

next.addEventListener('click', function(){
    nextSlide();
    resetTimer();
});

function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
}
function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoplay,4000);
}
function autoplay(){
    nextSlide();
}
let timer=setInterval(autoplay,4000);



