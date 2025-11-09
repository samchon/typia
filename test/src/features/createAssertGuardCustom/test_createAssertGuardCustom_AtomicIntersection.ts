import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_AtomicIntersection = (): void => _test_assertGuard(CustomGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.createAssertGuard<AtomicIntersection>((p) => new CustomGuardError(p)));
