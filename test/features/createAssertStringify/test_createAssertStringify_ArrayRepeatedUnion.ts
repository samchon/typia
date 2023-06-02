import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayRepeatedUnion = _test_assertStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createAssertStringify<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
