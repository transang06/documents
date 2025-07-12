# Quy trình phát triển

- **Cài đặt:** `yarn`
- **Chạy dev:** `yarn start` (tự động reload khi thay đổi)
- **Build tĩnh:** `yarn build` (kết quả ở `build/`)
- **Deploy lên GitHub Pages:**
  - SSH: `USE_SSH=true yarn deploy`
  - Không SSH: `GIT_USER=<tên-github> yarn deploy`

Lưu ý: Không chỉnh sửa file trong `build/`. Khi thêm tài liệu mới, luôn cập nhật sidebar/category.
