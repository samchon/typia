import typia from "typia";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicArray = _test_assertStringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.assertStringify(input),
    DynamicArray.SPOILERS,
);
