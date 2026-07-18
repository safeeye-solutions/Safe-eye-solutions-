/* ==========================================
   SAFE EYE SOLUTIONS
   PREMIUM WEBSITE
========================================== */

// Loading Screen
window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

if(loader){

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}

},700);

});



// Mobile Menu

const menuBtn = document.getElementById("menu-btn");

const nav = document.getElementById("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}



// Close menu after clicking

document.querySelectorAll("#nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show");

});

});



// Sticky Header

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(5,10,20,.92)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(5,10,20,.65)";

header.style.boxShadow="none";

}

});



// Counter Animation

const counters = document.querySelectorAll(".counter");

const speed = 40;

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

const update = ()=>{

const current = +counter.innerText;

const increment = Math.ceil(target/speed);

if(current < target){

    const next = current + increment;

    if(target == 8){
        counter.innerText = Math.min(next,target);
    }else{
        counter.innerText = Math.min(next,target) + "+";
    }

    setTimeout(update,40);

}else{

    if(target == 8){
        counter.innerText = target;
    }else{
        counter.innerText = target + "+";
    }

}

};

update();

counterObserver.unobserve(counter);

}

});

},{
threshold:.6
});

counters.forEach(counter=>counterObserver.observe(counter));



// Scroll Reveal

const revealElements = document.querySelectorAll(

".feature-card,.service-card,.brand-card,.gallery-item,.counter-box,.testimonial-card,.faq-item,.contact-card"

);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.classList.add("reveal");

revealObserver.observe(el);

});
/* ==========================================
   SMOOTH SCROLLING
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



/* ==========================================
ACTIVE NAVIGATION
========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



/* ==========================================
FAQ ANIMATION
========================================== */

document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("open");

});

});



/* ==========================================
FLOATING BUTTON EFFECT
========================================== */

setInterval(()=>{

document.querySelectorAll(".floating-whatsapp,.floating-call")

.forEach(btn=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:1800

});

});

},2200);



/* ==========================================
PARALLAX HERO
========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=window.scrollY*0.35+"px";

}

});



/* ==========================================
PAGE FADE IN
========================================== */

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

});



/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log("%cSafe Eye Solutions","font-size:24px;color:#38bdf8;font-weight:bold;");

console.log("Website Developed for Safe Eye Solutions");
/* ===========================
   SERVICE SLIDER
=========================== */

const slides = document.querySelectorAll(".service-slide");
const prev = document.getElementById("prevService");
const next = document.getElementById("nextService");
const counter = document.getElementById("serviceCounter");

let current = 0;

function updateSlider(){

slides.forEach((slide,index)=>{

slide.style.display = index===current ? "block" : "none";

});

if(counter){

counter.textContent = `${current+1} / ${slides.length}`;

}

}

if(next){

next.onclick = ()=>{

current++;

if(current>=slides.length){

current=0;

}

updateSlider();

};

}

if(prev){

prev.onclick = ()=>{

current--;

if(current<0){

current=slides.length-1;

}

updateSlider();

};

}

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

updateSlider();

},5000);

updateSlider();
