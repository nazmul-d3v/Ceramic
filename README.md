# 🏆 Heeds Ceramics — Heeds Ceramics Industries Ltd.

> **Bangladesh's Premier Ceramic & Vitrified Tiles Brand Website**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ceramic-eight-tan.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

---

## 🌐 Live Website

Experience the live interactive application deployed on Vercel:  
🔗 **[https://ceramic-eight-tan.vercel.app/](https://ceramic-eight-tan.vercel.app/)**

---

## 🏢 Brand Identity

- **Brand Name**: **Heeds Ceramics**
- **Company Name**: **Heeds Ceramics Industries Ltd. (হীডস সিরামিকস ইন্ডাস্ট্রিজ লিঃ)**
- **Official Logo**: Custom logo badge integrated across header, mobile drawer menu, and footer.

---

## ✨ Key Features

- **🌐 Bilingual Support (English & বাংলা)**: Instant dual-language toggle for all text elements across the entire website.
- **🚽 Orbit Sanitaryware & Water Closet Collection**: Integrated 16 high-resolution catalog products (Marvello, Lusaro, Arvento, Serenza, Fiorenzo, Cremona, Lucano, and Asiaro sets) with full technical specifications and dimensions.
- **📄 Direct E-Brochure PDF Download**: Embedded official 16-page `Orbit_Sanitaryware_Catalog.pdf` downloadable directly from the site hero, modal, and dedicated E-Brochure section.
- **🪄 AR Room Visualizer**: Interactive virtual studio allowing users to preview wall and floor tile choices in real-time across multiple room settings.
- **🛍️ Dynamic Product Catalog**: Instant search and tabbed filtering for Sanitaryware, Floor Tiles, Wall Tiles, Homogeneous Tiles, and Double-Charge Vitrified Slabs.
- **🧮 Smart Tile & Cost Calculator**: Built-in calculator computing total area (sq ft/m²), required box count (+10% waste), and total tiles needed.
- **📍 Showroom Locator**: Interactive showroom finder complete with contact details, opening hours, and direct Google Maps navigation.
- **💎 Ultra-Premium UI/UX Design**: Built with a sleek dark Royal Blue glassmorphism aesthetic based on the official logo, ambient glow lighting, micro-interactions, responsive navigation, and floating action triggers.

---

## 🛠️ Tech Stack

- **Markup & Structure**: HTML5 (Semantic elements, accessible tags)
- **Styling & Design System**: Custom Vanilla CSS3 (Design tokens, HSL color palettes, Glassmorphism, CSS Grid & Flexbox)
- **Logic & Interactions**: Vanilla JavaScript (ES6+, DOM Manipulation, Dynamic Filtering & Calculations)
- **Icons & Typography**: [FontAwesome 6.5](https://fontawesome.com/) & Google Fonts (*Cinzel*, *Outfit*, *Plus Jakarta Sans*)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Directory Structure

```text
Ceramic/
├── index.html                      # Main single-page web application
├── Orbit_Sanitaryware_Catalog.pdf  # Downloadable 16-page official PDF catalog
├── css/
│   └── styles.css                  # Premium CSS design system & component styles
├── js/
│   └── app.js                      # Interactive application logic & datasets
├── images/
│   ├── heeds_logo.png              # Official Heeds Ceramics brand logo
│   ├── hero.jpg                    # Hero section background asset
│   ├── sanitaryware/               # Rendered HD catalog page screenshots (1-16)
│   └── tiles/                      # High-resolution product & texture swatches
└── README.md                       # Project documentation
```

---

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nazmul-d3v/Ceramic.git
   cd Ceramic
   ```

2. **Run using local HTTP server**:
   - Using **Python 3**:
     ```bash
     python -m http.server 8080
     ```
   - Or using **Node.js (`npx serve`)**:
     ```bash
     npx serve .
     ```

3. **Open in Browser**:
   Navigate to `http://localhost:8080` in your web browser.

---

## ⚡ How to Deploy & Run on Vercel

You can deploy and run this project live on Vercel in two easy ways:

### Option 1: Automatic Deployment via GitHub Integration (Recommended)
1. Push your latest code changes to the `main` branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: update Heeds Ceramics website with Orbit Sanitaryware & PDF catalog"
   git push origin main
   ```
2. Connect your GitHub repository (`nazmul-d3v/Ceramic`) to [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect the static project and deploy it instantly.
4. Any new `git push` to `main` will automatically trigger a new production deployment.

### Option 2: Direct Deployment using Vercel CLI
You can deploy directly from your local terminal using `npx vercel`:

1. **Deploy Preview Build**:
   ```bash
   npx vercel
   ```
2. **Deploy directly to Production**:
   ```bash
   npx vercel --prod
   ```

---

## 📤 Git Commit & Push Commands

To stage, commit, and push all recent changes to GitHub:

```bash
# 1. Stage all new/modified files
git add .

# 2. Create a descriptive commit
git commit -m "feat: update site with Orbit Sanitaryware catalog & Vercel deployment guide"

# 3. Push to GitHub main branch
git push origin main
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
