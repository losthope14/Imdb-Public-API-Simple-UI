<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/api_icon.png" type="image/ico" />
</head>
	<?php
        include_once 'database_connection/koneksi.php';
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
                $user = $_POST['username'];
                $pass = $_POST['password'];
                $level = $_POST['level'];

                $result = mysqli_query($con, "SELECT username FROM autentikasi WHERE username = '$user'");

                if ($result->num_rows > 0){
                    $err = 'Username have exist';
                } else {
                	$queryInsert = mysqli_query($con, "INSERT INTO autentikasi (username, password, level) VALUES ('$user', '$pass', '$level')");
                    
                    if($queryInsert){
						$err = "Register successfully";
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
                    <h2>REGISTER</h2>
                    <?php
                         if (!empty($err)){
                             echo "<p class = 'err'>".$err."</p>";
                         }
                    ?>
                    <form method="post" action="register.php">
                        <div class="inputBx">
                            <span>Username</span>
                            <input type="text" name="username" value="<?php echo $username;?>">
                        </div>
                        <div class="inputBx">
                            <span>Password</span>
                            <input type="password" name="password" value="<?php echo $password;?>">
                        </div>
                        <input type="hidden" name="level" value="user">
                        <div class="remember">
                            <label><input type="checkbox" name="rememberMe"> Remember me</label>
                        </div>
                        <div class="inputBx">
                            <input type="submit" value="Sign up" name="submit">
                        </div>
                        <div class="inputBx">
                            <p>Do you have an account? <a href="login_page.php">Sign in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </body>
</html>