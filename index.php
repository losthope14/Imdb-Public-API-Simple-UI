<?php
  session_start();
  if (!isset($_SESSION['login'])){
    header("Location: login_page.php");
    exit();
  }
?>
<!DOCTYPE html>
<html>
<head>
        <title>Public API</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width = device-width, initial-scale = 1.0">
        <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.css">
        <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.rtl.css">
        <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.rtl.min.css">
        <link rel="icon" href="images/api_icon.png" type="image/ico" />
        <script src="bootstrap-5.1.3-dist/js/bootstrap.bundle.js"></script>
</head>
<body>
        <nav class="navbar navbar-expand-lg navbar-light mb-3" style="background-color: #ff4584;">
          <div class="container">
            <a class="navbar-brand fs-3 text-white" href="#">Public-API</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active fs-5" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="bootstrap-4/about_us.php">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="login_page.php">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div class="jumbotron">
        <div class="container">
            <div class="row et-3 justify-content-center">
                <div class="col-md-8">
                    <h1 class="text-center">Search Movie</h1>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Movie title.." aria-label="Recipient's username" aria-describedby="button-addon2" id="search-input">
                    <button id="search-button" class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                    </div>
                </div>
            </div>

            <hr>

            <div class="row" id="movie-list"></div>
        </div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Details</h5>
              </div>
              <div class="modal-body">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

<script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/ambil_data.js"></script>
</body>
</html>