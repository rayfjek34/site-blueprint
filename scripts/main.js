/**
 * ╔══════════════════════════════════════════════════════╗
 * ║              MAIN SCRIPT                            ║
 * ║  Reads SITE_CONFIG and renders the entire page.     ║
 * ║  Do not put content here — edit config/site.config  ║
 * ╚══════════════════════════════════════════════════════╝
 */

/* ─── Expand / collapse hook ─────────────────────────── */
function makeExpandable(card) {
  const btn   = card.querySelector('.expand-btn')
  const body  = card.querySelector('.expand-body')
  if (!btn || !body) return

  btn.addEventListener('click', () => {
    const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px'
    if (!isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.style.maxHeight = body.scrollHeight + 'px'
          body.style.opacity   = '1'
        })
      })
      btn.innerHTML = btn.innerHTML.replace('Read more', 'Show less')
                                   .replace('View more', 'Show less')
      card.classList.add('expanded')
    } else {
      body.style.maxHeight = body.scrollHeight + 'px'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.style.maxHeight = '0px'
          body.style.opacity   = '0'
        })
      })
      btn.innerHTML = btn.innerHTML.replace('Show less', 'Read more')
      card.classList.remove('expanded')
    }
  })
}

/* ─── Scroll-fade observer ───────────────────────────── */
function initScrollFade() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.sf:not(.in)'))
        const idx = siblings.indexOf(entry.target)
        setTimeout(() => entry.target.classList.add('in'), Math.min(idx * 80, 400))
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  document.querySelectorAll('.sf').forEach(el => io.observe(el))
}

/* ─── Active nav observer ────────────────────────────── */
function initActiveNav() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
        document.querySelectorAll(`.nav-link[data-section="${e.target.id}"]`)
                .forEach(l => l.classList.add('active'))
      }
    }),
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  )
  document.querySelectorAll('section[id]').forEach(s => io.observe(s))
}

/* ─── Smooth scroll helper ───────────────────────────── */
function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

/* ─── Icons ──────────────────────────────────────────── */
const ICONS = {
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.77s.78-1.77 1.75-1.77 1.75.79 1.75 1.77-.78 1.77-1.75 1.77zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  chevron: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><polyline points="6 9 12 15 18 9"/></svg>`,
  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  externalLink: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
}

/* ─── Render helpers ─────────────────────────────────── */
function logoImg(cls) {
  const { logo, initials } = SITE_CONFIG.identity
  return `<img src="${logo}" alt="Logo" class="${cls}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="nav-logo-fb" style="display:none">${initials}</span>`
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function renderNav() {
  const { nav, identity } = SITE_CONFIG
  const links = nav.links.map((l, i) =>
    `<li><button class="nav-link" data-section="${l.href.replace('#','')}" style="--i:${i}" onclick="scrollTo('${l.href.replace('#','')}')">
      ${l.label}
    </button></li>`
  ).join('')
  const extLink = nav.externalLink
    ? `<li><a href="${nav.externalLink.href}" class="nav-link nav-link-external" target="_blank" rel="noopener">${nav.externalLink.label}</a></li>`
    : ''
  const mobileLinks = nav.links.map((l, i) =>
    `<button class="mobile-link" style="--i:${i}" onclick="scrollTo('${l.href.replace('#','')}');closeMobileMenu()">${l.label}</button>`
  ).join('')
  const mobileExtLink = nav.externalLink
    ? `<a href="${nav.externalLink.href}" class="mobile-link nav-link-external" style="--i:${nav.links.length}" target="_blank" rel="noopener">${nav.externalLink.label}</a>`
    : ''

  return `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <div class="nav-logo-wrap">
        <a href="./" class="nav-logo-link" aria-label="Home">
          ${logoImg('nav-logo-img')}
        </a>
      </div>
      <ul class="nav-links">${links}${extLink}</ul>
      <div class="nav-right">
        <button class="theme-btn" id="theme-btn" aria-label="Toggle theme"></button>
        <button class="hamburger" id="hamburger" aria-label="Menu" onclick="toggleMobileMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-backdrop" onclick="closeMobileMenu()"></div>
      <div class="mobile-menu-inner">
        ${mobileLinks}
        ${mobileExtLink}
      </div>
    </div>
  </nav>`
}

/* ─── HERO ───────────────────────────────────────────── */
function renderHero() {
  if (!SITE_CONFIG.sections.hero) return ''
  const { identity, hero } = SITE_CONFIG

  const nameParts = identity.nameAccent
    ? `${identity.name}<br><span class="accent">${identity.nameAccent}</span>`
    : identity.name

  const ctaBtns = hero.cta.map(c => {
    const icon = c.icon ? ICONS[c.icon] : ''
    if (c.action?.startsWith('scroll:')) {
      const id = c.action.replace('scroll:', '').replace('#', '')
      return `<button class="btn btn-${c.style}" onclick="scrollTo('${id}')">${icon} ${c.label}</button>`
    }
    const dl = c.download ? 'download' : ''
    return `<a href="${c.href}" class="btn btn-${c.style}" target="_blank" rel="noopener" ${dl}>${icon} ${c.label}</a>`
  }).join('')

  return `
  <section id="hero" class="hero">
    <div class="hero-inner">
      <div class="photo-wrap anim" style="--d:0s">
        <div class="photo" data-initials="${identity.initials}">
          <img src="${identity.profileImg}" alt="${identity.name}"
            onerror="this.style.display='none';this.parentElement.classList.add('photo-ph')">
        </div>
        <div class="photo-ring"></div>
      </div>
      <p class="hero-eyebrow anim" style="--d:0.1s">${hero.eyebrow}</p>
      <h1 class="hero-name anim" style="--d:0.2s">${nameParts}</h1>
      <p class="hero-role anim" style="--d:0.35s">${identity.role}</p>
      <p class="hero-tagline anim" style="--d:0.5s">${identity.tagline}</p>
      <div class="hero-btns anim" style="--d:0.65s">${ctaBtns}</div>
    </div>
  </section>`
}

/* ─── ABOUT ──────────────────────────────────────────── */
function renderAbout() {
  if (!SITE_CONFIG.sections.about) return ''
  const { about, identity } = SITE_CONFIG
  const paras = about.paragraphs.map(p => `<p>${p}</p>`).join('')
  const stats = about.stats.map(s => `
    <div class="stat sf">
      <span class="stat-n">${s.number}</span>
      <span class="stat-l">${s.label}</span>
    </div>`).join('')
  return `
  <section id="about" class="section">
    <div class="container">
      <p class="sec-label sf">01 / About</p>
      <div class="about-grid">
        <div class="about-body sf">
          <h2 class="sec-heading">What I build</h2>
          ${paras}
          <div class="stats">${stats}</div>
        </div>
        <div class="about-photo-wrap sf">
          <div class="about-photo-inner">
            <img src="${identity.aboutImg}" alt="${identity.name}" class="about-photo" loading="lazy"
              onerror="this.parentElement.parentElement.style.display='none'">
          </div>
        </div>
      </div>
    </div>
  </section>`
}

/* ─── EXPERIENCE ─────────────────────────────────────── */
function renderExperience() {
  if (!SITE_CONFIG.sections.experience) return ''
  const items = SITE_CONFIG.experience.map(e => {
    const bullets = e.bullets.map(b => `<li>${b}</li>`).join('')
    return `
    <div class="tl-card" style="position:relative">
      <div class="tl-dot"></div>
      <div class="tl-header">
        <div>
          <h3 class="tl-role">${e.role}</h3>
          <p class="tl-company">${e.company}</p>
        </div>
        <span class="tl-date">${e.date}</span>
      </div>
      <div class="expand-body">
        <ul class="tl-bullets">${bullets}</ul>
      </div>
      <button class="expand-btn" style="margin-top:1rem">
        ${ICONS.chevron} View responsibilities
      </button>
    </div>`
  }).join('')
  return `
  <section id="experience" class="section">
    <div class="container">
      <p class="sec-label sf">02 / Experience</p>
      <h2 class="sec-heading sf">Work Experience</h2>
      <div class="timeline sf">${items}</div>
    </div>
  </section>`
}

/* ─── EDUCATION ──────────────────────────────────────── */
function renderEducation() {
  if (!SITE_CONFIG.sections.education) return ''
  const cards = SITE_CONFIG.education.map(e => {
    const bullets = e.bullets.map(b => `<li>${b}</li>`).join('')
    return `
    <div class="edu-card sf">
      <span class="edu-icon">${e.icon}</span>
      <div style="width:100%">
        <span class="edu-date">${e.date}</span>
        <h3 class="edu-title">${e.title}</h3>
        <p class="edu-school">${e.school}</p>
        <p class="edu-spec">${e.spec}</p>
        <div class="expand-body">
          <ul class="edu-bullets" style="margin-top:0.75rem">${bullets}</ul>
        </div>
        <button class="expand-btn" style="margin-top:0.85rem">
          ${ICONS.chevron} View details
        </button>
      </div>
    </div>`
  }).join('')
  return `
  <section id="education" class="section">
    <div class="container">
      <p class="sec-label sf">03 / Education</p>
      <h2 class="sec-heading sf">Education</h2>
      <div class="edu-grid">${cards}</div>
    </div>
  </section>`
}

/* ─── PROJECTS ───────────────────────────────────────── */
function renderProjects() {
  if (!SITE_CONFIG.sections.projects) return ''
  const cards = SITE_CONFIG.projects.map(p => {
    const ghBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="github-btn">${ICONS.github} View on GitHub</a>`
      : `<button class="github-btn ghost" disabled>${ICONS.github} GitHub — soon</button>`
    return `
    <div class="proj-card sf" style="opacity:1;transform:none">
      <div class="proj-top">
        <span class="proj-icon">${p.icon}</span>
        <span class="badge">${p.badge}</span>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="expand-body">
        <p class="expand-text">${p.detail}</p>
      </div>
      <div class="proj-actions">
        <button class="expand-btn">${ICONS.chevron} Read more</button>
        ${ghBtn}
      </div>
    </div>`
  }).join('')

  const worksCard = SITE_CONFIG.worksCard
    ? `<a href="${SITE_CONFIG.worksCard.href}" class="works-card sf">
        <div class="works-card-inner">
          <h3 class="works-card-title">${SITE_CONFIG.worksCard.title}</h3>
          <p class="works-card-sub">${SITE_CONFIG.worksCard.subtitle}</p>
        </div>
      </a>`
    : ''
  return `
  <section id="projects" class="section">
    <div class="container">
      <p class="sec-label sf">04 / Projects</p>
      <h2 class="sec-heading sf">Selected Projects</h2>
      <div class="proj-grid">${cards}</div>
      ${worksCard}
    </div>
  </section>`
}

/* ─── SKILLS ─────────────────────────────────────────── */
function renderSkills() {
  if (!SITE_CONFIG.sections.skills) return ''
  const groups = SITE_CONFIG.skills.map(g => {
    const tags = g.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')
    return `
    <div class="skill-group sf">
      <h3 class="skill-group-title"><span>${g.icon}</span> ${g.label}</h3>
      <div class="skill-tags">${tags}</div>
    </div>`
  }).join('')
  return `
  <section id="skills" class="section">
    <div class="container">
      <p class="sec-label sf">05 / Skills</p>
      <h2 class="sec-heading sf">Skills &amp; Tools</h2>
      <div class="skills-groups">${groups}</div>
    </div>
  </section>`
}

/* ─── CONTACT ────────────────────────────────────────── */
function renderContact() {
  if (!SITE_CONFIG.sections.contact) return ''
  const { contact, social } = SITE_CONFIG
  return `
  <section id="contact" class="section">
    <div class="container">
      <p class="sec-label sf">06 / Contact</p>
      <h2 class="sec-heading sf">Get in Touch</h2>
      <div class="contact-grid">
        <div class="contact-info sf">
          <p class="contact-blurb">${contact.blurb}</p>
          <div class="contact-links">
            ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" rel="noopener" class="contact-link">${ICONS.linkedin} LinkedIn Profile</a>` : ''}
            ${social.email ? `<a href="mailto:${social.email}" class="contact-link">${ICONS.email} ${social.email}</a>` : ''}
          </div>
        </div>
        <form class="contact-form sf" id="contact-form" onsubmit="handleContactForm(event)">
          <div class="form-group">
            <label for="cf-name">Name</label>
            <input type="text" id="cf-name" name="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="cf-email">Email</label>
            <input type="email" id="cf-email" name="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="cf-msg">Message</label>
            <textarea id="cf-msg" name="message" rows="5" placeholder="What's on your mind?" required></textarea>
          </div>
          <p class="form-status" id="form-status"></p>
          <button type="submit" class="btn btn-primary btn-full" id="form-submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>`
}

/* ─── FOOTER ─────────────────────────────────────────── */
function renderFooter() {
  const { footer, identity, social } = SITE_CONFIG
  return `
  <footer class="footer">
    <div class="container footer-inner">
      <a href="./" class="footer-logo-link" aria-label="Home">
        ${logoImg('footer-logo-img')}
      </a>
      <span class="footer-sep">·</span>
      <span>© ${footer.year} ${identity.name}${identity.nameAccent ? ' ' + identity.nameAccent : ''}</span>
      <span class="footer-sep">·</span>
      <span>${footer.motto}</span>
      ${social.github ? `<span class="footer-sep">·</span><a href="${social.github}" class="footer-github" target="_blank" rel="noopener">${ICONS.github}</a>` : ''}
    </div>
  </footer>`
}

/* ─── Contact form handler ───────────────────────────── */
async function handleContactForm(e) {
  e.preventDefault()
  const { formspreeEndpoint } = SITE_CONFIG.contact
  const btn    = document.getElementById('form-submit')
  const status = document.getElementById('form-status')
  const data   = new FormData(e.target)

  btn.disabled    = true
  btn.textContent = 'Sending…'
  status.textContent = ''

  try {
    const res = await fetch(formspreeEndpoint, {
      method: 'POST', body: data,
      headers: { 'Accept': 'application/json' },
    })
    if (res.ok) {
      status.textContent = "Message sent! I'll get back to you soon."
      status.className = 'form-status ok'
      e.target.reset()
    } else {
      throw new Error()
    }
  } catch {
    status.textContent = 'Something went wrong. Please try again.'
    status.className = 'form-status err'
  } finally {
    btn.disabled    = false
    btn.textContent = 'Send Message'
  }
}

/* ─── Mobile menu helpers ────────────────────────────── */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  const hbg  = document.getElementById('hamburger')
  const open = menu.classList.toggle('open')
  hbg.classList.toggle('open', open)
  document.body.style.overflow = open ? 'hidden' : ''
}
function closeMobileMenu() {
  document.getElementById('mobile-menu')?.classList.remove('open')
  document.getElementById('hamburger')?.classList.remove('open')
  document.body.style.overflow = ''
}

/* ─── Theme ──────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('site-theme') || 'dark'
  applyTheme(saved)
  const btn = document.getElementById('theme-btn')
  if (!btn) return
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme')
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('site-theme', theme)
  const btn = document.getElementById('theme-btn')
  if (btn) btn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon
}

/* ─── Navbar scroll effect ───────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('navbar')
  const fn  = () => nav?.classList.toggle('scrolled', window.scrollY > 20)
  window.addEventListener('scroll', fn, { passive: true })
  fn()
}

/* ─── MOUNT ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) return

  app.innerHTML = [
    '<div class="bg-wrap"></div>',
    renderNav(),
    '<main>',
    renderHero(),
    renderAbout(),
    renderExperience(),
    renderEducation(),
    renderProjects(),
    renderSkills(),
    renderContact(),
    '</main>',
    renderFooter(),
  ].join('')

  // Wire up expand/collapse on all expandable cards
  document.querySelectorAll('.proj-card, .edu-card, .tl-card').forEach(makeExpandable)

  initTheme()
  initNavScroll()
  initScrollFade()
  initActiveNav()
})
