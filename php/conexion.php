<?php

// Declaramos variables para la conexión
$servidor   =   "localhost"; // El servidor que utilizamos, será localhost
$usuario    =   "root";     // El usuario de la base de datos
$password   =   "";         // La contraseña del usuario
$BD = "rollermap";  // Nombre de la base de datos

// Creamos la conexión
$conexion = mysqli_connect ($servidor, $usuario, $password, $BD);

// Verificamos la conexión
if (!$conexion) {
    echo "Falló la conexión <br>";
    die ("Connection failed: " . mysqli_connect_error());
}

?>