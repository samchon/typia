import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_assert_AtomicUnion = _test_assert(TypeGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.assert<AtomicUnion>(input));
