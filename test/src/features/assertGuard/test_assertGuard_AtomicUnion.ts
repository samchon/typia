import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_AtomicUnion = _test_assertGuard(TypeGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.assertGuard<AtomicUnion>(input));
