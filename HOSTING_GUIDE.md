# Osman Group Website GitHub Pages Hosting Tutorial

Follow this guide to upload and host the Osman Group website on GitHub Pages. Visitors will not need to open GitHub. They will see the website through a normal public website link.

Example live link:

```txt
https://your-username.github.io/osman-group-website/
```

---

## Part 1: Preview the website locally in VS Code

### Step 1: Open the project folder

1. Open VS Code.
2. Click **File → Open Folder**.
3. Select the `osman-group-website` folder.

### Step 2: Install Live Server

1. Open **Extensions** from the left sidebar in VS Code.
2. Search for `Live Server`.
3. Install the **Live Server** extension by Ritwick Dey.

### Step 3: Preview the website

1. Open the `index.html` file.
2. Right click inside the file.
3. Click **Open with Live Server**.
4. The website will open in your browser.

---

## Part 2: Edit website content

Most website content can be edited in this file:

```txt
assets/js/content.js
```

You can update:

- Ventures
- Products
- Features
- Phone number
- WhatsApp number
- Email address
- Office address
- Website URL
- Social media links

Example:

```js
contact: {
  phone: "+880 1712-345678",
  whatsapp: "+8801712345678",
  email: "info@osmangroup.com",
  address: "Head Office: Savar, Dhaka, Bangladesh",
  website: "www.osmangroup.com"
}
```

Only change the text inside quotation marks unless you know JavaScript.

---

## Part 3: Create a GitHub repository

### Step 1: Log in to GitHub

Go to:

```txt
https://github.com
```

Log in to your GitHub account. If you do not have an account, create a free account.

### Step 2: Create a new repository

1. Click the `+` button at the top-right of GitHub.
2. Select **New repository**.
3. Enter a repository name, for example:

```txt
osman-group-website
```

4. Keep the repository **Public**.
5. Click **Create repository**.

---

## Part 4A: Easy method — upload files through the browser

Use this method if you do not want to use Git commands.

1. Open your GitHub repository.
2. Click **Add file → Upload files**.
3. Drag and drop all files and folders from inside the `osman-group-website` folder:
   - `index.html`
   - `assets` folder
   - `README.md`
   - `.nojekyll`
   - `HOSTING_GUIDE.md`
4. Click **Commit changes**.

Important: Upload the files inside the project folder, not the outer folder itself. The `index.html` file must be in the repository root.

---

## Part 4B: Professional method — upload with VS Code and Git

### Step 1: Check if Git is installed

Open a terminal and run:

```bash
git --version
```

If Git is not installed, download it from:

```txt
https://git-scm.com/downloads
```

### Step 2: Open the VS Code terminal

In VS Code, click:

```txt
Terminal → New Terminal
```

### Step 3: Initialize Git

```bash
git init
```

### Step 4: Add files and create a commit

```bash
git add .
git commit -m "Initial Osman Group website"
```

### Step 5: Connect the GitHub repository

Use the repository URL from your GitHub repository page:

```bash
git remote add origin https://github.com/YOUR-USERNAME/osman-group-website.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 6: Push the website to GitHub

```bash
git branch -M main
git push -u origin main
```

---

## Part 5: Enable GitHub Pages

1. Open the GitHub repository.
2. Go to the **Settings** tab.
3. Click **Pages** from the left sidebar.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Click **Save**.

After a few minutes, GitHub will show your live website URL. Example:

```txt
https://your-username.github.io/osman-group-website/
```

Anyone can open this link like a normal website. GitHub login is not required.

---

## Part 6: Update the website later

After editing the website, upload or push the updated files again.

### If you use the browser upload method

1. Upload the changed files.
2. Click **Commit changes**.

### If you use the Git method

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Pages usually updates within 1–3 minutes.

---

## Part 7: Connect a custom domain

If you own a domain, for example:

```txt
www.osmangroup.com
```

You can connect it from:

```txt
Repository → Settings → Pages → Custom domain
```

For a `www` domain, your domain provider usually needs a CNAME record like this:

```txt
www → your-username.github.io
```

For a root domain, follow GitHub Pages' official DNS instructions.

---

## Common problems and fixes

### Website is not live

- Make sure the repository is public.
- Make sure GitHub Pages is enabled.
- Make sure `index.html` is in the repository root.
- Wait 2–5 minutes after enabling GitHub Pages.

### Design looks broken

- Make sure the `assets` folder was uploaded correctly.
- Make sure file and folder names were not changed.

### Logo is not showing

Check that these files exist:

```txt
assets/images/osman-logo-full.png
assets/images/osman-logo-mark.png
```

### Contact form is not submitting to a database

This is a static website. The contact form opens the visitor's email application. If you want real form submissions later, connect a service like Formspree, Netlify Forms, Google Forms, or a custom backend API.

---

## Final checklist

- [ ] `index.html` is in the repository root
- [ ] `assets` folder is uploaded
- [ ] GitHub Pages is enabled
- [ ] Website URL opens correctly
- [ ] Phone, WhatsApp and email are updated
- [ ] Social media links are updated
- [ ] Mobile view is checked
