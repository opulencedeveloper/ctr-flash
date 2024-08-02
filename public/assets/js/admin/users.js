const blockedUsersSearchInput = document.getElementById(
  "blockedUsersSearchInput"
);

if (blockedUsersSearchInput) {
  blockedUsersSearchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#blockedUsersTableBody tr");
    rows.forEach((row) => {
      const firstTd = row.querySelector("td").textContent.toLowerCase();
      if (firstTd.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

const activeUsersSearchInput = document.getElementById(
  "activeUsersSearchInput"
);
if (activeUsersSearchInput) {
  activeUsersSearchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#activeUsersTableBody tr");
    rows.forEach((row) => {
      const firstTd = row.querySelector("td").textContent.toLowerCase();
      if (firstTd.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

const allUsersSearchInput = document.getElementById("allUsersSearchInput");

if (allUsersSearchInput) {
  allUsersSearchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#allUsersTableBody tr");
    rows.forEach((row) => {
      const firstTd = row.querySelector("td").textContent.toLowerCase();
      if (firstTd.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

const openBlockUserBtns = document.querySelectorAll(".open-block-user-btn");
const blockUserOverlay = document.getElementById("block-user-overlay");
const blockUserOverlayCloseBtn = document.getElementById(
  "block-user-overlay-close-btn"
);

openBlockUserBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    blockUserOverlay.style.display = "flex";
  });
});

const blockUserDalogContainer = document.querySelector(
  ".block-user-dialog-container"
);

if (blockUserOverlayCloseBtn) {
  blockUserOverlayCloseBtn.addEventListener("click", () => {
    blockUserDalogContainer.classList.add("fadeOut");

    blockUserDalogContainer.addEventListener(
      "animationend",
      function () {
        blockUserDalogContainer.classList.remove("fadeOut");
        blockUserOverlay.style.display = "none";
      },
      { once: true }
    );
  });
}

if (blockUserOverlay) {
  blockUserOverlay.addEventListener("click", () => {
    blockUserDalogContainer.classList.add("fadeOut");

    blockUserDalogContainer.addEventListener(
      "animationend",
      function () {
        blockUserDalogContainer.classList.remove("fadeOut");
        blockUserOverlay.style.display = "none";
      },
      { once: true }
    );
  });
}

const openUnBlockUserBtns = document.querySelectorAll(".open-unblock-user-btn");
const unBlockUserOverlay = document.getElementById("unblock-user-overlay");
const unBlockUserOverlayCloseBtn = document.getElementById(
  "unblock-user-overlay-close-btn"
);

openUnBlockUserBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clikcaaaaa");
    unBlockUserOverlay.style.display = "flex";
  });
});

const unBlockUserDalogContainer = document.querySelector(
  ".unblock-user-dialog-container"
);

if (unBlockUserOverlayCloseBtn) {
  unBlockUserOverlayCloseBtn.addEventListener("click", () => {
    unBlockUserDalogContainer.classList.add("fadeOut");

    unBlockUserDalogContainer.addEventListener(
      "animationend",
      function () {
        unBlockUserDalogContainer.classList.remove("fadeOut");
        unBlockUserOverlay.style.display = "none";
      },
      { once: true }
    );
  });
}

if (unBlockUserOverlay) {
  unBlockUserOverlay.addEventListener("click", () => {
    unBlockUserDalogContainer.classList.add("fadeOut");

    unBlockUserDalogContainer.addEventListener(
      "animationend",
      function () {
        unBlockUserDalogContainer.classList.remove("fadeOut");
        unBlockUserOverlay.style.display = "none";
      },
      { once: true }
    );
  });
}
