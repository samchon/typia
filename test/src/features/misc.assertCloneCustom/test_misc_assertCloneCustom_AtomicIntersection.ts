import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_AtomicIntersection = (): void => _test_misc_assertClone(CustomGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.misc.assertClone<AtomicIntersection>(input, (p) => new CustomGuardError(p)));
