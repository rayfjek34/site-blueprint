# 🧱 Personal Portfolio Template

A clean, production-ready static site template — extracted from a real portfolio and
de-branded for reuse. No build tools. No backend. Runs directly on GitHub Pages.

---

## 📁 Folder Structure

```
/
├── index.html                  ← Entry point (don't edit content here)
├── robots.txt
├── tahlogo.svg                 ← Replace with your own SVG logo
│
├── config/
│   └── site.config.js          ← ✅ ALL CONTENT LIVES HERE
│
├── styles/
│   ├── tokens.css              ← Design tokens (colours, spacing, type, radius, shadows)
│   ├── base.css                ← Reset + layout primitives + reusable components
│   └── components.css          ← Navbar, Hero, all sections, Footer, Responsive
│
├── scripts/
│   └── main.js                 ← Reads config, renders DOM, wires interactivity
│
└── assets/
    ├── profile.jpg             ← Hero photo (circular)
    ├── photo.jpg               ← About section photo
    ├── cv.pdf                  ← Downloadable CV
    ├── favicon-96x96.png
    └── apple-icon-precomposed.png
```

---

## ⚡ Quickstart

```bash
# 1. Clone or copy this folder
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 2. Open index.html directly in a browser — no server needed
open index.html

# 3. Edit config/site.config.js to add your content
# 4. Push to GitHub — done
```

---

## 🎨 Customisation Guide

### Step 1 — Identity & Content
Open `config/site.config.js` and fill in every field.
The entire site is driven from this one file. You never need to touch HTML.

```js
identity: {
  name:       'Your Name',
  nameAccent: 'Surname',         // rendered in accent colour
  tagline:    'I build things. Here\'s the evidence.',
  role:       'BSc Robotics — Polytechnic University of X',
  email:      'you@email.com',
  profileImg: 'assets/profile.jpg',
  ...
}
```

### Step 2 — Logo
Replace `tahlogo.svg` with your own SVG file.
The logo is referenced in `identity.logo` inside the config.
It renders in the navbar and footer; the JS applies colour-inversion CSS for dark/light themes.

### Step 3 — Colours
Open `styles/tokens.css`. Change the palette block:

```css
:root {
  --color-primary:     #42BD80;   /* your brand colour */
  --color-bg:          #091A12;   /* page background   */
  --color-primary-mid: #28714D;   /* gradient anchor   */
  ...
}
```
One change here propagates everywhere — buttons, badges, borders, tags, accents.

### Step 4 — Fonts
In `styles/tokens.css`, swap the `@import` URL and update:
```css
--font-display: 'Your Display Font', sans-serif;
--font-body:    'Your Body Font', sans-serif;
```

### Step 5 — Sections
Toggle sections on/off in the config:
```js
sections: {
  hero:       true,
  about:      true,
  experience: false,  ← hidden
  education:  true,
  projects:   true,
  skills:     true,
  contact:    true,
}
```

### Step 6 — Contact form (Formspree)
1. Create a free account at https://formspree.io
2. Create a new form → copy your endpoint ID
3. Paste it in the config:
```js
contact: {
  formspreeEndpoint: 'https://formspree.io/f/YOUR_ID',
}
```
No backend. No server. Submissions land in your email.

### Step 7 — Background
The gradient is a CSS variable in `tokens.css`:
```css
--bg-gradient: radial-gradient(
  ellipse 110% 80% at 50% -10%,
  var(--color-primary-mid) 0%,
  var(--color-bg-deep) 55%,
  var(--color-bg) 100%
);
```
To use an image instead, replace `.bg-wrap` in `components.css`:
```css
.bg-wrap {
  background: url('assets/bg.jpg') center/cover no-repeat fixed;
}
```

---

## 🚀 GitHub Pages Deployment

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. Your site is live at `https://your-username.github.io/repo-name`

For a root domain site (`your-username.github.io`) the repo must be named exactly `your-username.github.io`.

---

## 📦 Adding Sections

To add a new section:

1. Add data to `config/site.config.js`
2. Write a `renderMySection()` function in `scripts/main.js`
3. Add it to the mount list inside `DOMContentLoaded`
4. Add a CSS block in `styles/components.css`
5. Add a nav entry in `config/site.config.js → nav.links`

---

## 🔗 Dependencies

- None. Zero npm packages, zero build tools.
- Google Fonts (loaded via CSS `@import` — swap or self-host freely)
- Formspree (contact form, free tier, no backend needed)

---

## ✅ Browser Support

All modern browsers. No IE. Uses:
- CSS custom properties (variables)
- IntersectionObserver
- Fetch API
- CSS `backdrop-filter` (graceful degradation without)
