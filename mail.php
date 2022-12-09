<meta http-equiv='refresh' content='3'; url='http://kemosago.ru/'>
<meta charset="UTF-8" />
<?php
// if (isset($_POST['name']) && $_POST['name'] != "" )//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
// 	$name = $_POST['name'];
// else die ("Не заполнено поле \"Имя\"");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.
// if ((isset($_POST['email']) && $_POST['email'] != "") || (isset($_POST['subjects']) && $_POST['subjects'] != "")){ //тут все точно так же как и в предыдущем случае
// 	$email = $_POST['email'];
// 	$sub = $_POST['subjects'];
// }
// else die ("Не заполнено поле \"Электронная Почта или Номер Телефона\"");
// if (isset($_POST['message']) && $_POST['message'] != "") 
// 	$body = $_POST['message'];
// else die ("Не заполнено поле \"Текст Сообщение\"");
 
$name = $_POST['name'];
$email = $_POST['e-mail'];
$phone = $_POST['phone'];
$text = $_POST['message'];


$address = "maxim_228228228@mail.ru";//адрес куда будет отсылаться сообщение для администратора
$mes  = "Имя: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью оператора .= мы просто дополняем текст в переменную
$mes .= "E-mail: $email \n";
$mes .= "Телефон: $phone \n";
$mes .= "Текст: $text"; 
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");//собственно сам вызов функции отправки сообщения на сервере
if ($send) //проверяем, отправилось ли сообщение
	echo "Сообщение отправлено успешно! Перейти на <a href='http://kemosago.ru'>kemosago.ru</a>, если вас не перенаправило вручную.";
else 
	echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
	 
?>