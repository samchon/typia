
> typescript-json@3.0.2 benchmark
> node benchmark/index.js

## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 109697.83783783784 | 32173.0979250091 | 4110.231873389768
object (hierarchical) | 4877.503157135126 | 4708.547322083639 | 1168.6634219393486
object (recursive) | 5512.32977548767 | 910.4422147900409 | 910.268270120259
object (union, implicit) | 2149.3634570557647 | 1593.6588921282798 | 472.992700729927
object (union, explicit) | 2007.513285688107 | 1335.338071806087 | 458.4575260804769
array (hierarchical) | 251.6316171138506 | 352.18744279699797 | 68.21506949524506
array (recursive) | 246.9021638616608 | 71.71903881700554 | 72.56108934900206
array (recursive, union) | 401.98968312453945 | 161.7460604962869 | 175.08856983031885
ultimate union | 1212.9291453615779 | Failed | 137.31734732109405



## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 19034.11978221416 | 22015.165357208112
object (recursive) | 19846.841913106975 | 22100.623167155423
object (union, explicit) | 4259.388807069219 | 10362326.862636346
object (union, implicit) | 4263.948100092679 | 2245.5057199927364
array (simple) | 6389.554641387945 | 4486.881559220389
array (recursive) | 1904.5301385248972 | 1500.646830530401
array (recursive, union) | 1936.90036900369 | 229.94350282485877
ultimate union | 4170.197224251278 | 32.475598935226266



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 102259.0539541759 | 44246.57283860355
object (recursive) | 68858.08219178082 | 44450.46829971182
object (union, explicit) | 12806.001765225066 | Failed
object (union, implicit) | 15126.428441864684 | 7343.302519485227
array (simple) | 7072.57184430702 | 15952.40710232473
array (recursive) | 7222.098214285714 | 4492.433910665451
array (recursive, union) | 7189.139268562985 | 1078.8292332555216
ultimate union | 7396.359048305696 | 285.3205952599669



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 39416.92789968652 | 5.331437711036076 | 4353.537214443626 | 53334.75046210721
object (hierarchical) | 5081.3503043718865 | Failed | 1229.419451185365 | 5710.282108389013
object (recursive) | 5121.234798877455 | 52.74806344522317 | 935.5742296918767 | 5785.882779894756
object (union, implicit) | 2096.8908170643526 | Failed | 561.5846789335336 | 2125.2510498448055
object (union, explicit) | 1998.155321896329 | Failed | 536.231884057971 | 1769.5488046018336
array (hierarchical) | 128.0431146627021 | Failed | 33.3028362305581 | 123.74581939799332
array (recursive) | 254.04240028745957 | 31.778864234674693 | 73.2394366197183 | 242.98718186884636
array (recursive, union) | 397.45222929936307 | Failed | 151.0791366906475 | 465.4889819704972



