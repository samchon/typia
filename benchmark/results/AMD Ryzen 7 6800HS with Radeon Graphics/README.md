# Benchmark of `typia`
> - CPU: AMD Ryzen 7 6800HS with Radeon Graphics
> - Memory: 64,781 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v4.0.12-dev.20230619


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 144,392 | 141,788 | 5,188 | 509 | 67 | 7.08 
 object (hierarchical) | 26,979 | 28,787 | 6,719 | 815 | 45 | 12 
 object (recursive) | 15,036 | 15,887 | 3,060 | 737 | 9.02 | 11 
 object (union, explicit) | 2,747 | 1,872 | 157 | 420 | 4.55 |  -  
 object (union, implicit) | 2,409 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 10,788 | 11,961 | 3,028 | 756 | 12 | 10 
 array (union, explicit) | 2,405 | 1,592 | 278 | 276 | 2.20 |  -  
 array (union, implicit) | 3,147 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 802 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 139,710 | 138,972 |  -  | 484 | 68 | 7.14 
 object (hierarchical) | 38,685 | 27,141 |  -  | 820 | 44 | 12 
 object (recursive) | 15,218 | 15,286 |  -  | 729 | 9.35 | 11 
 object (union, explicit) | 2,655 | 1,835 |  -  | 418 | 4.50 |  -  
 object (union, implicit) | 2,574 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 8,891 | 11,766 |  -  | 742 | 12 | 10 
 array (union, explicit) | 2,377 | 1,647 |  -  | 281 | 2.11 |  -  
 array (union, implicit) | 3,093 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 806 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 132,830 | 137,645 |  -  | 481 | 71 | 7.02 
 object (hierarchical) | 23,241 | 26,248 |  -  | 783 | 47 | 9.60 
 object (recursive) | 14,411 | 15,769 |  -  | 735 | 9.29 | 12 
 object (union, explicit) | 2,643 | 1,850 |  -  | 405 | 4.52 |  -  
 object (union, implicit) | 2,222 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,252 | 11,763 |  -  | 760 | 12 | 9.99 
 array (union, explicit) | 2,439 | 1,629 |  -  | 284 | 2.22 |  -  
 array (union, implicit) | 3,076 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 780 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 623 | 29 | 141 | 65 | 4.44 
 object (hierarchical) | 2,598 | 67 | 242 | 44 | 8.13 
 object (recursive) | 2,109 | 49 | 175 | 8.18 | 7.16 
 object (union, explicit) | 542 | 20 | 108 | 4.26 |  -  
 object (union, implicit) | 435 |  -  |  -  |  -  |  -  
 array (recursive) | 1,507 | 52 | 175 | 11 | 4.98 
 array (union, explicit) | 967 | 13 | 54 | 1.94 |  -  
 array (union, implicit) | 1,039 |  -  |  -  |  -  |  -  
 ultimate union | 255 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,357 | 29 | 153 | 68 | 4.40 
 object (hierarchical) | 2,612 | 70 | 244 | 44 | 8.14 
 object (recursive) | 2,005 | 47 | 182 | 7.43 | 7.33 
 object (union, explicit) | 503 | 20 | 110 | 4.28 |  -  
 object (union, implicit) | 378 |  -  |  -  |  -  |  -  
 array (recursive) | 1,260 | 52 | 164 | 11 | 6.20 
 array (union, explicit) | 827 | 14 | 53 | 2.17 |  -  
 array (union, implicit) | 838 |  -  |  -  |  -  |  -  
 ultimate union | 207 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 130,573 | 6.65 | 0.02 | 6.11 
 object (hierarchical) | 30,439 | 12 | 0.11 | 13 
 object (recursive) | 17,221 | 52 | 0.23 | 12 
 object (union, explicit) | 2,760 | 15 | 0.11 | 10 
 array (simple) | 12,596 | 72 | 0.23 | 23 
 array (hierarchical) | 25,302 | 649 | 5.35 | 18 
 array (recursive) | 15,417 | 606 | 2.38 | 9.50 
 array (union, explicit) | 5,359 | 142 | 0.74 | 22 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 1,425 | 995 | 1,151 | 529 | 83 | 5.88 
 object (hierarchical) | 559 | 522 | 520 | 391 | 133 | 12 
 object (recursive) | 712 | 663 | 659 | 192 | 139 | 10 
 object (union, explicit) | 234 | 208 | 207 | 158 | 81 | 3.20 
 array (simple) | 248 | 253 | 261 | 401 | 177 | 11 
 array (hierarchical) | 369 | 358 | 371 | 522 | 157 | 9.30 
 array (recursive) | 328 | 309 | 309 | 601 | 149 | 10 
 array (union, explicit) | 264 | 255 | 253 | 60 | 189 | 8.97 

> Unit: Megabytes/sec




## server
![server benchmark](images/server.svg)

 Types | fastify-class-transformer | fastify-pure | fastify-typia | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 4.70 | 66 | 72 | 46 | 35 | 4.79 
 object (hierarchical) | 9.61 | 135 | 145 | 117 | 87 | 9.64 
 object (recursive) | 8.40 | 84 | 153 | 130 | 88 | 8.56 
 object (union, explicit) | 3.54 | 69 | 117 | 97 | 60 | 3.56 
 array (simple) | 8.73 | 107 | 104 | 90 | 95 | 8.83 
 array (hierarchical) | 5.93 | 62 | 150 | 143 | 100 | 7.48 
 array (recursive) | 7.97 | 73 | 127 | 123 | 100 | 7.62 
 array (union, explicit) | 6.98 | 27 | 131 | 119 | 118 | 6.21 

> Unit: Megabytes/sec







Total elapsed time: 2,298,732 ms
