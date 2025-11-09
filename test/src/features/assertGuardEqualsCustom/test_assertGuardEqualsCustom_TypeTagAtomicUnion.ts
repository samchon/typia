import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertGuardEqualsCustom_TypeTagAtomicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.assertGuardEquals<TypeTagAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
