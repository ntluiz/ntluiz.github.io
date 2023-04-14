<?php
// Incluir arquivo de conexão
require_once 'conect.php';

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $title = $_POST["title"];
    $last = $_POST["last"];
    $image = $_POST["image"];
    $url = $_POST["url"];
    $link = $_POST["link"];

    // Prepara e executa a query de inserção
    $query = "INSERT INTO manga (title, last, image, url, link) VALUES (?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conexao, $query);
    mysqli_stmt_bind_param($stmt, "sssss", $title, $last, $image, $url, $link);
    $result = mysqli_stmt_execute($stmt);

    // Verifica se a inserção foi bem sucedida
    if ($result) {
        // Mostra mensagem de sucesso
        echo '<script>alert("Registro enviado com sucesso!")</script>';
    } else {
        // Mostra mensagem de erro
        echo '<script>alert("Não foi possível adicionar o registro!")</script>';
    }

    // Fecha a conexão com o banco de dados
    mysqli_close($conexao);
}
?>

