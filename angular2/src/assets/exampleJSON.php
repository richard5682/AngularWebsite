<?php
	$data[0]['username'] = 'user1';
	$data[1]['username'] = 'user2';
	$data[2]['username'] = 'user3';
	
	$data[0]['password'] = 'pass1';
	$data[1]['password'] = 'pass2';
	$data[2]['password'] = 'pass3';
	header("Content-type: application/json");
	echo(json_encode($data));
?>