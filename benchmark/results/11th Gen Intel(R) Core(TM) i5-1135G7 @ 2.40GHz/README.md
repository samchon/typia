# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: v3.7.3


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 1,167,273 | 1,165,081 | 62,133 | 5,048 | 562 | 52 
 object (hierarchical) | 243,308 | 263,872 | 43,504 | 8,138 | 376 | 84 
 object (recursive) | 135,766 | 146,515 | 54,180 | 6,986 | 80 | 98 
 object (union, explicit) | 24,443 | 17,402 | 7,474 | 4,079 | 38 | 82 
 object (union, implicit) | 21,749 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 105,501 | 103,053 | 26,065 | 7,202 | 97 | 79 
 array (union, explicit) | 24,158 | 16,400 | 5,963 | 2,850 | 20 | 198 
 array (union, implicit) | 27,800 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 7,666 |  -  |  -  |  -  |  -  |  -  

> Unit: Kilobytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,163,581 | 1,159,320 | 4,887 | 565 | 51 
 object (hierarchical) | 198,662 | 243,843 | 6,757 | 358 | 73 
 object (recursive) | 114,688 | 136,986 | 6,871 | 79 | 92 
 object (union, explicit) | 24,224 | 17,296 | 4,014 | 38 | 82 
 object (union, implicit) | 21,852 |  -  |  -  |  -  |  -  
 array (recursive) | 86,338 | 102,783 | 7,151 | 97 |  -  
 array (union, explicit) | 24,374 | 16,386 | 2,885 | 18 | 193 
 array (union, implicit) | 27,734 |  -  |  -  |  -  |  -  
 ultimate union | 7,379 |  -  |  -  |  -  |  -  

> Unit: Kilobytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,099,146 | 1,170,878 | 4,840 | 594 | 52 
 object (hierarchical) | 128,043 | 267,533 | 7,766 | 410 | 85 
 object (recursive) | 114,969 | 147,651 | 7,038 | 77 | 90 
 object (union, explicit) | 22,996 | 17,703 | 4,236 | 38 | 82 
 object (union, implicit) | 18,892 |  -  |  -  |  -  |  -  
 array (recursive) | 87,594 | 103,436 | 7,292 | 98 | 76 
 array (union, explicit) | 23,931 | 15,723 | 2,898 | 19 | 193 
 array (union, implicit) | 28,036 |  -  |  -  |  -  |  -  
 ultimate union | 7,700 |  -  |  -  |  -  |  -  

> Unit: Kilobytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 5,436 | 285 | 1,251 | 592 | 52 
 object (hierarchical) | 22,930 | 655 | 2,081 | 399 | 90 
 object (recursive) | 18,023 | 433 | 1,518 | 80 | 100 
 object (union, explicit) | 5,227 | 174 | 961 | 38 |  -  
 object (union, implicit) | 3,788 |  -  |  -  |  -  |  -  
 array (recursive) | 13,987 | 605 | 1,629 | 183 |  -  
 array (union, explicit) | 9,493 | 126 | 513 | 83 |  -  
 array (union, implicit) | 10,686 |  -  |  -  |  -  |  -  
 ultimate union | 2,586 |  -  |  -  |  -  |  -  

> Unit: Kilobytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 11,846 | 283 | 1,411 | 592 | 54 
 object (hierarchical) | 22,682 | 660 | 2,140 | 413 | 91 
 object (recursive) | 17,209 | 469 | 1,587 | 75 | 99 
 object (union, explicit) | 4,547 | 194 | 955 | 55 |  -  
 object (union, implicit) | 3,199 |  -  |  -  |  -  |  -  
 array (recursive) | 11,227 | 607 | 1,628 | 177 |  -  
 array (union, explicit) | 7,974 | 126 | 521 | 84 |  -  
 array (union, implicit) | 7,686 |  -  |  -  |  -  |  -  
 ultimate union | 2,013 |  -  |  -  |  -  |  -  

> Unit: Kilobytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 1,157,181 | 61 | 0 | 51 
 object (hierarchical) | 250,795 | 105 | 4 | 85 
 object (recursive) | 154,551 | 636 | 9 | 97 
 object (union, explicit) | 24,700 | 128 | 5 | 82 
 array (simple) | 124,751 | 655 | 28 | 191 
 array (hierarchical) | 247,515 | 6,803 | 81 | 160 
 array (recursive) | 144,996 | 7,124 | 94 | 76 
 array (union, explicit) | 44,793 | 1,304 | 34 | 192 

> Unit: Kilobytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 11,376 | 8,576 | 6,955 | 3,966 | 776 | 51 
 object (hierarchical) | 4,987 | 4,793 | 4,715 | 5,508 | 1,286 | 105 
 object (recursive) | 6,756 | 6,452 | 6,354 | 1,309 | 1,345 | 91 
 object (union, explicit) | 2,033 | 1,834 | 1,807 | 1,365 | 907 | 39 
 array (simple) | 2,604 | 2,423 | 2,417 | 3,905 | 1,627 | 99 
 array (hierarchical) | 3,554 | 3,580 | 3,492 | 4,291 | 1,493 | 83 
 array (recursive) | 3,146 | 3,029 | 3,069 | 1,432 | 1,363 | 89 
 array (union, explicit) | 2,470 | 2,191 | 2,327 | 1,665 | 1,858 | 82 

> Unit: Kilobytes/sec




## server
![server benchmark](images/server.svg)

 Types | express-typia | fastify | express-pure | express-class-transformer 
-------|------|------|------|------
 object (simple) | 70 | 129 | 49 | 5 
 object (hierarchical) | 142 | 195 | 99 | 10 
 object (recursive) | 153 | 106 | 106 | 9 
 object (union, explicit) | 117 | 75 | 76 | 3 
 array (simple) | 130 | 133 | 121 | 9 
 array (hierarchical) | 169 | 79 | 111 | 7 
 array (recursive) | 149 | 105 | 106 | 8 
 array (union, explicit) | 137 | 121 | 128 | 7 

> Unit: Kilobytes/sec







Total elapsed time: 1,861,223 ms
