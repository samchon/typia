import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ArrayUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.misc.createAssertPrune<ArrayUnion>());
