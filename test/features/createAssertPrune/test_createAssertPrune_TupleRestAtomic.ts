import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertPrune_TupleRestAtomic = _test_assertPrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertPrune<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
