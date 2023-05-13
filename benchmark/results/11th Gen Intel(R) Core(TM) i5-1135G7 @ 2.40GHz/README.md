# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v3.8.6


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 120,497 | 122,031 | 6,555 | 501 | 56 | 5.54 
 object (hierarchical) | 24,126 | 28,434 | 4,599 | 753 | 41 | 11 
 object (recursive) | 13,899 | 15,513 | 5,389 | 724 | 7.77 | 9.78 
 object (union, explicit) | 2,601 | 1,825 | 789 | 431 | 4.02 |  -  
 object (union, implicit) | 2,354 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,070 | 10,770 | 2,818 | 748 | 10 |  -  
 array (union, explicit) | 2,517 | 1,689 | 641 | 293 | 1.88 |  -  
 array (union, implicit) | 2,911 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 894 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 123,106 | 122,685 | 525 | 56 | 5.71 
 object (hierarchical) | 22,668 | 27,468 | 798 | 41 | 11 
 object (recursive) | 13,509 | 15,813 | 722 | 8.35 | 9.95 
 object (union, explicit) | 2,411 | 1,807 | 426 | 4.01 |  -  
 object (union, implicit) | 2,027 |  -  |  -  |  -  |  -  
 array (recursive) | 8,882 | 10,741 | 757 | 10 |  -  
 array (union, explicit) | 2,533 | 1,667 | 288 | 1.95 |  -  
 array (union, implicit) | 2,882 |  -  |  -  |  -  |  -  
 ultimate union | 905 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 119,794 | 121,921 | 509 | 62 | 6.01 
 object (hierarchical) | 13,366 | 27,500 | 775 | 42 | 11 
 object (recursive) | 11,747 | 15,885 | 729 | 8.03 | 9.92 
 object (union, explicit) | 2,252 | 1,796 | 412 | 4.02 |  -  
 object (union, implicit) | 1,805 |  -  |  -  |  -  |  -  
 array (recursive) | 9,084 | 10,643 | 758 | 9.97 |  -  
 array (union, explicit) | 2,444 | 1,685 | 278 | 1.82 |  -  
 array (union, implicit) | 2,827 |  -  |  -  |  -  |  -  
 ultimate union | 893 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 467 | 27 | 123 | 61 | 5.96 
 object (hierarchical) | 2,334 | 57 | 196 | 40 | 11 
 object (recursive) | 1,756 | 47 | 154 | 7.12 | 10 
 object (union, explicit) | 542 | 18 | 99 | 3.91 |  -  
 object (union, implicit) | 385 |  -  |  -  |  -  |  -  
 array (recursive) | 1,242 | 43 | 148 | 9.06 |  -  
 array (union, explicit) | 752 | 13 | 45 | 1.63 |  -  
 array (union, implicit) | 932 |  -  |  -  |  -  |  -  
 ultimate union | 273 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,196 | 28 | 116 | 61 | 5.57 
 object (hierarchical) | 2,364 | 62 | 200 | 41 | 12 
 object (recursive) | 1,856 | 48 | 162 | 7.00 | 9.84 
 object (union, explicit) | 446 | 17 | 86 | 3.22 |  -  
 object (union, implicit) | 307 |  -  |  -  |  -  |  -  
 array (recursive) | 1,094 | 50 | 152 | 9.04 |  -  
 array (union, explicit) | 791 | 12 | 46 | 1.92 |  -  
 array (union, implicit) | 629 |  -  |  -  |  -  |  -  
 ultimate union | 168 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 111,567 | 5.55 | 0.09 | 5.41 
 object (hierarchical) | 21,542 | 8.70 | 0.37 | 12 
 object (recursive) | 15,464 | 60 | 0.85 | 9.29 
 object (union, explicit) | 2,409 | 13 | 0.46 | 7.42 
 array (simple) | 11,994 | 72 | 0.70 | 17 
 array (hierarchical) | 24,443 | 731 | 20 | 15 
 array (recursive) | 14,730 | 674 | 9.31 | 8.13 
 array (union, explicit) | 4,494 | 129 | 3.38 | 19 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 979 | 839 | 704 | 396 | 81 | 5.03 
 object (hierarchical) | 474 | 410 | 451 | 339 | 134 | 11 
 object (recursive) | 687 | 617 | 627 | 135 | 120 | 9.14 
 object (union, explicit) | 217 | 183 | 188 | 142 | 87 | 3.81 
 array (simple) | 265 | 254 | 243 | 366 | 162 | 9.94 
 array (hierarchical) | 356 | 347 | 343 | 472 | 154 | 7.71 
 array (recursive) | 288 | 306 | 304 | 144 | 143 | 8.58 
 array (union, explicit) | 248 | 223 | 225 | 172 | 191 | 7.91 

> Unit: Megabytes/sec




## server
![server benchmark](images/server.svg)

 Types | fastify-class-transformer | fastify-pure | fastify-typia | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 5.09 | 121 | 145 | 67 | 45 | 4.77 
 object (hierarchical) | 10 | 144 | 173 | 136 | 91 | 9.87 
 object (recursive) | 8.68 | 99 | 180 | 143 | 95 | 8.20 
 object (union, explicit) | 3.56 | 70 | 123 | 101 | 69 | 3.60 
 array (simple) | 8.69 | 110 | 132 | 119 | 111 | 7.62 
 array (hierarchical) | 6.74 | 98 | 130 | 131 | 90 | 5.82 
 array (recursive) | 6.65 | 81 | 116 | 123 | 86 | 6.76 
 array (union, explicit) | 5.37 | 99 | 112 | 116 | 105 | 7.10 

> Unit: Megabytes/sec







Total elapsed time: 2,072,236 ms
