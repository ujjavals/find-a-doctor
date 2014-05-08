<?php
include("connection.php");

$result  = mysqli_query($con,"SELECT DISTINCT location_name FROM location_list");
?>
<option value="0">LOCATION</option>

<?php
while($row = mysqli_fetch_array($result))
{
	
	?>
	<option><?php echo $row['location_name']; ?></option>
	<?php

} 
?>