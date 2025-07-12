# RAG with LangChain and ChromaDB

## 1. Định nghĩa ngắn gọn
RAG (Retrieval-Augmented Generation) là kỹ thuật kết hợp truy xuất dữ liệu và sinh ngôn ngữ để tạo câu trả lời từ nguồn thông tin bên ngoài mô hình.

## 2. Mục đích và ứng dụng
- Tăng độ chính xác của câu trả lời bằng cách truy xuất kiến thức thực tế
- Dùng trong các hệ thống hỏi đáp, chatbot nội bộ, tìm kiếm ngữ nghĩa
- Áp dụng cho các domain mà LLM không được huấn luyện đầy đủ

## 3. Kiến trúc tổng quan

```mermaid
graph LR
A[User query] --> B[Retriever: ChromaDB]
B --> C[Relevant chunks]
C --> D[LLM: Groq or OpenAI]
D --> E[Generated Answer]
````

## 4. Quy trình triển khai

1. Embed tài liệu thành vector → lưu vào ChromaDB
2. Khi có query, dùng retriever lấy chunk liên quan
3. Truyền chunk + query vào LLM để sinh câu trả lời
4. Trả kết quả kèm nguồn dẫn

## 5. Mã ví dụ với LangChain

```python
from langchain.chains import RetrievalQA
from langchain.vectorstores import Chroma
from langchain.llms import GroqLLM

retriever = Chroma.from_documents(docs).as_retriever()
llm = GroqLLM(model="mixtral-8x7b")

qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
result = qa_chain.run("What is retrieval-augmented generation?")
print(result)
```

## 6. Lưu ý thực tế

* Chia văn bản (chunking) hợp lý, tránh cắt ý giữa chừng
* Tối ưu embedding model cho tiếng Việt: `intfloat/multilingual-e5-base`
* Kiểm soát số lượng chunk đưa vào LLM để tránh vượt token limit

## 7. Từ vựng tiếng Anh chuyên ngành

| Term                                 | Nghĩa tiếng Việt                      | Ghi chú                              |
| ------------------------------------ | ------------------------------------- | ------------------------------------ |
| RAG (Retrieval-Augmented Generation) | Tăng cường truy xuất cho mô hình sinh | Kỹ thuật kết hợp LLM + tìm kiếm      |
| Retriever                            | Bộ truy xuất tài liệu                 | Ví dụ: FAISS, ChromaDB               |
| Generator                            | Mô hình sinh văn bản                  | GPT, Claude, Groq                    |
| Embedding                            | Biểu diễn vector                      | Vector hóa ngữ nghĩa                 |
| Chunk                                | Đoạn văn bản nhỏ                      | Cắt thành đoạn ngắn để xử lý tốt hơn |

## 8. Mẫu câu tiếng Anh để viết blog / báo cáo

> "We implemented a RAG pipeline using LangChain, ChromaDB as retriever, and Groq LLM as the generator."

> "RAG allows the system to generate informed responses grounded in factual documents."

## 9. Tham khảo

* [LangChain RAG Docs](https://docs.langchain.com/docs/use-cases/question-answering/)
* [Facebook RAG paper](https://arxiv.org/abs/2005.11401)
* [ChromaDB Docs](https://docs.trychroma.com/)

[text](https://trans-organization-48.gitbook.io/bright-mind/ai-agent)