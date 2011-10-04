<?php

//var_dump($_POST);

$data = $_POST['data'];

// 備份現有版本
$backup_file = date('Ymd-His').'_markdown.txt';
`cp data.txt backup/$backup_file`;

file_put_contents('data.txt', $data);

header('Location: edit.html');
