
function liteMod(){

    document.main.style.backgroundColor = "#ffffff"
    document.main.style.color = "#0b131d"
}

document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".head").classList.toggle("show-menu")
);