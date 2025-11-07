<?php
session_start();
header('Content-Type: application/json');

$response = [
    'logueado' => false,
    'usuario' => null,
    'usuario_id' => null
];

if (isset($_SESSION['usuario_id']) && isset($_SESSION['nombre_usuario'])) {
    $response['logueado'] = true;
    $response['usuario'] = $_SESSION['nombre_usuario'];
    $response['usuario_id'] = $_SESSION['usuario_id'];
}

echo json_encode($response);
?>
