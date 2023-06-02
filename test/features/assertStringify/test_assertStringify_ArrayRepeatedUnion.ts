import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ArrayRepeatedUnion = _test_assertStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.assertStringify(input),
    ArrayRepeatedUnion.SPOILERS,
);
