function estimatedMonthlyBudgetRequiredHandler(requiredMonthlyClicks) {
  let price = 0;
  if (requiredMonthlyClicks <= 120) {
    price = 29.99;
  }
  if (requiredMonthlyClicks > 120 && requiredMonthlyClicks <= 288) {
    price = 59.99;
  }
  if (requiredMonthlyClicks > 288 && requiredMonthlyClicks <= 600) {
    price = 119.99;
  }
  if (requiredMonthlyClicks > 600 && requiredMonthlyClicks <= 1260) {
    price = 239.99;
  }
  if (requiredMonthlyClicks > 1260 && requiredMonthlyClicks <= 2880) {
    price = 479.99;
  }
  if (requiredMonthlyClicks > 2880) {
    price = 0.167 * requiredMonthlyClicks;
  }
  return price;
}

function estimatedDailyClicksHandler(position, monthlySearchForTargetKeyword) {
  let estimatedClicks = 0;
  if (position == 1) {
    estimatedClicks = (33 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 2) {
    estimatedClicks = (15 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 3) {
    estimatedClicks = (10 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 4) {
    estimatedClicks = (7 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 5) {
    estimatedClicks = (6 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 6) {
    estimatedClicks = (4 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 7) {
    estimatedClicks = (4 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 8) {
    estimatedClicks = (4 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 9) {
    estimatedClicks = (4 / 100) * monthlySearchForTargetKeyword;
  }
  if (position == 10) {
    estimatedClicks = (4 / 100) * monthlySearchForTargetKeyword;
  }
  if (position > 10 && position <= 20) {
    estimatedClicks = (0.5 / 100) * monthlySearchForTargetKeyword;
  }
  if (position > 20 && position <= 30) {
    estimatedClicks = (0.4 / 100) * monthlySearchForTargetKeyword;
  }
  console.log("estimatedClicks:", estimatedClicks);

  return estimatedClicks;
}
// // Inputs
// let currentRankingPostion=9;// Variable that stores current position range slider value
// let targetRankingPostion=4;// Variable that stores Target position range slider value
// let monthlySearchForTargetKeyword=3000; // Variable that stores monthly searches range slider value

// // verify user values to be number_format
// // if (!is_numeric($currentRankingPostion)) {
// //     alert("Current Position is not a valid number.");}
// // if (!is_numeric($targetRankingPostion)) {
// //     alert("Target Position is not a valid number.")}
// // if (!is_numeric($monthlySearchForTargetKeyword)) {
// //     alert("Monthly keyword volume is not a valid number.")}

// 	// taget position must be lower than current Position
// 	if(targetRankingPostion>= currentRankingPostion){alert('Target position must be lower than current position');}

// let monthlyEstimatedCurrentPostionCTR = estimatedDailyClicksHandler(currentRankingPostion, monthlySearchForTargetKeyword);
// let monthlyEstimatedTagetPostion = estimatedDailyClicksHandler(targetRankingPostion, monthlySearchForTargetKeyword);
// let requiredMonthlyClicks = monthlyEstimatedTagetPostion - monthlyEstimatedCurrentPostionCTR;
// let estimatedMonthlyBudgetRequired = estimatedMonthlyBudgetRequiredHandler(requiredMonthlyClicks);
// let estimatedDailyClicks = requiredMonthlyClicks/30;

// alert(estimatedMonthlyBudgetRequired);
// alert(estimatedDailyClicks);

document.addEventListener("DOMContentLoaded", function () {
  let estimatedMonthlyBudgetRequired =
    document.getElementById("est-month-budg");
  let estimatedDailyClicks = document.getElementById("est-dail-clicks");

  //    let retrivedCurrentRankingPostion= document.getElementById("currentRankingPosition")
  //    let currentRankingPostion = parseInt(retrivedCurrentRankingPostion.value);

  // let retrivedTargetRankingPostion = document.getElementById("targetRankingPosition");
  // let targetRankingPostion = parseInt(retrivedTargetRankingPostion.value);

  // let retrivedMonthlySearchForTargetKeyword=document.getElementById("monthlySearchesForTargetKeyword");
  // let monthlySearchForTargetKeyword  = parseInt(retrivedMonthlySearchForTargetKeyword.value)

  document.querySelectorAll(".slider").forEach((slider) => {
    slider.addEventListener("input", function () {
      let value = this.value;
      let label = this.nextElementSibling;

      if (this.id === "currentRankingPosition") {
        label.textContent = value;
        let currentRankingPostion = parseInt(value) ;

        let retrivedTargetRankingPostion = document.getElementById(
          "targetRankingPosition"
        );
        let targetRankingPostion = parseInt(retrivedTargetRankingPostion.value);
        if (targetRankingPostion >= currentRankingPostion) {
            iziToast.error({
                message: "Target position must be lower than current position",
                position: "topRight",
                drag: false,
                displayMode: 1,
            });
          return;
        }

        let retrivedMonthlySearchForTargetKeyword = document.getElementById(
          "monthlySearchesForTargetKeyword"
        );
        let monthlySearchForTargetKeyword = parseInt(
          retrivedMonthlySearchForTargetKeyword.value
        );

        let monthlyEstimatedCurrentPostionCTR = estimatedDailyClicksHandler(
          currentRankingPostion,
          monthlySearchForTargetKeyword
        );
        let monthlyEstimatedTagetPostion = estimatedDailyClicksHandler(
          targetRankingPostion,
          monthlySearchForTargetKeyword
        );
        console.log(
          "monthlyEstimatedTagetPostion:",
          monthlyEstimatedTagetPostion
        );
        let requiredMonthlyClicks =
          monthlyEstimatedTagetPostion - monthlyEstimatedCurrentPostionCTR;
        estimatedMonthlyBudgetRequired.innerHTML =
          "$" + estimatedMonthlyBudgetRequiredHandler(requiredMonthlyClicks);
          const estimatedDailyClicksVal = Math.ceil(requiredMonthlyClicks / 30);
        estimatedDailyClicks.innerHTML = estimatedDailyClicksVal < 0 ? 0 : estimatedDailyClicksVal;
      } else if (this.id === "targetRankingPosition") {
        label.textContent = value;
        let retrivedCurrentRankingPostion = document.getElementById(
          "currentRankingPosition"
        );
        let currentRankingPostion = parseInt(
          retrivedCurrentRankingPostion.value
        );

        let targetRankingPostion = parseInt(value);
        if (targetRankingPostion >= currentRankingPostion) {
           iziToast.error({
                message: "Target position must be lower than current position",
                position: "topRight",
                drag: false,
                displayMode: 1,
            });
          return;
        }

        let retrivedMonthlySearchForTargetKeyword = document.getElementById(
          "monthlySearchesForTargetKeyword"
        );
        let monthlySearchForTargetKeyword = parseInt(
          retrivedMonthlySearchForTargetKeyword.value
        );

        let monthlyEstimatedCurrentPostionCTR = estimatedDailyClicksHandler(
          currentRankingPostion,
          monthlySearchForTargetKeyword
        );
        let monthlyEstimatedTagetPostion = estimatedDailyClicksHandler(
          targetRankingPostion,
          monthlySearchForTargetKeyword
        );
        console.log(
          "monthlyEstimatedTagetPostion:",
          monthlyEstimatedTagetPostion
        );
        let requiredMonthlyClicks =
          monthlyEstimatedTagetPostion - monthlyEstimatedCurrentPostionCTR;
        estimatedMonthlyBudgetRequired.innerHTML =
          "$" + estimatedMonthlyBudgetRequiredHandler(requiredMonthlyClicks);
          const estimatedDailyClicksVal = Math.ceil(requiredMonthlyClicks / 30);
          estimatedDailyClicks.innerHTML = estimatedDailyClicksVal < 0 ? 0 : estimatedDailyClicksVal;
      } else if (this.id === "monthlySearchesForTargetKeyword") {
        label.textContent = value;

        let retrivedCurrentRankingPostion = document.getElementById(
          "currentRankingPosition"
        );
        let currentRankingPostion = parseInt(
          retrivedCurrentRankingPostion.value
        );

        let retrivedTargetRankingPostion = document.getElementById(
          "targetRankingPosition"
        );
        let targetRankingPostion = parseInt(retrivedTargetRankingPostion.value);
        if (targetRankingPostion >= currentRankingPostion) {
           iziToast.error({
                message: "Target position must be lower than current position",
                position: "topRight",
                drag: false,
                displayMode: 1,
            });
          return;
        }

        let monthlySearchForTargetKeyword = parseInt(value);

        let monthlyEstimatedCurrentPostionCTR = estimatedDailyClicksHandler(
          currentRankingPostion,
          monthlySearchForTargetKeyword
        );
        let monthlyEstimatedTagetPostion = estimatedDailyClicksHandler(
          targetRankingPostion,
          monthlySearchForTargetKeyword
        );
        console.log(
          "monthlyEstimatedTagetPostion:",
          monthlyEstimatedTagetPostion
        );
        let requiredMonthlyClicks =
          monthlyEstimatedTagetPostion - monthlyEstimatedCurrentPostionCTR;
        estimatedMonthlyBudgetRequired.innerHTML =
          "$" + estimatedMonthlyBudgetRequiredHandler(requiredMonthlyClicks);
          const estimatedDailyClicksVal = Math.ceil(requiredMonthlyClicks / 30);
          estimatedDailyClicks.innerHTML = estimatedDailyClicksVal < 0 ? 0 : estimatedDailyClicksVal;
      }
    });
  });
});
