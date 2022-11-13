# Benchmark of `typescript-json`
> - CPU: AMD Ryzen 9 5900HX with Radeon Graphics
> - Memory: 64,928 MB
> - OS: win32
> - TypeScript-JSON version: 3.3.28


## is

![is benchmark](images/is.svg)

 Components | typescript-json | typebox | ajv | io-ts | zod | class-validator 
------------|-----------------|---------|-----|-------|-----|-----------------
object (simple) | 2099798.6577181206 | 1253654.3026706232 | 519673.7793851718 | 37327.53938077132 | 4192.300607846749 | 146.35904830569575
object (hierarchical) | 203637.06563706562 | 210788.73764683944 | 53476.38279192273 | 9767.65035487486 | 470.92709270927094 | 49.9637943519189
object (recursive) | 113549.46027251815 | 94556.35757912272 | 46329.15921288014 | 5886.891385767791 | 76.37906647807638 | 32.647004266369876
object (union, explicit) | 26379.193366000753 | 14771.769019248395 | 9332.632685233842 | 3313.743383829166 | 38.31276478172776 | 89.99628114540721
object (union, implicit) | 22959.2523364486 | Failed | Failed | Failed | Failed | Failed
array (recursive) | 9648.534021759175 | 7070.315206096294 | 2466.423357664233 | 541.9067087901876 | 10.44971076693413 | 2.9745305818925454
array (union, explicit) | 4138.057646410868 | 1938.5412810070343 | 871.346118041333 | 385.8998144712431 | 3.7467216185837393 | 30.534351145038165
array (union, implicit) | 1039.8537477148082 | Failed | Failed | Failed | Failed | Failed
ultimate union | 681.9839533187454 | Failed | Failed | Failed | Failed | Failed



## assert (iterate)

![assert (iterate) benchmark](images/assert_po_iterate_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 385703.0786350148 | 3723.8356164383563 | 20144.297181258167 | 3764.695210449928 | 154.30157261794633
object (hierarchical) | 68925.72658772874 | 940.8612086490482 | 4322.317118455254 | 442.17321140398064 | 51.28676470588235
object (recursive) | 51337.072649572656 | 413.58024691358025 | 2031.5941505686947 | 80.51470588235293 | 32.414307004470935
object (union, explicit) | 7517.499564687445 | 164.55223880597015 | 1310.8504398826979 | 38.39638622247318 | 90.92609915809169
object (union, implicit) | 7491.613865076408 | Failed | Failed | Failed | Failed
array (recursive) | 3034.065934065934 | 43.22604790419161 | 198.53747714808046 | 10.206010206010205 | Failed
array (union, explicit) | 2394.4186046511627 | 21.352313167259783 | 94.15281150756584 | 3.328402366863905 | 30.7663621107589
array (union, implicit) | 1182.3759063022867 | Failed | Failed | Failed | Failed
ultimate union | 277.55474452554745 | Failed | Failed | Failed | Failed



## assert (throw)

![assert (throw) benchmark](images/assert_po_throw_pc.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 53399.12280701754 | 3296.296296296296 | 13597.470238095239 | Failed | 168.47622613253463
object (hierarchical) | 34409.36502305783 | 944.7943682845499 | 3889.494729189386 | 450.9582863585118 | 55.48363232846311
object (recursive) | 5394.411036434383 | Failed | Failed | Failed | 73.75991148810621
object (union, explicit) | 6688.358640636298 | 169.8754246885617 | 1287.2379551305628 | 36.825630638924686 | 93.73828271466067
object (union, implicit) | 5494.10029498525 | Failed | Failed | Failed | Failed
array (recursive) | 1990.0497512437812 | 53.86963548213324 | 166.05166051660515 | 16.572754391779913 | 12.281994595922379
array (union, explicit) | 524.0501590866554 | 18.027762754642147 | 74.07407407407408 | 12.310722639418934 | 36.15982643283313
array (union, implicit) | 201.1336624611446 | Failed | Failed | Failed | Failed
ultimate union | 274.82594356907293 | Failed | Failed | Failed | Failed



## validate

![validate benchmark](images/validate.svg)

 Components | typescript-json | typebox | io-ts | zod | class-validator 
------------|-----------------|---------|-------|-----|-----------------
object (simple) | 120354.66377440345 | 3465.5559715462377 | 14693.899782135075 | 3766.7766776677668 | 152.12199154877825
object (hierarchical) | 35593.05993690851 | 902.4784482758621 | 4062.298603651987 | 457.77027027027026 | 49.43578721117679
object (recursive) | 31692.495309568476 | 418.8403077500469 | 1900.7915567282323 | 82.78208278208278 | 30.97826086956522
object (union, explicit) | 6211.959521619136 | 161.8705035971223 | 1241.5224913494808 | 38.57061826432218 | 88.41186101509913
object (union, implicit) | 4965.272727272727 | 155.51839464882943 | 371.69117647058823 | 22.079637667484427 | Failed
array (recursive) | 1785.056848944234 | 42.50094446543257 | 205.44835414301932 | 10.246679316888047 | 2.8084628346751543
array (union, explicit) | 2174.7272727272725 | 21.146885120975426 | 92.24890829694323 | 3.3327161636733935 | 30.990592141671275
array (union, implicit) | 460.5405405405405 | 14.606741573033709 | 67.27714445897963 | 2.2103518143304477 | Failed
ultimate union | 195.99858356940513 | Failed | Failed | Failed | Failed



## equals

![equals benchmark](images/equals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 33040.79065588499 | 70974.90656700481
object (hierarchical) | 10599.41089837997 | 20421.99534300555
object (recursive) | 8393.037619314991 | 13325.309992706054
object (union, explicit) | 3475.1131221719456 | 3868.602540834846
object (union, implicit) | 2288.682745825603 | 2592.271578187071
array (recursive) | 653.6530953708868 | 1236.4703724087324
array (union, explicit) | 893.858845096242 | 798.2599238716693
array (union, implicit) | 334.68186833394634 | 503.1537213912416
ultimate union | 323.98523985239854 | Failed



## assertEquals (iterate)

![assertEquals (iterate) benchmark](images/assertEquals_po_iterate_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 36661.812886785585 | 2845.8341205365577
object (hierarchical) | 9201.375976199331 | 786.9678864824496
object (recursive) | 7372.563442442075 | 352.4590163934426
object (union, explicit) | 2798.1186685962375 | 123.34883720930233
object (union, implicit) | 2128.5946825827455 | 89.24872905290906
array (recursive) | 610.0018318373329 | 37.764638565706655
array (union, explicit) | 477.98857984895926 | 17.510826586330257
array (union, implicit) | 223.59913793103448 | 7.860752386299831
ultimate union | 218.05199560600516 | Failed



## assertEquals (throw)

![assertEquals (throw) benchmark](images/assertEquals_po_throw_pc.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 21276.99180938198 | 2640.3249630723776
object (hierarchical) | 7444.852941176469 | 757.4358026972104
object (recursive) | 6022.769004774146 | 355.5389221556886
object (union, explicit) | 2762.8407194511406 | 127.69062385990514
object (union, implicit) | 1961.862852951962 | 92.26794611551948
array (recursive) | 611.7908787541712 | 36.710719530102786
array (union, explicit) | 256.64527956003667 | 17.75568181818182
array (union, implicit) | 126.7656646142702 | 15.693659761456372
ultimate union | 220.34520749173706 | Failed



## validateEquals

![validateEquals benchmark](images/validateEquals.svg)

 Components | typescript-json | typebox 
------------|-----------------|---------
object (simple) | 20445.183321351546 | 2807.8570098678083
object (hierarchical) | 7612.16457960644 | 783.2706766917292
object (recursive) | 5218.441273326015 | 357.63436860702996
object (union, explicit) | 1831.6015764958795 | 122.4944320712695
object (union, implicit) | 1396.5423111919927 | 87.11839166046165
array (recursive) | 418.86166881561974 | 37.19244707228685
array (union, explicit) | 402.06746463547336 | 17.637018774890954
array (union, implicit) | 206.4516129032258 | 7.8416728902165795
ultimate union | 143.39019189765457 | Failed



## optimizer

![optimizer benchmark](images/optimizer.svg)

 Components | typescript-json | typebox | ajv 
------------|-----------------|---------|-----
object (hierarchical) | 205316.65449233016 | 199.8558298792575 | 5.595667870036101
object (recursive) | 95429.59558823529 | 879.894578313253 | 10.245151847786316
object (union) | 22315.29068707855 | 104.33654558932542 | 4.993526909561679
array (hierarchical) | 11616.95959412937 | 1001.8429782528566 | 7.36105999263894
array (recursive) | 8526.849417949681 | 863.7546468401487 | 10.76666047893076
array (union) | 4278.694604116447 | 260.4337525059231 | 7.072399032198027
ultimate union | 648.9707475622969 | 12.567324955116696 | 0.9152480322167307



## stringify

![stringify benchmark](images/stringify.svg)

 Components | TSON.stringify() | TSON.assertStringify() | TSON.isStringify() | JSON.stringify() | fast-json-stringify 
------------|------------------|------------------------|--------------------|------------------|---------------------
object (simple) | 52825.56640265242 | 45510.161836657884 | 50949.021056520134 | 6693.964716805943 | 35095.12285927029
object (hierarchical) | 5754.912663755458 | 5217.751034223393 | 5546.01571268238 | 1742.089210827297 | 6967.522935779816
object (recursive) | 5838.40579710145 | 5508.227029025698 | 5909.22619047619 | 1282.0560400816478 | 1267.0454545454545
object (union) | 1674.8750231438623 | 1303.2801905809054 | 1506.1133753241943 | 695.5705705705706 | 1493.0347381414213
array (hierarchical) | 92.32158988256549 | 86.24192059095107 | 89.50117053844768 | 41.613433108231426 | 119.18711094837056
array (recursive) | 285.29248938918624 | 248.4805148373257 | 275.29761904761904 | 130.31371821050678 | 131.47036759189797
array (union) | 364.51961137099676 | 309.9128540305011 | 336.1864869786924 | 273.5849056603774 | 245.87787642688892



