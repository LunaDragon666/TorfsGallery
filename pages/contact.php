<?php
if($_POST["Message"]) {
mail("mmrozec@yahoo.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: mmrozec@yahoo.com");
}
?>