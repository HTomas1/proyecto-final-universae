<?php

session_start(); // Inicia una nueva sesión o reanuda la existente.

// Destruye todas las variables de la sesión.
$_SESSION = array();

// Destruye la sesión.

session_destroy();
header('Location: ../index.html');

?>