# Benchmark of `typescript-json`
> CPU: AMD Ryzen 7 5800HS with Radeon Graphics         
> Memory: 16,218 MB


## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 24796.900053447353 | 20778.53067047076
object (recursive) | 30383.795700900242 | 20366.44832605531
object (union) | 4128.879152975539 | 1950.3906959840087
array (recursive) | 2130.5395883552756 | 1543.105006325682
array (union) | 3659.4296228150874 | 231.66236638407665
ultimate union | 4507.33137829912 | 33.39350180505415


```mermaid
pie title assert - object (hierarchical)
  "typescript-json": 24796.900053447353
  "typescript-is": 20778.53067047076
```


```mermaid
pie title assert - object (recursive)
  "typescript-json": 30383.795700900242
  "typescript-is": 20366.44832605531
```


```mermaid
pie title assert - object (union)
  "typescript-json": 4128.879152975539
  "typescript-is": 1950.3906959840087
```


```mermaid
pie title assert - array (recursive)
  "typescript-json": 2130.5395883552756
  "typescript-is": 1543.105006325682
```


```mermaid
pie title assert - array (union)
  "typescript-json": 3659.4296228150874
  "typescript-is": 231.66236638407665
```


```mermaid
pie title assert - ultimate union
  "typescript-json": 4507.33137829912
  "typescript-is": 33.39350180505415
```






## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 110229.39201790377 | 52394.2731277533 | 86875.63230420374
object (recursive) | 80054.18535127054 | 44992.540029112075 | Failed
object (union, explicit) | 15314.933284591481 | Failed | 1247.5431114407565
object (union, implicit) | 18016.34877384196 | Failed | Failed
array (recursive) | 7396.418020679468 | 4447.719688542826 | Failed
array (union, explicit) | 7765.88868940754 | 1059.1378039793663 | Failed
array (union, implicit) | 6586.357039187228 | 1180.514705882353 | Failed
ultimate union | 10185.498380712486 | 276.27088198311475 | Failed


```mermaid
pie title is - object (hierarchical)
  "typescript-json": 110229.39201790377
  "typescript-is": 52394.2731277533
  "ajv": 86875.63230420374
```


```mermaid
pie title is - object (recursive)
  "typescript-json": 80054.18535127054
  "typescript-is": 44992.540029112075
  "ajv": 0
```


```mermaid
pie title is - object (union, explicit)
  "typescript-json": 15314.933284591481
  "typescript-is": 0
  "ajv": 1247.5431114407565
```


```mermaid
pie title is - object (union, implicit)
  "typescript-json": 18016.34877384196
  "typescript-is": 0
  "ajv": 0
```


```mermaid
pie title is - array (recursive)
  "typescript-json": 7396.418020679468
  "typescript-is": 4447.719688542826
  "ajv": 0
```


```mermaid
pie title is - array (union, explicit)
  "typescript-json": 7765.88868940754
  "typescript-is": 1059.1378039793663
  "ajv": 0
```


```mermaid
pie title is - array (union, implicit)
  "typescript-json": 6586.357039187228
  "typescript-is": 1180.514705882353
  "ajv": 0
```


```mermaid
pie title is - ultimate union
  "typescript-json": 10185.498380712486
  "typescript-is": 276.27088198311475
  "ajv": 0
```






## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 151802.29021291822 | 5.264113269195861 | 4281.402324709412
object (hierarchical) | 4821.482035928144 | 1.4732965009208103 | 1128.4502976727404
object (recursive) | 5420.385779122541 | 50.377833753148614 | 893.802102210946
object (union) | 2150.1175619461023 | 0.9082652134423251 | 497.1720488961868
array (hierarchical) | 270.9594569803706 | 2.799552071668533 | 74.67111358161941
array (recursive) | 248.66214769889405 | 31.203566121842496 | 69.68192682478397
array (union) | 386.15107913669067 | 2.5645722659827808 | 153.08779761904762
ultimate union | 1258.0586414132217 | Failed | 136.03341808935707


```mermaid
pie title optimizer - object (simple)
  "typescript-json": 151802.29021291822
  "fast-json-stringify": 5.264113269195861
  "JSON.stringify()": 4281.402324709412
```


```mermaid
pie title optimizer - object (hierarchical)
  "typescript-json": 4821.482035928144
  "fast-json-stringify": 1.4732965009208103
  "JSON.stringify()": 1128.4502976727404
```


```mermaid
pie title optimizer - object (recursive)
  "typescript-json": 5420.385779122541
  "fast-json-stringify": 50.377833753148614
  "JSON.stringify()": 893.802102210946
```


```mermaid
pie title optimizer - object (union)
  "typescript-json": 2150.1175619461023
  "fast-json-stringify": 0.9082652134423251
  "JSON.stringify()": 497.1720488961868
```


```mermaid
pie title optimizer - array (hierarchical)
  "typescript-json": 270.9594569803706
  "fast-json-stringify": 2.799552071668533
  "JSON.stringify()": 74.67111358161941
```


```mermaid
pie title optimizer - array (recursive)
  "typescript-json": 248.66214769889405
  "fast-json-stringify": 31.203566121842496
  "JSON.stringify()": 69.68192682478397
```


```mermaid
pie title optimizer - array (union)
  "typescript-json": 386.15107913669067
  "fast-json-stringify": 2.5645722659827808
  "JSON.stringify()": 153.08779761904762
```


```mermaid
pie title optimizer - ultimate union
  "typescript-json": 1258.0586414132217
  "fast-json-stringify": 0
  "JSON.stringify()": 136.03341808935707
```






## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 153388.39848675914 | 31077.330895795247 | 4226.603670725059
object (hierarchical) | 5112.967671630948 | 4881.507743982086 | 1225.8186636380844
object (recursive) | 5599.705123479543 | 905.2830188679245 | 924.1483154526634
object (union) | 2150.9571558796715 | 1588.4536847967331 | 500.0935103796521
array (hierarchical) | 381.4976372228281 | 553.6576308949127 | 97.65698219306466
array (recursive) | 253.86313465783664 | 71.60081617510666 | 70.6060033981499
array (union) | 392.4751014385836 | 139.5596590909091 | 151.22665690223363
ultimate union | 1237.2001432151808 | Failed | 137.17472118959108


```mermaid
pie title stringify - object (simple)
  "typescript-json": 153388.39848675914
  "fast-json-stringify": 31077.330895795247
  "JSON.stringify()": 4226.603670725059
```


```mermaid
pie title stringify - object (hierarchical)
  "typescript-json": 5112.967671630948
  "fast-json-stringify": 4881.507743982086
  "JSON.stringify()": 1225.8186636380844
```


```mermaid
pie title stringify - object (recursive)
  "typescript-json": 5599.705123479543
  "fast-json-stringify": 905.2830188679245
  "JSON.stringify()": 924.1483154526634
```


```mermaid
pie title stringify - object (union)
  "typescript-json": 2150.9571558796715
  "fast-json-stringify": 1588.4536847967331
  "JSON.stringify()": 500.0935103796521
```


```mermaid
pie title stringify - array (hierarchical)
  "typescript-json": 381.4976372228281
  "fast-json-stringify": 553.6576308949127
  "JSON.stringify()": 97.65698219306466
```


```mermaid
pie title stringify - array (recursive)
  "typescript-json": 253.86313465783664
  "fast-json-stringify": 71.60081617510666
  "JSON.stringify()": 70.6060033981499
```


```mermaid
pie title stringify - array (union)
  "typescript-json": 392.4751014385836
  "fast-json-stringify": 139.5596590909091
  "JSON.stringify()": 151.22665690223363
```


```mermaid
pie title stringify - ultimate union
  "typescript-json": 1237.2001432151808
  "fast-json-stringify": 0
  "JSON.stringify()": 137.17472118959108
```






