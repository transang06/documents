# Sample Technical Writeup – RAG with LangChain
 <!-- Bài mẫu viết kỹ thuật ngắn bằng tiếng Anh/ -->
## 🔍 Problem
We wanted to build a question-answering system that can access up-to-date internal documentation instead of relying only on pre-trained LLM knowledge.

## 💡 Solution
We implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain. ChromaDB was used to store vectorized documents, and Groq LLM served as the generator.

## ⚙️ Architecture

1. Documents are chunked and embedded using `intfloat/multilingual-e5-base`.
2. ChromaDB stores the embeddings.
3. At query time, the retriever fetches relevant chunks.
4. The generator produces the answer with context-aware information.

## 🧪 Result
The system achieved more accurate and explainable answers compared to using GPT-4 alone.

## 📌 Tech Stack
- LangChain
- ChromaDB
- Groq LLM
- FastAPI
- SentenceTransformer

## ✍️ Sample sentence
> “We used a RAG pipeline to enable real-time domain-specific question answering in Vietnamese.”
