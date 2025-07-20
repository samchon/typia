import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_assertPruneCustom_TypeTagAtomicUnion = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.misc.assertPrune<TypeTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
