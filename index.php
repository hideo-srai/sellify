<?php
ob_start();
session_start();
error_reporting(E_ALL & ~E_NOTICE);
if(file_exists("./install.php")) {
	header("Location: ./install.php?step=0");
} 
include("includes/config.php");
// get web settings 
$web = mysql_fetch_array(mysql_query("SELECT * FROM sellify_settings ORDER BY id DESC LIMIT 1"));
$url = $web['url'];
include("includes/functions.php");
include("includes/paypal_class.php");
$source_dir = 'source/';
$resource_dir = 'resource/';

$m = protect($_GET['m']);
switch($m) {
	case "buy": include($source_dir."buy.php"); break;
	case "edit": include($source_dir."edit.php"); break;
	case "item": include($source_dir."item.php"); break;
	case "download": include($source_dir."new_download.php"); break;
	case "delete": include($source_dir."delete.php"); break;
	case "check_payment": include($source_dir."check_payment.php"); break;
	case "dashboard": include($source_dir."dashboard.php"); break;
	case "add_new": include($source_dir."add_new.php"); break;
	case "my_products": include($source_dir."my_products.php"); break;
	case "login":
        unset($_SESSION['ps_usern']);
        include($source_dir."account.php"); break;
    case "signup":
        unset($_SESSION['ps_usern']);
        include($source_dir."signup.php"); break;
	case "home": include($source_dir."home.php"); break;
	case "settings": include($source_dir."settings.php"); break;
	case "payments": include($source_dir."payment.php"); break;
	case "change_password": include($source_dir."forgot.php"); break;
	case "not_found": include($source_dir."not_found.html"); break;
	case "search": include($source_dir."search.php"); break;
	case "logout": 
		unset($_SESSION['ps_usern']);
		session_unset();
		session_destroy();
		header("Location: ./");
		break;
}
?>