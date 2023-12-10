const faqContainer = document.querySelector('.faq-accordion'); 

faqContainer.addEventListener('click', (e) => {
    const faqGroupHeader = e.target.closest('.faq-dropdown-header');
    if(!faqGroupHeader) return; 

    const faqSection = faqGroupHeader.parentElement; 
    const faqDropdown = faqSection.querySelector('.faq-dropdown-body');
    const faqIcon = faqSection.querySelector('.faq-icon-btn');

    faqDropdown.classList.toggle('open'); 
    faqIcon.classList.toggle('open'); 

    const otherFaqSection = faqContainer.querySelectorAll('.faq-dropdown'); 
    console.log(otherFaqSection);
    

    otherFaqSection.forEach((otherSection) => {
        if(otherSection!== faqSection){
            const otherSectionBody = otherSection.querySelector('.faq-dropdown-body'); 
            const otherSectionIcon = otherSection.querySelector('.faq-icon-btn'); 
            
            otherSectionBody.classList.remove('open');
            otherSectionIcon.classList.remove('open');
        }
    });
});
