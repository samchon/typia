
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

{ x: 21, y: 99 } undefined $input[2].p3
## assert
 Components | typescript-json | typescript-is
------------|-----------------|---------------
object (hierarchical) | 17238.095238095237 | 25691.101385849746
object (recursive) | 17398.094526433775 | 22809.455842997322
object (union, explicit) | 4078.53498542274 | Failed
object (union, implicit) | 4067.6328502415463 | 2891.694109037687
array (simple) | 8265.351281578462 | 6825.4208435785895
array (recursive) | 1039.0980178214222 | 1888.8680659670165
array (recursive, union) | 2084.2236467236467 | 308.55359765051395



## is
 Components | typescript-json | typescript-is
------------|-----------------|---------------
object (hierarchical) | 78270.19917324313 | 52926.46793134598
object (recursive) | 59921.564991655854 | 46821.920357275776
object (union, explicit) | 17732.214520248082 | Failed
object (union, implicit) | 15319.766380726409 | 8881.525360977415
array (simple) | 33013.48193420816 | 20366.94214876033
array (recursive) | 5498.984302862419 | 4862.405599557929
array (recursive, union) | 5947.717231222386 | 1215.5314852212227



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal
------------|-----------------|---------------------|------------------|-------
object (simple) | 41142.38165680473 | 36359.74382433669 | 14923.821940771093 | 63113.3133881825
object (hierarchical) | 6486.123707600218 | Failed | 3446.1276273433064 | 7578.713146671612
object (recursive) | 5252.407407407407 | 2833.1814038286234 | 2995.6529956529953 | 5393.26660600546
object (union, implicit) | 2574.080882352941 | Failed | 1976.831091180867 | 2363.2311977715876
object (union, explicit) | 2473.3135656041513 | Failed | 1858.9002795899346 | 2094.184345281639
array (hierarchical) | 160.4151493080845 | Failed | 145.59881897028973 | 138.29787234042553
array (recursive) | 318.81918819188195 | 285.41979010494754 | 285.47169811320754 | 271.1452095808383
array (recursive, union) | 430.192131747484 | Failed | 522.226304188097 | 465.4419789014187



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal
------------|-----------------|---------------------|------------------|-------
object (simple) | 43514.50495976044 | 10.57009183850286 | 15628.663875142749 | 66992.42284235817
object (hierarchical) | 6869.8541628207495 | Failed | 3346.3614368136978 | 7896.398891966759
object (recursive) | 5311.632270168855 | 82.80961182994454 | 2855.190247506465 | 5908.545727136431
object (union, implicit) | 2523.0427540255414 | Failed | 1930.4476507584168 | 2318.7058386017106
object (union, explicit) | 2399.889380530973 | Failed | 1828.8584474885845 | 2078.1855061773927
array (hierarchical) | 213.99481673454275 | Failed | 191.57303370786516 | 181.0360950065457
array (recursive) | 307.2410632447296 | 69.35208056241687 | 281.7792667038898 | 258.0347247875878
array (recursive, union) | 420.6690338254532 | Failed | 535.5593284285984 | 458.9981447124305


