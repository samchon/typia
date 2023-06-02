import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertStringify(input),
    DynamicTemplate.SPOILERS,
);
