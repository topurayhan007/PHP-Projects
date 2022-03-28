<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data from Contact Form</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <!-- Custom Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

    <style>
        body{
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:azure;
        }
        table, th, td{
            border: 2px solid black;
            text-align: center;
            padding: 1rem;
        }
        tr:nth-child(even){
            background-color:#c7eef5;
        }
        tr:nth-child(odd){
            background-color:aquamarine;
        }
    </style>
</head>
<body>
    
    <?php

        $link = mysqli_connect("localhost", "root", "", "My-Contact-Form");

        if ($link->connect_error) {
            die("Connection failed: " . $link->connect_error);
        }

        $sql = "SELECT firstName, lastName, email, phoneNo, subject, message 
                FROM userInfo";

        $result = $link->query($sql);

        if ($result->num_rows > 0) {
            echo "<table> <tr><th>First Name</th><th>Last Name</th> <th>Email</th> <th>Phone No.</th> <th>Subject</th> <th>Message</th></tr>";
            while($row = $result->fetch_assoc()) {
                echo "<tr><td>". $row["firstName"]. "</td><td>". $row["lastName"]. "</td><td>". $row["email"] . 
                "</td><td>". $row["phoneNo"] . "</td><td>". $row["subject"] . "</td><td>". $row["message"] ."</td></tr>";
            }
            echo "</table>";

            
        } 
        else {
            echo "0 results";
        }

        $link->close();
    
    ?>

</body>
</html>
