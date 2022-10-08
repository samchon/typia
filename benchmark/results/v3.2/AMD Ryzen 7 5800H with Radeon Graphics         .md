# Benchmark of `typescript-json`
> CPU: AMD Ryzen 7 5800H with Radeon Graphics         
> Memory: 64,928 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 30021.739130434784 | 24094.295058139538
object (recursive) | 36915.63823908639 | 23599.078341013825
object (union) | 4856.237180682453 | 2344.896841336498
array (recursive) | 2294.4830105955425 | 1639.112542494185
array (union) | 3619.923511200146 | 239.20204978038066
ultimate union | 4489.146431199411 | 34.827647794248975


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 30021.739130434784
  "typescript-is": 24094.295058139538
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 36915.63823908639
  "typescript-is": 23599.078341013825
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4856.237180682453
  "typescript-is": 2344.896841336498
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 2294.4830105955425
  "typescript-is": 1639.112542494185
```


```mermaid
pie title assert - array (union)
  "typescript-json": 3619.923511200146
  "typescript-is": 239.20204978038066
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 4489.146431199411
  "typescript-is": 34.827647794248975
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 105784.54920236602 | 53072.89336316182 | 86893.56746102848
object (recursive) | 81994.98514115899 | 46399.36638091689 | Failed
object (union, explicit) | 16393.73271889401 | Failed | 1286.504424778761
object (union, implicit) | 18625.22170982618 | Failed | Failed
array (recursive) | 7390.942028985508 | 4564.80117820324 | Failed
array (union, explicit) | 8147.80854575463 | 1055.886475122635 | Failed
array (union, implicit) | 6602.001819836215 | 1175.0543084721216 | Failed
ultimate union | 11384.927964536388 | 291.3399857448325 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 105784.54920236602
  "typescript-is": 53072.89336316182
  "ajv": 86893.56746102848
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 81994.98514115899
  "typescript-is": 46399.36638091689
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 16393.73271889401
  "typescript-is": 0
  "ajv": 1286.504424778761
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 18625.22170982618
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 7390.942028985508
  "typescript-is": 4564.80117820324
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 8147.80854575463
  "typescript-is": 1055.886475122635
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 6602.001819836215
  "typescript-is": 1175.0543084721216
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 11384.927964536388
  "typescript-is": 291.3399857448325
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 154509.33572710952 | 5.2328623757195185 | 4243.197912784197
object (hierarchical) | 4875.0696120289585 | 1.4676206200697122 | 1162.8918282297518
object (recursive) | 5343.8310485364955 | 52.09111277072442 | 891.0817352448333
object (union) | 2117.3243673686075 | 0.9179364787956673 | 517.6999438097022
array (hierarchical) | 184.28184281842817 | 2.782931354359926 | 50.00940026320737
array (recursive) | 260.49337260677464 | 32.451697617707744 | 73.20261437908496
array (union) | 395.7393031233075 | 2.5925925925925926 | 154.3336439888164
ultimate union | 1298.5685071574644 | Failed | 144.97096834613222


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 154509.33572710952
  "fast-json-stringify": 5.2328623757195185
  "JSON.stringify()": 4243.197912784197
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 4875.0696120289585
  "fast-json-stringify": 1.4676206200697122
  "JSON.stringify()": 1162.8918282297518
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 5343.8310485364955
  "fast-json-stringify": 52.09111277072442
  "JSON.stringify()": 891.0817352448333
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 2117.3243673686075
  "fast-json-stringify": 0.9179364787956673
  "JSON.stringify()": 517.6999438097022
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 184.28184281842817
  "fast-json-stringify": 2.782931354359926
  "JSON.stringify()": 50.00940026320737
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 260.49337260677464
  "fast-json-stringify": 32.451697617707744
  "JSON.stringify()": 73.20261437908496
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 395.7393031233075
  "fast-json-stringify": 2.5925925925925926
  "JSON.stringify()": 154.3336439888164
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1298.5685071574644
  "fast-json-stringify": 0
  "JSON.stringify()": 144.97096834613222
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 153391.97361187465 | 33087.7256976108 | 4346.0526315789475
object (hierarchical) | 5069.582504970179 | 4721.505180876204 | 1224.615961034095
object (recursive) | 5864.719017491627 | 907.3656520105224 | 880.3836409699602
object (union) | 2181.2339331619537 | 1534.6062052505965 | 495.5703211517165
array (hierarchical) | 176.73130193905817 | 239.06335088037756 | 44.862248696947134
array (recursive) | 254.04114621601764 | 69.9815837937385 | 73.47941065357008
array (union) | 393.27296248382925 | 147.5225225225225 | 148.4216355916559
ultimate union | 1247.323340471092 | Failed | 132.33458177278402


```mermaid
pie title stringify - object (simple)
  "typescript-json": 153391.97361187465
  "fast-json-stringify": 33087.7256976108
  "JSON.stringify()": 4346.0526315789475
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 5069.582504970179
  "fast-json-stringify": 4721.505180876204
  "JSON.stringify()": 1224.615961034095
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 5864.719017491627
  "fast-json-stringify": 907.3656520105224
  "JSON.stringify()": 880.3836409699602
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 2181.2339331619537
  "fast-json-stringify": 1534.6062052505965
  "JSON.stringify()": 495.5703211517165
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 176.73130193905817
  "fast-json-stringify": 239.06335088037756
  "JSON.stringify()": 44.862248696947134
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 254.04114621601764
  "fast-json-stringify": 69.9815837937385
  "JSON.stringify()": 73.47941065357008
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 393.27296248382925
  "fast-json-stringify": 147.5225225225225
  "JSON.stringify()": 148.4216355916559
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1247.323340471092
  "fast-json-stringify": 0
  "JSON.stringify()": 132.33458177278402
```






