import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TupleRestAtomic = _test_assertStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    TSON.createAssertStringify<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
