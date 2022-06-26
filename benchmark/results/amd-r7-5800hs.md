
> typescript-json@3.0.2 benchmark
> node benchmark/index.js

{ x: 4, y: 64 } undefined $input[2].p3
## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 41251.53032832499 | 34672.28915662651 | 4352.649917476618 | 58388.226664221525
object (hierarchical) | 4928.817243253034 | Failed | 1266.6666666666667 | 5693.122676579926
object (recursive) | 5147.537948907811 | 938.9799635701274 | 950.3231763619575 | 6271.420774968165
object (union, implicit) | 2119.142753359971 | Failed | 530.051622418879 | 2214.7725179591084
object (union, explicit) | 2045.8015267175574 | Failed | 518.0902648265572 | 1923.2312180889862
array (hierarchical) | 109.54446854663775 | Failed | 28.469750889679712 | 103.31702011963023
array (recursive) | 260.71821179919385 | 74.12272471383 | 73.41158934227688 | 246.9868347858335
array (recursive, union) | 408.0427965320051 | Failed | 155.16919050289772 | 466.55850009013886



## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 20175.44179267626 | 23229.535398230088
object (recursive) | 22023.38858195212 | 22485.558583106267
object (union, explicit) | 5118.536052439913 | Failed
object (union, implicit) | 4444.236876517841 | Failed
array (simple) | 3221.3218080316947 | 2452.0693314467635
array (recursive) | 1592.552225249773 | 1516.2112932604734
array (recursive, union) | 1823.6042916893982 | 235.01461988304092



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 102580.87201125176 | 47721.91561331672
object (recursive) | 85596.00144092219 | 47513.667217024406
object (union, explicit) | 16855.331841909025 | Failed
object (union, implicit) | 17854.829704075935 | Failed
array (simple) | 16826.8156424581 | 31814.498141263943
array (recursive) | 7305.888670127081 | 4727.03263535182
array (recursive, union) | 8150.408719346049 | 1095.0848972296694



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



