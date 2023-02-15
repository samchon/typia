import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicConstant = _test_equals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.equals(input),
);
