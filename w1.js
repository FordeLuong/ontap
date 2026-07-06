export const W1 = {
  id: 'w1', tag: 'W1', title: 'Tuần 1', subtitle: 'Python Core + Xử lý dữ liệu (Pandas, NumPy)', days: [
    { dow: 'Thứ 2', theme: 'Python Core Refresher', blocks: [
      { time: 'Sáng · 3h', title: 'Cú pháp Python nâng cao', subs: [
        { t: 'Viết 3 ví dụ list/dict/set comprehension từ code for-loop có sẵn', link: 'https://realpython.com/list-comprehension-python/' },
        { t: 'Viết 1 generator function dùng yield, giải thích khác gì return', link: 'https://realpython.com/introduction-to-python-generators/' },
        { t: 'Viết 1 decorator đo thời gian chạy hàm (@timer)', link: 'https://realpython.com/primer-on-python-decorators/' },
        { t: 'Viết context manager riêng bằng class (__enter__/__exit__)', link: 'https://realpython.com/python-with-statement/' },
      ]},
      { time: 'Chiều · 3h', title: 'Luyện tập nhỏ', subs: [
        { t: 'Giải 5 bài LeetCode Easy dùng list/dict comprehension thay loop', link: 'https://leetcode.com/problemset/?difficulty=EASY&topicSlugs=array' },
        { t: 'Giải 5 bài áp dụng generator (lazy evaluation)', link: 'https://leetcode.com/problemset/?difficulty=EASY' },
        { t: 'Viết 3 decorator thực tế: @timer, @logger, @retry' },
        { t: 'Ghi note tóm tắt: khi nào dùng comprehension vs map/filter' },
      ]},
      { time: 'Tối · 1h', title: 'Flashcard OOP', subs: [
        { t: 'Flashcard: staticmethod vs classmethod — viết ví dụ cho mỗi loại', link: 'https://realpython.com/instance-class-and-static-methods-demystified/' },
        { t: 'Flashcard: __init__ vs __new__ — khi nào cần override __new__' },
        { t: 'Flashcard: single vs multiple inheritance, super() hoạt động thế nào' },
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'OOP nâng cao + bắt đầu NumPy', blocks: [
      { time: 'Sáng · 3h', title: 'Magic methods & MRO', subs: [
        { t: 'Implement __str__ và __repr__ cho class Product, test print()', link: 'https://realpython.com/python-magic-methods/' },
        { t: 'Implement __eq__, __lt__, __hash__ để so sánh 2 objects' },
        { t: 'Viết ví dụ diamond inheritance, kiểm tra MRO bằng .mro()', link: 'https://realpython.com/python-super/' },
        { t: 'Ghi note: khi nào nên dùng composition thay vì inheritance' },
      ]},
      { time: 'Chiều · 3h', title: 'NumPy cơ bản', subs: [
        { t: 'Tạo array bằng np.array, zeros, ones, arange, linspace', link: 'https://numpy.org/doc/stable/user/quickstart.html' },
        { t: 'Thực hành dtype, shape, ndim, size — convert dtype giữa int/float' },
        { t: 'Thực hành reshape, transpose, flatten — giải thích sự khác nhau' },
        { t: 'Viết 2 ví dụ broadcasting: (3,1) + (1,4) và scalar + matrix' },
      ]},
      { time: 'Tối · 1h', title: '10 bài NumPy', subs: [
        { t: 'Làm bài 1-10 từ "100 numpy exercises" trên GitHub', link: 'https://github.com/rougier/numpy-100' },
        { t: 'Ghi note các pattern hay gặp (boolean mask, where, argmax)' },
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'NumPy nâng cao', blocks: [
      { time: 'Sáng · 3h', title: 'Indexing nâng cao', subs: [
        { t: 'Thực hành boolean mask: lọc phần tử > threshold từ 2D array' },
        { t: 'Thực hành fancy indexing: chọn rows/cols bằng integer array' },
        { t: 'Viết 3 ví dụ np.where() và np.select() thay thế if-else loop', link: 'https://numpy.org/doc/stable/reference/generated/numpy.where.html' },
        { t: 'So sánh tốc độ: vectorized vs for-loop trên array 1 triệu phần tử' },
      ]},
      { time: 'Chiều · 3h', title: 'Benchmark tốc độ', subs: [
        { t: 'Viết lại 3 đoạn for-loop thành vectorized NumPy' },
        { t: 'Dùng %%timeit hoặc time.perf_counter() đo thời gian' },
        { t: 'Viết bảng so sánh tốc độ loop vs vectorized (markdown/excel)' },
        { t: 'Làm bài 11-25 từ "100 numpy exercises"', link: 'https://github.com/rougier/numpy-100' },
      ]},
      { time: 'Tối · 1h', title: 'Note tổng hợp', subs: [
        { t: 'Ghi note: khi nào dùng NumPy vs pure Python list' },
        { t: 'Ghi note: top 20 hàm NumPy hay dùng nhất (cheat sheet)' },
        { t: 'Xem lại flashcard 2 ngày trước, đánh dấu cái chưa nhớ' },
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Pandas cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Series & DataFrame', subs: [
        { t: 'Tạo Series và DataFrame từ dict, list, và numpy array', link: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html' },
        { t: 'Đọc CSV bằng pd.read_csv(), ghi ra bằng to_csv()' },
        { t: 'Thực hành filtering: boolean indexing, query() method' },
        { t: 'Thực hành selecting: loc (label-based) vs iloc (integer-based)' },
      ]},
      { time: 'Chiều · 3h', title: 'Dataset thật', subs: [
        { t: 'Tải 1 dataset từ Kaggle (Titanic hoặc tương tự)', link: 'https://www.kaggle.com/datasets' },
        { t: 'Khám phá: info(), describe(), shape, dtypes, head()' },
        { t: 'Xử lý missing: isnull().sum(), fillna(), dropna()' },
        { t: 'Ghi note: chiến lược xử lý missing data từng loại cột' },
      ]},
      { time: 'Tối · 1h', title: 'Flashcard Pandas', subs: [
        { t: 'Flashcard: loc vs iloc — viết 3 ví dụ cho mỗi cái' },
        { t: 'Flashcard: copy() vs view — khi nào dùng .copy()' },
        { t: 'Flashcard: SettingWithCopyWarning là gì, cách tránh', link: 'https://pandas.pydata.org/docs/user_guide/indexing.html#returning-a-view-versus-a-copy' },
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'Pandas nâng cao: GroupBy & Merge', blocks: [
      { time: 'Sáng · 3h', title: 'GroupBy & Pivot', subs: [
        { t: 'Thực hành groupby + agg (sum, mean, count, custom func)', link: 'https://pandas.pydata.org/docs/user_guide/groupby.html' },
        { t: 'Viết 1 custom aggregate function dùng với agg()' },
        { t: 'Tạo pivot_table từ dataset thật (index, columns, values)' },
        { t: 'So sánh pivot_table vs crosstab — khi nào dùng cái nào' },
      ]},
      { time: 'Chiều · 3h', title: 'Merge/Join thực hành', subs: [
        { t: 'Merge 2 DataFrame: inner, left, right, outer — vẽ Venn diagram', link: 'https://pandas.pydata.org/docs/user_guide/merging.html' },
        { t: 'Bài tập: tổng hợp doanh thu theo vùng từ 2 bảng (orders + regions)' },
        { t: 'Thực hành concat theo axis=0 (stack rows) và axis=1 (stack cols)' },
        { t: 'Ghi note kết quả phân tích, export ra CSV' },
      ]},
      { time: 'Tối · 1h', title: 'Note phân biệt', subs: [
        { t: 'Note: merge vs concat vs join — bảng so sánh 3 cột' },
        { t: 'Viết 1 ví dụ minh hoạ cho từng cái trên cùng data' },
        { t: 'Xem lại flashcard Pandas từ hôm qua' },
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'Performance + Apply vs Vectorize', blocks: [
      { time: 'Sáng · 3h', title: 'apply() vs vectorize', subs: [
        { t: 'Đọc bài giải thích tại sao apply() chậm (row-wise iteration)', link: 'https://realpython.com/pandas-iterate-over-rows/' },
        { t: 'Viết 3 ví dụ thay apply() bằng vectorized ops (np.where, str accessor)' },
        { t: 'Tìm hiểu khi nào BẮT BUỘC phải dùng apply (complex logic)' },
        { t: 'Benchmark: apply vs vectorized trên DataFrame 100K rows' },
      ]},
      { time: 'Chiều · 3h', title: 'Data cleaning end-to-end', subs: [
        { t: 'Tải 1 dataset "dirty" từ Kaggle (có missing, duplicate, outlier)', link: 'https://www.kaggle.com/datasets' },
        { t: 'Xử lý duplicate: duplicated(), drop_duplicates()' },
        { t: 'Sửa sai kiểu dữ liệu: pd.to_numeric(), pd.to_datetime()' },
        { t: 'Phát hiện outlier bằng IQR method, quyết định giữ/xoá/clip' },
        { t: 'Lưu kết quả sạch ra file mới, viết summary xử lý' },
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 1', subs: [
        { t: 'Xem lại toàn bộ flashcard Python + NumPy + Pandas' },
        { t: 'Đánh dấu những cái còn chưa chắc, ghi lại để ôn thêm' },
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        { t: 'Tự hỏi + trả lời: "Tại sao Pandas apply chậm?"' },
        { t: 'Tự hỏi + trả lời: "Broadcasting trong NumPy hoạt động thế nào?"' },
        { t: 'Tự hỏi + trả lời: "loc vs iloc khác gì? SettingWithCopyWarning?"' },
        { t: 'Ghi lại câu trả lời ngắn gọn như đang nói cho interviewer' },
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 1', subs: [
        { t: 'Chọn 1 dataset thật trên Kaggle (>10K rows)', link: 'https://www.kaggle.com/datasets' },
        { t: 'EDA: load → info → describe → visualize distributions' },
        { t: 'Clean: xử lý missing, duplicate, outlier, sai dtype' },
        { t: 'Transform: groupby tổng hợp, merge nếu có nhiều bảng' },
        { t: 'Viết summary/report kết quả phân tích (notebook hoặc markdown)' },
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        { t: 'Xem lại note tuần 1, đánh dấu phần yếu' },
        { t: 'Thư giãn, chuẩn bị tinh thần cho tuần ML/DL' },
      ]},
    ]},
  ]
};
