# Tích hợp & phụ thuộc

- **Plugin/Theme Docusaurus:** Quản lý qua `docusaurus.config.ts`.
- **Sidebar:** Điều khiển bằng `sidebars.ts` và `_category_.json`.
- **Markdown nâng cao:** Hỗ trợ MDX cho tài liệu tương tác (xem các file `.mdx` trong `blog/`).
- **Phụ thuộc ngoài:**
  - Docusaurus (framework chính)
  - React (component/trang tuỳ chỉnh)
  - Yarn (quản lý package)

Khi tuỳ chỉnh giao diện hoặc chức năng, ưu tiên chỉnh ở `src/pages/`, `src/components/`, và cấu hình ở `docusaurus.config.ts`.
