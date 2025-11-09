import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_AtomicIntersection = (): void => _test_assertGuardEquals(CustomGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.createAssertGuardEquals<AtomicIntersection>((p) => new CustomGuardError(p)));
