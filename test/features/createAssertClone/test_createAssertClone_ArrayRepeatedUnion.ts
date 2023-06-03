import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssertClone_ArrayRepeatedUnion = _test_assertClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createAssertClone<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
