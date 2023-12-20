# Benchmark of `typia`
> - CPU: AMD Ryzen 9 7940HS w/ Radeon 780M Graphics
> - Memory: 31,954 MB
> - OS: win32
> - NodeJS version: v20.10.0
> - Typia version: v5.3.5


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 202,897 | 206,304 | 7,997 | 841 | 125 | 10 
 object (hierarchical) | 51,903 | 36,816 | 10,211 | 1,307 | 65 | 20 
 object (recursive) | 20,193 | 21,930 | 4,870 | 1,185 | 11 | 19 
 object (union, explicit) | 4,455 | 2,781 | 233 | 685 | 6.24 |  -  
 object (union, implicit) | 4,523 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 10,170 | 11,859 | 4,143 | 1,272 | 15 | 15 
 array (union, explicit) | 4,496 | 2,614 | 418 | 463 | 2.93 |  -  
 array (union, implicit) | 3,440 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 2,111 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 204,764 | 206,391 | 8,031 | 843 | 126 | 11 
 object (hierarchical) | 45,892 | 35,662 | 10,116 | 1,315 | 64 | 14 
 object (recursive) | 19,025 | 21,820 | 4,900 | 1,200 | 12 | 19 
 object (union, explicit) | 4,474 | 2,900 | 229 | 675 | 6.28 |  -  
 object (union, implicit) | 4,413 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 10,003 | 11,707 | 4,220 | 1,280 | 16 | 15 
 array (union, explicit) | 4,550 | 2,637 | 397 | 463 | 2.95 |  -  
 array (union, implicit) | 3,440 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 2,057 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 200,840 | 202,730 | 7,922 | 851 | 126 | 10 
 object (hierarchical) | 28,741 | 35,827 | 9,397 | 1,296 | 65 | 20 
 object (recursive) | 19,742 | 21,589 | 4,953 | 1,216 | 11 | 19 
 object (union, explicit) | 4,471 | 3,016 | 139 | 639 | 6.29 |  -  
 object (union, implicit) | 4,054 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 10,611 | 11,684 | 3,809 | 1,266 | 15 | 15 
 array (union, explicit) | 4,541 | 2,641 | 182 | 463 | 2.93 |  -  
 array (union, implicit) | 3,474 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 2,069 |  -  |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## assert-error
![assert-error benchmark](images/assert-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 875 | 36 | 200 | 119 | 7.00 
 object (hierarchical) | 3,401 | 81 | 326 | 62 | 12 
 object (recursive) | 2,754 | 58 | 213 | 11 | 12 
 object (union, explicit) | 790 | 21 | 144 | 5.92 |  -  
 object (union, implicit) | 596 |  -  |  -  |  -  |  -  
 array (recursive) | 1,644 | 53 | 138 | 12 | 5.89 
 array (union, explicit) | 1,498 | 15 | 64 | 2.36 |  -  
 array (union, implicit) | 1,283 |  -  |  -  |  -  |  -  
 ultimate union | 465 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## validate-error
![validate-error benchmark](images/validate-error.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 1,774 | 34 | 235 | 118 | 6.84 
 object (hierarchical) | 3,501 | 78 | 333 | 60 | 12 
 object (recursive) | 2,483 | 57 | 216 | 10 | 11 
 object (union, explicit) | 703 | 20 | 140 | 5.90 |  -  
 object (union, implicit) | 495 |  -  |  -  |  -  |  -  
 array (recursive) | 1,190 | 54 | 195 | 13 | 6.39 
 array (union, explicit) | 1,343 | 15 | 67 | 2.85 |  -  
 array (union, implicit) | 1,018 |  -  |  -  |  -  |  -  
 ultimate union | 330 |  -  |  -  |  -  |  -  

> Unit: Megabytes/sec




## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 199,683 | 8.76 | 0.03 | 10 
 object (hierarchical) | 49,403 | 16 | 0.15 | 19 
 object (recursive) | 22,383 | 88 | 0.32 | 18 
 object (union, explicit) | 4,405 | 19 | 0.16 | 19 
 array (simple) | 16,308 | 223 | 0.61 | 42 
 array (hierarchical) | 34,076 | 576 | 5.61 | 34 
 array (recursive) | 10,450 | 945 | 3.37 | 15 
 array (union, explicit) | 7,166 | 190 | 1.05 | 49 

> Unit: Megabytes/sec




## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 2,358 | 1,711 | 1,715 | 714 | 121 | 9.63 
 object (hierarchical) | 840 | 847 | 815 | 519 | 193 | 19 
 object (recursive) | 957 | 823 | 901 | 274 | 196 | 18 
 object (union, explicit) | 299 | 254 | 261 | 222 | 112 | 7.52 
 array (simple) | 360 | 352 | 351 | 627 | 237 | 18 
 array (hierarchical) | 452 | 444 | 452 | 801 | 204 | 15 
 array (recursive) | 408 | 396 | 378 | 823 | 192 | 16 
 array (union, explicit) | 321 | 300 | 306 | 81 | 258 | 15 

> Unit: Megabytes/sec




## server-assert
![server-assert benchmark](images/server-assert.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 90 | 85 | 7.13 | 51 | 6.10 
 object (hierarchical) | 165 | 162 | 12 | 134 | 12 
 object (recursive) | 165 | 154 | 11 | 137 | 10 
 object (union, explicit) | 107 | 69 | 4.35 | 83 | 4.20 
 array (simple) | 152 | 149 | 11 | 129 | 9.73 
 array (hierarchical) | 94 | 96 | 5.95 | 128 | 7.47 
 array (recursive) | 122 | 122 | 8.29 | 115 | 8.02 
 array (union, explicit) | 139 | 100 | 7.97 | 141 | 7.77 

> Unit: Megabytes/sec




## server-stringify
![server-stringify benchmark](images/server-stringify.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-pure | express-class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 139 | 136 | 8.57 | 71 | 53 | 7.28 
 object (hierarchical) | 199 | 179 | 16 | 176 | 120 | 15 
 object (recursive) | 222 | 119 | 14 | 182 | 131 | 11 
 object (union, explicit) | 158 | 93 | 5.52 | 135 | 90 | 5.80 
 array (simple) | 152 | 167 | 14 | 150 | 141 | 13 
 array (hierarchical) | 163 | 75 | 12 | 169 | 128 | 11 
 array (recursive) | 137 | 85 | 11 | 141 | 124 | 11 
 array (union, explicit) | 150 | 35 | 12 | 136 | 151 | 12 

> Unit: Megabytes/sec




## server-performance
![server-performance benchmark](images/server-performance.svg)

 Types | fastify-typia | fastify-pure | fastify-class-transformer | express-typia | express-class-transformer 
-------|------|------|------|------|------
 object (simple) | 126 | 118 | 9.38 | 78 | 12 
 object (hierarchical) | 198 | 176 | 17 | 159 | 23 
 object (recursive) | 187 | 130 | 15 | 160 | 22 
 object (union, explicit) | 128 | 77 | 4.23 | 105 | 4.23 
 array (simple) | 157 | 154 | 11 | 141 | 11 
 array (hierarchical) | 145 | 105 | 7.95 | 147 | 6.37 
 array (recursive) | 131 | 131 | 11 | 129 | 16 
 array (union, explicit) | 151 | 54 | 8.11 | 136 | 7.96 

> Unit: Megabytes/sec







Total elapsed time: 4,365,887 ms
