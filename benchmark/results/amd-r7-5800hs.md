
> typescript-json@3.0.6 benchmark
> node benchmark/index.js

## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 152719.48569358926 | 34128.50382235166 | 4244.407469033094
object (hierarchical) | 5353.983918128654 | 5073.515726782059 | 1232.904788522452
object (recursive) | 5997.607655502392 | 959.8748389471747 | 977.4380011187767
object (union) | 2267.033976124885 | 1685.201956167361 | 507.85531603945924
array (hierarchical) | 124.88605287146763 | 169.2447679708826 | 35.272045028142585
array (recursive) | 270.56436739210625 | 77.26350728379126 | 76.40408460977389
array (union) | 411.0068102337567 | 167.1217913708356 | 179.65052784856206
ultimate union | 1289.5822126591358 | Failed | 148.5460270420448



## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 20636.97604790419 | 22039.513677811552
object (recursive) | 21847.037374658157 | 21677.636234961075
object (union) | 5398.088586656865 | 2279.750223015165
array (recursive) | 1657.347670250896 | 1600.5846884706743
array (union) | 2050.1888828926067 | 241.63431318173414
ultimate union | 4508.623853211009 | 34.60641922180384



## is
 Components | typescript-json | typescript-is | ajv 
------------|-----------------|---------------|-----
object (hierarchical) | 108212.34612599565 | 53282.56476207974 | 85887.80663780664
object (recursive) | 87932.66369047618 | 47606.46457268079 | Failed
object (union, explicit) | 15761.78390137781 | Failed | 1261.7144932800582
object (union, implicit) | 15195.213430969816 | Failed | Failed
array (recursive) | 7277.839437661858 | 4470.839524517088 | Failed
array (union, explicit) | 7925.266250459053 | 1117.7651999269672 | Failed
array (union, implicit) | 7013.804527885147 | 1205.1234453313534 | Failed
ultimate union | 11709.473292387866 | 296.53333333333336 | Failed



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() 
------------|-----------------|---------------------|------------------
object (simple) | 142008.38803792853 | 5.463517800493479 | 4262.15049727904
object (hierarchical) | 5000.558659217877 | 1.4437827107020393 | 1191.4353111957903
object (recursive) | 5470.6761299962645 | 52.65075605756969 | 980.5933942899795
object (union) | 2229.7124015387435 | 1.0944910616563297 | 520.8725084618278
array (hierarchical) | 100.91250670960815 | 2.7614138438880707 | 30.766396462785558
array (recursive) | 260.6539309331374 | 32.91046148189005 | 78.56872396819386
array (union) | 401.9234258755217 | 2.5849335302806495 | 181.14602587800368
ultimate union | 1263.3490737377406 | Failed | 145.03957297993742



