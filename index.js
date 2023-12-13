// Función para alternar la visibilidad de los tips
function toggleTipsVisibility() {
    let tipsContainer = document.getElementById("tips-container");
    console.log(tipsContainer)
    tipsContainer.style.visibility = "hidden";
}


function openPage(href) {
    window.open(href)
}

function openTab(tabName) {
    let i, x;
    x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}