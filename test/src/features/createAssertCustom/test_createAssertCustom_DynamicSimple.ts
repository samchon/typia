import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicSimple = (): void => _test_assert(CustomGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.createAssert<DynamicSimple>((p) => new CustomGuardError(p)));
