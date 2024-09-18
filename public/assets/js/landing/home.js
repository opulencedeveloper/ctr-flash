const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger-2");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    if (hamburger2) {
      hamburger2.classList.toggle("active");
    }

    navMenu.classList.toggle("active");
  });
}

if (hamburger2) {
  hamburger2.addEventListener("click", () => {
    if (hamburger) {
      hamburger.classList.toggle("active");
    }
    hamburger2.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const button = item.querySelector("button");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("show");
      // Close all answers
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.remove("show");
      });
      document.querySelectorAll(".faq-question button").forEach((btn) => {
        btn.classList.remove("rotate");
      });
      // Open clicked answer if it was not already open
      if (!isOpen) {
        answer.classList.add("show");
        button.classList.add("rotate");
      }
    });
  });
});

function generateStars(targetElementId) {
  const starRatingDiv = document.getElementById(targetElementId);
  const rating = parseInt(starRatingDiv.getAttribute("data-rating"), 10);
  starRatingDiv.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const starContainer = document.createElement("div");
    const starImage = document.createElement("img");

    if (i <= rating) {
      starImage.src = "/assets/icons/full-star.svg";
    } else {
      starImage.src = "/assets/icons/empty-star.svg";
    }

    starContainer.appendChild(starImage);
    starRatingDiv.appendChild(starContainer);
  }
}

document.querySelectorAll(".rating").forEach((element) => {
  generateStars(element.id);
});

document.querySelectorAll(".privacyScrollButton").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".privacyScrollButton").forEach((btn) => {
      btn.classList.remove("active-privacy-list-item");
    });

    // Add active class to the clicked button
    this.classList.add("active-privacy-list-item");

    // Scroll the target item into view
    const targetId = this.getAttribute("policy-data-target");
    
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const currentYear = new Date().getFullYear();
const footerYear = document.getElementById("footerYear");

if (footerYear) {
  footerYear.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-ani");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    observer.observe(box);
  });
});
