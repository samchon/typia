import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_AtomicSimple = (): void => _test_misc_assertPrune(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.misc.createAssertPrune<AtomicSimple>((p) => new CustomGuardError(p)));
