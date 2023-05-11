# Benchmark of `typia`
> - CPU: AMD Ryzen 7 6800HS with Radeon Graphics
> - Memory: 64,780 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v3.8.6


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 96,498 | 96,735 | 4,459 | 347 | 50 | 4 
 object (hierarchical) | 17,991 | 19,827 | 3,436 | 578 | 33 | 8 
 object (recursive) | 10,149 | 11,196 | 4,044 | 523 | 6 | 7 
 object (union, explicit) | 1,742 | 1,307 | 691 | 298 | 3 |  -  
 object (union, implicit) | 1,545 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 6,771 | 8,120 | 1,948 | 563 | 8 |  -  
 array (union, explicit) | 1,775 | 1,201 | 469 | 212 | 1 |  -  
 array (union, implicit) | 2,251 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 656 |  -  |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 97,634 | 96,939 | 343 | 50 | 4 
 object (hierarchical) | 17,450 | 19,651 | 584 | 33 | 8 
 object (recursive) | 10,347 | 11,337 | 525 | 6 | 8 
 object (union, explicit) | 1,686 | 1,329 | 303 | 3 |  -  
 object (union, implicit) | 1,449 |  -  |  -  |  -  |  -  
 array (recursive) | 6,694 | 8,413 | 567 | 7 |  -  
 array (union, explicit) | 1,774 | 1,220 | 211 | 1 |  -  
 array (union, implicit) | 2,285 |  -  |  -  |  -  |  -  
 ultimate union | 659 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 92,747 | 95,777 | 346 | 50 | 4 
 object (hierarchical) | 11,651 | 19,695 | 560 | 33 | 8 
 object (recursive) | 9,336 | 11,328 | 517 | 6 | 7 
 object (union, explicit) | 1,557 | 1,322 | 302 | 3 |  -  
 object (union, implicit) | 1,406 |  -  |  -  |  -  |  -  
 array (recursive) | 6,527 | 8,590 | 559 | 7 |  -  
 array (union, explicit) | 1,669 | 1,171 | 206 | 1 |  -  
 array (union, implicit) | 2,220 |  -  |  -  |  -  |  -  
 ultimate union | 632 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 452 | 21 | 102 | 48 | 4 
 object (hierarchical) | 1,908 | 51 | 164 | 32 | 8 
 object (recursive) | 1,556 | 37 | 121 | 5 | 8 
 object (union, explicit) | 408 | 13 | 76 | 3 |  -  
 object (union, implicit) | 315 |  -  |  -  |  -  |  -  
 array (recursive) | 1,000 | 37 | 113 | 8 |  -  
 array (union, explicit) | 670 | 9 | 36 | 1 |  -  
 array (union, implicit) | 782 |  -  |  -  |  -  |  -  
 ultimate union | 187 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 946 | 22 | 113 | 49 | 4 
 object (hierarchical) | 1,799 | 51 | 172 | 32 | 8 
 object (recursive) | 1,416 | 36 | 121 | 5 | 8 
 object (union, explicit) | 340 | 13 | 75 | 3 |  -  
 object (union, implicit) | 252 |  -  |  -  |  -  |  -  
 array (recursive) | 764 | 36 | 104 | 7 |  -  
 array (union, explicit) | 556 | 9 | 36 | 1 |  -  
 array (union, implicit) | 553 |  -  |  -  |  -  |  -  
 ultimate union | 137 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 96,824 | 4 | 0 | 4 
 object (hierarchical) | 19,838 | 8 | 0 | 9 
 object (recursive) | 11,864 | 48 | 0 | 7 
 object (union, explicit) | 1,730 | 10 | 0 | 6 
 array (simple) | 8,694 | 64 | 2 | 15 
 array (hierarchical) | 16,838 | 893 | 8 | 12 
 array (recursive) | 8,934 | 560 | 7 | 6 
 array (union, explicit) | 3,520 | 105 | 2 | 15 

> Unit: Metabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 902 | 674 | 544 | 352 | 58 | 4 
 object (hierarchical) | 390 | 359 | 358 | 270 | 98 | 8 
 object (recursive) | 503 | 479 | 465 | 101 | 101 | 7 
 object (union, explicit) | 168 | 146 | 147 | 113 | 65 | 3 
 array (simple) | 192 | 185 | 189 | 282 | 118 | 7 
 array (hierarchical) | 258 | 260 | 255 | 368 | 110 | 6 
 array (recursive) | 225 | 218 | 217 | 108 | 108 | 7 
 array (union, explicit) | 190 | 177 | 189 | 127 | 138 | 6 

> Unit: Metabytes/sec




## server
![server benchmark](images/server.svg)

 Types | fastify-class-transformer | fastify-pure | fastify-typia | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 3 | 60 | 65 | 36 | 26 | 3 
 object (hierarchical) | 7 | 100 | 117 | 88 | 64 | 7 
 object (recursive) | 6 | 67 | 122 | 99 | 66 | 6 
 object (union, explicit) | 2 | 50 | 83 | 69 | 45 | 2 
 array (simple) | 6 | 63 | 83 | 69 | 75 | 6 
 array (hierarchical) | 5 | 52 | 113 | 116 | 79 | 5 
 array (recursive) | 6 | 71 | 97 | 97 | 72 | 6 
 array (union, explicit) | 5 | 86 | 105 | 103 | 86 | 5 

> Unit: Metabytes/sec







Total elapsed time: 2,139,848 ms
