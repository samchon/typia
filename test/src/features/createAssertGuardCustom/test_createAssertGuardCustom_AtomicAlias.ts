import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_AtomicAlias = _test_assertGuard(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.createAssertGuard<AtomicAlias>((p) => new CustomGuardError(p)));
