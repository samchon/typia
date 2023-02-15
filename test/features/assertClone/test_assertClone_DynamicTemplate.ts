import typia from "typia";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicTemplate = _test_assertClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertClone(input),
    DynamicTemplate.SPOILERS,
);
