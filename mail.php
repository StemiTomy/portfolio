<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$subject = ['subject'];
$message= $_POST['message'];

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