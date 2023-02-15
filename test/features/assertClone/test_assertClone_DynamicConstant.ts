import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicConstant = _test_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertClone(input),
    DynamicConstant.SPOILERS,
);
