// Toggle navigation menu on logo click
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav-links');
logo.onclick = () => {
  nav.style.display = nav.style.display === 'flex' || !nav.style.display ? 'none' : 'flex';
};

// Typewriter effect for subtitle
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  [...text].forEach((char, i) =>
    setTimeout(() => { subtitle.textContent += char; }, 50 * i)
  );
}

// Highlight current section in nav when scrolling
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');
window.onscroll = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 60) current = sec.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes(current));
  });
};

// Back to Top Button
const backBtn = document.createElement('button');
backBtn.textContent = '↑ Top';
Object.assign(backBtn.style, {
  position: 'fixed', right: '2rem', bottom: '2rem', display: 'none',
  padding: '0.6rem 1.2rem', borderRadius: '50px', border: 'none', background: 'var(--color-accent)',
  color: 'var(--color-bg-dark)', cursor: 'pointer', zIndex: 9999
});
document.body.appendChild(backBtn);
window.onscroll = () => {
  backBtn.style.display = window.scrollY > 600 ? 'block' : 'none';
};
backBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.onclick = e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
});

// Animate sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.assign(entry.target.style, {
        opacity: '1', transform: 'translateY(0)', transition: 'all 0.6s ease-out'
      });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('section').forEach(sec => {
  Object.assign(sec.style, { opacity: '0', transform: 'translateY(20px)' });
  observer.observe(sec);
});

// Add shadow to header on scroll
const header = document.querySelector('header');
window.onscroll = () => {
  header.style.boxShadow = window.scrollY > 100
    ? '0 4px 30px rgba(0, 0, 0, 0.5)'
    : '0 4px 20px rgba(0, 0, 0, 0.3)';
};
