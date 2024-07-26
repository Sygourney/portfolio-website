document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Alle velden zijn verplicht.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Voer een geldig emailadres in.');
        return;
    }

    // Toon het succesbericht en verberg het formulier
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
