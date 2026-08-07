(function () {

  "use strict";

  /*
   * This is your One Happy Bar menu.
   * The customer must check the policy box
   * before the button becomes active.
   */

  const MENU_URL =
    "https://drive.google.com/file/d/1yyOcCgscMV14FsomOX1TEvpQH_3NKVpe/preview";

  const checkbox =
    document.getElementById("policy-check");

  const continueButton =
    document.getElementById("continue-btn");


  function updateButton() {

    if (checkbox.checked) {

      continueButton.disabled = false;

    } else {

      continueButton.disabled = true;

    }

  }


  checkbox.addEventListener(
    "change",
    updateButton
  );


  continueButton.addEventListener(
    "click",
    function () {

      if (!checkbox.checked) {
        return;
      }

      window.location.href = MENU_URL;

    }
  );


  updateButton();

})();
