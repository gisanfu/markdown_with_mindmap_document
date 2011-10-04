<?php

//var_dump($_POST);

$data = $_POST['title'];

// 備份現有版本
$backup_file = date('Ymd-His').'_title.txt';
`cp title.txt backup/$backup_file`;

file_put_contents('title.txt', $data);

header('Location: edit.html');
