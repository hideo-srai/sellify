<?php
						$sql["host"] = "localhost";
						$sql["user"] = "root";
						$sql["pass"] = "";
						$sql["base"] = "sellify";
						$connection = mysql_connect($sql["host"],$sql["user"],$sql["pass"]);
						$select_database = mysql_select_db($sql["base"], $connection);
						mysql_query("SET NAMES utf8");
						?>
						