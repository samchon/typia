# Benchmark of `typia`
> - CPU: AMD Ryzen 7 6800HS with Radeon Graphics
> - Memory: 64,781 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v4.1.1


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 143,033 | 143,209 | 5,171 | 511 | 65 | 7.06 
 object (hierarchical) | 26,304 | 28,664 | 6,529 | 829 | 47 | 12 
 object (recursive) | 15,710 | 16,592 | 3,209 | 750 | 9.36 | 11 
 object (union, explicit) | 2,821 | 1,957 | 161 | 436 | 4.68 |  -  
 object (union, implicit) | 2,132 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,366 | 12,439 | 3,153 | 806 | 12 | 10 
 array (union, explicit) | 2,538 | 1,670 | 285 | 297 | 2.19 |  -  
 array (union, implicit) | 3,187 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 795 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 139,512 | 138,178 |  -  | 495 | 66 | 6.77 
 object (hierarchical) | 36,751 | 28,594 |  -  | 835 | 46 | 13 
 object (recursive) | 15,313 | 16,415 |  -  | 742 | 9.49 | 11 
 object (union, explicit) | 2,729 | 1,936 |  -  | 437 | 4.64 |  -  
 object (union, implicit) | 2,297 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,915 | 12,320 |  -  | 809 | 12 | 11 
 array (union, explicit) | 2,526 | 1,704 |  -  | 300 | 2.22 |  -  
 array (union, implicit) | 3,209 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 839 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 138,735 | 141,582 |  -  | 506 | 74 | 7.26 
 object (hierarchical) | 21,570 | 28,049 |  -  | 830 | 47 | 12 
 object (recursive) | 15,397 | 16,289 |  -  | 758 | 9.36 | 12 
 object (union, explicit) | 2,938 | 1,909 |  -  | 438 | 4.58 |  -  
 object (union, implicit) | 2,627 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,651 | 12,311 |  -  | 799 | 11 | 10 
 array (union, explicit) | 2,546 | 1,649 |  -  | 299 | 2.20 |  -  
 array (union, implicit) | 3,161 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 828 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 622 | 30 | 143 | 74 | 4.35 
 object (hierarchical) | 2,638 | 68 | 228 | 46 | 8.08 
 object (recursive) | 2,115 | 49 | 176 | 8.37 | 7.40 
 object (union, explicit) | 558 | 21 | 110 | 4.47 |  -  
 object (union, implicit) | 446 |  -  |  -  |  -  |  -  
 array (recursive) | 1,560 | 53 | 160 | 12 | 6.47 
 array (union, explicit) | 970 | 13 | 53 | 2.25 |  -  
 array (union, implicit) | 1,141 |  -  |  -  |  -  |  -  
 ultimate union | 266 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,376 | 30 | 158 | 70 | 4.52 
 object (hierarchical) | 2,653 | 70 | 254 | 44 | 8.41 
 object (recursive) | 2,056 | 48 | 176 | 8.36 | 7.22 
 object (union, explicit) | 477 | 20 | 109 | 4.44 |  -  
 object (union, implicit) | 379 |  -  |  -  |  -  |  -  
 array (recursive) | 1,147 | 52 | 153 | 11 | 6.36 
 array (union, explicit) | 805 | 14 | 54 | 2.28 |  -  
 array (union, implicit) | 825 |  -  |  -  |  -  |  -  
 ultimate union | 187 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 140,919 | 6.44 | 0.02 | 6.45 
 object (hierarchical) | 25,347 | 12 | 0.08 | 13 
 object (recursive) | 16,585 | 51 | 0.20 | 11 
 object (union, explicit) | 2,731 | 14 | 0.10 | 9.34 
 array (simple) | 12,591 | 130 | 0.60 | 23 
 array (hierarchical) | 24,160 | 918 | 2.38 | 19 
 array (recursive) | 15,956 | 597 | 2.30 | 10 
 array (union, explicit) | 5,547 | 143 | 0.74 | 23 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 1,349 | 1,094 | 1,139 | 495 | 81 | 6.24 
 object (hierarchical) | 552 | 530 | 523 | 407 | 137 | 12 
 object (recursive) | 700 | 667 | 685 | 197 | 137 | 10 
 object (union, explicit) | 230 | 224 | 216 | 161 | 92 | 4.68 
 array (simple) | 284 | 261 | 263 | 401 | 180 | 12 
 array (hierarchical) | 370 | 366 | 376 | 538 | 159 | 9.59 
 array (recursive) | 325 | 315 | 325 | 609 | 153 | 10 
 array (union, explicit) | 280 | 262 | 264 | 60 | 198 | 8.86 

> Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 49 | 49 | 4.78 | 36 | 4.43 
 object (hierarchical) | 108 | 104 | 9.14 | 98 | 8.68 
 object (recursive) | 106 | 99 | 8.10 | 98 | 7.50 
 object (union, explicit) | 68 | 46 | 3.13 | 66 | 3.12 
 array (simple) | 98 | 95 | 7.43 | 95 | 7.40 
 array (hierarchical) | 76 | 74 | 4.50 | 87 | 5.54 
 array (recursive) | 102 | 100 | 6.40 | 109 | 6.60 
 array (union, explicit) | 121 | 78 | 6.34 | 123 | 6.23 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 76 | 71 | 5.53 | 51 | 38 | 5.10 
 object (hierarchical) | 155 | 137 | 11 | 130 | 91 | 11 
 object (recursive) | 159 | 82 | 9.03 | 139 | 95 | 8.97 
 object (union, explicit) | 129 | 68 | 4.01 | 108 | 67 | 3.95 
 array (simple) | 115 | 98 | 9.30 | 106 | 106 | 9.10 
 array (hierarchical) | 158 | 138 | 8.09 | 153 | 112 | 7.69 
 array (recursive) | 132 | 76 | 8.30 | 131 | 107 | 8.41 
 array (union, explicit) | 139 | 32 | 7.57 | 132 | 127 | 7.87 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 83 | 78 | 6.76 | 56 | 9.56 
 object (hierarchical) | 146 | 132 | 13 | 121 | 19 
 object (recursive) | 144 | 97 | 12 | 123 | 16 
 object (union, explicit) | 98 | 60 | 3.35 | 80 | 3.33 
 array (simple) | 111 | 103 | 8.14 | 101 | 8.01 
 array (hierarchical) | 94 | 62 | 5.79 | 81 | 5.20 
 array (recursive) | 113 | 112 | 9.12 | 110 | 13 
 array (union, explicit) | 123 | 44 | 6.26 | 121 | 6.35 

> Unit: Megabytes/sec







Total elapsed time: 5,239,348 ms
