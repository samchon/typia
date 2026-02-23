# Benchmark of `typia`
> - CPU: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
> - Memory: 8,109 MB
> - OS: win32
> - NodeJS version: v16.20.1
> - Typia version: v4.2.0


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 92,373 | 93,645 | 1,908 | 251 | 42 | 3.67 
 object (hierarchical) | 12,247 | 13,037 | 3,224 | 329 | 22 | 6.40 
 object (recursive) | 8,391 | 7,957 | 1,659 | 422 | 5.15 | 6.44 
 object (union, explicit) | 1,102 | 973 | 84 | 218 | 2.64 |  -  
 object (union, implicit) | 882 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 4,301 | 5,005 | 1,385 | 398 | 5.97 | 5.46 
 array (union, explicit) | 1,260 | 872 | 154 | 151 | 1.25 |  -  
 array (union, implicit) | 1,610 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 452 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 92,013 | 94,585 | 1,685 | 252 | 42 | 4.18 
 object (hierarchical) | 18,387 | 12,300 | 3,287 | 425 | 29 | 6.85 
 object (recursive) | 8,001 | 7,326 | 662 | 215 | 2.33 | 1.96 
 object (union, explicit) | 386 | 473 | 33 | 59 | 1.02 |  -  
 object (union, implicit) | 312 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 2,151 | 2,467 | 676 | 229 | 3.82 | 3.06 
 array (union, explicit) | 739 | 354 | 73 | 78 | 0.63 |  -  
 array (union, implicit) | 821 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 222 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 62,873 | 63,129 | 1,315 | 119 | 21 | 1.65 
 object (hierarchical) | 5,029 | 6,877 | 1,682 | 248 | 15 | 3.74 
 object (recursive) | 4,222 | 4,159 | 959 | 238 | 1.39 | 1.04 
 object (union, explicit) | 317 | 242 | 15 | 54 | 1.24 |  -  
 object (union, implicit) | 338 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 1,034 | 1,798 | 476 | 128 | 4.13 | 2.22 
 array (union, explicit) | 524 | 361 | 28 | 53 | 0.43 |  -  
 array (union, implicit) | 527 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 225 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 121 | 7.81 | 34 | 19 | 1.23 
 object (hierarchical) | 633 | 13 | 47 | 15 | 1.94 
 object (recursive) | 371 | 10 | 34 | 1.39 | 1.78 
 object (union, explicit) | 174 | 5.20 | 29 | 1.29 |  -  
 object (union, implicit) | 109 |  -  |  -  |  -  |  -  
 array (recursive) | 391 | 15 | 44 | 3.94 | 2.24 
 array (union, explicit) | 258 | 3.15 | 15 | 0.70 |  -  
 array (union, implicit) | 282 |  -  |  -  |  -  |  -  
 ultimate union | 53 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 306 | 6.48 | 44 | 16 | 1.32 
 object (hierarchical) | 607 | 20 | 47 | 13 | 2.35 
 object (recursive) | 486 | 17 | 52 | 2.49 | 2.12 
 object (union, explicit) | 186 | 7.05 | 36 | 1.17 |  -  
 object (union, implicit) | 150 |  -  |  -  |  -  |  -  
 array (recursive) | 429 | 20 | 62 | 3.98 | 3.04 
 array (union, explicit) | 347 | 6.15 | 20 | 0.80 |  -  
 array (union, implicit) | 292 |  -  |  -  |  -  |  -  
 ultimate union | 72 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 75,645 | 2.62 | 0.01 | 2.53 
 object (hierarchical) | 10,433 | 5.15 | 0.04 | 5.56 
 object (recursive) | 5,941 | 28 | 0.08 | 3.78 
 object (union, explicit) | 817 | 5.12 | 0.04 | 3.78 
 array (simple) | 3,624 | 33 | 0.23 | 8.96 
 array (hierarchical) | 7,648 | 286 | 2.26 | 8.26 
 array (recursive) | 4,434 | 309 | 0.83 | 3.70 
 array (union, explicit) | 2,175 | 50 | 0.30 | 10 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 630 | 437 | 494 | 192 | 39 | 2.37 
 object (hierarchical) | 277 | 259 | 266 | 146 | 67 | 5.45 
 object (recursive) | 287 | 253 | 284 | 75 | 56 | 4.56 
 object (union, explicit) | 62 | 70 | 68 | 61 | 51 | 1.68 
 array (simple) | 89 | 122 | 84 | 122 | 69 | 2.94 
 array (hierarchical) | 95 | 109 | 111 | 194 | 77 | 4.04 
 array (recursive) | 131 | 132 | 111 | 257 | 44 | 1.81 
 array (union, explicit) | 107 | 96 | 99 | 24 | 89 | 3.59 

> Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 28 | 28 | 2.24 | 20 | 2.05 
 object (hierarchical) | 53 | 51 | 4.23 | 35 | 2.56 
 object (recursive) | 38 | 48 | 3.23 | 50 | 3.20 
 object (union, explicit) | 33 | 19 | 1.25 | 31 | 1.21 
 array (simple) | 60 | 54 | 4.58 | 64 | 4.19 
 array (hierarchical) | 1.67 | 15 | 1.52 | 57 | 2.30 
 array (recursive) | 42 | 35 | 2.35 | 46 | 2.73 
 array (union, explicit) | 34 | 16 | 1.14 | 54 | 2.85 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 63 | 57 | 2.76 | 33 | 23 | 2.79 
 object (hierarchical) | 88 | 68 | 5.45 | 64 | 48 | 5.15 
 object (recursive) | 92 | 49 | 4.91 | 70 | 49 | 4.92 
 object (union, explicit) | 68 | 39 | 2.22 | 51 | 34 | 1.96 
 array (simple) | 47 | 54 | 4.84 | 54 | 55 | 4.70 
 array (hierarchical) | 78 | 35 | 3.81 | 75 | 58 | 3.79 
 array (recursive) | 82 | 50 | 4.35 | 73 | 53 | 4.26 
 array (union, explicit) | 66 | 16 | 3.87 | 64 | 63 | 3.85 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 54 | 49 | 3.68 | 33 | 5.09 
 object (hierarchical) | 79 | 66 | 6.93 | 64 | 10 
 object (recursive) | 71 | 48 | 5.32 | 61 | 8.50 
 object (union, explicit) | 46 | 29 | 1.62 | 38 | 1.58 
 array (simple) | 58 | 49 | 3.78 | 51 | 3.56 
 array (hierarchical) | 53 | 9.60 | 1.33 | 40 | 1.89 
 array (recursive) | 51 | 51 | 4.14 | 38 | 4.59 
 array (union, explicit) | 61 | 22 | 2.70 | 46 | 2.82 

> Unit: Megabytes/sec







Total elapsed time: 7,583,459 ms
