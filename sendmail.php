<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
 
    // От кого письмо
    $mail->setFrom('test@gmail.com', 'Заявка с сайта');

    // Кому отправить
    $mail->addAddress('test@gmail.com');
    
    // Тема письма
    $mail->Subject = 'Letter';
    
    // Тело письма
    $body = '<h1>Online Inquiry!</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Name: </strong> '.$_POST['name'].'</p>';  
    }
    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>Email: </strong> '.$_POST['email'].'</p>';  
    }
    if (trim(!empty($_POST['message']))) {
        $body.='<p><strong>Message: </strong> '.$_POST['message'].'</p>';  
    }

    $mail->Body = $body;

    // Отправляем 
    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Your request has been submitted. We will call you back!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>