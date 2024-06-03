const addedProjectConntainer = document.getElementById(
  "added-project-container"
);
const includeProjectButton = document.getElementById("includeProjectButton");
const addProjectContainer = document.querySelector(".add-project-container");
const activeProjectTle = document.getElementById("active-project-tle");

includeProjectButton.addEventListener("click", () => {
  const mobileNotification = document.querySelector(
    ".add-project-dialog-container"
  );
  mobileNotification.classList.add("fadeOut");
  addProjectContainer.style.display = "none";
  if (activeProjectTle) {
    activeProjectTle.style.display = "block";
  }

  mobileNotification.classList.add("fadeOut");

  mobileNotification.addEventListener(
    "animationend",
    function () {
      mobileNotification.classList.remove("fadeOut");
      document.getElementById("overlay").style.display = "none";
    },
    { once: true }
  );
  addedProjectConntainer.style.display = "grid";
});
