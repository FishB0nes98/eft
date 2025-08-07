<?php
if ($_POST) {
    $to = "molnarcsillu@gmail.com";
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $preferred_contact = htmlspecialchars($_POST['preferred-contact']);
    $message = htmlspecialchars($_POST['message']);
    
    $subject = "New Contact Form Submission from " . $name;
    
    $email_body = "New Contact Form Submission\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Phone: " . ($phone ? $phone : 'Not provided') . "\n";
    $email_body .= "Preferred Contact Method: " . $preferred_contact . "\n\n";
    $email_body .= "Message:\n" . $message . "\n\n";
    $email_body .= "---\n";
    $email_body .= "Sent from Chill To You contact form";
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No data received.']);
}
?>