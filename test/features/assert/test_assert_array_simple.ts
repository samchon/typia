import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_array_simple = _test_assert(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.assert(input),
    ArraySimple.SPOILERS,
);
