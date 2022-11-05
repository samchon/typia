# Benchmark of `typescript-json`
> - CPU: Apple M1 Max
> - Memory: 32,768 MB
> - OS: darwin
> - TypeScript-JSON version: 3.3.20


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 761879.3639188448 | 1832512.4442793461 | 484232.22140762454 | 39814.8893360161 | 5854.244229337305 | 159.63910881973854
object (hierarchical) | 128683.80462724937 | 198371.27071823206 | 59002.56739409499 | 10784.626810248792 | 735.1065767899436 | 54.4464609800363
object (recursive) | 82653.72585096597 | 90381.76845943482 | 38568.08905380334 | 6334.377302873987 | 116.68545659526495 | 33.43239227340267
object (union, explicit) | 21671.127026008293 | 16766.33925198338 | 9196.31790010937 | 3888.0706921944034 | 63.72459256546419 | 137.83635365183966
object (union, implicit) | 19407.140144322067 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 5157.02479338843 | 5188.812488385058 | 2331.028037383178 | 627.1913465124953 | 15.314804310833807 | 3.3277870216306162
array (union, explicit) | 3407.4954296160877 | 2194.6458449525935 | 932.895970009372 | 411.44114411441143 | 6.140677335318199 | 58.16384717734272
array (union, implicit) | 1835.0364963503648 | Failed | Failed | Failed | Failed | Failed
ultimate union | 632.0754716981132 | Failed | Failed | Failed | Failed | Failed



## assertType (iterate)

![assertType (iterate) benchmark](images/assertType_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 192717.28326891223 | 3329.049773755656 | 17047.91431792559 | 5479.264402326891 | 166.66666666666669
object (hierarchical) | 56245.55735056543 | 947.9315263908703 | 4265.963353692393 | 689.7612156295224 | 54.26067499533843
object (recursive) | 39354.59967467919 | 428.1700693013673 | 1714.7499548654991 | 122.33231707317071 | 35.87018409565382
object (union, explicit) | 5985.71166880381 | 140.91332712022364 | 1063.5817088722902 | 68.52935623938079 | 156.31489522371155
object (union, implicit) | 6092.1575713769425 | Failed | Failed | Failed | Failed
array (recursive) | 1866.9598680593733 | 51.79282868525896 | 178.9220225967772 | 15.277253866465486 | Failed
array (union, explicit) | 2411.8198874296436 | 21.209302325581397 | 100.67873303167421 | 5.666792595391009 | 53.217588224193236
array (union, implicit) | 1298.167684619656 | Failed | Failed | Failed | Failed
ultimate union | 298.88712241653417 | Failed | Failed | Failed | Failed



## assertType (throw)

![assertType (throw) benchmark](images/assertType_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 77311.7076808352 | 3705.8152793614595 | 13968.072976054733 | Failed | 167.94178018286993
object (hierarchical) | 42830.47050037341 | 993.9984996249062 | 4567.761419403549 | 690.7834939101981 | 55.60704355885079
object (recursive) | 4691.76213857065 | Failed | Failed | Failed | 111.48272017837235
object (union, explicit) | 6777.777777777777 | 168.09861785580873 | 1421.8009478672984 | 74.17022065640646 | 169.20473773265653
object (union, implicit) | 5052.708106143221 | Failed | Failed | Failed | Failed
array (recursive) | 1586.423169156982 | 54.53553899291038 | 166.91394658753708 | 17.580872011251756 | 12.559658377292138
array (union, explicit) | 723.8307349665924 | 35.192679922576104 | 74.90636704119851 | 15.144631228229594 | 55.48363232846311
array (union, implicit) | 258.97151313355533 | Failed | Failed | Failed | Failed
ultimate union | 318.4713375796178 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 75949.57373480864 | 3438.626126126126 | 15970.391061452516 | 5742.491657397108 | 162.47056692628146
object (hierarchical) | 33771.82067703568 | 1007.6293263863046 | 4306.837131739856 | 724.7655819084391 | 55.422131904673925
object (recursive) | 25559.97725980671 | 490.3791198323491 | 2015.748031496063 | 134.9342481417953 | 37.51399776035834
object (union, explicit) | 5568.91817682592 | 193.2184125781398 | 1364.4664257180902 | 74.12297246322143 | 163.55489171023152
object (union, implicit) | 4584.978778372394 | 184.2654028436019 | 436.09309423884014 | 36.46904806433514 | Failed
array (recursive) | 1268.6289120715348 | 57.28871242200795 | 228.72240045291562 | 17.5372430699604 | 3.395585738539898
array (union, explicit) | 2021.3041867358281 | 26.558673949896402 | 113.1859756097561 | 5.541189508681198 | 58.97920604914934
array (union, implicit) | 1154.2679583257175 | 17.032551097653293 | 82.69961977186313 | 3.846858398974171 | Failed
ultimate union | 249.55563455385706 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 24289.54128440367 | 57424.549135075446
object (hierarchical) | 8137.847866419295 | 17551.8018018018
object (recursive) | 5302.183567727609 | 10406.006674082313
object (union, explicit) | 2652.869757174393 | 3661.9217081850534
object (union, implicit) | 1790.0492072170587 | 2490.5255631033247
array (recursive) | 457.21317682695945 | 921.5575620767495
array (union, explicit) | 733.6244541484716 | 693.0275229357798
array (union, implicit) | 480.3063457330416 | 464.6041856232939
ultimate union | 352.4932003626473 | 232.68848309528119



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 23451.543042772064 | 2964.4536392702653
object (hierarchical) | 7077.457069784436 | 845.3163131218321
object (recursive) | 4903.685867753287 | 423.9377845220031
object (union, explicit) | 2242.8863678631205 | 133.94875659382066
object (union, implicit) | 1601.3960323291699 | 103.89856169568509
array (recursive) | 428.89348111966933 | 47.32041049030787
array (union, explicit) | 532.258064516129 | 22.013170272812793
array (union, implicit) | 355.3280935843539 | 8.472980606288834
ultimate union | 263.61454679712017 | 5.131128848346637



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 18920.94417384788 | 2736.1319340329833
object (hierarchical) | 6907.466021225097 | 810.0979653353429
object (recursive) | 4612.819562801037 | 396.97542533081287
object (union, explicit) | 2147.926783713112 | 130.2325581395349
object (union, implicit) | 1497.2273567467653 | 93.49289454001496
array (recursive) | 357.4115876598947 | 54.575222848826634
array (union, explicit) | 336.00896023893966 | 18.119224497191517
array (union, implicit) | 165.68483063328424 | 16.504373659019638
ultimate union | 277.77777777777777 | 15.135462388375965



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 17304.97237569061 | 2775.614194722475
object (hierarchical) | 5956.799125045571 | 808.1140350877192
object (recursive) | 3756.900993743099 | 402.73668639053255
object (union, explicit) | 1557.0505920344456 | 146.60377358490567
object (union, implicit) | 1171.2104689203927 | 105.6418023475956
array (recursive) | 309.24962852897477 | 48.46066134549602
array (union, explicit) | 469.1629955947136 | 21.586820677901912
array (union, implicit) | 297.47628423125116 | 9.629909365558913
ultimate union | 175.65649396735273 | 5.091457665472374



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 120850.58522311632 | 237.33480176211452 | 7.706093189964157
object (recursive) | 78544.62625511343 | 1090.108654926939 | 14.42741208295762
object (union) | 21900.68303489016 | 118.16075565852789 | 6.845513413506013
array (hierarchical) | 3165.7488986784138 | 1238.164603058995 | 10.215453194650816
array (recursive) | 5632.637571157496 | 1001.4521691777092 | 15.24054351817848
array (union) | 3776.0763826337597 | 297.9031091829356 | 9.744438315866887
ultimate union | 744.6887123591354 | 14.779235174579714 | 1.28747471031819



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 48001.83452577509 | 37944.52554744525 | 41723.05140961858 | 15025.698324022345 | 35136.573646276105
object (hierarchical) | 6784.810126582279 | 5954.083484573503 | 6346.090459622779 | 3477.699753273866 | 6462.2519013170095
object (recursive) | 5403.060272438888 | 5144.284128745839 | 5371.908627525015 | 2822.713164140953 | 2783.6225596529284
object (union) | 1638.667900092507 | 1293.699927166788 | 1502.1794406102433 | 1368.8049373480455 | 1673.1356693620844
array (hierarchical) | 267.69509981851184 | 234.44804027328297 | 257.8451882845188 | 242.14659685863876 | 375.7867456497593
array (recursive) | 303.06306306306305 | 265.9189580318379 | 291.81884587289994 | 261.51861408035387 | 256.7942318358292
array (union) | 389.71533516988063 | 334.313005143277 | 346.64738839689136 | 533.7481146304675 | 480.4788213627993



