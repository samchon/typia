import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayAny = _test_assertClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.assertClone(input),
    ArrayAny.SPOILERS,
);