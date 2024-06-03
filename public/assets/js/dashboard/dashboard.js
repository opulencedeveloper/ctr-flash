const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mobileNavCloseBtn = document.querySelector(".btn-nav-close");

function goBack() {
  window.history.back();
}


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

mobileNavCloseBtn.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document
  .querySelector(".dash-head-notify")
  .addEventListener("mouseover", function () {
    document.getElementById("bell-icon").src =
      "../../assets/icons/notification-state.svg";
  });

document
  .querySelector(".dash-head-notify")
  .addEventListener("mouseout", function () {
    document.getElementById("bell-icon").src =
      "../../assets/icons/notification.svg";
  });

const mobileNotification = document.getElementById("mobile-notification");
const notifyOpenBtn = document.getElementById("notifyOpenBtn");
const notifyCloseBtn = document.getElementById("notifyCloseBtn");
const notifyCloseBtnII = document.getElementById("bell-icon");

notifyCloseBtnII.addEventListener("click", () => {
  mobileNotification.classList.toggle("active");
});

notifyOpenBtn.addEventListener("click", () => {
  mobileNotification.classList.toggle("active");
});

notifyCloseBtn.addEventListener("click", () => {
  mobileNotification.classList.toggle("active");
});
const dashhh = document.querySelector(".dash-head-notify");

dashhh.addEventListener("click", () => {
  mobileNotification.classList.toggle("active");
});

const openAddProjectDialogBtn = document.querySelector(
  ".openAddProjectDialogBtn"
);
if (openAddProjectDialogBtn) {
  openAddProjectDialogBtn.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "flex";
  });
}
const buttonII = document.querySelector(".openAddProjectDialogBtnII");
if (buttonII) {
  buttonII.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "flex";
  });
}

const closeAddProjectDialogBtn = document.getElementById(
  "closeAddProjectDialogBtn"
);

if (closeAddProjectDialogBtn) {
  closeAddProjectDialogBtn.addEventListener("click", function () {
    const mobileNotification = document.querySelector(
      ".add-project-dialog-container"
    );

    mobileNotification.classList.add("fadeOut");

    mobileNotification.addEventListener(
      "animationend",
      function () {
        mobileNotification.classList.remove("fadeOut");
        document.getElementById("overlay").style.display = "none";
      },
      { once: true }
    );
  });
}


document.getElementById('dash-nav-toggle').addEventListener('click', () => {
  const navBar = document.getElementById('desktop-nav');
  const dashTitle = document.querySelectorAll('.dash-tle');
  dashTitle.forEach((dashTle) => {
    dashTle.classList.toggle('hide-title')
  });
  
  navBar.classList.toggle('hidden');
});