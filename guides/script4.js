const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgInModal");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll("img").forEach(img => {
  if (!img.closest('.no-popup')) {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  }
});

  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});


  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});
