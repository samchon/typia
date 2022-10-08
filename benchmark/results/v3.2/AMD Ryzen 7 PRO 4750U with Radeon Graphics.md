# Benchmark of `typescript-json`
> CPU: AMD Ryzen 7 PRO 4750U with Radeon Graphics
> Memory: 7,261 MB
> NodeJS version: v16.15.1


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 16210.144927536234 | 17174.16520210896
object (recursive) | 26487.107623318385 | 20525.550100018187
object (union) | 4114.15607985481 | 1754.0175310445582
array (recursive) | 1559.5281975672688 | 1469.2942254812099
array (union) | 2555.95026642984 | 182.6086956521739
ultimate union | 3252.5477116916804 | 26.801561945331912


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 16210.144927536234
  "typescript-is": 17174.16520210896
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 26487.107623318385
  "typescript-is": 20525.550100018187
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4114.15607985481
  "typescript-is": 1754.0175310445582
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1559.5281975672688
  "typescript-is": 1469.2942254812099
```


```mermaid
pie title assert - array (union)
  "typescript-json": 2555.95026642984
  "typescript-is": 182.6086956521739
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 3252.5477116916804
  "typescript-is": 26.801561945331912
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 62153.382084095065 | 29569.33504304818 | 41294.37706725468
object (recursive) | 65350.14673514307 | 29010.04199379222 | Failed
object (union, explicit) | 10508.935083880378 | Failed | 1023.8756246529706
object (union, implicit) | 9661.63753449862 | Failed | Failed
array (recursive) | 5658.870097157251 | 3526.139764126034 | Failed
array (union, explicit) | 5674.060494958753 | 753.1227038941954 | Failed
array (union, implicit) | 5653.133110863922 | 809.7835970176396 | Failed
ultimate union | 7535.9342915811085 | 193.41489744512415 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 62153.382084095065
  "typescript-is": 29569.33504304818
  "ajv": 41294.37706725468
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 65350.14673514307
  "typescript-is": 29010.04199379222
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 10508.935083880378
  "typescript-is": 0
  "ajv": 1023.8756246529706
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 9661.63753449862
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 5658.870097157251
  "typescript-is": 3526.139764126034
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 5674.060494958753
  "typescript-is": 753.1227038941954
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 5653.133110863922
  "typescript-is": 809.7835970176396
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 7535.9342915811085
  "typescript-is": 193.41489744512415
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 28941.877521085444 | 4.326007959854646 | 7980.853391684902
object (hierarchical) | 3907.819225251076 | 1.099706744868035 | 2101.353892440767
object (recursive) | 4178.9861751152075 | 48.456501403180546 | 1686.130007558579
object (union) | 1596.969150279632 | 0.9137426900584794 | 1126.1620185922975
array (hierarchical) | 87.04379562043795 | 2.0572283523471104 | 67.01512040321074
array (recursive) | 172.22939332472802 | 38.26714801444043 | 158.84680610514414
array (union) | 265.3288740245262 | 1.4853323431117713 | 322.5988700564972
ultimate union | 1008.5392441860466 | Failed | 236.23511904761904


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 28941.877521085444
  "fast-json-stringify": 4.326007959854646
  "JSON.stringify()": 7980.853391684902
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 3907.819225251076
  "fast-json-stringify": 1.099706744868035
  "JSON.stringify()": 2101.353892440767
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4178.9861751152075
  "fast-json-stringify": 48.456501403180546
  "JSON.stringify()": 1686.130007558579
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1596.969150279632
  "fast-json-stringify": 0.9137426900584794
  "JSON.stringify()": 1126.1620185922975
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 87.04379562043795
  "fast-json-stringify": 2.0572283523471104
  "JSON.stringify()": 67.01512040321074
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 172.22939332472802
  "fast-json-stringify": 38.26714801444043
  "JSON.stringify()": 158.84680610514414
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 265.3288740245262
  "fast-json-stringify": 1.4853323431117713
  "JSON.stringify()": 322.5988700564972
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1008.5392441860466
  "fast-json-stringify": 0
  "JSON.stringify()": 236.23511904761904
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 25984.606926882905 | 23803.673094582184 | 7779.488130563797
object (hierarchical) | 3854.275092936803 | 3389.190166305134 | 2095.975817116947
object (recursive) | 4330.520909757887 | 1616.3475699558173 | 1685.220007521625
object (union) | 1617.0517642844347 | 1210.8782074448861 | 1105.530474040632
array (hierarchical) | 57.79302871591114 | 85.74007220216606 | 44.526901669758814
array (recursive) | 176.50253439536567 | 154.4912411479687 | 152.41430151124217
array (union) | 273.0007077140835 | 270.6726457399103 | 317.47518261846784
ultimate union | 1056.8202513203425 | Failed | 238.60689144127457


```mermaid
pie title stringify - object (simple)
  "typescript-json": 25984.606926882905
  "fast-json-stringify": 23803.673094582184
  "JSON.stringify()": 7779.488130563797
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 3854.275092936803
  "fast-json-stringify": 3389.190166305134
  "JSON.stringify()": 2095.975817116947
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4330.520909757887
  "fast-json-stringify": 1616.3475699558173
  "JSON.stringify()": 1685.220007521625
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1617.0517642844347
  "fast-json-stringify": 1210.8782074448861
  "JSON.stringify()": 1105.530474040632
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 57.79302871591114
  "fast-json-stringify": 85.74007220216606
  "JSON.stringify()": 44.526901669758814
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 176.50253439536567
  "fast-json-stringify": 154.4912411479687
  "JSON.stringify()": 152.41430151124217
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 273.0007077140835
  "fast-json-stringify": 270.6726457399103
  "JSON.stringify()": 317.47518261846784
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1056.8202513203425
  "fast-json-stringify": 0
  "JSON.stringify()": 238.60689144127457
```






