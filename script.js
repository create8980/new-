/* ==========================================
   CYBERSHIELD SCRIPT.JS
   PART 1
========================================== */

"use strict";

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});


/* ==========================================
   STICKY HEADER
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   END PART 1
========================================== */
/* ==========================================
   PART 2
   TYPING EFFECT + COUNTER + SCROLL REVEAL
========================================== */


/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.getElementById("typing");

const words = [

    "Ethical Hacking",

    "Penetration Testing",

    "Network Security",

    "Cloud Security",

    "SOC Monitoring",

    "Digital Forensics",

    "Malware Analysis",

    "Cyber Defense"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting ? 50 : 120);

}

typingEffect();



/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,15);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(

".about,.services,.why-us,.threats,.team,.statistics,.contact"

);

function revealOnScroll(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();



/* ==========================================
   HERO IMAGE FLOAT
========================================== */

const heroImage = document.querySelector(".hero-right img");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("float");

},2000);

}



/* ==========================================
   END PART 2
========================================== */
/* ==========================================
   PART 3
   MATRIX RAIN + TERMINAL EFFECT
========================================== */

/* ==========================================
   MATRIX RAIN
========================================== */

const canvas = document.getElementById("matrix");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters =
        "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()";

    const chars = letters.split("");

    const fontSize = 16;

    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] = 1;

    }

    function drawMatrix() {

        ctx.fillStyle = "rgba(5,8,22,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff99";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const text =
                chars[Math.floor(Math.random() * chars.length)];

            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );

            if (
                drops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    setInterval(drawMatrix, 35);

    window.addEventListener("resize", () => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    });

}

/* ==========================================
   TERMINAL CURSOR
========================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    setInterval(() => {

        cursor.style.visibility =
            cursor.style.visibility === "hidden"
                ? "visible"
                : "hidden";

    }, 500);

}

/* ==========================================
   RANDOM TERMINAL LINES
========================================== */

const terminalBody =
    document.querySelector(".terminal-body");

const terminalLines = [

    "[ OK ] Firewall Enabled",

    "[ OK ] Malware Scan Completed",

    "[ OK ] VPN Connected",

    "[ OK ] Threat Database Updated",

    "[ OK ] Security Patch Installed",

    "[ OK ] Monitoring Network...",

    "[ OK ] SSH Connection Secure",

    "[ OK ] No Vulnerabilities Found"

];

if (terminalBody) {

    setInterval(() => {

        const p = document.createElement("p");

        p.innerHTML =
            '<span class="green-text">root@server:~</span> $ '
            + terminalLines[
                Math.floor(
                    Math.random() * terminalLines.length
                )
            ];

        terminalBody.appendChild(p);

        if (terminalBody.children.length > 15) {

            terminalBody.removeChild(
                terminalBody.children[1]
            );

        }

        terminalBody.scrollTop =
            terminalBody.scrollHeight;

    }, 3000);

}

/* ==========================================
   END PART 3
========================================== */
/* ==========================================
   PART 4
   DARK MODE + ACTIVE NAV + FINAL
========================================== */

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =
            (e.clientX - rect.left) + "px";

        ripple.style.top =
            (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================================
   SCROLL TO SECTION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   SIMPLE FADE-IN
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".reveal").forEach(el => {

    observer.observe(el);

});


/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        form.reset();

    });

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.clear();

console.log("%cCYBERSHIELD",
"color:#00ff99;font-size:32px;font-weight:bold;");

console.log(
"%cProfessional Cyber Security Website",
"color:white;font-size:16px;"
);

console.log(
"%cDeveloped for GitHub Portfolio",
"color:#00ff99;"
);


/* ==========================================
   END OF FILE
========================================== */
