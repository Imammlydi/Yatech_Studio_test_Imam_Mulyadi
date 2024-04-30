




# API Klinik Digital

## Deskripsi
Proyek ini adalah aplikasi klinik digital yang memungkinkan pencatatan pengobatan pasien secara digital. Aplikasi ini menggunakan Express.js untuk backend dan MongoDB untuk database.

## Instalasi
1. Pastikan Anda telah menginstal Node.js dan npm di komputer Anda.
2. Clone repositori ini ke komputer Anda.
3. Buka terminal dan arahkan ke direktori proyek.
4. Jalankan perintah berikut untuk menginstal semua dependensi:

    ```bash
    npm install
    ```

## Penggunaan
1. Pastikan MongoDB telah terpasang dan berjalan di localhost:27017.
2. Jalankan aplikasi dengan perintah:

    ```bash
    npm start
    ```

3. Aplikasi akan berjalan di `http://localhost:3000`.
4. Anda dapat menggunakan Postman atau browser untuk mengakses API klinik.
5. Berikut adalah daftar endpoint yang tersedia:

    - **POST /api/treatments**: Membuat catatan pengobatan baru.
    - **GET /api/treatments**: Mendapatkan semua catatan pengobatan.
    - **PUT /api/treatments/:id**: Memperbarui catatan pengobatan berdasarkan ID.
    - **DELETE /api/treatments/:id**: Menghapus catatan pengobatan berdasarkan ID.


      ### Contoh Penggunaan dengan Postman

1. **Membuat Catatan Pengobatan Baru**
   - Buka Postman.
   - Setel metode request menjadi POST.
   - Masukkan URL `http://localhost:3000/api/treatments`.
   - Pilih tab "Body", kemudian pilih "raw" dan "JSON".
   - Masukkan data pengobatan dalam format JSON seperti ini:

     ```json
     {
          "nama_pasien": "Mahatir",
          "tanggal_pengobatan": "2024-04-30",
          "keluhan": ["Sakit kepala", "Demam"],
          "resep_obat": ["Paracetamol", "Ibuprofen"],
          "biaya_pengobatan": 100,
          "menggunakan_asuransi": true,
          "nama_asuransi": "HealthGuard",
          "biaya_yang_dicover_asuransi": 50
     }
     ```

   - Klik tombol "Send" untuk membuat catatan pengobatan baru.

2. **Mendapatkan Semua Catatan Pengobatan**
   - Buka Postman.
   - Setel metode request menjadi GET.
   - Masukkan URL `http://localhost:3000/api/treatments`.
   - Klik tombol "Send" untuk mendapatkan semua catatan pengobatan.

3. **Memperbarui Catatan Pengobatan**
   - Buka Postman.
   - Setel metode request menjadi PUT.
   - Masukkan URL `http://localhost:3000/api/treatments/:id` (ganti `:id` dengan ID catatan yang ingin diperbarui).
   - Pilih tab "Body", kemudian pilih "raw" dan "JSON".
   - Masukkan data perubahan dalam format JSON.
   - Klik tombol "Send" untuk memperbarui catatan pengobatan.

4. **Menghapus Catatan Pengobatan**
   - Buka Postman.
   - Setel metode request menjadi DELETE.
   - Masukkan URL `http://localhost:3000/api/treatments/:id` (ganti `:id` dengan ID catatan yang ingin dihapus).
   - Klik tombol "Send" untuk menghapus catatan pengobatan.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan buat _pull request_. Pastikan untuk mengikuti panduan kontribusi yang berlaku.


