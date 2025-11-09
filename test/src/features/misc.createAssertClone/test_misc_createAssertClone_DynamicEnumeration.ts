import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicEnumeration = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.misc.createAssertClone<DynamicEnumeration>());
