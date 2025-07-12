---
id: nestjs-advanced-questions
title: Bộ câu hỏi phỏng vấn NestJS nâng cao
sidebar_label: Nâng cao
sidebar_position: 3
description: Bộ câu hỏi và đáp án chi tiết phỏng vấn NestJS nâng cao, chuyên sâu về kiến trúc, microservices, bảo mật, tối ưu hiệu năng.
tags: [nestjs, interview, backend, nodejs, advanced]
draft: false
---

# Câu hỏi nâng cao NestJS

## Microservices & Kiến trúc nâng cao

### 1. Microservices trong NestJS hoạt động thế nào?
NestJS hỗ trợ microservices qua abstraction layer `ClientsModule` và `@MessagePattern`. Có thể sử dụng nhiều transport khác nhau như:
- TCP
- Redis
- NATS
- MQTT
Microservice handler nhận message và xử lý bằng decorator `@MessagePattern()`.

### 2. Cách tích hợp microservices với REST API?
Sử dụng `ClientProxy` từ `@nestjs/microservices` để gửi message đến service:
```ts
this.client.send('pattern_name', payload).subscribe(result => ...);
````

REST controller sẽ hoạt động như gateway chuyển đổi request HTTP sang message.

### 3. Cách sử dụng CQRS pattern trong NestJS?

Cài `@nestjs/cqrs` để áp dụng mô hình CQRS:

* **Command**: yêu cầu thay đổi state
* **Query**: yêu cầu truy vấn dữ liệu
* **Event**: ghi nhận các hành động đã xảy ra
  Tách biệt rõ giữa đọc và ghi, dễ mở rộng, bảo trì, và test.

## WebSocket & Giao tiếp realtime

### 4. Cách xử lý WebSocket trong NestJS?

Sử dụng package `@nestjs/websockets`:

* Dùng `@WebSocketGateway()` để tạo gateway
* Xử lý sự kiện bằng `@SubscribeMessage('event')`
* Hỗ trợ nhiều adapter như Socket.IO, WS

Ví dụ:

```ts
@SubscribeMessage('message')
handleMessage(client: Socket, payload: any) {
  return 'Response';
}
```

## Provider, Auth & Bảo mật

### 5. Custom provider là gì? Khi nào cần custom provider?

Custom provider cho phép cấu hình cách khởi tạo dependency:

* Dùng giá trị tĩnh (`useValue`)
* Dùng factory function (`useFactory`)
* Hoặc class cụ thể (`useClass`)

Áp dụng khi cần inject service có cấu hình linh hoạt hoặc phụ thuộc vào runtime.

### 6. Cách triển khai authentication với JWT và Guard?

1. Cài `@nestjs/jwt`
2. Tạo `AuthService` để tạo/verify token
3. Tạo `JwtStrategy` từ `PassportStrategy`
4. Dùng `@UseGuards(JwtAuthGuard)` để bảo vệ route

## Tối ưu hiệu năng & Quản lý hệ thống

### 7. Tối ưu hiệu năng cho ứng dụng NestJS lớn?

* Dùng cache: `@nestjs/cache-manager`
* Phân chia module theo domain rõ ràng
* Dùng async/await thay vì blocking code
* Tối ưu truy vấn DB
* Dùng cluster hoặc worker threads để khai thác CPU đa nhân

### 8. Cách triển khai multi-tenancy cho ứng dụng NestJS?

Có 2 mô hình:

* **Database per tenant**: mỗi tenant một database riêng
* **Schema per tenant**: chung DB, phân tách bằng schema

Áp dụng:

* Middleware để đọc tenant từ subdomain/header/token
* Dynamically load cấu hình DB/module theo tenant

## Interceptor & File upload

### 9. Cách sử dụng Interceptor để logging hoặc transform response?

Interceptor giúp xử lý logic trước và sau khi controller xử lý:

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next.handle().pipe(
      tap(() => console.log('After...'))
    );
  }
}
```

### 10. Cách xử lý file upload trong NestJS?

1. Cài `multer` và `@nestjs/platform-express`
2. Dùng decorator `@UploadedFile()` và `FileInterceptor()`:

```ts
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
upload(@UploadedFile() file: Express.Multer.File) {
  return { filename: file.originalname };
}
```
