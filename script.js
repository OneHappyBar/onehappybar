document.addEventListener("DOMContentLoaded", function () {

    const checkbox = document.getElementById("agree");
    const button = document.getElementById("continue");

    // Your Google Drive menu
    const menuURL = "https://drive.google.com/file/d/1yyOcCgscMV14FsomOX1TEvpQH_3NKVpe/preview";

    button.disabled = true;

    checkbox.addEventListener("change", function () {
        button.disabled = !checkbox.checked;
    });

    button.addEventListener("click", function () {
        if (checkbox.checked) {
            window.location.href = menuURL;
        }
    });

});
