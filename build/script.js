
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.bottom = "-100%"
    }, 2000)
}
loaderAnimation()
