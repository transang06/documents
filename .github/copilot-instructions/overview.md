# Tổng quan dự án

Đây là dự án website tài liệu sử dụng Docusaurus. Cấu trúc chính:
- `docs/`: Tài liệu markdown, chia theo chủ đề/ngôn ngữ, mỗi thư mục có `_category_.json` để nhóm sidebar.
- `blog/`: Bài viết blog dạng markdown, metadata quản lý qua `authors.yml`, `tags.yml`.
- `src/`: Thành phần React, CSS, và các trang tuỳ chỉnh.
- `static/`: Ảnh/icon tĩnh phục vụ trực tiếp.
- `build/`: Thư mục xuất bản tĩnh (không chỉnh sửa).
- `docusaurus.config.ts`, `sidebars.ts`: Cấu hình chính và sidebar.

Dự án ưu tiên tổ chức rõ ràng, dễ mở rộng, thuận tiện cho việc viết tài liệu và blog bằng markdown.
