<?php
//get data from form  
$name = $_GET['name'];
$email= $_GET['email'];
$subject = $_GET['subject'];
$message= $_GET['message'];

$to = "stemitomy@gmail.com";

$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;

$headers = "From: noreply@steluttomoiaga.com" . "\r\n" .
"CC: somebodyelse@example.com";

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

//redirect
//header("Location:thankyou.html");
?>