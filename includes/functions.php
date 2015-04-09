<?php
function protect($string) {
	$protection = htmlspecialchars(trim($string), ENT_QUOTES);
	return $protection;
}

function idinfo($id,$value) {
	$sql = mysql_query("SELECT * FROM sellify_users WHERE usern='$id'");
	$row = mysql_fetch_array($sql);
	return $row[$value];
}

function success($text) {
	return '<div id="cr_notification" class="alert alert-success">'.$text.'</div>';
}

function info($text) {
	return '<div id="cr_notification" class="alert alert-info">'.$text.'</div>';
}

function error($text) {
	return '<div id="cr_notification" class="alert alert-danger">'.$text.'</div>';
}

function isValidURL($url) {
	return preg_match('|^http(s)?://[a-z0-9-]+(.[a-z0-9-]+)*(:[0-9]+)?(/.*)?$|i', $url);
}

function isValidUsername($str) {
    return preg_match('/^[a-zA-Z0-9-_]+$/',$str);
}

function isValidEmail($str) {
	return filter_var($str, FILTER_VALIDATE_EMAIL);
}

function genSKey($length = 10) {
    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
}


function pagination($murl,$idd = NULL,$query,$ver,$per_page = 10,$page = 1, $url = '?') { 
		if($idd) { $ver = $ver."/".$idd; }
    	$query = "SELECT COUNT(*) as `num` FROM {$query}";
    	$row = mysql_fetch_array(mysql_query($query));
    	$total = $row['num'];
        $adjacents = "2"; 

    	$page = ($page == 0 ? 1 : $page);  
    	$start = ($page - 1) * $per_page;								
		
    	$prev = $page - 1;							
    	$next = $page + 1;
        $lastpage = ceil($total/$per_page);
    	$lpm1 = $lastpage - 1;
    	
    	$pagination = "";
    	if($lastpage > 1)
    	{	
    		$pagination .= "<div class='pagination'><ul>";
                
    		if ($lastpage < 7 + ($adjacents * 2))
    		{	
    			for ($counter = 1; $counter <= $lastpage; $counter++)
    			{
    				if ($counter == $page)
    					$pagination.= "<li><a class='active'>$counter</a></li>";
    				else
    					$pagination.= "<li><a href='$murl$ver/$counter'>$counter</a></li>";					
    			}
    		}
    		elseif($lastpage > 5 + ($adjacents * 2))
    		{
    			if($page < 1 + ($adjacents * 2))		
    			{
    				for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
    				{
    					if ($counter == $page)
    						$pagination.= "<li><a class='active'>$counter</a></li>";
    					else
    						$pagination.= "<li><a href='$murl$ver/$counter'>$counter</a></li>";					
    				}
    				$pagination.= "<li class='disabled'>...</li>";
    				$pagination.= "<li><a href='$murl$ver/$lpm1'>$lpm1</a></li>";
    				$pagination.= "<li><a href='$murl$ver/$lastpage'>$lastpage</a></li>";		
    			}
    			elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
    			{
    				$pagination.= "<li><a href='$murl$ver/1'>1</a></li>";
    				$pagination.= "<li><a href='$murl$ver/2'>2</a></li>";
    				$pagination.= "<li class='disabled'><a>...</a></li>";
    				for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
    				{
    					if ($counter == $page)
    						$pagination.= "<li><a class='active'>$counter</a></li>";
    					else
    						$pagination.= "<li><a href='$murl$ver/$counter'>$counter</a></li>";					
    				}
    				$pagination.= "<li class='disabled'><a>..</a></li>";
    				$pagination.= "<li><a href='$murl$ver/$lpm1'>$lpm1</a></li>";
    				$pagination.= "<li><a href='$murl$ver/$lastpage'>$lastpage</a></li>";		
    			}
    			else
    			{
    				$pagination.= "<li><a href='$murl$ver/1'>1</a></li>";
    				$pagination.= "<li><a href='$murl$ver/2'>2</a></li>";
    				$pagination.= "<li class='disabled'><a>..</a></li>";
    				for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
    				{
    					if ($counter == $page)
    						$pagination.= "<li><a class='active'>$counter</a></li>";
    					else
    						$pagination.= "<li><a href='$murl$ver/$counter'>$counter</a></li>";					
    				}
    			}
    		}
    		
    		if ($page < $counter - 1){ 
    			$pagination.= "<li><a href='$murl$ver/$next'>Next</a></li>";
                $pagination.= "<li><a href='$murl$ver/$lastpage'>Last</a></li>";
    		}else{
    			$pagination.= "<li><a class='disabled'>Next</a></li>";
                $pagination.= "<li><a class='disabled'>Last</a></li>";
            }
    		$pagination.= "</ul></div>\n";		
    	}
    
    
        return $pagination;
} 

function decode_currency($currency) {
	if($currency == "USD") {
		return '$';
	} elseif($currency == "EUR") {
		return '&euro;';
	} else {
		return '$';
	}
}
?>