<?php
$oldPassword = $_POST["oldpassword"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];

if ($password != $confirmPassword) {
    echo '<script>alert("New password entered do not match!");</script>';
    header("Location: change-password.html");
    die();
}

$accountFile = fopen("account.txt", "r");

// Check if the file exists and has content
if ($accountFile) {
    $username = fgets($accountFile);
    $passwordFile = fgets($accountFile);
    fclose($accountFile);

    if ($passwordFile != $oldPassword) {
        echo '<script>alert("Wrong old password!");</script>';
        header("Location: change-password.html");
        die();
    }
} else {
    echo '<script>alert("Unable to open the file!");</script>';
    header("Location: change-password.html");
    die();
}

$myfile = fopen("account.txt", "w") or die('<script>alert("Unable to open the file! ");</script>');

// Output one line until end-of-file
fwrite($myfile, $username);
fclose($myfile);

$file = fopen("account.txt", "a");
$savedPassword = fwrite($file, $password);
fclose($file);

echo '<script>alert("Changes saved!");</script>';
header("Location: log-in.html");
exit();
?>
