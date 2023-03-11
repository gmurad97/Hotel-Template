let images = document.querySelector(".hs-images").getElementsByTagName("img");
let imagePosition = 0;

function deactiveImages() {
    for (let image of images) {
        if (image.classList.contains("hs-images-active")) {
            image.classList.remove("hs-images-active");
        }
    }
}

function nextSlide() {
    imagePosition++;
    if (imagePosition >= images.length) {
        imagePosition = 0;
    }
    deactiveImages();
    images[imagePosition].classList.add("hs-images-active");
}

function prevSlide() {
    imagePosition--;
    if (imagePosition < 0) {
        imagePosition = images.length - 1;
    }
    deactiveImages();
    images[imagePosition].classList.add("hs-images-active");
}

let autoPlaySlider = setInterval(nextSlide, 5120);

document.getElementsByClassName("h-slider")[0].onmouseenter = function () {
    clearInterval(autoPlaySlider);
}

document.getElementsByClassName("h-slider")[0].onmouseleave = function () {
    autoPlaySlider = setInterval(nextSlide, 5120);
}