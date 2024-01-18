# Benchmark of `typia`
> - CPU: AMD Ryzen 9 7940HS w/ Radeon 780M Graphics
> - Memory: 31,954 MB
> - OS: win32
> - NodeJS version: v20.10.0
> - Typia version: v6.0.0-dev.20240118


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 157,769 | 156,309 | 6,028 | 613 | 89 | 7.87 
 object (hierarchical) | 36,589 | 28,099 | 7,477 | 997 | 49 | 15 
 object (recursive) | 14,687 | 16,653 | 3,540 | 927 | 8.83 | 13 
 object (union, explicit) | 3,267 | 2,101 | 174 | 524 | 4.88 |  -  
 object (union, implicit) | 2,937 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 7,905 | 8,873 | 3,194 | 1,000 | 11 | 12 
 array (union, explicit) | 3,214 | 2,066 | 295 | 352 | 2.28 |  -  
 array (union, implicit) | 2,674 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,035 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 154,141 | 155,658 | 5,226 | 639 | 92 | 7.80 
 object (hierarchical) | 35,232 | 27,282 | 7,636 | 970 | 51 | 15 
 object (recursive) | 14,950 | 16,530 | 3,782 | 923 | 9.06 | 13 
 object (union, explicit) | 3,274 | 2,249 | 179 | 525 | 5.03 |  -  
 object (union, implicit) | 3,067 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 7,679 | 8,986 | 3,109 | 990 | 12 | 11 
 array (union, explicit) | 3,393 | 2,016 | 307 | 357 | 2.31 |  -  
 array (union, implicit) | 2,719 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,045 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 156,461 | 156,874 | 6,103 | 635 | 94 | 8.28 
 object (hierarchical) | 21,260 | 27,117 | 7,593 | 989 | 51 | 15 
 object (recursive) | 14,623 | 16,675 | 3,740 | 943 | 9.30 | 15 
 object (union, explicit) | 3,245 | 2,344 | 110 | 529 | 5.13 |  -  
 object (union, implicit) | 3,368 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 8,506 | 9,032 | 3,026 | 999 | 12 | 11 
 array (union, explicit) | 3,296 | 2,086 | 143 | 347 | 2.23 |  -  
 array (union, implicit) | 2,692 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,019 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 651 | 27 | 158 | 89 | 5.23 
 object (hierarchical) | 2,645 | 62 | 252 | 50 | 9.82 
 object (recursive) | 2,236 | 47 | 162 | 8.16 | 8.92 
 object (union, explicit) | 606 | 16 | 112 | 4.83 |  -  
 object (union, implicit) | 478 |  -  |  -  |  -  |  -  
 array (recursive) | 1,382 | 43 | 161 | 10 | 7.46 
 array (union, explicit) | 1,245 | 12 | 53 | 2.33 |  -  
 array (union, implicit) | 1,036 |  -  |  -  |  -  |  -  
 ultimate union | 270 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,303 | 26 | 179 | 89 | 5.32 
 object (hierarchical) | 2,750 | 60 | 268 | 47 | 9.91 
 object (recursive) | 2,045 | 46 | 169 | 8.30 | 9.08 
 object (union, explicit) | 556 | 16 | 113 | 4.88 |  -  
 object (union, implicit) | 387 |  -  |  -  |  -  |  -  
 array (recursive) | 1,040 | 42 | 138 | 11 | 7.60 
 array (union, explicit) | 1,039 | 12 | 52 | 2.30 |  -  
 array (union, implicit) | 764 |  -  |  -  |  -  |  -  
 ultimate union | 182 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 152,966 | 6.75 | 0.03 | 8.16 
 object (hierarchical) | 38,390 | 13 | 0.12 | 15 
 object (recursive) | 17,397 | 71 | 0.24 | 14 
 object (union, explicit) | 3,358 | 15 | 0.12 | 14 
 array (simple) | 13,183 | 147 | 0.18 | 33 
 array (hierarchical) | 26,473 | 1,615 | 5.94 | 26 
 array (recursive) | 9,422 | 758 | 2.52 | 11 
 array (union, explicit) | 5,793 | 151 | 0.78 | 40 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 1,759 | 1,509 | 1,306 | 550 | 95 | 7.43 
 object (hierarchical) | 498 | 482 | 473 | 391 | 146 | 8.53 
 object (recursive) | 584 | 572 | 568 | 221 | 153 | 14 
 object (union, explicit) | 200 | 175 | 176 | 178 | 96 | 5.79 
 array (simple) | 242 | 250 | 254 | 477 | 187 | 14 
 array (hierarchical) | 354 | 373 | 370 | 583 | 160 | 11 
 array (recursive) | 321 | 321 | 319 | 668 | 153 | 12 
 array (union, explicit) | 254 | 236 | 235 | 64 | 199 | 12 

> Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 76 | 78 | 5.91 | 49 | 5.72 
 object (hierarchical) | 143 | 135 | 11 | 111 | 9.86 
 object (recursive) | 130 | 124 | 8.90 | 111 | 9.16 
 object (union, explicit) | 86 | 55 | 3.81 | 69 | 3.65 
 array (simple) | 120 | 122 | 8.59 | 103 | 8.64 
 array (hierarchical) | 83 | 113 | 5.73 | 84 | 4.86 
 array (recursive) | 105 | 103 | 7.12 | 96 | 6.95 
 array (union, explicit) | 130 | 81 | 6.96 | 126 | 7.19 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 138 | 132 | 7.01 | 68 | 49 | 6.74 
 object (hierarchical) | 211 | 156 | 13 | 153 | 99 | 13 
 object (recursive) | 203 | 103 | 8.41 | 163 | 110 | 11 
 object (union, explicit) | 145 | 89 | 4.92 | 122 | 76 | 4.78 
 array (simple) | 141 | 157 | 12 | 123 | 118 | 11 
 array (hierarchical) | 161 | 79 | 9.54 | 160 | 113 | 10 
 array (recursive) | 132 | 84 | 10 | 139 | 107 | 10 
 array (union, explicit) | 135 | 33 | 10 | 128 | 135 | 11 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 113 | 110 | 8.26 | 70 | 11 
 object (hierarchical) | 170 | 149 | 14 | 138 | 21 
 object (recursive) | 164 | 116 | 13 | 140 | 19 
 object (union, explicit) | 76 | 52 | 3.09 | 75 | 3.06 
 array (simple) | 97 | 115 | 8.22 | 106 | 7.87 
 array (hierarchical) | 75 | 58 | 5.14 | 119 | 4.26 
 array (recursive) | 99 | 100 | 9.06 | 102 | 12 
 array (union, explicit) | 112 | 41 | 6.44 | 112 | 6.33 

> Unit: Megabytes/sec







Total elapsed time: 4,599,204 ms
