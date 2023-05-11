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
 object (simple) | 121,971 | 123,028 | 6,438 | 527 | 59 | 6 
 object (hierarchical) | 24,552 | 27,349 | 4,725 | 822 | 42 | 11 
 object (recursive) | 14,423 | 15,965 | 5,574 | 736 | 8 | 10 
 object (union, explicit) | 2,637 | 1,846 | 812 | 424 | 4 |  -  
 object (union, implicit) | 2,080 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 10,605 | 10,711 | 2,871 | 754 | 10 |  -  
 array (union, explicit) | 2,549 | 1,712 | 654 | 300 | 1 |  -  
 array (union, implicit) | 2,955 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 906 |  -  |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 121,859 | 123,570 | 521 | 60 | 5 
 object (hierarchical) | 23,025 | 26,914 | 838 | 41 | 10 
 object (recursive) | 13,534 | 15,591 | 720 | 7 | 9 
 object (union, explicit) | 2,620 | 1,826 | 428 | 3 |  -  
 object (union, implicit) | 1,901 |  -  |  -  |  -  |  -  
 array (recursive) | 8,985 | 10,766 | 759 | 10 |  -  
 array (union, explicit) | 2,555 | 1,654 | 299 | 1 |  -  
 array (union, implicit) | 2,874 |  -  |  -  |  -  |  -  
 ultimate union | 911 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 120,363 | 122,546 | 523 | 63 | 4 
 object (hierarchical) | 12,712 | 26,374 | 790 | 41 | 11 
 object (recursive) | 12,022 | 16,008 | 725 | 8 | 9 
 object (union, explicit) | 2,298 | 1,794 | 429 | 4 |  -  
 object (union, implicit) | 2,154 |  -  |  -  |  -  |  -  
 array (recursive) | 9,291 | 10,867 | 756 | 8 |  -  
 array (union, explicit) | 2,573 | 1,672 | 299 | 1 |  -  
 array (union, implicit) | 2,922 |  -  |  -  |  -  |  -  
 ultimate union | 889 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 544 | 28 | 125 | 62 | 6 
 object (hierarchical) | 2,236 | 67 | 199 | 41 | 11 
 object (recursive) | 1,916 | 48 | 149 | 7 | 10 
 object (union, explicit) | 547 | 18 | 100 | 3 |  -  
 object (union, implicit) | 404 |  -  |  -  |  -  |  -  
 array (recursive) | 1,365 | 50 | 141 | 10 |  -  
 array (union, explicit) | 996 | 13 | 48 | 1 |  -  
 array (union, implicit) | 1,129 |  -  |  -  |  -  |  -  
 ultimate union | 285 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,279 | 29 | 143 | 62 | 6 
 object (hierarchical) | 2,377 | 68 | 219 | 41 | 11 
 object (recursive) | 1,912 | 47 | 159 | 7 | 10 
 object (union, explicit) | 469 | 17 | 98 | 3 |  -  
 object (union, implicit) | 341 |  -  |  -  |  -  |  -  
 array (recursive) | 1,117 | 49 | 155 | 9 |  -  
 array (union, explicit) | 847 | 12 | 51 | 2 |  -  
 array (union, implicit) | 772 |  -  |  -  |  -  |  -  
 ultimate union | 233 |  -  |  -  |  -  |  -  

> Unit: Metabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 122,833 | 6 | 0 | 6 
 object (hierarchical) | 26,694 | 11 | 0 | 12 
 object (recursive) | 16,549 | 64 | 0 | 9 
 object (union, explicit) | 2,683 | 12 | 0 | 8 
 array (simple) | 13,352 | 204 | 0 | 19 
 array (hierarchical) | 26,133 | 1,397 | 25 | 16 
 array (recursive) | 15,396 | 714 | 9 | 8 
 array (union, explicit) | 4,694 | 136 | 3 | 21 

> Unit: Metabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 1,206 | 960 | 754 | 428 | 82 | 5 
 object (hierarchical) | 541 | 514 | 504 | 362 | 135 | 11 
 object (recursive) | 699 | 693 | 644 | 140 | 144 | 9 
 object (union, explicit) | 226 | 197 | 194 | 146 | 97 | 4 
 array (simple) | 274 | 261 | 260 | 412 | 177 | 10 
 array (hierarchical) | 383 | 381 | 371 | 532 | 160 | 8 
 array (recursive) | 330 | 319 | 321 | 149 | 150 | 9 
 array (union, explicit) | 262 | 245 | 247 | 174 | 193 | 8 

> Unit: Metabytes/sec




## server
![server benchmark](images/server.svg)

 Types | fastify-class-transformer | fastify-pure | fastify-typia | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 5 | 123 | 152 | 70 | 49 | 5 
 object (hierarchical) | 10 | 154 | 176 | 139 | 97 | 10 
 object (recursive) | 8 | 103 | 195 | 152 | 102 | 8 
 object (union, explicit) | 3 | 70 | 131 | 115 | 74 | 3 
 array (simple) | 9 | 130 | 144 | 136 | 119 | 9 
 array (hierarchical) | 7 | 78 | 165 | 165 | 110 | 7 
 array (recursive) | 8 | 101 | 145 | 143 | 99 | 8 
 array (union, explicit) | 7 | 114 | 137 | 132 | 124 | 7 

> Unit: Metabytes/sec







Total elapsed time: 2,071,323 ms
