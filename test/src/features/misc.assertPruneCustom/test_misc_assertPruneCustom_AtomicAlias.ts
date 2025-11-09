import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_AtomicAlias = (): void => _test_misc_assertPrune(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.misc.assertPrune<AtomicAlias>(input, (p) => new CustomGuardError(p)));
