<?php  
//echo file_get_contents('mind.txt');  
$aaa = `perl mm2text.pl`;

$bbb = explode("\n", $aaa);

//var_dump($bbb);

$data = array();
foreach($bbb as $k => $v){
	$tmp = strip_tags($v)."\n";
	$tmp = str_replace("\t", '-', $tmp);
	$tmp = trim($tmp);
	//echo $tmp."\n";
	$data[] = $tmp;
}

$ccc = implode("\n", $data);
echo $ccc;
