---
id: nestjs-intermediate-questions
title: Câu hỏi trung bình NestJS
sidebar_label: Trung bình
sidebar_position: 2
description: Tổng hợp câu hỏi và đáp án phỏng vấn NestJS level trung bình.
tags: [nestjs, interview, backend, nodejs, intermediate]
draft: false
---

# Câu hỏi trung bình NestJS

## Middleware, Guard & Pipe

### 1. Middleware trong NestJS là gì? Ứng dụng thực tế?
Middleware là các hàm xử lý request trước khi vào controller. Chúng thường được dùng để:
- Ghi log
- Xác thực token
- Kiểm tra quyền truy cập sơ bộ
- Tiền xử lý dữ liệu đầu vào

Middleware tương tự middleware trong Express, và được khai báo trong `app.module.ts` hoặc module cụ thể.

### 2. Guard là gì? Khi nào nên dùng Guard?
Guard là các lớp giúp kiểm soát việc **truy cập** vào route, dựa trên logic xác thực hoặc phân quyền. NestJS sử dụng `@UseGuards()` để áp dụng Guard cho route hoặc controller. Nên dùng Guard khi:
- Cần xác thực người dùng
- Phân quyền theo role
- Áp dụng bảo vệ cấp route

### 3. Pipe là gì? Dùng Pipe để làm gì?
Pipe được dùng để:
- **Biến đổi** (transform) dữ liệu đầu vào
- **Xác thực** (validate) dữ liệu trước khi controller xử lý

NestJS tích hợp `class-transformer` và `class-validator`, có thể dùng `ValidationPipe` toàn cục trong `main.ts`:
```ts
app.useGlobalPipes(new ValidationPipe());
````

## Interceptor, Exception & Testing

### 4. Interceptor là gì? Ứng dụng thực tế?

Interceptor là lớp xử lý logic:

* Trước khi request đến handler
* Sau khi handler trả response

Các ứng dụng thực tế:

* Ghi log
* Format lại response
* Caching
* Timeout

Sử dụng bằng `@UseInterceptors()`.

### 5. Cách validate dữ liệu đầu vào với class-validator?

```ts
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
}
```

Kết hợp với `ValidationPipe` trong `main.ts` để tự động validate các DTO.

### 6. Cách xử lý exception toàn cục trong NestJS?

Tạo custom ExceptionFilter bằng `@Catch()`:

```ts
@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.getResponse();

    response.status(status).json({
      success: false,
      message,
    });
  }
}
```

Sau đó đăng ký filter trong `main.ts`.

### 7. Cách test unit cho service/controller?

Dùng Jest để:

* Tạo `Test.createTestingModule` và inject dependencies
* Mock các service hoặc repository
* Sử dụng `expect()` để kiểm tra logic

Ví dụ test controller:

```ts
it('should return all users', async () => {
  const result = ['user1'];
  jest.spyOn(service, 'findAll').mockImplementation(() => result);
  expect(await controller.findAll()).toBe(result);
});
```

## Validation & Config

### 8. Cách sử dụng ConfigService để quản lý cấu hình?

NestJS hỗ trợ `@nestjs/config` để làm việc với `.env` file. Các bước:

1. Cài đặt:

```bash
npm install @nestjs/config
```

2. Cấu hình trong `AppModule`:

```ts
ConfigModule.forRoot({
  isGlobal: true,
});
```

3. Inject `ConfigService`:

```ts
constructor(private config: ConfigService) {
  const dbUrl = this.config.get('DATABASE_URL');
}
```

## Module & Decorator

### 9. Module trong NestJS là gì? Tại sao cần module?

Module là các đơn vị logic độc lập, tập hợp các controller, service, provider có liên quan. Mục tiêu:

* Quản lý code rõ ràng
* Tăng khả năng tái sử dụng
* Dễ bảo trì và mở rộng

NestJS bắt buộc phải có ít nhất 1 module là `AppModule`.

### 10. Decorator là gì? Kể tên một số decorator phổ biến trong NestJS.

Decorator là các hàm đặc biệt đánh dấu metadata cho class/method/property. Một số decorator thường dùng:

* `@Module`
* `@Injectable`
* `@Controller`
* `@Get`, `@Post`, `@Put`, `@Delete`
* `@Param`, `@Query`, `@Body`
* `@UseGuards`, `@UseInterceptors`
