<?php
     // create a PHP object with the filename,filetype, and cwd properties.

   //   class registre//fileN
   //   {
   //      public $performance;
   //      public $skill;
   //      public $student;
   //      public $instrument;
   //      public $location;
   //      public $room;
   //      public $time;
   //   }

   //   class students
   //   {
   //      public $first_name;
   //      public $last_name;
   //      public $id;
   //   }

     $perf = $_GET["performance"];
     $first = $_GET["first_name"];
     $last = $_GET["last_name"];
     $id = $_GET["id"];
     $skill = $_GET["skill"];
     $instrument = $_GET["instrument"];
     $location = $_GET["location"];
     $room = $_GET["room"];
     $time = $_GET["time"];
     $firstName = $_GET["first_name1"];
     $lastName = $_GET["last_name1"];
     $idO = $_GET["id1"];

if($perf != "Duet")
     $str = "<tr><td>$perf</td><td>$first</td><td>$last</td><td>$id</td><td>$skill</td><td>$instrument</td><td>$location</td><td>$room</td><td>$time</td></tr>";

else
{
   $str = "<tr><td>$perf</td><td>$first<br>$firstName</td><td>$last<br>$lastName</td><td>$id<br>$idO</td><td>$skill</td><td>$instrument</td><td>$location</td><td>$room</td><td>$time</td></tr>";
}
   //   $registration = new registre();

   //  //  if($perf != "Duo")
   //  //  {
   //   $registration->performance = $perf;
   //   $registration->student = Array();
   //   $registration->student[0] = new students();
   //   $registration->student[0]->first_name = $first;
   //   $registration->student[0]->last_name = $last;
   //   $registration->student[0]->id = $id;
   //   $registration->skill = $skill;
   //   $registration->instrument = $instrument;
   //   $registration->location = $location;
   //   $registration->room = $room;
   //   $registration->time = $time;
    //  }

    //  else
    //  {
    //     $registration->performance = $perf;
    //     $registration->student = Array();
    //     $registration->student[0] = new students();
    //     $registration->student[0]->first_name = $first;
    //     $registration->student[0]->last_name = $last;
    //     $registration->student[0]->id = $id;
    //     $registration->student[1] = new students();
    //     $registration->student[1]->first_name = $firstName;
    //     $registration->student[1]->last_name = $lastName;
    //     $registration->student[1]->id = $idO;
    //     $registration->skill = $skill;
    //     $registration->instrument = $instrument;
    //     $registration->location = $location;
    //     $registration->room = $room;
    //     $registration->time = $time;
    //  }

    //  $cwd = getcwd();     // get path to the current working directory
    //  $folder = ".";       // Set the folder variable to specify the "current" directory    
     
    //  // create an array of filenames of files from the current directory
    //  $files = scandir($folder);
    //  $directory = Array();     // create a array object to store a list of objects.

    //  $i = 0;
    //  $len = sizeof($files);

    //  for($i; $i < $len; $i++)
    //  {
    //      $directory[$i] = new fileN();
    //      $directory[$i]->fileName = $files[$i];
    //      $directory[$i]->fileType = filetype($files[$i]);
    //      $directory[$i]->cwd = $cwd;
    //  }
     
     /*******************End of your Code *******************************************/
     
     // convert the PHP array of objects to a JSON string
   //   $str = json_encode($registration);
  
     $myfile = fopen("data/data.txt", "a") or die("error");
     fwrite($myfile, $str);
     fclose($myfile);

     $fStr = file_get_contents ("data/data.txt");

     print "\n $fStr \n"; 
     //output the json string - The string is sent to the browser.      
     ?>

