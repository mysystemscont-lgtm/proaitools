# PRO TOOLS AI (`proaitools.shop`)
> Ultra-modern, high-converting, cyberpunk-clean e-commerce & subscription storefront for digital AI, design, video, and developer tools.

---

## 🚀 Overview
**PRO TOOLS AI** is built from the ground up for the domain **`proaitools.shop`**, using the exact tool catalog and pricing architecture inspired by `https://skytools.shop/`, elevated to an enterprise-grade dark & light mode SaaS aesthetic with rich interactive micro-animations.

---

## 🛠️ File Structure
```
C:\Users\user\.gemini\antigravity\scratch\pro-tools-ai\
├── index.html         # Main semantic, responsive HTML5 layout (All 8 core sections)
├── siteConfig.js      # Central configuration (WHATSAPP_NUMBER & SOCIAL_LINKS)
├── productsData.js    # Catalog of 24+ tools & super saver bundles with SVG icons
├── app.js             # Core JS controller (Live search, filters, modals, canvas, 3D tilt)
├── styles.css         # Cyberpunk SaaS styles, glowing borders, animations, custom scrollbars
├── favicon.svg        # Custom high-res geometric AI neural cube favicon
└── README.md          # Setup & configuration guide
```

---

## ⚡ Quick Start & Previewing
You can preview the website immediately:

### Option 1: Direct Browser Open
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Brave, Safari, Firefox).

### Option 2: Local HTTP Server (PowerShell / Terminal)
```powershell
cd C:\Users\user\.gemini\antigravity\scratch\pro-tools-ai
npx serve -l 3000
# or with Python:
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## ⚙️ How to Configure (Strict Rule Compliance)

### 1. Activating WhatsApp Checkout
Per project requirements, no live WhatsApp phone numbers are hardcoded anywhere in the codebase.
When you are ready to connect your WhatsApp number:
1. Open `siteConfig.js`.
2. Locate line 28:
   ```javascript
   WHATSAPP_NUMBER: "",
   ```
3. Enter your international phone number without `+` or `-` (e.g., `"1234567890"`):
   ```javascript
   WHATSAPP_NUMBER: "1234567890",
   ```
4. Save the file. All "Order Now" and "Buy via WhatsApp" buttons will immediately route customers directly to your WhatsApp with pre-filled order messages.

### 2. Updating Social Media Links
In `siteConfig.js`:
```javascript
SOCIAL_LINKS: {
  whatsapp: "#",
  telegram: "#",
  discord: "#",
  twitter: "#",
  instagram: "#",
  youtube: "#",
  facebook: "#"
}
```
Replace any `#` with your live channel URLs when ready.

---

## 💎 Features & Design System
* **Brand Identity & Logo:** Custom SVG neural node & isometric cube logo with electric gradient branding.
* **Canvas Neural Mesh:** Real-time interactive background particle physics in the hero section.
* **3D Tilt Micro-Interactions:** Physics-based 3D perspective tilt on hover for all tool cards.
* **Instant Live Search:** Instant keyword search across tool names, categories, and feature bullets.
* **Category Filters:** Live pill tabs (*All Tools, AI & Writing, Graphic Design, Video & Audio, SEO & Marketing, Developer Tools, Mega Bundles*).
* **Quick View Modal:** Full feature breakdown, validity duration selector, and warranty guarantees.
* **Dark & Light Mode:** Obsidian slate `#070B14` default with smooth toggle to high-contrast clean light mode.
* **Infinite Testimonials Marquee:** Non-stop smooth marquee of verified creator & agency reviews.
* **Interactive FAQ Accordion:** Expandable answers for delivery times, warranty, and account types.
