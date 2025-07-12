# Các mẫu và quy ước

- **Tài liệu:**
  - Mỗi chủ đề/ngôn ngữ trong `docs/` có thư mục riêng, dùng `_category_.json` để nhóm sidebar.
  - Có file mẫu `template.md` để tạo tài liệu mới.
- **Blog:**
  - Mỗi bài trong `blog/YYYY-MM-DD-title/index.md`.
  - Metadata ở `blog/authors.yml`, `blog/tags.yml`.
- **Trang/Component tuỳ chỉnh:**
  - Trang tuỳ chỉnh ở `src/pages/`, component dùng lại ở `src/components/`.
  - CSS tuỳ chỉnh ở `src/css/custom.css`.
- **Ảnh/Icon:**
  - Đặt ở `static/img/` để phục vụ trực tiếp.

Ví dụ: Muốn thêm tài liệu mới, copy `template.md` từ thư mục chủ đề, sửa frontmatter, đặt vào đúng vị trí.
