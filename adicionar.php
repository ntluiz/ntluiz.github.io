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
  $last = mysqli_real_escape_string($conexao, $_POST['last']);
  
  if(isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
    $image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
  } else {
    $image = '';
  }

  $url = mysqli_real_escape_string($conexao, $_POST['url']);
  $link = $url . ($last + 1);

  // Inserir o novo registro na tabela
  $query = "INSERT INTO manga (title, last, image, url, link) VALUES ('$title', '$last', '$image', '$url', '$link')";
  $result = mysqli_query($conexao, $query);

  // Verificar se a inserção foi bem-sucedida
  if ($result) {
    echo "Registro adicionado com sucesso.";
  } else {
    echo "Não foi possível adicionar o registro: " . mysqli_error($conexao);
  }

  // Fechar a conexão com o banco de dados
  mysqli_close($conexao);
?>
