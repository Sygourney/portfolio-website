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

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_mail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            if (xhr.responseText === 'success') {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('contactForm').reset();
            } else {
                alert('Er is een fout opgetreden bij het verzenden van het bericht: ' + xhr.responseText);
            }
        } else {
            alert('Er is een netwerkfout opgetreden.');
        }
    };

    xhr.onerror = function() {
        alert('Er is een netwerkfout opgetreden.');
    };

    xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

