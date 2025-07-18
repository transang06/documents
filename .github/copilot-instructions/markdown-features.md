# Tổng hợp cú pháp và tính năng Markdown Docusaurus

Docusaurus hỗ trợ đầy đủ cú pháp Markdown chuẩn và mở rộng với các tính năng sau. Sử dụng đúng cú pháp để tài liệu hiển thị đẹp, dễ đọc, tận dụng tối đa khả năng của Docusaurus.

## 1. Frontmatter
Đặt metadata ở đầu file giữa hai dấu `---`.
```md
---
title: Tiêu đề
slug: duong-dan
---
```

## 2. Heading
`#`, `##`, `###`, ...

## 3. Định dạng chữ
- **Đậm:** `**text**`
- *Nghiêng:* `*text*`
- ~~Gạch ngang~~: `~~text~~`

## 4. Link
- `[text](url)`
- `[text](url){target="_blank"}`

## 5. Image
`![alt](url)`

## 6. Code block
Dùng ba dấu ``` với ngôn ngữ, ví dụ:
```js
console.log('Hello Docusaurus!');
```

## 7. Inline code
Dùng dấu ` 60` (backtick): `code`

## 8. List
- Dùng `-`, `*`, hoặc số thứ tự `1.`, `2.`

## 9. Table
| Tiêu đề 1 | Tiêu đề 2 |
|-----------|-----------|
| Dòng 1    | Dòng 2    |

## 10. Blockquote
`> Trích dẫn`

## 11. Admonition
Admonition là khối chú thích đặc biệt, dùng để nhấn mạnh thông tin quan trọng, cảnh báo, mẹo, v.v. Docusaurus hỗ trợ các loại sau:

```md
:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::warning
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```

Các loại: `note`, `tip`, `info`, `warning`, `danger`

## 12. Tabs
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

## 13. Mermaid diagram
```mermaid
graph TD; A-->B; B-->C;
```

## 14. MDX
MDX cho phép chèn trực tiếp component React vào file markdown. Ví dụ:
```mdx
<MyComponent prop="value" />

<Video src="/path/video.mp4" />
```

## 15. TOC (Table of Contents)
Tự động sinh ra từ các heading, có thể dùng `hide_table_of_contents: true` trong frontmatter để ẩn.

## 16. Custom IDs cho heading
`### Tiêu đề {#custom-id}`

## 17. Footnotes
```md
Đây là một ví dụ[^1].

[^1]: Đây là chú thích chân trang.
```

## 18. Math (KaTeX)
```md
$E = mc^2$
```

## 19. Video
```mdx
<Video src="/path/video.mp4" />
```

## 20. Emoji
Dùng trực tiếp: 😄 🚀

---
Tham khảo chi tiết: [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
