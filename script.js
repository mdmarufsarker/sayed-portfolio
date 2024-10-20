document.getElementById("hamburger").onclick = function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
};

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("active");
  });
});

window.addEventListener("click", (event) => {
  const navLinks = document.getElementById("nav-links");
  if (
    !event.target.closest("#nav-links") &&
    !event.target.closest("#hamburger")
  ) {
    navLinks.classList.remove("active");
  }
});
