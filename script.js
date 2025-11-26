const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');

    // Update the button text/icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

// Add event listener for menu button
menuButton.addEventListener('click', toggleMenu);

// Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});