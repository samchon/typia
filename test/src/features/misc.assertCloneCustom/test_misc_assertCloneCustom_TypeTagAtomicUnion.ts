import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_assertCloneCustom_TypeTagAtomicUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.misc.assertClone<TypeTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
