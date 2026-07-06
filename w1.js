export const W1 = {
  id: 'w1', tag: 'W1', title: 'Tuần 1', subtitle: 'Python Core + Xử lý dữ liệu (Pandas, NumPy)', days: [
    { dow: 'Thứ 2', theme: 'Python Core Refresher', blocks: [
      { time: 'Sáng · 3h', title: 'Cú pháp Python nâng cao', subs: [
        'Ôn list/dict/set comprehension + viết ví dụ',
        'Viết generator function, so sánh với iterator',
        'Viết 2 decorator đơn giản (@timer, @logger)',
        'Thực hành context manager (with), tự viết 1 cái',
        'Ghi note tổng hợp các khái niệm'
      ]},
      { time: 'Chiều · 3h', title: 'Luyện tập nhỏ', subs: [
        'Giải 5 bài comprehension (LeetCode Easy)',
        'Giải 5 bài generator/iterator',
        'Giải 5 bài decorator'
      ]},
      { time: 'Tối · 1h', title: 'Flashcard OOP', subs: [
        'Flashcard: staticmethod vs classmethod',
        'Flashcard: __init__ vs __new__',
        'Flashcard: single vs multiple inheritance'
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'OOP nâng cao + bắt đầu NumPy', blocks: [
      { time: 'Sáng · 3h', title: 'Magic methods & MRO', subs: [
        'Implement __str__, __repr__ cho 1 class',
        'Implement __eq__, __lt__ để so sánh objects',
        'Viết ví dụ multiple inheritance',
        'Kiểm tra MRO bằng ClassName.mro()'
      ]},
      { time: 'Chiều · 3h', title: 'NumPy cơ bản', subs: [
        'Tạo array: np.zeros, np.ones, np.arange, np.linspace',
        'Tìm hiểu dtype, shape, ndim, size',
        'Thực hành reshape, transpose, flatten',
        'Viết 2 ví dụ broadcasting'
      ]},
      { time: 'Tối · 1h', title: '10 bài NumPy', subs: [
        'Làm 5 bài đầu "100 numpy exercises"',
        'Làm 5 bài tiếp theo',
        'Ghi note các pattern hay gặp'
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'NumPy nâng cao', blocks: [
      { time: 'Sáng · 3h', title: 'Indexing nâng cao', subs: [
        'Thực hành boolean mask filtering',
        'Thực hành fancy indexing (integer array)',
        'So sánh vectorized ops vs for-loop',
        'Viết 3 ví dụ np.where, np.select'
      ]},
      { time: 'Chiều · 3h', title: 'Benchmark tốc độ', subs: [
        'Viết lại 3 đoạn for-loop thành vectorized',
        'Viết lại 2 đoạn nữa (phức tạp hơn)',
        'Dùng %%timeit so sánh thời gian',
        'Ghi note kết quả benchmark'
      ]},
      { time: 'Tối · 1h', title: 'Note tổng hợp', subs: [
        'Ghi note: khi nào dùng NumPy vs list',
        'Ghi note: các hàm NumPy hay dùng nhất',
        'Xem lại flashcard 2 ngày trước'
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Pandas cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Series & DataFrame', subs: [
        'Tạo Series, DataFrame từ dict/list',
        'Đọc/ghi CSV, Excel với pd.read_csv/to_csv',
        'Filtering: boolean indexing trên DataFrame',
        'Selecting với loc (label) và iloc (index)'
      ]},
      { time: 'Chiều · 3h', title: 'Dataset thật', subs: [
        'Tải 1 dataset từ Kaggle',
        'Xem info(), describe(), shape, dtypes',
        'Xử lý missing: isnull(), fillna(), dropna()',
        'Ghi note cách xử lý từng loại missing data'
      ]},
      { time: 'Tối · 1h', title: 'Flashcard', subs: [
        'Flashcard: loc vs iloc khác gì',
        'Flashcard: copy() vs view',
        'Flashcard: SettingWithCopyWarning là gì, cách tránh'
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'Pandas nâng cao: GroupBy & Merge', blocks: [
      { time: 'Sáng · 3h', title: 'GroupBy & Pivot', subs: [
        'Thực hành groupby + agg (sum, mean, count)',
        'Viết custom aggregate function',
        'Tạo pivot_table từ dataset thật',
        'So sánh pivot_table vs crosstab'
      ]},
      { time: 'Chiều · 3h', title: 'Merge/Join thực hành', subs: [
        'Merge 2 DataFrame: inner join',
        'Merge: left, right, outer join',
        'Bài tập: tổng hợp dữ liệu theo nhóm từ 2 bảng',
        'Ghi note kết quả phân tích'
      ]},
      { time: 'Tối · 1h', title: 'Note phân biệt', subs: [
        'Note: merge vs concat khác gì',
        'Note: merge vs join khác gì',
        'Viết ví dụ minh hoạ cho từng cái'
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'Performance + Apply vs Vectorize', blocks: [
      { time: 'Sáng · 3h', title: 'apply() vs vectorize', subs: [
        'Tìm hiểu tại sao apply() chậm',
        'Viết 3 ví dụ thay apply bằng vectorized ops',
        'Tìm hiểu khi nào BẮT BUỘC phải dùng apply',
        'Benchmark apply vs vectorized (%%timeit)'
      ]},
      { time: 'Chiều · 3h', title: 'Data cleaning end-to-end', subs: [
        'Tải dataset lộn xộn từ Kaggle',
        'Xử lý duplicate rows',
        'Sửa sai kiểu dữ liệu (to_numeric, to_datetime)',
        'Phát hiện và xử lý outlier (IQR/Z-score)',
        'Lưu kết quả sạch ra file mới'
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 1', subs: [
        'Xem lại toàn bộ flashcard đã ghi',
        'Đánh dấu những cái còn chưa chắc',
        'Viết lại note cho phần yếu'
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        'Tự hỏi: "Tại sao apply chậm?"',
        'Tự hỏi: "Broadcasting hoạt động thế nào?"',
        'Tự hỏi: "loc vs iloc?"',
        'Ghi lại câu trả lời ngắn gọn'
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 1', subs: [
        'Chọn dataset thật (Kaggle)',
        'Load và khám phá dữ liệu (EDA)',
        'Clean: missing, duplicate, outlier',
        'Transform: groupby, merge, tạo features mới',
        'Viết summary/report kết quả'
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        'Xem lại note tuần 1',
        'Thư giãn, chuẩn bị cho tuần 2'
      ]},
    ]},
  ]
};
