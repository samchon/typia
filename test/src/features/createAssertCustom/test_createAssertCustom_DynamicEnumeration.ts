import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicEnumeration = (): void => _test_assert(CustomGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.createAssert<DynamicEnumeration>((p) => new CustomGuardError(p)));
