
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

{ x: 3, y: 73 } undefined $input[2].p3
## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 18059.800664451825 | 23201.64986251146
object (recursive) | 26879.562687356727 | 22615.82547605842
object (union, explicit) | 4641.9889502762435 | Failed
object (union, implicit) | 4195.019227247757 | 2217.1929184157693
array (simple) | 3223.9848914069876 | 2600.1824817518245
array (recursive) | 1355.7551319648094 | 1443.081991215227
array (recursive, union) | 2591.81455994205 | 212.83844360767438



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 67354.95761150018 | 43360.99137931035
object (recursive) | 61647.95823233265 | 36714.25936174137
object (union, explicit) | 11753.246753246753 | Failed
object (union, implicit) | 11366.148843930636 | 7019.618730335
array (simple) | 23069.31053301801 | 12635.834896810506
array (recursive) | 4400.335633041208 | 3039.040114613181
array (recursive, union) | 5698.739340007415 | 1026.3303259068311



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 36430.81180811808 | 28271.537622682663 | 9935.722201699298 | 54561.933534743206
object (hierarchical) | 5788.613303269448 | Failed | 2485.0999622783856 | 6345.256024096385
object (recursive) | 4665.321841188336 | 2053.3111971960893 | 2033.8763420955202 | 5090.465465465465
object (union, implicit) | 1976.9493967224923 | Failed | 1429.0013165318787 | 1791.500904159132
object (union, explicit) | 1942.095588235294 | Failed | 1302.5565569247747 | 1562.792371356603
array (hierarchical) | 73.61186471332972 | Failed | 58.18847209515096 | 58.458354888773925
array (recursive) | 254.53878598936365 | 206.47091827192816 | 201.78704393149664 | 220.8611729769859
array (recursive, union) | 358.5758178203506 | Failed | 384.572282405678 | 384.95656995010165



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 38972.72061515928 | 8.181480104127928 | 10592.31206210945 | 60254.303164908386
object (hierarchical) | 6001.110083256244 | Failed | 2483.4680382072006 | 6971.030850263356
object (recursive) | 5165.3838933733805 | 67.59555639239315 | 2103.322380430814 | 5495.497185741088
object (union, implicit) | 2104.19337117744 | Failed | 1386.5577422948384 | 1894.4423722491608
object (union, explicit) | 1892.7921368765926 | Failed | 1315.205118554761 | 1586.3670133729568
array (hierarchical) | 161.50112023898433 | Failed | 120.0374531835206 | 138.42437755481234
array (recursive) | 252.9465095194923 | 52.93569431500466 | 203.04097904691267 | 216.77938219703893
array (recursive, union) | 357.7265298710732 | Failed | 393.06893995552264 | 376.97103043637696



