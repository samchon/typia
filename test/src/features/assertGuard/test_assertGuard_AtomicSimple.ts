import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_assertGuard_AtomicSimple = _test_assertGuard(TypeGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.assertGuard<AtomicSimple>(input));
