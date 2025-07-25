import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_assertGuard_TypeTagAtomicUnion = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input) => typia.assertGuard<TypeTagAtomicUnion>(input));
