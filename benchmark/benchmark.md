
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

{ x: 59, y: 87 } undefined $input[2].p3
## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 18395.28335093277 | 23005.0107372942
object (recursive) | 32288.99167437558 | 23339.18237819675
object (union, explicit) | 4889.658945832573 | Failed
object (union, implicit) | 4355.084588213423 | 2413.372737347617
array (simple) | 7324.16760194538 | 5049.8707055781315
array (recursive) | 1695.5559653328417 | 1548.7236817588969
array (recursive, union) | 3075.4853928506623 | 240.1193139448173



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 86439.36308091095 | 48565.78470460312
object (recursive) | 70309.24587733926 | 49588.09567281358
object (union, explicit) | 15389.328426862927 | Failed
object (union, implicit) | 15422.11417251936 | 8094.841930116473
array (simple) | 33199.447513812156 | 18418.35980790543
array (recursive) | 6334.039548022599 | 4739.236698627562
array (recursive, union) | 7536.890524379025 | 1115.4542164314153



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 147681.77680684507 | 34514.31697975561 | 4541.287808498793 | 227603.85169186463
object (hierarchical) | 5091.00623330365 | Failed | 1255.0599700149924 | 5826.251350378106
object (recursive) | 5903.763340198465 | 959.7593080105304 | 971.6058668672434 | 6512.936732766761
object (union, implicit) | 2314.347904951932 | Failed | 567.5874769797422 | 2276.687668766877
object (union, explicit) | 2088.9976436469096 | Failed | 537.1733529628266 | 1895.2363569994525
array (hierarchical) | 381.75615011671755 | Failed | 93.59870898332437 | 363.6363636363637
array (recursive) | 258.67283401529977 | 72.62468147069531 | 75.09881422924902 | 239.65422107780026
array (recursive, union) | 342.88240495137046 | Failed | 144.7817495958326 | 411.72174548110274



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 149403.8247307835 | 5.702722590139809 | 4535.635562086701 | 225758.29725829727
object (hierarchical) | 5447.78362133734 | Failed | 1256.655418072741 | 6139.393939393939
object (recursive) | 5568.236380424746 | 52.534900808229246 | 956.0975609756098 | 5818.394528437725
object (union, implicit) | 2220.781559517378 | Failed | 546.4663327768503 | 2260.418596036303
object (union, explicit) | 2066.3693131132914 | Failed | 506.8725287139898 | 1962.5570776255709
array (hierarchical) | 71.77299703264094 | Failed | 17.651430694908957 | 66.07109622184998
array (recursive) | 253.03827317250136 | 31.083318006253446 | 73.28300497146013 | 246.1933590166942
array (recursive, union) | 339.1224862888483 | Failed | 146.59977703455965 | 414.25430560644924



