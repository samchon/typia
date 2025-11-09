import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_DynamicConstant = (): void => _test_assertEquals(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.assertEquals<DynamicConstant>(input, (p) => new CustomGuardError(p)));
