# Edvora

### **README untuk Frontend (`client/README.md`)**
```markdown
# Frontend (React + Vite)

Frontend dari aplikasi ini dibuat menggunakan **React** dan **Vite** sebagai build tool untuk performa cepat dan pengembangan yang mudah.

## 🛠️ Fitur
- **React Router** untuk navigasi halaman.
- API terintegrasi dengan backend menggunakan `fetch` atau `axios`.
- **Vite** untuk live reload dan optimasi build.

---

## 🚀 Cara Menjalankan
1. Pastikan Anda telah menginstal **Node.js** (minimal versi 14.0).
2. Masuk ke folder `client`:
   ```bash
   cd client
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server development:
   ```bash
   npm run dev
   ```
5. Buka aplikasi di browser melalui URL:
   ```
   http://localhost:5173
   ```

---

## 📁 Struktur Folder
```plaintext
client/
├── public/           # File statis (favicon, dll.)
├── src/              # Kode utama React
│   ├── components/   # Komponen reusable
│   ├── pages/        # Halaman aplikasi
│   ├── App.jsx       # Komponen utama aplikasi
│   └── main.jsx      # Entry point aplikasi
├── index.html        # Template HTML
└── vite.config.js    # Konfigurasi Vite
```

---

## 🔧 Skrip NPM
- `npm run dev`: Menjalankan server development.
- `npm run build`: Build aplikasi untuk produksi.
- `npm run preview`: Melihat hasil build lokal.

---

## 📦 Dependensi Utama
- **react**: Library untuk membangun UI.
- **react-router-dom**: Library untuk routing halaman.
- **axios** (opsional): Library untuk HTTP requests.
```

---

### **README untuk Backend (`server/README.md`)**
```markdown
# Backend (Node.js + Express + MongoDB)

Backend dari aplikasi ini dibuat menggunakan **Node.js** dengan framework **Express** dan menggunakan **MongoDB** untuk basis data.

## 🛠️ Fitur
- **Express** untuk membuat API RESTful.
- **MongoDB** untuk penyimpanan data.
- Middleware seperti `cors` dan `dotenv`.

---

## 🚀 Cara Menjalankan
1. Pastikan Anda telah menginstal **Node.js** (minimal versi 14.0).
2. Masuk ke folder `server`:
   ```bash
   cd server
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Buat file `.env` dan tambahkan variabel berikut:
   ```
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```
5. Jalankan server development:
   ```bash
   npm run dev
   ```
6. Backend akan berjalan di:
   ```
   http://localhost:5000
   ```

---

## 📁 Struktur Folder
```plaintext
server/
├── models/           # Schema MongoDB
├── routes/           # API routes
├── server.js         # Entry point server
├── .env              # Environment variables
└── package.json      # Dependensi backend
```

---

## 🔧 Skrip NPM
- `npm run dev`: Menjalankan server development dengan nodemon.
- `npm start`: Menjalankan server produksi.

---

## 📦 Dependensi Utama
- **express**: Framework untuk membuat server HTTP.
- **mongoose**: Library ODM untuk MongoDB.
- **dotenv**: Untuk mengelola variabel lingkungan.
- **cors**: Untuk mengizinkan cross-origin requests.
```
