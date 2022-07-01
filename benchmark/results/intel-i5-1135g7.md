
> typescript-json@3.0.6 benchmark
> node benchmark/index.js

## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 99955.16992046277 | 47312.511448983336 | 69754.88941692561
object (recursive) | 67936.18977565282 | 44818.572195383786 | Failed
object (union, explicit) | 13053.723601333828 | Failed | 1161.4963503649635
object (union, implicit) | 14902.390438247012 | Failed | Failed
array (recursive) | 5735.9486986043 | 4535.425844346549 | Failed
array (union, explicit) | 5173.005483813905 | 1007.7575320223706 | Failed
array (union, implicit) | 5628.102257883934 | 1134.0863545272364 | Failed
ultimate union | 7411.786716557531 | 274.72328071130465 | Failed



## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 10106.39070442992 | 18954.05454878272
object (recursive) | 8701.60250506539 | 23432.617549055904
object (union) | 2739.2409660432177 | 1953.891015126663
array (recursive) | 649.4958753437213 | 1812.046848856665
array (union) | 1499.6445076430855 | 214.33810047671435
ultimate union | 3253.9827870353415 | 32.75737940964723



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 29700.670411306397 | 5.1310243723657685 | 6720.186915887851
object (hierarchical) | 4850.824723581656 | 1.0932944606413992 | 1712.7922448203763
object (recursive) | 4695.71585499817 | 43.08897593732513 | 1351.9034354688952
object (union) | 1911.2132352941176 | 0.9231905465288035 | 987.0525514089871
array (hierarchical) | 108.17307692307692 | 2.418154761904762 | 60.413947417490206
array (recursive) | 230.58252427184468 | 34.04414515525627 | 133.45421577515867
array (union) | 334.4208809135399 | 2.2325581395348837 | 272.322257286059
ultimate union | 1018.9942112879885 | Failed | 216.56291265798905



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 29721.74073391112 | 26958.148148148146 | 6453.874538745387
object (hierarchical) | 5000.55824339412 | 4636.041744316064 | 1693.3608402100526
object (recursive) | 5081.553037339773 | 1327.468049638822 | 1315.6352984254852
object (union) | 1979.5096963044273 | 1508.5651132805303 | 975.9196056124383
array (hierarchical) | 237.40221939239586 | 335.74610244988867 | 121.85650887573964
array (recursive) | 244.3658036878376 | 138.00779076238175 | 137.47680890538035
array (union) | 364.117539697025 | 242.10139603232918 | 261.5576102418208
ultimate union | 1068.0259833994949 | Failed | 213.8157894736842



