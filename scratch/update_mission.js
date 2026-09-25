const fs = require('fs');

let html = fs.readFileSync('mission.html', 'utf8');

const oldHero = `<section class="hero">

    <div class="hero-container">

        <div class="hero-image">
            <img src="missionstudent.jpg" alt="Empowering Youth, Transforming Lives">
        </div>

        <div class="hero-content">

            <span class="hero-subtitle" data-i18n="hero_subtitle">
                BUILDING SKILLS. BUILDING FUTURES.
            </span>

            <h1 data-i18n="hero_title_empowering">
                Empowering Youth,
                <span>Transforming Lives</span>
            </h1>

            <p data-i18n="hero_desc_empowering">
                We create opportunities through education,
                skill development and holistic growth.
                Together, we build a stronger and brighter tomorrow.
            </p>

            <div class="hero-buttons">

                <a href="programs.html" class="btn-primary" data-i18n="explore_programs">
                    Explore Programs
                    <i class="fas fa-arrow-right"></i>
                </a>

            </div>

        </div>

    </div>

</section>`;

const newHero = `<section class="hero">
    <!-- Top-Left Botanical Accent Watermark -->
    <img src="images-photo/12_left_botanical_decor.png" alt="" class="hero-botanical-topleft" />

    <div class="hero-container">

        <div class="hero-content">

            <div class="hero-tagline-wrapper">
                <span class="tag-dash"></span>
                <span class="hero-subtitle" data-i18n="hero_subtitle">
                    BUILDING SKILLS. BUILDING FUTURES.
                </span>
            </div>

            <h1 data-i18n="hero_title_empowering">
                Empowering Youth,<br>
                <span class="highlight-orange">Transforming Lives</span>
            </h1>

            <p data-i18n="hero_desc_empowering">
                We create opportunities through education,
                skill development and holistic growth.
                Together, we build a stronger and brighter tomorrow.
            </p>

            <div class="hero-buttons">

                <a href="programs.html" class="btn-primary" data-i18n="explore_programs">
                    <span>Explore Programs</span>
                    <i class="fas fa-arrow-right"></i>
                </a>

            </div>

        </div>

        <div class="hero-image-wrapper">
            <img src="missionstudent.jpg" alt="Empowering Youth, Transforming Lives" class="hero-main-img">
        </div>

    </div>

</section>`;

const oldMV = `<section class="mission-vision">

    <div class="section-title">

        <h2 data-i18n="mission_title">Our Mission & Vision</h2>

        <p data-i18n="mission_desc">Guiding underserved youth toward self-reliance and tech careers.</p>

    </div>

    <div class="mv-wrapper">

        <div class="mv-card">
            <div class="mv-card-header">
                <div class="mv-icon">
                    <i class="fa-solid fa-bullseye"></i>
                </div>
                <h3 data-i18n="mission_card_title">Mission</h3>
            </div>
            <div class="mv-content">
                <p data-i18n="mission_card_text">
                    To empower young minds through quality education,
                    skill development and holistic support, enabling them to
                    become confident, independent and responsible citizens.
                </p>
            </div>
        </div>

        <div class="mv-card">
            <div class="mv-card-header">
                <div class="mv-icon">
                    <i class="fa-regular fa-eye"></i>
                </div>
                <h3 data-i18n="vision_card_title">Vision</h3>
            </div>
            <div class="mv-content">
                <p data-i18n="vision_card_text">
                    To be a leading foundation that creates
                    sustainable impact by transforming lives and
                    building a skilled, empowered and equitable society.
                </p>
            </div>
        </div>

    </div>

</section>`;

const newMV = `<section class="mission-vision" id="mission">

    <div class="section-title">

        <div class="section-tag-wrapper">
            <span class="tag-dash"></span>
            <span class="section-tag" data-i18n="mission_tag">OUR MISSION & VISION</span>
            <span class="tag-dash"></span>
        </div>

        <h2 data-i18n="mission_title">Our Mission & Vision</h2>

        <p data-i18n="mission_desc">Guiding underserved youth toward self-reliance and tech careers.</p>

    </div>

    <div class="mv-container-outer">
        <div class="mv-wrapper">

            <div class="mv-card">
                <div class="mv-card-inner">
                    <div class="mv-icon">
                        <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <div class="mv-card-body">
                        <h3 data-i18n="mission_card_title">Our Mission</h3>
                        <p data-i18n="mission_card_text">
                            To provide quality education, holistic development and equal opportunities to underprivileged children, enabling them to build a better future and become responsible, compassionate citizens.
                        </p>
                    </div>
                </div>
            </div>

            <div class="mv-card">
                <div class="mv-card-inner">
                    <div class="mv-icon">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div class="mv-card-body">
                        <h3 data-i18n="vision_card_title">Our Vision</h3>
                        <p data-i18n="vision_card_text">
                            A society where every child has access to quality education, feels valued, and is empowered to achieve their dreams and create a positive impact in the world.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <!-- RIGHT SIDE DECORATIVE ACCENTS (MATCHING REFERENCE IMAGE) -->
        <div class="mv-right-accents">
            <div class="mv-script-text">
                Together<br>for a better<br>tomorrow
            </div>
            <img src="images-photo/13_right_botanical_decor.png" alt="" class="mv-botanical-right" />
        </div>
    </div>

</section>`;

const normHtml = html.replace(/\r\n/g, '\n');
const normOldHero = oldHero.replace(/\r\n/g, '\n');
const normOldMV = oldMV.replace(/\r\n/g, '\n');

if (!normHtml.includes(normOldHero)) {
    console.error('Could not find normOldHero in mission.html');
}
if (!normHtml.includes(normOldMV)) {
    console.error('Could not find normOldMV in mission.html');
}

let updated = normHtml.replace(normOldHero, newHero).replace(normOldMV, newMV);
fs.writeFileSync('mission.html', updated.replace(/\n/g, '\r\n'), 'utf8');
console.log('Successfully updated mission.html!');
