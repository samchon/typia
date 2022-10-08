# Benchmark of `typescript-json`
> CPU: Intel(R) Core(TM) i7-3770S CPU @ 3.10GHz
> Memory: 7,824 MB
> NodeJS version: v18.3.0


## assert
 Components | typescript-json | typescript-is
------------|-----------------|---------------
object (hierarchical) | 12869.771528998243 | 11749.604082350872
object (recursive) | 17855.403909996312 | 15989.98360954289
object (union) | 2693.979009390536 | 1282.7027027027027
array (recursive) | 850.8787823881138 | 1124.1902646677772
array (union) | 1862.326768781911 | 120.13627398242782
ultimate union | 2525.0763976271796 | 16.51730803022316


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 12869.771528998243
  "typescript-is": 11749.604082350872
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 17855.403909996312
  "typescript-is": 15989.98360954289
```


```mermaid
pie title assert - object (union)
  "typescript-json": 2693.979009390536
  "typescript-is": 1282.7027027027027
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 850.8787823881138
  "typescript-is": 1124.1902646677772
```


```mermaid
pie title assert - array (union)
  "typescript-json": 1862.326768781911
  "typescript-is": 120.13627398242782
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 2525.0763976271796
  "typescript-is": 16.51730803022316
```






## is
 Components | typescript-json | typescript-is | ajv
------------|-----------------|---------------|-----
object (hierarchical) | 47773.41227125942 | 23842.806887613406 | 27427.868852459014
object (recursive) | 39926.639561605094 | 22451.19539816646 | Failed
object (union, explicit) | 6631.98424068768 | Failed | 801.6071428571429
object (union, implicit) | 5185.65248738284 | Failed | Failed
array (recursive) | 3006.1294393365783 | 2526.172794783554 | Failed
array (union, explicit) | 3497.5836763916236 | 562.2974432841195 | Failed
array (union, implicit) | 3815.0672315343522 | 588.6409000181455 | Failed
ultimate union | 5349.971746091543 | 140.38221110912662 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 47773.41227125942
  "typescript-is": 23842.806887613406
  "ajv": 27427.868852459014
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 39926.639561605094
  "typescript-is": 22451.19539816646
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 6631.98424068768
  "typescript-is": 0
  "ajv": 801.6071428571429
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 5185.65248738284
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 3006.1294393365783
  "typescript-is": 2526.172794783554
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 3497.5836763916236
  "typescript-is": 562.2974432841195
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 3815.0672315343522
  "typescript-is": 588.6409000181455
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 5349.971746091543
  "typescript-is": 140.38221110912662
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify()
------------|-----------------|---------------------|------------------
object (simple) | 19756.7519858782 | 3.368794326241135 | 7174.801156905279
object (hierarchical) | 3292.410311880296 | 0.7377351530800443 | 1823.976283120252
object (recursive) | 3191.4191419141916 | 22.580645161290324 | 1381.6766890696852
object (union) | 1066.5477252453165 | 0.53475935828877 | 929.6663660955816
array (hierarchical) | 64.1750227894257 | 1.4727540500736376 | 56.405693950177934
array (recursive) | 123.37192474674386 | 21.033210332103323 | 131.1356638290165
array (union) | 198.30273640457222 | 1.1109053878911312 | 259.75653419262443
ultimate union | 805.9948510481795 | Failed | 195.15720997470186


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 19756.7519858782
  "fast-json-stringify": 3.368794326241135
  "JSON.stringify()": 7174.801156905279
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 3292.410311880296
  "fast-json-stringify": 0.7377351530800443
  "JSON.stringify()": 1823.976283120252
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 3191.4191419141916
  "fast-json-stringify": 22.580645161290324
  "JSON.stringify()": 1381.6766890696852
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1066.5477252453165
  "fast-json-stringify": 0.53475935828877
  "JSON.stringify()": 929.6663660955816
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 64.1750227894257
  "fast-json-stringify": 1.4727540500736376
  "JSON.stringify()": 56.405693950177934
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 123.37192474674386
  "fast-json-stringify": 21.033210332103323
  "JSON.stringify()": 131.1356638290165
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 198.30273640457222
  "fast-json-stringify": 1.1109053878911312
  "JSON.stringify()": 259.75653419262443
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 805.9948510481795
  "fast-json-stringify": 0
  "JSON.stringify()": 195.15720997470186
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify()
------------|-----------------|---------------------|------------------
object (simple) | 20010.721944245888 | 18259.34664246824 | 7112.599565532223
object (hierarchical) | 3272.727272727273 | 3008.345428156749 | 1753.1922655964975
object (recursive) | 3265.1025309440233 | 1466.3153933007152 | 1431.918008784773
object (union) | 1193.0666666666666 | 926.6353451391399 | 924.8954355337335
array (hierarchical) | 36.34062556499729 | 56.87115420473615 | 34.589477516839615
array (recursive) | 136.917025660236 | 133.48082595870204 | 134.7517730496454
array (union) | 210.943124550036 | 249.39331715512412 | 263.003663003663
ultimate union | 843.9413620337724 | Failed | 199.1150442477876


```mermaid
pie title stringify - object (simple)
  "typescript-json": 20010.721944245888
  "fast-json-stringify": 18259.34664246824
  "JSON.stringify()": 7112.599565532223
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 3272.727272727273
  "fast-json-stringify": 3008.345428156749
  "JSON.stringify()": 1753.1922655964975
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 3265.1025309440233
  "fast-json-stringify": 1466.3153933007152
  "JSON.stringify()": 1431.918008784773
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1193.0666666666666
  "fast-json-stringify": 926.6353451391399
  "JSON.stringify()": 924.8954355337335
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 36.34062556499729
  "fast-json-stringify": 56.87115420473615
  "JSON.stringify()": 34.589477516839615
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 136.917025660236
  "fast-json-stringify": 133.48082595870204
  "JSON.stringify()": 134.7517730496454
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 210.943124550036
  "fast-json-stringify": 249.39331715512412
  "JSON.stringify()": 263.003663003663
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 843.9413620337724
  "fast-json-stringify": 0
  "JSON.stringify()": 199.1150442477876
```
