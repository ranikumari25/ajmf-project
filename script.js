// ==========================================================
// STUDENT-LED CAMPUS COUNCILS DATA & INTERACTIVE SCRIPT
// ==========================================================

const councilData = [
    {
        id: 1,
        num: "01",
        title: "DISCO - Discipline Coordinator",
        image: "DISCO.jpeg",
        description: "The backbone of campus harmony. The Discipline Coordinator doesn't just enforce rules, they foster a culture of mutual respect, ensuring every student feels safe and valued within the community.",
        responsibilities: [
            "Maintain discipline and decorum across campus",
            "Resolve student conflicts peacefully and constructively",
            "Monitor attendance and punctuality",
            "Coordinate with mentors for behavioral guidance",
            "Promote respectful and inclusive campus behavior"
        ]
    },
    {
        id: 2,
        num: "02",
        title: "Academic Coordinator",
        image: "AF.jpeg",
        description: "Driving the educational mission forward. This council ensures that the learning environment is productive, managing study schedules and providing the necessary support for every student to excel.",
        responsibilities: [
            "Monitor daily academic progress and curriculum flow",
            "Conduct peer study and doubt-clearing sessions",
            "Coordinate learning resources with academic mentors",
            "Provide specialized support for struggling students",
            "Manage academic schedules and peer learning workshops"
        ]
    },
    {
        id: 3,
        num: "03",
        title: "Kitchen Coordinator",
        image: "kitchen.jpeg",
        description: "More than just food—it's about fueling the mind. The Kitchen Coordinator manages the entire dining experience, ensuring nutritious, hygienic meals that keep the campus energetic.",
        responsibilities: [
            "Maintain strict food hygiene and safety standards",
            "Coordinate meal preparation schedules and kitchen team",
            "Collect and incorporate regular student dietary feedback",
            "Monitor meal nutritional quality and ingredient inventory",
            "Ensure complete kitchen and dining hall cleanliness"
        ]
    },
    {
        id: 4,
        num: "04",
        title: "Health Coordinator",
        image: "health.jpeg",
        description: "Guardians of well-being. The Health Coordinator ensures that physical and mental health resources are always accessible, organizing medical checkups and providing swift support during emergencies.",
        responsibilities: [
            "Maintain comprehensive student health records and first-aid kits",
            "Organize health awareness sessions and hygiene drives",
            "Coordinate emergency medical assistance and doctor visits",
            "Monitor student physical and mental well-being",
            "Promote healthy lifestyle habits across campus"
        ]
    },
    {
        id: 5,
        num: "05",
        title: "Workout Coordinator",
        image: "workout.jpeg",
        description: "Promoting a healthy lifestyle through action. From morning yoga to evening sports, this council ensures students stay physically active, fit, and energized.",
        responsibilities: [
            "Conduct morning fitness and yoga routines",
            "Plan and supervise evening sports and physical activities",
            "Motivate every student to maintain physical fitness",
            "Maintain workout equipment and sports grounds",
            "Track daily student participation in fitness activities"
        ]
    },
    {
        id: 6,
        num: "06",
        title: "Facility Manager",
        image: "Facility Managment.jpeg",
        description: "Ensuring the campus runs like a well-oiled machine. The Facility Manager oversees the maintenance of all infrastructure, creating a comfortable and functional environment.",
        responsibilities: [
            "Maintain campus infrastructure, rooms, and facilities",
            "Inspect and report maintenance issues promptly",
            "Oversee campus cleanliness and waste management",
            "Coordinate timely repairs with service vendors",
            "Continuously improve campus living infrastructure"
        ]
    },
    {
        id: 7,
        num: "07",
        title: "Outreach Coordinator",
        image: "outreach.jpeg",
        description: "The face of the campus. The Outreach Coordinator builds bridges with the outside world, connecting students with local communities, partner NGOs, and social initiatives.",
        responsibilities: [
            "Organize community outreach and social impact events",
            "Coordinate joint initiatives with partner NGOs",
            "Drive student community engagement projects",
            "Manage volunteer activities and awareness campaigns",
            "Promote social responsibility and leadership"
        ]
    },
    {
        id: 8,
        num: "08",
        title: "IT Coordinator",
        image: "IT cordinator.jpeg",
        description: "Powering the digital learning experience. The IT Coordinator ensures that the technological backbone of the campus—from WiFi to laptops—is always operational.",
        responsibilities: [
            "Maintain computer lab hardware, laptops, and networking",
            "Provide swift technical support to students and mentors",
            "Manage software installations and updates",
            "Troubleshoot hardware, internet, and system issues",
            "Ensure uninterrupted access to digital learning tools"
        ]
    },
    {
        id: 9,
        num: "09",
        title: "Onboarding Coordinator",
        image: "onboarding.jpeg",
        description: "Making the first impression count. This council ensures new students feel at home immediately, guiding them seamlessly through their transition into campus life.",
        responsibilities: [
            "Warmly welcome and assist newly arrived students",
            "Conduct comprehensive campus orientation tours",
            "Maintain onboarding documentation and buddy assignments",
            "Guide freshers through campus norms and routines",
            "Support smooth emotional and social student integration"
        ]
    },
    {
        id: 10,
        num: "10",
        title: "English Coordinator",
        image: "english.jpeg",
        description: "Breaking language barriers. This council creates an immersive environment for mastering English communication, boosting confidence and unlocking global opportunities.",
        responsibilities: [
            "Conduct daily spoken English practice and vocabulary sessions",
            "Improve interpersonal communication skills",
            "Organize public speaking, debate, and drama activities",
            "Facilitate language learning games and peer circles",
            "Monitor individual student progress in English fluency"
        ]
    },
    {
        id: 11,
        num: "11",
        title: "Placement Coordinator",
        image: "placement.jpeg.png",
        description: "Bridging the gap between education and career. The Placement Coordinator works tirelessly to prepare students for interviews, build professional resumes, and connect with top employers.",
        responsibilities: [
            "Coordinate drive schedules and recruitment logistics",
            "Conduct regular mock interviews and aptitude tests",
            "Provide personalized resume building and LinkedIn guidance",
            "Maintain effective communication with hiring partners",
            "Track placement statistics and interview feedback"
        ]
    },
    {
        id: 12,
        num: "12",
        title: "Cultural Coordinator",
        image: "culture.jpeg",
        description: "The heartbeat of campus fun. This council organizes festivals, talent showcases, and cultural events that celebrate diversity and create lifelong memories.",
        responsibilities: [
            "Organize campus cultural events and festival celebrations",
            "Manage music, dance, and theatrical performances",
            "Encourage full student participation and creative expression",
            "Coordinate event decorations and volunteer teams",
            "Foster inclusive joy, creativity, and team spirit"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // ---------------- CARD FILTERING ----------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const councilCards = document.querySelectorAll('.council-card');

    if (filterBtns.length > 0 && councilCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                councilCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ---------------- COUNCIL MODAL POPUP ----------------
    const modal = document.getElementById('councilModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const viewBtns = document.querySelectorAll('.view-more-btn');

    const modalNum = document.getElementById('modalNum');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalResp = document.getElementById('modalResponsibilities');
    const modalImg = document.getElementById('modalImg');

    function openModal(id) {
        const item = councilData.find(c => c.id === parseInt(id));
        if (!item || !modal) return;

        if (modalNum) modalNum.textContent = item.num;
        if (modalTitle) modalTitle.textContent = item.title;
        if (modalDesc) modalDesc.textContent = item.description;
        if (modalImg) modalImg.src = item.image;

        if (modalResp) {
            modalResp.innerHTML = '';
            item.responsibilities.forEach(respText => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${respText}`;
                modalResp.appendChild(li);
            });
        }

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // ---------------- PHOTO LIGHTBOX ----------------
    const viewerModal = document.getElementById('imageViewerModal');
    const expandedImg = document.getElementById('expandedImage');
    const closeViewerBtn = document.getElementById('closeViewerBtn');
    const allImages = document.querySelectorAll('.clickable-image');

    allImages.forEach((img) => {
        img.addEventListener('click', () => {
            if (viewerModal && expandedImg) {
                expandedImg.src = img.src;
                viewerModal.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeViewerBtn && viewerModal) {
        closeViewerBtn.addEventListener('click', () => {
            viewerModal.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    }

    if (viewerModal) {
        viewerModal.addEventListener('click', (e) => {
            if (e.target === viewerModal) {
                viewerModal.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        });
    }
});