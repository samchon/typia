import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_DynamicConstant = _test_assertEquals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertEquals(input),
);
