export const W2 = {
  id: 'w2', tag: 'W2', title: 'Tuần 2', subtitle: 'ML/DL nền tảng (scikit-learn, PyTorch)', days: [
    { dow: 'Thứ 2', theme: 'Toán nền tảng ML', blocks: [
      { time: 'Sáng · 3h', title: 'Gradient descent & loss', subs: [
        { t: 'Xem video StatQuest: Linear Regression (hiểu RSS, R²)', link: 'https://www.youtube.com/watch?v=PaFPbb66DxQ' },
        { t: 'Xem video StatQuest: Gradient Descent (hiểu learning rate, convergence)', link: 'https://www.youtube.com/watch?v=sDv4f4s2SB8' },
        { t: 'Ghi note ý nghĩa các loss function: MSE, MAE, Cross-Entropy' },
        { t: 'Vẽ lại đồ thị gradient descent bằng tay trên giấy' },
      ]},
      { time: 'Chiều · 3h', title: 'Cài Linear Regression từ đầu', subs: [
        { t: 'Khởi tạo weights, bias ngẫu nhiên bằng NumPy' },
        { t: 'Viết hàm predict (y = Xw + b) và hàm tính MSE loss' },
        { t: 'Viết vòng lặp gradient descent: tính gradient → update weights' },
        { t: 'Test trên data đơn giản, plot loss curve qua các epoch' },
        { t: 'So sánh kết quả với sklearn LinearRegression', link: 'https://scikit-learn.org/stable/modules/linear_model.html' },
      ]},
      { time: 'Tối · 1h', title: 'Note bias-variance', subs: [
        { t: 'Xem video StatQuest: Bias and Variance', link: 'https://www.youtube.com/watch?v=EuBBz3bI-aA' },
        { t: 'Ghi note: bias-variance tradeoff, vẽ sơ đồ minh hoạ' },
        { t: 'Ghi note: overfitting vs underfitting — dấu hiệu nhận biết' },
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'scikit-learn cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'API cốt lõi', subs: [
        { t: 'Đọc Getting Started scikit-learn: fit/predict/transform pattern', link: 'https://scikit-learn.org/stable/getting_started.html' },
        { t: 'Thực hành train_test_split với random_state, test_size' },
        { t: 'Thực hành cross_val_score (5-fold) trên dataset đơn giản' },
        { t: 'Thực hành KFold, StratifiedKFold — khi nào dùng Stratified' },
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành classification', subs: [
        { t: 'Train Logistic Regression trên Titanic/Iris dataset', link: 'https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html' },
        { t: 'Train Random Forest trên cùng dataset', link: 'https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html' },
        { t: 'Tính accuracy, precision, recall, F1 bằng classification_report' },
        { t: 'Vẽ confusion matrix, so sánh 2 model — viết nhận xét' },
      ]},
      { time: 'Tối · 1h', title: 'Flashcard metrics', subs: [
        { t: 'Flashcard: Precision vs Recall — công thức + ý nghĩa' },
        { t: 'Flashcard: khi nào ưu tiên Precision (spam filter)' },
        { t: 'Flashcard: khi nào ưu tiên Recall (chẩn đoán ung thư)' },
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'Pipeline & Regularization', blocks: [
      { time: 'Sáng · 3h', title: 'Pipeline & Preprocessing', subs: [
        { t: 'Tạo Pipeline: StandardScaler → LogisticRegression', link: 'https://scikit-learn.org/stable/modules/compose.html' },
        { t: 'Dùng ColumnTransformer: scaler cho numeric, OneHot cho categorical' },
        { t: 'So sánh StandardScaler vs MinMaxScaler trên cùng data' },
        { t: 'Test Pipeline với cross_val_score — tại sao phải dùng Pipeline' },
      ]},
      { time: 'Chiều · 3h', title: 'Regularization & tuning', subs: [
        { t: 'So sánh L1 (Lasso) vs L2 (Ridge): train với alpha khác nhau', link: 'https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression-and-classification' },
        { t: 'Dùng GridSearchCV tìm best hyperparameters' },
        { t: 'Dùng RandomizedSearchCV, so sánh tốc độ vs GridSearch' },
        { t: 'Ghi note: tại sao regularization giúp chống overfitting' },
      ]},
      { time: 'Tối · 1h', title: 'Note regularization', subs: [
        { t: 'Ghi note: L1 sparse weights, L2 small weights — vẽ hình' },
        { t: 'Ghi note: Elastic Net = α·L1 + (1-α)·L2' },
        { t: 'Xem lại flashcard metrics hôm qua' },
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Deep Learning nền tảng', blocks: [
      { time: 'Sáng · 3h', title: 'Forward & Backprop', subs: [
        { t: 'Xem video 3Blue1Brown: Neural Networks', link: 'https://www.youtube.com/watch?v=aircAruvnKk' },
        { t: 'Vẽ sơ đồ forward pass qua 1 mạng 2 hidden layers' },
        { t: 'Hiểu chain rule backprop ở mức khái niệm (không cần chứng minh)' },
        { t: 'So sánh ReLU vs Sigmoid vs Softmax — khi nào dùng cái nào' },
      ]},
      { time: 'Chiều · 3h', title: 'SGD, Dropout, BatchNorm', subs: [
        { t: 'Ghi note: Batch GD vs Mini-batch GD vs SGD — ưu/nhược', link: 'https://ruder.io/optimizing-gradient-descent/' },
        { t: 'Tìm hiểu Dropout: randomly zero neurons — tại sao chống overfit' },
        { t: 'Tìm hiểu BatchNorm: normalize activations — tại sao train nhanh hơn' },
        { t: 'Ghi note: Adam = Momentum + RMSprop — optimizer hay dùng nhất' },
      ]},
      { time: 'Tối · 1h', title: 'Flashcard DL', subs: [
        { t: 'Flashcard: vanishing gradient là gì — xảy ra khi nào' },
        { t: 'Flashcard: cách khắc phục (ReLU, skip connection, BatchNorm)' },
        { t: 'Flashcard: learning rate quá lớn vs quá nhỏ — dấu hiệu' },
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'PyTorch cơ bản', blocks: [
      { time: 'Sáng · 3h', title: '60-min Blitz', subs: [
        { t: 'Làm theo PyTorch 60-min Blitz tutorial', link: 'https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html' },
        { t: 'Tạo Tensor, so sánh API với NumPy (reshape vs view)' },
        { t: 'Thực hành autograd: requires_grad=True, .backward(), .grad' },
        { t: 'Viết ví dụ tính gradient tự động cho y = x² + 2x' },
      ]},
      { time: 'Chiều · 3h', title: 'Xây MLP từ đầu', subs: [
        { t: 'Tải dataset MNIST bằng torchvision.datasets', link: 'https://pytorch.org/tutorials/beginner/basics/data_tutorial.html' },
        { t: 'Định nghĩa MLP model kế thừa nn.Module (2 hidden layers)' },
        { t: 'Viết training loop: forward → loss → backward → optimizer.step()' },
        { t: 'Theo dõi loss + accuracy qua các epoch, plot learning curve' },
      ]},
      { time: 'Tối · 1h', title: 'Note PyTorch', subs: [
        { t: 'Note: nn.Module lifecycle — __init__ vs forward' },
        { t: 'Note: optimizer.zero_grad() → loss.backward() → optimizer.step()' },
        { t: 'Note: model.train() vs model.eval() — BatchNorm/Dropout behavior' },
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'PyTorch nâng cao', blocks: [
      { time: 'Sáng · 3h', title: 'Dataset/DataLoader custom', subs: [
        { t: 'Viết custom Dataset class: __len__ và __getitem__', link: 'https://pytorch.org/tutorials/beginner/basics/data_tutorial.html' },
        { t: 'Tạo DataLoader với batch_size=32, shuffle=True, num_workers' },
        { t: 'Chuyển model và data sang GPU: .to(device), torch.cuda.is_available()' },
        { t: 'Test training trên GPU so sánh tốc độ với CPU' },
      ]},
      { time: 'Chiều · 3h', title: 'Transfer learning', subs: [
        { t: 'Tải pretrained ResNet18 từ torchvision.models', link: 'https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html' },
        { t: 'Freeze toàn bộ layers trừ classifier cuối (requires_grad=False)' },
        { t: 'Fine-tune trên tập ảnh nhỏ (~200-500 ảnh, 2-5 classes)' },
        { t: 'Đánh giá accuracy trên test set, so sánh vs train from scratch' },
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 2', subs: [
        { t: 'Xem lại toàn bộ flashcard ML + DL + PyTorch' },
        { t: 'Đánh dấu phần yếu, ghi thêm note bổ sung' },
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        { t: 'Trả lời: "Giải thích bias-variance tradeoff"' },
        { t: 'Trả lời: "L1 vs L2 regularization khác gì?"' },
        { t: 'Trả lời: "Backpropagation hoạt động thế nào?"' },
        { t: 'Trả lời: "Vanishing gradient là gì, cách khắc phục?"' },
        { t: 'Ghi lại câu nào trả lời chưa tốt → ôn thêm' },
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 2', subs: [
        { t: 'Chọn dataset + xác định bài toán classification/regression', link: 'https://www.kaggle.com/datasets' },
        { t: 'Preprocessing: Pipeline + ColumnTransformer' },
        { t: 'Train 2-3 model, tune hyperparameters bằng GridSearchCV' },
        { t: 'Evaluate: classification_report + confusion matrix' },
        { t: 'Viết report: giải thích lựa chọn model, metric, kết quả' },
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        { t: 'Xem lại note tuần 2, đánh dấu phần yếu' },
        { t: 'Thư giãn, chuẩn bị cho tuần NLP' },
      ]},
    ]},
  ]
};
