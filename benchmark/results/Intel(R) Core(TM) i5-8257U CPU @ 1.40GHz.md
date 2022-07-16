# Benchmark of `typescript-json`
> CPU: Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz
> Memory: 8,192 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 17348.655523255817 | 14245.574057843996
object (recursive) | 19268.781302170282 | 14645.538243626062
object (union) | 3356.957809030348 | 1317.1567743099404
array (recursive) | 940.59955588453 | 916.7839549612949
array (union) | 2132.4955116696588 | 135.94554819720383
ultimate union | 2841.7790740065625 | 19.38906164258277


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 17348.655523255817
  "typescript-is": 14245.574057843996
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 19268.781302170282
  "typescript-is": 14645.538243626062
```


```mermaid
pie title assert - object (union)
  "typescript-json": 3356.957809030348
  "typescript-is": 1317.1567743099404
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 940.59955588453
  "typescript-is": 916.7839549612949
```


```mermaid
pie title assert - array (union)
  "typescript-json": 2132.4955116696588
  "typescript-is": 135.94554819720383
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 2841.7790740065625
  "typescript-is": 19.38906164258277
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 59616.36263128801 | 28875.486381322957 | 44026.89756816507
object (recursive) | 47102.635486265775 | 24232.28634039445 | Failed
object (union, explicit) | 8492.103830096206 | Failed | 890.286771507863
object (union, implicit) | 5758.96304467733 | Failed | Failed
array (recursive) | 3779.2857142857147 | 2338.6175115207375 | Failed
array (union, explicit) | 4538.787543762668 | 661.2266857962697 | Failed
array (union, implicit) | 4396.095363243852 | 757.1867655035256 | Failed
ultimate union | 7469.04806433514 | 211.3221464134243 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 59616.36263128801
  "typescript-is": 28875.486381322957
  "ajv": 44026.89756816507
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 47102.635486265775
  "typescript-is": 24232.28634039445
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 8492.103830096206
  "typescript-is": 0
  "ajv": 890.286771507863
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 5758.96304467733
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 3779.2857142857147
  "typescript-is": 2338.6175115207375
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 4538.787543762668
  "typescript-is": 661.2266857962697
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 4396.095363243852
  "typescript-is": 757.1867655035256
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 7469.04806433514
  "typescript-is": 211.3221464134243
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 27998.22380106572 | 4.335009537020981 | 6934.306569343065
object (hierarchical) | 4208.59125867567 | 0.8844861135680171 | 1740.9250046065968
object (recursive) | 4182.406209573092 | 38.53918150119288 | 1423.301680058437
object (union) | 1563.77781798444 | 0.7233273056057866 | 1012.8842260261366
array (hierarchical) | 107.73085182534001 | 2.0484171322160147 | 76.55677655677655
array (recursive) | 204.74943904263276 | 31.819017840720985 | 147.47736093143598
array (union) | 285.7402031930334 | 1.479563528759016 | 283.83321141185075
ultimate union | 1122.550831792976 | Failed | 221.2581344902386


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 27998.22380106572
  "fast-json-stringify": 4.335009537020981
  "JSON.stringify()": 6934.306569343065
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 4208.59125867567
  "fast-json-stringify": 0.8844861135680171
  "JSON.stringify()": 1740.9250046065968
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4182.406209573092
  "fast-json-stringify": 38.53918150119288
  "JSON.stringify()": 1423.301680058437
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1563.77781798444
  "fast-json-stringify": 0.7233273056057866
  "JSON.stringify()": 1012.8842260261366
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 107.73085182534001
  "fast-json-stringify": 2.0484171322160147
  "JSON.stringify()": 76.55677655677655
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 204.74943904263276
  "fast-json-stringify": 31.819017840720985
  "JSON.stringify()": 147.47736093143598
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 285.7402031930334
  "fast-json-stringify": 1.479563528759016
  "JSON.stringify()": 283.83321141185075
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1122.550831792976
  "fast-json-stringify": 0
  "JSON.stringify()": 221.2581344902386
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 27436.282693377852 | 23095.52017771196 | 6954.653068657804
object (hierarchical) | 4407.936213610235 | 4213.942307692308 | 1728.8823312430839
object (recursive) | 4150.265713762141 | 1460.0411753696426 | 1444.6694899650156
object (union) | 1563.7497706842782 | 1154.3513957307061 | 1018.9477557027226
array (hierarchical) | 176.15176151761517 | 231.57305467437956 | 118.51851851851852
array (recursive) | 203.81581361218127 | 147.33716830580812 | 144.95379597753217
array (union) | 309.5924990984493 | 251.82481751824815 | 283.17298965329456
ultimate union | 1097.4014174086863 | Failed | 223.433242506812


```mermaid
pie title stringify - object (simple)
  "typescript-json": 27436.282693377852
  "fast-json-stringify": 23095.52017771196
  "JSON.stringify()": 6954.653068657804
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 4407.936213610235
  "fast-json-stringify": 4213.942307692308
  "JSON.stringify()": 1728.8823312430839
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4150.265713762141
  "fast-json-stringify": 1460.0411753696426
  "JSON.stringify()": 1444.6694899650156
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1563.7497706842782
  "fast-json-stringify": 1154.3513957307061
  "JSON.stringify()": 1018.9477557027226
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 176.15176151761517
  "fast-json-stringify": 231.57305467437956
  "JSON.stringify()": 118.51851851851852
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 203.81581361218127
  "fast-json-stringify": 147.33716830580812
  "JSON.stringify()": 144.95379597753217
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 309.5924990984493
  "fast-json-stringify": 251.82481751824815
  "JSON.stringify()": 283.17298965329456
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1097.4014174086863
  "fast-json-stringify": 0
  "JSON.stringify()": 223.433242506812
```






