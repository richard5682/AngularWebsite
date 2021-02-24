<?php
	header('Access-Control-Allow-Origin: *');
	
	include('SessionLibrary.php');
	include('CONNECTSERVER.inc.php');
	$response['result'] = 0;
	if(!checkTimeout('login_id')){
		ConnectToDefaultServer('testdatabase');
		$response['result'] = 1;
		$response['id'] = $_SESSION['login_id'];
		$SQL = Construct_SELECTSQL(['username'],
		'users',['id'],[$_SESSION['login_id']]);
		if($data = QUERY_SELECTSQL($SQL)){
			$response['username'] = $data[0]['username'];
		}
	}
	echo(json_encode($response));
?>