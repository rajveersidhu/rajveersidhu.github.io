document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(showSection, options);
    
    function showSection(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }
    
    sections.forEach(section => {
        observer.observe(section);
    });
});