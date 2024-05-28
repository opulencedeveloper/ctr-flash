const closeOverLayBtn = document.getElementById("close-overlay-btn");
const openOverLayBtn = document.getElementById("open-overlay-btn");
const overlay = document.getElementById("overlay");
const overlayDialog = document.getElementById("overlay-dialog");

window.addEventListener("load", function () {
  document.getElementById("spinner-body").style.display = "none";

  document.getElementById("content").style.display = "block";
});

if (overlay) {
    openOverLayBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

  closeOverLayBtn.addEventListener("click", () => {
    overlayDialog.classList.add("fadeOut");

    overlayDialog.addEventListener(
      "animationend",
      function () {
        overlayDialog.classList.remove("fadeOut");
        overlay.style.display = "none";
      },
      { once: true }
    );
  });
}
