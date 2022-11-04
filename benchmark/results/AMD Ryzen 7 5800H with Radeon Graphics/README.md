# Benchmark of `typescript-json`
> - CPU: AMD Ryzen 7 5800H with Radeon Graphics
> - Memory: 64,928 MB
> - TypeScript-JSON version: 3.3.20


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 1019093.1496919175 | 1559139.5391705069 | 489153.43128138373 | 36817.73843930636 | 3870.237437879625 | 127.40509620384816
object (hierarchical) | 150563.66630076838 | 189981.70731707316 | 46994.62365591398 | 9371.23745819398 | 433.87302164817174 | 36.78326721961774
object (recursive) | 89163.50364963504 | 86465.91952967114 | 41886.771711249545 | 5559.708295350956 | 67.57239899892741 | 24.363233665559243
object (union, explicit) | 19002.842524161453 | 13677.594604720869 | 8333.699835074216 | 3266.6789872481986 | 34.36363636363637 | 76.89530685920577
object (union, implicit) | 15810.886122979751 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 7223.580293343363 | 6806.08228980322 | 2174.8043235184496 | 521.9072164948453 | 8.9736399326977 | 2.2115739034279396
array (union, explicit) | 3887.0246085011186 | 1883.3303232797543 | 753.90695167954 | 346.4253393665158 | 2.7752081406105455 | 27.899032074397418
array (union, implicit) | 1180.503481521157 | Failed | Failed | Failed | Failed | Failed
ultimate union | 590.3330919623461 | Failed | Failed | Failed | Failed | Failed



## assertType (iterate)

![assertType (iterate) benchmark](images/assertType_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 310571.68916453846 | 3014.0565867723913 | 15629.049872588279 | 3248.464544946957 | 109.03083700440529
object (hierarchical) | 51888.26815642459 | 787.9624516841525 | 3284.216335540839 | 396.63591969614754 | 37.83586181685249
object (recursive) | 45983.14606741573 | 354.68808367575645 | 1779.2207792207791 | 73.23996971990917 | 25.53916004540295
object (union, explicit) | 7036.612021857923 | 141.82021217197095 | 1162.7006087437742 | 34.8379846413186 | 78.78787878787878
object (union, implicit) | 6331.15468409586 | Failed | Failed | Failed | Failed
array (recursive) | 2615.7690172126595 | 35.655512890839276 | 173.49260523321956 | 8.890535284311909 | Failed
array (union, explicit) | 2405.7112068965516 | 17.385005432814197 | 68.69806094182825 | 2.7417291171632243 | 28.202764976958527
array (union, implicit) | 1381.082558775287 | Failed | Failed | Failed | Failed
ultimate union | 265.5438093531625 | Failed | Failed | Failed | Failed



## assertType (throw)

![assertType (throw) benchmark](images/assertType_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 50645.7046603032 | 2948.7179487179487 | 12142.59190493873 | Failed | 111.13169105389886
object (hierarchical) | 31424.841477060796 | 816.1751066592469 | 3347.7321814254856 | 410.9844946758827 | 36.21220351258374
object (recursive) | 4483.3948339483395 | Failed | Failed | Failed | 55.33013648100332
object (union, explicit) | 5747.334176757636 | 148.3404413128129 | 1197.7186311787073 | 36.120642947444466 | 93.00595238095238
object (union, implicit) | 4775.124930594115 | Failed | Failed | Failed | Failed
array (recursive) | 1732.6281232901697 | 35.90019745108598 | 165.53246275519587 | 16.3265306122449 | 10.29230135858378
array (union, explicit) | 486.07216302112545 | 17.84121320249777 | 73.89617587289857 | 11.38563133325743 | 35.75259206292456
array (union, implicit) | 183.65472910927457 | Failed | Failed | Failed | Failed
ultimate union | 271.24773960217 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 88613.50777934937 | 2925.7453590849427 | 13627.14712471994 | 3591.1497730711044 | 112.64494754279403
object (hierarchical) | 33667.15921684522 | 845.8872879810324 | 3845.652578663191 | 392.4495171202809 | 37.70491803278688
object (recursive) | 26070.500927643785 | 368.2249953436394 | 1674.8201438848923 | 74.64387464387465 | 24.30044182621502
object (union, explicit) | 5388.333927934356 | 147.23247232472326 | 1201.2987012987014 | 34.833091436865026 | 76.2987012987013
object (union, implicit) | 4298.191681735985 | 135.35963753067773 | 326.5457238059978 | 19.14773793880233 | Failed
array (recursive) | 1599.2260917634053 | 37.82203544673854 | 191.2713472485769 | 9.608138658628485 | 2.2160664819944595
array (union, explicit) | 1951.1887608069164 | 19.9203187250996 | 85.47169811320755 | 2.820078962210942 | 27.624309392265197
array (union, implicit) | 1034.8920863309354 | 13.544018058690746 | 60.077163329046485 | 2.25140712945591 | Failed
ultimate union | 179.57371225577265 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 27898.117386489477 | 64824.653090646956
object (hierarchical) | 8819.68403849646 | 20990.989299793502
object (recursive) | 7033.516483516483 | 11871.651986338307
object (union, explicit) | 3049.7329158224347 | 3480.0215982721384
object (union, implicit) | 1939.9179889463362 | 2358.693733451015
array (recursive) | 555.8060879368658 | 1107.8270388615217
array (union, explicit) | 774.9510763209394 | 741.8596237337193
array (union, implicit) | 480.5692391899289 | 457.3366654766155
ultimate union | 329.17570498915404 | 207.910395519776



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 28694.78123352662 | 2467.7508778414344
object (hierarchical) | 8055.565676808163 | 720.3373945641987
object (recursive) | 6749.448123620308 | 327.4041133963313
object (union, explicit) | 2626.940133037694 | 111.86627479794268
object (union, implicit) | 1992.9915160457397 | 79.82012366498033
array (recursive) | 569.8905109489051 | 34.51527725386647
array (union, explicit) | 426.70061840669337 | 16.977928692699493
array (union, implicit) | 262.8838211528102 | 7.250418293363079
ultimate union | 231.10386079390972 | 4.499437570303712



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 19376.391982182628 | 2370.887704466091
object (hierarchical) | 6971.597196606419 | 679.1483113069016
object (recursive) | 5389.329488103821 | 319.7893152746426
object (union, explicit) | 2458.7155963302753 | 111.87768040275965
object (union, implicit) | 1772.4724181587992 | 91.50805270863836
array (recursive) | 556.6895527927259 | 36.04902667627974
array (union, explicit) | 241.05321713332097 | 17.70224818551956
array (union, implicit) | 105.09721492380453 | 15.797788309636651
ultimate union | 237.83388218075373 | 13.646288209606986



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 18527.99101291893 | 2410.1399236779935
object (hierarchical) | 6778.541226215644 | 688.8929484837413
object (recursive) | 4827.721661054994 | 318.46664209362325
object (union, explicit) | 1653.4492123845735 | 111.15269461077844
object (union, implicit) | 1241.6562555773694 | 79.69639468690703
array (recursive) | 379.6363636363636 | 32.77777777777778
array (union, explicit) | 357.58431926540703 | 16.455456780783052
array (union, implicit) | 240.49497847919656 | 7.371007371007371
ultimate union | 144.57831325301203 | 4.507888805409467



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 114577.31407169609 | 201.80722891566265 | 4.962779156327543
object (recursive) | 86467.37928492443 | 801.9680196801968 | 9.461966604823749
object (union) | 19104.314002828854 | 101.25184094256258 | 4.532269760696157
array (hierarchical) | 8185.459678842421 | 962.4751939383005 | 6.850583225328643
array (recursive) | 7302.996042962125 | 810.4230978754313 | 9.831726224238988
array (union) | 4171.171171171171 | 256.3626230726361 | 6.643292120317402
ultimate union | 633.7573911485397 | 12.120115774240233 | 0.9144111192392099



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 46782.88372093023 | 38352.73531037023 | 40266.230223677034 | 4524.043922756531 | 31192.161820480404
object (hierarchical) | 5522.846441947566 | 4475.631447883316 | 4915.746114959745 | 1163.7426900584794 | 4880.30888030888
object (recursive) | 5410.164368033251 | 5050.308584252852 | 5184.018929741536 | 831.1011904761904 | 854.8477489258361
object (union) | 1462.834126693519 | 1145.9343026386646 | 1316.2041181736795 | 389.7474557105164 | 1356.899336084694
array (hierarchical) | 71.97661673364998 | 64.40677966101694 | 70.76418019332483 | 20.120345994734866 | 92.01141226818831
array (recursive) | 254.7930478408887 | 241.68679175181126 | 249.9553651133726 | 76.77867467617796 | 74.76979742173113
array (union) | 333.3333333333333 | 294.10729991204926 | 310.77147016011645 | 173.22688451541032 | 162.0183486238532



