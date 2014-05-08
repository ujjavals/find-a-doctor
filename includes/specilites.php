<?php
include("connection.php");

$result  = mysqli_query($con,"SELECT DISTINCT speciality_name FROM speciality_list");
?>
<option value="0">SPECIALTIES</option>
<?php
while($row = mysqli_fetch_array($result))
{
	
	?>
	<option><?php echo $row['speciality_name']; ?></option>
	<?php

} 
?>