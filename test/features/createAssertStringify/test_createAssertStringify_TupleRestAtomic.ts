import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertStringify_TupleRestAtomic = _test_assertStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertStringify<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
