import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagArrayUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.misc.createAssertPrune<TypeTagArrayUnion>());
