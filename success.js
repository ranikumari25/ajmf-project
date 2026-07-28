const buttons = document.querySelectorAll(".read-btn");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        let card = button.closest(".story-card");


        let fullText = card.querySelector(".full-text");


        if(fullText.style.display === "block"){


            fullText.style.display="none";

            button.innerHTML="Read Full story →";


        }

        else{


            fullText.style.display="block";

            button.innerHTML="Show Less ↓";


        }


    });


});


        document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');

            // Icon ko ☰ se ✕ mein change karne ke liye
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }
});
   