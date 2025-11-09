import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createAssertPruneCustom_AtomicUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.misc.createAssertPrune<AtomicUnion>((p) => new CustomGuardError(p)));
