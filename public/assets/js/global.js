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

function getFormattedDateTime() {
  const date = new Date();

  const options = { weekday: "long", day: "numeric", month: "short" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes}${period}`;

  const timezoneOffset = -date.getTimezoneOffset() / 60;
  const timezoneString = `GMT${
    timezoneOffset >= 0 ? "+" : ""
  }${timezoneOffset}`;

  const formattedDateTime = `${formattedDate}, ${year}. ${formattedTime} (${timezoneString})`;

  return formattedDateTime;
}
var mobileNavDateTime = document.getElementById("mobile-nav-footer");
var desktopNavDateTime = document.getElementById("header-date-time");
if (mobileNavDateTime) {
  mobileNavDateTime.textContent = getFormattedDateTime();
}
if (desktopNavDateTime) {
  desktopNavDateTime.textContent = getFormattedDateTime();
}
