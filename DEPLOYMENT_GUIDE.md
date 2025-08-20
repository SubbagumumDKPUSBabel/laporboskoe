# 🚀 Panduan Deploy Aplikasi ke GitHub Pages

## 📋 **Langkah-langkah Deploy**

### **1. Persiapan Awal**
- Pastikan Anda memiliki akun GitHub
- Pastikan semua file aplikasi sudah lengkap:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `README.md`

### **2. Buat Repository GitHub**

1. **Buka [github.com](https://github.com)** dan login
2. **Klik tombol "+"** di pojok kanan atas
3. **Pilih "New repository"**
4. **Isi form repository**:
   - Repository name: `username.github.io` (ganti `username` dengan username GitHub Anda)
   - Description: "Aplikasi Lapor Ketidakhadiran Secara Mandiri"
   - Public: ✅ (harus public untuk GitHub Pages)
   - Add README: ❌ (sudah ada)
5. **Klik "Create repository"**

### **3. Upload File Aplikasi**

#### **Cara 1: Upload Manual (Mudah)**
1. **Klik "uploading an existing file"**
2. **Drag & drop semua file** aplikasi ke area upload
3. **Tambahkan commit message**: "Initial commit - Aplikasi Ketidakhadiran"
4. **Klik "Commit changes"**

#### **Cara 2: Git Command (Lebih Profesional)**
```bash
# Clone repository
git clone https://github.com/username/username.github.io.git

# Masuk ke folder
cd username.github.io

# Copy semua file aplikasi ke folder ini

# Add dan commit
git add .
git commit -m "Initial commit - Aplikasi Ketidakhadiran"

# Push ke GitHub
git push origin main
```

### **4. Aktifkan GitHub Pages**

1. **Buka repository** yang baru dibuat
2. **Klik tab "Settings"**
3. **Scroll ke bawah**, cari "Pages"
4. **Di "Source"**, pilih "Deploy from a branch"
5. **Di "Branch"**, pilih "main" dan folder "/ (root)"
6. **Klik "Save"**

### **5. Tunggu Deployment**

- GitHub akan memproses deployment
- Biasanya memakan waktu 2-5 menit
- Status akan berubah dari "Building" menjadi "Your site is live at..."

### **6. Akses Aplikasi**

- **URL aplikasi**: `https://username.github.io`
- **Ganti `username`** dengan username GitHub Anda
- **Aplikasi sudah bisa diakses** oleh semua orang di internet!

## 🔄 **Update Aplikasi**

### **Setiap kali ada perubahan:**
1. **Upload file baru** ke repository
2. **Commit changes**
3. **GitHub Pages akan update otomatis** dalam 1-2 menit

## 🌐 **Custom Domain (Opsional)**

### **Jika ingin domain sendiri:**
1. **Beli domain** di provider domain (GoDaddy, Niagahoster, dll)
2. **Di GitHub Pages Settings**, tambahkan custom domain
3. **Update DNS** di provider domain
4. **Aplikasi bisa diakses** via domain Anda sendiri

## 📱 **Test Aplikasi**

### **Setelah deploy:**
1. **Buka URL** `https://username.github.io`
2. **Test semua fitur**:
   - Menu collapsible
   - Link Google Forms
   - Link Google Sheets
   - Link WhatsApp
3. **Test di berbagai device** (desktop, mobile, tablet)

## 🚨 **Troubleshooting**

### **Jika aplikasi tidak muncul:**
- **Cek repository name** harus `username.github.io`
- **Pastikan repository public**
- **Tunggu 5-10 menit** untuk deployment
- **Cek tab Actions** untuk status deployment

### **Jika ada error:**
- **Cek console browser** untuk error JavaScript
- **Pastikan semua file** terupload dengan benar
- **Cek path file** di HTML (CSS, JS)

## 🎉 **Keuntungan GitHub Pages**

- ✅ **Gratis selamanya**
- ✅ **URL yang mudah diingat**
- ✅ **Update otomatis**
- ✅ **HTTPS otomatis**
- ✅ **CDN global** (cepat di seluruh dunia)
- ✅ **Integrasi dengan GitHub** (version control)

## 📞 **Bantuan**

Jika ada kendala:
- **GitHub Help**: [help.github.com](https://help.github.com)
- **GitHub Community**: [github.community](https://github.community)
- **Stack Overflow**: Tag `github-pages`

---

**Selamat! Aplikasi Anda sekarang bisa diakses oleh semua orang di internet! 🌍**

