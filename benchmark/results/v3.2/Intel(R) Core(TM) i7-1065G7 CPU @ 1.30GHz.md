# Benchmark of `typescript-json`
> CPU: Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz
> Memory: 32,353 MB
> NodeJS version: v18.6.0


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 25284.204871060174 | 18875.59471365639
object (recursive) | 25379.805964786203 | 16644.584837545128
object (union) | 4064.4814615797955 | 1801.8231540565178
array (recursive) | 1560.2823704254133 | 1568.8612099644129
array (union) | 2563.599706744868 | 190.13062409288827
ultimate union | 3637.231503579952 | 28.697962798937116


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 25284.204871060174
  "typescript-is": 18875.59471365639
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 25379.805964786203
  "typescript-is": 16644.584837545128
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4064.4814615797955
  "typescript-is": 1801.8231540565178
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1560.2823704254133
  "typescript-is": 1568.8612099644129
```


```mermaid
pie title assert - array (union)
  "typescript-json": 2563.599706744868
  "typescript-is": 190.13062409288827
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 3637.231503579952
  "typescript-is": 28.697962798937116
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 86340.85075174185 | 38938.3773928897 | 63752.23011105043
object (recursive) | 56944.59885121363 | 35366.50926262259 | Failed
object (union, explicit) | 11061.057604942758 | Failed | 1014.199890770071
object (union, implicit) | 11864.874953340799 | Failed | Failed
array (recursive) | 4912.6984126984125 | 4145.702692733309 | Failed
array (union, explicit) | 5142.464246424643 | 842.6782798040283 | Failed
array (union, implicit) | 5624.860853432282 | 981.6176470588234 | Failed
ultimate union | 9393.769819063607 | 241.36715997181113 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 86340.85075174185
  "typescript-is": 38938.3773928897
  "ajv": 63752.23011105043
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 56944.59885121363
  "typescript-is": 35366.50926262259
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 11061.057604942758
  "typescript-is": 0
  "ajv": 1014.199890770071
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 11864.874953340799
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 4912.6984126984125
  "typescript-is": 4145.702692733309
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 5142.464246424643
  "typescript-is": 842.6782798040283
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 5624.860853432282
  "typescript-is": 981.6176470588234
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 9393.769819063607
  "typescript-is": 241.36715997181113
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 27839.28247870991 | 4.192139737991266 | 6276.671010984918
object (hierarchical) | 4453.808752025932 | 0.7319304666056725 | 1570.0356272267015
object (recursive) | 4476.6763848396495 | 37.770783188298466 | 1211.0395584176633
object (union) | 1710.0431965442765 | 0.7323324789454413 | 905.0216287380101
array (hierarchical) | 51.186250700541756 | 1.8518518518518516 | 30.115974560419005
array (recursive) | 203.598310996879 | 30.24679903507144 | 124.76962771839293
array (union) | 307.2543617998163 | 1.4944890715486643 | 254.03074615673043
ultimate union | 976.3085399449035 | Failed | 196.1295124674358


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 27839.28247870991
  "fast-json-stringify": 4.192139737991266
  "JSON.stringify()": 6276.671010984918
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 4453.808752025932
  "fast-json-stringify": 0.7319304666056725
  "JSON.stringify()": 1570.0356272267015
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4476.6763848396495
  "fast-json-stringify": 37.770783188298466
  "JSON.stringify()": 1211.0395584176633
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1710.0431965442765
  "fast-json-stringify": 0.7323324789454413
  "JSON.stringify()": 905.0216287380101
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 51.186250700541756
  "fast-json-stringify": 1.8518518518518516
  "JSON.stringify()": 30.115974560419005
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 203.598310996879
  "fast-json-stringify": 30.24679903507144
  "JSON.stringify()": 124.76962771839293
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 307.2543617998163
  "fast-json-stringify": 1.4944890715486643
  "JSON.stringify()": 254.03074615673043
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 976.3085399449035
  "fast-json-stringify": 0
  "JSON.stringify()": 196.1295124674358
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 28474.36599160737 | 25160.27372591392 | 6670.639424895952
object (hierarchical) | 4548.873546511628 | 4258.547403437443 | 1580.2118804388954
object (recursive) | 4485.152190051967 | 1221.656976744186 | 1256.395786305493
object (union) | 1740.1933953658092 | 1319.9121522693997 | 894.9115044247787
array (hierarchical) | 85.28823422440445 | 117.70157553290085 | 46.88672168042011
array (recursive) | 221.9340496480178 | 124.15555961292678 | 120.92515024585687
array (union) | 338.44448549787546 | 225.39149888143177 | 244.84536082474224
ultimate union | 1012.1479845389288 | Failed | 194.4648093841642


```mermaid
pie title stringify - object (simple)
  "typescript-json": 28474.36599160737
  "fast-json-stringify": 25160.27372591392
  "JSON.stringify()": 6670.639424895952
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 4548.873546511628
  "fast-json-stringify": 4258.547403437443
  "JSON.stringify()": 1580.2118804388954
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4485.152190051967
  "fast-json-stringify": 1221.656976744186
  "JSON.stringify()": 1256.395786305493
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1740.1933953658092
  "fast-json-stringify": 1319.9121522693997
  "JSON.stringify()": 894.9115044247787
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 85.28823422440445
  "fast-json-stringify": 117.70157553290085
  "JSON.stringify()": 46.88672168042011
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 221.9340496480178
  "fast-json-stringify": 124.15555961292678
  "JSON.stringify()": 120.92515024585687
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 338.44448549787546
  "fast-json-stringify": 225.39149888143177
  "JSON.stringify()": 244.84536082474224
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1012.1479845389288
  "fast-json-stringify": 0
  "JSON.stringify()": 194.4648093841642
```






