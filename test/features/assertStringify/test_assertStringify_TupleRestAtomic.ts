import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertStringify_TupleRestAtomic = _test_assertStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertStringify<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
