    function loadDoc() {
      
    var startCity = document.getElementById("startCity").value
    var startState = document.getElementById("start_state").value
    var endCity = document.getElementById('end_city').value
    var endState = document.getElementById('end_state').value

    var link = "/cgi-bin/ercanbracks/mileage/mileageAjaxJSON?startCity=" + startCity + "&startState=" + startState + "&endCity=" + endCity + "&endState=" + endState
    if(startCity != "" && startState != "" && endCity != "" && endState != "")
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                buildResponse(JSON.parse(this.responseText));
            }
        };
        xhttp.open("GET", link, true);
        xhttp.send();
    }
}

    function buildResponse(json)
    {
        var trip = json.trip;
        var distanceMessage = "";

        distanceMessage += "It is " + trip.miles + " miles from " + trip.startcity + ", " + trip.startstate + " to " +
        trip.endcity + ", " + trip.endstate + "<br>"
        + "Here are your methods of transportation: <br>"

        if (trip.tmode === undefined || trip.tmode.length == 0)
        {
            distanceMessage += "Tranportation mode undefined"
        }

        else
        {

            for(i = 0; i < trip.tmode.length; i++)
            {   
                distanceMessage += trip.tmode[i] + ", "
            }
        }

        document.getElementById("calculation").innerHTML = distanceMessage;
    }

    function reset() {
        document.getElementById("myForm").reset();
        clearM();
       
    }
    function clearM(){
        var resetMessage = " "
        document.getElementById("calculation").innerHTML = resetMessage;
        document.getElementById("invalidStarting").innerHTML = resetMessage;
        document.getElementById("invalidState").innerHTML = resetMessage;
        document.getElementById("invalidEnd").innerHTML = resetMessage;
        document.getElementById("invalidEndState").innerHTML = resetMessage;
    }

    function validate(){
        validateStartingState();
        validateStarting();
        validateEndingState();
        validateEnding();
    
    //     if(startingState == false || endingState == false || startingCity == false || endingCity == false)
    //     return false;
    //   else
    //     return true;
        }

    function validateStarting(){
        // var isGood = true;
        var term1 = document.getElementById("startCity").value;
        if (term1 == "") {
            textTerm = "Please Enter Starting City";
            // isGood = false;
        }
        else
          {
              textTerm = "";
          //    isGood = false
          }
        document.getElementById("invalidStarting").innerHTML = textTerm;    
        // return isGood; 
    }
    
    function validateStartingState(){
        var isGood = true;
        var term1 = document.getElementById("start_state").value;
        if (term1 == "") 
        {
            textTerm = "Please Enter Starting State";
            isGood = false;
        }
        else
          {
              textTerm = "";
          //    isGood = false
          }
        document.getElementById("invalidState").innerHTML = textTerm;    
        // return isGood; 
    }
    function validateEnding(){
        var isGood = true;
        var term1 = document.getElementById("end_city").value;
        if (term1 == "")
        {
            textTerm = "Please Enter Ending City";
            isGood = false;
        }
        else
          {
              textTerm = "";
          //    isGood = false
          }
        document.getElementById("invalidEnd").innerHTML = textTerm;    
        // return isGood; 
    }
    function validateEndingState(){
        var isGood = true;
        var term1 = document.getElementById("end_state").value;
        if (term1 == "")  
        {
            textTerm = "Please Enter Starting State";
            isGood = false;
        }
        else
          {
              textTerm = "";
          //    isGood = false
          }
        document.getElementById("invalidEndState").innerHTML = textTerm;    
        // return isGood; 
    }