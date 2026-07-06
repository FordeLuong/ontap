# Lộ Trình Ôn Luyện 4 Tuần (28 Ngày)

Ứng dụng web tương tác theo dõi tiến độ lộ trình học tập và ôn luyện phỏng vấn 4 tuần chuyên sâu về Python, xử lý dữ liệu, Machine Learning, Deep Learning, NLP, Hugging Face, Prompt Engineering, FastAPI, MySQL và React.

Giao diện được thiết kế tối giản, trực quan, hỗ trợ chế độ tối (Dark mode) cao cấp và lưu trữ tiến độ tự động trên trình duyệt.

## 🚀 Tính năng nổi bật
- **Theo dõi tiến độ tổng thể:** Thanh tiến trình trực quan hiển thị tỉ lệ hoàn thành công việc theo phần trăm.
- **Tiến độ từng tuần:** Mỗi tuần học hiển thị số lượng nhiệm vụ đã hoàn thành kèm thanh tiến độ mini.
- **Tự động lưu trữ:** Sử dụng `localStorage` của trình duyệt để lưu lại những việc đã tích chọn.
- **Responsive Web Design:** Tối ưu hóa trải nghiệm mượt mà trên cả máy tính và điện thoại.
- **Đặt lại tiến độ:** Nút reset giúp bắt đầu lại lộ trình bất cứ lúc nào.

## 🛠️ Chạy ứng dụng dưới local

Dự án này sử dụng [Vite](https://vite.dev/) để chạy môi trường phát triển nhanh chóng và tối ưu dung lượng tải trang.

### Yêu cầu hệ thống
- Đã cài đặt [Node.js](https://nodejs.org/) (khuyên dùng phiên bản LTS).

### Các bước thực hiện:
1. Mở terminal tại thư mục dự án.
2. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
3. Khởi động máy chủ dev:
   ```bash
   npm run dev
   ```
4. Truy cập địa chỉ `http://localhost:5173` (hoặc cổng được hiển thị trong terminal) để xem ứng dụng.

---

## ⚡ Triển khai lên Vercel (Deployment)

Bạn có thể dễ dàng deploy dự án này lên Vercel theo 2 cách dưới đây:

### Cách 1: Triển khai trực tiếp qua GitHub/GitLab/Bitbucket (Khuyên dùng)
1. Đẩy mã nguồn của bạn lên một repository mới trên GitHub (hoặc GitLab/Bitbucket).
2. Truy cập vào trang quản trị [Vercel](https://vercel.com/) và đăng nhập.
3. Nhấp vào nút **"Add New"** -> **"Project"**.
4. Chọn repository chứa mã nguồn của bạn.
5. Vercel sẽ tự động phát hiện cấu hình và framework (Vite). Bạn chỉ cần nhấp **"Deploy"**.
6. Sau khoảng vài giây, trang web của bạn sẽ được deploy và có URL trực tiếp.

### Cách 2: Triển khai bằng Vercel CLI (Nhanh chóng)
Nếu chưa cài đặt Vercel CLI, hãy cài đặt bằng lệnh:
```bash
npm install -g vercel
```

Sau đó chạy lệnh sau tại thư mục gốc của dự án để triển khai:
```bash
vercel
```
Làm theo các bước hướng dẫn trên màn hình (đăng nhập, xác nhận deploy). Khi deploy hoàn tất, chạy tiếp lệnh sau để deploy lên production:
```bash
vercel --prod
```
