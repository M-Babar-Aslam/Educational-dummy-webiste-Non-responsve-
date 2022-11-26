console.log("working");
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle(
        'page-scroll', window.scrollY > 0
    )
})

// show/hide FAQ answer//

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icon  //
        const icon = faq.querySelector('.faq__icon i');

        if (icon.className === 'fa fa-minus') {
            icon.className = 'fas fa-plus';
        }
        else {
            icon.className = 'fa fa-minus'
        }
    })
})
