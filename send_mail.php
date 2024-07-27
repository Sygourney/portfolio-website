<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $to = 'sygourneynelis@gmail.com'; 
            $subject = 'Nieuw bericht van het contactformulier';
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "Content-type: text/html\r\n";

            $body = "<h2>Contactformulier Bericht</h2>
                     <p><strong>Naam:</strong> $name</p>
                     <p><strong>Email:</strong> $email</p>
                     <p><strong>Bericht:</strong><br>$message</p>";

            if (mail($to, $subject, $body, $headers)) {
                echo "success";
            } else {
                echo "error";
            }
        } else {
            echo "invalid_email";
        }
    } else {
        echo "empty_fields";
    }
} else {
    echo "invalid_request";
}
?>
