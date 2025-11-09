import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagMatrix = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.misc.createAssertPrune<TypeTagMatrix>());
