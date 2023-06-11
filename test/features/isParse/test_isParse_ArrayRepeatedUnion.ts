import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_isParse_ArrayRepeatedUnion = _test_isParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.isParse<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
