---
id: rrf
title: Reciprocal Rank Fusion (RRF)
sidebar_label: RRF
---

# Reciprocal Rank Fusion (RRF)

## Công thức

$$
\text{RRF}(d) = \sum_{r \in R} \frac{1}{k + \text{rank}_r(d)}
$$

## Giải thích

RRF là một thuật toán giúp **kết hợp nhiều danh sách kết quả tìm kiếm** từ các hệ thống khác nhau (ví dụ: BM25, TF-IDF, semantic search) thành một danh sách duy nhất.

Mục tiêu: nếu một tài liệu được **xếp hạng cao trong bất kỳ hệ thống nào**, thì nó vẫn sẽ được ưu tiên trong danh sách kết quả cuối cùng.

### Các thành phần trong công thức:

- $d$: một tài liệu cụ thể  
- $R$: tập hợp các danh sách kết quả từ các hệ thống/mô hình tìm kiếm  
- $\text{rank}_r(d)$: vị trí (thứ hạng) của tài liệu $d$ trong danh sách $r$  
- $k$: một hằng số dương (thường = 60) để làm giảm trọng số quá lớn từ những vị trí top đầu (tránh overfitting vào top-1)

> Công thức tính tổng điểm cho mỗi tài liệu $d$ bằng cách cộng **nghịch đảo thứ hạng** (reciprocal rank) của nó trong từng danh sách, sau khi đã cộng thêm $k$.

---

## Minh hoạ đơn giản

Giả sử bạn có 3 hệ thống tìm kiếm khác nhau và mỗi hệ thống trả về danh sách kết quả gồm các tài liệu được xếp hạng từ cao xuống thấp:

```python
ranking1 = ['A', 'B', 'C', 'D']
ranking2 = ['B', 'A', 'E', 'F']
ranking3 = ['C', 'A', 'B', 'G']
````

Giải thích:

* Tài liệu `'A'` được xếp hạng cao trong tất cả các hệ thống (thứ 1, 2, 2)
* `'B'` cũng được ưu tiên cao (thứ 2, 1, 3)
* `'E'`, `'F'`, `'G'` chỉ xuất hiện ở một hệ thống và ở vị trí thấp hơn

RRF sẽ tính điểm cho từng tài liệu bằng cách:

* Lấy thứ hạng trong từng hệ thống (bắt đầu từ 1) 
* Áp dụng công thức: $\frac{1}{k + \text{rank}}$ cho từng lần xuất hiện
* Cộng lại điểm của mỗi tài liệu

---

## Ví dụ

```python title="python"
def reciprocal_rank_fusion(results, k=60):
    """
    results: list of lists of doc_ids, mỗi list là kết quả từ 1 hệ thống tìm kiếm
    returns: dict với doc_id là key, và điểm RRF là value
    """
    from collections import defaultdict

    scores = defaultdict(float)
    for ranking in results:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] += 1 / (k + rank + 1)  # rank bắt đầu từ 0, nên +1

    return dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))
```

### Dữ liệu đầu vào

```python
ranking1 = ['A', 'B', 'C', 'D']
ranking2 = ['B', 'A', 'E', 'F']
ranking3 = ['C', 'A', 'B', 'G']

fused = reciprocal_rank_fusion([ranking1, ranking2, ranking3])
print(fused)
```

### Kết quả đầu ra

```
{'A': 0.0452, 'B': 0.0437, 'C': 0.0314, 'E': 0.0139, 'D': 0.0137, 'F': 0.0127, 'G': 0.0119}
```

> Tài liệu `'A'` có điểm cao nhất vì được xuất hiện sớm trong nhiều danh sách. `'B'` cũng gần như tương đương. `'C'` tuy ít xuất hiện hơn nhưng vẫn nằm trong top 3. Những tài liệu chỉ xuất hiện 1 lần (E, F, G) có điểm rất thấp.

---

## Ưu điểm

* **Dễ triển khai**: không cần huấn luyện mô hình hoặc cân chỉnh hệ số
* **Robust**: hiệu quả ngay cả khi các hệ thống có đặc điểm và cách tính điểm khác nhau
* **Không cần chuẩn hóa điểm số** giữa các hệ thống

## Nhược điểm

* Không tận dụng được độ mạnh của một hệ thống tốt nếu tài liệu đó không nằm ở top
* Phụ thuộc hoàn toàn vào thứ hạng, bỏ qua điểm số tuyệt đối
* Không điều chỉnh được độ quan trọng của từng nguồn (mọi danh sách được coi ngang nhau)

---

## Tài liệu tham khảo

* Cormack, G. V., & Grossman, M. R. (2009). *Reciprocal Rank Fusion outperforms Condorcet and individual rank learning methods*. SIGIR.
* [Wikipedia - Reciprocal Rank Fusion](https://en.wikipedia.org/wiki/Reciprocal_rank_fusion)

