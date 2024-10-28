// Function to show specific sections
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Function to open the contact form modal
function openContactForm(serviceType) {
    document.getElementById('serviceType').innerText = serviceType;
    document.getElementById('serviceTypeInput').value = serviceType;
    document.getElementById('contactForm').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('contactForm').style.display = 'none';
}
