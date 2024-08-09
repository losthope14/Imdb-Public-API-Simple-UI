# Ombd-Public-API-Simple-UI

Ini adalah aplikasi web sederhana yang dibuat sebagai tugas mata kuliah. Aplikasi web ini memungkinkan pengguna mencari film menggunakan API OMDB dan melihat informasi detail tentang setiap film. Aplikasi ini mencakup otentikasi pengguna, dan antarmukanya dibangun menggunakan Bootstrap untuk desain yang responsif.

## Fitur

- **Pencarian Film:** Cari film berdasarkan nama menggunakan API OMDB.
- **Detail Film:** Tampilkan informasi detail tentang setiap film.
- **Otentikasi Pengguna:** Registrasi, login, dan manajemen sesi pengguna.
- **Desain Responsif:** Website dirancang menggunakan Bootstrap agar responsif pada berbagai perangkat.

## Teknologi yang Digunakan

- **PHP:** Untuk koneksi database dan menangani login, registrasi, serta manajemen sesi.
- **JavaScript:** Untuk menghubungkan ke API OMDB dan mengambil data film.
- **MySQL:** Untuk mengelola akun pengguna dan data otentikasi.
- **XAMPP:** Untuk menyiapkan lingkungan pengembangan lokal dengan Apache dan MySQL.
- **Bootstrap:** Untuk styling dan desain responsif.

## Instruksi Pengaturan

### Prasyarat

1. **XAMPP**: Pastikan Anda telah menginstal XAMPP di mesin lokal Anda.
2. **OMBD API**: Kunjungi website Ombd API di [Omdb API](http://www.omdbapi.com)
3. **Kunci API OMDB**: Dapatkan kunci API dari [OMDB APIKEY](http://www.omdbapi.com/apikey.aspx).

### Instalasi

1. **Clone Repository**

    ```bash
    git clone https://github.com/username-anda/nama-repository-anda.git
    cd nama-repository-anda
    ```

2. **Atur XAMPP**

    - Jalankan Apache dan MySQL dari panel kontrol XAMPP.

3. **Buat Database**

    - Buka phpMyAdmin di `http://localhost/phpmyadmin`.
    - Buat database baru.
    - Impor file `.sql` yang disediakan ke dalam folder **database** untuk membuat tabel-tabel yang diperlukan.

## Penggunaan

- **Registrasi:** Pengguna dapat membuat akun baru melalui formulir registrasi.
- **Login:** Pengguna yang sudah ada dapat masuk menggunakan kredensial mereka.
- **Cari Film:** Gunakan bilah pencarian untuk mencari film berdasarkan nama.
- **Lihat Detail:** Klik pada film untuk melihat informasi detail yang disediakan oleh API OMDB.
