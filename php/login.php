<?php

include("conexion.php"); // El include llama al archivo de conexión.

session_start(); // Inicia una nueva sesión o reanuda la existente.
$_SESSION['login'] = false;

// Declaramos variables para recibir y guardar los datos enviados desde el formulario.
$nickname = $_POST["nickname"];
$password = $_POST["password"];

// Comprobamos el nickname cumplimentado
$consulta = "SELECT *
            FROM user
            WHERE nickname= '$nickname'";

$consulta = mysqli_query($conexion, $consulta); // Ejecutamos la consulta
$consulta = mysqli_fetch_array($consulta);

if($consulta) {

    if (password_verify($password, $consulta['password']))  {

        $_SESSION['login']        = true; //$_SESSION es una variable superglobal
        $_SESSION['nickname']     = $consulta['nickname'];
      
        header('Location: ../maps.php'); // Redireccionamos a la página maps
    }

    else {

        echo "<div>Contraseña incorrecta";
        echo "<br><a href='../login.html'>Inténtalo de nuevo.</a></div>";
        
    }   

}

else { // Si la consulta está vacía significa que no existe el nickname

    echo "<div>El usuario no existe";
    echo "<br><a href='../index.html'>Inténtalo de nuevo.</a></div>";

} 

// Cerrar la conexión
mysqli_close($conexion);

?>