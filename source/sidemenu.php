<div class="my_account">
    <div id="left_sidebar">
        <div id="left_menu">
            <div class="ui vertical fluid menu">
                <a href="/dashboard" data-pushstate="true" class="red item active" id="menu_dashboard">
                    Dashboard
                </a>
                <div class="header item">
                    Products
                </div>
                <div class="item">
                    <div class="menu submenu">
                        <a href="/upload" data-pushstate="true" class="item red ">Add new product</a>
                        <a href="/products" data-pushstate="true" class="item red ">My products</a>
                        <a href="/customers" data-pushstate="true" class="red item">Customers</a>
                    </div>
                </div>
                <?php if($_SESSION['ps_usern'] == 'admin' ) {?>
                <div class="header item">
                    Admin panel
                </div>
                <div class="item">
                    <div class="menu submenu">
                        <a href="/admin/users" data-pushstate="true" class="red item">Users</a>
                        <a href="/admin/products" data-pushstate="true" class="red item">Products</a>
                        <a href="/admin/settings" data-pushstate="true" class="red item">System Settings</a>
                        <a href="/admin/payments" data-pushstate="true" class="item red">Payment Settings</a>
                    </div>
                </div>
                <?php } ?>
                <div class="header item">
                    My Account
                </div>
                <div class="item">
                    <div class="menu submenu">
                        <a href="/change_password" data-pushstate="true" class="item red">Change Password</a>
                        <a href="/logout" data-pushstate="true" class="item red">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>