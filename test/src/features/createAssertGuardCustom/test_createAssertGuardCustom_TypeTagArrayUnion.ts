import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagArrayUnion = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.createAssertGuard<TypeTagArrayUnion>((p) => new CustomGuardError(p)));
