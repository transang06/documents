# Deployment Slots

:::tip[Mục tiêu chính]
**Deployment Slots** cho phép triển khai nhiều phiên bản của ứng dụng web trong cùng một **App Service**.  
- Triển khai và kiểm thử dễ dàng
- Không ảnh hưởng đến môi trường production
- Hạn chế downtime khi cập nhật
:::

---

## Khái niệm

**Deployment Slot** là một môi trường độc lập nằm trong cùng một **Azure App Service**.

**Mỗi slot có:**

- Một URL riêng  
  _Ví dụ_: `myapp-staging.azurewebsites.net`

- Cấu hình độc lập  
  _App settings_, _connection strings_, v.v.

- Khả năng **hoán đổi (swap)** với production mà không cần downtime


:::info[Ví dụ]
Giả sử ứng dụng đang chạy ở slot **Production**, bạn có thể:

1. Tạo slot **Staging**
2. Triển khai phiên bản mới vào Staging
3. Kiểm thử trên Staging
4. Khi ổn, thực hiện **swap** Staging ↔ Production
:::

Kết quả: người dùng sẽ thấy phiên bản mới **ngay lập tức**, không bị gián đoạn.

---

## Ưu điểm của Slot Deployment

| Tính năng           | Mô tả                                                             |
| ------------------- | ----------------------------------------------------------------- |
| Zero-downtime       | Triển khai mà không làm gián đoạn dịch vụ                         |
| Test trước khi swap | Kiểm thử kỹ lưỡng phiên bản mới trước khi đưa vào production      |
| Rollback dễ dàng    | Nếu có lỗi, chỉ cần swap ngược lại để quay về phiên bản cũ        |
| Cấu hình riêng biệt | Mỗi slot có thể có biến môi trường và connection string khác nhau |

---

## Các loại slot phổ biến

- **Production**: slot chính, chạy ứng dụng thực tế
- **Staging**: dùng để kiểm thử trước khi đưa vào production
- **Development / QA / Test**: tùy theo quy trình CI/CD, có thể tạo thêm các slot phụ

---

## Cơ chế hoạt động của Swap


Khi bạn thực hiện **swap**, Azure sẽ:

- Hoán đổi domain giữa hai slot
- Giữ ứng dụng trong trạng thái "warm-up" để tránh cold start
- Cho phép định nghĩa **sticky settings** để một số thiết lập không bị hoán đổi


---

## Cách tạo và sử dụng Deployment Slot

### Bước 1: Truy cập Azure Portal
- Vào **App Services**
- Chọn ứng dụng cần thao tác

### Bước 2: Tạo slot mới
- Mở mục **Deployment slots**
- Nhấn **Add Slot**
- Đặt tên (ví dụ: `staging`)
- (Tùy chọn) Clone cấu hình từ Production

### Bước 3: Triển khai & hoán đổi
- Triển khai ứng dụng vào slot mới
- Truy cập đường dẫn của slot để kiểm thử
- Nếu ổn định, thực hiện **Swap**


:::tip[Azure CLI]
```bash
az webapp deployment slot create --name <app-name> --resource-group <group-name> --slot staging
:::