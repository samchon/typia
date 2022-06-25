
> typescript-json@3.0.1-dev.20220623 benchmark
> node benchmark/index.js

## assert
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 17762.57183908046 | 19587.58314855876
object (recursive) | 27081.360390830516 | 21444.1306266549
object (union, explicit) | 3850.643625462881 | Failed
object (union, implicit) | 3599.821109123435 | 1821.263755768548
array (simple) | 3779.3983591613487 | 2680.650235972732
array (recursive) | 1283.9327670341586 | 1477.8132765353212
array (recursive, union) | 2227.119844220216 | 192.45351146416323



## is
 Components | typescript-json | typescript-is 
------------|-----------------|---------------
object (hierarchical) | 70538.1332343663 | 40536.18480418697
object (recursive) | 62805.90638930163 | 42444.38295517432
object (union, explicit) | 11491.055769905297 | Failed
object (union, implicit) | 14889.516413695728 | 6200.18018018018
array (simple) | 42064.946311049534 | 21403.26633165829
array (recursive) | 5596.744358120607 | 4343.402520385471
array (recursive, union) | 5554.009520322226 | 919.2881538738092



## stringify
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 32103.674063295744 | 27299.44444444444 | 5722.315592903828 | 53498.34497977198
object (hierarchical) | 4097.183588317107 | Failed | 1447.8883451150987 | 5030.952380952381
object (recursive) | 5092.417061611374 | 1164.8270787343636 | 1149.61915125136 | 5594.426661645642
object (union, implicit) | 1824.0657965313785 | Failed | 850.9734513274336 | 1957.400327689787
object (union, explicit) | 1691.1974340698503 | Failed | 706.0338484179543 | 1669.4379179468642
array (hierarchical) | 67.97172376291462 | Failed | 34.394904458598724 | 64.31427081522683
array (recursive) | 231.06336489439184 | 126.40088186661768 | 129.88226499719678 | 234.61178671655753
array (recursive, union) | 276.7137998926078 | Failed | 241.4106526086166 | 331.93936225823313



## optimizer
 Components | typescript-json | fast-json-stringify | JSON.stringify() | ideal 
------------|-----------------|---------------------|------------------|-------
object (simple) | 32408.749530604582 | 5.52791597567717 | 5847.5920679886685 | 53816.52739090065
object (hierarchical) | 4369.521731223859 | Failed | 1447.491880187658 | 5102.297998517421
object (recursive) | 4956.358164033108 | 51.38862648781409 | 1154.8469855231813 | 5447.358490566038
object (union, implicit) | 1779.978393950306 | Failed | 890.4587155963302 | 2000
object (union, explicit) | 1620.633777457688 | Failed | 846.8148701662619 | 1613.5580931665759
array (hierarchical) | 283.3091962346126 | Failed | 139.85239852398524 | 290.47976011994
array (recursive) | 235.0642099385818 | 38.893044128646224 | 126.03954906671596 | 227.67691737680624
array (recursive, union) | 279.14614121510675 | Failed | 243.77289377289378 | 338.6195710938908



