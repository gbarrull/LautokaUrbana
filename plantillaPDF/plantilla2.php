<?php

function getPlantilla($productosWC, $productosDB){

    $precioFinal = 0;

    $plantilla = '
<body>
    <header class="clearfix">
      <div id="logo_lauto">
        <img src="../img/Logo/logo_lautoka.jpg" width="200" height="70">
      </div>
      <div id="company">
        <h2 class="name">CIF: B-64782949</h2>
        <div>Santa Eugenia Nº12</div>
        <div>08012 / Barcelona</div>
        <div><a href="mailto:company@example.com">lautokaurbana@gmail.com</a></div>
      </div>
    </header>
    <main>
        <div id="details" class="clearfix">
        </div>
        <h1>BAÑO</h1>
        <h2>SANITARIOS</h2>
        <table border="0" cellspacing="0" cellpadding="0">
            <tbody>';

        foreach ($productosWC as $productoWC){

            $plantilla .='<tr>
                <td class="no">'.$productoWC["id"].'</td>
                <td class="desc">'.$productoWC["descripcion"].'</td>
                <td class="total">'.$productoWC["precio"].'</td>
              </tr>';

            $precioFinal = $precioFinal+$productoWC["precio"];

        }

        $plantilla .='
            </tbody>
        </table>
        <h2>SANITARIOS</h2>
        <table border="0" cellspacing="0" cellpadding="0">
            <tbody>';

        foreach ($productosDB as $productoDB){

            $plantilla .='<tr>
                <td class="no">'.$productoDB["id"].'</td>
                <td class="desc">'.$productoDB["descripcion"].'</td>
                <td class="total">'.$productoDB["precio"].'</td>
              </tr>';

            $precioFinal = $precioFinal+$productoDB["precio"];

        }

        $plantilla .='
            </tbody>
        </table>
        <table>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td colspan="2">SUBTOTAL</td>
                <td>$5,200.00</td>
              </tr>
              <tr>
                <td colspan="2"></td>
                <td colspan="2">TAX 25%</td>
                <td>$1,300.00</td>
              </tr>
              <tr>
                <td colspan="2"></td>
                <td colspan="2">GRAND TOTAL</td>
                <td>'.$precioFinal.'</td>
              </tr>
            </tfoot>
        </table>
        <div id="thanks">Thank you!</div>
        <div id="notices">
            <div>NOTICE:</div>
            <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
        </div>
    </main>
    <footer>
      Invoice was created on a computer and is valid without the signature and seal.
    </footer>
</body>';

    return $plantilla;
  }

