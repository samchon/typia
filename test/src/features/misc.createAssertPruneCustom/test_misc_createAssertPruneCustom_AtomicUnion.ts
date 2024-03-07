import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_AtomicUnion =
  _test_misc_assertPrune(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.misc.createAssertPrune<AtomicUnion>((p) => new CustomGuardError(p)));
