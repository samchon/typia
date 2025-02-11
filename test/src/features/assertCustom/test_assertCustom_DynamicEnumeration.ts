import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicEnumeration = _test_assert(CustomGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.assert<DynamicEnumeration>(input, (p) => new CustomGuardError(p)));
