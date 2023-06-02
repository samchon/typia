import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ArrayRepeatedUnionWithTuple = _test_assertStringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.assertStringify(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
