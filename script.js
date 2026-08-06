(function () {
  "use strict";

  const MENU_URL =
    "[drive.google.com](https://drive.google.com/file/d/1yyOcCgscMV14FsomOX1TEvpQH_3NKVpe/preview)";

  const checkbox = document.getElementById("policy-check");
  const continueBtn = document.getElementById("continue-btn");

  if (!checkbox || !continueBtn) return;

  function syncButton() {
    const ok = checkbox.checked;
    continueBtn.disabled = !ok;
    continueBtn.setAttribute("aria-disabled", String(!ok));
  }

  checkbox.addEventListener("change", syncButton);
  syncButton();

  continueBtn.addEventListener("click", function () {
    if (continueBtn.disabled) return;

    continueBtn.classList.add("is-loading");
    // Open menu preview (same tab works well on mobile kiosk / GitHub Pages)
    window.location.href = MENU_URL;
  });

  // Keyboard: Enter on checkbox row when focused via label is native;
  // allow Enter on button when enabled
  continueBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      continueBtn.click();
    }
  });
})();
