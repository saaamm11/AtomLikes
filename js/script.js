const popupclose = document.querySelector('.pop_up_close')
const popupcl = document.querySelector('.po')
const flw = document.querySelectorAll('.hetevord')


flw.forEach(flwq => {
    flwq.addEventListener('click', function () {
        popupcl.classList.remove('po')
    })
});

popupclose.addEventListener('click', function () {
    popupcl.classList.add('po')
})
