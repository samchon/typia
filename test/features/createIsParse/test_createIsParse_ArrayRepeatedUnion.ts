import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createIsParse_ArrayRepeatedUnion = _test_isParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
