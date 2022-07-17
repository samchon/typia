# Benchmark of `typescript-json`
> CPU: AMD Ryzen 9 5900X 12-Core Processor            
> Memory: 32.689 MB
> NodeJS version: v16.13.0


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 33147.57750139225 | 26319.115598885794
object (recursive) | 41774.05466117559 | 26577.692867540027
object (union) | 6341.441441441441 | 2523.38811630847
array (recursive) | 1821.1870773854246 | 1814.9819494584838
array (union) | 4401.155207751071 | 258.98886658149297
ultimate union | 5141.376060320453 | 38.74308159257276


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 33147.57750139225
  "typescript-is": 26319.115598885794
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 41774.05466117559
  "typescript-is": 26577.692867540027
```


```mermaid
pie title assert - object (union)
  "typescript-json": 6341.441441441441
  "typescript-is": 2523.38811630847
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1821.1870773854246
  "typescript-is": 1814.9819494584838
```


```mermaid
pie title assert - array (union)
  "typescript-json": 4401.155207751071
  "typescript-is": 258.98886658149297
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 5141.376060320453
  "typescript-is": 38.74308159257276
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 131023.92857142858 | 61120.97524660338 | 94865.34909493905
object (recursive) | 95736.79400475233 | 53873.66515837104 | Failed
object (union, explicit) | 18922.132649322095 | Failed | 1327.558492587962
object (union, implicit) | 17951.982927263027 | Failed | Failed
array (recursive) | 7899.344320396952 | 4901.0061085159905 | Failed
array (union, explicit) | 9057.671381936887 | 1219.3362193362195 | Failed
array (union, implicit) | 8239.114253814663 | 1340.0623967700496 | Failed
ultimate union | 12768.723252496435 | 324.68220338983053 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 131023.92857142858
  "typescript-is": 61120.97524660338
  "ajv": 94865.34909493905
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 95736.79400475233
  "typescript-is": 53873.66515837104
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 18922.132649322095
  "typescript-is": 0
  "ajv": 1327.558492587962
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 17951.982927263027
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 7899.344320396952
  "typescript-is": 4901.0061085159905
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 9057.671381936887
  "typescript-is": 1219.3362193362195
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 8239.114253814663
  "typescript-is": 1340.0623967700496
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 12768.723252496435
  "typescript-is": 324.68220338983053
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 53475.964174739536 | 6.171751013930524 | 6628.358208955224
object (hierarchical) | 5416.3003663003665 | 1.4681592952835383 | 1774.6291365538227
object (recursive) | 6296.113744075829 | 58.34092980856882 | 1258.943163246777
object (union) | 2500.7246376811595 | 1.0891268832819023 | 952.542372881356
array (hierarchical) | 552.3584046621745 | 3.0103480714957667 | 231.00246352093993
array (recursive) | 310.70640176600443 | 45.565806816042176 | 143.98793818318885
array (union) | 453.9236861051116 | 2.2115739034279396 | 287.33031674208144
ultimate union | 1449.1126403477 | Failed | 221.26331252295265


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 53475.964174739536
  "fast-json-stringify": 6.171751013930524
  "JSON.stringify()": 6628.358208955224
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 5416.3003663003665
  "fast-json-stringify": 1.4681592952835383
  "JSON.stringify()": 1774.6291365538227
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 6296.113744075829
  "fast-json-stringify": 58.34092980856882
  "JSON.stringify()": 1258.943163246777
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 2500.7246376811595
  "fast-json-stringify": 1.0891268832819023
  "JSON.stringify()": 952.542372881356
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 552.3584046621745
  "fast-json-stringify": 3.0103480714957667
  "JSON.stringify()": 231.00246352093993
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 310.70640176600443
  "fast-json-stringify": 45.565806816042176
  "JSON.stringify()": 143.98793818318885
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 453.9236861051116
  "fast-json-stringify": 2.2115739034279396
  "JSON.stringify()": 287.33031674208144
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1449.1126403477
  "fast-json-stringify": 0
  "JSON.stringify()": 221.26331252295265
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 52454.880974349515 | 37678.62426035503 | 6402.4591668196
object (hierarchical) | 5988.25284355771 | 5467.411204686928 | 1737.873134328358
object (recursive) | 6758.704151927015 | 1289.8148148148148 | 1260.4072805910973
object (union) | 2608.5840058694057 | 1890.5884470037788 | 943.2346919784105
array (hierarchical) | 293.5745937961595 | 414.0292430131409 | 121.34916148483134
array (recursive) | 311.65712174394974 | 139.92673992673994 | 140.0549954170486
array (union) | 458.53747051351843 | 249.77093641194796 | 277.55474452554745
ultimate union | 1461.9187110948371 | Failed | 218.29710144927537


```mermaid
pie title stringify - object (simple)
  "typescript-json": 52454.880974349515
  "fast-json-stringify": 37678.62426035503
  "JSON.stringify()": 6402.4591668196
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 5988.25284355771
  "fast-json-stringify": 5467.411204686928
  "JSON.stringify()": 1737.873134328358
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 6758.704151927015
  "fast-json-stringify": 1289.8148148148148
  "JSON.stringify()": 1260.4072805910973
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 2608.5840058694057
  "fast-json-stringify": 1890.5884470037788
  "JSON.stringify()": 943.2346919784105
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 293.5745937961595
  "fast-json-stringify": 414.0292430131409
  "JSON.stringify()": 121.34916148483134
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 311.65712174394974
  "fast-json-stringify": 139.92673992673994
  "JSON.stringify()": 140.0549954170486
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 458.53747051351843
  "fast-json-stringify": 249.77093641194796
  "JSON.stringify()": 277.55474452554745
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1461.9187110948371
  "fast-json-stringify": 0
  "JSON.stringify()": 218.29710144927537
```






