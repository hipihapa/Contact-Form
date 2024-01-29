<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
      if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "afriyiefrankasumadu@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email";
        if(mail($receiver, $subject, $body, $sender)){
          echo "Your message has been sent";
        }else{
          echo "Failed to send your message!";
        }
      }else {
        echo "Enter a valid email address!";
      }
    }else{
      echo "Email field is required!";
    }
?>