# Benchmark of `typescript-json`
> CPU: Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz
> Memory: 16,384 MB
> NodeJS version: v16.13.1


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 20381.559497413156 | 17561.0298203371
object (recursive) | 22937.40822320117 | 18154.50338198647
object (union) | 3871.380846325167 | 1681.9666182873732
array (recursive) | 1314.538419016031 | 1429.2902066486972
array (union) | 2514.695210449928 | 164.98440080748762
ultimate union | 3551.8063451311205 | 28.451577603501736


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 20381.559497413156
  "typescript-is": 17561.0298203371
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 22937.40822320117
  "typescript-is": 18154.50338198647
```


```mermaid
pie title assert - object (union)
  "typescript-json": 3871.380846325167
  "typescript-is": 1681.9666182873732
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1314.538419016031
  "typescript-is": 1429.2902066486972
```


```mermaid
pie title assert - array (union)
  "typescript-json": 2514.695210449928
  "typescript-is": 164.98440080748762
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 3551.8063451311205
  "typescript-is": 28.451577603501736
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 83919.20458616983 | 36050.327034883725 | 51995.30092174227
object (recursive) | 58264.33236574746 | 34173.913043478264 | Failed
object (union, explicit) | 10905.17400110477 | Failed | 933.7006427915518
object (union, implicit) | 14996.851268753473 | Failed | Failed
array (recursive) | 5400.908265213442 | 3486.1566484517302 | Failed
array (union, explicit) | 5613.381555153706 | 808.3049937354574 | Failed
array (union, implicit) | 5177.715355805243 | 840.6301520424987 | Failed
ultimate union | 10022.887979158913 | 216.13311629589438 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 83919.20458616983
  "typescript-is": 36050.327034883725
  "ajv": 51995.30092174227
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 58264.33236574746
  "typescript-is": 34173.913043478264
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 10905.17400110477
  "typescript-is": 0
  "ajv": 933.7006427915518
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 14996.851268753473
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 5400.908265213442
  "typescript-is": 3486.1566484517302
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 5613.381555153706
  "typescript-is": 808.3049937354574
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 5177.715355805243
  "typescript-is": 840.6301520424987
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 10022.887979158913
  "typescript-is": 216.13311629589438
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 27904.17282127031 | 4.072959093323889 | 7228.650137741047
object (hierarchical) | 3954.686078252957 | 0.7159477358152855 | 1799.1046446558478
object (recursive) | 4358.665430954588 | 40.68559556786704 | 1477.8463264161526
object (union) | 1572.6051924798567 | 0.7164606842199535 | 1060.5326876513318
array (hierarchical) | 113.45939933259177 | 1.8191740949608879 | 74.29182255478354
array (recursive) | 210.77625570776257 | 37.1130175307721 | 149.35064935064935
array (union) | 314.359637774903 | 1.463325406987379 | 280.52401746724894
ultimate union | 1042.7758399118782 | Failed | 233.1002331002331


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 27904.17282127031
  "fast-json-stringify": 4.072959093323889
  "JSON.stringify()": 7228.650137741047
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 3954.686078252957
  "fast-json-stringify": 0.7159477358152855
  "JSON.stringify()": 1799.1046446558478
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4358.665430954588
  "fast-json-stringify": 40.68559556786704
  "JSON.stringify()": 1477.8463264161526
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1572.6051924798567
  "fast-json-stringify": 0.7164606842199535
  "JSON.stringify()": 1060.5326876513318
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 113.45939933259177
  "fast-json-stringify": 1.8191740949608879
  "JSON.stringify()": 74.29182255478354
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 210.77625570776257
  "fast-json-stringify": 37.1130175307721
  "JSON.stringify()": 149.35064935064935
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 314.359637774903
  "fast-json-stringify": 1.463325406987379
  "JSON.stringify()": 280.52401746724894
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1042.7758399118782
  "fast-json-stringify": 0
  "JSON.stringify()": 233.1002331002331
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 28670.33976124885 | 23710.57479734709 | 7022.909090909091
object (hierarchical) | 3974.7744430123366 | 3748.957010701977 | 1774.7478520732163
object (recursive) | 4545.318910854159 | 1509.0198995722521 | 1502.4128686327078
object (union) | 1697.5342465753426 | 1167.6269355419518 | 1051.0921880784895
array (hierarchical) | 63.6081155181868 | 87.95269770879527 | 44.693764943902885
array (recursive) | 219.56161355682445 | 150.96798212956068 | 149.16820702402958
array (union) | 313.7076193948232 | 259.8454177401546 | 303.0803080308031
ultimate union | 1047.7840598212658 | Failed | 236.9573148485954


```mermaid
pie title stringify - object (simple)
  "typescript-json": 28670.33976124885
  "fast-json-stringify": 23710.57479734709
  "JSON.stringify()": 7022.909090909091
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 3974.7744430123366
  "fast-json-stringify": 3748.957010701977
  "JSON.stringify()": 1774.7478520732163
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4545.318910854159
  "fast-json-stringify": 1509.0198995722521
  "JSON.stringify()": 1502.4128686327078
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1697.5342465753426
  "fast-json-stringify": 1167.6269355419518
  "JSON.stringify()": 1051.0921880784895
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 63.6081155181868
  "fast-json-stringify": 87.95269770879527
  "JSON.stringify()": 44.693764943902885
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 219.56161355682445
  "fast-json-stringify": 150.96798212956068
  "JSON.stringify()": 149.16820702402958
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 313.7076193948232
  "fast-json-stringify": 259.8454177401546
  "JSON.stringify()": 303.0803080308031
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1047.7840598212658
  "fast-json-stringify": 0
  "JSON.stringify()": 236.9573148485954
```






