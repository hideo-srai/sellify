<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="utf-8">
		<title>Search - <?php echo $web['title']; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php echo $web['description']; ?>">
		<meta name="author" content="Nidigo Design">
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
		
		<!-- Stylesheets -->
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_global.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_productpage.css">
		<link rel="stylesheet" href="<?php echo $web['url']; ?>static/gen/packed_marketplace.css">
		<link href="<?php echo $web['url']; ?>static/gen/index-ff32bbed5acf272afa0480aae0eaa0d5.css" media="all" rel="stylesheet" type="text/css" />
		<link href="<?php echo $web['url']; ?>static/gen/index-cc0b97a49fc32ccbbd1bd6960a1574fb.css" media="all" rel="stylesheet" type="text/css" />
		<!-- End Stylesheets -->
	    
		<!-- Favicons -->
		<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $web['url']; ?>static/favicons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="<?php echo $web['url']; ?>static/favicons/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#2b5797">
		<meta name="msapplication-TileImage" content="<?php echo $web['url']; ?>static/favicons/mstile-144x144.png">
    <!--<![endif]-->

    <!--[if (lte IE 8)]>
      <link href="//dmypbau5frl9g.cloudfront.net/assets/market/core/index_ltie9-941664f6433eb6e6e36bbd8efcface5b.css" media="all" rel="stylesheet" type="text/css" />
      <link href="//dmypbau5frl9g.cloudfront.net/assets/market/pages/hub/index_ltie9-a13e33e46f250aea25dbf48daed71176.css" media="all" rel="stylesheet" type="text/css" />
    <![endif]-->
<style>
#c1 {
    width: 30%;
}

#c2 {
    margin-left: auto;
    margin-right: auto;
}
</style>
	</head>

  <body data-view="app" class="">
    <div class="page">

<?php if(!$_SESSION['ps_usern']) { ?>
<div class="ui grid full-width sellfy-header">
  <div class="row">
	<div onmousedown="return false">
		<p align="center">
		<a href="<?php echo $web['url']; ?>"><img src="<?php echo $web['url']; ?>static/logo/logo.png" alt="logo" style="width:240px; height:46px;"  /></a>
		</p>
	</div>
	
  </div>
</div>
<?php } ?>
<?php if($_SESSION['ps_usern']) { ?>
<nav class="ui grid full-width sellfy-header">
  <div class="row">
    <div class="column four wide left aligned">
      <div onmousedown="return false">
		<a href="<?php echo $web['url']; ?>"><img src="<?php echo $web['url']; ?>static/logo/logo.png" alt="logo" style="width:240px; height:46px;"  /></a>
	  </div>
    </div>
    <div class="column twelve wide right aligned connect-panel">
      <a href="<?php echo $web['url']; ?>dashboard" data-pushstate="true" class="header-menu no-mobile" data-top-menu="dashboard"
        title="Go to my dashboard">
        Dashboard
      </a>
	  <span>&nbsp;</span>
      <a href="<?php echo $web['url']; ?>upload" data-pushstate="true" class="header-menu no-mobile" data-top-menu="newProduct" title="Upload new product">
        Upload
      </a>
	  <span>&nbsp;</span>
      <div class="ui top right pointing dropdown text header-dropdown-right">
        <span class="header-merchant-logo header-dropdown-url" style="background-image: url('<?php echo $web['url']; ?>static/logo/avatar.png')"></span>
        <i class="fa fa-angle-down"></i>
        <div class="menu header-notification-dropdown">
          <div class="item double red">
            <a class="visible">
              <p style="font-weight:bold"><span style="color:black"><?php echo $web['title']; ?></span></p>
            </a>
            <a class="hidden" href="<?php echo $web['url']; ?>">
              View my store page <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><i class="fa fa-angle-right"></i>
            </a>
          </div>
          <div class="ui divider"></div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>dashboard" data-pushstate="true" title="Go to my dashboard">
              My dashboard
            </a>
          </div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>products" data-pushstate="true" title="Go to my products">
              My products
            </a>
          </div>
          <div class="ui divider"></div>
          <div class="item">
            <a href="<?php echo $web['url']; ?>admin/settings" data-pushstate="true" title="Edit my settings">
              Admin panel
            </a>
          </div>
          <div class="item">
            <a href="http://discuss.nidigo.com/" target="_blank" title="Support Center">
              Help
            </a>
          </div>
          <div class="item double red" title="Log out">
            <a class="visible">
              Log out
            </a>
            <a class="hidden" href="<?php echo $web['url']; ?>logout">
              Are you sure?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
<?php } ?>    

<span>&nbsp;</span>

<section class="page-section -theme-themeforest">
  <div class="grid-container h-text-align-center">
    <header>
      <h1 class="t-heading -size-xxl -color-light">Everything you need for your next creative project.</h1>
      <h2 class="t-body -size-xl -color-light">
        Over 1 billion digital products created by a global community of designers,<br class="is-hidden-tablet-and-below">
         developers, photographers, illustrators &amp; producers around the world.
      </h2>
    </header>
    <div class="h-spacing-below--small h-spacing-above--small">
	<form action="<?php echo $web['url']; ?>search" method="POST" class="form-search">
	<h3 class="marketplace-search__heading -theme-dark">Search <?php echo $web['title']; ?></h3>
		<div id="c2" class="huge-search--market -theme-dark">
		<input type="search" class="js-marketplace-search__text -theme-dark" name="phps_query" placeholder="Search items..." <?php if(isset($_POST['phps_query'])) { echo 'value="'.$_POST[phps_query].'"'; } ?>>
		<button class="-theme-dark" type="submit" name="phps_search" class="btn btn-default"><i class="fa fa-search"></i></button>
		</div>
	</form>
    </div>
  </div>
</section>

<section class="page-section">
  <div class="grid-container h-text-align-center">
    <header>
      <div class="widget widget-events">
						
						<?php
						$phps_query = protect($_POST['phps_query']);
						if(isset($_POST['phps_search'])) {
							echo info("<h1 class='t-body -size-xl'>Results for: <strong>$phps_query</strong></h1>");
							$sql = mysql_query("SELECT * FROM sellify_items WHERE name LIKE '%$phps_query%' ORDER BY id DESC");
							if(mysql_num_rows($sql)>0) {
							while($row = mysql_fetch_array($sql)) {
							?>
							
  <article id="c1" class="featured-item">
	<a class="product-image-static" title="<?php echo $row['name']; ?>" href="<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>" target="_top">
		<img class="product-image-static" width="" height="197" alt="" src="<?php echo $web['url']; echo $row['preview']; ?>" />
	</a>
	 
	<h4 class="t-heading -size-xs -link-undecorated">
		<a href="<?php echo $web['url']; ?>p/<?php echo $row['id']; ?>">
			<?php echo $row['name']; ?>
		</a>
	</h4>
	<div class="element-corner--triangle -position-left -size-large -color-videohive">
		<div class="featured-item__price"><?php echo $row['price_extended']; echo decode_currency($web['currency']); ?></div>
	</div>
  </article>
							<?php
							}
							} else {
								echo info("No results for <b>$phps_query</b>.");
							} 
						} else {
						
						}
						?>
						
					  </div>
    </header>
  </div>
</section>


<footer class="site-footer">
  <div class="site-footer__primary">
    <div class="footer-primary">
	  <div class="grid-container">
		<div class="footer-top">
		<center>
			<div href="#" class="marketplace-stats__stat">
				<span> Thank you for visiting our website and </span> we wish you much happiness <span>with our products.</span>
			</div>
		</center>
		</div>
	  </div>
      <div class="footer-bottom">
		<p align="center"><span style="color:white">&copy; <?php echo date("Y"); ?> <?php echo $web['sitename']; ?>. All rights reserved | Propulsed by <a href="http://codecanyon.net/item/sellify-sell-your-digital-products/10122052?ref=Nidigo"><span style="color:white"><u>Sellify</u></span></a></span></p>
	  </div>
    </div>
  </div>
</footer>
      </div>
    </div>
	<script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_productpage_f1af34b1.js"></script>
	<script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_marketplace.js"></script>
	<script type="text/javascript" src="<?php echo $web['url']; ?>static/gen/packed_global.js"></script>
  </body>
</html>
