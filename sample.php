<?php>
$data_file = fopen("example.html", "a");

$textBox = $_POST ("textBox");
$text_to_write = $textBox;

$fwrite($data_file, $text_to_write);
$fclose($data_file);
?>
