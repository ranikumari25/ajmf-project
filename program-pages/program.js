const programs = [

{
    title: "School of Programming",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-briefcase",
    careerColor: "#3b82f6",

    image:
    "Sop.jpeg",

    description:
    "Build the digital future through project-based learning, coding, teamwork and real-world software development.",

    highlights: [
        "JavaScript",
        "React",
        "Python",
        "Databases",
        "Projects"
    ],

    careers: [
            { icon: "fa-solid fa-laptop-code", name: "Software Developer",color:"#3b82f6" },
            { icon: "fa-solid fa-code", name: "Frontend Developer",color:"#3b82f6"  },
            { icon: "fa-solid fa-server", name: "Backend Developer",color:"#3b82f6" },
            { icon: "fa-solid fa-bug", name: "QA Engineer",color:"#3b82f6"  }
]
},

{
    title: "School of Education",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-book-open",
    careerColor: "#a855f7",
    image:"Soe.jpeg",

    description:
    "Prepare future educators through modern teaching practices and leadership development.",

    highlights: [
        "Teaching Methods",
        "Leadership",
        "Child Development",
        "Communication"
    ],

    careers: [
             { icon: "fa-solid fa-chalkboard-user", name: "Teacher",color:"#a855f7" },
             { icon: "fa-solid fa-user-graduate", name: "Trainer",color:"#a855f7"  },
             { icon: "fa-solid fa-school", name: "School Leader",color:"#a855f7"  },
             { icon: "fa-solid fa-hands-helping", name: "Mentor",color:"#a855f7"  }
]
},

{
    title: "School of Second Chance",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-utensils",
    careerColor: "#22c55e" ,
    image:"Sosc.jpeg",

    description:
    "A life-changing program focused on rebuilding confidence and creating new opportunities.",

    highlights: [
        "Life Skills",
        "Culinary Skills",
        "Entrepreneurship",
        "Career Readiness"
    ],

   careers: [
           { icon: "fa-solid fa-utensils", name: "Chef",color:"#22c55e" },
           { icon: "fa-solid fa-briefcase", name: "Entrepreneur",color:"#22c55e" },
           { icon: "fa-solid fa-hotel", name: "Hospitality Professional",color:"#22c55e" }
]
},
{
    title: "School of Business",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-chart-line",
    careerColor: "#f97316" ,
    image:"Sob.jpeg",

    description:
    "Develop business, marketing, operations and leadership skills for modern industries.",

    highlights: [
        "Business Fundamentals",
        "Marketing",
        "Sales & Operations",
        "Leadership Skills",
        "Data Analysis"
    ],

    careers: [
           { icon: "fa-solid fa-chart-line", name: "Business Analyst",color:"#f97316" },
           { icon: "fa-solid fa-bullhorn", name: "Marketing Executive",color:"#f97316" },
           { icon: "fa-solid fa-gear", name: "Operations Associate",color:"#f97316" },
           { icon: "fa-solid fa-handshake", name: "Sales Executive",color:"#f97316" }
]
},
{
    title: "School of Finance",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-building-columns",
    careerColor: "#f59e0b",
    image:"Sof.jpeg",

    description:
    "Learn finance, business operations and analytical thinking for modern careers.",

    highlights: [
        "Accounting",
        "Financial Analysis",
        "Investments",
        "Business Planning"
    ],
   careers: [
            { icon: "fa-solid fa-chart-pie", name: "Financial Analyst",color:"#f59e0b"},
            { icon: "fa-solid fa-building-columns", name: "Banking Professional",color:"#f59e0b"},
            { icon: "fa-solid fa-coins", name: "Investment Advisor",color:"#f59e0b"}
 ]

},

];

const cardsContainer =
document.getElementById("cards-container");

programs.forEach(program => {

cardsContainer.innerHTML += `

<div class="program-card">
    <div class="program-image">

        <img src="${program.image}" alt="">

    </div>

    <div class="program-content">

        <h3 class="p-title">
            ${program.title }
           
        </h3>

        <p class="p-description">
            ${program.description}
        </p>
        <h4 style="color:${program.color}; margin-top:15px; font-size:28px;">
              Curriculum Highlights
      </h4>

        <ul class="p-highlights">
            ${program.highlights
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

    </div>

<div class="career-box" style="border:0.1px solid ${program.careerColor};">
    <h4 class="p-career" style="color:${program.careerColor}">
         <i class="${program.careerIcon}"></i>
           Career Paths
      </h4>

        <ul class="career-list">

           ${program.careers
            .map(career => `
         <li>
      <i class="${career.icon}" style="color:${career.color}"></i>
            ${career.name}
      </li>
        `)
              .join("")}

        </ul>

    </div>

</div>

`;

});



const campusSchedule = [



{
    icon:"💪",
    time:"06:00 AM",
    task:"Exercise"
},

{
    icon:"🍳",
    time:"08:30 AM",
    task:"Breakfast"
},

{
    icon:"📚",
    time:"09:00 AM",
    task:"Session 1"
},

{
    icon:"🍽️",
    time:"01:00 PM",
    task:"Lunch"
},

{
    icon:"📚",
    time:"02:00 PM",
    task:"Session 2"
},

{
    icon:"📖",
    time:"04:00 PM",
    task:"English Activity"
},

{
    icon:"🍟",
    time:"05:00 PM",
    task:"Snacks Break"
},

{
    icon:"⚽",
    time:"05:30 PM",
    task:"Culture Activity"
},

{
    icon:"📚",
    time:"06:30 PM",
    task:"Session 3"
},

{
    icon:"🍽️",
    time:"08:30 PM",
    task:"Dinner"
},
{
    icon:"🌙",
    time:"10:30 PM",
    task:"Lights Out"
}


];

const timelineContainer =
document.getElementById("timeline-container");

timelineContainer.innerHTML =
`<div class="timeline"></div>`;

const timeline =
document.querySelector(".timeline");

campusSchedule.forEach(item => {

timeline.innerHTML += `

<div class="time-item">

    <div class="circle">
        ${item.icon}
    </div>

    <div class="time-card">

        <h4>${item.time}</h4>

        <p>${item.task}</p>

    </div>

</div>

`;

});