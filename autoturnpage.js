let intervalId = null; 
let isRunning = false; 

function toggleAutoClick() {
    if (isRunning) {
        clearInterval(intervalId);
        console.log("Auto-clicking stopped.");
        isRunning = false;
    } else {
        intervalId = setInterval(function() {
            let nextButton = document.querySelector(".renderTarget_pager_button_right");
            if (nextButton) {
                nextButton.click();
                console.log("Next page button clicked!");
            } else {
                console.log("Next button not found!");
            }
        }, 10000);
        console.log("Auto-clicking started.");
        isRunning = true;
    }
}

document.removeEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    if (event.key.toLowerCase() === "n") { 
        toggleAutoClick();
    }
}

document.addEventListener("keydown", handleKeyPress);