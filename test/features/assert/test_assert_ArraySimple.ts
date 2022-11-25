import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArraySimple = _test_assert(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.assert(input),
    ArraySimple.SPOILERS,
);