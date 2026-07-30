// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal skill meters when they scroll into view
const meters = document.querySelectorAll('.meter__fill');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  meters.forEach(m => m.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  meters.forEach(m => observer.observe(m));
}

// Smooth-scroll nav links (native CSS already handles this, JS ensures focus lands correctly)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  });
});
