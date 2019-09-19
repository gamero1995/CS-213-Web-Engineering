function calculatePayment(){
    var apr1 = parseFloat(document.getElementById("apr").value);
    var term1 = parseFloat(document.getElementById("term").value);
    var amount1 = parseFloat(document.getElementById('amount').value);
    
    if((apr1 >= 0 && apr1 <= 25) && (term1 >= 0 && term1 <= 40) && !isNaN(amount1))
    {
    var apr = parseFloat(document.getElementById("apr").value/100);
    var years = parseFloat(document.getElementById("term").value)*12;
    var totalAmount = parseFloat(document.getElementById('amount').value);

    var rate = apr/12;
    
    var paymentS = totalAmount*(rate*Math.pow(1+rate,years))/(Math.pow(1+rate, years)-1);
    
    document.getElementById("payment").innerHTML = "Monthly Payment: $" + paymentS.toFixed(2);
    }
}

function reset() {
    document.getElementById("myForm").reset();
}

function validate() {
  validateAPR();
  validateAmount();
  validateTerm();
}

function validateAPR(){
  var apr1 = parseFloat(document.getElementById("apr").value);
  if (isNaN(apr1)) {
    textApr = "Please Enter APR";
    }
  else if (apr1 < 0 || apr1 > 25) {
    textApr = "APR must be between 0 to 25";
  }
  else
    textApr = "";
  document.getElementById("invalidAPR").innerHTML = textApr;
}

function validateAmount(){
  var amount1 = parseFloat(document.getElementById("amount").value);
   if (isNaN(amount1)){
    textAmount = "Please Enter Loan Amount";
   }
   else 
    textAmount ="";
  document.getElementById("invalidLoan").innerHTML = textAmount;
}

function validateTerm(){
    var term1 = parseFloat(document.getElementById("term").value);
    if (isNaN(term1)) {
        textTerm = "Please Enter Loan Term ";
    }
    else if (term1 < 0 || term1 > 40){
        textTerm = "Loan Team must be between 0 to 40 years";
    }
    else
      textTerm = "";
    document.getElementById("invalidTerm").innerHTML = textTerm;     
}

