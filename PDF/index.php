
<?php

   // Con el composer hemos creado la carpeta vendor y aqui la llamamos
   require_once('../vendor/autoload.php');

   //plantilla HTML
   require_once('../plantillaPDF/plantilla2.php');

   //codigo css para plantilla
   $css = file_get_contents('../css/presupuesto.css');



   //base de datos
   require_once('../phpMysql/buscar.php');


   $mpdf = new \Mpdf\Mpdf();

   $plantilla = getPlantilla($productosWC, $productosDB);

   $mpdf->writeHTML($css,\Mpdf\HTMLParserMode::HEADER_CSS);
   $mpdf->writeHTML($plantilla,\Mpdf\HTMLParserMode::HTML_BODY);

   $mpdf->Output('Presupuesto.pdf','I');
   exit;


?>
