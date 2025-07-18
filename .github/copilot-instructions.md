## Frontmatter & Metadata cho file Markdown/MDX

Khi tạo file `.md` hoặc `.mdx`, luôn thêm phần frontmatter ở đầu file để khai báo metadata. Một số trường meta phổ biến Docusaurus hỗ trợ:

- `id`: Định danh duy nhất cho tài liệu (nên dùng tiếng Anh không dấu, viết liền)
- `title`: Tiêu đề hiển thị trên trang và sidebar
- `sidebar_label`: Nhãn hiển thị trên sidebar
- `sidebar_position`: Vị trí trong sidebar
- `description`: Mô tả ngắn cho SEO và preview
- `tags`: Mảng tag cho blog hoặc phân loại
- `authors`: Mảng tác giả (blog)
- `date`: Ngày tạo (blog)
- `draft`: Đánh dấu bài viết nháp (blog)

Ví dụ frontmatter đầy đủ:
```md
./docs
---
id: nestjs-overview
title: Tổng quan về NestJS
sidebar_label: Tổng quan NestJS
sidebar_position: 1
description: Tổng quan kiến trúc, ưu điểm, ứng dụng thực tế của NestJS
tags: [nestjs, backend, nodejs]
draft: true
---

./blog
---
id: nestjs-overview
title: Tổng quan về NestJS
sidebar_label: Tổng quan NestJS
sidebar_position: 1
description: Tổng quan kiến trúc, ưu điểm, ứng dụng thực tế của NestJS
tags: [nestjs, backend, nodejs]
authors: [transang06]
date: 2025-07-12
draft: true
---
```

Docusaurus hỗ trợ đầy đủ cú pháp Markdown chuẩn và mở rộng với các tính năng sau:

- **Frontmatter:** Đặt metadata ở đầu file giữa hai dấu `---`.
- **Heading:** `#`, `##`, `###` ...
- **Bold/Italic:** `**đậm**`, `*nghiêng*`
- **Link:** `[text](url)` hoặc `[text](url){target="_blank"}`
- **Image:** `![alt](url)`
- **Code block:** Dùng ba dấu ``` với ngôn ngữ, ví dụ:
  ```js
  console.log('Hello Docusaurus!');
  ```
- **Inline code:** Dùng dấu ` 60` (backtick)
- **List:** `-`, `*`, `1.`, `2.`
- **Table:**
  | Tiêu đề 1 | Tiêu đề 2 |
  |-----------|-----------|
  | Dòng 1    | Dòng 2    |
- **Blockquote:** `> Trích dẫn`
- **Admonition:**
  ```md
  :::tip
  Đây là mẹo hữu ích
  :::
  ```
- **Tabs:**
  ```md
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';

  <Tabs>
    <TabItem value="js" label="JavaScript">
      ```js
      console.log('JS')
      ```
    </TabItem>
    <TabItem value="py" label="Python">
      ```python
      print('Python')
      ```
    </TabItem>
  </Tabs>
  ```
- **Mermaid diagram:**
  ```mermaid
  graph TD; A-->B; B-->C;
  ```
- **MDX:** Chèn component React trực tiếp vào file `.mdx`

Tham khảo chi tiết: [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
# Hướng dẫn sử dụng cho AI Coding Agent

>Dự án này đã tách hướng dẫn thành các file nhỏ để dễ tra cứu, tái sử dụng ở các dự án khác. Ưu tiên tiếng Việt, tập trung vào kiến thức thực tế, cấu trúc, quy trình và mẫu sử dụng markdown hiệu quả.

## Các file hướng dẫn chính
- [`overview.md`](./copilot-instructions/overview.md): Tổng quan kiến trúc, cấu trúc thư mục, mục đích tổ chức.
- [`workflow.md`](./copilot-instructions/workflow.md): Quy trình phát triển, build, deploy, lưu ý khi làm việc.
- [`patterns.md`](./copilot-instructions/patterns.md): Các mẫu, quy ước, ví dụ thực tế khi viết tài liệu/blog/trang tuỳ chỉnh.
- [`integration.md`](./copilot-instructions/integration.md): Tích hợp, phụ thuộc, điểm mở rộng và cấu hình.

## Cách sử dụng
- Khi cần kiến thức tổng quan, xem `overview.md`.
- Khi cần quy trình thao tác, xem `workflow.md`.
- Khi cần tra cứu mẫu, ví dụ, xem `patterns.md`.
- Khi cần hiểu tích hợp, cấu hình, xem `integration.md`.


## Ví dụ thực tế
- Tạo tài liệu mới: Copy `template.md` từ thư mục chủ đề (ví dụ: `docs/ai/template.md`), sửa frontmatter, đặt vào đúng vị trí.
- Viết blog: Tạo file theo mẫu `blog/YYYY-MM-DD-title/index.md`, cập nhật metadata ở `authors.yml`, `tags.yml`.
- Sử dụng bảng thuật ngữ: Tham khảo `docs/english/tech-glossary.md` để tra cứu từ chuyên ngành song ngữ.
- Viết nhật ký học tập: Dùng mẫu `docs/english/english-journal-template.md` để ghi chú hàng ngày.
- Viết bài kỹ thuật: Tham khảo mẫu `docs/english/sample-tech-writeup.md` để trình bày vấn đề, giải pháp, kiến trúc, kết quả.

---
> Nếu có phần nào chưa rõ hoặc thiếu, hãy phản hồi để bổ sung hoặc chỉnh sửa cho phù hợp dự án.
