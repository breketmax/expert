<meta http-equiv='refresh' content='20'; url='http://kemosago.ru'>
<meta charset="UTF-8" />
<?php
$name = $_POST['name'];
$email = $_POST['e-mail'];
$phone = $_POST['phone'];
$text = $_POST['message'];

$home= "http://kemosago.ru/";

$sub = "Вопрос от клиента с сайта kemosago.ru";

$to = "maxim_228228228@mail.ru";//адрес куда будет отсылаться сообщение для администратора
$mes = "
				<html>
					<head>
						<title>Вопрос от клиента с сайта kemosago.ru</title> 
					</head>
					<body style=' font-family:'Tahoma',  sans-serif;'>	
						<table style='max-width: 600px; border-spacing: 10px 10px; margin:0 auto;'>
							<tr style='border:1px solid transparent'>
								<td>
									<div style='background-color:#3172B6; color:#ffffff; text-align:center; padding:25px 60px; ' >
										<h1 style='font-size: 50px; margin:0 ;line-height:55px'>Вопрос от клиента</h1>
									</div>
								</td>
							</tr>
							<tr style='border:1px solid transparent;'>
								<td>
									<div style='background-color:#ffffff;color:#2D3038;padding: 20px 25px 70px; width:600px'>
										<img src='http://kemosago.ru/img/logo2.png' style='width: 30%; margin:0 auto; display: block;'>
										<h1 style='font-size: 35px; text-align: center; margin: 0; padding: 0; font-weight: bold;margin-top:10px;margin-bottom:20px;'>ОСАГО <br/> <span style='font-size: 30px; font-weight: 400;'>Эксперт</span></h1>							
										<h2 style='font-size: 30px; font-weight: bold; margin: 0; padding: 0; ;margin-top: 30px;margin-bottom:30px;'>$name</h2>
										<h3 style='font-size: 20px; margin: 0; padding: 0;margin-top: 5px;' >Номер телефона: <a style='text-decoration: none; color:#3172B6' href='tel:+$phone'>$phone</a></h3>
										<h3 style='font-size: 20px; margin: 0; padding: 0;margin-top: 5px;'>Электронная почта: <a style='text-decoration: none; color:#3172B6' href='mailto:+$email'>$email</a></h3>
										<h3 style='font-size: 20px; margin: 0; padding: 0;margin-top: 5px;'>Текст вопроса: <br/><span style='font-weight:400'> $text</span></h3>
									</div>  
								</td>  
							</tr>
						</table>
					</body>
				</html>
			";
			
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
if(!empty($_POST['name'])){
    $send = mail($to,$sub,$mes,$headers);   
    echo "<div style='text-align:center; background-color:#fff; font-family:Tahoma,  sans-serif; color:#2D3038; height:100vh; display:flex; flex-direction:column;justify-content: center;align-items:center'>
        <img src='http://kemosago.ru/img/check.svg' style='width:100px;'>
        <h1 style='color:#2D3038; width:100%; text-align:center;'>Ваш вопрос успешно отправлен!</h1>
        
    </div>";
    ?>
    <script type="text/javascript">
       setTimeout(()=>{
            window.location.href = "http://kemosago.ru#feedback"     
       },3000)
    </script>
    
    <?php
}