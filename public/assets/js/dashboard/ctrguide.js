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