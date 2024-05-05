<?php

include("conexion.php"); // El include es para llamar a un archivo, en este caso el de conexión.

// Declaramos variables para recibir y guardar los datos enviados desde el formulario
$nickname    = $_POST["nickname"];
$email       = $_POST["email"];
$password    = $_POST["password"];

$passwordHash = password_hash($password, PASSWORD_BCRYPT); // BCRYPT es el algoritmo de encriptación, devuelve una cadena de 60 caracteres.

// Comprobamos si el usuario existe
$consultaId = "SELECT nickname
               FROM user
               WHERE nickname= '$nickname' ";
$consultaId = mysqli_query($conexion, $consultaId); // Devuelve un objeto con el resultado, false si hay error, true si se ejecuta
$consultaId = mysqli_fetch_array($consultaId); // Devuelve un array o NULL

if(!$consultaId) { // Si la consulta está vacía, significa que no existe el usuario y creamos un usuario

    $sql = "INSERT INTO user VALUES ('$nickname', '$email', '$passwordHash')";

    // Ejecutamos y verificamos si se guardaron los datos
    if (mysqli_query($conexion, $sql)) {

        echo "<div>Tu cuenta ha sido creada con éxito.";
        echo "<br><a href='../maps.php'>Iniciar sesión</a></div>";
    }

    else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
    }

} 
    
else {
    echo "Este usuario ya existe.";
    echo "<a href='../register.html'>Inténtalo de nuevo.</a></div>";
}

// Cerrar la conexión
mysqli_close($conexion);

?>