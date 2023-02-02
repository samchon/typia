# Benchmark of `typia`
> - CPU: AMD Ryzen 9 5950X 16-Core Processor
> - Memory: 64.226 MB
> - OS: linux
> - Typia version: 3.4.22


## is

![is benchmark](images/is.svg)

 Components | typia | typebox | ajv | io-ts | zod | class-validator 
------------|-------|---------|-----|-------|-----|-----------------
object (simple) | 233157.73006290584 | 50283.02575010478 | 72623.55671672078 | 4699.590160876312 | 571.9721803938819 | 21.676787882606305
object (hierarchical) | 181655.21231138226 | 114653.73131762331 | 45531.828898265194 | 8487.43495639535 | 462.3433567533557 | 45.42228913583655
object (recursive) | 133367.10928889603 | 86261.10511363635 | 49751.02739529875 | 6205.1871316080305 | 111.50703721374047 | 37.997752926421406
object (union, explicit) | 28427.576864919352 | 13502.814454583644 | 11323.245831389924 | 4022.633400475037 | 47.028624676883304 | 132.2681396305779
object (union, implicit) | 33144.736359313356 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 88264.3589825659 | 72917.05779357103 | 30683.048408229257 | 6497.06904915912 | 147.91724958030218 | 36.516134417019714
array (union, explicit) | 27970.491404132787 | 10906.092718407104 | 6285.202176101648 | 2979.795068726504 | 30.744589305922293 | 326.5380859375
array (union, implicit) | 18194.36019662285 | Failed | Failed | Failed | Failed | Failed
ultimate union | 8792.715848982874 | Failed | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 46696.498661909005 | 491.3431024827329 | 2096.2451144611946 | 566.6604512399776 | 20.590682196339436
object (hierarchical) | 57797.66417191479 | 862.1931525480503 | 3842.354213427897 | 413.76706932773106 | 45.06832325952293
object (recursive) | 66400.30618332398 | 643.146386499626 | 2386.9028027993345 | 113.29449152542372 | 37.41865032833021
object (union, explicit) | 8958.74606313787 | 185.0073830973079 | 1519.5046744602687 | 46.84587604846225 | 131.53908156918888
object (union, implicit) | 10566.02728544776 | Failed | Failed | Failed | Failed
array (recursive) | 29870.103123269015 | 670.4187225877193 | 2481.2216162457757 | 144.42964879477896 | Failed
array (union, explicit) | 19079.70854195442 | 170.4697837901701 | 703.8263461179545 | 30.831315814215873 | 319.3344709146799
array (union, implicit) | 12150.377064110178 | Failed | Failed | Failed | Failed
ultimate union | 4213.095460556578 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 11339.18902180068 | 468.15803587730505 | 1985.2208387037376 | Failed | 21.320134943181817
object (hierarchical) | 36745.60411014886 | 832.1489406048759 | 3665.9793750582917 | 418.8358844439728 | 46.04224261618142
object (recursive) | 8754.238782426484 | Failed | Failed | Failed | 131.15834862065762
object (union, explicit) | 7715.742316893632 | 196.36260654739604 | 1522.0090394535728 | 57.04917963080552 | 135.6746515578772
object (union, implicit) | 8697.632678429864 | Failed | Failed | Failed | Failed
array (recursive) | 22382.666069858384 | 813.4633730342275 | 2478.9153530821277 | 191.7307487899006 | 131.71867978579985
array (union, explicit) | 4454.584744206919 | 236.34368235930734 | 508.52636573211623 | 96.21350385062738 | 377.7356362430812
array (union, implicit) | 2234.6820634664946 | Failed | Failed | Failed | Failed
ultimate union | 4565.126321263751 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validate

![validate benchmark](images/validate.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 14121.264723503346 | 471.19185479055676 | 2224.4620877433376 | 535.5945329520697 | 20.256251737398074
object (hierarchical) | 28388.834871643692 | 838.9484026369167 | 3894.3594456347714 | 424.6593591459977 | 44.65437314917639
object (recursive) | 33176.630482302746 | 640.4754330874113 | 2384.1716879792407 | 109.82720673973881 | 36.60906891324627
object (union, explicit) | 6348.625658195971 | 185.16602281089035 | 1570.097725886658 | 46.68879341103711 | 129.7056660849667
object (union, implicit) | 8265.724187826736 | 231.78087951637184 | 586.198274381868 | 32.80570395234493 | Failed
array (recursive) | 17502.891040101684 | 681.9013757245344 | 2517.476652045754 | 148.92642554194157 | 36.314335700496414
array (union, explicit) | 14215.403899485931 | 170.6188899962035 | 703.087004302282 | 30.511925877520536 | 327.9419742859809
array (union, implicit) | 10387.491241269987 | 153.94132228457298 | 633.9618728821536 | 24.40219550383249 | Failed
ultimate union | 3125.9391872266265 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## equals

![equals benchmark](images/equals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 7730.855985785491 | 7779.992680324246
object (hierarchical) | 11524.820417365772 | 13175.095562829072
object (recursive) | 13294.860589045573 | 12708.734620372967
object (union, explicit) | 5682.629385562087 | 3622.9814627320716
object (union, implicit) | 5063.58433875795 | 3478.521081672565
array (recursive) | 10281.248546781993 | 11320.61606061312
array (union, explicit) | 8804.12001863532 | 4910.56297412817
array (union, implicit) | 6541.185690316673 | 4110.348008132393
ultimate union | 5560.07107293366 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 5179.935273933757 | 357.91782745706973
object (hierarchical) | 11285.599976383186 | 685.653007213337
object (recursive) | 12408.383388476996 | 529.7280867835138
object (union, explicit) | 3613.591275452489 | 137.32785154068142
object (union, implicit) | 3958.608942595363 | 135.83800117924528
array (recursive) | 9335.236098555932 | 548.9168362036337
array (union, explicit) | 8170.230940934066 | 133.39219794762258
array (union, implicit) | 5735.386811529829 | 74.14050633662426
ultimate union | 3574.04273334779 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 3814.7300228178283 | 347.102821823982
object (hierarchical) | 9049.186550027975 | 635.1765067579993
object (recursive) | 10112.588136637458 | 487.6367845117845
object (union, explicit) | 3617.5619096898317 | 137.08532587116966
object (union, implicit) | 3258.200830158803 | 131.58869493880792
array (recursive) | 6790.441972224822 | 607.3085721685084
array (union, explicit) | 3318.032819221058 | 124.31521423528876
array (union, implicit) | 1741.0816682262187 | 140.00329305959303
ultimate union | 3744.8520065239595 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 3018.882546005386 | 358.7557381957116
object (hierarchical) | 7473.740333734558 | 665.5835808957953
object (recursive) | 7991.12146044126 | 496.29706164675764
object (union, explicit) | 2524.944686470911 | 138.32420782851815
object (union, implicit) | 2677.603998593952 | 131.2655085934553
array (recursive) | 5905.639040001385 | 547.6689814274374
array (union, explicit) | 6099.003098353593 | 140.52445781696855
array (union, implicit) | 4553.600617508173 | 78.66440294284098
ultimate union | 2335.973790011888 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typia | typebox | ajv 
------------|-------|---------|-----
object (hierarchical) | 150534.56536021296 | 166.84479810238307 | 5.189516407400589
object (recursive) | 125999.52688953489 | 995.9230885922331 | 12.154309406507792
object (union) | 25977.67906896398 | 151.8619218061674 | 7.508126408186257
array (hierarchical) | 144510.89990430186 | 45494.306615031834 | 332.28956768638943
array (recursive) | 85162.78329439253 | 10107.929270462633 | 129.4659300184162
array (union) | 28593.735508254496 | 1855.2349074415179 | 50.79800737039066
ultimate union | 9000.8544921875 | 183.00079851519337 | 15.933653535865758

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify

![stringify benchmark](images/stringify.svg)

 Components | typia.stringify() | typia.assertStringify() | typia.isStringify() | fast-json-stringify | JSON.stringify 
------------|-------------------|-------------------------|---------------------|---------------------|----------------
object (simple) | 6552.922885212116 | 5587.314685214808 | 5332.056153233151 | 5288.13714438453 | 1748.4899962249906
object (hierarchical) | 5866.504585411329 | 4887.666318252459 | 5241.460203729282 | 6153.940602334542 | 2473.9196466468593
object (recursive) | 7718.894124651487 | 6663.129283616188 | 6972.375984206113 | 2670.4418628246754 | 2675.284307441796
object (union) | 2079.1333206300815 | 1683.5606613438645 | 1908.2282055383444 | 2382.091337904923 | 1801.8523420048398
array (simple) | 2069.0869335159364 | 1583.1053474809298 | 1713.020461888399 | 2488.679362099152 | 2279.354789749489
array (hierarchical) | 3608.5183219494184 | 3233.6177024049935 | 3372.2822382769905 | 5478.515625 | 2852.646954674221
array (recursive) | 3244.1928593136336 | 2754.641089108911 | 2998.581381485113 | 2435.9130859375 | 2403.3929493801656
array (union) | 2404.7222565674456 | 2086.5230427117785 | 2084.9469441272613 | 2744.5950489700203 | 3098.390395647529

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify (server)

![stringify (server) benchmark](images/stringify_po_server_pc.svg)

 Components | express (pure) | express (typia.stringify) | express (typia.isStringify) | express (typia.assertStringify) | fastify 
------------|----------------|---------------------------|-----------------------------|---------------------------------|---------
object (simple) | 78589.85899632386 | 89224.73719592449 | 86930.02944755173 | 81806.53187185174 | 134887.34447915625
object (hierarchical) | 162434.3748936496 | 160303.793440194 | 157145.5789657245 | 153989.12525186522 | 198558.1780594822
object (recursive) | 75081.51491883337 | 80764.79378303952 | 80312.82306864335 | 78389.65818363274 | 109523.42509245394
object (union) | 130534.44230818319 | 151899.592886189 | 139912.2345253222 | 124565.85901641389 | 88762.93662674651
array (simple) | 156955.22360572364 | 136188.52489367142 | 113452.15747646325 | 114010.74959308271 | 104972.78487327878
array (hierarchical) | 177695.178278663 | 192029.60501696437 | 171015.65266797188 | 110723.7355829177 | 82421.56552459589
array (recursive) | 63688.43162945821 | 66315.28629171771 | 69342.0657270039 | 67198.48067826028 | 89353.62400199601
array (union) | 184713.0473428144 | 129726.52050674075 | 115693.71945030394 | 117918.43917324621 | 122488.84029857519

<p style="text-align: right"> Unit: megabytes/sec </p>



