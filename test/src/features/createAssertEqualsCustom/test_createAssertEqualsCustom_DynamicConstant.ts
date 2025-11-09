import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_DynamicConstant = (): void => _test_assertEquals(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssertEquals<DynamicConstant>((p) => new CustomGuardError(p)));
