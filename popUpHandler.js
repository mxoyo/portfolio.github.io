function openPopUp(popupID) {
    const popup = document.getElementById(popupID);
    const screenOverlay = document.getElementById("popup-screenoverlay")
    popup.style.visibility = "visible";
    popup.style.opacity = "100%";
    popup.style.zIndex = "100";
    screenOverlay.style.visibility = "visible";
    screenOverlay.style.opacity = "100%";
    screenOverlay.style.zIndex = "20";
}

function closePopUp() {
    const popups = document.querySelectorAll(".popup");
    const screenOverlay = document.getElementById("popup-screenoverlay")
    popups.forEach((popup) => {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0%";
        popup.style.zIndex = "-100";
    });
    screenOverlay.style.visibility = "hidden";
    screenOverlay.style.opacity = "0%";
}