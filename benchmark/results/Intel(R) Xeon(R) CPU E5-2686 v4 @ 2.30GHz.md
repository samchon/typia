# Benchmark of `typescript-json`
> CPU: Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz
> Memory: 16,002 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 11079.62962962963 | 9540.835789838737
object (recursive) | 15689.241557482932 | 13243.262163108155
object (union) | 2371.1449840482096 | 1077.0477047704771
array (recursive) | 926.2553270335371 | 934.4723995493805
array (union) | 1640.0718778077267 | 106.29704424453827
ultimate union | 2209.5409540954097 | 13.948682624418804


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 11079.62962962963
  "typescript-is": 9540.835789838737
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 15689.241557482932
  "typescript-is": 13243.262163108155
```


```mermaid
pie title assert - object (union)
  "typescript-json": 2371.1449840482096
  "typescript-is": 1077.0477047704771
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 926.2553270335371
  "typescript-is": 934.4723995493805
```


```mermaid
pie title assert - array (union)
  "typescript-json": 1640.0718778077267
  "typescript-is": 106.29704424453827
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 2209.5409540954097
  "typescript-is": 13.948682624418804
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 44078.20240622788 | 17480.48647667453 | 23574.600844191595
object (recursive) | 35387.55897256684 | 17369.708876585104 | Failed
object (union, explicit) | 6496.118299445471 | Failed | 706.7486950037286
object (union, implicit) | 5401.846722068329 | Failed | Failed
array (recursive) | 3547.5655430711613 | 2165.0188747078914 | Failed
array (union, explicit) | 3699.3699369936994 | 594.8464912280701 | Failed
array (union, implicit) | 4117.450907743609 | 640.5780780780781 | Failed
ultimate union | 4545.252225519287 | 156.49536045681657 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 44078.20240622788
  "typescript-is": 17480.48647667453
  "ajv": 23574.600844191595
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 35387.55897256684
  "typescript-is": 17369.708876585104
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 6496.118299445471
  "typescript-is": 0
  "ajv": 706.7486950037286
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 5401.846722068329
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 3547.5655430711613
  "typescript-is": 2165.0188747078914
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 3699.3699369936994
  "typescript-is": 594.8464912280701
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 4117.450907743609
  "typescript-is": 640.5780780780781
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 4545.252225519287
  "typescript-is": 156.49536045681657
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 58990.63231850117 | Failed | 5621.019108280255
object (hierarchical) | 3058.4415584415588 | Failed | 1373.6121391561805
object (recursive) | 2928.532755820249 | Failed | 1184.9215041986126
object (union) | 1108.6878154289834 | Failed | 742.4186390532544
array (hierarchical) | 43.32129963898917 | Failed | 33.222591362126245
array (recursive) | 129.13907284768212 | Failed | 110.88333954528514
array (union) | 205.14233241505968 | Failed | 232.42841204908888
ultimate union | 768.2395644283122 | Failed | 169.6316262353998


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 58990.63231850117
  "fast-json-stringify": 0
  "JSON.stringify()": 5621.019108280255
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 3058.4415584415588
  "fast-json-stringify": 0
  "JSON.stringify()": 1373.6121391561805
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 2928.532755820249
  "fast-json-stringify": 0
  "JSON.stringify()": 1184.9215041986126
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1108.6878154289834
  "fast-json-stringify": 0
  "JSON.stringify()": 742.4186390532544
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 43.32129963898917
  "fast-json-stringify": 0
  "JSON.stringify()": 33.222591362126245
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 129.13907284768212
  "fast-json-stringify": 0
  "JSON.stringify()": 110.88333954528514
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 205.14233241505968
  "fast-json-stringify": 0
  "JSON.stringify()": 232.42841204908888
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 768.2395644283122
  "fast-json-stringify": 0
  "JSON.stringify()": 169.6316262353998
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 59186.561954624776 | Failed | 5498.525073746312
object (hierarchical) | 3073.630438611943 | Failed | 1474.896965155489
object (recursive) | 2969.3858845096242 | Failed | 1157.122905027933
object (union) | 1112.1562952243128 | Failed | 745.3258304592484
array (hierarchical) | 46.10951008645534 | Failed | 36.53387185606756
array (recursive) | 123.52731167440199 | Failed | 107.4757813927984
array (union) | 190.79646017699113 | Failed | 218.32933800479438
ultimate union | 735.3469974829197 | Failed | 169.24995546053802


```mermaid
pie title stringify - object (simple)
  "typescript-json": 59186.561954624776
  "fast-json-stringify": 0
  "JSON.stringify()": 5498.525073746312
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 3073.630438611943
  "fast-json-stringify": 0
  "JSON.stringify()": 1474.896965155489
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 2969.3858845096242
  "fast-json-stringify": 0
  "JSON.stringify()": 1157.122905027933
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1112.1562952243128
  "fast-json-stringify": 0
  "JSON.stringify()": 745.3258304592484
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 46.10951008645534
  "fast-json-stringify": 0
  "JSON.stringify()": 36.53387185606756
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 123.52731167440199
  "fast-json-stringify": 0
  "JSON.stringify()": 107.4757813927984
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 190.79646017699113
  "fast-json-stringify": 0
  "JSON.stringify()": 218.32933800479438
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 735.3469974829197
  "fast-json-stringify": 0
  "JSON.stringify()": 169.24995546053802
```






