import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_AtomicAlias = (): void => _test_misc_assertClone(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.misc.assertClone<AtomicAlias>(input, (p) => new CustomGuardError(p)));
