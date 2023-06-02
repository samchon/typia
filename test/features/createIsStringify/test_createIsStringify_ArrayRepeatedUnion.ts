import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createIsStringify_ArrayRepeatedUnion = _test_isStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsStringify<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
