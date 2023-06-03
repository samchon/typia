import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_assertClone_ArrayRepeatedUnion = _test_assertClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedUnion.SPOILERS,
);
