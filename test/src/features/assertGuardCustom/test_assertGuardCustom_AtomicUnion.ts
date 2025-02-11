import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_AtomicUnion = _test_assertGuard(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.assertGuard<AtomicUnion>(input, (p) => new CustomGuardError(p)));
