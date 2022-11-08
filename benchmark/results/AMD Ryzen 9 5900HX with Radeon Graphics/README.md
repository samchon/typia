# Benchmark of `typescript-json`
> - CPU: AMD Ryzen 9 5900HX with Radeon Graphics
> - Memory: 64,928 MB
> - OS: win32
> - TypeScript-JSON version: 3.3.22


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 1174839.845899835 | 1734869.226488592 | 542597.4387527839 | 38615.04907306434 | 4056.647605432451 | 148.3487681286039
object (hierarchical) | 183349.62611708918 | 211974.07887428257 | 54497.52883031301 | 9658.197329376853 | 469.47595894111294 | 51.22615803814715
object (recursive) | 102395.73070607553 | 93866.45791121753 | 47885.08287292818 | 5740.720524017467 | 77.01841359773371 | 32.42352079135373
object (union, explicit) | 19697.489615315153 | 14664.027149321268 | 9525.327988338191 | 3334.9862258953162 | 38.05147058823529 | 87.7160720853255
object (union, implicit) | 19573.81615598886 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 8012.837455163301 | 7682.413729470383 | 2501.266280752533 | 524.4642857142858 | 9.96309963099631 | 2.8206092515983454
array (union, explicit) | 4266.165964462356 | 2018.2915675873423 | 877.0764119601329 | 377.35849056603774 | 3.3320992225101813 | 30.741079597438244
array (union, implicit) | 2097.8598865922813 | Failed | Failed | Failed | Failed | Failed
ultimate union | 653.6859264625973 | Failed | Failed | Failed | Failed | Failed



## assertType (iterate)

![assertType (iterate) benchmark](images/assertType_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 385761.503208066 | 3810.24702653248 | 20364.6793304495 | 3766.5369649805443 | 156.09487038058467
object (hierarchical) | 71236.0214061635 | 915.9769701331414 | 4272.254227838692 | 447.06527701590784 | 52.28031145717464
object (recursive) | 53615.173172072566 | 423.199251637044 | 2063.7472283813745 | 82.00711477251451 | 32.741398446170926
object (union, explicit) | 8143.015521064302 | 162.87119693933323 | 1301.1722272317402 | 38.39638622247318 | 89.23980903415351
object (union, implicit) | 7763.44676180022 | Failed | Failed | Failed | Failed
array (recursive) | 2957.6224545954874 | 43.000744601638125 | 198.23788546255506 | 10.206010206010205 | Failed
array (union, explicit) | 1991.3075642685408 | 21.21324897655378 | 96.93409216082247 | 3.3588356036573987 | 31.082331174838114
array (union, implicit) | 1518.9804772234274 | Failed | Failed | Failed | Failed
ultimate union | 296.3229992790195 | Failed | Failed | Failed | Failed



## assertType (throw)

![assertType (throw) benchmark](images/assertType_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 55557.60368663594 | 3428.6762009534286 | 13629.602082558571 | Failed | 166.08230300793505
object (hierarchical) | 34769.230769230766 | 955.7721139430284 | 3929.164360819037 | 469.3954187007135 | 55.493895671476146
object (recursive) | 5432.189392549092 | Failed | Failed | Failed | 73.52941176470587
object (union, explicit) | 6169.985775248933 | 168.22429906542058 | 1308.3048919226394 | 54.71457231442641 | 93.23140033563303
object (union, implicit) | 5693.1608133086875 | Failed | Failed | Failed | Failed
array (recursive) | 2107.598447032723 | 54.377379010331694 | 187.72292096865027 | 16.542597187758478 | 11.719207781553969
array (union, explicit) | 524.8359887535146 | 18.079913216416564 | 73.82798080472499 | 12.706480304955528 | 36.26473254759746
array (union, implicit) | 203.4776174620792 | Failed | Failed | Failed | Failed
ultimate union | 310.445580715851 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 126486.99501936912 | 3474.6661788915308 | 15086.079229914845 | 3772.8944464876795 | 153.4858584038912
object (hierarchical) | 37399.63436928702 | 959.3965356677222 | 4330.595482546201 | 463.2311453827346 | 51.54258267134676
object (recursive) | 31454.578821802163 | 412.527392257122 | 2004.3980208905991 | 83.2703927492447 | 32.77170894278838
object (union, explicit) | 6016.607142857143 | 163.73626373626374 | 1361.7410387710315 | 38.32425324065376 | 88.10491318803103
object (union, implicit) | 5124.886052871467 | 148.33948339483396 | 384.5007451564829 | 20.34281408928235 | Failed
array (recursive) | 1839.2400438436243 | 44.8269339890297 | 208.2233119577518 | 10.18867924528302 | 2.8079371022089106
array (union, explicit) | 2183.217295712715 | 21.388367729831145 | 96.59714599341383 | 3.3482142857142856 | 30.795072788353863
array (union, implicit) | 1216.5570175438595 | 14.871306005719735 | 70.75471698113208 | 2.2099447513812156 | Failed
ultimate union | 215.12455516014236 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 34399.596552356496 | 73623.97372742201
object (hierarchical) | 10527.84856206771 | 21239.88970588235
object (recursive) | 8169.873556899396 | 13079.796264855686
object (union, explicit) | 3556.4605701592 | 3892.0238741182857
object (union, implicit) | 2259.567387687188 | 2644.307469180566
array (recursive) | 652.2961574507966 | 1266.9344531677925
array (union, explicit) | 898.463227222832 | 825.1356238698011
array (union, implicit) | 475.9746146872167 | 529.8883687432481
ultimate union | 390.0669642857142 | 235.50594166366582



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 36417.95332136445 | 2948.333957319356
object (hierarchical) | 9218.333333333332 | 798.1753863340159
object (recursive) | 7219.768283852281 | 365.7718120805369
object (union, explicit) | 2826.8817204301076 | 122.81354670636398
object (union, implicit) | 2197.4200785193493 | 85.9872611464968
array (recursive) | 610.2994886778671 | 38.81278538812785
array (union, explicit) | 466.94744552279803 | 17.734553775743706
array (union, implicit) | 289.7789054005074 | 7.948523845571536
ultimate union | 242.20580284735988 | 4.543733434305188



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 20479.94138120535 | 2657.316848126961
object (hierarchical) | 7517.4184085075185 | 765.068109721963
object (recursive) | 5884.509624197983 | 356.13870665417056
object (union, explicit) | 2700.237182995804 | 128.53470437017995
object (union, implicit) | 1948.6432343835368 | 91.54155986818016
array (recursive) | 458.21114369501464 | 36.98224852071006
array (union, explicit) | 279.06976744186045 | 18.005041411595247
array (union, implicit) | 128.4168042560998 | 15.620118712902217
ultimate union | 252.47971145175833 | 13.950892857142858



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 20617.10380495013 | 2775.2318603382437
object (hierarchical) | 7808.038172141678 | 780.5978567399886
object (recursive) | 5380.854637059153 | 351.27272727272725
object (union, explicit) | 1830.9300648882481 | 121.76503444423756
object (union, implicit) | 1349.4920691498842 | 86.93213684800897
array (recursive) | 430.72505384063174 | 38.32221163012393
array (union, explicit) | 414.7058823529411 | 17.58366420873511
array (union, implicit) | 242.33681932924628 | 7.859281437125748
ultimate union | 158.4488506755571 | 4.534290572454185



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 157731.84254296805 | 199.35111751982697 | 5.608829383028768
object (recursive) | 89158.77640203934 | 871.8138160325084 | 10.19108280254777
object (union) | 22150.723025583982 | 101.4963043086353 | 4.994450610432852
array (hierarchical) | 3962.563915266618 | 1034.3655589123866 | 7.319304666056725
array (recursive) | 7510.235026535254 | 840.608950843727 | 10.642201834862385
array (union) | 4321.44816236972 | 261.9749447310243 | 7.1625344352617075
ultimate union | 679.0302153066763 | 13.006317354143443 | 0.9154155986818016



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 52157.50585691115 | 46414.219759926134 | 47829.841501184186 | 6676.014760147602 | 36000.73841609747
object (hierarchical) | 5952.05223880597 | 5110.617832038476 | 5332.2326178682815 | 1627.215657311669 | 6882.234800073033
object (recursive) | 5975.60975609756 | 5700.662739322533 | 5980.38496791934 | 1282.4398560333398 | 1278.3466059916573
object (union) | 1650.83135391924 | 1290.041719571921 | 1500.7363770250367 | 696.5032307107564 | 1540.2930402930403
array (hierarchical) | 117.99783158655585 | 109.49436158603127 | 113.56411162133521 | 55.32786885245901 | 163.0837657524092
array (recursive) | 283.98013610446935 | 255.62671546203111 | 266.7751853861458 | 133.43272456205742 | 135.28301886792454
array (union) | 344.8213641284735 | 307.8449053201082 | 311.38472519628834 | 284.1747022121384 | 247.94445459528595



