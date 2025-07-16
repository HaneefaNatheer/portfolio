<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize input data
    $first_name = htmlspecialchars($_POST['f-name']);
    $last_name = htmlspecialchars($_POST['L-name']);
    $mobile_number = htmlspecialchars($_POST['number']);
    $email_address = htmlspecialchars($_POST['email-address']);
    $message = htmlspecialchars($_POST['Message']);

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO messages (first_name, last_name, mobile_number, email_address, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $first_name, $last_name, $mobile_number, $email_address, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Thank you! Your message has been saved successfully.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Error saving your message. Please try again.'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>
