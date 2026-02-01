import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_clone_DynamicConstant = (): void => _test_misc_clone(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.misc.clone<DynamicConstant>(input));
