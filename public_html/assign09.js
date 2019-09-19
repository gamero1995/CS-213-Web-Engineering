function getText() 
{
  var fileName = document.getElementById("city").value;
  if(fileName == "option")
      document.getElementById("response").innerHTML = " "
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("response").innerHTML =
        this.responseText;
      }
    };
  xhttp.open("GET", "http://157.201.194.254/~cs213/" + fileName, true);
  xhttp.send();
    
}

function jsonFunction()
{
  var json = document.getElementById("file").value
  if( json == "json.txt" || json == "json1.txt")
  {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
       if (this.readyState == 4 && this.status == 200)
       {
          buildTable(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open("GET", "http://157.201.194.254/~cs213/" + json, true);
     xmlhttp.send();
  }
  else
    document.getElementById("student").innerHTML = "<i>File does not exist<i>"
}

function buildTable(json)
{
   var students = json.students;
   var html = "";
   console.log(json);
   for(i = 0; i < students.length; i++)
   {
       html += students[i].first + " " + students[i].last + "<br>"
       + students[i].address.city + ", " + students[i].address.state + " " + students[i].address.zip + "<br>"
       + "Major: " + students[i].major + "<br>"
       + "GPA: " + students[i].gpa + "<br>" + "<br>"
   }
   document.getElementById("student").innerHTML = html;
}