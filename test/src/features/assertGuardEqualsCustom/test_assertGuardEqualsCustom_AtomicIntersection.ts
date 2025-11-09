import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_AtomicIntersection = (): void => _test_assertGuardEquals(CustomGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.assertGuardEquals<AtomicIntersection>(input, (p) => new CustomGuardError(p)));
