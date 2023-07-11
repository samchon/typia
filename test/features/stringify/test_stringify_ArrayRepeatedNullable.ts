import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_stringify_ArrayRepeatedNullable = _test_stringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.stringify(input),
);
