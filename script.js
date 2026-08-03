
/**
 * DATA DRIVEN SCHOOLS — RENDER Y FUNCIONES
 * El contenido se carga desde content.js
 */
(function () {
  "use strict";

  const data = window.DDS_CONTENT;
  if (!data) {
    console.error("No se encontró DDS_CONTENT. Revisa que content.js cargue antes que script.js.");
    return;
  }

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[char]));

  function setText(selector, value) {
    const node = $(selector);
    if (node) node.textContent = value || "";
  }

  function renderNavigation() {
    const brand = $(".brand");
    const logo = $("#brand-logo");
    const fallback = $("#brand-fallback");

    if (data.site.showLogoImage && data.site.logoPath) {
      logo.src = data.site.logoPath;
      logo.alt = data.site.name;
      logo.hidden = false;
      fallback.hidden = true;
    } else {
      logo.hidden = true;
      fallback.hidden = false;
      fallback.innerHTML = `<strong>${escapeHtml(data.site.name)}</strong><span>${escapeHtml(data.site.byline)}</span>`;
    }

    $("#nav-links").innerHTML = data.navigation.map(item =>
      `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
    ).join("");

    $("#footer-nav").innerHTML = data.navigation.map(item =>
      `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
    ).join("");

    $("#header-cta").textContent = "Conversemos";
    $("#header-cta").href = "#contacto";
  }

  function renderHero() {
    setText("#hero-eyebrow", data.hero.eyebrow);
    setText("#hero-title", data.hero.title);
    setText("#hero-text", data.hero.text);
    $("#hero-primary").textContent = data.hero.primaryCta.label;
    $("#hero-primary").href = data.hero.primaryCta.href;
    $("#hero-secondary").textContent = data.hero.secondaryCta.label;
    $("#hero-secondary").href = data.hero.secondaryCta.href;

    $("#hero-cycle").innerHTML = data.dataDriven.cycle.slice(0, 4).map((item, i) =>
      `<div><span>${String(i + 1).padStart(2, "0")}</span>${escapeHtml(item)}</div>`
    ).join("");
  }

  function renderProblem() {
    setText("#problem-title", data.problem.title);
    setText("#problem-text", data.problem.text);
    $("#problem-questions").innerHTML = data.problem.questions.map(q =>
      `<div class="question-card">${escapeHtml(q)}</div>`
    ).join("");
  }

  function renderDataDriven() {
    setText("#data-title", data.dataDriven.title);
    setText("#data-text", data.dataDriven.text);
    setText("#data-definition", data.dataDriven.definition);
    $("#principles").innerHTML = data.dataDriven.principles.map(item =>
      `<div class="principle"><strong>${escapeHtml(item.label)}</strong>${escapeHtml(item.text)}</div>`
    ).join("");

    $("#cycle").innerHTML = data.dataDriven.cycle.map((item, index) => `
      <div class="cycle-item">
        <span>${escapeHtml(item)}</span>
        ${index < data.dataDriven.cycle.length - 1 ? '<span class="cycle-arrow" aria-hidden="true">→</span>' : ""}
      </div>
    `).join("");
  }

  function renderWhatWeDo() {
    setText("#what-title", data.whatWeDo.title);
    setText("#what-intro", data.whatWeDo.intro);
    $("#what-grid").innerHTML = data.whatWeDo.items.map(item => `
      <article class="feature-card">
        <div class="feature-number">${escapeHtml(item.icon)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }

  function renderDimensions() {
    setText("#dimensions-title", data.dimensions.title);
    setText("#dimensions-intro", data.dimensions.intro);
    $("#dimensions-grid").innerHTML = data.dimensions.items.map(item => `
      <article class="dimension-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="subtitle">${escapeHtml(item.subtitle)}</p>
        <p>${escapeHtml(item.text)}</p>
        <ul class="clean-list">${item.services.map(service => `<li>${escapeHtml(service)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  function renderAudiences() {
    setText("#audiences-title", data.audiences.title);
    setText("#audiences-intro", data.audiences.intro);
    $("#audience-grid").innerHTML = data.audiences.items.map(item => `
      <article class="audience-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <ul class="clean-list">${item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        <a class="btn btn-secondary" href="#contacto">${escapeHtml(item.cta)}</a>
      </article>
    `).join("");
  }

  function renderProcess() {
    setText("#process-title", data.process.title);
    setText("#process-text", data.process.text);
    $("#process-row").innerHTML = data.process.steps.map(step =>
      `<div class="process-step">${escapeHtml(step)}</div>`
    ).join("");
  }

  function renderTraining() {
    setText("#training-title", data.training.title);
    setText("#training-intro", data.training.intro);
    setText("#training-promise", data.training.promise);

    $("#training-grid").innerHTML = data.training.featured.map(item => `
      <article class="training-card">
        <span class="audience-tag">${escapeHtml(item.audience)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="question">${escapeHtml(item.question)}</p>
        <p class="transformation"><strong>Qué transforma:</strong> ${escapeHtml(item.transformation)}</p>
        <h4>Qué se lleva el equipo</h4>
        <ul class="clean-list">${item.takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
        <a class="btn btn-secondary" href="#contacto">Lleva esta experiencia a tu institución</a>
      </article>
    `).join("");

    $("#routes-grid").innerHTML = data.training.routes.map(route => `
      <article class="route-card">
        <h3>${escapeHtml(route.title)}</h3>
        <ul class="clean-list">${route.topics.map(topic => `<li>${escapeHtml(topic)}</li>`).join("")}</ul>
      </article>
    `).join("");

    $("#formats-grid").innerHTML = data.training.formats.map(format => `
      <article class="format-card">
        <h3>${escapeHtml(format.title)}</h3>
        <p class="subtitle">${escapeHtml(format.subtitle)}</p>
        <p>${escapeHtml(format.text)}</p>
      </article>
    `).join("");
  }

  function renderIntelligence() {
    setText("#intelligence-title", data.intelligence.title);
    setText("#intelligence-text", data.intelligence.text);
    setText("#intelligence-quote", data.intelligence.quote);
  }

  function renderCases() {
    const section = $("#casos");
    section.hidden = !data.cases.show;
    if (!data.cases.show) return;
    setText("#cases-title", data.cases.title);
    setText("#cases-intro", data.cases.intro);
    $("#cases-grid").innerHTML = data.cases.items.map(item => `
      <article class="case-card">
        <span class="tag">${escapeHtml(item.tag)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }

  function renderTestimonials() {
    const section = $("#testimonios");
    section.hidden = !data.testimonials.show;
    if (!data.testimonials.show) return;
    setText("#testimonials-title", data.testimonials.title);
    $("#testimonial-grid").innerHTML = data.testimonials.items.map(item => `
      <article class="testimonial-card">
        <blockquote>“${escapeHtml(item.quote)}”</blockquote>
        <div class="person"><strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(item.role)}</div>
      </article>
    `).join("");
  }

  function renderPhilosophy() {
    const section = $("#filosofia");
    section.hidden = !data.philosophy.show;
    if (!data.philosophy.show) return;
    setText("#philosophy-title", data.philosophy.title);
    setText("#philosophy-text", data.philosophy.text);
    $("#philosophy-cloud").innerHTML = data.philosophy.approaches.map(item =>
      `<span class="philosophy-chip">${escapeHtml(item)}</span>`
    ).join("");
    setText("#philosophy-cta", data.philosophy.cta);
  }

  function renderAbout() {
    setText("#about-title", data.about.title);
    setText("#about-name", data.about.name);
    setText("#about-role", data.about.role);
    setText("#about-text", data.about.text);
    $("#about-highlights").innerHTML = data.about.highlights.map(item =>
      `<div class="highlight">${escapeHtml(item)}</div>`
    ).join("");
  }

  function renderIdeas() {
    const section = $("#ideas");
    section.hidden = !data.ideas.show;
    if (!data.ideas.show) return;
    setText("#ideas-title", data.ideas.title);
    setText("#ideas-intro", data.ideas.intro);
    $("#article-grid").innerHTML = data.ideas.items.map(item => `
      <article class="article-card">
        <span class="category">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <a href="${escapeHtml(item.url)}">Leer artículo →</a>
      </article>
    `).join("");
  }

  function renderContact() {
    setText("#contact-title", data.contact.title);
    setText("#contact-text", data.contact.text);
    $("#contact-links").innerHTML = `
      <a href="mailto:${escapeHtml(data.site.email)}">✉ ${escapeHtml(data.site.email)}</a>
      <a href="https://wa.me/${escapeHtml(data.site.phoneWhatsApp)}" target="_blank" rel="noopener">◉ WhatsApp ${escapeHtml(data.site.phoneDisplay)}</a>
      <a href="${escapeHtml(data.site.linkedinUrl)}" target="_blank" rel="noopener">in LinkedIn</a>
    `;

    const f = data.contact.fields;
    const fields = {
      name: $("#label-name"),
      institution: $("#label-institution"),
      role: $("#label-role"),
      email: $("#label-email"),
      phone: $("#label-phone"),
      message: $("#label-message")
    };
    Object.entries(fields).forEach(([key, node]) => {
      if (node) node.textContent = f[key];
    });
    setText("#form-submit", data.contact.submitLabel);
  }

  function renderFooter() {
    setText("#footer-name", data.site.name);
    setText("#footer-copy", `© ${new Date().getFullYear()} ${data.site.copyright}`);
  }

  function setupNavigation() {
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("#nav-links a").forEach(link => link.addEventListener("click", () => {
      links.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  function setupForm() {
    const form = $("#contact-form");
    const status = $("#form-status");

    form.addEventListener("submit", async event => {
      event.preventDefault();
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      if (data.site.formEndpoint) {
        status.textContent = "Enviando...";
        try {
          const response = await fetch(data.site.formEndpoint, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
          });
          if (!response.ok) throw new Error("No fue posible enviar el formulario.");
          form.reset();
          status.textContent = "Gracias. Tu mensaje fue enviado correctamente.";
        } catch (error) {
          status.textContent = "No fue posible enviar el mensaje. Escríbenos directamente por correo o WhatsApp.";
        }
        return;
      }

      const subject = encodeURIComponent(`Conversación Data Driven Schools — ${values.institution || values.name}`);
      const body = encodeURIComponent(
`Nombre: ${values.name}
Institución: ${values.institution}
Cargo: ${values.role}
Correo: ${values.email}
Teléfono: ${values.phone}

Situación o decisión:
${values.message}`
      );
      window.location.href = `mailto:${data.site.email}?subject=${subject}&body=${body}`;
      status.textContent = "Se abrió tu aplicación de correo para completar el envío.";
    });
  }

  function init() {
    renderNavigation();
    renderHero();
    renderProblem();
    renderDataDriven();
    renderWhatWeDo();
    renderDimensions();
    renderAudiences();
    renderProcess();
    renderTraining();
    renderIntelligence();
    renderCases();
    renderTestimonials();
    renderPhilosophy();
    renderAbout();
    renderIdeas();
    renderContact();
    renderFooter();
    setupNavigation();
    setupForm();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

