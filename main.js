const menutoggle = document.querySelector(".menu-toggle")
const navlinks = document.querySelector(".nav-links")


menutoggle.onclick = function() {

  navlinks.classList.toggle("active")
}
function showSection(id) {
  const sections = document.querySelectorAll('.content > div');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
}
showSection('hero-section');

