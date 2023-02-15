import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicUndefined = _test_assertStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.assertStringify(input),
    DynamicUndefined.SPOILERS,
);
