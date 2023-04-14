<?php
require_once 'conect.php';

$query = "SELECT DISTINCT title FROM manga ORDER BY title";
$result = mysqli_query($conexao, $query);

$titulos = array();
while ($row = mysqli_fetch_assoc($result)) {
$titulos[] = $row['title']; 
}

mysqli_close($conexao);
?>