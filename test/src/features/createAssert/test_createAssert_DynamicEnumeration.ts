import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicEnumeration = _test_assert(TypeGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.createAssert<DynamicEnumeration>());
