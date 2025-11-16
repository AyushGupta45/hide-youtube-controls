let controlsHidden = false;

function toggleControls() {
  console.log("Toggling YouTube controls visibility");
  const chromeBottom = document.querySelector(".ytp-chrome-bottom");
  const overlaysContainer = document.querySelector(".ytp-overlays-container");
  const fullscreenGrid = document.querySelector(".ytp-fullscreen-grid");

  const elements = [chromeBottom, overlaysContainer, fullscreenGrid];

  controlsHidden = !controlsHidden;

  elements.forEach((element) => {
    if (element) {
      element.style.display = controlsHidden ? "none" : "";
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleControls") {
    toggleControls();
  }
});
