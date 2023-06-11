var active = 3;

var mncircles = document.querySelectorAll(".mn-circle");

var h4 = document.querySelectorAll(".sec h4");

var sec = document.querySelectorAll(".sec");

var dot = document.querySelector(".dot");

var stripes = document.querySelectorAll(".head-h4");

var herotonav = document.querySelector(".hero-to-nav");

var changemodecircle=document.querySelector(".change-dark-light");

const lerp = (x, y, a) => x * (1 - a) + y * a;

const hello_arr = ["Hello", "Hola","स्वागत हे", "Hallo", "Bonjour", "Ciao", "你好", "G'day","Guten tag", "Ola", "नमस्ते"];


window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 220);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};

herotonav.addEventListener("click", () => {
    document.querySelector(".hero-nav-a").classList.toggle("fa-xmark");
    document.querySelector(".nav").classList.toggle("transform-nav");
})

gsap.to(mncircles[active - 1], {
    opacity: .5,
})
gsap.to(sec[active - 1], {
    opacity: 1,
})
mncircles.forEach(function (circle, index) {
    circle.addEventListener("click", function () {
        gsap.to("#circle", {
            rotate: (active - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })
        greyout();
        gsap.to(this, {
            opacity: .5
        })
        gsap.to(sec[index], {
            opacity: 1
        })
    })
    circle.addEventListener("mousemove", () => {
        gsap.to(dot, {
            scale: .4,
            opacity: 1,
            background: "rgb(0, 0, 0)",
            ease: Expo,
            duration: .3,
        });
    })
    circle.addEventListener("mouseleave", () => {
        gsap.to(dot, {
            scale: 1,
            background: "black",
            opacity: 0,
            duration: .5
        })
    })
})
h4.forEach(function (h4, index) {
    h4.addEventListener("click", function () {
        gsap.to("#circle", {
            rotate: (active - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })
        greyout();
        gsap.to(mncircles[index], {
            opacity: .5
        })
        gsap.to(this, {
            opacity: 1
        })
        gsap.to(sec[index], {
            opacity: 1
        })
    })
})
function greyout() {
    gsap.to(mncircles, {
        opacity: .1
    })
    gsap.to(sec, {
        opacity: .4
    })
}


gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1
})


window.addEventListener("mousemove", function (dets) {
    gsap.to(dot, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
});
stripes.forEach(stripe => {
    stripe.addEventListener("mousemove", function (dets) {

        var dims = stripe.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = stripe.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zeroOney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);


        gsap.to(dot, {
            scale: 4,
            background: "rgb(0, 0, 0)",
            opacity: 1
        })
        gsap.to(this, {
            color: "silver",
            x: lerp(-20, 20, zeroOne),
            y: lerp(-20, 20, zeroOney),
            duration: .3
        })
    })
    stripe.addEventListener("mouseleave", function () {
        gsap.to(dot, {
            scale: 1,
            duration: .5,
            ease: Expo.easeInOut,
            opacity: 0
        })
        gsap.to(this, {
            color: "black",
            x: 0,
            y: 0,
            duration: .3
        })
    })
})
herotonav.addEventListener("mousemove", function (dets) {
    var dims = herotonav.getBoundingClientRect();
    var xstart = dims.x;
    var xend = xstart + dims.width;

    var zerone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    var dims2 = herotonav.getBoundingClientRect();
    var ystart = dims2.y;
    var yend = ystart + dims2.height;

    var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(this, {
        cursor: "pointer",
        x: lerp(-30, 30, zerone),
        y: lerp(-30, 30, zerotwo),
        duration: 0.3
    });
    gsap.to(".hero-nav-a", {
        x:lerp(-20,20,zerone),
        y:lerp(-20,20,zerotwo),
        fontSize: "1.5rem"
      });
});

herotonav.addEventListener("mouseleave", function () {
    gsap.to(this, {
        x: 0,
        y: 0,
        duration: 0.3
    });
    gsap.to(".hero-nav-a", {
        x:0,
        y:0,
        fontSize: "1rem"
      });
});


// changemode
changemodecircle.addEventListener("click",function(){
    document.querySelector(".change-mode-circle").classList.toggle("change-mode-circle-class");
    document.querySelector(".change-mode-circle i").classList.toggle("fa-moon");
    document.querySelector(".changeinputdarklight").classList.toggle("input-backgroundchange");
    document.querySelector(".hero-section #madeby").classList.toggle("madebydark");
    document.querySelector(".hero-section .block").classList.toggle("block-dark");
    document.querySelector(".name").classList.toggle("name-dark");
    document.querySelector(".hero-to-nav a i").classList.toggle("ii-color-white")
    document.querySelector(".hero-section").classList.toggle("ondark-hero");
    document.querySelector(".nav").classList.toggle("main-dark");
    document.querySelector(".nav #madeby").classList.toggle("madebydark");
    document.querySelector(".nav .block").classList.toggle("block-dark-nav");
})

changemodecircle.addEventListener("mousemove",function(dets){
    var dims = changemodecircle.getBoundingClientRect();
    var xstart = dims.x;
    var xend = xstart + dims.width;

    var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    var dims2 = changemodecircle.getBoundingClientRect();
    var ystart = dims2.y;
    var yend = ystart + dims2.height;

    var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);


    gsap.to(this,{
        x:lerp(-20,20,zeroOne),
        y:lerp(-30,30,zerotwo)
    })
})
changemodecircle.addEventListener("mouseleave",function(){
    gsap.to(this,{
        x:0,
        y:0
    })
})

