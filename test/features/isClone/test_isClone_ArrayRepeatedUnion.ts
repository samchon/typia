import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_isClone_ArrayRepeatedUnion = _test_isClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedUnion.SPOILERS,
);
