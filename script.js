
const councilData = [

{
title: "DISCO - Discipline Coordinator",
description:
"The backbone of campus harmony. The Discipline Coordinator doesn't just enforce rules, they foster a culture of mutualrespect, ensuring every studentfeels safe safe valued within the community. ",

responsibilities: [
"Maintain discipline on campus",
"Resolve student conflicts peacefully",
"Monitor attendance and punctuality",
"Coordinate with mentors",
"Promote respectful behaviour"
]
},

{
title: "Academic Coordinator",
description:
"Driving the educational mission forward. This council ensures that the learning environment is productive,managing schedules and providing the necessary support for every student to excel.",

responsibilities: [
"Monitor academic progress",
"Conduct study sessions",
"Coordinate with mentors",
"Support struggling students",
"Manage academic activities"
]
},

{
title: "Kitchen Coordinator",
description:
"More that the just food—it's about fueling the mind. The Kitchen Coordinator manages the entire dining experience, ensuring nutritious, hygienic meals that keep the campus energetic.",
responsibilities: [
"Maintain food hygiene",
"Coordinate kitchen staff",
"Collect student feedback",
"Monitor meal quality",
"Ensure cleanliness"
]
},

{
title: "Placement Coordinator",
description:
"Bridging the gap between education and career. The Placement Coordinator works tirelessly to prepare students for interviews and connect them with top employesr.",
responsibilities: [
"Coordinate placements",
"Conduct mock interviews",
"Resume guidance",
"Company communication",
"Track placements"
]
},

{
title: "Workout Coordinator",
description:
"Promoting a healthy lifestyle through action. From morning yoga to evening sports, this council ensures students stay physically active and energized.",
responsibilities: [
"Conduct workout sessions",
"Plan fitness activities",
"Motivate students",
"Maintain workout schedule",
"Track participation"
]
},

{
title: "Facility Manager",
description:
"Ensuring the campus runs like a well-oiled machine. The Facility Manager oversees the maintenance of all infrastructure, creating a comfortable and functional environment.",
responsibilities: [
"Maintain campus facilities",
"Report maintenance issues",
"Monitor cleanliness",
"Coordinate repairs",
"Improve infrastructure"
]
},

{
title: "Outreach Coordinator",
description:
"The face of the campus. The council builds bridges with the outside world, connecting students with communities, NGOs, and partners.",
responsibilities: [
"Organize outreach events",
"Coordinate NGOs",
"Community engagement",
"Manage volunteers",
"Promote social impact"
]
},

{
title: "IT Coordinator",
description:
"Powering the digital learning experience. The IT Coordinator ensures that the technological backbone of the campus— from WiFi to laptops is always operational. ",
responsibilities: [
"Maintain computer lab",
"Provide technical support",
"Manage software",
"Troubleshoot issues",
"Support digital learning"
]
},

{
title: "Onboarding Coordinator",
description:
"Making the first impression count. This council ensures new students feel at home immediately, guiding them through their transition into campus life.",
responsibilities: [
"Welcome new students",
"Campus orientation",
"Maintain onboarding records",
"Guide freshers",
"Support student integration"
]
},

{
title: "English Coordinator",
description:
"Breaking language barriers. This council creates an immersive environment for mastering English, the key to global opportunities.",
responsibilities: [
"Conduct English sessions",
"Improve communication",
"Practice public speaking",
"Organize language activities",
"Monitor student progress"
]
},

{
title: "Health & Wealth Coordinator",
description:
"Guardians of well-being. The Health & Wealth Coordinator ensures that physical and mental helath resources are always accessible, organizing checkups and providing support during emergencies.",
responsibilities: [
"Maintain health records",
"Organize health awareness",
"Coordinate medical support",
"Monitor student wellbeing",
"Promote healthy habits"
]
},

{
title: "Cultural Coordinator",
description:
"The heartbeat of campus fun. This council orgamizes festivals and events that celebrate diversity and build lifelong memories.",
responsibilities: [
"Organize cultural events",
"Manage performances",
"Celebrate festivals",
"Coordinate volunteers",
"Encourage participation"
]
}

];

const modal = document.getElementById("councilModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalResponsibilities = document.getElementById("modalResponsibilities");

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach((button,index)=>{

button.addEventListener("click",(e)=>{
        e.preventDefault();


modalTitle.textContent = councilData[index].title;

modalDescription.textContent = councilData[index].description;

modalResponsibilities.innerHTML="";

councilData[index].responsibilities.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

modalResponsibilities.appendChild(li);

});

modal.style.display="flex";

});

});

document.querySelector(".close-btn").addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}
});

// ==========================================================
// PHOTO POPUP (LIGHTBOX) CODE - 100% FIXED
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const viewerModal = document.getElementById('imageViewerModal');
    const expandedImg = document.getElementById('expandedImage');
    const closeViewerBtn = document.getElementById('closeViewerBtn');
    const allImages = document.querySelectorAll('.clickable-image');


    allImages.forEach((img) => {
        // Click event listener ab perfectly image ke upar lock hai
        img.addEventListener('click', () => {

            if (viewerModal && expandedImg) {
                expandedImg.src = img.src; 
                viewerModal.classList.add('is-active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // Close button functionality
    if (closeViewerBtn && viewerModal) {
        closeViewerBtn.addEventListener('click', () => {
            viewerModal.classList.remove('is-active');
            document.body.style.overflow = ''; 
        });
    }

    // Overlay ke bahar click karne par modal close hoga
    if (viewerModal) {
        viewerModal.addEventListener('click', (e) => {
            if (e.target === viewerModal) {
                viewerModal.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        });
    }
});