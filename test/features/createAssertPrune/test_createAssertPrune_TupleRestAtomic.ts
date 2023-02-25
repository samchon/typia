import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TupleRestAtomic = _test_assertPrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertPrune<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
