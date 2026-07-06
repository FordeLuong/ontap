export const W3 = {
  id: 'w3', tag: 'W3', title: 'Tuần 3', subtitle: 'NLP + Hugging Face + Prompt Engineering', days: [
    { dow: 'Thứ 2', theme: 'NLP cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'Tokenization & tagging', subs: [
        { t: 'So sánh stemming (Porter) vs lemmatization (WordNet) trên 10 từ', link: 'https://www.nltk.org/book/ch03.html' },
        { t: 'Thực hành POS tagging với NLTK: nltk.pos_tag()' },
        { t: 'Thực hành NER với NLTK: ne_chunk() — nhận diện PERSON, ORG' },
        { t: 'Ghi note: Bag of Words vs TF-IDF — khi nào dùng cái nào' },
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành SpaCy', subs: [
        { t: 'Cài SpaCy + tải model en_core_web_sm', link: 'https://spacy.io/usage' },
        { t: 'Chạy pipeline NLP: tokenize → POS → NER trên 3 đoạn văn' },
        { t: 'Visualize NER bằng displacy.render()' },
        { t: 'Thử underthesea cho tiếng Việt: word_tokenize, ner', link: 'https://github.com/undertheseanlp/underthesea' },
      ]},
      { time: 'Tối · 1h', title: 'Note so sánh', subs: [
        { t: 'Note: NLTK (học thuật, linh hoạt) vs SpaCy (production, nhanh)' },
        { t: 'Note: khi nào dùng rule-based NLP vs ML-based NLP' },
        { t: 'Xem lại các khái niệm hôm nay' },
      ]},
    ]},
    { dow: 'Thứ 3', theme: 'Kiến trúc Transformer', blocks: [
      { time: 'Sáng · 3h', title: 'Illustrated Transformer', subs: [
        { t: 'Đọc blog "The Illustrated Transformer" của Jay Alammar', link: 'https://jalammar.github.io/illustrated-transformer/' },
        { t: 'Hiểu self-attention: Query, Key, Value — tính attention scores' },
        { t: 'Hiểu multi-head attention: tại sao cần nhiều heads' },
        { t: 'Hiểu positional encoding: sin/cos — tại sao cần vị trí' },
      ]},
      { time: 'Chiều · 2h', title: 'Tự vẽ lại sơ đồ', subs: [
        { t: 'Vẽ kiến trúc Encoder block: MultiHead Attn → Add&Norm → FFN → Add&Norm' },
        { t: 'Vẽ kiến trúc Decoder block: Masked Attn → Cross Attn → FFN' },
        { t: 'Giải thích lại bằng lời như đang trả lời phỏng vấn (ghi âm/viết)' },
      ]},
      { time: 'Tối · 1h', title: 'Flashcard Transformer', subs: [
        { t: 'Flashcard: Encoder-only (BERT) — dùng cho classification, NER', link: 'https://jalammar.github.io/illustrated-bert/' },
        { t: 'Flashcard: Decoder-only (GPT) — dùng cho text generation' },
        { t: 'Flashcard: Encoder-Decoder (T5, BART) — dùng cho translation, summarization' },
      ]},
    ]},
    { dow: 'Thứ 4', theme: 'Hugging Face cơ bản', blocks: [
      { time: 'Sáng · 3h', title: 'pipeline() API', subs: [
        { t: 'Chạy pipeline("sentiment-analysis") trên 5 câu tiếng Anh', link: 'https://huggingface.co/learn/nlp-course/chapter1' },
        { t: 'Chạy pipeline("ner") — xem entities được nhận diện' },
        { t: 'Chạy pipeline("text-generation") với GPT-2' },
        { t: 'Chạy pipeline("translation", model="Helsinki-NLP/opus-mt-en-vi")' },
      ]},
      { time: 'Chiều · 3h', title: 'Tokenizer & Model thủ công', subs: [
        { t: 'Dùng AutoTokenizer.from_pretrained("bert-base-uncased")', link: 'https://huggingface.co/learn/nlp-course/chapter2' },
        { t: 'Xem output tokenizer: input_ids, attention_mask, token_type_ids' },
        { t: 'Dùng AutoModel chạy inference thủ công, xem hidden states' },
        { t: 'Thử padding=True, truncation=True, max_length=128' },
      ]},
      { time: 'Tối · 1h', title: 'Note HuggingFace', subs: [
        { t: 'Note: input_ids = token → integer mapping' },
        { t: 'Note: attention_mask = 1 (real token) vs 0 (padding)' },
        { t: 'Note: special tokens [CLS], [SEP], [PAD] — vai trò từng cái' },
      ]},
    ]},
    { dow: 'Thứ 5', theme: 'Fine-tuning với Hugging Face', blocks: [
      { time: 'Sáng · 3h', title: 'Trainer API', subs: [
        { t: 'Đọc HF Course Chapter 3: Fine-tuning', link: 'https://huggingface.co/learn/nlp-course/chapter3' },
        { t: 'Tìm hiểu Trainer class và TrainingArguments' },
        { t: 'Chuẩn bị dataset: load_dataset() → tokenize → format torch' },
        { t: 'Ghi note quy trình fine-tune 5 bước (data → tokenize → model → train → eval)' },
      ]},
      { time: 'Chiều · 3h', title: 'Fine-tune thực hành', subs: [
        { t: 'Load DistilBERT: AutoModelForSequenceClassification', link: 'https://huggingface.co/distilbert-base-uncased' },
        { t: 'Chuẩn bị IMDB dataset bằng datasets.load_dataset("imdb")' },
        { t: 'Fine-tune text classification: Trainer.train()' },
        { t: 'Evaluate trên test set: accuracy, F1, confusion matrix' },
      ]},
      { time: 'Tối · 1h', title: 'Note lỗi thường gặp', subs: [
        { t: 'Note: lỗi OOM → giảm batch_size, dùng gradient accumulation' },
        { t: 'Note: loss không giảm → kiểm tra learning_rate (thử 2e-5, 5e-5)' },
        { t: 'Note: checklist debug fine-tuning (data format, label mapping)' },
      ]},
    ]},
    { dow: 'Thứ 6', theme: 'Prompt Engineering', blocks: [
      { time: 'Sáng · 2.5h', title: 'Tài liệu Prompt Engineering', subs: [
        { t: 'Đọc Anthropic Docs: Prompt Engineering overview', link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
        { t: 'Hiểu zero-shot vs few-shot prompting — viết ví dụ cho mỗi loại' },
        { t: 'Hiểu chain-of-thought: "Hãy suy nghĩ từng bước"' },
        { t: 'Hiểu structured output: dùng XML tags, JSON format trong prompt' },
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành viết prompt', subs: [
        { t: 'Viết prompt classification: phân loại email (spam/ham/urgent)' },
        { t: 'Viết prompt extraction: trích xuất thông tin từ CV/hợp đồng' },
        { t: 'Viết prompt summarization: tóm tắt bài báo dài thành 3 bullet points' },
        { t: 'Test và tinh chỉnh: so sánh kết quả zero-shot vs few-shot' },
      ]},
      { time: 'Tối · 1h', title: 'Note so sánh', subs: [
        { t: 'Note: fine-tune (cần data, tốn GPU) vs prompt engineering (nhanh, flexible)' },
        { t: 'Note: khi nào chọn fine-tune — data riêng, latency thấp, domain cụ thể' },
        { t: 'Note: khi nào chọn prompt — prototype nhanh, ít data, nhiều tasks' },
      ]},
    ]},
    { dow: 'Thứ 7', theme: 'RAG cơ bản + LLM Integration', blocks: [
      { time: 'Sáng · 3h', title: 'Khái niệm RAG', subs: [
        { t: 'Hiểu vector embedding: text → dense vector (768/1536 dims)', link: 'https://www.pinecone.io/learn/vector-embeddings/' },
        { t: 'Hiểu cosine similarity: đo độ giống nhau giữa 2 vectors' },
        { t: 'Tìm hiểu FAISS: tạo index, add vectors, search', link: 'https://github.com/facebookresearch/faiss' },
        { t: 'Hoặc tìm hiểu Chroma: collection, add, query', link: 'https://docs.trychroma.com/docs/overview/getting-started' },
      ]},
      { time: 'Chiều · 3h', title: 'Thực hành RAG mini', subs: [
        { t: 'Embed 10 đoạn văn bản bằng sentence-transformers', link: 'https://www.sbert.net/docs/quickstart.html' },
        { t: 'Lưu vectors vào FAISS/Chroma, viết hàm search top-3' },
        { t: 'Viết prompt: đưa context tìm được vào system message cho LLM' },
        { t: 'Test: so sánh kết quả LLM có RAG vs không có RAG' },
      ]},
      { time: 'Tối · 1h', title: 'Ôn flashcard tuần 3', subs: [
        { t: 'Xem lại flashcard NLP + Transformer + Prompt Engineering' },
        { t: 'Đánh dấu phần yếu, ghi thêm note bổ sung' },
      ]},
    ]},
    { dow: 'Chủ nhật', theme: 'Review + Mini Project', blocks: [
      { time: 'Sáng · 2h', title: 'Mô phỏng phỏng vấn', subs: [
        { t: 'Trả lời: "Self-attention hoạt động thế nào?"' },
        { t: 'Trả lời: "BERT vs GPT khác gì? Dùng cho bài toán nào?"' },
        { t: 'Trả lời: "RAG là gì? Tại sao cần RAG thay vì fine-tune?"' },
        { t: 'Trả lời: "Zero-shot vs few-shot prompting?"' },
        { t: 'Ghi lại câu trả lời chưa tốt → ôn thêm' },
      ]},
      { time: 'Chiều · 3h', title: 'Mini project tuần 3', subs: [
        { t: 'Chọn bài toán NLP: text classification hoặc Q&A' },
        { t: 'Xây pipeline: input text → preprocessing → model/LLM → output' },
        { t: 'Test với 10+ input khác nhau, đánh giá chất lượng' },
        { t: 'Viết demo notebook hoặc script có thể chạy lại' },
      ]},
      { time: 'Tối', title: 'Nghỉ ngơi', subs: [
        { t: 'Xem lại note tuần 3, chuẩn bị cho tuần cuối' },
        { t: 'Thư giãn, nạp năng lượng cho tuần tích hợp' },
      ]},
    ]},
  ]
};
