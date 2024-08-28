function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // Toggle visibility of nav links
}

function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('main section').forEach(section => section.style.display = 'none');
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
