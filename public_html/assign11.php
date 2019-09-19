<?php
$first = $_POST['first'];
$last = $_POST['last'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$card_type = $_POST['card_type'];
$exp = $_POST['expDate'];
$checks = $_POST['checks'];

$date = explode("/", $exp);
$ex = mktime(0,0,0, $date[0], 1, $date[1]);
$dates = date("F Y", $ex);

$total = 0;

if(isset($_POST['check1']))
{
    $check1 = "<p> Nike Jacket : $40 <p> ";
    $total += 40;
}
if(isset($_POST['check2']))
{
    $check2 = "<p> Adidas Trefoil-hoodie : $40 <p> ";
    $total += 40;
}
if(isset($_POST['check3']))
{
    $check3 = "<p> Adidas Worldcup Tee : $20 <p> ";
    $total += 20;
}
if(isset($_POST['check4']))
{
    $check4 = "<p> Nike AF Flyknit : $80 <p> ";
    $total += 80;
}

?>
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>Confirmation Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Purchase Review</h1>
    <br>
  <div class="bInfo">
    <h2> Buyers Information: </h2>
    <p> <?php echo $first . " " . $last; ?> </p>
    <p> <?php echo $address; ?></p>
    <p> <?php echo $phone; ?></p>
    <h2>Credit Card Information: </h2>
    <p>Card Type: <?php echo $card_type;?></p>
    <p>Exprires in <?php echo $dates;?></p>
    <p><b>All Items bought: </b></p>
    <?php echo $check1;?>  
    <?php echo $check2;?>  
    <?php echo $check3;?>  
    <?php echo $check4;?>  
    <p><?php echo $selected; ?></p>
    <p>Total Cost: $<?php echo number_format($total, 2); ?></p>
    <form method = "POST" action="assign11_a.php">
    <p><input id="confirm" type="submit" name="confirm" value="confirm"></p>
    <p><input id="cancel" type="submit" name="cancel" value="cancel"></p>
    </form>
</div>

  <footer>
    <p class="name">Posted by: Jose Gamero || Contact information: <a href="mailto:josejgamero@gmail.com">josejgamero@gmail.com</a></p>
  </footer>
</body>
</html>
