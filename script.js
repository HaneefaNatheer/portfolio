var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "Full Stack Developer",
      "Flutter Developer",
      "Mobile App Developer",
      "Web Developer",
      "React & Node.js Developer",
      "Software QA Enthusiast",
    ],
    loop: true,
    backSpeed: 40,
  };

  new Typed(".typing-text", { ...options, typeSpeed: 100, backDelay: 300 });
  new Typed(".typing2-text", { ...options, typeSpeed: 150, backDelay: 400 });
});

var navbar = document.querySelector(".navbar");
var header = document.querySelector(".header");
var links = document.querySelectorAll(".navbar a");
var menuIcon = document.querySelector("#menu-icon");

// Hide navbar on scroll down, show on scroll up + sticky header
var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;

  header.classList.toggle("sticky", scrollTop > 100);
});

// Toggle the mobile menu
if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

// Highlight the active nav link and close the mobile menu on click
links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (l) {
      l.classList.remove("active");
    });
    this.classList.add("active");
    navbar.classList.remove("active");
  });
});

// Skills accordion
document.addEventListener("DOMContentLoaded", function () {
  var skillItems = document.querySelectorAll(".skill-item");
  if (!skillItems.length) return;

  skillItems.forEach(function (item, index) {
    var header = item.querySelector(".skill-header");
    if (!header) return;

    header.addEventListener("click", function () {
      var isOpen = item.classList.contains("active");

      skillItems.forEach(function (other) {
        other.classList.remove("active");
        var otherHeader = other.querySelector(".skill-header");
        if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });

    if (index === 0) {
      item.classList.add("active");
      header.setAttribute("aria-expanded", "true");
    }
  });
});
