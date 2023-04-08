# Benchmark of `typia`
> - CPU: AMD Ryzen 7 6800HS with Radeon Graphics
> - Memory: 64,780 MB
> - OS: win32
> - NodeJS version: v16.19.0
> - Typia version: 3.7.2


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 10,563,398.072 | 10,661,040.97 | 504,444.079 | 40,502.625 | 3,973.613 | 526.586 
 object (hierarchical) | 317,862.574 | 317,463.457 | 61,567.11 | 10,172.744 | 482.624 | 116.503 
 object (recursive) | 129,432.613 | 143,353.398 | 54,178.992 | 7,102.022 | 82.14 | 99.55 
 object (union, explicit) | 27,537.804 | 18,519.206 | 9,500.091 | 4,261.039 | 39.181 | 89.934 
 object (union, implicit) | 16,930.414 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 8,547.632 | 10,931.251 | 2,494.235 | 730.475 | 10.171 | 8.774 
 array (union, explicit) | 3,441.794 | 2,451.536 | 924.893 | 434.107 | 3.311 | 33.158 
 array (union, implicit) | 3,071.243 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 531.729 |  -  |  -  |  -  |  -  |  -  
## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 456,283.333 | 3,046.165 | 19,157.59 | 3,892.877 | 518.453 
 object (hierarchical) | 112,182.922 | 888.473 | 4,440.299 | 491.14 | 116.163 
 object (recursive) | 63,503.43 | 522.673 | 2,194.567 | 82.364 | 104.05 
 object (union, explicit) | 7,279.255 | 208.425 | 1,413.231 | 39.796 | 93.728 
 object (union, implicit) | 6,626.468 |  -  |  -  |  -  | 79.001 
 array (recursive) | 2,525.414 | 52.311 | 238.841 | 10.036 | NaN 
 array (union, explicit) | 2,614.913 | 20.646 | 104.645 | 3.268 | 32.973 
 array (union, implicit) | 1,849.625 |  -  |  -  |  -  | 21.184 
 ultimate union | 263.567 |  -  |  -  |  -  |  -  
## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 121,124.63 | 2,788.953 | 19,480.132 | 4,034.401 | 511.39 
 object (hierarchical) | 40,611.01 | 908.561 | 4,354.68 | 496.431 | 115.623 
 object (recursive) | 23,123.587 | 510.611 | 2,232.28 | 82.172 | 99.371 
 object (union, explicit) | 5,622.021 | 210.228 | 1,469.225 | 39.072 | 91.375 
 object (union, implicit) | 4,276.746 |  -  |  -  |  -  | 81.784 
 array (recursive) | 1,466.384 | 55.33 | 237.06 | 10.127 | 8.607 
 array (union, explicit) | 1,911.361 | 21.051 | 104.537 | 3.253 | 33.961 
 array (union, implicit) | 1,271.824 |  -  |  -  |  -  | 21.598 
 ultimate union | 183.638 |  -  |  -  |  -  |  -  
## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 10,907,286.136 | 581.186 | 8.499 | 524.014 
 object (hierarchical) | 363,261.702 | 162.281 | 6.054 | 115.324 
 object (recursive) | 158,012.109 | 686.845 | 9.417 | 98.396 
 object (union, explicit) | 26,052.354 | 149.973 | 5.574 | 91.615 
 array (simple) | 55,518.396 | 754.634 | 8.861 | 71.675 
 array (hierarchical) | 10,243.634 | 426.247 | 7.93 | 7.164 
 array (recursive) | 11,420.857 | 782.257 | 9.737 | 8.556 
 array (union, explicit) | 7,968.534 | 220.906 | 5.563 | 32.76 
## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 26,434.985 | 20,422.722 | 12,308.158 | 8,922.71 | 1,665.69 | 120.535 
 object (hierarchical) | 1,677.106 | 1,577.128 | 1,430.018 | 1,907.902 | 409.934 | 36.909 
 object (recursive) | 1,616.173 | 1,517.841 | 1,475.442 | 316.012 | 314.805 | 23.639 
 object (union, explicit) | 562.13 | 482.395 | 420.833 | 378.349 | 216.019 | 10.832 
 array (simple) | 280.259 | 329.759 | 223.843 | 402.74 | 188.934 | 18.468 
 array (hierarchical) | 47.469 | 24.461 | 29.927 | 65.83 | 11.972 | 0.874 
 array (recursive) | 71.244 | 66.546 | 64.658 | 34.382 | 33.821 | 2.364 
 array (union, explicit) | 95.03 | 86.901 | 84.716 | 63.672 | 70.045 | 3.272 



> Total elapsed time: 1,530,459 ms
