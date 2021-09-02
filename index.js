function clickWin() {
    alert("The Windows Logo was clicked!");
}


function shStartmenu() {
    const tarDiv = document.getElementById("startmenu");
    const trigger = document.getElementById("winlogo");

    if (tarDiv.style.display !== "none") {
        tarDiv.style.display = "none";
    }
    else {
        tarDiv.style.display = "block";
    }
}

function ie() {
    alert("I'm sorry, but IE is dead.");
}

init();