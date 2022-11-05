# Benchmark of `typescript-json`
> - CPU: Apple M1 Max
> - Memory: 65,536 MB
> - OS: darwin
> - TypeScript-JSON version: 3.3.20


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 1241757.6964867802 | 1817877.5849335303 | 485908.1803005008 | 39008.15512866981 | 6121.599111604664 | 171.83251767264818
object (hierarchical) | 144482.12290502794 | 190918.5199028219 | 58986.87994248742 | 11128.325215436493 | 771.894832275612 | 55.94149908592322
object (recursive) | 90720.50027188688 | 95195.70895522388 | 42060.32906764168 | 6701.11111111111 | 124.21788737578211 | 34.85155817813018
object (union, explicit) | 21775.064267352187 | 16014.598540145987 | 10064.215148188803 | 3850.195640022359 | 71.77814029363785 | 164.7982062780269
object (union, implicit) | 22108.91272189349 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 8002.832861189801 | 7492.105263157893 | 2453.653217011996 | 623.9012530390874 | 16.75977653631285 | 3.347591593825553
array (union, explicit) | 4746.999249812453 | 2288.306828811974 | 1040.7824321830597 | 428.49130678631514 | 7.330827067669173 | 62.072892938496594
array (union, implicit) | 1690.537555228277 | Failed | Failed | Failed | Failed | Failed
ultimate union | 768.1024879316748 | Failed | Failed | Failed | Failed | Failed



## assertType (iterate)

![assertType (iterate) benchmark](images/assertType_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 329300.9012322972 | 3660.188784008884 | 19432.442534105776 | 5763.53591160221 | 181.54650728427345
object (hierarchical) | 67402.77524192075 | 1009.0909090909091 | 4575.814301759641 | 776.5363128491621 | 59.966373995890166
object (recursive) | 42923.11906501096 | 443.5028248587571 | 1890.732798806638 | 138.49632560768796 | 39.735099337748345
object (union, explicit) | 7478.455512031338 | 151.91297824456115 | 1151.5317286652078 | 78.08988764044945 | 163.20807627593942
object (union, implicit) | 7266.342921180426 | Failed | Failed | Failed | Failed
array (recursive) | 2422.110552763819 | 43.84485666104553 | 180.39961941008565 | 17.357222844344903 | Failed
array (union, explicit) | 2969.0431519699814 | 23.6664162283997 | 100.31580902842282 | 7.382169222032935 | 58.301886792452834
array (union, implicit) | 1307.9200592153961 | Failed | Failed | Failed | Failed
ultimate union | 331.6858868753432 | Failed | Failed | Failed | Failed



## assertType (throw)

![assertType (throw) benchmark](images/assertType_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 96888.7262079063 | 3583.6828059473883 | 14503.099755776817 | Failed | 187.47656542932134
object (hierarchical) | 45876.47928994082 | 1046.8214693566806 | 4640.633842671194 | 875.0237778200494 | 72.91286912139992
object (recursive) | 5418.356063398452 | Failed | Failed | Failed | 113.48590883298657
object (union, explicit) | 7316.162747293767 | 168.06722689075627 | 1228.7334593572778 | 74.1839762611276 | 171.10266159695817
object (union, implicit) | 5566.895527927259 | Failed | Failed | Failed | Failed
array (recursive) | 1389.6713615023475 | 54.87470276202671 | 167.0378619153675 | 17.708517797060384 | 12.473493825620558
array (union, explicit) | 835.8098068350668 | 34.82500435312554 | 93.1098696461825 | 15.389350569405972 | 55.61735261401557
array (union, implicit) | 296.62588060808304 | Failed | Failed | Failed | Failed
ultimate union | 351.6564871367759 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 100883.78579397546 | 3173.245614035088 | 14981.193009118542 | 5510.543840177581 | 176.20900500277932
object (hierarchical) | 38191.205622634705 | 923.3390119250425 | 3942.181340341656 | 794.2347809596056 | 60.1224717016144
object (recursive) | 28493.60281846839 | 500.3795066413663 | 1931.895573212259 | 142.8027418126428 | 39.90119703591108
object (union, explicit) | 6350 | 176.03494113178883 | 1328.7177541729893 | 80.22598870056497 | 164.74311243484738
object (union, implicit) | 5095.187165775401 | 177.07150964812715 | 446.51693947468596 | 38.0321665089877 | Failed
array (recursive) | 1541.279285979918 | 55.534567434831885 | 229.2020373514431 | 17.643710870802504 | 3.37647720877884
array (union, explicit) | 2026.8961807423348 | 24.92917847025496 | 112.64934572349706 | 7.289719626168225 | 58.6337760910816
array (union, implicit) | 1234.472883479506 | 17.58366420873511 | 80.73014678208506 | 4.483467214645993 | Failed
ultimate union | 233.9802270230685 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 29777.838427947594 | 66826.46176911544
object (hierarchical) | 10350.67365269461 | 18810.016632785067
object (recursive) | 6851.885756133284 | 11919.608908202064
object (union, explicit) | 3139.8562741846326 | 4089.791356184799
object (union, implicit) | 2149.3212669683257 | 2787.6008804108587
array (recursive) | 657.2019556224145 | 1133.283831446074
array (union, explicit) | 867.2305994851049 | 743.8333637858578
array (union, implicit) | 538.8990825688073 | 506.93143499437997
ultimate union | 393.4790663208596 | 253.97696105320898



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 25314.787430683915 | 2742.4298375184635
object (hierarchical) | 9493.489822116266 | 841.511562323745
object (recursive) | 7309.161006058381 | 425.28950317519605
object (union, explicit) | 3013.194062671798 | 130.5069124423963
object (union, implicit) | 2199.143070044709 | 102.56894597657728
array (recursive) | 618.5281065088757 | 48.40546697038725
array (union, explicit) | 611.5107913669065 | 20.171834142697048
array (union, implicit) | 392.2437673130194 | 9.109888024293035
ultimate union | 310.8635097493036 | 5.103005103005103



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 24185.78830495929 | 2737.9639838294743
object (hierarchical) | 9100.998890122086 | 791.6053019145802
object (recursive) | 6831.610044313146 | 414.62495288352807
object (union, explicit) | 2998.889300259163 | 129.72572275759822
object (union, implicit) | 2040.0661643080316 | 94.19743782969104
array (recursive) | 563.9097744360902 | 54.446460980036306
array (union, explicit) | 388.2418191902385 | 18.10610175629187
array (union, implicit) | 185.01387604070305 | 16.268098259313486
ultimate union | 297.17682020802374 | 14.436263894904



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 20513.528138528138 | 2833.874458874459
object (hierarchical) | 9333.271513353115 | 846.9863780556075
object (recursive) | 5641.048989255145 | 422.79618192026953
object (union, explicit) | 2143.0132993259244 | 144.21976344906525
object (union, implicit) | 1550.2183406113536 | 105.1829268292683
array (recursive) | 444.42419825072886 | 43.16950102784526
array (union, explicit) | 545.006390359686 | 20.400453343407634
array (union, implicit) | 344.1208198489752 | 9.130682898991822
ultimate union | 219.3140794223827 | 5.106865897484395



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 145002.72331154684 | 235.84396908143088 | 8.579773640014604
object (recursive) | 85437.47667039941 | 1089.7951719092905 | 16.270566727605118
object (union) | 25333.518415694987 | 120.94288304623754 | 7.589781562384302
array (hierarchical) | 5867.476635514019 | 1298.023125699366 | 11.409642988590356
array (recursive) | 7671.39882642438 | 1052.5175961017867 | 16.825164594001464
array (union) | 4971.955719557196 | 315.57223264540335 | 11.053795136330141
ultimate union | 780.5011889518933 | 16.635859519408502 | 1.4708586137157567



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 57476.1374187558 | 46845.112781954886 | 50656.090444930705 | 14280.146386093322 | 39711.08228317272
object (hierarchical) | 7252.597635256181 | 6636.80387409201 | 6979.911537043863 | 3213.962741906312 | 6861.702127659574
object (recursive) | 6171.23795404003 | 5721.718200333272 | 6080.209895052473 | 2755.3640198056114 | 2771.8455569924254
object (union) | 1915.2447027939245 | 1543.097014925373 | 1778.2325581395348 | 1362.1631807047295 | 1749.8656154810965
array (hierarchical) | 161.26059712495393 | 144.5716395864106 | 157.59259259259258 | 123.93003349460365 | 212.83018867924528
array (recursive) | 347.7863154043176 | 309.39327485380113 | 330.55000907605734 | 246.04798214617819 | 245.54234769687963
array (union) | 458.1738655002734 | 411.0519552046998 | 422.27505486466714 | 502.4181547619047 | 450.74026686163404



