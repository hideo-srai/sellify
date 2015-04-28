<nav class="ui grid full-width sellfy-header">
    <div class="row">
        <div class="column four wide left aligned">
            <div onmousedown="return false">
                <a href="<?php echo $web['url']; ?>"><img src="<?php echo $web['url']; ?>static/logo/logo.png" alt="logo" style="width:128px; height:55px;"  /></a>
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
                        <p style="font-weight:bold"><span style="color:black"><?php echo $_SESSION['ps_usern'] ?></span></p>
                    </a>
                    <a class="hidden" href="<?php echo $web['url']; ?>">
                        View store page <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><i class="fa fa-angle-right"></i>
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
                <?php if($_SESSION['ps_usern'] == 'admin' ) {?>
                <div class="item">
                    <a href="<?php echo $web['url']; ?>admin/settings" data-pushstate="true" title="Edit my settings">
                        Admin panel
                    </a>
                </div>
                <?php } ?>
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
