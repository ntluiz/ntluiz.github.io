<?php
  // Conectar ao banco de dados
  $conexao = mysqli_connect("localhost", "id20597247_admin", "Ii@03099799Nn", "id20597247_leiaonline");

  // Verificar se a conexão foi estabelecida com sucesso
  if (mysqli_connect_errno()) {
    echo "Não foi possível conectar ao banco de dados: " . mysqli_connect_error();
    exit();
  }

  // Obter os dados do formulário
  $title = mysqli_real_escape_string($conexao, $_POST['title']);
  $new_last = mysqli_real_escape_string($conexao, $_POST['new_last']);

  // Atualizar o registro na tabela
  $query = "UPDATE dados-manga SET last = '$new_last' WHERE title = '$title'";
  $result = mysqli_query($conexao, $query);

  // Verificar se a atualização foi bem-sucedida
  if ($result) {
    echo "Registro atualizado com sucesso.";
  } else {
    echo "Não foi possível atualizar o registro: " . mysqli_error($conexao);
  }

  // Fechar a conexão com o banco de dados
  mysqli_close($conexao);
?>