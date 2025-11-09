import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validateEquals_DynamicConstant = (): void => _test_validateEquals(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.validateEquals<DynamicConstant>(input));
