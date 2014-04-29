<?php 
if(isset($_POST['title']) && isset($_POST['name']) && isset($_POST['vasigo_text'])){
$title =$_POST['title'];
$name =$_POST['name'];
$content = stripslashes($_POST['vasigo_text']);
$date = date("l dS F Y");
}
?>
<!DOCTYPE html>
<html>
<head>
<title>
<?php
if(isset($title)){ echo $title." | Eleven";}
else { echo "Eleven";}
?>
</title>
<link rel="stylesheet" href="css/style.css" >
</head>
<body>
<div class="holder">
<h1>Eleven editor</h1>
<hr/>
<?php
if(isset($title) && isset($name) && isset($title) && isset($date)){
?>
    <h2><?php echo $title; ?></h2>
    <hr/>
    <small>Posted on <?php echo $date; ?> by <?php echo $name; ?></small>
    <hr/>
    <p><?php echo $content; ?></p>
    

<?php    
}
else {
?>
    <h3><font color="red">Please fill all the details !</font></h3>
    <a href="index.html"> << Back</a>
<?php
}
?>
</div><!-- ./ holder -->   
</body>
</html>