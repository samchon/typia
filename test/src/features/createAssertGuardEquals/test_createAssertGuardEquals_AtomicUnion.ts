import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_AtomicUnion = _test_assertGuardEquals(TypeGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)(typia.createAssertGuardEquals<AtomicUnion>());
