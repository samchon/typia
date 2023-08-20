import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_isStringify_TupleRestAtomic = _test_isStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isStringify<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
