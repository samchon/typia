import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayUnion = _test_assert(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => TSON.assert(input),
    ArrayUnion.SPOILERS,
);
