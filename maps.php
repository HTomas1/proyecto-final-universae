<?php
    include("php/conexion.php");
    include("php/validarsesion.php");
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href='https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="./css/maps.css">

    <title>Rollermap - Map</title>
    
</head>
<body>
    <header class="header">
        <div class="logo">
            <img src="" alt="">
        </div>
        <nav class="nav-links">
            <ul>
                <li><a href="./index.html">Inicio</a></li>
            </ul>
        </nav>
        <nav class="logout">
            <ul>
                <li><a href="./php/logout.php">Cerrar sesión</a></li>
            </ul>
        </nav>
    </header>
    <div id="map"></div>

    <nav id="filter-group" class="filter-group"></nav>

    <script src='https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js'></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
    <script type="text/javascript" src="./js/maps.js"></script>

</body>
</html>

