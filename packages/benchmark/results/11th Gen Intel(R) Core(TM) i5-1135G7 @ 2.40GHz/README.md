# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v4.1.8


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 103,389 | 103,319 | 3,271 | 335 | 41 | 3.56 
 object (hierarchical) | 15,924 | 18,460 | 3,616 | 528 | 27 | 6.66 
 object (recursive) | 9,513 | 10,611 | 1,660 | 481 | 5.05 | 6.50 
 object (union, explicit) | 1,499 | 1,215 | 84 | 283 | 2.74 |  -  
 object (union, implicit) | 1,147 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 6,503 | 7,392 | 1,772 | 510 | 6.03 | 5.51 
 array (union, explicit) | 1,615 | 1,099 | 162 | 182 | 1.32 |  -  
 array (union, implicit) | 1,855 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 342 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 97,257 | 100,591 | 3,273 | 343 | 41 | 3.51 
 object (hierarchical) | 21,234 | 18,861 | 3,641 | 539 | 26 | 6.83 
 object (recursive) | 9,232 | 10,657 | 1,645 | 479 | 5.28 | 6.36 
 object (union, explicit) | 1,447 | 1,190 | 88 | 284 | 2.79 |  -  
 object (union, implicit) | 1,241 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 6,030 | 7,092 | 1,833 | 503 | 6.78 | 5.39 
 array (union, explicit) | 1,676 | 1,147 | 160 | 199 | 1.21 |  -  
 array (union, implicit) | 1,905 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 506 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 99,319 | 103,792 | 3,344 | 347 | 41 | 3.56 
 object (hierarchical) | 13,387 | 16,754 | 3,780 | 538 | 28 | 7.09 
 object (recursive) | 9,106 | 10,518 | 1,622 | 479 | 5.32 | 6.53 
 object (union, explicit) | 1,558 | 1,186 | 61 | 294 | 2.79 |  -  
 object (union, implicit) | 1,399 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 6,119 | 7,153 | 1,862 | 514 | 6.86 | 5.58 
 array (union, explicit) | 1,654 | 1,144 | 86 | 198 | 1.34 |  -  
 array (union, implicit) | 1,899 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 524 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 340 | 17 | 86 | 40 | 2.41 
 object (hierarchical) | 1,557 | 40 | 140 | 27 | 5.15 
 object (recursive) | 1,215 | 30 | 105 | 5.08 | 4.33 
 object (union, explicit) | 338 | 11 | 63 | 2.67 |  -  
 object (union, implicit) | 266 |  -  |  -  |  -  |  -  
 array (recursive) | 998 | 33 | 101 | 6.78 | 3.73 
 array (union, explicit) | 554 | 8.01 | 34 | 0.95 |  -  
 array (union, implicit) | 670 |  -  |  -  |  -  |  -  
 ultimate union | 162 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 814 | 18 | 92 | 40 | 2.36 
 object (hierarchical) | 1,520 | 40 | 135 | 20 | 4.43 
 object (recursive) | 1,132 | 28 | 104 | 5.17 | 4.33 
 object (union, explicit) | 298 | 11 | 62 | 2.62 |  -  
 object (union, implicit) | 227 |  -  |  -  |  -  |  -  
 array (recursive) | 710 | 31 | 103 | 5.85 | 3.80 
 array (union, explicit) | 541 | 8.39 | 35 | 1.39 |  -  
 array (union, implicit) | 499 |  -  |  -  |  -  |  -  
 ultimate union | 119 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 100,379 | 4.05 | 0.01 | 3.46 
 object (hierarchical) | 18,090 | 7.25 | 0.06 | 7.86 
 object (recursive) | 10,733 | 32 | 0.13 | 6.25 
 object (union, explicit) | 1,531 | 8.81 | 0.06 | 5.35 
 array (simple) | 7,644 | 98 | 0.43 | 14 
 array (hierarchical) | 16,483 | 616 | 2.75 | 10 
 array (recursive) | 7,346 | 357 | 1.32 | 5.77 
 array (union, explicit) | 2,849 | 87 | 0.44 | 13 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 811 | 618 | 646 | 279 | 54 | 3.47 
 object (hierarchical) | 337 | 308 | 317 | 243 | 91 | 7.39 
 object (recursive) | 457 | 442 | 409 | 105 | 94 | 6.27 
 object (union, explicit) | 145 | 129 | 124 | 94 | 63 | 2.72 
 array (simple) | 178 | 164 | 162 | 257 | 119 | 6.27 
 array (hierarchical) | 238 | 245 | 240 | 354 | 106 | 5.55 
 array (recursive) | 209 | 202 | 209 | 385 | 102 | 6.02 
 array (union, explicit) | 172 | 155 | 159 | 34 | 129 | 5.22

 > Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 46 | 46 | 3.47 | 37 | 3.25 
 object (hierarchical) | 93 | 83 | 6.30 | 82 | 6.54 
 object (recursive) | 88 | 82 | 5.59 | 88 | 5.19 
 object (union, explicit) | 57 | 35 | 2.14 | 56 | 2.14 
 array (simple) | 85 | 85 | 4.91 | 82 | 3.53 
 array (hierarchical) | 73 | 34 | 2.13 | 46 | 3.01 
 array (recursive) | 69 | 64 | 4.05 | 76 | 4.03 
 array (union, explicit) | 85 | 53 | 3.95 | 92 | 4.07 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 96 | 85 | 3.75 | 49 | 33 | 3.51 
 object (hierarchical) | 143 | 111 | 7.65 | 111 | 73 | 7.30 
 object (recursive) | 151 | 62 | 6.39 | 125 | 77 | 6.09 
 object (union, explicit) | 107 | 55 | 2.73 | 90 | 55 | 2.64 
 array (simple) | 112 | 90 | 6.48 | 97 | 90 | 6.02 
 array (hierarchical) | 130 | 55 | 5.11 | 121 | 82 | 5.41 
 array (recursive) | 116 | 70 | 5.43 | 111 | 75 | 4.71 
 array (union, explicit) | 81 | 17 | 3.97 | 74 | 69 | 3.96 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 61 | 54 | 3.34 | 36 | 4.92 
 object (hierarchical) | 90 | 78 | 6.24 | 73 | 9.58 
 object (recursive) | 87 | 53 | 5.30 | 78 | 7.40 
 object (union, explicit) | 52 | 29 | 1.56 | 49 | 1.73 
 array (simple) | 76 | 72 | 4.26 | 69 | 4.23 
 array (hierarchical) | 46 | 51 | 2.86 | 39 | 2.48 
 array (recursive) | 64 | 63 | 4.62 | 63 | 6.61 
 array (union, explicit) | 72 | 25 | 3.27 | 69 | 3.34 

> Unit: Megabytes/sec







Total elapsed time: 9,072,421 ms
