(function () {
  "use strict";

  const checkbox = document.getElementById("policy-check");
  const continueBtn = document.getElementById("continue-btn");

  if (!checkbox || !continueBtn) return;

  function syncButton() {
    continueBtn.disabled = !checkbox.checked;
    continueBtn.setAttribute("aria-disabled", String(!checkbox.checked));
  }

  checkbox.addEventListener("change", syncButton);
  syncButton();

  continueBtn.addEventListener("click", function () {
    if (continueBtn.disabled) return;

    window.location.href = "/onehappybar/One_Happy_Bar_Menu.pdf";
  });
})();
