# Benchmark of `typescript-json`
> CPU: AMD EPYC 7551 32-Core Processor
> Memory: 966 MB
> NodeJS version: v16.17.0


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 9306.024524613471 | 8858.741733084618
object (recursive) | 12533.500537441778 | 8954.761904761905
object (union) | 2021.6092761770906 | 866.7021654242101
array (recursive) | 669.8942083557469 | 762.1515368120085
array (union) | 1330.9933309933308 | 85.45454545454545
ultimate union | 1677.6649746192893 | 12.129860863360685


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 9306.024524613471
  "typescript-is": 8858.741733084618
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 12533.500537441778
  "typescript-is": 8954.761904761905
```


```mermaid
pie title assert - object (union)
  "typescript-json": 2021.6092761770906
  "typescript-is": 866.7021654242101
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 669.8942083557469
  "typescript-is": 762.1515368120085
```


```mermaid
pie title assert - array (union)
  "typescript-json": 1330.9933309933308
  "typescript-is": 85.45454545454545
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 1677.6649746192893
  "typescript-is": 12.129860863360685
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 34176.41796385757 | 17315.180637124045 | 27305.01319261214
object (recursive) | 31182.468694096602 | 16257.760029043382 | Failed
object (union, explicit) | 6949.824561403509 | Failed | 522.4679029957205
object (union, implicit) | 7146.652864044168 | Failed | Failed
array (recursive) | 2820.7910395519775 | 1727.2564469914041 | Failed
array (union, explicit) | 2569.843227056544 | 367.80174719201284 | Failed
array (union, implicit) | 2966.5892442379845 | 383.62760834670945 | Failed
ultimate union | 4757.949932341002 | 103.35872576177286 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 34176.41796385757
  "typescript-is": 17315.180637124045
  "ajv": 27305.01319261214
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 31182.468694096602
  "typescript-is": 16257.760029043382
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 6949.824561403509
  "typescript-is": 0
  "ajv": 522.4679029957205
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 7146.652864044168
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 2820.7910395519775
  "typescript-is": 1727.2564469914041
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 2569.843227056544
  "typescript-is": 367.80174719201284
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 2966.5892442379845
  "typescript-is": 383.62760834670945
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 4757.949932341002
  "typescript-is": 103.35872576177286
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 14647.119696447051 | 1.9973368841544608 | 4111.58721656847
object (hierarchical) | 2024.1681260945709 | 0.48677592081778354 | 1042.8801143469716
object (recursive) | 2111.695598807645 | 19.940528249081687 | 822.5921947726458
object (union) | 818.4427700035881 | 0.33961623365596877 | 570.2389572773353
array (hierarchical) | 59.170539864140146 | 0.8628127696289906 | 52.53590256317033
array (recursive) | 79.05070855386717 | 17.899114084252396 | 70.54769677185347
array (union) | 133.3092485549133 | 0.6889424733034791 | 158.24254331130558
ultimate union | 516.7126119917298 | Failed | 116.36914786123275


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 14647.119696447051
  "fast-json-stringify": 1.9973368841544608
  "JSON.stringify()": 4111.58721656847
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 2024.1681260945709
  "fast-json-stringify": 0.48677592081778354
  "JSON.stringify()": 1042.8801143469716
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 2111.695598807645
  "fast-json-stringify": 19.940528249081687
  "JSON.stringify()": 822.5921947726458
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 818.4427700035881
  "fast-json-stringify": 0.33961623365596877
  "JSON.stringify()": 570.2389572773353
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 59.170539864140146
  "fast-json-stringify": 0.8628127696289906
  "JSON.stringify()": 52.53590256317033
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 79.05070855386717
  "fast-json-stringify": 17.899114084252396
  "JSON.stringify()": 70.54769677185347
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 133.3092485549133
  "fast-json-stringify": 0.6889424733034791
  "JSON.stringify()": 158.24254331130558
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 516.7126119917298
  "fast-json-stringify": 0
  "JSON.stringify()": 116.36914786123275
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 12450.555356503046 | 11435.10618987112 | 4178.686183505891
object (hierarchical) | 1989.5278665246715 | 2047.4767012484613 | 1073.6229776404289
object (recursive) | 2028.029093489445 | 829.8220123501634 | 811.5891132572432
object (union) | 778.6476868327402 | 619.047619047619 | 564.44364551501
array (hierarchical) | 27.56892230576441 | 28.5816362986781 | 24.128686327077748
array (recursive) | 81.14387846291332 | 82.2065981611682 | 75.03276539973787
array (union) | 132.91703835860838 | 138.26987190735218 | 156.90413368513634
ultimate union | 545.7361516034985 | Failed | 122.22626409603491


```mermaid
pie title stringify - object (simple)
  "typescript-json": 12450.555356503046
  "fast-json-stringify": 11435.10618987112
  "JSON.stringify()": 4178.686183505891
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 1989.5278665246715
  "fast-json-stringify": 2047.4767012484613
  "JSON.stringify()": 1073.6229776404289
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 2028.029093489445
  "fast-json-stringify": 829.8220123501634
  "JSON.stringify()": 811.5891132572432
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 778.6476868327402
  "fast-json-stringify": 619.047619047619
  "JSON.stringify()": 564.44364551501
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 27.56892230576441
  "fast-json-stringify": 28.5816362986781
  "JSON.stringify()": 24.128686327077748
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 81.14387846291332
  "fast-json-stringify": 82.2065981611682
  "JSON.stringify()": 75.03276539973787
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 132.91703835860838
  "fast-json-stringify": 138.26987190735218
  "JSON.stringify()": 156.90413368513634
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 545.7361516034985
  "fast-json-stringify": 0
  "JSON.stringify()": 122.22626409603491
```






