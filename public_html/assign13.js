function loadDoc(){
    var form = document.getElementById("myForm");
    var performance = document.getElementsByName("performance");
    var location = document.getElementsByName("location");

    for(var i = 0; i < performance.length; i++)
    {
        if(performance[i].checked)
        {
            performance = performance[i];
            break;
        }
    }

    for(var i = 0; i < location.length; i++)
    {
        if(location[i].checked)
        {
            location = location[i];
            break;
        }
    }


   var url = "assign13.php?performance=" + performance.value + "&first_name=" + form[3].value + "&last_name=" + form[4].value
    + "&id=" + form[5].value + "&skill=" + form[9].value + "&instrument=" + form[10].value + "&location=" + location.value
    + "&room=" + form[14].value + "&time=" + form[15].value
    if(performance.value == "Duet")
    {
        url += "&first_name1=" + form[6].value + "&last_name1=" + form[7].value + "&id1=" + form[8].value;
    }

    console.log(url);

    // if(performance != "" && instrument != "" && form[3] != "" && form[4] != "" 
    // && form[5] != "" && form[6] != "" && form[7] != "" && form[8] != ""
    // && form[9] != "" && form[10] != "" && form[14] != "" && form[15] != "")
    // {
    if(performance.value != "undefined" && form[3].value != "" && form[4].value != "" && form[5].value != "" 
    && form[9].value != "" && form[10].value != "" && location.value != "undefined" && form[14].value != "" 
    && form[15].value != "" && !isNaN(form[5].value) &&!isNaN(form[14].value))
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                buildResponse(this.responseText);
            }
        };
        console.log(xhttp);
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    // }
}
function readTextFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data/data.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var table = "<tr><th>Performance Type</th><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Skill Level</th><th>Instrument</th><th>Location</th><th>Room #</th><th>Time</th></tr>";
                table += allText;
                document.getElementById("table").innerHTML = table;
            }
        }
    }
    rawFile.send(null);
}

function buildResponse(json){
    
    console.log(json)
    var table = "<tr><th>Performance Type</th><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Skill Level</th><th>Instrument</th><th>Location</th><th>Room #</th><th>Time</th></tr>";
  
    // for(i = 0; i < json.length; i++)
//    {
    table += json
    // "<tr><td>" + json[i].performance + "</td><td>" + json[i].student[i].first_name + "</td><td>" 
//     + json[i].student[i].last_name + "</td><td>" + json[i].student[i].id + "</td><td>" + json[i].skill 
//     + "</td><td>" + json[i].instrument + "</td><td>" + json[i].location + "</td><td>" + json[i].room 
//     + "</td><td>" + json[i].time + "</td></tr>"
//    }
   document.getElementById("table").innerHTML = table;
}
function unhide(){
    document.getElementById("duo").setAttribute('class','show');
    document.getElementById("first").setAttribute('class','show');
}

function hide(){
    document.getElementById("duo").setAttribute('class','hide');
    document.getElementById("first").setAttribute('class','hide');
    // document.getElementById("first_student").style.float = '';
}
function validate(){
    validateFirst();
    validateID();
    validateInstrument();
    validateLast();
    validateLocation();
    validatePerformance();
    validateRoom();
    validateSkill();
    validateTime();
    validateFirst1();
    validateID1();
    validateLast1();
}



function clearM(){
var resetMessage = " "
        document.getElementById("invalid_performance").innerHTML = resetMessage;
        document.getElementById("invalid_first").innerHTML = resetMessage;
        document.getElementById("invalid_last").innerHTML = resetMessage;
        document.getElementById("invalid_number").innerHTML = resetMessage;
        document.getElementById("invalid_first1").innerHTML = resetMessage;
        document.getElementById("invalid_last1").innerHTML = resetMessage;
        document.getElementById("invalid_number1").innerHTML = resetMessage;
        document.getElementById("invalid_skill").innerHTML = resetMessage;
        document.getElementById("invalid_instrument").innerHTML = resetMessage;
        document.getElementById("invalid_location").innerHTML = resetMessage;
        document.getElementById("invalid_room").innerHTML = resetMessage;
        document.getElementById("invalid_time").innerHTML = resetMessage;
}

function validatePerformance(){
    var form = document.getElementById("myForm");
    var term1 = document.getElementsByName("performance").value;
    if ((form[0].checked == false) && (form[1].checked == false) && (form[2].checked == false)) {
        textTerm = "Please Choose Performance Type";
        }
    else
      {
          textTerm = "";
        }
    document.getElementById("invalid_performance").innerHTML = textTerm; 
}

function validateFirst(){
    var term1 = document.getElementById("first_name").value;
    if (term1 == "") 
    {
        textTerm = "Please Enter Your First Name";
     }
    else
      {
          textTerm = "";
       }
    document.getElementById("invalid_first").innerHTML = textTerm;    
}

function validateID(){
    
    var term1 = document.getElementById("student_id").value;
    if (term1 == "")
    {
        textTerm = "Please Enter ID";
    }
    else if(isNaN(term1))
      {
          textTerm = "Enter Numbers Only";
        }
    else
        textTerm = "";
    document.getElementById("invalid_number").innerHTML = textTerm;    
    // return isGood; 
}

function validateLast(){
    var isGood = true;
    var term1 = document.getElementById("last_name").value;
    if (term1 == "")  
    {
        textTerm = "Please Enter Your Last Name";
        isGood = false;
    }
    else
      {
          textTerm = "";
      //    isGood = false
      }
    document.getElementById("invalid_last").innerHTML = textTerm;    
    // return isGood; 
}
function validateFirst1(){
    var term1 = document.getElementById("first_name1").value;
    if (term1 == "") 
    {
        textTerm = "Please Enter Your First Name";
     }
    else
      {
          textTerm = "";
       }
    document.getElementById("invalid_first1").innerHTML = textTerm;    
}

function validateID1(){
    
    var term1 = document.getElementById("student_id1").value;
    if (term1 == "")
    {
        textTerm = "Please Enter ID";
    }
    else if(isNaN(term1))
      {
          textTerm = "Enter Numbers Only";
        }
    else
        textTerm = "";
    document.getElementById("invalid_number1").innerHTML = textTerm;    
    // return isGood; 
}

function validateLast1(){
    var isGood = true;
    var term1 = document.getElementById("last_name1").value;
    if (term1 == "")  
    {
        textTerm = "Please Enter Your Last Name";
        isGood = false;
    }
    else
      {
          textTerm = "";
      //    isGood = false
      }
    document.getElementById("invalid_last1").innerHTML = textTerm;    
    // return isGood; 
}
function validateRoom(){
    
    var term1 = document.getElementById("room").value;
    if (term1 == "")
    {
        textTerm = "Please Enter Room #";
    }
    else if(isNaN(term1))
      {
          textTerm = "Enter Numbers Only";
        }
    else
        textTerm = "";
    document.getElementById("invalid_room").innerHTML = textTerm;    
    // return isGood; 
}

function validateLocation(){
    var form = document.getElementById("myForm");
    var term1 = document.getElementsByName("location").value;
    if ((form[0].checked == false) && (form[1].checked == false) && (form[2].checked == false)) {
        textTerm = "Please Choose Location";
        }
    else
      {
          textTerm = "";
        }
    document.getElementById("invalid_location").innerHTML = textTerm; 
}

function validateSkill(){
    var term1 = document.getElementById("skill").value;
    if (term1 == "") 
    {
        textTerm = "Please Choose A Skill Level";
     }
    else
      {
          textTerm = "";
       }
    document.getElementById("invalid_skill").innerHTML = textTerm;    
}

function validateInstrument(){
    var term1 = document.getElementById("instrument").value;
    if (term1 == "") 
    {
        textTerm = "Please Pick an Instrument";
     }
    else
      {
          textTerm = "";
       }
    document.getElementById("invalid_instrument").innerHTML = textTerm;    
}

function validateTime(){
    var term1 = document.getElementById("time_slot").value;
    if (term1 == "") 
    {
        textTerm = "Please Pick a Time Slot";
     }
    else
      {
          textTerm = "";
       }
    document.getElementById("invalid_time").innerHTML = textTerm;    
}
