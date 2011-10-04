<?php

//var_dump($_POST);

$data = $_POST['mind'];

// 備份現有版本
$backup_file = date('Ymd-His').'_mind.txt';
`cp data.txt backup/$backup_file`;

file_put_contents('mind.txt', $data);

$lines = file('mind.txt');

/*
 * 先把開頭的-取代成為tab
 * 然後在把處理好的文字檔，轉成mm的檔案
 * 最後，讓前端的freemind.jar來讀取我所產生的mm格式，並且轉成用SVG來呈現
 */
$new = array();
if(count($lines) > 0){
	foreach($lines as $k => $v){
		if(preg_match('/^(\-+)(.*)$/', trim($v), $matches)){
			$tmp = str_replace('-', '	', $matches[1]);
			$new[] = $tmp.$matches[2];
		} else {
			$new[] = $v;
		}
	} // foreach
}

file_put_contents('mind_handle.txt', implode("\n", $new));

`cd freemind && cat ../mind_handle.txt | python text-to-freemind > ../other_files/mind.mm`;

header('Location: edit.html');
