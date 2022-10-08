# Benchmark of `typescript-json`
> CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> Memory: 16,218 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 26080.555555555555 | 20437.693851486954
object (recursive) | 29691.280148423008 | 24207.682642254535
object (union) | 4314.845323082555 | 2015.873015873016
array (recursive) | 1324.2144177449168 | 1905.7905245961153
array (union) | 3135.1794498087083 | 224.3233222098628
ultimate union | 4272.9964834351285 | 33.798283261802574


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 26080.555555555555
  "typescript-is": 20437.693851486954
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 29691.280148423008
  "typescript-is": 24207.682642254535
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4314.845323082555
  "typescript-is": 2015.873015873016
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1324.2144177449168
  "typescript-is": 1905.7905245961153
```


```mermaid
pie title assert - array (union)
  "typescript-json": 3135.1794498087083
  "typescript-is": 224.3233222098628
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 4272.9964834351285
  "typescript-is": 33.798283261802574
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 98074.61294534602 | 47557.65699596034 | 80113.61141602634
object (recursive) | 68618.21493624772 | 46628.84333821376 | Failed
object (union, explicit) | 12964.272890484739 | Failed | 1226.6423357664232
object (union, implicit) | 13008.15660685155 | Failed | Failed
array (recursive) | 5810.765815760266 | 4591.751453488372 | Failed
array (union, explicit) | 5777.351598173516 | 1081.1814973063347 | Failed
array (union, implicit) | 6154.62962962963 | 1164.1954969796814 | Failed
ultimate union | 7466.371844481298 | 290.8622908622909 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 98074.61294534602
  "typescript-is": 47557.65699596034
  "ajv": 80113.61141602634
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 68618.21493624772
  "typescript-is": 46628.84333821376
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 12964.272890484739
  "typescript-is": 0
  "ajv": 1226.6423357664232
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 13008.15660685155
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 5810.765815760266
  "typescript-is": 4591.751453488372
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 5777.351598173516
  "typescript-is": 1081.1814973063347
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 6154.62962962963
  "typescript-is": 1164.1954969796814
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 7466.371844481298
  "typescript-is": 290.8622908622909
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 31275.538894095596 | 5.153723120668207 | 6807.342851844985
object (hierarchical) | 5283.6208495640885 | 1.460653642505021 | 1682.756079587325
object (recursive) | 5138.675448225393 | 45.12105649303008 | 1389.3755824790308
object (union) | 1996.6923925027563 | 0.9074410163339384 | 989.6265560165975
array (hierarchical) | 94.33962264150944 | 2.4344569288389515 | 51.11111111111111
array (recursive) | 240.3881362138411 | 35.244704163623084 | 142.05397301349325
array (union) | 366.4353087738032 | 2.605620696072957 | 278.11207220759684
ultimate union | 1126.7148014440434 | Failed | 223.8286969253294


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 31275.538894095596
  "fast-json-stringify": 5.153723120668207
  "JSON.stringify()": 6807.342851844985
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 5283.6208495640885
  "fast-json-stringify": 1.460653642505021
  "JSON.stringify()": 1682.756079587325
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 5138.675448225393
  "fast-json-stringify": 45.12105649303008
  "JSON.stringify()": 1389.3755824790308
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1996.6923925027563
  "fast-json-stringify": 0.9074410163339384
  "JSON.stringify()": 989.6265560165975
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 94.33962264150944
  "fast-json-stringify": 2.4344569288389515
  "JSON.stringify()": 51.11111111111111
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 240.3881362138411
  "fast-json-stringify": 35.244704163623084
  "JSON.stringify()": 142.05397301349325
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 366.4353087738032
  "fast-json-stringify": 2.605620696072957
  "JSON.stringify()": 278.11207220759684
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1126.7148014440434
  "fast-json-stringify": 0
  "JSON.stringify()": 223.8286969253294
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 33596.66357738647 | 32368.440709617178 | 6984.159145330632
object (hierarchical) | 5293.494423791822 | 5039.689865239063 | 1738.5152517456818
object (recursive) | 5146.502662015789 | 1398.959881129272 | 1401.264410561547
object (union) | 1974.7958821441248 | 1361.2334801762113 | 1014.5971563981042
array (hierarchical) | 89.89176297926987 | 125.16010978957 | 48.525569242254576
array (recursive) | 259.7235023041475 | 141.2502304997234 | 138.24383164005806
array (union) | 386.6305329719964 | 251.28487518355357 | 282.4753763241033
ultimate union | 1161.482820976492 | Failed | 226.83061112130667


```mermaid
pie title stringify - object (simple)
  "typescript-json": 33596.66357738647
  "fast-json-stringify": 32368.440709617178
  "JSON.stringify()": 6984.159145330632
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 5293.494423791822
  "fast-json-stringify": 5039.689865239063
  "JSON.stringify()": 1738.5152517456818
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 5146.502662015789
  "fast-json-stringify": 1398.959881129272
  "JSON.stringify()": 1401.264410561547
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1974.7958821441248
  "fast-json-stringify": 1361.2334801762113
  "JSON.stringify()": 1014.5971563981042
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 89.89176297926987
  "fast-json-stringify": 125.16010978957
  "JSON.stringify()": 48.525569242254576
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 259.7235023041475
  "fast-json-stringify": 141.2502304997234
  "JSON.stringify()": 138.24383164005806
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 386.6305329719964
  "fast-json-stringify": 251.28487518355357
  "JSON.stringify()": 282.4753763241033
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1161.482820976492
  "fast-json-stringify": 0
  "JSON.stringify()": 226.83061112130667
```






