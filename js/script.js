const flw = document.querySelectorAll('.hetevord');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popupclose');

flw.addEventListener("click", function () {
    popup.classList.remove("display-none")
})

