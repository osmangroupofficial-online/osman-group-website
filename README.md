# Osman Group Professional Website

A fast, premium, mobile-responsive static website for **Osman Group** with a Royal Blue + Gold theme, glassmorphism cards, smooth animations, editable content, and GitHub Pages compatibility.

## ✅ What is included

- `index.html` — main website file
- `assets/css/styles.css` — all design, colors, responsive layout and animations
- `assets/js/content.js` — **easy editable content** for ventures, products, contact info and social links
- `assets/js/app.js` — website interactivity
- `assets/images/` — logo, favicon, hero image and social preview image
- `.nojekyll` — keeps GitHub Pages simple for static hosting
- `HOSTING_GUIDE.md` — English GitHub Pages hosting tutorial

## ✏️ How to edit website content

Open this file in VS Code:

```txt
assets/js/content.js
```

Then update text inside quotes only. Example:

```js
contact: {
  phone: "+880 1712-345678",
  whatsapp: "+8801712345678",
  email: "info@osmangroup.com",
  address: "Head Office: Savar, Dhaka, Bangladesh",
  website: "www.osmangroup.com"
}
```

You can edit:

- Company stats
- Ventures
- Product list
- Why Choose Us features
- Phone / WhatsApp / Email / Address / Website
- Social media links

## 🎨 How to change colors

Open:

```txt
assets/css/styles.css
```

At the top, update the `:root` color variables:

```css
--royal-900: #06152b;
--gold-500: #d6a33b;
--gold-400: #f2c96a;
```

## 🖼️ How to replace logo or hero image

Replace files inside:

```txt
assets/images/
```

Important files:

- `osman-logo-mark.png` — small logo mark for navbar/footer
- `osman-logo-full.png` — full logo for hero section
- `hero-building.webp` — premium hero background image
- `favicon.png` — browser tab icon

Keep the same file names if you do not want to edit the code.

## 🚀 GitHub Pages hosting

Full step-by-step tutorial is in:

```txt
HOSTING_GUIDE.md
```

Short version:

1. Create a GitHub repository.
2. Upload all website files.
3. Go to **Settings → Pages**.
4. Source: **Deploy from a branch**.
5. Branch: **main**, Folder: **/root**.
6. Save.
7. Your website will be live at:

```txt
https://your-username.github.io/repository-name/
```

Visitors do **not** need to enter GitHub. It will open like a normal website.

## 💻 Local preview in VS Code

Option 1: Open `index.html` directly in browser.

Option 2: Use VS Code Live Server extension:

1. Install **Live Server** extension in VS Code.
2. Right click `index.html`.
3. Click **Open with Live Server**.

## 📌 Notes

This is a static website. The contact form opens the visitor's email app using `mailto:`. If you want a real backend form later, you can connect Formspree, Netlify Forms, Google Forms, or your own server API.
