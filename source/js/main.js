let navigation = document.querySelector(".navigation");
let button = document.querySelector(".burger-button");

checkSize();

window.onresize = checkSize;


function checkSize() {
    if(window.innerWidth < 680) {
        navigation.style.height = "0px";
        button.classList.remove("burger-button--active");
    } else {
        navigation.style.height = "auto";
        button.classList.add("burger-button--active");
    }
}



button.addEventListener("click", () => {
    if (navigation.style.height == "0px") {
        navigation.style.height = `${ navigation.scrollHeight }px`
        button.classList.add("burger-button--active");
    } else {
        navigation.style.height = `${ navigation.scrollHeight }px`;
        window.getComputedStyle(navigation, null).getPropertyValue("height");
        navigation.style.height = "0";
        button.classList.remove("burger-button--active");
    }
});

navigation.addEventListener("transitionend", () => {
    if (navigation.style.height !== "0px") {
        navigation.style.height = "auto"
    } else {
        navigation.style.height = "0px";
    }
});