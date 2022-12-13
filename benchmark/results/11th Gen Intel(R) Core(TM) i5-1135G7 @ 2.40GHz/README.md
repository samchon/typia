# Benchmark of `typia`
> - CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
> - Memory: 16,218 MB
> - OS: win32
> - Typia version: 3.3.34


## is

![is benchmark](images/is.svg)

 Components | typia | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 258026.6355828499 | 131104.27803376122 | 64648.369770956626 | 5026.095249124682 | 444.48357809653913 | 17.116815807644333
object (hierarchical) | 168293.10930365298 | 158897.18895627742 | 37385.19405014443 | 8062.16743119266 | 359.6813586759645 | 34.44351331763
object (recursive) | 111502.15675477238 | 92431.01856564423 | 44200.57325022873 | 6270.518785112359 | 77.8286417635835 | 27.952005838102274
object (union, explicit) | 25070.064193465216 | 13283.98323093996 | 7679.538730201104 | 3529.901803191005 | 35.25940298336988 | 77.1635573201275
object (union, implicit) | 29772.8634996749 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 83290.77211337183 | 62878.01128565212 | 26231.46477825773 | 5472.513591943476 | 105.04569887829372 | 24.453088696561338
array (union, explicit) | 26844.20936748242 | 10271.527521306818 | 4997.13817622112 | 2426.7534866417495 | 20.168813539741222 | 178.12797592055142
array (union, implicit) | 9670.766502919823 | Failed | Failed | Failed | Failed | Failed
ultimate union | 8321.985690158845 | Failed | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 24572.421633346978 | 427.02735896633277 | 2334.726822627636 | 429.5293522267206 | 15.403136638733704
object (hierarchical) | 51272.93018087589 | 695.186102231813 | 3189.25745445692 | 343.0544960801792 | 35.517134151907975
object (recursive) | 47217.98975557667 | 350.2224827021122 | 1896.326635235558 | 82.13823297050563 | 28.122302313535915
object (union, explicit) | 7316.4239465837645 | 145.53749469039082 | 1226.9861937830688 | 37.2999642806537 | 78.76153028114108
object (union, implicit) | 8903.261234739432 | Failed | Failed | Failed | Failed
array (recursive) | 28789.19431946007 | 373.562650994239 | 1932.2848799329859 | 104.90695224719101 | Failed
array (union, explicit) | 17506.273608002237 | 126.45140984699607 | 563.6680135000923 | 19.066523386571056 | 185.49157701019254
array (union, implicit) | 10238.996693705838 | Failed | Failed | Failed | Failed
ultimate union | 3217.9062983130225 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 6252.9296875 | 350.47972635950265 | 1375.6906953672942 | Failed | 16.169378578684892
object (hierarchical) | 26725.28151636849 | 653.6527475916353 | 2681.848830725314 | 367.7200533105561 | 46.653151643289334
object (recursive) | 6289.0374369844185 | Failed | Failed | Failed | 78.41740363076349
object (union, explicit) | 5859.183670566278 | 136.3275443608324 | 1162.4375881109022 | 38.24718345192483 | 97.72180332836098
object (union, implicit) | 6448.30406833087 | Failed | Failed | Failed | Failed
array (recursive) | 20594.608092480525 | 398.8616456141147 | 1837.549082060271 | 180.0004413480432 | 119.74539164624184
array (union, explicit) | 3108.3370688183054 | 121.11263667716464 | 505.1550936632747 | 82.60811089344064 | 241.88193490875264
array (union, implicit) | 1561.331433591638 | Failed | Failed | Failed | Failed
ultimate union | 3586.541938576426 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validate

![validate benchmark](images/validate.svg)

 Components | typia | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 9722.660669634775 | 347.3117303671004 | 1620.5297887947095 | 418.57055372403977 | 15.019352064220183
object (hierarchical) | 28586.949333380362 | 691.2723971894179 | 3217.456221690701 | 355.1923884636924 | 34.66761194967117
object (recursive) | 28026.65167888789 | 353.65711963959853 | 1909.6505172830693 | 84.17876794962336 | 29.00710779774032
object (union, explicit) | 5351.903663438699 | 143.03158166273587 | 1213.4377257540184 | 38.257791714177124 | 81.45036995855067
object (union, implicit) | 6295.988028749312 | 184.40709411930217 | 450.4624783635853 | 27.72789282010183 | Failed
array (recursive) | 17562.357876240352 | 386.85783617424244 | 2030.4891097584175 | 106.55827863394215 | 24.641221017202692
array (union, explicit) | 14513.346354166664 | 123.00531914893617 | 580.9474446738923 | 22.771934258226437 | 180.52809707196613
array (union, implicit) | 6513.303280911063 | 102.7367375023625 | 474.7720440295714 | 18.82186193419378 | Failed
ultimate union | 2572.9818394362487 | Failed | Failed | Failed | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## equals

![equals benchmark](images/equals.svg)

 Components | typia | typebox 
------------|-----------------|---------
object (simple) | 14285.061767486925 | 8292.10706666361
object (hierarchical) | 15109.840745192307 | 14509.91170360111
object (recursive) | 19471.566091111632 | 11906.461582722559
object (union, explicit) | 7899.136735970794 | 3464.7422244183936
object (union, implicit) | 7198.088106840752 | 3394.680813626126
array (recursive) | 17224.04217052881 | 11366.085732683157
array (union, explicit) | 11658.939631595882 | 4612.667840450454
array (union, implicit) | 6786.232409901542 | 3861.8302956964585
ultimate union | 5596.46683557535 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typia | typebox 
------------|-----------------|---------
object (simple) | 3885.159294566793 | 309.06905671079716
object (hierarchical) | 6527.285426267281 | 593.6183692834661
object (recursive) | 7010.818855268652 | 307.19957853618416
object (union, explicit) | 2563.867467718795 | 103.76269876325088
object (union, implicit) | 2709.8342134805716 | 107.10647044804576
array (recursive) | 6712.505182421228 | 343.9148886085844
array (union, explicit) | 2687.971703523582 | 108.5556151055409
array (union, implicit) | 2208.574393742 | 58.84486607142858
ultimate union | 2708.6289743129155 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typia | typebox 
------------|-----------------|---------
object (simple) | 2003.5653540129151 | 291.05666627579734
object (hierarchical) | 5403.601040215877 | 559.1465752013914
object (recursive) | 5837.314940409942 | 326.3569078947368
object (union, explicit) | 2419.91122352754 | 111.86591181963713
object (union, implicit) | 2338.6561149135446 | 103.8122931224715
array (recursive) | 6183.650494962512 | 399.07790952186537
array (union, explicit) | 1490.0311761094943 | 118.1725146594253
array (union, implicit) | 942.9325049836897 | 132.51583034077018
ultimate union | 2582.1990139014465 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typia | typebox 
------------|-----------------|---------
object (simple) | 2295.664983164983 | 295.10869565217394
object (hierarchical) | 5062.936340253537 | 593.0797705087291
object (recursive) | 5350.829900309541 | 317.1772203947368
object (union, explicit) | 1595.228567130031 | 109.44447729422895
object (union, implicit) | 1657.752887106862 | 102.97668556491038
array (recursive) | 4131.662004622002 | 350.5502884433516
array (union, explicit) | 2308.2076875561543 | 107.85590277777777
array (union, implicit) | 1916.4041610962565 | 58.20385106877323
ultimate union | 1824.830271565495 | Failed

<p style="text-align: right"> Unit: kilobytes/sec </p>



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typia | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 176055.3065114244 | 155.31929816988952 | 4.13909025161464
object (recursive) | 110888.98135154255 | 806.0816160271709 | 9.65761975217311
object (union) | 23780.1195340106 | 130.21966475474684 | 5.989308531381905
array (hierarchical) | 149236.66283095843 | 22768.08507963366 | 158.27028636152417
array (recursive) | 87445.02516842193 | 8183.233302038627 | 101.27166782582046
array (union) | 28007.367155187916 | 1622.415609372106 | 40.982076176250935
ultimate union | 8338.633915241586 | 164.88191039681084 | 12.962324686819171

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify

![stringify benchmark](images/stringify.svg)

 Components | typia.stringify() | typia.assertStringify() | typia.isStringify() | fast-json-stringify | JSON.stringify 
------------|------------------|------------------------|--------------------|---------------------|----------------
object (simple) | 6425.42626943976 | 4544.166821475013 | 5742.906801954152 | 3559.5676172953085 | 788.1348020911128
object (hierarchical) | 4464.9288558328735 | 3839.6661603009256 | 3934.322417224534 | 3956.780216846211 | 1335.9067824377457
object (recursive) | 6008.387392936083 | 5459.794482046412 | 5767.898300464172 | 1312.2836935893256 | 1131.1364707456712
object (union) | 1761.7569840946167 | 1420.2171812191668 | 1611.54519795636 | 1791.7900378415789 | 929.7456522238559
array (simple) | 1784.1108446070311 | 1327.6247749252582 | 1486.3617510027943 | 2195.3119653854924 | 1447.6094101848378
array (hierarchical) | 3215.086403336718 | 2940.0503138847853 | 3071.060754133659 | 4439.585269516729 | 1575.8680636410209
array (recursive) | 2800.915401126292 | 2508.804574812854 | 2682.1153555131314 | 1447.752528222013 | 1448.024969420399
array (union) | 1874.477057358027 | 1561.2020238148882 | 1627.5969779608192 | 1592.294823379716 | 1819.206785697631

<p style="text-align: right"> Unit: kilobytes/sec </p>



## stringify (server)

![stringify (server) benchmark](images/stringify_po_server_pc.svg)

 Components | express (pure) | express (typia.stringify) | express (typia.isStringify) | express (typia.assertStringify) | fastify 
------------|----------------|--------------------------|----------------------------|--------------------------------|---------
object (simple) | 48868.48308650096 | 67993.77253060332 | 67863.05427430147 | 61668.116344990776 | 98320.42103645408
object (hierarchical) | 104701.8863681437 | 111734.42380377182 | 110628.18279098913 | 111128.03505652922 | 150097.0344646197
object (recursive) | 52746.562936452516 | 61331.168352535606 | 62050.26355891005 | 60365.05054417468 | 63870.69026593816
object (union) | 72581.11875311566 | 112616.45838784639 | 107485.45505028163 | 97893.75580463998 | 73366.25573394496
array (simple) | 97736.27263849432 | 101200.24320611542 | 91327.34842115096 | 83989.72219799661 | 91187.43148295794
array (hierarchical) | 93114.9302283773 | 135884.380533207 | 124789.4183536767 | 89192.25285613278 | 77910.01031795744
array (recursive) | 45745.03509142333 | 56000.24062032398 | 54679.08063679352 | 52371.725831008436 | 44703.92053736047
array (union) | 115421.29475197029 | 102563.95052550868 | 94150.84320644164 | 89576.30416118869 | 83319.00100198215

<p style="text-align: right"> Unit: megabytes/sec </p>



