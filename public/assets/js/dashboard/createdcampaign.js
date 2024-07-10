const button1 = document.getElementById("camp-overview-section-button-one");
const button2 = document.getElementById("camp-overview-section-button-two");
const toggleCheckbox = document.getElementById("toggle");
const geoTargetCheckbox = document.getElementById("geo-target");
const worldWideCheckbox = document.getElementById("world-wide");
const campaignAddress = document.querySelector(".campaign-address")

if (geoTargetCheckbox) {
  geoTargetCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
    } else {
      campaignAddress.style.display = "block";
    }
  });
}

if (worldWideCheckbox) {
  worldWideCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
    } else {
      campaignAddress.style.display = "none";
    }
  });
}

let countryCityPairs = [];

document.querySelectorAll(".all-camp-toggle").forEach((toggle) => {
  console.log("clicked");
  toggle.addEventListener("change", function () {
    const campaState = this.closest(".campa-state");
    const paragraph = campaState.querySelector("p");
    if (this.checked) {
      campaState.classList.add("campa-state-success");
      campaState.classList.remove("campa-state-error");
      paragraph.textContent = "Active";
    } else {
      campaState.classList.add("campa-state-error");
      campaState.classList.remove("campa-state-success");
      paragraph.textContent = "Not Active";
    }
  });
});

if (button1 && button2) {
  button1.addEventListener("click", function () {
    button2.classList.remove("camp-overview-section-active-button");
    button1.classList.add("camp-overview-section-active-button");
  });

  button2.addEventListener("click", function () {
    button1.classList.remove("camp-overview-section-active-button");
    button2.classList.add("camp-overview-section-active-button");
  });
}

if (toggleCheckbox) {
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      console.log("Toggle is ON");
    } else {
      console.log("Toggle is OFF");
    }
  });
}

function showContent(contentId) {
  const contents = document.querySelectorAll(".camp-overview-animate");
  contents.forEach((content) => {
    content.style.height = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      content.style.height = "0px";
      content.addEventListener("transitionend", function handler() {
        content.removeEventListener("transitionend", handler);
      });
      content.classList.remove("dvisible");
    });
  });

  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = "flex";
  selectedContent.style.height = "0px";
  requestAnimationFrame(() => {
    selectedContent.style.height = selectedContent.scrollHeight + "px";
    selectedContent.classList.add("dvisible");
    selectedContent.addEventListener("transitionend", function handler() {
      selectedContent.style.height = "auto";
      selectedContent.removeEventListener("transitionend", handler);
    });
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown-container")) {
    closeAllDropdowns();
  }
});

function toggleDropdown(icon) {
  const container = icon
    .closest(".dropdown-container")
    .querySelector(".datalist-container");
  container.classList.toggle("show");
}

function closeAllDropdowns() {
  document.querySelectorAll(".datalist-container").forEach((container) => {
    container.classList.remove("show");
  });
}

function selectOption(option, inputId) {
  const input = option
    .closest(".dropdown-container")
    .querySelector(".dropdown-input");
  input.value = option.textContent.trim();
  option.closest(".datalist-container").classList.remove("show");
}

function filterOptions(event) {
  const input = event.target;
  const filter = input.value.toLowerCase();
  const container = input
    .closest(".dropdown-container")
    .querySelector(".datalist-container");
  let hasVisibleOptions = false;

  container.querySelectorAll("div").forEach((option) => {
    if (option.textContent.toLowerCase().includes(filter)) {
      option.style.display = "block";
      hasVisibleOptions = true;
    } else {
      option.value = "sdlhis";
    }
  });

  if (filter && hasVisibleOptions) {
    container.classList.add("show");
  } else {
    container.classList.remove("show");
  }
}

const selectionMutilpleCountryBtn = document.querySelector(".sel-mul-con");
const addKeywordForm = document.querySelector(".add-keyword-form");
const selectMutltiForm = document.querySelector(".select-mutlti-form");
const closeMutltiFormBtn = document.querySelector(".close-multi-sel");



if (closeMutltiFormBtn) {
  closeMutltiFormBtn.addEventListener("click", (event) => {
    addKeywordForm.style.display = "block";
    selectMutltiForm.style.display = "none";
  });
}

let zIndexCounter = 1;
let counter = 0;
let selections;
let parentWrapper = document.querySelector("#keyword-input-item-wrapper");

function generateDropdowns() {
  const wrapper = document.querySelector(".keyword-input-item_wrapper");
  

  const newWrapper = wrapper.cloneNode(true);
  newWrapper.classList.add("new-node");

  const inputs = newWrapper.querySelectorAll("input");
  inputs.forEach((input, index) => {
    input.value = "";

    const uniqueId = `input-${counter}-${index}`;
    input.setAttribute("id", uniqueId);

    const label = newWrapper.querySelector(
      `label[for=${input.getAttribute("id")}]`
    );
    if (label) {
      label.setAttribute("for", uniqueId);
    }
  });

  parentWrapper.appendChild(newWrapper);
  requestAnimationFrame(() => {
    newWrapper.classList.add("show");
    reassignZIndex(parentWrapper);
  });

  counter++;
}

// function reassignZIndex(parentWrapper) {
//   const items = parentWrapper.querySelectorAll(".dropdown-container");

//   items.forEach((item, index) => {
//     console.log(`Assigning z-index ${zIndexCounter + index} to item`, item);
//     item.style.zIndex = zIndexCounter + index;
//   });
//   zIndexCounter += items.length;
// }

function reassignZIndex(parentWrapper) {
  const items = parentWrapper.querySelectorAll(".dropdown-container");

  const itemCount = items.length;
  items.forEach((item, index) => {
    // Calculate z-index such that the last item has the smallest z-index
    console.log(`Assigning z-index ${zIndexCounter + itemCount - index - 1} to item`, item);
    item.style.zIndex = zIndexCounter + itemCount - index - 1;
  });
  zIndexCounter += itemCount;
}
// function addCountry(event) {
//   event.preventDefault();

//   const parentWrapper = document.getElementById('keyword-input-item-wrapper');
//   const dropdownContainers = parentWrapper.querySelectorAll(".dropdown-container");

//   let countryValue = "";
//   let cityValue = "";

//   if (dropdownContainers.length <= 0) return;

//   let retrievedVal = [];

//   dropdownContainers.forEach((container) => {
//     const input = container.querySelector("input");
//     if (input.value === "") return;
//     if (input.id === "country") {
//       countryValue = input.value;
//     } else if (input.id === "city") {
//       cityValue = input.value;
//     }
//     retrievedVal.push({ country: countryValue, city: cityValue });
//   });

//   if (!countryValue || !cityValue) return;

//   // Now create new nodes for each pair in retrievedVal
//   retrievedVal.forEach(pair => {
//     const countryNode = document.createElement("div");
//     countryNode.classList.add(
//       "dropdown-container",
//       "the-project-item-input",
//       "keyword-input-item",
//       "new-node"
//     );
//     countryNode.setAttribute("data-dropdown", "");
//     countryNode.innerHTML = `
//       <label for="country">Country</label>
//       <input type="text" required id="country" class="dropdown-input" placeholder="Select Country." list="suggestions" value="${pair.country}" oninput="filterOptions(event)">
//       <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//       <div class="datalist-container">
//         <div onclick="selectOption(this, 'country')">Nigeria</div>
//         <div onclick="selectOption(this, 'country')">USA</div>
//         <div onclick="selectOption(this, 'country')">Canada</div>
//       </div>
//     `;

//     const cityNode = document.createElement("div");
//     cityNode.classList.add(
//       "dropdown-container",
//       "the-project-item-input",
//       "keyword-input-item",
//       "new-node"
//     );
//     cityNode.setAttribute("data-dropdown", "");
//     cityNode.innerHTML = `
//       <label for="city">City</label>
//       <input type="text" required id="city" class="dropdown-input" placeholder="Select City." list="suggestions" value="${pair.city}" oninput="filterOptions(event)">
//       <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//       <div class="datalist-container">
//         <div onclick="selectOption(this, 'city')">Port Harcourt</div>
//         <div onclick="selectOption(this, 'city')">Lagos</div>
//         <div onclick="selectOption(this, 'city')">Abuja</div>
//       </div>
//     `;

//     parentWrapper.appendChild(countryNode);
//     parentWrapper.appendChild(cityNode);

//     let maxZIndex = 0;
//     parentWrapper.querySelectorAll(".dropdown-container").forEach((item) => {
//       const zIndex = parseInt(window.getComputedStyle(item).zIndex);
//       if (zIndex > maxZIndex) {
//         maxZIndex = zIndex;
//       }
//     });

//     countryNode.style.zIndex = maxZIndex + 1;
//     cityNode.style.zIndex = maxZIndex + 1;

//     requestAnimationFrame(() => {
//       countryNode.classList.add("show");
//       cityNode.classList.add("show");
//     });
//   });

//   selectMutltiForm.style.display = "none";
//   addKeywordForm.style.display = "block";
// }

// function addCountry(event) {
//   event.preventDefault();

//   const dropdownContainers =  document.querySelectorAll(".dropdown-container");
//   console.log(parentWrapper);

//   let countryValue = "";
//   let cityValue = "";

//   if (dropdownContainers.length <= 0) return;

//   let retrivedVal = [];

//   dropdownContainers.forEach((container) => {
//     const input = container.querySelector("input");
//     if (input.value === "") return;
//     if (input.id === "country") {
//       countryValue = input.value;
//     } else if (input.id === "city") {
//       cityValue = input.value;
//     }
//     retrivedVal.push({ country: countryValue, city: cityValue });
    
//   });

//   if (!countryValue || !cityValue) return;

//   countryCityPairs = retrivedVal;

//   const countryNode = document.createElement("div");
//   countryNode.classList.add(
//     "dropdown-container",
//     "the-project-item-input",
//     "keyword-input-item",
//     "new-node"
//   );
//   countryNode.setAttribute("data-dropdown", "");
//   countryNode.innerHTML = `
//     <label for="country">Country</label>
//     <input type="text" required id="country" class="dropdown-input" placeholder="Select Country." list="suggestions" value="${countryValue}" oninput="filterOptions(event)">
//     <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//     <div class="datalist-container">
//       <div onclick="selectOption(this, 'country')">Nigeria</div>
//       <div onclick="selectOption(this, 'country')">USA</div>
//       <div onclick="selectOption(this, 'country')">Canada</div>
//     </div>
//   `;

//   const cityNode = document.createElement("div");
//   cityNode.classList.add(
//     "dropdown-container",
//     "the-project-item-input",
//     "keyword-input-item",
//     "new-node"
//   );
//   cityNode.setAttribute("data-dropdown", "");
//   cityNode.innerHTML = `
//     <label for="city">City</label>
//     <input type="text" required id="city" class="dropdown-input" placeholder="Select City." list="suggestions" value="${cityValue}" oninput="filterOptions(event)">
//     <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//     <div class="datalist-container">
//       <div onclick="selectOption(this, 'city')">Port Harcourt</div>
//       <div onclick="selectOption(this, 'city')">Lagos</div>
//       <div onclick="selectOption(this, 'city')">Abuja</div>
//     </div>
//   `;

//   const campaignAddress = document.getElementById("campaign-address");
//   campaignAddress.appendChild(countryNode);
//   campaignAddress.appendChild(cityNode);

//   let maxZIndex = 0;
//   campaignAddress.querySelectorAll(".dropdown-container").forEach((item) => {
//     const zIndex = parseInt(window.getComputedStyle(item).zIndex);
//     if (zIndex > maxZIndex) {
//       maxZIndex = zIndex;
//     }
//   });

//   countryNode.style.zIndex = maxZIndex + 1;
//   cityNode.style.zIndex = maxZIndex + 1;

//   requestAnimationFrame(() => {
//     countryNode.classList.add("show");
//     cityNode.classList.add("show");
//   });
//   selectMutltiForm.style.display = "none";
//   addKeywordForm.style.display = "block";
// }
// function addCountry(event) {
//   event.preventDefault();

//   const dropdownContainers = document.querySelectorAll(".dropdown-container");

//   let countryValue = "";
//   let cityValue = "";

//   if (dropdownContainers.length <= 0) return;

//   dropdownContainers.forEach((container) => {
//     const input = container.querySelector("input");
//     if (input.value === "") return;
//     if (input.id === "country") {
//       countryValue = input.value;
//     } else if (input.id === "city") {
//       cityValue = input.value;
//     }
//   });

//   if (!countryValue || !cityValue) return;

//   const countryNode = document.createElement("div");
//   countryNode.classList.add(
//     "dropdown-container",
//     "the-project-item-input",
//     "keyword-input-item",
//     "new-node"
//   );
//   countryNode.setAttribute("data-dropdown", "");
//   countryNode.innerHTML = `
//     <label for="country">Country</label>
//     <input type="text" required id="country" class="dropdown-input" placeholder="Select Country." list="suggestions" value="${countryValue}" oninput="filterOptions(event)">
//     <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//     <div class="datalist-container">
//       <div onclick="selectOption(this, 'country')">Nigeria</div>
//       <div onclick="selectOption(this, 'country')">USA</div>
//       <div onclick="selectOption(this, 'country')">Canada</div>
//     </div>
//   `;

//   const cityNode = document.createElement("div");
//   cityNode.classList.add(
//     "dropdown-container",
//     "the-project-item-input",
//     "keyword-input-item",
//     "new-node"
//   );
//   cityNode.setAttribute("data-dropdown", "");
//   cityNode.innerHTML = `
//     <label for="city">City</label>
//     <input type="text" required id="city" class="dropdown-input" placeholder="Select City." list="suggestions" value="${cityValue}" oninput="filterOptions(event)">
//     <img src="/assets/icons/drop-down-line.svg" class="dropdown-icon" onclick="toggleDropdown(this)">
//     <div class="datalist-container">
//       <div onclick="selectOption(this, 'city')">Port Harcourt</div>
//       <div onclick="selectOption(this, 'city')">Lagos</div>
//       <div onclick="selectOption(this, 'city')">Abuja</div>
//     </div>
//   `;

//   const campaignAddress = document.getElementById("campaign-address");
//   campaignAddress.appendChild(countryNode);
//   campaignAddress.appendChild(cityNode);

//   let maxZIndex = 0;
//   campaignAddress.querySelectorAll(".dropdown-container").forEach((item) => {
//     const zIndex = parseInt(window.getComputedStyle(item).zIndex);
//     if (zIndex > maxZIndex) {
//       maxZIndex = zIndex;
//     }
//   });

//   countryNode.style.zIndex = maxZIndex + 1;
//   cityNode.style.zIndex = maxZIndex + 1;

//   requestAnimationFrame(() => {
//     countryNode.classList.add("show");
//     cityNode.classList.add("show");
//   });
//   selectMutltiForm.style.display = "none";
//   addKeywordForm.style.display = "block";
// }

document.addEventListener("DOMContentLoaded", () => {
  function handleTooltip() {
    const isDesktop = window.innerWidth >= 500;
    const buttons = document.querySelectorAll(".info-button");

    buttons.forEach((button) => {
      const tooltip = button.querySelector(".tooltip");

      if (isDesktop) {
        button.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
          setTimeout(() => {
            tooltip.style.opacity = "1";
            tooltip.style.transform = "translateY(-50%) translateX(0)";
          }, 0);
        });

        button.addEventListener("mouseleave", () => {
          tooltip.style.opacity = "0";
          tooltip.style.transform = "translateY(-50%) translateX(-10px)";
          setTimeout(() => {
            tooltip.style.display = "none";
          }, 300);
        });
      } else {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
        tooltip.style.display = "none";
      }
    });
  }

  function handleProgTooltip() {
    const isDesktop = window.innerWidth >= 500;
    const buttons = document.querySelectorAll(".info-button");

    buttons.forEach((button) => {
      const tooltip = button.querySelector(".prog-cardtooltip");
      if (tooltip) {
        button.addEventListener("mouseenter", () => {
          tooltip.style.display = "block";
          setTimeout(() => {
            tooltip.style.opacity = "1";
            tooltip.style.transform = "translateY(-50%) translateX(0)";
          }, 0);
        });

        button.addEventListener("mouseleave", () => {
          tooltip.style.opacity = "0";
          tooltip.style.transform = "translateY(-50%) translateX(-10px)";
          setTimeout(() => {
            tooltip.style.display = "none";
          }, 300);
        });
      }
    });
  }

  handleTooltip();
  handleProgTooltip();

  window.addEventListener("resize", handleTooltip);
});

document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".custom-select");

  if (customSelect) {
    customSelect.addEventListener("focus", function () {
      this.classList.add("focused");
    });

    customSelect.addEventListener("blur", function () {
      this.classList.remove("focused");
    });
  }

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    let currentOverlay = null;
    let startY = null;

    document.querySelectorAll(".info-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const overlayy = button.querySelector(".overlayy");
        const mobileDrawup = button.querySelector(".mobile-drawup");

        if (currentOverlay && currentOverlay !== overlayy) {
          currentOverlay.classList.remove("show");
          currentOverlay
            .querySelector(".mobile-drawup")
            .classList.remove("show");
        }
        if (overlayy) {
          overlayy.classList.add("show");
        }

        if (mobileDrawup) {
          mobileDrawup.classList.add("show");
        }

        currentOverlay = overlayy;

        event.stopPropagation();
      });
    });

    document.addEventListener("touchstart", (e) => {
      if (currentOverlay && currentOverlay.classList.contains("show")) {
        startY = e.touches[0].clientY;
      }
    });

    document.addEventListener("touchmove", (e) => {
      if (currentOverlay && currentOverlay.classList.contains("show")) {
        const moveY = e.touches[0].clientY;
        if (moveY - startY > 50) {
          currentOverlay.classList.remove("show");
          currentOverlay
            .querySelector(".mobile-drawup")
            .classList.remove("show");
          currentOverlay = null;
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (
        currentOverlay &&
        currentOverlay.classList.contains("show") &&
        (!currentOverlay.querySelector(".overlay-content").contains(e.target) ||
          currentOverlay.contains(e.target))
      ) {
        currentOverlay.classList.remove("show");
        currentOverlay.querySelector(".mobile-drawup").classList.remove("show");
        currentOverlay = null;
      }
    });
  }
});

function generateHourOpList() {
  const containerOP = document.querySelector(".gen-op-hr");
  const periods = ["AM", "PM"];

  if (containerOP) {
    periods.forEach((period) => {
      for (let hour = 1; hour <= 12; hour++) {
        const div = document.createElement("div");
        div.textContent = `${hour} ${period}`;
        div.onclick = function () {
          selectOption(this, `${hour} ${period}`);
        };
        containerOP.appendChild(div);
      }
    });
  }
}

function generateCloseHourList() {
  const containerCl = document.querySelector(".gen-cl-hr");
  const periods = ["AM", "PM"];

  if (containerCl) {
    periods.forEach((period) => {
      for (let hour = 1; hour <= 12; hour++) {
        const div = document.createElement("div");
        div.textContent = `${hour} ${period}`;
        div.onclick = function () {
          selectOption(this, `${hour} ${period}`);
        };
        containerCl.appendChild(div);
      }
    });
  }
}

let selectedTimeCheckBox = document.querySelector(".closing-time");

const timeCheckButton = document.getElementById("time-check-button");

if (timeCheckButton) {
  timeCheckButton.addEventListener("change", function () {
    selectedTimeCheckBox.classList.toggle("active");
  });
}

window.addEventListener("load", function () {
  generateHourOpList();
  generateCloseHourList();
});

const addButton = document.querySelector(".add-keyword-header-btn");
function addKeyword(event) {
  event.preventDefault();
}

if (addButton) {
  const inputField = document.getElementById("keyword");
  const keywordContainer = document.querySelector(".added-keywrd-container");
  const keywordsArray = [];

  addButton.addEventListener("click", () => {
    const keyword = inputField.value.trim();
    if (keyword && !keywordsArray.includes(keyword)) {
      keywordsArray.push(keyword);

      const newButton = document.createElement("button");
      newButton.innerHTML = `<p>${keyword}</p><div><img src="/assets/icons/light-close.svg" /></div>`;

      // Add event listener to remove the keyword when the button is clicked
      newButton.addEventListener("click", () => {
        const index = keywordsArray.indexOf(keyword);
        if (index > -1) {
          keywordsArray.splice(index, 1);
        }
        newButton.remove();
      });

      keywordContainer.appendChild(newButton);

      inputField.value = "";
    }
  });
}

function addCountry(event) {
  event.preventDefault();

    const campaignAddress = document.getElementById("keyword-input-item-wrapper");
    const dropdownContainers = campaignAddress.querySelectorAll(".dropdown-container");
    console.log(dropdownContainers);
    
    let countryValue = "";
    let cityValue = "";
    let countryCityPairs = [];
    
    dropdownContainers.forEach((container) => {
      const input = container.querySelector("input");
      const inputCountry = container.querySelector('input[data-identify="country"]');
      const inputCity = container.querySelector('input[data-identify="city"]');
      countryCityPairs.push({ country: countryValue, city: cityValue });
      if (inputCountry) {
        console.log(input.value)
        countryValue = input.value;
      } else if (inputCity) {
        console.log(input.value)
        cityValue = input.value;
      }
       if (countryValue && cityValue) {
      
    }
    });
    
   
    console.log(countryCityPairs)
    const target = document.getElementById("campaign-address");
    target.innerHTML = campaignAddress.innerHTML;
    
    // Manually set the input values in the target element
    const targetDropdownContainers = target.querySelectorAll(".dropdown-container");
    let index = 0;
    const tval = targetDropdownContainers.forEach((container) => {
      const input = container.querySelector("input");
      const inputCountry = container.querySelector('input[data-identify="country"]');
      const inputCity = container.querySelector('input[data-identify="city"]');
      console.log(index)
      if(index )
      if (inputCountry) {
         input.value =  countryValue;
      } else if (inputCity) {
        console.log(input.value)
        input.value = cityValue;
      }
      
    });
    
    console.log(tval);
    addKeywordForm.style.display = "block";
    selectMutltiForm.style.display = "none";

}

if (selectionMutilpleCountryBtn) {
  selectionMutilpleCountryBtn.addEventListener("click", (event) => {
    const campaignAddress = document.getElementById("campaign-address");
    const dropdownContainers = campaignAddress.querySelectorAll(".dropdown-container");
    console.log(dropdownContainers);
    let countryValue = "";
    let cityValue = "";
    let countryCityPairs = [];
    
  //   dropdownContainers.forEach((container) => {
  //     const input = container.querySelector("input");
  //     const inputCountry = container.querySelector('input[data-identify="country"]');
  // const inputCity = container.querySelector('input[data-identify="city"]');
  //     console.log(inputCountry, inputCity, "here")
  //     if (inputCountry) {
        
  //       countryValue = input.value;
  //     } else if (inputCity) {
  //       cityValue = input.value;
  //     }
  //   });
    
    if (countryValue && cityValue) {
      countryCityPairs.push({ country: countryValue, city: cityValue });
    }
    
    const target = document.querySelector(".keyword-input-item_wrapper");
    target.innerHTML = campaignAddress.innerHTML;
    
    // Manually set the input values in the target element
    const targetDropdownContainers = target.querySelectorAll(".dropdown-container");
    targetDropdownContainers.forEach((container) => {
      const input = container.querySelector("input");
      const inputCountry = container.querySelector('input[data-identify="country"]');
      const inputCity = container.querySelector('input[data-identify="city"]');
      if (inputCountry) {
        input.value = countryValue;
      } else if (inputCity) {
        input.value = cityValue;
      }
    });
    
    console.log(countryCityPairs);
    addKeywordForm.style.display = "none";
    selectMutltiForm.style.display = "block";
  });
}



// const campaignAddress = document.getElementById('campaign-address');
// const countryInputs = campaignAddress.querySelectorAll('input[id^="country"]');
// const cityInputs = campaignAddress.querySelectorAll('input[id^="city"]');

// let retrivedVal = [];

// for (let i = 0; i < countryInputs.length; i++) {
//   const country = countryInputs[i].value;
//   const city = cityInputs[i] ? cityInputs[i].value : null;
//  // const id = countryInputs[i].id.split('-')[1];
//   if (country && city) {
//     retrivedVal.push({country, city });
//   }
// }
// countryCityPairs = retrivedVal;