function jsonFunction(){
    var json = "assign10.php"

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
       if (this.readyState == 4 && this.status == 200)
       {
          buildTable(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open("GET", json, true);
     xmlhttp.send();
}

function buildTable(json)
{
    console.log(json)
    var table = "<tr><th>File Name</th><th>File Type</th><th>CWD</th><th>Action</th></tr>";
   console.log(json);
   for(i = 0; i < json.length; i++)
   {
       table += "<tr><td>" + json[i].fileName + "</td><td>" + json[i].fileType + "</td><td>" + json[i].cwd + "</td><td><a href = '" + json[i].fileName + "'>click to display</a></td></tr>"
   }
   document.getElementById("table").innerHTML = table;
}
