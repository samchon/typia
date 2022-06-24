
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

{ x: 53, y: 86 } undefined $input[2].p3
## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 15909.925821264571 | 20465.69872958258
object (recursive) | 28025.574499629354 | 22822.0814479638
object (union, explicit) | 3810.0794858785725 | Failed
object (union, implicit) | 3693.536804308797 | 1871.545929798357
array (simple) | 3393.634534479605 | 2501.471129091578
array (recursive) | 874.8597081930415 | 1499.9109210760732
array (recursive, union) | 1153.558052434457 | 82.95012380615493



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 63104.49617913631 | 37863.425098319625
object (recursive) | 44789.607743250126 | 11926.427525622254
object (union, explicit) | 4258.6300379540935 | Failed
object (union, implicit) | 4306.437152590999 | 2814.1608703406455
array (simple) | 14401.497169983566 | 7539.881699229253
array (recursive) | 2247.795738427627 | 1390.0866040169524
array (recursive, union) | 2141.850220264317 | 306.8783068783069



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 10267.696267696268 | 9527.085590465871 | 1794.341675734494 | 14000.70434935728
object (hierarchical) | 1496.6323998582063 | Failed | 479.1039156626506 | 2495.2229299363057
object (recursive) | 4899.836095428884 | 416.1160058737151 | 368.47826086956525 | 5089.627755692086
object (union, implicit) | 1815.7558033266314 | Failed | 870.6896551724137 | 1986.7354458364039
object (union, explicit) | 1677.8631409683758 | Failed | 825.3315897627499 | 1660.8996539792388
array (hierarchical) | 125.17556179775282 | Failed | 65.85365853658537 | 128.45499645641388
array (recursive) | 230.86757990867582 | 121.65628435324294 | 124.81259370314842 | 232.11999268337297
array (recursive, union) | 265.3246282190787 | Failed | 241.70085788884745 | 337.31019522776575



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 31073.94807520143 | 4.845322400298174 | 5471.851851851851 | 53857.87358421629
object (hierarchical) | 4214.7874306839185 | Failed | 1403.8745387453876 | 4915.068493150685
object (recursive) | 4856.191004997224 | 48.29083016820402 | 1062.1707060063225 | 5168.097014925373
object (union, implicit) | 1827.661115133961 | Failed | 849.5688864428546 | 1853.7463976945246
object (union, explicit) | 1738.121752041574 | Failed | 832.7702702702702 | 1615.8480920211794
array (hierarchical) | 155.85871799663613 | Failed | 75.62869822485207 | 153.7037037037037
array (recursive) | 231.86792802819514 | 37.41245853298931 | 123.2674182221401 | 227.1386430678466
array (recursive, union) | 275.6255792400371 | Failed | 241.2704309063893 | 340.3515195898938



