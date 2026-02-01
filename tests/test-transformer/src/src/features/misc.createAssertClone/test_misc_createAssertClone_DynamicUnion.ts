import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicUnion = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.misc.createAssertClone<DynamicUnion>());
