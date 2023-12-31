<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);

    $name = $_POST["name"];
	$phone = $_POST["phone"];
	$email_template = "template_mail.html";

    $body = file_get_contents($email_template);
	$body = str_replace('%name%', $name, $body);
	$body = str_replace('%phone%', $phone, $body);

    $mail->addAddress("dklab.wro@gmail.com");  // Здесь введите Email, куда отправлять
    $mail->addAddress("info@depilacja-kosmetologia.pl");   
    $mail->setFrom('info@depilacja-kosmetologia.pl');
    $mail->Subject = "[Wniosek z formularza]";
    $mail->MsgHTML($body);

    if (!$mail->send()) {
        $message = "Błąd wysyłania";
    } else {
        $message = "Dane wysłane!";
    }
	
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);


?>