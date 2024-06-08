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
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.innerHTML = "<p>Thanks for your message! We'll be in touch soon.</p>";
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    formStatus.innerHTML = data.errors.map(error => `<p>${error.message}</p>`).join('');
                } else {
                    formStatus.innerHTML = "<p>Oops! There was a problem submitting your form</p>";
                }
            }
        } catch (error) {
            formStatus.innerHTML = "<p>Oops! There was a problem submitting your form</p>";
        }
    });
});
