document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggleBtn.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Default to dark mode if OS preference is dark and no saved preference
        body.classList.add('dark-mode');
        themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggleBtn.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    });

    // Semester Expand/Collapse Functionality
    const semesterHeaders = document.querySelectorAll('.semester-header');

    semesterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const semesterCard = header.closest('.semester-card');
            semesterCard.classList.toggle('expanded');

            // Optional: Collapse other open semesters
            semesterHeaders.forEach(otherHeader => {
                const otherSemesterCard = otherHeader.closest('.semester-card');
                if (otherSemesterCard !== semesterCard && otherSemesterCard.classList.contains('expanded')) {
                    otherSemesterCard.classList.remove('expanded');
                }
            });
        });
    });

    // Smooth scrolling for navigation links (already handled by CSS scroll-behavior: smooth, but good to have JS fallback/enhancement for older browsers or specific needs)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
