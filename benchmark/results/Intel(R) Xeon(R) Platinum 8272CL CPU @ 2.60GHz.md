# Benchmark of `typescript-json`
> CPU: Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
> Memory: 7,958 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 11612.716763005781 | 11367.662753468518
object (recursive) | 15037.725916827514 | 13896.145209580838
object (union) | 2490.4059040590405 | 1206.5158371040723
array (recursive) | 1122.0232601070704 | 906.9514844315713
array (union) | 1867.3469387755104 | 122.77019937040923
ultimate union | 2208.7143625605163 | 18.608852755194217


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 11612.716763005781
  "typescript-is": 11367.662753468518
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 15037.725916827514
  "typescript-is": 13896.145209580838
```


```mermaid
pie title assert - object (union)
  "typescript-json": 2490.4059040590405
  "typescript-is": 1206.5158371040723
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1122.0232601070704
  "typescript-is": 906.9514844315713
```


```mermaid
pie title assert - array (union)
  "typescript-json": 1867.3469387755104
  "typescript-is": 122.77019937040923
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 2208.7143625605163
  "typescript-is": 18.608852755194217
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 43250.584637524735 | 19299.225364799135 | 36596.58678286129
object (recursive) | 36433.87513852974 | 20175.771971496437 | Failed
object (union, explicit) | 6163.471971066908 | Failed | 595.901492000719
object (union, implicit) | 6363.014899211218 | Failed | Failed
array (recursive) | 3419.4612424409015 | 2101.5367727771677 | Failed
array (union, explicit) | 3444.8385952465414 | 643.3891992551211 | Failed
array (union, implicit) | 4115.433557534993 | 622.3581757508342 | Failed
ultimate union | 6700.183823529412 | 160.3442219880576 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 43250.584637524735
  "typescript-is": 19299.225364799135
  "ajv": 36596.58678286129
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 36433.87513852974
  "typescript-is": 20175.771971496437
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 6163.471971066908
  "typescript-is": 0
  "ajv": 595.901492000719
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 6363.014899211218
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 3419.4612424409015
  "typescript-is": 2101.5367727771677
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 3444.8385952465414
  "typescript-is": 643.3891992551211
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 4115.433557534993
  "typescript-is": 622.3581757508342
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 6700.183823529412
  "typescript-is": 160.3442219880576
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 18753.86012715713 | 3.0406009658379536 | 7110.48794167134
object (hierarchical) | 3396.158028271113 | 0.8925383791503034 | 1725.6198347107438
object (recursive) | 2880.835603996367 | 32.18005952380952 | 1421.4813411630992
object (union) | 1163.5808017256877 | 0.535236396074933 | 943.2176656151419
array (hierarchical) | 72.7104532839963 | 1.4875418371141689 | 68.67924528301887
array (recursive) | 134.4770337576093 | 26.930320150659135 | 133.45864661654136
array (union) | 204.22917043195372 | 1.4825796886582654 | 258.13734713076195
ultimate union | 842.684466895183 | Failed | 206.9158878504673


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 18753.86012715713
  "fast-json-stringify": 3.0406009658379536
  "JSON.stringify()": 7110.48794167134
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 3396.158028271113
  "fast-json-stringify": 0.8925383791503034
  "JSON.stringify()": 1725.6198347107438
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 2880.835603996367
  "fast-json-stringify": 32.18005952380952
  "JSON.stringify()": 1421.4813411630992
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1163.5808017256877
  "fast-json-stringify": 0.535236396074933
  "JSON.stringify()": 943.2176656151419
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 72.7104532839963
  "fast-json-stringify": 1.4875418371141689
  "JSON.stringify()": 68.67924528301887
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 134.4770337576093
  "fast-json-stringify": 26.930320150659135
  "JSON.stringify()": 133.45864661654136
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 204.22917043195372
  "fast-json-stringify": 1.4825796886582654
  "JSON.stringify()": 258.13734713076195
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 842.684466895183
  "fast-json-stringify": 0
  "JSON.stringify()": 206.9158878504673
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 16658.762702799075 | 15841.628959276017 | 7083.00469483568
object (hierarchical) | 3382.057372556185 | 3277.676620538966 | 1760.2996254681648
object (recursive) | 2922.046955245781 | 1415.2590624406907 | 1321.025273346478
object (union) | 1190.5368516833485 | 920.323113640536 | 937.2585096596137
array (hierarchical) | 66.48451730418944 | 89.27298645759087 | 57.39634256744523
array (recursive) | 139.63797561876618 | 131.50583441378032 | 128.78101793153414
array (union) | 212.70866989768444 | 230.75506445672193 | 252.72693658716955
ultimate union | 871.0332103321033 | Failed | 209.09261694533157


```mermaid
pie title stringify - object (simple)
  "typescript-json": 16658.762702799075
  "fast-json-stringify": 15841.628959276017
  "JSON.stringify()": 7083.00469483568
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 3382.057372556185
  "fast-json-stringify": 3277.676620538966
  "JSON.stringify()": 1760.2996254681648
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 2922.046955245781
  "fast-json-stringify": 1415.2590624406907
  "JSON.stringify()": 1321.025273346478
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1190.5368516833485
  "fast-json-stringify": 920.323113640536
  "JSON.stringify()": 937.2585096596137
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 66.48451730418944
  "fast-json-stringify": 89.27298645759087
  "JSON.stringify()": 57.39634256744523
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 139.63797561876618
  "fast-json-stringify": 131.50583441378032
  "JSON.stringify()": 128.78101793153414
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 212.70866989768444
  "fast-json-stringify": 230.75506445672193
  "JSON.stringify()": 252.72693658716955
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 871.0332103321033
  "fast-json-stringify": 0
  "JSON.stringify()": 209.09261694533157
```






