export const W2 = {
  id: 'w2', tag: 'W2', title: 'Tuần 2', subtitle: 'ML/DL nền tảng (scikit-learn, PyTorch)', days: [
    { dow: 'Thứ 2', theme: 'Toán nền tảng ML', blocks: [
      { time: 'Sáng · 3h', title: 'Gradient descent & loss', subs: [
        'Xem video StatQuest: Linear Regression',
        'Xem video StatQuest: Gradient Descent',
        'Ghi note ý nghĩa loss function (MSE, MAE)',
        'Vẽ lại đồ thị gradient descent bằng tay'
      ]},
      { time: 'Chiều · 3h', title: 'Cài Linear Regression từ đầu', subs: [
        'Khởi tạo weights và bias ngẫu nhiên',
        'Viết hàm predict (forward pass)',
        'Viết hàm tính MSE loss',
        'Viết vòng lặp gradient descent update',
        'Test trên dữ liệu đơn giản, plot kết quả'
      ]},
      { time: 'Tối · 1h', title: 'Note bias-variance', subs: [
        'Ghi note: bias-variance tradeoff',
        'Ghi note: overfitting vs underfitting',
        'Vẽ sơ đồ minh hoạ'
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'scikit-learn cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'API cốt lõi', subs: [
        'Tìm hiểu fit/predict/transform pattern',
        'Thực hành train_test_split',
        'Thực hành cross_val_score',
        'Thực hành KFold, StratifiedKFold'
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành classification', subs: [
        'Train Logistic Regression trên Iris/Titanic',
        'Train Random Forest trên cùng dataset',
        'Tính accuracy, precision, recall, F1',
        'So sánh kết quả 2 model, viết nhận xét'
      ]},
      { time: 'Tối · 1h', title: 'Flashcard', subs: [
        'Flashcard: Precision vs Recall',
        'Flashcard: khi nào ưu tiên Precision (spam)',
        'Flashcard: khi nào ưu tiên Recall (y tế)'
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'Pipeline & Regularization', blocks: [
      { time: 'Sáng · 3h', title: 'Pipeline & Preprocessing', subs: [
        'Tạo Pipeline đơn giản (scaler + model)',
        'Dùng ColumnTransformer cho mixed data',
        'So sánh StandardScaler vs MinMaxScaler',
        'Thực hành one-hot encoding với OneHotEncoder'
      ]},
      { time: 'Chiều · 3h', title: 'Regularization & tuning', subs: [
        'So sánh L1 (Lasso) vs L2 (Ridge)',
        'Train model với alpha khác nhau',
        'Dùng GridSearchCV tìm hyperparameter',
        'Dùng RandomizedSearchCV, so sánh tốc độ'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Ghi note: tại sao cần regularization',
        'Ghi note: Elastic Net = L1 + L2',
        'Xem lại flashcard 2 ngày trước'
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Deep Learning nền tảng', blocks: [
      { time: 'Sáng · 3h', title: 'Forward & Backprop', subs: [
        'Vẽ sơ đồ forward pass qua 1 neural network',
        'Hiểu chain rule ở mức khái niệm',
        'So sánh ReLU vs Sigmoid vs Softmax',
        'Ghi note khi nào dùng activation nào'
      ]},
      { time: 'Chiều · 3h', title: 'SGD, Dropout, BatchNorm', subs: [
        'So sánh Batch vs Mini-batch vs SGD',
        'Tìm hiểu Dropout: cách hoạt động',
        'Tìm hiểu BatchNorm: cách hoạt động',
        'Ghi note ưu/nhược của từng kỹ thuật'
      ]},
      { time: 'Tối · 1h', title: 'Flashcard', subs: [
        'Flashcard: vanishing gradient là gì',
        'Flashcard: cách khắc phục (ReLU, ResNet)',
        'Flashcard: BatchNorm giúp gì'
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'PyTorch cơ bản', blocks: [
      { time: 'Sáng · 3h', title: '60-min Blitz', subs: [
        'Tạo Tensor, so sánh với NumPy array',
        'Thực hành tensor operations (reshape, slice)',
        'Tìm hiểu autograd: requires_grad, backward()',
        'Viết ví dụ tính gradient tự động'
      ]},
      { time: 'Chiều · 3h', title: 'Xây MLP từ đầu', subs: [
        'Tải dataset MNIST hoặc tabular',
        'Định nghĩa model bằng nn.Module',
        'Viết training loop: forward → loss → backward → step',
        'Theo dõi loss qua các epoch, plot kết quả'
      ]},
      { time: 'Tối · 1h', title: 'Note cơ chế', subs: [
        'Note: nn.Module hoạt động thế nào',
        'Note: optimizer.step() làm gì',
        'Note: loss.backward() tính gradient thế nào'
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'PyTorch nâng cao', blocks: [
      { time: 'Sáng · 3h', title: 'Dataset/DataLoader custom', subs: [
        'Viết custom Dataset class',
        'Tạo DataLoader với batch_size, shuffle',
        'Chuyển model/data sang GPU (.to(device))',
        'Test training trên GPU (nếu có)'
      ]},
      { time: 'Chiều · 3h', title: 'Transfer learning', subs: [
        'Tải pretrained ResNet/VGG',
        'Freeze layers, thay đổi classifier cuối',
        'Fine-tune trên tập ảnh nhỏ (~100-500 ảnh)',
        'Đánh giá accuracy trên test set'
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 2', subs: [
        'Xem lại toàn bộ flashcard ML/DL',
        'Đánh dấu phần còn yếu',
        'Viết lại note cho phần chưa chắc'
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        'Trả lời 5 câu ML: bias-variance, regularization...',
        'Trả lời 5 câu DL: backprop, vanishing gradient...',
        'Ghi lại câu nào trả lời chưa tốt'
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 2', subs: [
        'Chọn dataset và xác định bài toán',
        'Preprocessing: Pipeline + ColumnTransformer',
        'Train model, tune hyperparameters',
        'Evaluate: metrics + confusion matrix',
        'Viết report giải thích lựa chọn model/metric'
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        'Xem lại note tuần 2',
        'Thư giãn, chuẩn bị cho tuần NLP'
      ]},
    ]},
  ]
};
