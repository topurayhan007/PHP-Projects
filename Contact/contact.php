<?php 
    // session_start();

    if(isset($_POST['submit'])){
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];


        $link = mysqli_connect("localhost", "root", "", "My-Contact-Form");

        if($link === false){
            die("ERROR: Could not connect." . mysqli_connect_error());
        }

        $sql = "INSERT INTO  userInfo (firstName, lastName, email, phoneNo, subject, message) 
                VALUES ('$fName', '$lName', '$email', '$phone', '$subject', '$message')";

        if (mysqli_query($link, $sql)){
            // $success = "Records added successfully!";
            echo '<script>alert("Records added successfully!")</script>';
            // echo "Records added successfully!";
            header("Location: index.html");
            
        }
        else{
            
            echo "ERROR: Could not able to execute $sql." . mysqli_error($link);
        }

        mysqli_close($link);
    }
    
    
?>

