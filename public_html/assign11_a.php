<?php

if(isset($_POST['confirm']))
{
    $message = "<h1> Your order has been submitted! </h1>";
}
if(isset($_POST['cancel']))
{
    $message = "<h1> Your order has been cancelled! </h1>";
}

?>
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>Confirmation Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>
   
    <?php echo $message;?>  

  <footer>
    <p class="name">Posted by: Jose Gamero || Contact information: <a href="mailto:josejgamero@gmail.com">josejgamero@gmail.com</a></p>
  </footer>
</body>
</html>
