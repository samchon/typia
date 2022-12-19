# Benchmark of `typia`
> - CPU: AMD Ryzen 9 5900HX with Radeon Graphics
> - Memory: 64,928 MB
> - OS: win32
> - Typia version: 3.4.11


## is

![is benchmark](images/is.svg)

 Components | typia | typebox | ajv | io-ts | zod | class-validator 
------------|-------|---------|-----|-------|-----|-----------------
object (simple) | 274974.22655386897 | 51658.857755851706 | 63303.15044074082 | 3434.7392842881195 | 524.9788928965264 | 17.844460227272727
object (hierarchical) | 165090.32134675875 | 117759.29049701072 | 44862.220796577676 | 7563.999543940355 | 385.42756500411633 | 34.556817420996246
object (recursive) | 128538.30473808972 | 80336.55353573625 | 43822.20768420509 | 5455.241767174949 | 81.48354461913198 | 28.475714533997134
object (union, explicit) | 25279.641597564667 | 12069.575206139134 | 9888.301845153203 | 3476.889783362117 | 38.39736729452055 | 87.01508620689656
object (union, implicit) | 26939.537000427135 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 102872.53030181868 | 80933.57982266843 | 27353.76441463302 | 5584.228744607016 | 106.92410232181426 | 29.305546306162313
array (union, explicit) | 28923.737057734503 | 10339.506257507855 | 5981.972211877031 | 2697.6857739825577 | 22.516879835144596 | 206.44275774917097
array (union, implicit) | 16231.250142720131 | Failed | Failed | Failed | Failed | Failed
ultimate union | 8650.248376125204 | Failed | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 51063.65544583563 | 440.7293207878676 | 1935.9928557587089 | 455.97580861329516 | 16.562778076995126
object (hierarchical) | 59919.017199886744 | 776.6774523160764 | 3561.82466752863 | 361.4607597204802 | 35.29713114754098
object (recursive) | 59028.13627141569 | 438.35201280878323 | 2165.5033002823025 | 83.7890625 | 30.66593944318824
object (union, explicit) | 8657.633645193917 | 167.72217607973423 | 1359.89149625046 | 38.27985615521855 | 89.1745475087172
object (union, implicit) | 10214.99343832021 | Failed | Failed | Failed | Failed
array (recursive) | 33666.1985967175 | 459.45293685161175 | 2127.3086534141958 | 109.76036672505992 | Failed
array (union, explicit) | 18469.330235459092 | 141.51681043533037 | 650.3933758802816 | 22.524085798681078 | 210.0883547879776
array (union, implicit) | 11246.04457443897 | Failed | Failed | Failed | Failed
ultimate union | 3866.2430508760103 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 6702.822363192552 | 409.6988293486273 | 1728.6102617128581 | Failed | 16.014372996794872
object (hierarchical) | 26907.77929011924 | 739.069820665029 | 3336.9676353913123 | 372.708060134882 | 44.88169159447752
object (recursive) | 7698.725580506118 | Failed | Failed | Failed | 103.66829128440367
object (union, explicit) | 7140.3462652790595 | 174.54122509476701 | 1316.734309610995 | 38.03440899818676 | 95.9033310282553
object (union, implicit) | 7774.815008171419 | Failed | Failed | Failed | Failed
array (recursive) | 22779.27008241182 | 590.315778509753 | 2061.4201789229473 | 178.44231149586173 | 114.32330249922022
array (union, explicit) | 3493.549115307242 | 119.54446020238304 | 506.39468129523095 | 77.91688377969393 | 238.33719978165942
array (union, implicit) | 1708.2097333176691 | Failed | Failed | Failed | Failed
ultimate union | 3947.815476802357 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validate

![validate benchmark](images/validate.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-------|---------|-------|-----|-----------------
object (simple) | 14929.079078133718 | 414.19431467706823 | 1766.4697309105077 | 480.7659325321726 | 15.933425908923981
object (hierarchical) | 31725.693325198008 | 754.1935058683293 | 3610.19640428625 | 369.6565106580167 | 35.6581311769991
object (recursive) | 33878.05377906977 | 450.2456696512282 | 2160.4580219189975 | 86.21192824159162 | 30.31115724912216
object (union, explicit) | 6359.644157941952 | 170.19433980616864 | 1380.7973161456393 | 39.740048103736754 | 90.38229949220924
object (union, implicit) | 7336.70799560768 | 208.65745708154506 | 542.1212875769648 | 30.704376767200756 | Failed
array (recursive) | 19817.131009502446 | 478.4322281261914 | 2141.2643426963696 | 109.97954729417205 | 30.314314358821367
array (union, explicit) | 14473.792804386749 | 137.17377151268118 | 639.6432610583074 | 22.534237933565795 | 204.8760775862069
array (union, implicit) | 11154.14290918764 | 121.86016151291167 | 582.096717877095 | 18.60630580357143 | Failed
ultimate union | 2732.9106104651164 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## equals

![equals benchmark](images/equals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 15266.566828903033 | 8594.716494845361
object (hierarchical) | 17110.96776174214 | 16271.929591355116
object (recursive) | 20824.89817495459 | 14122.900732583856
object (union, explicit) | 8711.983366935485 | 3759.6213298693046
object (union, implicit) | 7877.204021882253 | 3575.780451917719
array (recursive) | 20895.950317382812 | 13588.048453282827
array (union, explicit) | 13021.417310296549 | 5223.504466306119
array (union, implicit) | 8960.226614621943 | 4141.646808638996
ultimate union | 5990.484670430673 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 6344.3359375 | 353.57008611262984
object (hierarchical) | 16132.396281075744 | 631.8919436252269
object (recursive) | 19473.511904761905 | 378.20571116769736
object (union, explicit) | 4643.092266504429 | 127.7807848149694
object (union, implicit) | 5100.0162157153445 | 121.69280086964652
array (recursive) | 14560.57209311845 | 390.9124336499909
array (union, explicit) | 11769.40678615196 | 123.245572720422
array (union, implicit) | 7133.905226900692 | 67.94074402539208
ultimate union | 3439.9920895064533 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 3839.492392245414 | 325.91671951440475
object (hierarchical) | 11937.664853221437 | 604.1823458310528
object (recursive) | 13198.250821686775 | 383.9720314247763
object (union, explicit) | 4305.860242092121 | 133.54705410753274
object (union, implicit) | 4577.809439132462 | 127.27218242328519
array (recursive) | 13128.524109162894 | 389.92960850186273
array (union, explicit) | 2998.165127126395 | 119.54437795378959
array (union, implicit) | 1412.6845934839703 | 127.59180147600117
ultimate union | 3467.7014478954434 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typia | typebox 
------------|-------|---------
object (simple) | 4362.242128121607 | 344.7162604583485
object (hierarchical) | 9547.43440743354 | 640.9053830663773
object (recursive) | 11279.58746972674 | 392.5501073518309
object (union, explicit) | 2975.287543402778 | 125.38324925953351
object (union, implicit) | 3368.2673200705512 | 120.57191712694251
array (recursive) | 7881.549305022139 | 411.94590572334783
array (union, explicit) | 7948.457152994211 | 118.36666656992942
array (union, implicit) | 5759.939338736813 | 68.3876067674113
ultimate union | 2324.52494492115 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typia | typebox | ajv 
------------|-------|---------|-----
object (hierarchical) | 156157.2219002479 | 147.8357449383803 | 4.590845082298975
object (recursive) | 126968.22415865384 | 852.2943876504377 | 11.084232233502538
object (union) | 23499.793422898794 | 141.1594007683658 | 6.945338241350906
array (hierarchical) | 132981.0572779456 | 21427.151478381165 | 165.79282486943376
array (recursive) | 76605.02489013229 | 8539.682669729164 | 114.5289610145126
array (union) | 29437.450040546806 | 1626.516762037206 | 46.96592498195597
ultimate union | 8793.04255585994 | 184.05155323902574 | 13.04944471502356

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify

![stringify benchmark](images/stringify.svg)

 Components | typia.stringify() | typia.assertStringify() | typia.isStringify() | fast-json-stringify | JSON.stringify 
------------|-------------------|-------------------------|---------------------|---------------------|----------------
object (simple) | 6249.0614210470685 | 4820.672089041096 | 5829.679167927999 | 4396.275319364297 | 860.1489423894558
object (hierarchical) | 4983.4118150684935 | 4555.351084892553 | 4795.488689732557 | 5932.54490203193 | 1445.7485085092221
object (recursive) | 6507.851123117744 | 5929.457901802282 | 6431.121792074022 | 1394.3226549290812 | 1341.2449831283398
object (union) | 2129.6392990252293 | 1679.3343312309212 | 1924.4965041893117 | 2186.6881460826985 | 988.2571688772651
array (simple) | 1969.5860745614036 | 1447.659754967039 | 1627.0162786582023 | 2193.6577837682535 | 1343.3614692085214
array (hierarchical) | 3407.890914084181 | 3080.815197172619 | 3221.694990262518 | 4997.035003865367 | 1595.5075566161331
array (recursive) | 3039.0100160998886 | 2746.5799679634392 | 2914.640029168213 | 1454.2057711215882 | 1430.3428079947575
array (union) | 2440.264785498903 | 2098.3380578942606 | 2210.1687053326004 | 1664.9743713845867 | 1859.126068725472

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify (server)

![stringify (server) benchmark](images/stringify_po_server_pc.svg)

 Components | express (pure) | express (typia.stringify) | express (typia.isStringify) | express (typia.assertStringify) | fastify 
------------|----------------|---------------------------|-----------------------------|---------------------------------|---------
object (simple) | 47866.6759672619 | 66223.7640837585 | 65124.766422193876 | 61662.15740121132 | 130350.88584134376
object (hierarchical) | 100234.04100510548 | 117729.49732450572 | 116487.24969109913 | 114685.26832529363 | 172419.14985880462
object (recursive) | 50322.42567409601 | 59861.84957837301 | 59962.22815688775 | 58415.40341079087 | 65632.41142290249
object (union) | 76706.04066985646 | 127367.3292763486 | 121605.35128197935 | 108839.56998561716 | 86160.8985260771
array (simple) | 107949.99556107954 | 118164.6164889541 | 107407.63469559264 | 99768.07234191286 | 105417.52773433605
array (hierarchical) | 90601.79411002804 | 137447.8797389205 | 121256.17979443562 | 86355.14863200208 | 72993.08431952662
array (recursive) | 52320.37603210437 | 66050.94321300581 | 63437.85484783274 | 62571.851774491224 | 41842.212400398406
array (union) | 134249.50144287464 | 126846.37806763768 | 111793.48514603707 | 113872.39953464743 | 102277.80816275315

<p style="text-align: right"> Unit: megabytes/sec </p>



