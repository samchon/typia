# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - Typia version: 3.4.11


## is

![is benchmark](images/is.svg)

 Components | typia | typebox | ajv | io-ts | zod | class-validator 
------------|-------|---------|-----|-------|-----|-----------------
object (simple) | 263527.32795556885 | 40409.381638528626 | 64392.200019570824 | 3842.3472613996646 | 438.8666030408379 | 17.527945200832278
object (hierarchical) | 170066.94251367365 | 101339.61980212707 | 39015.51778362306 | 7251.789918175168 | 351.40605356501436 | 40.1395171289493
object (recursive) | 120244.51912100457 | 80568.53176182894 | 43264.013173166204 | 5073.396963443397 | 79.88957719233603 | 33.12762605042017
object (union, explicit) | 25504.2916529373 | 10749.00411406804 | 7821.642832725614 | 3393.254400839793 | 36.06356172468062 | 80.40556383492911
object (union, implicit) | 31002.82471022621 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 83113.98763749067 | 63974.477496699365 | 25700.17773578114 | 5086.954767613427 | 104.83498831775702 | 30.43559732472325
array (union, explicit) | 28103.573610608255 | 10124.495406458798 | 5749.146993729252 | 2481.5655133295522 | 22.694001291036518 | 181.6860465116279
array (union, implicit) | 17015.424998040224 | Failed | Failed | Failed | Failed | Failed
ultimate union | 8224.489879261364 | Failed | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 46007.425000862306 | 370.0408380681818 | 1823.1375492587727 | 417.1921595427435 | 17.36145132100701
object (hierarchical) | 50274.957352537094 | 662.1006912282328 | 3083.6803022637423 | 334.6269258587436 | 38.97464687328579
object (recursive) | 49496.96590015723 | 360.14549547425986 | 1894.2872928014651 | 80.72281445600146 | 32.188946218212415
object (union, explicit) | 7087.041486578708 | 139.33808847021237 | 1205.0137164931834 | 36.26754264051855 | 80.58361638448054
object (union, implicit) | 8948.661821090867 | Failed | Failed | Failed | Failed
array (recursive) | 28764.198114825318 | 379.2004672734853 | 1908.8982108844318 | 105.95721564624245 | Failed
array (union, explicit) | 17630.246323871026 | 128.82044325313808 | 567.8961833003953 | 19.25097601294316 | 186.06586402266288
array (union, implicit) | 12076.982582778835 | Failed | Failed | Failed | Failed
ultimate union | 3551.5566776761516 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 6057.958396084337 | 325.5442512387594 | 1397.8246979553903 | Failed | 18.69388327721661
object (hierarchical) | 24542.013662017845 | 631.4906697757723 | 2819.2771305748965 | 358.25068510067746 | 45.00896377107123
object (recursive) | 6341.607955590291 | Failed | Failed | Failed | 102.686713478023
object (union, explicit) | 6053.875161589479 | 136.6614762730404 | 1230.3597091455338 | 38.35347419074616 | 95.84862745658135
object (union, implicit) | 6381.918298192771 | Failed | Failed | Failed | Failed
array (recursive) | 23253.202545222633 | 398.55999071053105 | 1863.0859742750895 | 183.97385113370146 | 121.05568535289582
array (union, explicit) | 3148.5003356033367 | 123.30300231272564 | 498.885253103889 | 81.21491294881703 | 241.67650196798164
array (union, implicit) | 1571.1998334390862 | Failed | Failed | Failed | Failed
ultimate union | 3439.037493972722 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validate

![validate benchmark](images/validate.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 10578.608262474303 | 340.25078660003703 | 1790.120029610829 | 423.93881530367366 | 17.236489273927393
object (hierarchical) | 27767.37607758621 | 633.8634741423155 | 2979.4137473065284 | 338.9115767045455 | 39.493760970990394
object (recursive) | 27327.961718602903 | 341.83251596715326 | 1923.620576141194 | 83.77056154282474 | 32.16543638226527
object (union, explicit) | 5293.741489495606 | 131.32343342036555 | 1201.827904340502 | 36.54599503287593 | 81.00743447580645
object (union, implicit) | 6350.191141614507 | 168.70328935227903 | 431.7659808488613 | 26.24881072636723 | Failed
array (recursive) | 16624.903310643564 | 381.816257723384 | 1931.914715272503 | 106.18574807911212 | 30.266435121345836
array (union, explicit) | 13485.873287671231 | 124.04318654318655 | 556.377885776663 | 19.15368474505043 | 185.2943252399774
array (union, implicit) | 10431.724181149733 | 103.3500620860927 | 495.6129120617378 | 14.530595321229049 | Failed
ultimate union | 2375.4832474226805 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## equals

![equals benchmark](images/equals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 13887.289754366062 | 7472.376769085377
object (hierarchical) | 14082.978550879965 | 13635.316453905356
object (recursive) | 15870.413136908524 | 12334.380078347409
object (union, explicit) | 8180.0998424224235 | 3408.7570043601963
object (union, implicit) | 6503.093934041727 | 3140.394214989059
array (recursive) | 13914.271437254534 | 11851.469770029673
array (union, explicit) | 12390.838405581948 | 4349.422860360361
array (union, implicit) | 8707.877401979813 | 3767.386879220596
ultimate union | 5301.970245415921 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 6196.588985997774 | 314.36590265476406
object (hierarchical) | 14758.485959610849 | 567.3292095002811
object (recursive) | 15940.957895723932 | 313.6431150978565
object (union, explicit) | 3861.5518866833245 | 109.40568883277216
object (union, implicit) | 4047.2509333517696 | 106.13174735670563
array (recursive) | 12765.07625297238 | 337.04491152535957
array (union, explicit) | 9787.303469930326 | 108.35652415390433
array (union, implicit) | 5981.372662277278 | 58.50347026493799
ultimate union | 3177.0063625944526 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 3314.449315263329 | 277.22165694289174
object (hierarchical) | 10081.348355459428 | 519.6635247508766
object (recursive) | 10961.903628748829 | 309.86929429161916
object (union, explicit) | 3615.4364224137935 | 115.19610648232924
object (union, implicit) | 3706.5714600100605 | 102.75930248368383
array (recursive) | 11161.917661714931 | 397.2685896277557
array (union, explicit) | 2627.752423679868 | 119.08302979410225
array (union, implicit) | 1424.926958622738 | 128.2875097193424
ultimate union | 3161.719178787047 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 3654.988944168049 | 290.1459854014598
object (hierarchical) | 8580.68051882831 | 528.0332768883416
object (recursive) | 9469.679497090892 | 308.5141300956739
object (union, explicit) | 2653.22290601023 | 107.08581529647144
object (union, implicit) | 2904.7707225576783 | 109.16061928318089
array (recursive) | 7203.489029102175 | 341.9674093236738
array (union, explicit) | 7296.214758441915 | 106.73161833054472
array (union, implicit) | 4560.8965519182275 | 58.89684019256183
ultimate union | 2020.0317708333332 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typia | typebox | ajv 
------------|-------|---------|-----
object (hierarchical) | 154238.81229388053 | 131.36893117552907 | 3.969354695544115
object (recursive) | 113253.1911581569 | 725.862755546388 | 9.66191924778761
object (union) | 19551.705886734508 | 119.62155616985689 | 6.332827167310878
array (hierarchical) | 149788.9001309067 | 18993.029389740008 | 149.10278543802636
array (recursive) | 88301.33959892423 | 7413.438920585657 | 100.63477456951823
array (union) | 28636.78444602273 | 1436.7062099286102 | 41.39186081894176
ultimate union | 8198.680049868857 | 157.5354660437557 | 12.897516736073795

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify

![stringify benchmark](images/stringify.svg)

 Components | typia.stringify() | typia.assertStringify() | typia.isStringify() | fast-json-stringify | JSON.stringify 
------------|-------------------|-------------------------|---------------------|---------------------|----------------
object (simple) | 5339.2405063291135 | 3445.552147239264 | 5186.265374580694 | 3576.1165321823983 | 801.107203953621
object (hierarchical) | 4564.733066927323 | 4006.7321868034915 | 4178.705357142858 | 5090.535996835443 | 1259.4439296042967
object (recursive) | 6314.993962741491 | 5506.984253156331 | 5771.540158268146 | 1337.0723745788096 | 1314.0530528581896
object (union) | 1834.772612924866 | 1500.4099151234568 | 1707.9243821878424 | 1981.988608815109 | 959.0200186219739
array (simple) | 1799.6776606854116 | 1315.8342220964653 | 1539.150351261909 | 2024.056246274986 | 1453.0574002139933
array (hierarchical) | 3132.8563904494385 | 2845.098096270894 | 2977.716224185508 | 4227.9603779150475 | 1570.4239822327925
array (recursive) | 2750.5253098353596 | 2550.6711154513887 | 2716.7491891593945 | 1431.2498900886324 | 1444.2185144176403
array (union) | 2173.0668800539083 | 1819.6725536008796 | 1932.4559448710913 | 1611.8301082512544 | 1785.593268359021

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify (server)

![stringify (server) benchmark](images/stringify_po_server_pc.svg)

 Components | express (pure) | express (typia.stringify) | express (typia.isStringify) | express (typia.assertStringify) | fastify 
------------|----------------|---------------------------|-----------------------------|---------------------------------|---------
object (simple) | 51486.227651231624 | 71459.02192828315 | 71962.50616552522 | 65229.41699918383 | 107647.06485664565
object (hierarchical) | 104548.77178485578 | 115541.39510709656 | 116207.50309721718 | 116821.9978814352 | 179112.38731494287
object (recursive) | 51447.038813910796 | 63274.38154880704 | 67535.67168505625 | 64483.34897157618 | 72916.37460087807
object (union) | 71409.8637972286 | 108715.63995066282 | 104816.5354980566 | 92893.97197784929 | 73346.76100286355
array (simple) | 91013.25872516433 | 89607.27522530373 | 81994.76545370738 | 81255.62012546098 | 93540.27196652719
array (hierarchical) | 82799.12274992562 | 113364.20938150912 | 105509.38236038953 | 76633.61048443078 | 70398.370641317
array (recursive) | 40648.70227347434 | 47290.465876819566 | 47738.96284895597 | 45470.888969928186 | 37114.55721649164
array (union) | 110066.17848599622 | 100854.4921875 | 90301.61408867409 | 87471.00875109049 | 82460.6375286726

<p style="text-align: right"> Unit: megabytes/sec </p>



