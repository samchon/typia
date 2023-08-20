import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assert_TupleRestArray = _test_assert(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assert<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
