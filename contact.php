<?php
// Data Driven Schools — manejador básico de formulario.
// Requiere hosting con PHP y mail() habilitado. Si el hosting usa SMTP/API, el desarrollador debe reemplazar este bloque.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Método no permitido'); }
if (!empty($_POST['website'] ?? '')) { header('Location: /gracias/'); exit; }

function clean($v) { return trim(strip_tags((string)$v)); }
$nombre = clean($_POST['nombre'] ?? '');
$institucion = clean($_POST['institucion'] ?? '');
$cargo = clean($_POST['cargo'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$tipo = clean($_POST['tipo'] ?? '');
$interes = clean($_POST['interes'] ?? '');
$mensaje = trim((string)($_POST['mensaje'] ?? ''));
$privacidad = $_POST['privacidad'] ?? '';

if (!$nombre || !$institucion || !$email || !$mensaje || $privacidad !== 'acepto') {
  http_response_code(422); exit('Faltan datos obligatorios o el correo no es válido.');
}

$to = 'karen.smol@datadrivenschools.mx';
$subject = 'Nuevo contacto web — Data Driven Schools';
$body = "Nombre: $nombre\nInstitución: $institucion\nCargo: $cargo\nCorreo: $email\nTipo: $tipo\nInterés: $interes\n\nMensaje:\n$mensaje\n";
$headers = "From: web@datadrivenschools.mx\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (@mail($to, $subject, $body, $headers)) {
  header('Location: /gracias/');
  exit;
}
http_response_code(500);
echo 'No fue posible enviar el mensaje. Por favor escribe directamente a karen.smol@datadrivenschools.mx';
