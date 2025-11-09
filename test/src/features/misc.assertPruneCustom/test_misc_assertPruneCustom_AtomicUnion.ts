import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_AtomicUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.misc.assertPrune<AtomicUnion>(input, (p) => new CustomGuardError(p)));
