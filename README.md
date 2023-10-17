# backend-booking

jangan lupa npm install
kemudian buat file .env
terus kopi dari file .env.dev

menggunakan ORM prisma dengan database mysql dari hosting

apabila hendak menggunakan database dari local maka ganti
DATABASE_URL=mysql://cangkult_booking2:booking12!@cangkulterus.com:3306/cangkult_booking
yang ada di env dengan database yang kalian buat
contoh anda memiliki database dengan nama test_api dengan user access database test_aja, password test123 dan port 3306,DATABASE_URL maka akan berubah menjadi:
DATABASE_URL=mysql://test_aja:test123@localhost:3306/test_api
apabila menggunakan postgresql anda harus merubah provider yang ada di file schema.prisma menjadi postgres dan DATABASE_URL akan menjadi
DATABASE_URL=postgresql://test_aja:test123@localhost:5432/test_api

karena anda menggunakan databse dari local maka anda harus melakukan npx prisma db push untuk otomatis membuat table di database berdasarkan model yang ada di file schema.prisma

kemudian untuk menjalankan npm run dev

ada dua end point
/login
/users (perlu akses token jwt dari login)
/create-user (tidak perlu akses jwt dari login)

/login di gunakan untuk login dengan field yang di post:
example
{
"emailUser": "hilmi@nahira.com",
"passwordUser": "Hilmi123!@#"
}

/create-user hanya menggunakan method post untuk create data user baru dengan field name yang di post:
example
{
"nameUser": "Hilmi",
"emailUser": "hilmii@nahira.com",
"passwordUser": "Hilmi123!@#",
"tlpUser": "081514566915",
"addressUser": "Tangerang - Indonesia",
"levelUser": 1,
"statusUser": 1,
"fotoUser": "hilmi.png"
}

end point /user dapat di akses dengan melakukan login ketika login berhasil akan mendapatkan token yang dapat di gunakan di header untuk authorization

/users dengan method get untuk menampilkan list semua data users
/users dengan method post untuk create data user baru dengan field yang di post:
example
{
"nameUser": "Hilmi",
"emailUser": "hilmi@nahira.com",
"passwordUser": "Hilmi123!@#",
"tlpUser": "081514566915",
"addressUser": "Tangerang - Indonesia",
"levelUser": 1,
"statusUser": 1,
"fotoUser": "hilmi.png"
}

/users/:id dengan method get untuk menampilkan data user berdasarkan parameter idUser
/users/:id dengan method delete untuk delete data user berdasarkan parameter idUser
/users/:id dengan method put/patch untuk update data user berdasarkan parameter idUser dengan field yang di post:
{
"nameUser": "Hilmi",
"emailUser": "hilmi@nahira.com",
"passwordUser": "Hilmi123!@#",
"tlpUser": "081514566915",
"addressUser": "Tangerang - Indonesia",
"levelUser": 1,
"statusUser": 1,
"fotoUser": "hilmi.png"
}

catatan fotoUser masih berupa path jadi belum bisa upload foto
kemudian di karenakan levelUser dan statusUser adalah foreign key maka di harap untuk membuat data di table status dan level untuk menguji create user
