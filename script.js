const PlayButton = document.getElementsByClassName("HomePlayButton")

PlayButton.addEventListener("click", function () {
    window.scrollTo({
        top: 50,
        behavior: "smooth"
    });
});