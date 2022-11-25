import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => TSON.assertClone(input),
    ArrayUnion.SPOILERS,
);