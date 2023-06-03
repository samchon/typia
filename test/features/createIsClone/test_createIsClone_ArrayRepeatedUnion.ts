import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createIsClone_ArrayRepeatedUnion = _test_isClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsClone<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
