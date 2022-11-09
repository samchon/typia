# Benchmark of `typescript-json`
> - CPU: AMD Ryzen 7 5800H with Radeon Graphics
> - Memory: 64,928 MB
> - OS: win32
> - TypeScript-JSON version: 3.3.23


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 1136298.2784431137 | 1499582.7956989247 | 491208.53432282 | 37815.27272727273 | 3890.5989245318005 | 127.02561421850497
object (hierarchical) | 161298.5318107667 | 189311.72439340618 | 47810.44558071585 | 9374.17943107221 | 449.3971501644136 | 36.82310469314079
object (recursive) | 96996.13686534217 | 83161.50402864817 | 42108.70337477798 | 5739.855475264036 | 69.47252343319244 | 23.32037756801777
object (union, explicit) | 21162.29971724788 | 13471.506488621402 | 8436.42671292281 | 3326.894223555889 | 35.13266239707228 | 66.65432327346788
object (union, implicit) | 17066.422018348625 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 7302.616609783846 | 7000.360685302075 | 2364.3607388627306 | 542.1552205471803 | 9.486607142857142 | 2.1973997436366965
array (union, explicit) | 4191.6605705925385 | 1970.7828004410144 | 835.5119825708061 | 362.44541484716154 | 2.804262478968031 | 22.64578222306095
array (union, implicit) | 1239.4810009267842 | Failed | Failed | Failed | Failed | Failed
ultimate union | 634.5013477088949 | Failed | Failed | Failed | Failed | Failed



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 372327.04741379316 | 3583.9147998531034 | 19136.98374135676 | 3745.7786116322704 | 113.59063471739529
object (hierarchical) | 67775.15781656145 | 870.9677419354839 | 4303.4171986481415 | 436.4130434782609 | 38.58875413450937
object (recursive) | 49172.78736687478 | 385.6754306436991 | 1914.767629642921 | 72.61640798226165 | 24
object (union, explicit) | 7700.465983224603 | 153.27656423546836 | 1332.3431117712587 | 35.37866224433389 | 66.17647058823529
object (union, implicit) | 6842.076200993926 | Failed | Failed | Failed | Failed
array (recursive) | 2833.123990669298 | 40.103973264017824 | 190.85820895522386 | 9.39745715865119 | Failed
array (union, explicit) | 2778.638627559491 | 20.217147135904156 | 91.53106508875739 | 2.8079371022089106 | 22.853957636566335
array (union, implicit) | 749.5952509444145 | Failed | Failed | Failed | Failed
ultimate union | 280.5029219054365 | Failed | Failed | Failed | Failed



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 60203.888993770066 | 3338.867367644346 | 13782.827342149378 | Failed | 128.44036697247705
object (hierarchical) | 35137.63162756328 | 902.0618556701031 | 3789.708341073751 | 454.28733674048834 | 53.35230304108127
object (recursive) | 5077.262693156733 | Failed | Failed | Failed | 55.50416281221091
object (union, explicit) | 6362.123173663769 | 166.66666666666666 | 1242.7038222556957 | 36.330608537693 | 74.65472191116088
object (union, implicit) | 5066.568047337278 | Failed | Failed | Failed | Failed
array (recursive) | 2056.932966023875 | 54.220133742996566 | 186.88095683049897 | 16.47989452867502 | 10.670081092616304
array (union, explicit) | 486.9825810076793 | 18.109380659181458 | 73.93715341959334 | 12.509382036527397 | 35.0938761186173
array (union, implicit) | 181.3894431344096 | Failed | Failed | Failed | Failed
ultimate union | 256.9750367107195 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 115549.49308755761 | 3323.7132352941176 | 15434.854315558001 | 3656.25 | 111.76470588235293
object (hierarchical) | 38443.757030371205 | 917.3969793026291 | 4027.932960893854 | 440.69394682255324 | 38.989974006683994
object (recursive) | 30091.906202723145 | 398.7306328168751 | 1878.026412325752 | 73.84964968755918 | 24.048096192384772
object (union, explicit) | 5651.340996168582 | 154.07352669499352 | 1223.6036370384115 | 36.768802228412255 | 68.39666357738648
object (union, implicit) | 4794.008875739644 | 141.84008762322014 | 342.31200897867564 | 18.983807928531547 | Failed
array (recursive) | 1703.8970725340296 | 40.97894137734775 | 191.60891552725226 | 9.502515371716044 | 2.2218107757822625
array (union, explicit) | 2176.643949161908 | 20.42746358993758 | 91.2274235164025 | 3.327171903881701 | 22.760917838638044
array (union, implicit) | 844.0434542441538 | 13.930163447251113 | 65.48507462686567 | 2.1818181818181817 | Failed
ultimate union | 205.71729217818307 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 31965.384615384617 | 69662.05752212388
object (hierarchical) | 9582.701903529847 | 20363.414634146342
object (recursive) | 7551.929318427695 | 12675.518982607067
object (union, explicit) | 3295.8995197635763 | 3649.6641858776543
object (union, implicit) | 2108.0933284724756 | 2513.573407202216
array (recursive) | 615.6150533607938 | 1089.9357601713061
array (union, explicit) | 846.1677186654645 | 783.3116521092734
array (union, implicit) | 289.90694345025054 | 452.7262713420231
ultimate union | 349.79275545143264 | 224.4713536960058



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 35037.902483900645 | 2710.536044362292
object (hierarchical) | 8585.356742622338 | 752.4990744168826
object (recursive) | 6906.683710737765 | 340.97261039686975
object (union, explicit) | 2642.7807486631013 | 114.68480058812719
object (union, implicit) | 2004.5504186385149 | 84.40332326283988
array (recursive) | 536.1423901198692 | 35.34777651083239
array (union, explicit) | 454.09292035398227 | 16.505406943653956
array (union, implicit) | 270.7799340900769 | 7.337723424270931
ultimate union | 237.92913530383697 | 4.4859813084112155



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 18793.932667406585 | 2448.979591836735
object (hierarchical) | 7019.818484904611 | 710.9448082319925
object (recursive) | 5399.408284023669 | 335.5704697986577
object (union, explicit) | 2431.0595065312045 | 111.33791055854519
object (union, implicit) | 1641.4607156030986 | 91.19095385737735
array (recursive) | 519.0952910641453 | 36.62332906061161
array (union, explicit) | 241.86046511627904 | 17.53463089601964
array (union, implicit) | 109.01162790697676 | 15.248551387618175
ultimate union | 219.0980463757531 | 13.914011409489355



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 18973.017022817818 | 2582.5704870010986
object (hierarchical) | 7196.007912245999 | 749.4318181818182
object (recursive) | 4764.737406216506 | 335.6996076966187
object (union, explicit) | 1756.5789473684208 | 114.28045638571953
object (union, implicit) | 1245.7002457002457 | 84.57899716177862
array (recursive) | 392.8374655647383 | 34.68536770280515
array (union, explicit) | 372.1227621483376 | 16.430594900849858
array (union, implicit) | 197.0604246053348 | 7.297904191616766
ultimate union | 152.8525296017223 | 4.504504504504505



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 152956.63406532572 | 211.29520755389274 | 4.9813200498132
object (recursive) | 81884.08716352316 | 809.438363538489 | 9.371057848260948
object (union) | 19663.653136531364 | 101.26814923727257 | 4.489942528735632
array (hierarchical) | 3234.8526450668132 | 962.5481916651368 | 6.8303489016060555
array (recursive) | 7383.935289691498 | 813.0410757045496 | 9.950248756218906
array (union) | 4271.399519319652 | 241.0730147450702 | 6.648199445983379
ultimate union | 627.4795268425842 | 12.098991750687443 | 0.913575735428467



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 49823.109320637246 | 41188.42162752594 | 43032.62818214414 | 4210.506706408345 | 31900.96618357488
object (hierarchical) | 5631.796801505174 | 4704.335207690912 | 5110.862262038074 | 1108.352144469526 | 5060.403928108208
object (recursive) | 5700.527704485488 | 4877.725290697675 | 5290.925925925925 | 814.6170839469808 | 844.1436360218087
object (union) | 1485.1629346440925 | 1169.4364161849712 | 1371.3966896038685 | 367.7028051554208 | 1147.4054529463501
array (hierarchical) | 158.50515463917526 | 143.84433533369705 | 151.03793843951325 | 37.35144312393888 | 222.16117216117217
array (recursive) | 267.33038348082596 | 241.1978221415608 | 260.69395997796954 | 69.66753828912962 | 69.79790419161677
array (union) | 338.5714285714286 | 294.4892944892945 | 315.7800465699445 | 140.59590316573556 | 134.1010401188707



