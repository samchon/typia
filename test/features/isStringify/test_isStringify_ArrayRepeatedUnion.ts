import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_isStringify_ArrayRepeatedUnion = _test_isStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.isStringify<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
