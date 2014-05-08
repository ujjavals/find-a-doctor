<?php
/* $a = array('<foo>',"'bar'",'"baz"','&blong&');

echo json_encode($a); */


$username="root";
$database="doctor_bangalore";
$password='';
$conn = mysql_connect("localhost",$username,$password);
mysql_select_db($database,$conn)or die("error");
{
    $sqlQuery = "SELECT  * from  location_list  ORDER BY location_list.location_name LIMIT 0,2";
}


$result=mysql_query($sqlQuery) or die(mysql_error());

mysql_close();
$rows=array();
while($r=mysql_fetch_assoc($result))
{
    $rows[]=$r;
    }
    echo json_encode($rows);  


?>