<?php

file_put_contents("test.txt", "gumana\n", FILE_APPEND);

include("db.php");


$name  = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$type  = $_POST['type'] ?? '';
$album = $_POST['album'] ?? '';
$song  = $_POST['song'] ?? '';
$era   = $_POST['era'] ?? '';

$sql = "INSERT INTO registration
(`Fan name`,
`Email address`,
`Your monster era`,
`Favorite album`,
`Favorite song`,
`Gaga journey`)
VALUES
('$name','$email','$type','$album','$song','$era')";

if(mysqli_query($conn, $sql)){
    echo "SUCCESS";
}else{
    echo mysqli_error($conn);
}
?>