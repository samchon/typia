import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_isStringify_ArrayRepeatedUnionWithTuple = _test_isStringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.isStringify(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
