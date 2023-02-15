import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicConstant = _test_assert(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assert(input),
    DynamicConstant.SPOILERS,
);
