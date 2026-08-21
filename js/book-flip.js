// 3D Notebook/Book Page-Turn Animation System & Lightbox Modal for Facility Cards
document.addEventListener('DOMContentLoaded', function () {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cardsData = [
        {
            // CARD 1: UNCHANGED as requested
            images: ['confrenceroom.jpeg', 'class.jpeg', 'staffroom.jpeg'],
            alts: ['Training & Conference Room', 'Modern Classroom', 'Staff Conference Room'],
            stagger: 0
        },
        {
            // CARD 2: Student Accommodation
            images: ['dom1.jpeg', 'dom2.jpeg', 'dom3.jpeg'],
            alts: ['Student Dormitory Accommodation', 'Residential Dormitory Room', 'Hostel Accommodation Space'],
            stagger: 600
        },
        {
            // CARD 3: Kitchen & Dining
            images: ['images-photo/breakfast-1.jpeg', 'images-photo/lunch-1.jpeg', 'images-photo/Dinner-1.jpeg'],
            alts: ['Student Community Breakfast', 'Campus Dining Hall Lunch', 'Residential Dining Area'],
            stagger: 1200
        },
        {
            // CARD 4: UNCHANGED as requested
            images: ['library.jpeg', 'reception.jpeg', 'staff.jpeg'],
            alts: ['Central Campus Library', 'Main Administrative Reception', 'Staff & Faculty Center'],
            stagger: 1800
        },
        {
            // CARD 5: Eco-Friendly Infra
            images: ['ecofriendly1.jpeg', 'ecofriendly2.jpeg', 'ecofriendly3.jpeg'],
            alts: ['Solar Power Generation', 'Eco-Friendly Green Campus', 'Sustainable Solar Architecture'],
            stagger: 2400
        },
        {
            // CARD 6: Sports & Recreation
            images: ['images-photo/Excercise1.jpeg', 'images-photo/Excercise2.jpeg', 'images/kho-kho.jpeg'],
            alts: ['Morning Fitness & Yoga Sessions', 'Outdoor Physical Fitness', 'Sports Field & Outdoor Games'],
            stagger: 3000
        }
    ];

    // ================= LIGHTBOX MODAL CONTROLLER =================
    const lightboxModal = document.getElementById('facilityLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxOverlay = document.getElementById('lightboxOverlay');

    function openLightbox(src, captionText) {
        if (!lightboxModal || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = captionText || 'Facility Preview';
        if (lightboxCaption) {
            lightboxCaption.textContent = captionText || '';
        }
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ================= 3D BOOK PAGE-FLIP ENGINE =================
    const wrappers = document.querySelectorAll('.card-img-wrapper.book-flip-wrapper');

    wrappers.forEach((wrapper, index) => {
        const data = cardsData[index];
        if (!data) return;

        let currentIndex = 0;
        const images = data.images;
        const alts = data.alts;

        const baseImg = wrapper.querySelector('.base-img');
        const flipper = wrapper.querySelector('.book-page-flipper');
        const frontImg = wrapper.querySelector('.page-front img');
        const backImg = wrapper.querySelector('.page-back img');
        const dots = wrapper.querySelectorAll('.book-page-dots .dot');

        function updateDots(activeIdx) {
            dots.forEach((dot, dIdx) => {
                if (dIdx === activeIdx) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function turnPage() {
            const nextIndex = (currentIndex + 1) % images.length;

            // 1. Prepare Base image with next photograph
            baseImg.src = images[nextIndex];
            baseImg.alt = alts[nextIndex];

            // 2. Prepare Back face of the flipping page with next photograph
            backImg.src = images[nextIndex];
            backImg.alt = alts[nextIndex];

            // 3. Trigger 3D Page Flip animation
            if (prefersReducedMotion) {
                frontImg.src = images[nextIndex];
                frontImg.alt = alts[nextIndex];
                currentIndex = nextIndex;
                updateDots(currentIndex);
            } else {
                flipper.classList.add('flipping');

                setTimeout(() => {
                    // 4. After 850ms flip animation finishes, reset flipper silently
                    flipper.style.transition = 'none';
                    frontImg.src = images[nextIndex];
                    frontImg.alt = alts[nextIndex];
                    flipper.classList.remove('flipping');

                    // Force browser reflow before restoring transition
                    void flipper.offsetHeight;
                    flipper.style.transition = '';

                    currentIndex = nextIndex;
                    updateDots(currentIndex);
                }, 850);
            }
        }

        // Click handler on card image wrapper: Opens current image in lightbox without interrupting background flip loop
        wrapper.addEventListener('click', function (e) {
            e.stopPropagation();
            const currentSrc = images[currentIndex];
            const currentAlt = alts[currentIndex];
            openLightbox(currentSrc, currentAlt);
        });

        // Start staggered interval for realistic natural flipping sequence
        setTimeout(() => {
            setInterval(turnPage, 4000);
        }, data.stagger);
    });
});
