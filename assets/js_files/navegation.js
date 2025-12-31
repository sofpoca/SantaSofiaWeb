document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".nav-list a");
  const sections = document.querySelectorAll(".page-section");

  function showSection(id) {
    sections.forEach(section => section.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      window.scrollTo(0, 0);
    }
  }

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });


  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      history.pushState(null, "", `#${targetId}`);
      showSection(targetId);

      navbar.classList.remove("active");
    });
  });

  const initialHash = window.location.hash.substring(1);
  showSection(initialHash || "inicio");

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.substring(1);
    showSection(hash || "inicio");
  });
});
