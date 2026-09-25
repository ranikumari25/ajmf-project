const fs = require('fs');

let css = fs.readFileSync('mission.css', 'utf8');

const targetBlockStart = '/* ================= HERO SECTION ================= */';
const targetBlockEnd = '/* ================= FOUNDER SECTION ================= */';

const startIndex = css.indexOf(targetBlockStart);
const endIndex = css.indexOf(targetBlockEnd);

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find CSS markers in mission.css', { startIndex, endIndex });
    process.exit(1);
}

const replacementCss = `/* ================= HERO SECTION ================= */
.hero {
    position: relative;
    width: 100%;
    min-height: 500px;
    background: linear-gradient(135deg, #eef5ff 0%, #f9f5ef 55%, #ffffff 100%);
    padding: 60px 0 70px 0;
    margin: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-botanical-topleft {
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    height: auto;
    opacity: 0.18;
    pointer-events: none;
    z-index: 1;
}

.hero-container {
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.hero-content {
    flex: 0 0 48%;
    max-width: 580px;
    padding-left: 0 !important;
}

.hero-tagline-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}

.hero-tagline-wrapper .tag-dash {
    display: inline-block;
    width: 22px;
    height: 3px;
    background-color: #ea580c;
    border-radius: 2px;
}

.hero-subtitle {
    color: #ea580c !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    letter-spacing: 1.5px !important;
    text-transform: uppercase !important;
    display: inline-block !important;
    margin: 0 !important;
}

.hero-content h1 {
    font-family: 'Playfair Display', serif !important;
    font-size: 48px !important;
    color: #0b1f44 !important;
    font-weight: 700 !important;
    line-height: 1.18 !important;
    margin: 12px 0 20px 0 !important;
    text-shadow: none !important;
}

.hero-content h1 .highlight-orange,
.hero-content h1 span {
    font-family: 'Playfair Display', serif !important;
    color: #ea580c !important;
    font-weight: 700 !important;
}

.hero-content p {
    font-family: 'Poppins', sans-serif !important;
    color: #475569 !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.65 !important;
    margin-bottom: 32px !important;
    max-width: 520px !important;
    text-shadow: none !important;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

.btn-primary {
    background: #ea580c !important;
    color: #ffffff !important;
    padding: 14px 32px !important;
    border-radius: 50px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 10px !important;
    box-shadow: 0 6px 20px rgba(234, 88, 12, 0.3) !important;
    transition: all 0.3s ease !important;
}

.btn-primary:hover {
    background: #c94a07 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 25px rgba(234, 88, 12, 0.4) !important;
}

.hero-image-wrapper {
    flex: 0 0 50%;
    max-width: 50%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
}

.hero-main-img {
    width: 100%;
    height: 100%;
    max-height: 440px;
    object-fit: cover;
    display: block;
}

/* ================= SECTION TITLE GENERAL ================= */
.section-title {
    margin-top: 0 !important;
    text-align: center;
    margin-bottom: 45px !important;
}

.section-tag-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 8px;
}

.section-tag-wrapper .tag-dash {
    display: inline-block;
    width: 18px;
    height: 2.5px;
    background-color: #ea580c;
    border-radius: 2px;
}

.section-tag {
    color: #ea580c !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    letter-spacing: 1.5px !important;
    text-transform: uppercase !important;
}

/* ================= MISSION & VISION ================= */
.mission-vision {
    background: #faf8f6 !important;
    width: 100%;
    padding: 85px 0 95px 0 !important;
    position: relative;
    z-index: 1;
    border-radius: 0 !important;
    overflow: hidden;
}

.mission-vision .section-title {
    margin-top: 0 !important;
}

.mission-vision .section-title h2 {
    font-family: 'Playfair Display', serif !important;
    font-size: 38px !important;
    color: #0f172a !important;
    font-weight: 700 !important;
    margin: 8px 0 10px 0 !important;
}

.mission-vision .section-title p {
    font-family: 'Poppins', sans-serif !important;
    color: #64748b !important;
    font-size: 16px !important;
    margin: 0 !important;
}

.mv-container-outer {
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;
    position: relative;
}

.mv-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1020px;
    margin: 0 auto;
}

.mv-card {
    background: #ffffff !important;
    border: 1px solid #f1f5f9 !important;
    border-radius: 16px !important;
    padding: 34px 30px !important;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.mv-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.07) !important;
}

.mv-card-inner {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.mv-icon {
    background: #fff3ea !important;
    color: #ea580c !important;
    width: 56px !important;
    height: 56px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 22px !important;
    flex-shrink: 0 !important;
}

.mv-card-body {
    flex: 1;
}

.mv-card-body h3 {
    font-family: 'Poppins', sans-serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    margin: 0 0 10px 0 !important;
}

.mv-card-body p {
    font-family: 'Poppins', sans-serif !important;
    color: #475569 !important;
    font-size: 14.5px !important;
    line-height: 1.65 !important;
    margin: 0 !important;
}

/* Right side accents matching reference image */
.mv-right-accents {
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 180px;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
}

.mv-script-text {
    font-family: 'Caveat', cursive !important;
    color: #d97706 !important;
    font-size: 27px !important;
    line-height: 1.15 !important;
    transform: rotate(-7deg);
    margin-bottom: 12px;
    opacity: 0.9;
    text-align: center;
}

.mv-botanical-right {
    width: 160px;
    height: auto;
    opacity: 0.35;
}

/* Responsive Overrides Scoped to Hero and Mission & Vision */
@media screen and (max-width: 1180px) {
    .mv-right-accents {
        display: none;
    }
    .mv-wrapper {
        max-width: 100%;
    }
}

@media screen and (max-width: 992px) {
    .hero-container {
        flex-direction: column;
        text-align: left;
    }
    .hero-content {
        flex: 1 1 100%;
        max-width: 100%;
    }
    .hero-image-wrapper {
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%;
    }
    .mv-wrapper {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 767px) {
    .hero {
        padding: 40px 0;
    }
    .hero-content h1 {
        font-size: 32px !important;
    }
    .hero-content p {
        font-size: 15px !important;
    }
    .mission-vision .section-title h2 {
        font-size: 28px !important;
    }
}

`;

const newCss = css.slice(0, startIndex) + replacementCss + css.slice(endIndex);
fs.writeFileSync('mission.css', newCss, 'utf8');
console.log('Successfully updated mission.css!');
