document.addEventListener("DOMContentLoaded", function () {
  const userActivitiesOpenBtn = document.querySelectorAll(
    ".user-activities-openBtn"
  );
  const userActivitiesCloseBtn = document.querySelector(
    ".user-activities-closeBtn"
  );
  const userActivitiesModal = document.getElementById("user-activities-modal");
  const userActivitiesOverlay = document.getElementById(
    "user-activities-overlay"
  );

  userActivitiesOpenBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      userActivitiesModal.classList.add("show");
      userActivitiesOverlay.classList.add("show");
    })
  );

  userActivitiesCloseBtn.addEventListener("click", function () {
    userActivitiesModal.classList.remove("show");
    userActivitiesOverlay.classList.remove("show");
  });

  userActivitiesOverlay.addEventListener("click", function () {
    userActivitiesModal.classList.remove("show");
    userActivitiesOverlay.classList.remove("show");
  });

  
});
