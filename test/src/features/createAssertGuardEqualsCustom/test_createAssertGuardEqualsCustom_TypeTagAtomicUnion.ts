import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_createAssertGuardEqualsCustom_TypeTagAtomicUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    typia.createAssertGuardEquals<TypeTagAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
