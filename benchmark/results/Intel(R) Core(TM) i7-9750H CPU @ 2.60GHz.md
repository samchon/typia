# Benchmark of `typescript-json`
> CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
> Memory: 16,384 MB
> NodeJS version: v16.15.0


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 18484.300839722528 | 15578.851744186048
object (recursive) | 23652.536097741577 | 11544.976328248289
object (union) | 4084.644601193706 | 1553.6733566562327
array (recursive) | 1081.9763138415988 | 1139.201451905626
array (union) | 2718.6982901268616 | 156.9746043430254
ultimate union | 3224.1074584658886 | 22.880454061724016


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 18484.300839722528
  "typescript-is": 15578.851744186048
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 23652.536097741577
  "typescript-is": 11544.976328248289
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4084.644601193706
  "typescript-is": 1553.6733566562327
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 1081.9763138415988
  "typescript-is": 1139.201451905626
```


```mermaid
pie title assert - array (union)
  "typescript-json": 2718.6982901268616
  "typescript-is": 156.9746043430254
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 3224.1074584658886
  "typescript-is": 22.880454061724016
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 69464.47392331455 | 32418.532677953757 | 46729.764297460264
object (recursive) | 47764.662756598234 | 25229.68262704091 | Failed
object (union, explicit) | 9854.46607240313 | Failed | 962.1072088724584
object (union, implicit) | 10034.934497816594 | Failed | Failed
array (recursive) | 3805.8854812976424 | 2545.000924043615 | Failed
array (union, explicit) | 4824.651504035216 | 743.2142857142858 | Failed
array (union, implicit) | 4437.91329904482 | 849.3817909329337 | Failed
ultimate union | 8413.193795552233 | 207.24560468833243 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 69464.47392331455
  "typescript-is": 32418.532677953757
  "ajv": 46729.764297460264
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 47764.662756598234
  "typescript-is": 25229.68262704091
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 9854.46607240313
  "typescript-is": 0
  "ajv": 962.1072088724584
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 10034.934497816594
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 3805.8854812976424
  "typescript-is": 2545.000924043615
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 4824.651504035216
  "typescript-is": 743.2142857142858
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 4437.91329904482
  "typescript-is": 849.3817909329337
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 8413.193795552233
  "typescript-is": 207.24560468833243
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 24588.300835654598 | 4.430267588162325 | 7498.322147651007
object (hierarchical) | 4223.106832068136 | 0.9130752373995618 | 1741.554959785523
object (recursive) | 4122.728090696419 | 39.0625 | 1463.481104651163
object (union) | 1722.7850432860562 | 0.9144111192392099 | 1076.4474423833615
array (hierarchical) | 171.07869620025212 | 2.2152482924127748 | 119.79358643568006
array (recursive) | 221.01720269259536 | 33.28535444404462 | 155.48495608297515
array (union) | 320.04271982912064 | 1.6402405686167305 | 300.22488755622186
ultimate union | 1194.1378686448345 | Failed | 235.50856726212177


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 24588.300835654598
  "fast-json-stringify": 4.430267588162325
  "JSON.stringify()": 7498.322147651007
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 4223.106832068136
  "fast-json-stringify": 0.9130752373995618
  "JSON.stringify()": 1741.554959785523
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 4122.728090696419
  "fast-json-stringify": 39.0625
  "JSON.stringify()": 1463.481104651163
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 1722.7850432860562
  "fast-json-stringify": 0.9144111192392099
  "JSON.stringify()": 1076.4474423833615
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 171.07869620025212
  "fast-json-stringify": 2.2152482924127748
  "JSON.stringify()": 119.79358643568006
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 221.01720269259536
  "fast-json-stringify": 33.28535444404462
  "JSON.stringify()": 155.48495608297515
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 320.04271982912064
  "fast-json-stringify": 1.6402405686167305
  "JSON.stringify()": 300.22488755622186
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1194.1378686448345
  "fast-json-stringify": 0
  "JSON.stringify()": 235.50856726212177
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 29575.034818941505 | 22311.939511165816 | 7623.415361670395
object (hierarchical) | 4887.37828403454 | 4600.524639310474 | 1854.5950864422202
object (recursive) | 4546.823956442831 | 1522.2242886367865 | 1529.696518339229
object (union) | 1658.518788763225 | 1172.438288048304 | 1068.7626401912116
array (hierarchical) | 88.56220867694513 | 117.81076066790354 | 61.494458348230246
array (recursive) | 221.33432447500465 | 153.6907822254866 | 154.3891402714932
array (union) | 332.41908941305536 | 258.63950527464533 | 299.63436928702015
ultimate union | 1210.8345534407026 | Failed | 239.82235381199112


```mermaid
pie title stringify - object (simple)
  "typescript-json": 29575.034818941505
  "fast-json-stringify": 22311.939511165816
  "JSON.stringify()": 7623.415361670395
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 4887.37828403454
  "fast-json-stringify": 4600.524639310474
  "JSON.stringify()": 1854.5950864422202
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 4546.823956442831
  "fast-json-stringify": 1522.2242886367865
  "JSON.stringify()": 1529.696518339229
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 1658.518788763225
  "fast-json-stringify": 1172.438288048304
  "JSON.stringify()": 1068.7626401912116
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 88.56220867694513
  "fast-json-stringify": 117.81076066790354
  "JSON.stringify()": 61.494458348230246
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 221.33432447500465
  "fast-json-stringify": 153.6907822254866
  "JSON.stringify()": 154.3891402714932
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 332.41908941305536
  "fast-json-stringify": 258.63950527464533
  "JSON.stringify()": 299.63436928702015
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1210.8345534407026
  "fast-json-stringify": 0
  "JSON.stringify()": 239.82235381199112
```






