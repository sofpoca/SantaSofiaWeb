document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('.page-section');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const target = document.getElementById(id);
        if (target) {
            target.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    // 👉 Clicks del menú
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            history.pushState(null, '', `#${targetId}`);
            showSection(targetId);
        });
    });

    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showSection(initialHash);
    } else {
        showSection('inicio');
    }

    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        showSection(hash || 'inicio');
    });
});
