import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assert_TupleRestAtomic = _test_assert(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assert(input),
    TupleRestAtomic.SPOILERS,
);
