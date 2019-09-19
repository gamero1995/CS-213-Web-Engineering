function validates(){
    var first = validateFirstName();
    // var last = validateLastName();
    var phone = validatePhone();
    var CC = validateCC();
    var date = validateDate();
    if(first = false || phone == false || CC == false|| date == false)
    return false;
  else
    return true;
}

function message(){
    document.getElementById('mustGo').innerHTML = "Everything Must Go!"
}

function validateFirstName(){
    var isGood = true;
    var message;
    if (document.getElementById("first_name").value == "")
    {
        message = "Please Enter First Name";
        isGood = false;
    }
    document.getElementById("invalidName").innerHTML = message;
    return isGood;
}

// function validateLastName(){
//     var isGood = true;
//     var message;
//     if (document.getElementById("last_name").value == "")
//     {
//         message = "Please Enter Last Name";
//         isGood = false;
//     }
//     document.getElementById("invalidLName").innerHTML = message;
//     return isGood;
// }

function totalPrice(){

    console.log("fucntion is called");

    var checks = document.getElementsByClassName('checks');
    
    var total = 0;

    
    for (i = 0; i < 4; i++)
    {
        if (checks[i].checked==true) {
            console.log(total);
            total += parseInt(checks[i].dataset.price);
        }
    }
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function validatePhone(){
var isGood = true;
var message
var phoneN = document.getElementById("phone").value;
var phonePattern = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
if(phonePattern.test(phoneN) == true)
    message = "";
else
    {
    message = "Please use following format: ex. 425-345-8934";
    isGood = false;
    }

document.getElementById("invalidPhone").innerHTML = message;
return isGood;
}

function validateCC(){
    var isGood = true;
    var message
    var input = document.getElementById("credit_card").value;
    var pattern = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
    if(pattern.test(input) == true)
        message = "";
    else
    {
        message = "Credit Card number must be 16 digits long";
        isGood = false;
    }
    
    document.getElementById("invalidCardNumber").innerHTML = message;
    return isGood;
    }

function validateDate(){
    var isGood = true;
    var message
    var input = document.getElementById("exp-date").value;
    var pattern = /[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;
    if(pattern.test(input) == true)
        message = "";
    else
    {
        message = "Please use the following format: ex. 02/2016";
        isGood = false;
    }
    document.getElementById("expDate").innerHTML = message;
    return isGood;
    }

function displayReset(){
    document.getElementById('resetDone').innerHTML = "Your order has been reset successfully! ";
}

function reset(){
    document.getElementById("myForm").reset();
}
function resetTotal(){
    var total = "";
    document.getElementById("total").innerHTML = total;
    document.getElementById("invalidPhone").innerHTML = total;
    document.getElementById("invalidCardNumber").innerHTML = total;
    document.getElementById("expDate").innerHTML = total;
    document.getElementById("invalidName").innerHTML = total;
    document.getElementById("invalidLName").innerHTML = total;
}