import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
