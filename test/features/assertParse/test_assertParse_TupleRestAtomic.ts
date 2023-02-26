import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertParse_TupleRestAtomic = _test_assertParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertParse<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
