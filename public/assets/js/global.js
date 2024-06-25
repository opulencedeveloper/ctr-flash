const closeOverLayBtn = document.getElementById("close-overlay-btn");
const openOverLayBtn = document.getElementById("open-overlay-btn");
const overlay = document.getElementById("overlay");
const overlayDialog = document.getElementById("overlay-dialog");

const closeOverLayBtnLogout = document.getElementById("close-overlay-btn-log-out");
const openOverLayBtnLogout = document.getElementById("open-overlay-btn-logout");
const overlayLogout = document.getElementById("overlay-logout");
const overlayDialogLogout = document.getElementById("overlay-dialog-logout");

function startProgress() {
  let progressBar = document.getElementById('progress-bar');
  let progressBarMobile = document.getElementById('progress-bar-mobile');
  let progressValue = progressBar.getAttribute('progress');
  progressValue = parseInt(progressValue);

  if (isNaN(progressValue) || progressValue < 0 || progressValue > 100) {
      alert('Please set a valid progress value between 0 and 100 in the HTML.');
      return;
  }

  let width = 0;
  let interval = setInterval(frame, 20);

  function frame() {
      if (width >= progressValue) {
          clearInterval(interval);
      } else {
          width++;
          progressBarMobile.style.width = width + '%';
          progressBar.style.width = width + '%';
      }
  }
}

window.addEventListener("load", function () {
  document.getElementById("spinner-body").style.display = "none";

  document.getElementById("content").style.display = "block";
  startProgress();
});

if(openOverLayBtnLogout) {
  openOverLayBtnLogout.addEventListener("click", () => {
    overlayLogout.style.display = "flex";
  });
  
}

if (overlay) {
  if (openOverLayBtn) {
    openOverLayBtn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });
  }

  if(closeOverLayBtnLogout) {
    closeOverLayBtnLogout.addEventListener("click", () => {
      overlayDialogLogout.classList.add("fadeOut");
  
      overlayDialogLogout.addEventListener(
        "animationend",
        function () {
          overlayDialogLogout.classList.remove("fadeOut");
          overlayLogout.style.display = "none";
        },
        { once: true }
      );
    });
  }

  

  if (closeOverLayBtn) {
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
