import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_array_union = _test_assert(
    "union arrray",
    ArrayUnion.generate,
    (input) => TSON.assertType(input),
    ArrayUnion.SPOILERS,
);
