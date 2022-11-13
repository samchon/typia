# Benchmark of `typescript-json`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - TypeScript-JSON version: 3.3.28


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 2054676.9513314967 | 1099232.5453545905 | 493429.0755116443 | 39675.85446527012 | 3647.988241778431 | 136.77649154051647
object (hierarchical) | 198164.8534021759 | 191269.70033296337 | 44297.20913374411 | 8666.423623769595 | 433.65577660156964 | 46.94663487988263
object (recursive) | 106751.37715754683 | 84007.32332478945 | 42317.20029784065 | 5690.6448005963475 | 74.39508847959551 | 29.101491451436885
object (union, explicit) | 24776.65544332211 | 12773.172569706105 | 7545.996746791975 | 3165.462293866963 | 35.21258662670912 | 78.70540639941156
object (union, implicit) | 22032.26404598554 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 7632.839641616383 | 5883.302752293578 | 2421.362799263352 | 478.6703601108033 | 9.768927296637234 | 2.957486136783734
array (union, explicit) | 4083.4872552641305 | 1894.9288580809923 | 830.875659930821 | 345.06912442396316 | 2.963511761437303 | 27.230910763569458
array (union, implicit) | 617.2388604821037 | Failed | Failed | Failed | Failed | Failed
ultimate union | 606.6800511042161 | Failed | Failed | Failed | Failed | Failed



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 188194.7835738069 | 3445.6824512534818 | 18724.195961106954 | 3346.6157205240174 | 140.40219378427787
object (hierarchical) | 59856.4722874165 | 813.4855899945622 | 3633.39222614841 | 397.0745629682483 | 47.37421961072347
object (recursive) | 43738.98121387284 | 335.2419652752124 | 1792.8664313579789 | 77.86345683656197 | 28.940662540953767
object (union, explicit) | 6955.8101472995095 | 136.23827909542194 | 1204.4609665427508 | 34.346846846846844 | 77.62892273811708
object (union, implicit) | 6318.4357541899435 | Failed | Failed | Failed | Failed
array (recursive) | 2681.6417082640046 | 34.675615212527966 | 175.91389868250138 | 9.497206703910614 | Failed
array (union, explicit) | 2603.5871156661783 | 18.404907975460123 | 84.78382930937676 | 2.793296089385475 | 27.324478178368125
array (union, implicit) | 1503.0280785465225 | Failed | Failed | Failed | Failed
ultimate union | 262.417823228634 | Failed | Failed | Failed | Failed



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 48317.352885880806 | 2900.7065823726293 | 10637.52276867031 | Failed | 148.56081708449398
object (hierarchical) | 30191.13007979217 | 817.0844939647168 | 3381.8250519554126 | 433.79856657864957 | 55.00550055005501
object (recursive) | 4104.140300126559 | Failed | Failed | Failed | 73.08605883427737
object (union, explicit) | 5806.682151152402 | 148.42300556586272 | 1127.1249076127126 | 36.42987249544626 | 92.23390518354546
object (union, implicit) | 4509.090909090909 | Failed | Failed | Failed | Failed
array (recursive) | 1705.989110707804 | 36.62332906061161 | 168.25574873808188 | 16.31055292774425 | 11.163206072784103
array (union, explicit) | 478.5569666850727 | 18.1257930034439 | 73.54293068578784 | 12.433171702101207 | 35.442140705298605
array (union, implicit) | 182.78194114421495 | Failed | Failed | Failed | Failed
ultimate union | 254.77707006369425 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 79020.87566968409 | 3047.539149888143 | 14497.841996622255 | 3360.4375569735644 | 138.0617217108825
object (hierarchical) | 36017.01644923426 | 841.3325804630153 | 3830.0751879699246 | 417.401087567973 | 46.57534246575342
object (recursive) | 24409.32347924957 | 329.0003661662395 | 1776.3883780801766 | 77.9367469879518 | 29.222569380628563
object (union, explicit) | 4964.188822571894 | 132.25446428571428 | 1184.8832901074475 | 35.175879396984925 | 78.02988378527947
object (union, implicit) | 4342.393287121488 | 131.64365424626442 | 319.95540691192866 | 20.408163265306122 | Failed
array (recursive) | 1524.2022230190032 | 35.847647498132936 | 184.25018839487566 | 9.71243572652828 | 2.7752081406105455
array (union, explicit) | 2083.4254143646413 | 19.05473566224547 | 85.01574365623264 | 2.8116213683223994 | 27.54356379988758
array (union, implicit) | 685.6986501276906 | 13.063233623627413 | 63.29595134004943 | 2.183803457688808 | Failed
ultimate union | 178.93065113816834 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 28040.3447643499 | 65393.883904046874
object (hierarchical) | 9075.94245128392 | 17469.98316813166
object (recursive) | 7348.837209302325 | 11518.232044198896
object (union, explicit) | 3055.7304202925384 | 3235.294117647059
object (union, implicit) | 1960.197188241738 | 2329.814342919549
array (recursive) | 605.2777265178078 | 1087.5542691751086
array (union, explicit) | 786.849710982659 | 673.5320686540199
array (union, implicit) | 312.8901946382666 | 446.9766587024444
ultimate union | 279.6286182413981 | Failed



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 29130.199891950295 | 2466.923925027563
object (hierarchical) | 7465.317919075145 | 716.6604407919313
object (recursive) | 6654.77730548882 | 290.14697876973327
object (union, explicit) | 2534.396439829409 | 104.4109436069235
object (union, implicit) | 1863.7587506731288 | 75.71157495256168
array (recursive) | 605.9384164222873 | 30.812324929971986
array (union, explicit) | 392.0640698944303 | 15.721504772599662
array (union, implicit) | 256.4288301340094 | 6.786050895381716
ultimate union | 195.78368469294224 | Failed



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 15282.511210762332 | 2319.970304380104
object (hierarchical) | 6334.182744812523 | 667.4082313681869
object (recursive) | 5297.532656023222 | 298.7303958177745
object (union, explicit) | 2322.1795575059423 | 110.09174311926606
object (union, implicit) | 1672.1192293711379 | 73.73271889400922
array (recursive) | 576.4224618817404 | 36.44314868804665
array (union, explicit) | 221.72949002217294 | 17.540782318891424
array (union, implicit) | 109.05125408942202 | 15.530361857431277
ultimate union | 197.73503505302895 | Failed



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 18299.159663865546 | 2359.6620132255694
object (hierarchical) | 6389.61038961039 | 684.5525436316376
object (recursive) | 4936.660617059892 | 285.7404021937843
object (union, explicit) | 1595.6303724928366 | 104.28410372040585
object (union, implicit) | 1228.8833214030064 | 75.79787234042553
array (recursive) | 380.9436048654626 | 31.440548780487806
array (union, explicit) | 342.3913043478261 | 15.689204333208814
array (union, implicit) | 212.8721697272241 | 6.846709775580068
ultimate union | 129.43071965628354 | Failed



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 201124.95392554367 | 171.51932239280043 | 4.856988667026443
object (recursive) | 89831.290555155 | 738.6113152094049 | 8.849557522123893
object (union) | 19926.785067053283 | 88.91389983117614 | 4.202448382970949
array (hierarchical) | 4152.403495994174 | 903.5320926699583 | 6.281174949196378
array (recursive) | 7570.035627226702 | 755.3648068669528 | 8.939974457215836
array (union) | 4071.9514372433496 | 232.29147401516553 | 6.087437742114001
ultimate union | 568.9128481581312 | 11.260845486431604 | 0.905961224859576



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 44546.76778620441 | 35250.74074074074 | 42074.756030197015 | 6195.982729491271 | 28042.82886449523
object (hierarchical) | 5251.599548362815 | 4508.336420896629 | 4764.441951766686 | 1525.0698974836905 | 4624.577861163227
object (recursive) | 5750.235094978371 | 5221.094190637338 | 5464.555330510035 | 1232.475764354959 | 1205.3456221198157
object (union) | 1470.3717335296283 | 1164.592234813301 | 1322.805728975395 | 672.1311475409835 | 1355.3039985393464
array (hierarchical) | 114.24903722721437 | 103.58056265984655 | 108.84476534296029 | 54.755589238347866 | 155.1504102096627
array (recursive) | 265.79959699578677 | 242.01930215293245 | 255.26802218114602 | 126.8075639599555 | 125.64575645756457
array (union) | 327.36572890025576 | 272.89080769922646 | 280.3771570894858 | 271.24060150375936 | 236.88600556070438



