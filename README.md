# 🦉 English Tenses - Ứng dụng học thì tiếng Anh cho bé

Ứng dụng giúp trẻ em phân biệt thì **Hiện tại** và **Quá khứ** trong tiếng Anh.

## 🚀 Hướng dẫn đưa lên online (Miễn phí)

### Bước 1: Tạo tài khoản
1. Vào https://github.com → Đăng ký tài khoản (Sign up)
2. Vào https://vercel.com → Đăng ký bằng tài khoản GitHub

### Bước 2: Upload code lên GitHub
1. Đăng nhập GitHub
2. Nhấn nút **"+"** góc trên bên phải → **"New repository"**
3. Đặt tên: `english-tenses-app`
4. Nhấn **"Create repository"**
5. Kéo thả toàn bộ thư mục này vào trang GitHub

### Bước 3: Deploy lên Vercel
1. Đăng nhập Vercel
2. Nhấn **"Add New..."** → **"Project"**
3. Chọn repository `english-tenses-app`
4. Nhấn **"Deploy"**
5. Đợi 2-3 phút, bạn sẽ có link dạng: `https://english-tenses-app.vercel.app`

## 📝 Cách thêm câu hỏi mới

Mở file `data/questions.js` và thêm câu hỏi theo hướng dẫn bên trong.

### Thêm câu trắc nghiệm:
```javascript
{
  question: 'She ___ to school yesterday.',
  options: ['go', 'went', 'goes'],
  correct: 1,  // 0 = đáp án 1, 1 = đáp án 2, 2 = đáp án 3
  explanation: '"Yesterday" = hôm qua → quá khứ "went"'
}
```

### Thêm câu điền từ:
```javascript
{
  sentence: 'They ___ (play) football last week.',
  answer: 'played',
  hint: '"Last week" = tuần trước!'
}
```

### Thêm câu đúng/sai:
```javascript
{
  statement: '"Always" dùng với thì hiện tại',
  correct: true,
  explanation: 'Đúng! "Always" = luôn luôn → hiện tại'
}
```

## 🔄 Cách cập nhật nội dung

1. Sửa file `data/questions.js` trên GitHub
2. Vercel tự động cập nhật trong 1-2 phút

## 📱 Bé truy cập

Chia sẻ link Vercel cho bé:
- Mở trình duyệt (Chrome, Safari...)
- Nhập link: `https://[tên-app-của-bạn].vercel.app`
- Có thể thêm vào màn hình chính như app!

---

Chúc bé học vui! 🎉
