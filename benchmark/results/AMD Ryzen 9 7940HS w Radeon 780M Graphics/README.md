# Benchmark of `typia`
> - CPU: AMD Ryzen 9 7940HS w/ Radeon 780M Graphics
> - Memory: 31,954 MB
> - OS: win32
> - NodeJS version: v20.10.0
> - Typia version: v5.5.7


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 195,390 | 193,280 | 7,197 | 772 | 114 | 9.75 
 object (hierarchical) | 45,820 | 35,137 | 9,326 | 1,194 | 60 | 18 
 object (recursive) | 18,841 | 20,681 | 4,444 | 1,133 | 10 | 17 
 object (union, explicit) | 4,296 | 2,708 | 211 | 637 | 6.09 |  -  
 object (union, implicit) | 3,564 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,015 | 10,436 | 3,934 | 1,218 | 13 | 14 
 array (union, explicit) | 4,050 | 2,433 | 363 | 375 | 2.76 |  -  
 array (union, implicit) | 3,092 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,216 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 195,462 | 193,615 | 7,569 | 788 | 115 | 9.90 
 object (hierarchical) | 33,581 | 34,058 | 9,239 | 1,249 | 60 | 18 
 object (recursive) | 18,397 | 20,035 | 4,251 | 1,120 | 10 | 17 
 object (union, explicit) | 4,219 | 2,652 | 211 | 652 | 5.96 |  -  
 object (union, implicit) | 3,458 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,261 | 10,336 | 3,796 | 1,233 | 14 | 14 
 array (union, explicit) | 4,119 | 2,420 | 366 | 425 | 2.82 |  -  
 array (union, implicit) | 3,118 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,251 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 196,831 | 197,262 | 7,185 | 799 | 115 | 10 
 object (hierarchical) | 26,938 | 33,723 | 9,455 | 1,210 | 61 | 18 
 object (recursive) | 18,146 | 20,418 | 4,464 | 1,143 | 11 | 12 
 object (union, explicit) | 3,996 | 2,661 | 132 | 642 | 6.00 |  -  
 object (union, implicit) | 3,894 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,444 | 10,549 | 3,543 | 1,217 | 14 | 14 
 array (union, explicit) | 4,115 | 2,306 | 174 | 432 | 2.73 |  -  
 array (union, implicit) | 3,001 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 1,207 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 750 | 32 | 198 | 113 | 6.45 
 object (hierarchical) | 3,070 | 76 | 296 | 58 | 12 
 object (recursive) | 2,724 | 54 | 196 | 9.72 | 11 
 object (union, explicit) | 726 | 19 | 130 | 5.80 |  -  
 object (union, implicit) | 569 |  -  |  -  |  -  |  -  
 array (recursive) | 1,728 | 49 | 198 | 12 | 9.12 
 array (union, explicit) | 1,543 | 15 | 60 | 2.72 |  -  
 array (union, implicit) | 1,256 |  -  |  -  |  -  |  -  
 ultimate union | 317 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,598 | 32 | 217 | 110 | 6.56 
 object (hierarchical) | 3,419 | 74 | 310 | 58 | 12 
 object (recursive) | 2,414 | 55 | 204 | 9.52 | 11 
 object (union, explicit) | 693 | 19 | 134 | 5.77 |  -  
 object (union, implicit) | 444 |  -  |  -  |  -  |  -  
 array (recursive) | 1,331 | 50 | 198 | 12 | 9.10 
 array (union, explicit) | 1,291 | 14 | 62 | 2.71 |  -  
 array (union, implicit) | 946 |  -  |  -  |  -  |  -  
 ultimate union | 246 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 196,647 | 8.63 | 0.03 | 9.70 
 object (hierarchical) | 37,822 | 16 | 0.15 | 18 
 object (recursive) | 21,422 | 89 | 0.31 | 17 
 object (union, explicit) | 4,117 | 18 | 0.16 | 18 
 array (simple) | 16,005 | 95 | 0.16 | 43 
 array (hierarchical) | 26,830 | 1,510 | 8.01 | 33 
 array (recursive) | 9,580 | 923 | 3.23 | 9.46 
 array (union, explicit) | 7,200 | 185 | 1.06 | 25 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 2,115 | 1,813 | 1,711 | 693 | 119 | 9.52 
 object (hierarchical) | 836 | 780 | 776 | 471 | 186 | 19 
 object (recursive) | 980 | 964 | 932 | 256 | 189 | 17 
 object (union, explicit) | 295 | 267 | 253 | 212 | 119 | 7.51 
 array (simple) | 377 | 362 | 344 | 587 | 227 | 19 
 array (hierarchical) | 476 | 455 | 452 | 753 | 195 | 14 
 array (recursive) | 397 | 391 | 385 | 825 | 190 | 15 
 array (union, explicit) | 337 | 306 | 313 | 77 | 250 | 15 

> Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 93 | 88 | 7.35 | 56 | 6.77 
 object (hierarchical) | 173 | 166 | 13 | 136 | 12 
 object (recursive) | 160 | 154 | 11 | 136 | 10 
 object (union, explicit) | 105 | 69 | 4.39 | 83 | 4.23 
 array (simple) | 149 | 142 | 10 | 125 | 9.78 
 array (hierarchical) | 56 | 107 | 5.64 | 95 | 6.48 
 array (recursive) | 136 | 131 | 8.56 | 116 | 8.12 
 array (union, explicit) | 155 | 102 | 8.20 | 145 | 8.00 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 154 | 142 | 9.02 | 80 | 58 | 8.32 
 object (hierarchical) | 223 | 179 | 13 | 175 | 123 | 16 
 object (recursive) | 230 | 117 | 14 | 191 | 134 | 14 
 object (union, explicit) | 168 | 99 | 5.96 | 144 | 90 | 5.99 
 array (simple) | 161 | 167 | 14 | 146 | 140 | 14 
 array (hierarchical) | 173 | 80 | 12 | 177 | 129 | 12 
 array (recursive) | 149 | 92 | 12 | 148 | 120 | 12 
 array (union, explicit) | 150 | 38 | 13 | 151 | 155 | 13 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 131 | 123 | 9.94 | 82 | 13 
 object (hierarchical) | 202 | 177 | 18 | 162 | 25 
 object (recursive) | 194 | 132 | 15 | 167 | 21 
 object (union, explicit) | 130 | 80 | 4.42 | 107 | 4.24 
 array (simple) | 160 | 144 | 10 | 146 | 9.90 
 array (hierarchical) | 132 | 80 | 6.13 | 148 | 6.01 
 array (recursive) | 143 | 139 | 12 | 135 | 17 
 array (union, explicit) | 159 | 56 | 8.23 | 149 | 8.05 

> Unit: Megabytes/sec







Total elapsed time: 4,354,260 ms
