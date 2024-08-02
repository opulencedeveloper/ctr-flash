document.addEventListener("DOMContentLoaded", function () {
    const automationServerToggleBtn = document.getElementById("aut-ser-btn");
    const automationServerActiveStateLabel = document.querySelector(".as-sect-one-stle-two");

    if (automationServerToggleBtn && automationServerActiveStateLabel) {
        automationServerToggleBtn.addEventListener("change", function () {
            console.log("clicked");
            if (this.checked) {
                console.log("checked");
                automationServerActiveStateLabel.textContent = "Active";
                automationServerActiveStateLabel.classList.add("as-sect-one-stle-two-active");
            } else {
                automationServerActiveStateLabel.textContent = "Inactive";
                automationServerActiveStateLabel.classList.remove("as-sect-one-stle-two-active");
            }
        });
    }
});