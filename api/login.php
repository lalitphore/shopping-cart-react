<?php
header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents('php://input'),true);
if($json['email']=='abc@gmail.com' && $json['password']=='12345'){
	echo json_encode(array('success'=>true,'data'=>array('name'=>'Lalit Chaudhary','email'=>'abc@gmail.com'),'error_code'=>100));
}else{
	echo json_encode(array('success'=>false,'data'=>'Email/Password mistmatched','error_code'=>101));
}

?>