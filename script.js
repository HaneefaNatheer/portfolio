var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "Frontend Developer",
      "Backend Developer",
      "Web Designiner",
      "Android Developer",
      "Web Developer",
      "UI/UX Designer",
    ],
    loop: true,
    backSpeed: 40,
  };

  var typed1 = new Typed(".typing-text", {
    ...options,
    typeSpeed: 100,
    backDelay: 300,
  });

  var typed2 = new Typed(".typing2-text", {
    ...options,
    typeSpeed: 150,
    backDelay: 400,
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll down - hide the navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll up - show the navbar
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

// Highlight the correct page link
const links = document.querySelectorAll(".navbar a");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
