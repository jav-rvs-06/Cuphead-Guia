<?php
define('HOST_BD', 'localhost');
define('USUARIO_BD', 'root');
define('CONTRASENA_BD', '');
define('NOMBRE_BD', 'cuphead_guia');

// Conectar a la base de datos
$conexion = new mysqli(HOST_BD, USUARIO_BD, CONTRASENA_BD, NOMBRE_BD);

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión a la BD: " . $conexion->connect_error);
}

// Configurar charset a UTF-8
$conexion->set_charset("utf8");

// Iniciar sesión si no está iniciada
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
