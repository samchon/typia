import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_assertStringify_ArrayRepeatedUnion = _test_assertStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assertStringify<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
