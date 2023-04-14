<?php
$host = "localhost";
$username = "id20597247_admin";
$password = "Ii@03099799Nn";
$dbname = "id20597247_leiaonline";

$conn = new mysqli($host, $username, $password, $dbname);

if (!$conn) {
  die("Falha na conexão: " . mysqli_conect_error());
}
?>