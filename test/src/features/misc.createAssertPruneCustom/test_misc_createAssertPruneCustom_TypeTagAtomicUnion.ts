import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_createAssertPruneCustom_TypeTagAtomicUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.misc.createAssertPrune<TypeTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
