import typia from "typia";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicUnion = _test_assertStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertStringify(input),
    DynamicUnion.SPOILERS,
);
