let navigation = document.querySelector(".navigation");
let navigation_height = navigation.clientHeight;
let button = document.querySelector(".burger-button");

console.log(navigation_height);

button.addEventListener("click",function (e) {
    menu("click");
});

if(window.innerWidth < 680) {
        navigation.style.height = 0;
        menu("noclick");
}


window.onresize = function() {
    menu("noclick");
}



function menu(type) {

    if(type == "click") {
        if(navigation.classList.contains("navigation--active")) {
            navigation.style.visibility = "hidden";
             navigation.style.height = 0 + "px";
             navigation.classList.remove("navigation--active");
             button.classList.remove("burger-button--active");
        } else {
            navigation.style.visibility = "visible";
            navigation.style.height = navigation_height + "px";
            navigation.classList.add("navigation--active")
            button.classList.add("burger-button--active");
        }
        return 0;   
    }


    if(window.innerWidth > 695) {
        navigation.style.height = "auto";
        navigation.style.visibility = "visible";
    }
    else {
        navigation.style.height = 0;
        navigation.style.visibility = "hidden";
        navigation.classList.remove("navigation--active");
        button.classList.remove("burger-button--active");
    }



}