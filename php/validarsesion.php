<?php

session_start(); // Inicia una nueva sesión o reanuda la existente
$login = $_SESSION['login'];

if(!$login) {
    header('Location: login.html');
}

else    {
    $nickname = $_SESSION['nickname']; // No es estrictamente necesario, pero facilitará el código más adelante.
}

?>