import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_AtomicSimple = (): void => _test_misc_assertPrune(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.misc.assertPrune<AtomicSimple>(input, (p) => new CustomGuardError(p)));
