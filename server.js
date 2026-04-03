const http = require('http');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const PORT = 5000;
const HOST = '0.0.0.0';

function buildHtml() {
  const readmeContent = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8');
  const htmlBody = marked.parse(readmeContent);

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD Bazlur Rahman Likhon",
    "jobTitle": "Senior AI Engineer & Cloud Architect",
    "description": "Senior AI Engineer and Cloud Architect with 6+ years of experience and 300+ certifications. Expert in LLMs, RAG systems, multi-cloud architecture, and DevSecOps.",
    "url": "https://brlikhon.engineer",
    "email": "contact@brlikhon.engineer",
    "telephone": "+8801606549236",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "Large Language Models",
      "Retrieval Augmented Generation", "Cloud Architecture", "DevSecOps",
      "AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Terraform",
      "Python", "LangChain", "MLOps", "Computer Vision", "NLP"
    ],
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "Harvard University" },
      { "@type": "EducationalOrganization", "name": "Stanford University" }
    ],
    "sameAs": [
      "https://linkedin.com/in/bazlur-rahman-likhon",
      "https://github.com/brlikhon"
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Certification", "name": "Google Cloud Professional Data Engineer" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Certification", "name": "Azure AI Engineer Associate" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Certification", "name": "Microsoft Certified: Fabric Data Engineer Associate" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Certification", "name": "OCI GenAI Professional" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional Certification", "name": "AWS Machine Learning Fundamentals" }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Upstra Communications Limited"
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>MD Bazlur Rahman Likhon | Senior AI Engineer & Cloud Architect | 300+ Certifications</title>
  <meta name="description" content="Senior AI Engineer & Cloud Architect with 6+ years of experience. Expert in LLMs, RAG systems, multi-cloud (AWS, GCP, Azure), Kubernetes, and DevSecOps. 300+ certifications including Google Cloud, Microsoft Azure, and Oracle.">
  <meta name="keywords" content="AI Engineer, Cloud Architect, LLM, RAG, LangChain, AWS, Google Cloud, Azure, Kubernetes, Terraform, MLOps, DevSecOps, Machine Learning, Generative AI, Bangladesh">
  <meta name="author" content="MD Bazlur Rahman Likhon">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://brlikhon.engineer">

  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="profile">
  <meta property="og:title" content="MD Bazlur Rahman Likhon | Senior AI Engineer & Cloud Architect">
  <meta property="og:description" content="Building production-ready AI systems with 6+ years of experience and 300+ certifications. Expert in LLMs, RAG, multi-cloud architecture, and DevSecOps.">
  <meta property="og:url" content="https://brlikhon.engineer">
  <meta property="og:site_name" content="MD Bazlur Rahman Likhon - Portfolio">
  <meta property="og:locale" content="en_US">
  <meta property="profile:first_name" content="MD Bazlur Rahman">
  <meta property="profile:last_name" content="Likhon">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="MD Bazlur Rahman Likhon | Senior AI Engineer & Cloud Architect">
  <meta name="twitter:description" content="Building production-ready AI systems with 6+ years of experience and 300+ certifications.">

  <!-- Structured Data -->
  <script type="application/ld+json">${structuredData}</script>

  <style>
    :root {
      --bg: #0D1117;
      --bg-secondary: #161b22;
      --bg-tertiary: #21262d;
      --border: #30363d;
      --text: #c9d1d9;
      --text-heading: #e6edf3;
      --text-muted: #8b949e;
      --accent: #00D9FF;
      --accent-blue: #58a6ff;
      --accent-green: #3fb950;
      --shadow: 0 4px 24px rgba(0,0,0,0.4);
      --radius: 8px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.7;
    }

    /* Skip to content for accessibility */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--accent);
      color: #000;
      padding: 8px 16px;
      font-weight: 600;
      z-index: 9999;
      border-radius: 0 0 var(--radius) 0;
      transition: top 0.2s;
    }
    .skip-link:focus { top: 0; }

    /* Top progress bar */
    #progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent), #58a6ff);
      z-index: 1000;
      transition: width 0.1s;
      width: 0%;
    }

    /* Sticky header */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(13,17,23,0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    header .brand {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--text-heading);
      white-space: nowrap;
    }
    header .brand span { color: var(--accent); }
    header nav {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    header nav a {
      color: var(--text-muted);
      font-size: 0.85rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s;
    }
    header nav a:hover { color: var(--accent-blue); }

    .container {
      max-width: 1020px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }

    /* Headings */
    h1, h2, h3, h4, h5, h6 {
      color: var(--text-heading);
      font-weight: 700;
      line-height: 1.3;
    }
    h1 { font-size: 2.2em; border-bottom: 2px solid var(--border); padding-bottom: 0.4em; margin: 1.8em 0 0.6em; }
    h2 { font-size: 1.6em; border-bottom: 1px solid var(--border); padding-bottom: 0.35em; margin: 1.6em 0 0.6em; }
    h3 { font-size: 1.25em; margin: 1.4em 0 0.5em; color: var(--accent-blue); }
    h4, h5, h6 { font-size: 1em; margin: 1em 0 0.4em; }

    p { margin-bottom: 1.1em; }

    /* Links */
    a {
      color: var(--accent-blue);
      text-decoration: none;
      transition: color 0.15s, text-decoration 0.15s;
    }
    a:hover { color: var(--accent); text-decoration: underline; }
    a:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
      border-radius: 2px;
    }

    /* Images */
    img { max-width: 100%; height: auto; display: inline-block; }

    /* Inline code */
    code {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 0.15em 0.45em;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 85%;
      color: #f0883e;
    }

    /* Code blocks */
    pre {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px;
      overflow-x: auto;
      margin-bottom: 1.2em;
      position: relative;
    }
    pre code {
      background: none;
      border: none;
      padding: 0;
      font-size: 0.875em;
      color: var(--text);
    }

    /* Blockquotes */
    blockquote {
      border-left: 4px solid var(--accent);
      padding: 12px 20px;
      color: var(--text-muted);
      background: var(--bg-secondary);
      border-radius: 0 var(--radius) var(--radius) 0;
      margin-bottom: 1.2em;
      font-style: italic;
    }
    blockquote strong { color: var(--text-heading); font-style: normal; }

    /* Tables */
    .table-wrapper {
      overflow-x: auto;
      margin-bottom: 1.2em;
      border-radius: var(--radius);
      border: 1px solid var(--border);
    }
    table {
      border-collapse: collapse;
      width: 100%;
      min-width: 480px;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 10px 16px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: var(--bg-secondary);
      font-weight: 600;
      color: var(--text-heading);
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    tr:nth-child(even) td { background-color: rgba(22,27,34,0.6); }
    tr:hover td { background-color: rgba(88,166,255,0.05); }

    /* Horizontal rules */
    hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 2.5em 0;
    }

    /* Lists */
    ul, ol {
      padding-left: 1.75em;
      margin-bottom: 1.1em;
    }
    li { margin-bottom: 0.3em; }

    /* Details / Summary */
    details {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 14px 20px;
      margin-bottom: 1.2em;
      transition: box-shadow 0.2s;
    }
    details[open] { box-shadow: var(--shadow); }
    summary {
      cursor: pointer;
      font-weight: 700;
      color: var(--text-heading);
      font-size: 1rem;
      user-select: none;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    summary::before {
      content: '▶';
      font-size: 0.7em;
      color: var(--accent-blue);
      transition: transform 0.2s;
    }
    details[open] summary::before { transform: rotate(90deg); }
    summary::-webkit-details-marker { display: none; }

    /* Center-align divs */
    div[align="center"], [align="center"] { text-align: center; }

    /* Badge & image rows */
    p img { margin: 3px; }

    /* Stat cards */
    .stat-card {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 50px;
      padding: 6px 16px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-heading);
      margin: 4px;
      transition: border-color 0.2s, transform 0.15s;
    }
    .stat-card:hover { border-color: var(--accent-blue); transform: translateY(-1px); }

    /* Back to top */
    #back-to-top {
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: var(--accent-blue);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 46px;
      height: 46px;
      font-size: 1.2rem;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      z-index: 200;
      transition: background 0.2s, transform 0.15s;
    }
    #back-to-top:hover { background: var(--accent); transform: translateY(-2px); }
    #back-to-top.visible { display: flex; }

    /* Footer */
    footer {
      text-align: center;
      padding: 32px 24px;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    footer a { color: var(--text-muted); }
    footer a:hover { color: var(--accent-blue); }

    /* Responsive */
    @media (max-width: 700px) {
      header nav { display: none; }
      .container { padding: 28px 16px 60px; }
      h1 { font-size: 1.6em; }
      h2 { font-size: 1.3em; }
      #back-to-top { bottom: 18px; right: 18px; width: 40px; height: 40px; }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div id="progress-bar" role="progressbar" aria-hidden="true"></div>

  <header>
    <div class="brand">Bazlur Rahman <span>Likhon</span></div>
    <nav aria-label="Page sections">
      <a href="#about-me">About</a>
      <a href="#what-i-do">Skills</a>
      <a href="#professional-certifications">Certifications</a>
      <a href="#featured-projects">Projects</a>
      <a href="#services--engagement">Services</a>
      <a href="#lets-connect">Contact</a>
    </nav>
  </header>

  <main id="main-content">
    <div class="container">
      ${htmlBody}
    </div>
  </main>

  <footer>
    <p>
      &copy; 2026 <a href="https://brlikhon.engineer" rel="noopener">MD Bazlur Rahman Likhon</a> &mdash;
      Senior AI Engineer &amp; Cloud Architect &mdash;
      <a href="mailto:contact@brlikhon.engineer">contact@brlikhon.engineer</a>
    </p>
  </footer>

  <button id="back-to-top" aria-label="Back to top" title="Back to top">&#8679;</button>

  <script>
    // Progress bar
    const bar = document.getElementById('progress-bar');
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? (scrolled / max * 100) + '%' : '0%';
      btn.classList.toggle('visible', scrolled > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Wrap all tables for horizontal scroll
    document.querySelectorAll('table').forEach(t => {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      t.parentNode.insertBefore(wrapper, t);
      wrapper.appendChild(t);
    });

    // Add id anchors to headings that don't have them
    document.querySelectorAll('h2, h3').forEach(h => {
      if (!h.id) {
        h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
    });
  </script>
</body>
</html>`;
}

const html = buildHtml();

const server = http.createServer((req, res) => {
  if (req.url === '/robots.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('User-agent: *\nAllow: /\nSitemap: https://brlikhon.engineer/sitemap.xml\n');
    return;
  }
  if (req.url === '/sitemap.xml') {
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    res.end(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brlikhon.engineer/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
    return;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  });
  res.end(html);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
