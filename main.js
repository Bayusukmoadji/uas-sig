// Efek perubahan warna navbar saat scroll
document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling effect dengan offset untuk navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let targetId = this.getAttribute("href").substring(1);
    let targetSection = document.getElementById(targetId);

    if (targetSection) {
      let navbarHeight = document.querySelector(".navbar").offsetHeight;
      let targetPosition = targetSection.offsetTop - navbarHeight + 1; // Tambah offset agar tidak 'gantung'

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Animasi saat cursor diarahkan ke gambar atau teks
document
  .querySelectorAll("img, .gallery-text, .citra-text")
  .forEach((element) => {
    element.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease-in-out";
    });
    element.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });

// Menambahkan efek aktif pada navbar saat scroll
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Animasi teks 'Citra Satelit' saat masuk ke tampilan
window.addEventListener("scroll", function () {
  let citraText = document.querySelector(".citra-satelit");
  let citraOffset = citraText.offsetTop - window.innerHeight + 100;

  if (window.scrollY > citraOffset) {
    citraText.style.opacity = "1";
    citraText.style.transform = "translateY(0)";
    citraText.style.transition =
      "opacity 0.6s ease-out, transform 0.6s ease-out";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let citraText = document.querySelector(".citra-satelit");
  citraText.style.opacity = "0";
  citraText.style.transform = "translateY(20px)";
});

// Tombol scroll ke atas
document.addEventListener("DOMContentLoaded", function () {
  let scrollTopButton = document.createElement("div");
  scrollTopButton.innerHTML = "<i class='fas fa-arrow-up'></i>";
  scrollTopButton.style.position = "fixed";
  scrollTopButton.style.bottom = "20px";
  scrollTopButton.style.right = "20px";
  scrollTopButton.style.width = "50px";
  scrollTopButton.style.height = "50px";
  scrollTopButton.style.backgroundColor = "green";
  scrollTopButton.style.color = "white";
  scrollTopButton.style.borderRadius = "50%";
  scrollTopButton.style.display = "flex";
  scrollTopButton.style.alignItems = "center";
  scrollTopButton.style.justifyContent = "center";
  scrollTopButton.style.cursor = "pointer";
  scrollTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
  scrollTopButton.style.opacity = "0";
  scrollTopButton.style.transition =
    "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";

  document.body.appendChild(scrollTopButton);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollTopButton.style.opacity = "1";
    } else {
      scrollTopButton.style.opacity = "0";
    }
  });

  scrollTopButton.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.2)";
  });

  scrollTopButton.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });

  scrollTopButton.addEventListener("click", function () {
    document.querySelector(".hero-section").scrollIntoView({
      behavior: "smooth",
    });
  });
});
