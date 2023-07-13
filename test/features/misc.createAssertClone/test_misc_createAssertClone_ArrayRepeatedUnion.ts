import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_assertClone_ArrayRepeatedUnion = _test_misc_assertClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.misc.createAssertClone<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
