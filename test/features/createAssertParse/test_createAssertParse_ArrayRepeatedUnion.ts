import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssertParse_ArrayRepeatedUnion = _test_assertParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createAssertParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
