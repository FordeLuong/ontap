export const W4 = {
  id: 'w4', tag: 'W4', title: 'Tuần 4', subtitle: 'FastAPI/MySQL/React + Project tổng hợp + Mock Interview', days: [
    { dow: 'Thứ 2', theme: 'FastAPI cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Routing & Pydantic', subs: [
        'Tạo project FastAPI, chạy uvicorn',
        'Viết GET/POST route đơn giản',
        'Tạo Pydantic model cho request/response',
        'Tìm hiểu async def vs def'
      ]},
      { time: 'Chiều · 3h', title: 'API mock đầu tiên', subs: [
        'Viết POST endpoint nhận JSON input',
        'Trả về response mock (chưa cần model)',
        'Test bằng Swagger UI (docs tự sinh)',
        'Test bằng curl hoặc Postman'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Note: FastAPI vs Flask khác gì',
        'Note: async, validation, docs tự sinh',
        'Xem lại code hôm nay'
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'Tích hợp Model vào API', blocks: [
      { time: 'Sáng · 3h', title: 'Load model vào FastAPI', subs: [
        'Load model ML hoặc HF đã train',
        'Viết endpoint /predict nhận input',
        'Xử lý input → model inference → output',
        'Return kết quả dưới dạng JSON'
      ]},
      { time: 'Chiều · 3h', title: 'Test & xử lý lỗi', subs: [
        'Test endpoint bằng Postman/curl',
        'Thêm try/except xử lý lỗi',
        'Dùng HTTPException trả error code',
        'Validate input với Pydantic'
      ]},
      { time: 'Tối · 1h', title: 'Note deploy', subs: [
        'Note: chạy uvicorn production',
        'Note: Docker basics (Dockerfile)',
        'Xem lại code hôm nay'
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'MySQL ôn tập', blocks: [
      { time: 'Sáng · 3h', title: 'SQL cơ bản → trung bình', subs: [
        'Ôn SELECT, WHERE, ORDER BY, LIMIT',
        'Ôn JOIN: INNER, LEFT, RIGHT',
        'Thực hành subquery',
        'Thực hành GROUP BY, HAVING'
      ]},
      { time: 'Chiều · 3h', title: 'SQL nâng cao', subs: [
        'Tìm hiểu INDEX: vì sao cần, cách hoạt động',
        'Tìm hiểu Transaction và ACID',
        'Ôn normalization: 1NF, 2NF, 3NF',
        'Ghi note tóm tắt từng khái niệm'
      ]},
      { time: 'Tối · 1h', title: 'Luyện đề', subs: [
        'Giải 5 bài SQL Easy (LeetCode/HackerRank)',
        'Giải 5 bài SQL Medium',
        'Giải thêm 5 bài nếu còn thời gian'
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Kết nối MySQL với FastAPI', blocks: [
      { time: 'Sáng · 3h', title: 'ORM & kết nối DB', subs: [
        'Cài SQLAlchemy hoặc mysql-connector',
        'Tạo kết nối tới MySQL database',
        'Định nghĩa model/schema bằng ORM',
        'Test kết nối: tạo bảng, insert dữ liệu'
      ]},
      { time: 'Chiều · 3h', title: 'CRUD API', subs: [
        'Viết API Create (POST) lưu data vào DB',
        'Viết API Read (GET) đọc data từ DB',
        'Lưu log prediction vào MySQL',
        'Test toàn bộ CRUD flow'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Note: ORM là gì, lợi ích gì',
        'Note: ORM vs raw SQL khi nào dùng',
        'Xem lại code hôm nay'
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'React cơ bản', blocks: [
      { time: 'Sáng · 2.5h', title: 'Component & State', subs: [
        'Tạo project React (Vite)',
        'Viết 2-3 component đơn giản',
        'Thực hành useState hook',
        'Thực hành props truyền data',
        'Thực hành useEffect cơ bản'
      ]},
      { time: 'Chiều · 3h', title: 'Form gọi API', subs: [
        'Tạo form input + button submit',
        'Dùng fetch() gọi API FastAPI',
        'Hiển thị kết quả trả về trên UI',
        'Xử lý loading state và error state'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Note: controlled vs uncontrolled component',
        'Note: khi nào dùng loại nào',
        'Xem lại code hôm nay'
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'Ráp Project tổng hợp', blocks: [
      { time: 'Sáng · 3h', title: 'Ráp full stack', subs: [
        'Kết nối React frontend → FastAPI backend',
        'Tích hợp model NLP/LLM vào backend',
        'Kết nối backend → MySQL lưu log',
        'Kiểm tra luồng end-to-end'
      ]},
      { time: 'Chiều · 3h', title: 'Test end-to-end', subs: [
        'Test input từ UI → API → Model → DB',
        'Sửa lỗi CORS nếu có',
        'Sửa các bug phát sinh',
        'Test edge cases (input rỗng, quá dài...)'
      ]},
      { time: 'Tối · 1h', title: 'Viết README', subs: [
        'Mô tả project: mục tiêu, tech stack',
        'Hướng dẫn cài đặt và chạy',
        'Screenshot demo (nếu có)'
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Tổng ôn tập + Mock Interview', blocks: [
      { time: 'Sáng · 2h', title: 'Tổng ôn 4 tuần', subs: [
        'Xem lại toàn bộ flashcard 4 tuần',
        'Liệt kê các điểm còn yếu',
        'Ôn lại phần yếu nhất'
      ]},
      { time: 'Chiều · 3h', title: 'Mock interview', subs: [
        'Trả lời 5 câu Python/Data',
        'Trả lời 5 câu ML/DL',
        'Trả lời 5 câu NLP/LLM',
        'Trả lời 5 câu System Design cơ bản'
      ]},
      { time: 'Tối · 1h', title: 'Chuẩn bị cuối cùng', subs: [
        'Chuẩn bị câu chuyện kể về project',
        'Ôn lại CV, highlight điểm mạnh',
        'Chuẩn bị câu hỏi hỏi ngược nhà tuyển dụng'
      ]},
    ]},
  ]
};
