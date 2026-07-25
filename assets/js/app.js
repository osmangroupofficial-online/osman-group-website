const data = window.OSMAN_SITE_CONTENT;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const makeLinkSafe = (value) => String(value || "#");

function renderStats() {
  const heroStats = $("#heroStats");
  if (!heroStats) return;

  heroStats.innerHTML = data.stats
    .map(
      (item) => `
        <div class="hero-stat">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </div>
      `
    )
    .join("");
}

function renderVentures() {
  const venturesGrid = $("#venturesGrid");
  const footerVentures = $("#footerVentures");

  if (venturesGrid) {
    venturesGrid.innerHTML = data.ventures
      .map(
        (venture, index) => `
          <article class="venture-card glass accent-${escapeHtml(venture.accent)}" data-animate="fade-up" style="--delay:${index * 90}ms">
            <div class="venture-card__icon" aria-hidden="true">${escapeHtml(venture.icon)}</div>
            <p class="venture-card__subtitle">${escapeHtml(venture.subtitle)}</p>
            <h3>${escapeHtml(venture.title)}</h3>
            <p>${escapeHtml(venture.description)}</p>
            <a href="#contact" class="card-link" aria-label="Contact about ${escapeHtml(venture.title)}">Explore More <span>→</span></a>
          </article>
        `
      )
      .join("");
  }

  if (footerVentures) {
    footerVentures.innerHTML = data.ventures
      .map((venture) => `<li><a href="#ventures">${escapeHtml(venture.title)}</a></li>`)
      .join("");
  }
}

function renderProducts() {
  const productsGrid = $("#productsGrid");
  if (!productsGrid) return;

  productsGrid.innerHTML = data.products
    .map(
      (product, index) => `
        <article class="product-card" data-animate="fade-up" style="--delay:${index * 45}ms">
          <div class="product-card__glow" aria-hidden="true"></div>
          <div class="product-card__icon" aria-hidden="true">${escapeHtml(product.icon)}</div>
          <span>${escapeHtml(product.category)}</span>
          <h3>${escapeHtml(product.name)}</h3>
        </article>
      `
    )
    .join("");
}

function renderFeatures() {
  const featuresGrid = $("#featuresGrid");
  if (!featuresGrid) return;

  featuresGrid.innerHTML = data.features
    .map(
      (feature, index) => `
        <article class="feature-card glass" data-animate="fade-up" style="--delay:${index * 80}ms">
          <div class="feature-card__icon" aria-hidden="true">${escapeHtml(feature.icon)}</div>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  const contactList = $("#contactList");
  const footerContact = $("#footerContact");
  const socialLinks = $("#socialLinks");
  const contact = data.contact;

  const websiteUrl = contact.website.startsWith("http") ? contact.website : `https://${contact.website}`;
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`;

  const contacts = [
    { icon: "☎", label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: "☘", label: "WhatsApp", value: contact.whatsapp, href: whatsappUrl },
    { icon: "✉", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "⌂", label: "Office Address", value: contact.address, href: "#contact" },
    { icon: "◎", label: "Website", value: contact.website, href: websiteUrl }
  ];

  if (contactList) {
    contactList.innerHTML = contacts
      .map(
        (item) => `
          <a class="contact-item glass" href="${makeLinkSafe(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            <span class="contact-item__icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
            <span>
              <strong>${escapeHtml(item.label)}</strong>
              <em>${escapeHtml(item.value)}</em>
            </span>
          </a>
        `
      )
      .join("");
  }

  if (footerContact) {
    footerContact.innerHTML = `
      <li><a href="tel:${contact.phone.replace(/\s/g, "")}">${escapeHtml(contact.phone)}</a></li>
      <li><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></li>
      <li>${escapeHtml(contact.address)}</li>
      <li><a href="${websiteUrl}" target="_blank" rel="noopener">${escapeHtml(contact.website)}</a></li>
    `;
  }

  if (socialLinks) {
    socialLinks.innerHTML = data.socials
      .map(
        (social) => `
          <a href="${makeLinkSafe(social.url)}" aria-label="${escapeHtml(social.name)}" ${social.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>
            ${escapeHtml(social.icon)}
          </a>
        `
      )
      .join("");
  }
}

function setupNavigation() {
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");
  const header = $("#siteHeader");
  const navLinks = $$(".nav-link");

  const closeMenu = () => {
    navMenu?.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  });

  const sections = navLinks
    .map((link) => $(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = $(`.nav-link[href="#${entry.target.id}"]`);
          active?.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupAnimations() {
  const animated = $$('[data-animate]');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animated.forEach((element) => revealObserver.observe(element));
}

function setupProgressAndTopButton() {
  const progress = $("#pageProgressBar");
  const backToTop = $("#backToTop");

  const update = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = height > 0 ? (scrollTop / height) * 100 : 0;
    if (progress) progress.style.width = `${percentage}%`;
    backToTop?.classList.toggle("show", scrollTop > 500);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const from = formData.get("from");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${from}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${data.contact.email}?subject=${subject}&body=${body}`;
  });
}

function init() {
  renderStats();
  renderVentures();
  renderProducts();
  renderFeatures();
  renderContact();
  setupNavigation();
  setupAnimations();
  setupProgressAndTopButton();
  setupContactForm();

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
