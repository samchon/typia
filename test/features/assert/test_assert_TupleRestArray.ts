import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TupleRestArray = _test_assert(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assert(input),
    TupleRestArray.SPOILERS,
);
