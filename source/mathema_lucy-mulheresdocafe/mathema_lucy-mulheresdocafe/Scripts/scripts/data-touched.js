Array.from(document.querySelectorAll('.form-row input')).forEach (i => i.addEventListener('invalid', () => {
    i.dataset.touched = true;
})
i.addEventListener('blur', () => {
    if (i.value !== '') i.dataset.touched = true;
})

)
