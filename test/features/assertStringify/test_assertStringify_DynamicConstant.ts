import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertStringify(input),
    DynamicConstant.SPOILERS,
);
