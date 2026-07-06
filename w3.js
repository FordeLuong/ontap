export const W3 = {
  id: 'w3', tag: 'W3', title: 'Tuần 3', subtitle: 'NLP + Hugging Face + Prompt Engineering', days: [
    { dow: 'Thứ 2', theme: 'NLP cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Tokenization & tagging', subs: [
        'So sánh stemming vs lemmatization',
        'Thực hành POS tagging với NLTK',
        'Thực hành NER với NLTK',
        'Ghi note các khái niệm cơ bản'
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành SpaCy', subs: [
        'Cài đặt SpaCy, tải model tiếng Anh',
        'Chạy pipeline: tokenize → POS → NER',
        'Thử underthesea cho tiếng Việt (nếu có thời gian)',
        'So sánh output SpaCy vs NLTK'
      ]},
      { time: 'Tối · 1h', title: 'Note so sánh', subs: [
        'Note: NLTK vs SpaCy — ưu/nhược',
        'Note: khi nào dùng cái nào',
        'Xem lại flashcard hôm nay'
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'Kiến trúc Transformer', blocks: [
      { time: 'Sáng · 3h', title: 'Illustrated Transformer', subs: [
        'Đọc blog "The Illustrated Transformer"',
        'Hiểu self-attention mechanism',
        'Hiểu multi-head attention',
        'Hiểu positional encoding'
      ]},
      { time: 'Chiều · 2h', title: 'Tự vẽ lại sơ đồ', subs: [
        'Vẽ kiến trúc Encoder block',
        'Vẽ kiến trúc Decoder block',
        'Giải thích lại bằng lời như phỏng vấn'
      ]},
      { time: 'Tối · 1h', title: 'Flashcard', subs: [
        'Flashcard: Encoder vs Decoder',
        'Flashcard: BERT (encoder-only) dùng cho gì',
        'Flashcard: GPT (decoder-only) dùng cho gì'
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'Hugging Face cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'pipeline() API', subs: [
        'Chạy pipeline("sentiment-analysis")',
        'Chạy pipeline("ner")',
        'Chạy pipeline("text-generation")',
        'Chạy pipeline("translation")'
      ]},
      { time: 'Chiều · 3h', title: 'Tokenizer & Model thủ công', subs: [
        'Dùng AutoTokenizer tokenize text',
        'Xem output: input_ids, attention_mask',
        'Dùng AutoModel chạy inference thủ công',
        'Thử padding/truncation với max_length'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Note: input_ids là gì',
        'Note: attention_mask dùng để làm gì',
        'Note: padding vs truncation'
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Fine-tuning với Hugging Face', blocks: [
      { time: 'Sáng · 3h', title: 'Trainer API', subs: [
        'Tìm hiểu Trainer class',
        'Tìm hiểu TrainingArguments',
        'Chuẩn bị dataset theo format HF',
        'Ghi note quy trình fine-tune từng bước'
      ]},
      { time: 'Chiều · 3h', title: 'Fine-tune thực hành', subs: [
        'Tải DistilBERT pretrained',
        'Chuẩn bị dataset IMDB hoặc tiếng Việt',
        'Chạy fine-tune text classification',
        'Evaluate model trên test set'
      ]},
      { time: 'Tối · 1h', title: 'Note lỗi thường gặp', subs: [
        'Note: lỗi OOM và cách xử lý',
        'Note: learning rate không hội tụ',
        'Note: checklist debug fine-tuning'
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'Prompt Engineering', blocks: [
      { time: 'Sáng · 2.5h', title: 'Tài liệu Anthropic', subs: [
        'Đọc về zero-shot prompting',
        'Đọc về few-shot prompting',
        'Đọc về chain-of-thought',
        'Đọc về structured output (XML tags)'
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành viết prompt', subs: [
        'Viết prompt cho bài toán classification',
        'Viết prompt cho bài toán extraction',
        'Viết prompt cho bài toán summarization',
        'Test và tinh chỉnh từng prompt'
      ]},
      { time: 'Tối · 1h', title: 'Note', subs: [
        'Note: fine-tune vs prompt engineering',
        'Note: khi nào chọn cách nào',
        'Xem lại flashcard hôm nay'
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'RAG cơ bản + LLM Integration', blocks: [
      { time: 'Sáng · 3h', title: 'Khái niệm RAG', subs: [
        'Hiểu vector embedding là gì',
        'Hiểu similarity search (cosine similarity)',
        'Tìm hiểu FAISS hoặc Chroma',
        'Cài đặt và test vector DB cơ bản'
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành RAG mini', subs: [
        'Embed vài đoạn văn bản thành vectors',
        'Viết hàm query tìm đoạn liên quan',
        'Đưa context vào prompt cho LLM',
        'Test kết quả RAG vs không RAG'
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 3', subs: [
        'Xem lại toàn bộ flashcard NLP/Transformer',
        'Đánh dấu phần còn yếu',
        'Viết lại note cho phần chưa chắc'
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        'Trả lời 5 câu NLP/Transformer',
        'Trả lời 5 câu Prompt Engineering/RAG',
        'Ghi lại câu trả lời chưa tốt'
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 3', subs: [
        'Chọn bài toán NLP (classification/extraction)',
        'Xây pipeline: input → xử lý → output',
        'Test với nhiều input khác nhau',
        'Viết demo notebook/report'
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        'Xem lại note tuần 3',
        'Thư giãn, chuẩn bị cho tuần cuối'
      ]},
    ]},
  ]
};
