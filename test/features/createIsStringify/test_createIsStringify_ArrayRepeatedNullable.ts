import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createIsStringify_ArrayRepeatedNullable = _test_isStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createIsStringify<ArrayRepeatedNullable>(),
    ArrayRepeatedNullable.SPOILERS,
);
