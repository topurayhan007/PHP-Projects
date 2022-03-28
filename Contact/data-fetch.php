<?php

    $link = mysqli_connect("localhost", "root", "", "My-Contact-Form");

    if ($link->connect_error) {
        die("Connection failed: " . $link->connect_error);
    }

    $sql = "SELECT firstName, lastName, email, phoneNo, subject, message 
            FROM userInfo";

    $result = $link->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<br> First Name: ". $row["firstName"]. "   Last Name: ". $row["lastName"]. "   Email: ". $row["email"] . 
            "   Phone No: ". $row["phoneNo"] . "   Subject: ". $row["subject"] . "   Message: ". $row["message"] ."<br>";
        }
    } 
    else {
        echo "0 results";
    }

    $link->close();
?>