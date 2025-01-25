export function clickHandler(e) {
    if (e.target.checked) {
        document.getElementById("navBarMobile").classList.add("activeMenu");
        document.querySelector(".blurNav").classList.add("activeMenu");
    } else {
        document.getElementById("navBarMobile").classList.remove("activeMenu");
        document.querySelector(".blurNav").classList.remove("activeMenu");
    }
}

