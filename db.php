<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "fan registration system db"
);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>