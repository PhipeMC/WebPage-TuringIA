const startanimation = () => {
    anime({
        targets: '.img-menu',
        //scaleX: [0.05, 1],
        translateZ: [-1,0],
        opacity: [0, 1],
        duration: 3000
    })
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        startanimation()
    }
});
