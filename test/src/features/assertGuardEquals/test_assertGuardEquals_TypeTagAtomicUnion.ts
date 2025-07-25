import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertGuardEquals_TypeTagAtomicUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.assertGuardEquals<TypeTagAtomicUnion>(input),
  );
