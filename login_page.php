<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Page</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="icon" href="images/api_icon.png" type="image/ico" />
    </head>

    <?php
        include_once 'database_connection/koneksi.php';
        session_start();
        $username = '';
        $password = '';
        $err = '';

        if(isset($_POST['submit'])){
            if(empty($_POST['username'])) {
                $err = 'Username is required';
            } 
            elseif (empty($_POST['password'])) {
                $err = 'Password is required';
            }
            else {
                $user = htmlspecialchars($_POST['username']);
                $pass = htmlspecialchars($_POST['password']);
                $result = mysqli_query($con, "SELECT * FROM autentikasi WHERE username = '$user'");

                if ($result->num_rows == 0){
                    $err = 'Username not found';
                } else {
                    while ($data = mysqli_fetch_array($result)){
                        if ($data['password'] == $pass){
                            if ($data['level'] == 'admin'){
                                $_SESSION['login'] = true;
                                header("Location: admin_dashboard.php");
                            } else {
                                $_SESSION['login'] = true;
                                header("Location: index.php");
                            }    
                        } else {
                            $err = 'Password is wrong';
                        }
                }
            }
        }
    }
    ?>
    <body>
        <section>
            <div class="imgBx">
                <img src="images/fuji.jpg">
            </div>
            <div class="contentBx">
                <div class="formBx">
                    <h2>Login</h2>
                    <?php
                         if (!empty($err)){
                             echo "<p class = 'err'>".$err."</p>";
                         }
                    ?>
                    <form method="post" action="login_page.php">
                        <div class="inputBx">
                            <span>Username</span>
                            <input type="text" name="username" value="<?php echo $username;?>">
                        </div>
                        <div class="inputBx">
                            <span>Password</span>
                            <input type="password" name="password" value="<?php echo $password;?>">
                        </div>
                        <div class="remember">
                            <label><input type="checkbox" name="rememberMe"> Remember me</label>
                        </div>
                        <div class="inputBx">
                            <input type="submit" value="Sign in" name="submit">
                        </div>
                        <div class="inputBx">
                            <p>Don't have an account? <a href="register.php">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </body>
</html>