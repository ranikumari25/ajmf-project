// ===========================
// HERO SCROLL EFFECT
// ===========================

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    heroContent.style.transform =
        `translate(-50%, calc(-50% - ${scroll * 0.35}px))`;

    heroContent.style.opacity =
        Math.max(1 - scroll / 350, 0);

    heroBg.style.transform =
        `scale(${1 + scroll * 0.00025})`;

    if (scroll > window.innerHeight * 0.45) {

        hero.style.opacity = "0";
        hero.style.pointerEvents = "none";

    } else {

        hero.style.opacity = "1";
        hero.style.pointerEvents = "auto";

    }

});// ===========================
// COUNTER
// ===========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;
            const speed = target / 120;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count) + "+";
                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>counterObserver.observe(counter));


// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(

".impact-card, .way-card, .role-card, .why-image, .why-content, .cta"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(item=>{

    item.classList.add("hidden");
    revealObserver.observe(item);

});


// ===========================
// BUTTON HOVER
// ===========================

document.querySelectorAll(".btn-orange,.btn-white").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "translateY(0)";

    });

});