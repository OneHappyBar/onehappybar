(function () {
  "use strict";

  const MENU_URL =
    "https://drive.google.com/file/d/1yyOcCgscMV14FsomOX1TEvpQH_3NKVpe/preview";

  const checkbox = document.getElementById("policy-check");
  const continueBtn = document.getElementById("continue-btn");

  if (!checkbox || !continueBtn) return;

  function syncButton() {
    const checked = checkbox.checked;

    continueBtn.disabled = !checked;
    continueBtn.setAttribute(
      "aria-disabled",
      String(!checked)
    );
  }

  checkbox.addEventListener("change", syncButton);

  syncButton();

  continueBtn.addEventListener("click", function () {

    if (continueBtn.disabled) return;

    window.location.href = MENU_URL;

  });

})();
