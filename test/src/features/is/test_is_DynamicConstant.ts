import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_is_DynamicConstant = (): void => _test_is(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.is<DynamicConstant>(input));
