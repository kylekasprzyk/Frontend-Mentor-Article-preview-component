const tooltipEl = document.getElementById("tooltip-el")
const tooltipElTwo = document.getElementById("tooltip-el-2")
const shareButton = document.getElementById('share-button')
let isClicked = true;

let showOrHide = function () {
    if (isClicked) {
        tooltipEl.style.display = 'flex';
        tooltipElTwo.style.display = 'flex';
        isClicked = false;
    } else {
        tooltipEl.style.display = 'none';
        tooltipElTwo.style.display = 'none';
        shareButton.style.display = 'flex';
        isClicked = true;
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector("#loader");
        loader.classList.add('loader-active');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2500);
});
