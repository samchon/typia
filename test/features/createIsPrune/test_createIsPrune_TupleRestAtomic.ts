import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TupleRestAtomic = _test_isPrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createIsPrune<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
