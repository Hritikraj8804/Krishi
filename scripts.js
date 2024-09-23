document.addEventListener('DOMContentLoaded', () => {
    // Load the last visited section from localStorage, or default to 'weather'
    const savedSection = localStorage.getItem('activeSection') || 'weather';
    showSection(savedSection);
    
    // Close the menu if clicking outside
    document.addEventListener('click', (event) => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    });
});

function showSection(sectionId) {
    // Hide all sections and remove active state from buttons
    const sections = document.querySelectorAll('main section');
    const buttons = document.querySelectorAll('nav button');

    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('fade-in'); // Remove any previous fade-in class
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected section with a fade-in effect
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
    setTimeout(() => {
        selectedSection.classList.add('fade-in');
    }, 100); // Add fade-in after a brief delay to trigger animation

    // Set the active button state
    const activeButton = document.querySelector(`nav button[onclick="showSection('${sectionId}')"]`);
    activeButton.classList.add('active');

    // Save the current section to localStorage
    localStorage.setItem('activeSection', sectionId);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    // Focus on the first link after opening the menu for accessibility
    if (navLinks.classList.contains('show')) {
        navLinks.querySelector('button').focus();
    }
}
