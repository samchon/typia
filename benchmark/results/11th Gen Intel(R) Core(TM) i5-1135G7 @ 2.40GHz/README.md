# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - NodeJS version: v16.20.0
> - Typia version: 3.7.2


## is
![is benchmark](images/is.svg)

 Types | typia | typebox | ajv | io-ts | zod | class-validator 
-------|------|------|------|------|------|------
 object (simple) | 9,021,581.893 | 9,280,489.42 | 506,109.412 | 40,228.918 | 4,475.965 | 419.326 
 object (hierarchical) | 283,780.278 | 322,451.169 | 52,749.093 | 9,729.341 | 489.862 | 102.817 
 object (recursive) | 114,983.202 | 128,973.812 | 45,650.713 | 6,441.882 | 72.892 | 86.466 
 object (union, explicit) | 23,823.134 | 15,832.208 | 7,203.442 | 3,942.475 | 38.048 | 78.797 
 object (union, implicit) | 15,876.804 |  -  |  -  |  -  |  -  |  -  
 array (recursive) | 9,228.338 | 8,931.176 | 2,407.489 | 665.237 | 8.343 | 6.922 
 array (union, explicit) | 3,448.879 | 2,371.386 | 851.932 | 412.187 | 2.967 | 28.037 
 array (union, implicit) | 2,789.627 |  -  |  -  |  -  |  -  |  -  
 ultimate union | 523.318 |  -  |  -  |  -  |  -  |  -  
## assert
![assert benchmark](images/assert.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 417,544.228 | 2,456.994 | 16,273.823 | 4,642.232 | 429.606 
 object (hierarchical) | 96,889.319 | 757.664 | 3,638.669 | 485.863 | 100.614 
 object (recursive) | 54,514.63 | 435.76 | 1,843.991 | 70.153 | 82.823 
 object (union, explicit) | 6,355.171 | 168.791 | 1,293.38 | 37.567 | 73.029 
 object (union, implicit) | 4,746.798 |  -  |  -  |  -  | 68.532 
 array (recursive) | 2,321.848 | 43.323 | 190.869 | 9.078 | NaN 
 array (union, explicit) | 2,336.06 | 17.609 | 87.679 | 2.721 | 27.662 
 array (union, implicit) | 1,687.716 |  -  |  -  |  -  | 18.767 
 ultimate union | 240.791 |  -  |  -  |  -  |  -  
## validate
![validate benchmark](images/validate.svg)

 Types | typia | typebox | io-ts | zod | class-validator 
-------|------|------|------|------|------
 object (simple) | 96,330.508 | 2,614.952 | 15,855.546 | 4,611.362 | 423.557 
 object (hierarchical) | 35,671.11 | 747.738 | 3,741.558 | 479.757 | 105.902 
 object (recursive) | 18,035.475 | 422.418 | 1,915.895 | 68.595 | 87.24 
 object (union, explicit) | 4,579.502 | 164.67 | 1,254.216 | 37.273 | 79.519 
 object (union, implicit) | 3,587.138 |  -  |  -  |  -  | 66.943 
 array (recursive) | 1,233.556 | 45.361 | 181.159 | 8.886 | 6.507 
 array (union, explicit) | 1,698.894 | 18.473 | 90.146 | 2.949 | 27.783 
 array (union, implicit) | 1,128.865 |  -  |  -  |  -  | 17.864 
 ultimate union | 165.179 |  -  |  -  |  -  |  -  
## optimizer
![optimizer benchmark](images/optimizer.svg)

 Types | typia | typebox | ajv | class-validator 
-------|------|------|------|------
 object (simple) | 9,349,061.991 | 493.76 | 7.727 | 421.717 
 object (hierarchical) | 290,987.736 | 133.769 | 5.339 | 100.334 
 object (recursive) | 141,604.938 | 587.936 | 8.378 | 86.006 
 object (union, explicit) | 24,194.536 | 126.814 | 4.798 | 76.825 
 array (simple) | 88,048.27 | 648.108 | 8.092 | 73.688 
 array (hierarchical) | 15,583.955 | 378.527 | 6.943 | 5.232 
 array (recursive) | 10,552.741 | 595.129 | 6.884 | 6.247 
 array (union, explicit) | 6,247.556 | 172.294 | 4.696 | 24.527 
## stringify
![stringify benchmark](images/stringify.svg)

 Types | typia.stringify | typia.isStringify | typia.assertStringify | fast-json-stringify | JSON.stringify | class-transformer 
-------|------|------|------|------|------|------
 object (simple) | 20,722.103 | 15,585.74 | 8,988.097 | 6,858.373 | 1,413.308 | 97.356 
 object (hierarchical) | 1,420.794 | 1,326.001 | 1,196.8 | 1,577.447 | 370.665 | 31.434 
 object (recursive) | 1,496.173 | 1,424.868 | 1,237.094 | 272.489 | 285.091 | 18.755 
 object (union, explicit) | 473.895 | 404.62 | 336.814 | 291.093 | 213.876 | 9.214 
 array (simple) | 239.634 | 174.83 | 237.361 | 743.883 | 227.443 | 11.36 
 array (hierarchical) | 22.234 | 23.993 | 16.673 | 34.698 | 9.011 | 0.539 
 array (recursive) | 67.418 | 66.654 | 61.907 | 31.37 | 32.123 | 2.02 
 array (union, explicit) | 83.864 | 81.45 | 76.977 | 60.494 | 66.667 | 2.936 



> Total elapsed time: 1,091,541 ms
