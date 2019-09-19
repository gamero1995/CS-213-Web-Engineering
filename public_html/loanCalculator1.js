function reset() {
    document.getElementById("myForm").reset();
}

function validate() {
    var apr = validateAPR()
    var amount = validateAmount()
    var term = validateTerm()
    if(apr == false || amount == false || term == false)
    return false;
  else
    return true;
}

function validateAPR(){
  var isGood = true;
  var apr1 = parseFloat(document.getElementById("apr").value);
  if (isNaN(apr1)) {
    textApr = "Please Enter APR";
    isGood = false;
    }
  else if (apr1 < 0 || apr1 > 25) {
    textApr = "APR must be between 0 to 25";
    isGood = false;
  }
  else
   { 
    textApr = "";
    //isGood = false;
    }
  document.getElementById("invalidAPR").innerHTML = textApr;
  return isGood;
}

function validateAmount(){
  var isGood = true;
  var amount1 = parseFloat(document.getElementById("amount").value);
   if (isNaN(amount1)){
    textAmount = "Please Enter Loan Amount";
    isGood = false;
   }
   else 
   {
    textAmount ="";
    //isGood = false;
   }
  document.getElementById("invalidLoan").innerHTML = textAmount;
  return isGood;
}

function validateTerm(){
    var isGood = true;
    var term1 = parseFloat(document.getElementById("term").value);
    if (isNaN(term1)) {
        textTerm = "Please Enter Loan Term ";
        isGood = false;
    }
    else if (term1 < 0 || term1 > 40){
        textTerm = "Loan Team must be between 0 to 40 years";
        isGood = false;
    }
    else
      {
          textTerm = "";
      //    isGood = false
      }
    document.getElementById("invalidTerm").innerHTML = textTerm;    
    return isGood; 
}
