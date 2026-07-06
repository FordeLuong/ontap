export const W4 = {
  id: 'w4', tag: 'W4', title: 'Tuần 4', subtitle: 'FastAPI/MySQL/React + Project tổng hợp + Mock Interview', days: [
    { dow: 'Thứ 2', theme: 'FastAPI cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Routing & Pydantic', subs: [
        { t: 'Tạo project FastAPI, chạy uvicorn --reload', link: 'https://fastapi.tiangolo.com/tutorial/first-steps/' },
        { t: 'Viết 3 GET routes với path parameters và query parameters' },
        { t: 'Tạo Pydantic model cho request body và response', link: 'https://fastapi.tiangolo.com/tutorial/body/' },
        { t: 'Tìm hiểu async def vs def — khi nào cần async' },
      ]},
      { time: 'Chiều · 3h', title: 'API mock đầu tiên', subs: [
        { t: 'Viết POST /predict nhận JSON input, trả mock response' },
        { t: 'Test bằng Swagger UI tự sinh tại /docs', link: 'https://fastapi.tiangolo.com/tutorial/metadata/' },
        { t: 'Test bằng curl hoặc Postman: gửi POST request' },
        { t: 'Thêm response_model để validate output format' },
      ]},
      { time: 'Tối · 1h', title: 'Note FastAPI', subs: [
        { t: 'Note: FastAPI vs Flask — async, type hints, auto docs, validation' },
        { t: 'Note: Pydantic validation tự động → giảm code kiểm tra input' },
        { t: 'Xem lại code hôm nay, refactor nếu cần' },
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'Tích hợp Model vào API', blocks: [
      { time: 'Sáng · 3h', title: 'Load model vào FastAPI', subs: [
        { t: 'Load model ML (sklearn) hoặc HF vào biến global khi startup', link: 'https://fastapi.tiangolo.com/advanced/events/' },
        { t: 'Viết endpoint /predict: nhận text → model inference → return result' },
        { t: 'Xử lý input preprocessing trong endpoint (tokenize, scale...)' },
        { t: 'Return kết quả dưới dạng JSON có label + confidence score' },
      ]},
      { time: 'Chiều · 3h', title: 'Test & xử lý lỗi', subs: [
        { t: 'Test endpoint với nhiều input khác nhau (valid + invalid)' },
        { t: 'Thêm try/except + HTTPException cho error handling', link: 'https://fastapi.tiangolo.com/tutorial/handling-errors/' },
        { t: 'Validate input: kiểm tra empty string, quá dài, sai format' },
        { t: 'Thêm logging để debug khi có lỗi production' },
      ]},
      { time: 'Tối · 1h', title: 'Note deploy', subs: [
        { t: 'Note: chạy production: uvicorn main:app --host 0.0.0.0 --port 8000' },
        { t: 'Note: Dockerfile cơ bản cho FastAPI app', link: 'https://fastapi.tiangolo.com/deployment/docker/' },
        { t: 'Xem lại code hôm nay' },
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'MySQL ôn tập', blocks: [
      { time: 'Sáng · 3h', title: 'SQL cơ bản → trung bình', subs: [
        { t: 'Ôn SELECT, WHERE, ORDER BY, LIMIT, DISTINCT' },
        { t: 'Ôn JOIN: viết query INNER, LEFT, RIGHT trên 2 bảng', link: 'https://www.w3schools.com/sql/sql_join.asp' },
        { t: 'Thực hành subquery: WHERE col IN (SELECT ...), EXISTS' },
        { t: 'Thực hành GROUP BY + HAVING: tổng hợp theo nhóm có điều kiện' },
      ]},
      { time: 'Chiều · 3h', title: 'SQL nâng cao', subs: [
        { t: 'Tìm hiểu INDEX: B-Tree, tại sao query nhanh hơn, khi nào tạo', link: 'https://use-the-index-luke.com/' },
        { t: 'Tìm hiểu Transaction: BEGIN, COMMIT, ROLLBACK + ACID properties' },
        { t: 'Ôn normalization: 1NF (atomic) → 2NF (no partial dep) → 3NF (no transitive dep)' },
        { t: 'Ghi note tóm tắt từng khái niệm + ví dụ minh hoạ' },
      ]},
      { time: 'Tối · 1h', title: 'Luyện đề SQL', subs: [
        { t: 'Giải 5 bài SQL Easy trên LeetCode', link: 'https://leetcode.com/problemset/?topicSlugs=database&difficulty=EASY' },
        { t: 'Giải 5 bài SQL Medium trên LeetCode', link: 'https://leetcode.com/problemset/?topicSlugs=database&difficulty=MEDIUM' },
        { t: 'Giải thêm 5 bài trên HackerRank SQL', link: 'https://www.hackerrank.com/domains/sql' },
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Kết nối MySQL với FastAPI', blocks: [
      { time: 'Sáng · 3h', title: 'ORM & kết nối DB', subs: [
        { t: 'Cài SQLAlchemy + tạo engine kết nối MySQL', link: 'https://docs.sqlalchemy.org/en/20/tutorial/' },
        { t: 'Định nghĩa model bằng declarative_base (class User, Prediction...)' },
        { t: 'Tạo bảng bằng Base.metadata.create_all(engine)' },
        { t: 'Test: insert 5 rows, query lại bằng session.query()' },
      ]},
      { time: 'Chiều · 3h', title: 'CRUD API', subs: [
        { t: 'Viết POST /predictions: lưu input + result vào DB', link: 'https://fastapi.tiangolo.com/tutorial/sql-databases/' },
        { t: 'Viết GET /predictions: đọc lịch sử predictions từ DB' },
        { t: 'Viết GET /predictions/{id}: lấy 1 prediction theo ID' },
        { t: 'Test toàn bộ CRUD flow bằng Swagger UI' },
      ]},
      { time: 'Tối · 1h', title: 'Note ORM', subs: [
        { t: 'Note: ORM (object mapping) vs raw SQL — ưu/nhược từng cách' },
        { t: 'Note: Session lifecycle — khi nào commit, rollback, close' },
        { t: 'Xem lại code hôm nay, refactor nếu cần' },
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'React cơ bản', blocks: [
      { time: 'Sáng · 2.5h', title: 'Component & State', subs: [
        { t: 'Tạo project React bằng Vite: npm create vite@latest', link: 'https://react.dev/learn' },
        { t: 'Viết 2 component: Header và PredictionForm' },
        { t: 'Thực hành useState: quản lý input value và result', link: 'https://react.dev/reference/react/useState' },
        { t: 'Thực hành useEffect: gọi API khi component mount', link: 'https://react.dev/reference/react/useEffect' },
      ]},
      { time: 'Chiều · 3h', title: 'Form gọi API', subs: [
        { t: 'Tạo form: textarea input + button Submit' },
        { t: 'Dùng fetch() gọi POST /predict tới FastAPI backend' },
        { t: 'Hiển thị kết quả prediction trên UI (label + score)' },
        { t: 'Xử lý loading state (spinner) và error state (thông báo lỗi)' },
      ]},
      { time: 'Tối · 1h', title: 'Note React', subs: [
        { t: 'Note: controlled component (value + onChange) vs uncontrolled (ref)' },
        { t: 'Note: khi nào dùng controlled (form validation) vs uncontrolled' },
        { t: 'Xem lại code hôm nay' },
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'Ráp Project tổng hợp', blocks: [
      { time: 'Sáng · 3h', title: 'Ráp full stack', subs: [
        { t: 'Kết nối React → FastAPI: cấu hình CORS middleware', link: 'https://fastapi.tiangolo.com/tutorial/cors/' },
        { t: 'Tích hợp model NLP/ML vào FastAPI /predict endpoint' },
        { t: 'Kết nối FastAPI → MySQL: lưu mỗi prediction vào DB' },
        { t: 'Test luồng end-to-end: UI → API → Model → DB → Response → UI' },
      ]},
      { time: 'Chiều · 3h', title: 'Test end-to-end', subs: [
        { t: 'Test happy path: input hợp lệ → kết quả đúng' },
        { t: 'Test edge cases: input rỗng, quá dài, ký tự đặc biệt' },
        { t: 'Sửa lỗi CORS, timeout, connection refused nếu có' },
        { t: 'Thêm trang /history hiển thị lịch sử predictions từ DB' },
      ]},
      { time: 'Tối · 1h', title: 'Viết README', subs: [
        { t: 'Mô tả project: mục tiêu, tech stack, kiến trúc' },
        { t: 'Viết hướng dẫn cài đặt và chạy (step by step)' },
        { t: 'Chụp screenshot demo, thêm vào README' },
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Tổng ôn tập + Mock Interview', blocks: [
      { time: 'Sáng · 2h', title: 'Tổng ôn 4 tuần', subs: [
        { t: 'Xem lại toàn bộ flashcard 4 tuần (Python, ML, NLP, System)' },
        { t: 'Liệt kê top 5 điểm yếu nhất → ôn tập tập trung' },
        { t: 'Viết 1-2 câu tóm tắt cho mỗi chủ đề lớn (elevator pitch)' },
      ]},
      { time: 'Chiều · 3h', title: 'Mock interview', subs: [
        { t: 'Trả lời 5 câu Python: comprehension, decorator, GIL, memory management' },
        { t: 'Trả lời 5 câu ML: bias-variance, regularization, cross-validation, metrics' },
        { t: 'Trả lời 5 câu NLP: Transformer, BERT vs GPT, tokenization, RAG' },
        { t: 'Trả lời 5 câu System: REST API design, database indexing, caching' },
      ]},
      { time: 'Tối · 1h', title: 'Chuẩn bị cuối cùng', subs: [
        { t: 'Chuẩn bị "câu chuyện project": mô tả 2 phút về project đã làm' },
        { t: 'Ôn lại CV: highlight skills, projects, achievements' },
        { t: 'Chuẩn bị 3-5 câu hỏi hỏi ngược nhà tuyển dụng' },
      ]},
    ]},
  ]
};
