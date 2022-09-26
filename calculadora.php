<?php

echo 'hola mundo';
echo ('<br>');
//comentario
echo ($resultado);
$recibe1 = $_GET['var1'];
$recibe2 = $_GET['var2'];
$operador = $_GET['oper'];
echo '<br>';
switch ($operador) {
    case '+':
        return ($recibe1 + $recibe2);
        break;
    case '-':
        return ($recibe1 - $recibe2);
        break;
    case '*':
        return ($recibe1 * $recibe2);
        break;
    case '!':
        if ($recibe2 == 0) {
            return ('no se puede dividir entre 0');
        }
        return ($recibe1 / $recibe2);
        break;
    default:
        return ('no se pudo realizar la operacion');
        break;
}
