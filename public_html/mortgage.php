<?php
$ap = $_POST['apr'];
$apr = $_POST['apr']/100;
$term = $_POST['term']*12;
$totalA = $_POST['amount'];

$rate = $apr/12;
$rate1 = 1 + $rate;
$payment = $totalA*(($rate*pow($rate1,$term))/(pow($rate1,$term)-1));

?>
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>CS 213 Week 10 - PHP Mortgage Calculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="calculator.css">
</head>

<body>
  <br class="lines">
  <form>
    <h1>Mortgage Calculator</h1>
    <br>
    <img class="calculator" src="https://cdn5.vectorstock.com/i/1000x1000/19/39/smirking-cute-calculator-character-cartoon-vector-18401939.jpg" alt="Calculator" width = "60" height="80">
    <br>
    <br>
    <p>APR: <?php echo $ap; ?> </p>
    <p class="payment">Monthly Payment: $<?php echo number_format($payment, 2); ?> </p>
  </form>
  <br class="lines">
  <footer>
    <p class="name">Posted by: Jose Gamero || Contact information: <a href="mailto:josejgamero@gmail.com">josejgamero@gmail.com</a></p>
  </footer>
</body>
</html>
