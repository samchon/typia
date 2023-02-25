import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertStringify(input),
    ArrayUnion.SPOILERS,
);
