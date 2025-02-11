import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_AtomicAlias = _test_assertGuard(TypeGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.createAssertGuard<AtomicAlias>());
