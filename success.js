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