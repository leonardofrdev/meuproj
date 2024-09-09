document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function showSection(id) {
        sections.forEach(section => {
            section.classList.add('hidden');
            if (section.id === `${id}-content`) {
                section.classList.remove('hidden');
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showSection(event.target.id);
        });
    });

    // Show home section by default
    showSection('home');
});
