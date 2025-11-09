import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagArrayUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.misc.createAssertPrune<TypeTagArrayUnion>((p) => new CustomGuardError(p)));
