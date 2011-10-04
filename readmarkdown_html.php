<?php  

//echo file_get_contents('data.txt');

$data = file_get_contents('data.txt');
require 'markdown.php';
echo Markdown($data);
