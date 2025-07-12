---
id: nestjs-basic-questions
title: Câu hỏi cơ bản NestJS
sidebar_label: Cơ bản
sidebar_position: 1
description: Tổng hợp câu hỏi và đáp án phỏng vấn NestJS level cơ bản.
tags: [nestjs, interview, backend, nodejs, basic]
draft: false
---

# Câu hỏi cơ bản NestJS

## Tổng quan & Kiến trúc

### 1. NestJS là gì? Ưu điểm so với Express?
NestJS là framework Node.js dựa trên TypeScript, hỗ trợ kiến trúc module, dependency injection (DI), lập trình hướng đối tượng. So với Express, NestJS có cấu trúc rõ ràng hơn, tích hợp sẵn DI, Decorator, dễ test và bảo trì. Nó còn hỗ trợ validation, pipes, guards, interceptors, giúp phát triển ứng dụng lớn dễ dàng hơn.

## Module & Decorator

### 2. Module trong NestJS là gì? Tại sao cần module?
Module là đơn vị chức năng độc lập, giúp tách biệt logic, dễ quản lý và mở rộng dự án. Mỗi module có thể import các module khác, hỗ trợ tổ chức hệ thống lớn thành các phần dễ bảo trì.

### 3. Decorator là gì? Kể tên một số decorator phổ biến trong NestJS.
Decorator là các hàm đánh dấu class, method hoặc property. Chúng giúp framework hiểu và xử lý các thành phần tương ứng. Một số decorator phổ biến:
- `@Module`
- `@Controller`
- `@Injectable`
- `@Get`, `@Post`
- `@Body`, `@Param`, `@Query`

## Controller, Service & DI

### 4. Controller và Service khác nhau thế nào?
- **Controller**: xử lý request và trả về response, định nghĩa các route API.
- **Service**: chứa logic nghiệp vụ, được inject vào controller. Giúp tách biệt business logic khỏi controller để dễ test và tái sử dụng.

### 5. Dependency Injection hoạt động ra sao trong NestJS?
DI giúp inject các provider như service, repository, config vào nơi cần thiết. NestJS quản lý lifecycle và dependency graph, giảm coupling, giúp code dễ test và mở rộng.

## API & DTO

### 6. Cách tạo một REST API endpoint đơn giản với NestJS?
```ts
@Controller('users')
export class UserController {
  @Get()
  getAll() {
    return ['user1', 'user2'];
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return dto;
  }
}
````

### 7. DTO là gì? Tại sao nên dùng DTO?

DTO (Data Transfer Object) định nghĩa và validate dữ liệu đầu vào/ra, giúp:

* Bảo vệ API khỏi dữ liệu không hợp lệ
* Rõ ràng, dễ bảo trì
* Dễ mở rộng, kết hợp với `class-validator` để kiểm soát dữ liệu

## Cấu trúc thư mục & Cấu hình

### 8. Cách tổ chức cấu trúc thư mục chuẩn cho dự án NestJS?

Theo module, mỗi module chứa controller, service, DTO, entity, ví dụ:

```text
src/
  user/
    user.controller.ts
    user.service.ts
    user.module.ts
    dto/
    entity/
  auth/
    auth.controller.ts
    auth.service.ts
    auth.module.ts
    dto/
    entity/
```

### 9. Cách cấu hình biến môi trường (env) trong NestJS?

Dùng package `@nestjs/config`:

1. Tạo file `.env`
2. Import `ConfigModule` vào `AppModule`
3. Inject `ConfigService` vào service

```ts
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getEnv() {
    return this.config.get('DATABASE_URL');
  }
}
```

## Swagger & Validation

### 10. Cách tích hợp Swagger cho API docs?

Dùng package `@nestjs/swagger`, cấu hình trong `main.ts`:

```ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('API')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

### 11. Làm sao để xử lý lỗi 404 cho route không tồn tại?

* Dùng built-in `NotFoundException`
* Hoặc tạo custom Exception Filter để bắt toàn bộ lỗi và log lại

### 12. Cách sử dụng ValidationPipe để validate dữ liệu đầu vào?

Thêm vào `main.ts`:

```ts
app.useGlobalPipes(new ValidationPipe());
```

## Testing, Interceptor & Upload

### 13. Cách viết unit test cho controller/service?

Dùng Jest:

* Tạo test module với `Test.createTestingModule`
* Mock các service
* Kiểm tra logic trả về bằng `expect()`

### 14. Cách sử dụng Interceptor để log request/response?

* Tạo class implement `NestInterceptor`
* Override `intercept()` để log trước và sau xử lý
* Dùng decorator `@UseInterceptors()` ở controller hoặc route

### 15. Cách xử lý upload file trong NestJS?

Dùng package:

```bash
npm install @nestjs/platform-express multer
```

Controller:

```ts
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  return file;
}
```

