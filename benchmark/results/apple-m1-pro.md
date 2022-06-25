
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 19306.58250676285 | 23957.02267739576
object (recursive) | 25654.35168738899 | 21977.596741344198
object (union, explicit) | 4687.076111529766 | Failed
object (union, implicit) | 4219.695580414451 | 2196.7482645232003
array (simple) | 7797.160243407708 | 5242.9106474050295
array (recursive) | 1464.1419685327478 | 1448.5619469026547
array (recursive, union) | 2578.575312669929 | 221.88961646398505
​
​
​
## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 62741.82139699381 | 42977.62663325577
object (recursive) | 59140.9284261143 | 34507.89522571057
object (union, explicit) | 14072.371992039081 | Failed
object (union, implicit) | 12095.125928610256 | 6918.5667752443
array (simple) | 30235.325506937035 | 17218.893585737915
array (recursive) | 4050.6676422169385 | 3248.785954426597
array (recursive, union) | 5378.40358075345 | 1023.3885819521179
​
​
​
## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 39485.63535911602 | 30323.54560469811 | 10555.514157973173 | 60187.036031142496
object (hierarchical) | 5967.991169977925 | Failed | 2570.399848398711 | 6510.561473190107
object (recursive) | 5305.1651761270305 | 2064.2843637738706 | 2096.863982185934 | 5633.392857142858
object (union, implicit) | 2122.7264376263092 | Failed | 1421.8521229868227 | 1890.230515916575
object (union, explicit) | 1972.6002540373797 | Failed | 1345.7515140392734 | 1659.7751178817555
array (hierarchical) | 88.19785415530097 | Failed | 70.4985119047619 | 74.85569985569987
array (recursive) | 262.2098421541319 | 208.12649384077955 | 206.46221248630889 | 224.172245341053
array (recursive, union) | 358.8352324109242 | Failed | 384.198729921554 | 390.14524728810443
​
​
​
## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 39204.36617134471 | 8.043875685557587 | 10512.46018362376 | 59543.33883085945
object (hierarchical) | 6214.191605495954 | Failed | 2573.529411764706 | 6844.626593806922
object (recursive) | 4881.352833638026 | 66.72914714151828 | 2196.4759378552485 | 5328.055141579732
object (union, implicit) | 2119.3584483401714 | Failed | 1426.0377358490566 | 1884.8787710531187
object (union, explicit) | 1894.8589789360942 | Failed | 1360.2801968951155 | 1654.3187236383642
array (hierarchical) | 94.18539847668586 | Failed | 74.68259895444362 | 79.84366275823562
array (recursive) | 255.55960627050675 | 53.876956680014565 | 210.73152617898253 | 219.50328707085464
array (recursive, union) | 368.5284839487845 | Failed | 378.5805509943441 | 381.31868131868134