import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_AtomicUnion = _test_assertGuard(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.createAssertGuard<AtomicUnion>((p) => new CustomGuardError(p)));
