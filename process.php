<?php

$errors         = array();      
$data           = array();      



    if (empty($_POST['name'])){
        $errors['name'] = 'Name is required!';
    }
    if (!empty($_POST['name']) && !preg_match("/^[a-zA-Z ]*$/",$_POST['name'])) {
        $errors['name'] = "Only letters and white space allowed"; 
    }

    if (empty($_POST['email'])){
        $errors['email'] = 'Email is required!';
    }
    if (!empty($_POST['email']) && !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format"; 
    }

    if (empty($_POST['mobile'])){
        $errors['mobile'] = 'Phone No is required!';
    }
    if (!empty($_POST['mobile']) && !preg_match('/^[0-9]{11}+$/', $_POST['mobile'])){
        $errors['mobile'] = 'Phone No is invalid!';
    }


    if (empty($_POST['address'])){
        $errors['address'] = 'Address is required!';
    }
    if (!empty($_POST['address']) && !preg_match('/^[a-zA-Z0-9][a-zA-Z0-9- ,()\/]*$/', $_POST['address'])){
        $errors['address'] = 'Address is invalid!';
    }
    if ( ! empty($errors)) {

        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    echo json_encode($data);