<?php
require_once 'conect.php';
$query = "SELECT * FROM manga ORDER BY date";
$result = mysqli_query($conexao, $query);

while ($row = mysqli_fetch_assoc($result)) {
echo "<tr>";
echo "<td>" . $row['title'] . "</td>";
echo "<td>" . $row['last'] . "</td>";
echo "<td><a href=\"" . $row['link'] . "\" target=\"_blank\">Ler</a></td>";
echo "</tr>";
}

mysqli_close($conexao);
?>