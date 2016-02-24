<?php 

$dbo = new PDO('mysql:host=' . 'localhost'. ';dbname=' . 'test', 'root', 'root');

$q_emp="select distinct(nam),id,role from emp ";
$sth = $dbo->prepare($q_emp);
$sth->execute();
$users = $sth->fetchAll();

$userName = 'Test'.count($users);

// Insert new entry
$q_emp= "INSERT INTO `emp` (`nam`) VALUES ('$userName')";
$sth = $dbo->prepare($q_emp);
$sth->execute();


?>