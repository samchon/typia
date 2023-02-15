import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicTemplate = _test_assert(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assert(input),
    DynamicTemplate.SPOILERS,
);
