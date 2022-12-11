import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TupleRestAtomic = _test_assert(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    TSON.createAssert<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
